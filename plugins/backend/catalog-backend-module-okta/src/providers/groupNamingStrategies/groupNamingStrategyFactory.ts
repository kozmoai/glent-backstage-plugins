/*
 * Copyright 2022 Larder Software Limited
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
  idGroupNamingStrategy,
  kebabCaseGroupNamingStrategy,
  profileNameGroupNamingStrategy,
} from './index';
import { GroupNamingStrategies, GroupNamingStrategy } from './types';

export const groupNamingStrategyFactory = (
  strategy: GroupNamingStrategies | GroupNamingStrategy = 'id',
): GroupNamingStrategy => {
  if (typeof strategy === 'function') {
    return strategy;
  }
  switch (strategy) {
    case 'id':
      return idGroupNamingStrategy;
    case 'kebab-case-name':
      return kebabCaseGroupNamingStrategy;
    case 'profile-name':
      return profileNameGroupNamingStrategy;
    default:
      throw new Error(`Unknown naming strategy ${strategy}`);
  }
};
