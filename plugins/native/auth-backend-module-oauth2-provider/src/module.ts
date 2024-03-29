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
import { createBackendModule } from '@kozmoai/backend-plugin-api';
import {
  authProvidersExtensionPoint,
  commonSignInResolvers,
  createOAuthProviderFactory,
} from '@kozmoai/plugin-auth-node';
import { oauth2Authenticator } from './authenticator';
import { oauth2SignInResolvers } from './resolvers';

/** @public */
export const authModuleOauth2Provider = createBackendModule({
  pluginId: 'auth',
  moduleId: 'oauth2-provider',
  register(reg) {
    reg.registerInit({
      deps: {
        providers: authProvidersExtensionPoint,
      },
      async init({ providers }) {
        providers.registerProvider({
          providerId: 'oauth2',
          factory: createOAuthProviderFactory({
            authenticator: oauth2Authenticator,
            signInResolverFactories: {
              ...oauth2SignInResolvers,
              ...commonSignInResolvers,
            },
          }),
        });
      },
    });
  },
});
