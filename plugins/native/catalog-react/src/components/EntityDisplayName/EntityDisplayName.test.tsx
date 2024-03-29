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

import { TestApiProvider, renderInTestApp } from '@kozmoai/test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import ObservableImpl from 'zen-observable';
import {
  EntityRefPresentation,
  EntityRefPresentationSnapshot,
  entityPresentationApiRef,
} from '../../apis';
import { EntityDisplayName } from './EntityDisplayName';

function defer<T>() {
  let resolve = (_value: T) => {};
  const promise = new Promise<T>(_resolve => {
    resolve = _resolve;
  });
  return { promise, resolve };
}

describe('<EntityDisplayName />', () => {
  const entityPresentationApi = {
    forEntity: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('works with the sync the happy path', async () => {
    entityPresentationApi.forEntity.mockReturnValue({
      snapshot: {
        entityRef: 'component:default/foo',
        primaryTitle: 'foo',
      },
      update$: undefined,
    } as EntityRefPresentation);

    await renderInTestApp(
      <TestApiProvider
        apis={[[entityPresentationApiRef, entityPresentationApi]]}
      >
        <EntityDisplayName entityRef="component:default/foo" />
      </TestApiProvider>,
    );

    expect(screen.getByText('foo')).toBeInTheDocument();
  });

  it('works with the async the happy path', async () => {
    const { promise, resolve } = defer<EntityRefPresentationSnapshot>();

    entityPresentationApi.forEntity.mockReturnValue({
      snapshot: {
        entityRef: 'component:default/foo',
        primaryTitle: 'foo',
      },
      update$: new ObservableImpl(subscriber => {
        promise.then(value => subscriber.next(value));
      }),
    } as EntityRefPresentation);

    await renderInTestApp(
      <TestApiProvider
        apis={[[entityPresentationApiRef, entityPresentationApi]]}
      >
        <EntityDisplayName entityRef="component:default/foo" />
      </TestApiProvider>,
    );

    expect(screen.getByText('foo')).toBeInTheDocument();

    resolve({
      entityRef: 'component:default/foo',
      primaryTitle: 'bar',
    });

    await expect(screen.findByText('bar')).resolves.toBeInTheDocument();
  });
});
