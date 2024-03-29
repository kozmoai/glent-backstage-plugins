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

/**
 * Glint plugin for browsing GraphQL APIs
 *
 * @packageDocumentation
 */

export {
  graphiqlPlugin,
  graphiqlPlugin as plugin,
  GraphiQLPage,
} from './plugin';
export { GraphiQLIcon } from './GraphiQLIcon';
export { GraphiQLPage as Router } from './components';
export * from './lib/api';
export * from './route-refs';
