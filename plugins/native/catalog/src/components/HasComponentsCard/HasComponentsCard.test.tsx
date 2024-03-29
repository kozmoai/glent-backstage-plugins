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

import { Entity, RELATION_HAS_PART } from '@kozmoai/catalog-model';
import {
  CatalogApi,
  catalogApiRef,
  EntityProvider,
  entityRouteRef,
} from '@kozmoai/plugin-catalog-react';
import { renderInTestApp, TestApiProvider } from '@kozmoai/test-utils';
import { waitFor, screen } from '@testing-library/react';
import React from 'react';
import { HasComponentsCard } from './HasComponentsCard';

describe('<HasComponentsCard />', () => {
  const getEntitiesByRefs: jest.MockedFunction<
    CatalogApi['getEntitiesByRefs']
  > = jest.fn();
  let Wrapper: React.ComponentType<React.PropsWithChildren<{}>>;

  beforeEach(() => {
    Wrapper = ({ children }: { children?: React.ReactNode }) => (
      <TestApiProvider apis={[[catalogApiRef, { getEntitiesByRefs }]]}>
        {children}
      </TestApiProvider>
    );
  });

  afterEach(() => jest.resetAllMocks());

  it('shows empty list if no relations', async () => {
    const entity: Entity = {
      apiVersion: 'v1',
      kind: 'System',
      metadata: {
        name: 'my-system',
        namespace: 'my-namespace',
      },
      relations: [],
    };

    await renderInTestApp(
      <Wrapper>
        <EntityProvider entity={entity}>
          <HasComponentsCard />
        </EntityProvider>
      </Wrapper>,
      {
        mountedRoutes: {
          '/catalog/:namespace/:kind/:name': entityRouteRef,
        },
      },
    );

    expect(screen.getByText('Has components')).toBeInTheDocument();
    expect(
      screen.getByText(/No component is part of this system/i),
    ).toBeInTheDocument();
  });

  it('shows related components', async () => {
    const entity: Entity = {
      apiVersion: 'v1',
      kind: 'System',
      metadata: {
        name: 'my-system',
        namespace: 'my-namespace',
      },
      relations: [
        {
          targetRef: 'component:my-namespace/target-name',
          type: RELATION_HAS_PART,
        },
      ],
    };
    getEntitiesByRefs.mockResolvedValue({
      items: [
        {
          apiVersion: 'v1',
          kind: 'Component',
          metadata: {
            name: 'target-name',
            namespace: 'my-namespace',
          },
          spec: {},
        },
      ],
    });

    await renderInTestApp(
      <Wrapper>
        <EntityProvider entity={entity}>
          <HasComponentsCard />
        </EntityProvider>
      </Wrapper>,
      {
        mountedRoutes: {
          '/catalog/:namespace/:kind/:name': entityRouteRef,
        },
      },
    );

    await waitFor(() => {
      expect(screen.getByText('Has components')).toBeInTheDocument();
      expect(screen.getByText(/target-name/i)).toBeInTheDocument();
    });
  });
});
