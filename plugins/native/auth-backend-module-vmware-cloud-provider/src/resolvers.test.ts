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
import { NotFoundError } from '@kozmoai/errors';
import {
  AuthResolverContext,
  OAuthAuthenticatorResult,
  PassportProfile,
  SignInInfo,
  SignInResolver,
} from '@kozmoai/plugin-auth-node';

import { vmwareCloudSignInResolvers } from './resolvers';

describe('vmwareCloudResolver', () => {
  let resolverContext: jest.Mocked<AuthResolverContext>;
  let signInInfo: SignInInfo<OAuthAuthenticatorResult<PassportProfile>>;
  let signInResolver: SignInResolver<OAuthAuthenticatorResult<PassportProfile>>;

  beforeEach(() => {
    resolverContext = {
      issueToken: jest.fn().mockResolvedValue({
        token: 'defaultGlintToken',
      }),
      findCatalogUser: jest.fn(),
      signInWithCatalogUser: jest.fn().mockResolvedValue({
        token: 'glintToken',
      }),
    };

    signInInfo = {
      result: {} as any, // Resolver doesn't care about the result object
      profile: {
        displayName: 'TestName',
        email: 'user@example.com',
      },
    };

    signInResolver =
      vmwareCloudSignInResolvers.profileEmailMatchingUserEntityEmail();
  });

  it('looks up glint identity by email', async () => {
    const glintIdentity = await signInResolver(signInInfo, resolverContext);

    expect(glintIdentity.token).toBe('glintToken');
    expect(resolverContext.signInWithCatalogUser).toHaveBeenCalledWith({
      filter: {
        'spec.profile.email': 'user@example.com',
      },
    });
  });

  it('returns "fake" glint identity when no entity matches', async () => {
    resolverContext.signInWithCatalogUser.mockRejectedValue(
      new NotFoundError('User not found'),
    );

    const glintIdentity = await signInResolver(signInInfo, resolverContext);

    expect(glintIdentity.token).toBe('defaultGlintToken');
    expect(resolverContext.issueToken).toHaveBeenCalledWith({
      claims: {
        sub: 'user:default/user@example.com',
        ent: ['user:default/user@example.com'],
      },
    });
  });

  it('fails when resolver context throws other error', () => {
    const error = new Error('bizarre');
    resolverContext.signInWithCatalogUser.mockRejectedValue(error);

    return expect(signInResolver(signInInfo, resolverContext)).rejects.toThrow(
      error,
    );
  });
});
