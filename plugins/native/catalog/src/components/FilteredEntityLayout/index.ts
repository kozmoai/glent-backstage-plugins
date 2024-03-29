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

import { CatalogFilterLayout } from '@kozmoai/plugin-catalog-react';

/**
 * @public
 * @deprecated Use `CatalogFilterLayout` from `@kozmoai/plugin-catalog-react` instead.
 */
export const FilteredEntityLayout = CatalogFilterLayout as (props: {
  children: React.ReactNode;
}) => JSX.Element;

/**
 * @public
 * @deprecated Use `CatalogFilterLayout.Filters` from `@kozmoai/plugin-catalog-react` instead.
 */
export const FilterContainer = CatalogFilterLayout.Filters;

/**
 * @public
 * @deprecated Use `CatalogFilterLayout.Content` from `@kozmoai/plugin-catalog-react` instead.
 */
export const EntityListContainer = CatalogFilterLayout.Content;
