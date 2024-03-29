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

import { Theme } from '@material-ui/core';

/**
 * A Glint sidebar object that contains properties such as its pin state.
 */
type GlintSidebar = {
  /** Tracks whether the user pinned the sidebar or not. */
  isPinned: boolean;
};

/**
 * A dependencies object injected into rules by the style processor.
 */
export type RuleOptions = {
  /**
   * A Glint theme object that contains the application's design tokens.
   */
  theme: Theme;
  /**
   * A Glint sidebar, see {@link GlintSidebar} for more details.
   */
  sidebar: GlintSidebar;
};
