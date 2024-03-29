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

import { CatalogApi } from '@kozmoai/catalog-client';
import { ComponentEntity, RELATION_OWNED_BY } from '@kozmoai/catalog-model';
import { IdentityApi, identityApiRef } from '@kozmoai/core-plugin-api';
import { TestApiProvider } from '@kozmoai/test-utils';
import { renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { catalogApiRef } from '../api';
import { useEntityOwnership } from './useEntityOwnership';

describe('useEntityOwnership', () => {
  type MockIdentityApi = jest.Mocked<Pick<IdentityApi, 'getGlintIdentity'>>;
  type MockCatalogApi = jest.Mocked<Pick<CatalogApi, 'getEntityByRef'>>;

  const mockIdentityApi: MockIdentityApi = {
    getGlintIdentity: jest.fn(),
  };
  const mockCatalogApi: MockCatalogApi = {
    getEntityByRef: jest.fn(),
  };

  const identityApi = mockIdentityApi as unknown as IdentityApi;
  const catalogApi = mockCatalogApi as unknown as CatalogApi;

  const Wrapper = (props: { children?: React.ReactNode }) => (
    <TestApiProvider
      apis={[
        [identityApiRef, identityApi],
        [catalogApiRef, catalogApi],
      ]}
    >
      {props.children}
    </TestApiProvider>
  );

  const ownedEntity: ComponentEntity = {
    apiVersion: 'glint.io/v1beta1',
    kind: 'Component',
    metadata: {
      name: 'component1',
      namespace: 'default',
    },
    spec: {
      /* should not be accessed */
    } as any,
    relations: [
      {
        type: RELATION_OWNED_BY,
        targetRef: 'user:default/user1',
      },
      {
        type: RELATION_OWNED_BY,
        targetRef: 'group:default/group1',
      },
    ],
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('useEntityOwnership', () => {
    it('matches ownership via ownership entity refs', async () => {
      mockIdentityApi.getGlintIdentity.mockResolvedValue({
        type: 'user',
        userEntityRef: 'user:default/user1',
        ownershipEntityRefs: ['user:default/user1', 'group:default/group1'],
      });
      mockCatalogApi.getEntityByRef.mockResolvedValue(undefined);

      const { result } = renderHook(() => useEntityOwnership(), {
        wrapper: Wrapper,
      });

      expect(result.current.loading).toBe(true);
      expect(result.current.isOwnedEntity(ownedEntity)).toBe(false);

      await waitFor(() => expect(result.current.loading).toBe(false));

      expect(result.current.isOwnedEntity(ownedEntity)).toBe(true);
    });
  });
});
