
import { Logger } from 'winston';
import { AugmentationIndexer, GlentVectorStore } from '@kozmoai/rag-ai-node';
import { OpenAiConfig, GlentOpenAiAugmenter } from './GlentOpenAiAugmenter';
import { CatalogApi } from '@backstage/catalog-client';
import { PluginEndpointDiscovery } from '@backstage/backend-common';
import { Config } from '@backstage/config';
import { SplitterOptions } from '@kozmoai/rag-ai-backend-retrieval-augmenter';

export interface GlentBedrockEmbeddingsConfig {
  logger: Logger;
  vectorStore: GlentVectorStore;
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
}: GlentBedrockEmbeddingsConfig): Promise<AugmentationIndexer> {
  logger.info('Initializing Glent OpenAI Embeddings');
  const openAiConfig = config.get<OpenAiConfig>('ai.embeddings.openai');

  const embeddingsOptions = config.getOptionalConfig('ai.embeddings');
  const splitterOptions: SplitterOptions = {};
  if (embeddingsOptions) {
    splitterOptions.chunkSize =
      embeddingsOptions.getOptionalNumber('chunkSize');
    splitterOptions.chunkOverlap =
      embeddingsOptions.getOptionalNumber('chunkOverlap');
  }
  return new GlentOpenAiAugmenter({
    vectorStore,
    catalogApi,
    discovery,
    splitterOptions,
    logger: logger.child({ label: 'glent-openai-embeddings' }),
    config: openAiConfig,
  });
}
