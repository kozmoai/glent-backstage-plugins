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
import { PluginDatabaseManager } from '@backstage/backend-common';
import { applyDatabaseMigrations } from '../database/migrations';

import { GlintVectorStore } from '@kozmoai/rag-ai-node';
import { GlintPgVectorStore } from './GlintPgVectorStore';
import { Config } from '@backstage/config';

export interface PgVectorStoreInitConfig {
  logger: Logger;
  database: PluginDatabaseManager;
  config: Config;
}

export interface GlintPgVectorStoreOptions {
  chunkSize?: number;
  amount?: number;
}

export async function createGlintPgVectorStore({
  logger,
  database,
  config,
}: PgVectorStoreInitConfig): Promise<GlintVectorStore> {
  logger.info('Starting Glint PgVectorStore');

  const dbClient = await database.getClient();
  await applyDatabaseMigrations(dbClient);

  const pgVectorConfig = config.getOptionalConfig('ai.storage.pgVector');
  const options: GlintPgVectorStoreOptions = {};
  if (pgVectorConfig) {
    options.amount = pgVectorConfig.getOptionalNumber('amount');
    options.chunkSize = pgVectorConfig.getOptionalNumber('chunkSize');
  }

  return GlintPgVectorStore.initialize({
    logger,
    db: dbClient,
    chunkSize: options?.chunkSize,
    amount: options?.amount,
  });
}
