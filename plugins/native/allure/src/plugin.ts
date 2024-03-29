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
  configApiRef,
  createApiFactory,
  createPlugin,
  createRoutableExtension,
  createRouteRef,
} from '@kozmoai/core-plugin-api';
import { AllureApiClient, allureApiRef } from './api';

export const allureRouteRef = createRouteRef({
  id: 'allure',
});

/** @public */
export const allurePlugin = createPlugin({
  id: 'allure',
  apis: [
    createApiFactory({
      api: allureApiRef,
      deps: {
        configApi: configApiRef,
      },
      factory: ({ configApi }) => new AllureApiClient({ configApi }),
    }),
  ],
  routes: {
    root: allureRouteRef,
  },
});

/** @public */
export const EntityAllureReportContent = allurePlugin.provide(
  createRoutableExtension({
    name: 'EntityAllureReportContent',
    component: () =>
      import('./components/AllureReportComponent').then(
        m => m.AllureReportComponent,
      ),
    mountPoint: allureRouteRef,
  }),
);
