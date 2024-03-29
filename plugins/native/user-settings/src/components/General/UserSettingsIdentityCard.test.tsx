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

import { renderInTestApp, TestApiRegistry } from '@kozmoai/test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { UserSettingsIdentityCard } from './UserSettingsIdentityCard';
import { ApiProvider } from '@kozmoai/core-app-api';
import { identityApiRef } from '@kozmoai/core-plugin-api';
import { entityRouteRef } from '@kozmoai/plugin-catalog-react';

const apiRegistry = TestApiRegistry.from([
  identityApiRef,
  {
    getProfileInfo: jest.fn(async () => ({})),
    getGlintIdentity: jest.fn(async () => ({
      type: 'user' as const,
      userEntityRef: 'foo:bar/foobar',
      ownershipEntityRefs: ['user:default/test-ownership'],
    })),
  },
]);

describe('<UserSettingsIdentityCard />', () => {
  it('displays an identity card', async () => {
    await renderInTestApp(
      <ApiProvider apis={apiRegistry}>
        <UserSettingsIdentityCard />
      </ApiProvider>,
      {
        mountedRoutes: { '/catalog/:namespace/:kind/:name': entityRouteRef },
      },
    );

    expect(screen.getByText('test-ownership')).toBeInTheDocument();
    expect(screen.getByText('bar/foobar')).toBeInTheDocument();
  });
});
