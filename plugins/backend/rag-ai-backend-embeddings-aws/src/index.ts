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

import { Logger } from 'winston';
import { AugmentationIndexer, GlentVectorStore } from '@kozmoai/rag-ai-node';
import {
  BedrockConfig,
  GlentBedrockAugmenter,
} from './GlentBedrockAugmenter';
import { CatalogApi } from '@backstage/catalog-client';
import { PluginEndpointDiscovery } from '@backstage/backend-common';
import { AwsCredentialIdentity, Provider } from '@aws-sdk/types';
import { Config } from '@backstage/config';
import { SplitterOptions } from '@kozmoai/rag-ai-backend-retrieval-augmenter';

export interface GlentBedrockEmbeddingsConfig {
  logger: Logger;
  vectorStore: GlentVectorStore;
  catalogApi: CatalogApi;
  discovery: PluginEndpointDiscovery;
  config: Config;
  options: {
    credentials: AwsCredentialIdentity | Provider<AwsCredentialIdentity>;
    region: string;
  };
}

export async function initializeBedrockEmbeddings({
  logger,
  vectorStore,
  catalogApi,
  discovery,
  config,
  options,
}: GlentBedrockEmbeddingsConfig): Promise<AugmentationIndexer> {
  logger.info('Initializing Glent AWS Bedrock Embeddings');
  const bedrockConfig = config.get<BedrockConfig>('ai.embeddings.bedrock');
  const embeddingsOptions = config.getOptionalConfig('ai.embeddings');
  const splitterOptions: SplitterOptions = {};
  if (embeddingsOptions) {
    splitterOptions.chunkSize =
      embeddingsOptions.getOptionalNumber('chunkSize');
    splitterOptions.chunkOverlap =
      embeddingsOptions.getOptionalNumber('chunkOverlap');
  }
  return new GlentBedrockAugmenter({
    vectorStore,
    catalogApi,
    discovery,
    logger: logger.child({ label: 'glent-bedrock-embedder' }),
    options,
    bedrockConfig,
    splitterOptions,
  });
}
