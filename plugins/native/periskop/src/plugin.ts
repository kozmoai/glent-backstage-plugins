/*
 * Copyright 2022 The Glint Authors
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
  discoveryApiRef,
  configApiRef,
  createApiFactory,
  createPlugin,
  createApiRef,
} from '@kozmoai/core-plugin-api';
import { PeriskopApi, PeriskopClient } from './api';

/**
 * @public
 */
export const periskopApiRef = createApiRef<PeriskopApi>({
  id: 'plugin.periskop.service',
});

/**
 * @public
 */
export const periskopPlugin = createPlugin({
  id: 'periskop',
  apis: [
    createApiFactory({
      api: periskopApiRef,
      deps: { configApi: configApiRef, discoveryApi: discoveryApiRef },
      factory: ({ configApi, discoveryApi }) =>
        new PeriskopClient({ configApi, discoveryApi }),
    }),
  ],
});
