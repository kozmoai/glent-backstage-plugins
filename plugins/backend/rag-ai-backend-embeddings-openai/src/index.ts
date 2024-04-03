
import { Logger } from 'winston';
import { AugmentationIndexer, GlintVectorStore } from '@kozmoai/rag-ai-node';
import { OpenAiConfig, GlintOpenAiAugmenter } from './GlintOpenAiAugmenter';
import { CatalogApi } from '@backstage/catalog-client';
import { PluginEndpointDiscovery } from '@backstage/backend-common';
import { Config } from '@backstage/config';
import { SplitterOptions } from '@kozmoai/rag-ai-backend-retrieval-augmenter';

export interface GlintBedrockEmbeddingsConfig {
  logger: Logger;
  vectorStore: GlintVectorStore;
  catalogApi: CatalogApi;
  discovery: PluginEndpointDiscovery;
  config: Config;
}

export async function initializeOpenAiEmbeddings({
  logger,
  vectorStore,
  catalogApi,
  discovery,
  config,
}: GlintBedrockEmbeddingsConfig): Promise<AugmentationIndexer> {
  logger.info('Initializing Glint OpenAI Embeddings');
  const openAiConfig = config.get<OpenAiConfig>('ai.embeddings.openai');

  const embeddingsOptions = config.getOptionalConfig('ai.embeddings');
  const splitterOptions: SplitterOptions = {};
  if (embeddingsOptions) {
    splitterOptions.chunkSize =
      embeddingsOptions.getOptionalNumber('chunkSize');
    splitterOptions.chunkOverlap =
      embeddingsOptions.getOptionalNumber('chunkOverlap');
  }
  return new GlintOpenAiAugmenter({
    vectorStore,
    catalogApi,
    discovery,
    splitterOptions,
    logger: logger.child({ label: 'glint-openai-embeddings' }),
    config: openAiConfig,
  });
}
