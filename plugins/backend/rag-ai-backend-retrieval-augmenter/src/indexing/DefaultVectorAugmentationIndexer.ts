/*
 * Copyright 2024 Larder Software Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TokenManager } from '@backstage/backend-common';
import { CatalogApi } from '@backstage/catalog-client';
import { Logger } from 'winston';
import { SplitterOptions } from './types';
import { Embeddings } from '@langchain/core/embeddings';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { Entity, stringifyEntityRef } from '@backstage/catalog-model';
import {
  AugmentationIndexer,
  EmbeddingDoc,
  EmbeddingsSource,
  EntityFilterShape,
  KozmoVectorStore,
} from '@kozmoai/rag-ai-node';

export class DefaultVectorAugmentationIndexer implements AugmentationIndexer {
  private readonly _vectorStore: KozmoVectorStore;
  private readonly catalogApi: CatalogApi;
  private readonly logger: Logger;
  private readonly tokenManager: TokenManager;

  private readonly splitterOptions?: SplitterOptions;

  protected constructor({
    vectorStore,
    catalogApi,
    logger,
    tokenManager,
    embeddings,
    splitterOptions,
  }: {
    vectorStore: KozmoVectorStore;
    catalogApi: CatalogApi;
    logger: Logger;
    tokenManager: TokenManager;
    embeddings: Embeddings;
    splitterOptions?: SplitterOptions;
  }) {
    vectorStore.connectEmbeddings(embeddings);
    this._vectorStore = vectorStore;
    this.splitterOptions = splitterOptions;
    this.catalogApi = catalogApi;
    this.logger = logger;
    this.tokenManager = tokenManager;
  }

  get vectorStore() {
    return this._vectorStore;
  }

  /**
   * Returns the splitter object. Default implementation is using a naive RecursiveCharacterTextSplitter
   * which is likely not the best candidate for structured data splitting.
   *
   * It is recommended that this method is overwritten with more applicable implementation
   *
   * @returns {RecursiveCharacterTextSplitter} The splitter object.
   */
  protected getSplitter() {
    // Defaults to 1000 chars, 200 overlap
    return new RecursiveCharacterTextSplitter({
      chunkSize: this.splitterOptions?.chunkSize,
      chunkOverlap: this.splitterOptions?.chunkOverlap,
    });
  }

  protected async constructCatalogEmbeddingDocuments(
    entities: Entity[],
    source: EmbeddingsSource,
  ): Promise<EmbeddingDoc[]> {
    const splitter = this.getSplitter();
    let docs: EmbeddingDoc[] = [];
    for (const entity of entities) {
      const splits = await splitter.splitText(JSON.stringify(entity));
      docs = docs.concat(
        splits.map((text: string, idx: number) => ({
          content: text,
          metadata: {
            splitId: idx.toString(),
            source,
            entityRef: stringifyEntityRef(entity),
            kind: entity.kind,
          },
        })),
      );
    }

    return docs;
  }

  protected async getDocuments(
    source: EmbeddingsSource,
    filter?: EntityFilterShape,
  ) {
    switch (source) {
      case 'catalog': {
        const { token } = await this.tokenManager.getToken();

        const entitiesResponse = await this.catalogApi.getEntities(
          { filter },
          { token },
        );

        const constructCatalogEmbeddingDocuments =
          await this.constructCatalogEmbeddingDocuments(
            entitiesResponse.items,
            source,
          );
        this.logger.info(
          `Constructed ${constructCatalogEmbeddingDocuments.length} embedding documents for ${entitiesResponse.items.length} catalog items.`,
        );
        return constructCatalogEmbeddingDocuments;
      }
      default:
        throw new Error(
          `Attempting to create embeddings for a source not implemented yet: ${source} `,
        );
    }
  }

  async createEmbeddings(
    source: EmbeddingsSource,
    filter: EntityFilterShape,
  ): Promise<number> {
    await this.deleteEmbeddings(source, filter);
    const documents = await this.getDocuments(source, filter);
    await this._vectorStore.addDocuments(documents);
    return documents.length;
  }

  async deleteEmbeddings(
    source: EmbeddingsSource,
    filter: EntityFilterShape,
  ): Promise<void> {
    const { token } = await this.tokenManager.getToken();

    const entities = (
      await this.catalogApi.getEntities({ filter }, { token })
    ).items.map(stringifyEntityRef);

    for (const entityRef of entities) {
      await this._vectorStore.deleteDocuments({
        filter: { source, entityRef },
      });
    }
  }
}
