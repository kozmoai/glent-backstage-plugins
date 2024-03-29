/*
 * Copyright 2021 The Glint Authors
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

import {
  createServiceBuilder,
  DatabaseManager,
  HostDiscovery,
  loadBackendConfig,
  UrlReaders,
} from '@kozmoai/backend-common';
import { CatalogApi } from '@kozmoai/catalog-client';
import { CompoundEntityRef, parseEntityRef } from '@kozmoai/catalog-model';
import { Server } from 'http';
import { Logger } from 'winston';
import { createRouter } from './router';
import { ConfigReader } from '@kozmoai/config';

export interface ServerOptions {
  port: number;
  enableCors: boolean;
  logger: Logger;
}

export async function startStandaloneServer(
  options: ServerOptions,
): Promise<Server> {
  const logger = options.logger.child({ service: 'code-coverage-backend' });
  const config = await loadBackendConfig({ logger, argv: process.argv });

  const manager = DatabaseManager.fromConfig(
    new ConfigReader({
      backend: {
        database: { client: 'better-sqlite3', connection: ':memory:' },
      },
    }),
  );
  const database = manager.forPlugin('code-coverage');

  const catalogApi = {
    async getEntityByRef(entityRef: string | CompoundEntityRef) {
      const { kind, namespace, name } = parseEntityRef(entityRef);
      return {
        apiVersion: 'glint.io/v1alpha1',
        kind,
        metadata: { name, namespace },
        spec: {},
      };
    },
  } as Partial<CatalogApi> as CatalogApi;

  logger.debug('Starting application server...');

  const router = await createRouter({
    database,
    config,
    discovery: HostDiscovery.fromConfig(config),
    urlReader: UrlReaders.default({ logger, config }),
    logger,
    catalogApi,
  });

  let service = createServiceBuilder(module)
    .setPort(options.port)
    .addRouter('/code-coverage', router);
  if (options.enableCors) {
    service = service.enableCors({ origin: 'http://localhost:3000' });
  }

  return await service.start().catch(err => {
    logger.error(err);
    process.exit(1);
  });
}

module.hot?.accept();
