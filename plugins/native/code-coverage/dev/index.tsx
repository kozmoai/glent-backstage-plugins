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
import React from 'react';
import { createDevApp } from '@kozmoai/dev-utils';
import { codeCoveragePlugin, EntityCodeCoverageContent } from '../src/plugin';
import { CompoundEntityRef, Entity } from '@kozmoai/catalog-model';
import { EntityProvider } from '@kozmoai/plugin-catalog-react';
import { codeCoverageApiRef, CodeCoverageApi } from '../src/api';
import coverageForEntity from './__fixtures__/coverage-for-entity.json';
import coverageHistoryForEntity from './__fixtures__/coverage-history-for-entity.json';
import fileContentFromEntity from './__fixtures__/get-file-content-from-entity';

const mockEntity: Entity = {
  apiVersion: 'glint.io/v1alpha1',
  kind: 'Component',
  metadata: {
    name: 'glint',
    description: 'glint.io',
    annotations: {
      'glint.io/code-coverage': 'enabled',
    },
  },
  spec: {
    lifecycle: 'production',
    type: 'website',
    owner: 'user:guest',
  },
};

const mockCodeCoverageApi: CodeCoverageApi = {
  async getCoverageForEntity(_entity: CompoundEntityRef) {
    return coverageForEntity as any;
  },
  async getFileContentFromEntity(_entity: CompoundEntityRef, filePath: string) {
    switch (filePath) {
      case 'src/index.js':
        return fileContentFromEntity['src/index.js'];
      case 'src/math.js':
        return fileContentFromEntity['src/math.js'];
      default:
        return '';
    }
  },
  async getCoverageHistoryForEntity(
    _entity: CompoundEntityRef,
    _limit?: number,
  ) {
    return coverageHistoryForEntity;
  },
};

createDevApp()
  .registerApi({
    api: codeCoverageApiRef,
    deps: {},
    factory: () => mockCodeCoverageApi,
  })
  .registerPlugin(codeCoveragePlugin)
  .addPage({
    element: (
      <EntityProvider entity={mockEntity}>
        <EntityCodeCoverageContent />
      </EntityProvider>
    ),
    title: 'Root Page',
  })
  .render();
