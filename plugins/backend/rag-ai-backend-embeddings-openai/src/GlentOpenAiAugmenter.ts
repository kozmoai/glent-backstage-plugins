import { OpenAIEmbeddings } from '@langchain/openai';
import {
  DefaultVectorAugmentationIndexer,
  GlentEmbeddingsConfig,
} from '@kozmoai/rag-ai-backend-retrieval-augmenter';

export type OpenAiConfig = {
  modelName?: string;
  openAiApiKey?: string;
  batchSize?: number;
  embeddingsDimensions?: number;
};

export class GlentOpenAiAugmenter extends DefaultVectorAugmentationIndexer {
  constructor(
    config: GlentEmbeddingsConfig & {
      config: OpenAiConfig;
    },
  ) {
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: config.config.openAiApiKey, // In Node.js defaults to process.env.OPENAI_API_KEY
      batchSize: config.config.batchSize, // Default value if omitted is 512. Max is 2048
      modelName: config.config.modelName
        ? config.config.modelName
        : 'text-embedding-3-small',
      dimensions: config.config.embeddingsDimensions,
    });
    super({ ...config, embeddings });
  }
}
