import { TokenManager } from '@backstage/backend-common';
import { Logger } from 'winston';
import { AugmentationIndexer, KozmoVectorStore } from '@kozmoai/rag-ai-node';
import {
  BedrockConfig,
  KozmoBedrockAugmenter,
} from './KozmoBedrockAugmenter';
import { CatalogApi } from '@backstage/catalog-client';
import { PluginEndpointDiscovery } from '@backstage/backend-common';
import { AwsCredentialIdentity, Provider } from '@aws-sdk/types';
import { Config } from '@backstage/config';
import { SplitterOptions } from '@kozmoai/rag-ai-backend-retrieval-augmenter';

export interface KozmoBedrockEmbeddingsConfig {
  logger: Logger;
  tokenManager: TokenManager;
  vectorStore: KozmoVectorStore;
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
  tokenManager,
  vectorStore,
  catalogApi,
  discovery,
  config,
  options,
}: KozmoBedrockEmbeddingsConfig): Promise<AugmentationIndexer> {
  logger.info('Initializing Kozmo AWS Bedrock Embeddings');
  const bedrockConfig = config.get<BedrockConfig>('ai.embeddings.bedrock');
  const embeddingsOptions = config.getOptionalConfig('ai.embeddings');
  const splitterOptions: SplitterOptions = {};
  if (embeddingsOptions) {
    splitterOptions.chunkSize =
      embeddingsOptions.getOptionalNumber('chunkSize');
    splitterOptions.chunkOverlap =
      embeddingsOptions.getOptionalNumber('chunkOverlap');
  }
  return new KozmoBedrockAugmenter({
    vectorStore,
    catalogApi,
    discovery,
    logger: logger.child({ label: 'kozmo-bedrock-embedder' }),
    tokenManager,
    options,
    bedrockConfig,
    splitterOptions,
  });
}
