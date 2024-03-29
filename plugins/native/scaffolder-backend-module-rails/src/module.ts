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
import {
  coreServices,
  createBackendModule,
} from '@kozmoai/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@kozmoai/plugin-scaffolder-node/alpha';
import { createFetchRailsAction } from './actions';
import { ScmIntegrations } from '@kozmoai/integration';

/**
 * @public
 * The Rails Module for the Scaffolder Backend
 */
export const railsModule = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'rails',
  register({ registerInit }) {
    registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig,
        reader: coreServices.urlReader,
      },
      async init({ scaffolder, config, reader }) {
        const integrations = ScmIntegrations.fromConfig(config);

        scaffolder.addActions(createFetchRailsAction({ integrations, reader }));
      },
    });
  },
});
