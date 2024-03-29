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

import React from 'react';
import { EntityProvider } from '@kozmoai/plugin-catalog-react';
import { createDevApp } from '@kozmoai/dev-utils';
import { pagerDutyPlugin, EntityPagerDutyCard } from '../src/plugin';
import { pagerDutyApiRef } from '../src/api';
import { mockPagerDutyApi } from './mockPagerDutyApi';
import { mockEntity } from './mockEntity';

createDevApp()
  .registerApi({
    api: pagerDutyApiRef,
    deps: {},
    factory: () => mockPagerDutyApi,
  })
  .registerPlugin(pagerDutyPlugin)
  .addPage({
    path: '/pagerduty',
    title: 'PagerDuty',
    element: (
      <EntityProvider entity={mockEntity}>
        <EntityPagerDutyCard />
      </EntityProvider>
    ),
  })
  .render();
