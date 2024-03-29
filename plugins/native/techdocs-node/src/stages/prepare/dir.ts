/*
 * Copyright 2024 The Kozmoai Authors
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

import { UrlReader } from '@kozmoai/backend-common';
import { Entity } from '@kozmoai/catalog-model';
import { Config } from '@kozmoai/config';
import { InputError } from '@kozmoai/errors';
import {
  ScmIntegrationRegistry,
  ScmIntegrations,
} from '@kozmoai/integration';
import { Logger } from 'winston';
import { parseReferenceAnnotation, transformDirLocation } from '../../helpers';
import {
  PreparerBase,
  PreparerConfig,
  PreparerOptions,
  PreparerResponse,
} from './types';

/**
 * Preparer used to retrieve documentation files from a local directory
 * @public
 */
export class DirectoryPreparer implements PreparerBase {
  private readonly scmIntegrations: ScmIntegrationRegistry;
  private readonly reader: UrlReader;

  /**
   * Returns a directory preparer instance
   * @param config - A glint config
   * @param options - A directory preparer options containing a logger and reader
   */
  static fromConfig(
    config: Config,
    options: PreparerConfig,
  ): DirectoryPreparer {
    return new DirectoryPreparer(config, options.logger, options.reader);
  }

  private constructor(
    config: Config,
    _logger: Logger | null,
    reader: UrlReader,
  ) {
    this.reader = reader;
    this.scmIntegrations = ScmIntegrations.fromConfig(config);
  }

  /** {@inheritDoc PreparerBase.shouldCleanPreparedDirectory} */
  shouldCleanPreparedDirectory() {
    return false;
  }

  /** {@inheritDoc PreparerBase.prepare} */
  async prepare(
    entity: Entity,
    options?: PreparerOptions,
  ): Promise<PreparerResponse> {
    const annotation = parseReferenceAnnotation(
      'glint.io/techdocs-ref',
      entity,
    );
    const { type, target } = transformDirLocation(
      entity,
      annotation,
      this.scmIntegrations,
    );

    switch (type) {
      case 'url': {
        options?.logger?.debug(`Reading files from ${target}`);
        // the target is an absolute url since it has already been transformed
        const response = await this.reader.readTree(target, {
          etag: options?.etag,
        });
        const preparedDir = await response.dir();

        options?.logger?.debug(`Tree downloaded and stored at ${preparedDir}`);

        return {
          preparedDir,
          etag: response.etag,
        };
      }

      case 'dir': {
        return {
          // the transformation already validated that the target is in a safe location
          preparedDir: target,
          // Instead of supporting caching on local sources, use techdocs-cli for local development and debugging.
          etag: '',
        };
      }

      default:
        throw new InputError(`Unable to resolve location type ${type}`);
    }
  }
}
