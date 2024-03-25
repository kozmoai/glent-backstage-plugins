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
