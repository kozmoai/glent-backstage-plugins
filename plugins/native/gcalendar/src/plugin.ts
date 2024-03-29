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
  createApiFactory,
  createComponentExtension,
  createPlugin,
  fetchApiRef,
  googleAuthApiRef,
} from '@kozmoai/core-plugin-api';
import { GCalendarApiClient, gcalendarApiRef } from './api';
import { rootRouteRef } from './routes';

/** @public */
export const gcalendarPlugin = createPlugin({
  id: 'gcalendar',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: gcalendarApiRef,
      deps: { authApi: googleAuthApiRef, fetchApi: fetchApiRef },
      factory(deps) {
        return new GCalendarApiClient(deps);
      },
    }),
  ],
});

/** @public */
export const HomePageCalendar = gcalendarPlugin.provide(
  createComponentExtension({
    name: 'HomePageCalendar',
    component: {
      lazy: () =>
        import('./components/CalendarCard').then(m => m.HomePageCalendar),
    },
  }),
);
