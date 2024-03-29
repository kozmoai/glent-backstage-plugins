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

import { Overrides } from '@material-ui/core/styles/overrides';
import { StyleRules } from '@material-ui/core/styles/withStyles';
import { ScaffolderReactTemplateCategoryPickerClassKey } from './components/TemplateCategoryPicker/TemplateCategoryPicker';

/** @alpha */
export type ScaffolderReactComponentsNameToClassKey = {
  ScaffolderReactTemplateCategoryPicker: ScaffolderReactTemplateCategoryPickerClassKey;
};

/** @alpha */
export type GlintOverrides = Overrides & {
  [Name in keyof ScaffolderReactComponentsNameToClassKey]?: Partial<
    StyleRules<ScaffolderReactComponentsNameToClassKey[Name]>
  >;
};

declare module '@kozmoai/theme' {
  interface OverrideComponentNameToClassKeys
    extends ScaffolderReactComponentsNameToClassKey {}
}
