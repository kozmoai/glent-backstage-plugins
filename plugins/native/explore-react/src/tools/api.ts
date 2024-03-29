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

import { createApiRef } from '@kozmoai/core-plugin-api';

/**
 * Deprecated types moved to `@kozmoai/plugin-explore-common`
 */
import * as common from '@kozmoai/plugin-explore-common';

/**
 * @deprecated Use ExploreTool from `@kozmoai/plugin-explore-common`
 * @public
 */
export type ExploreTool = common.ExploreTool;

/**
 * @deprecated Use exploreApiRef from `@kozmoai/plugin-explore` & the `@kozmoai/plugin-explore-backend`
 * @public
 */
export const exploreToolsConfigRef = createApiRef<ExploreToolsConfig>({
  id: 'plugin.explore.toolsconfig',
});

/**
 * @deprecated Use ExploreApi from `@kozmoai/plugin-explore` & the `@kozmoai/plugin-explore-backend`
 * @public
 */
export interface ExploreToolsConfig {
  getTools: () => Promise<ExploreTool[]>;
}
