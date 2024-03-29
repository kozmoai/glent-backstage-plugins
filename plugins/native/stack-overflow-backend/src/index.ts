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

/**
 * @packageDocumentation
 * Stack Overflow backend plugin
 * @deprecated
 * Deprecated, consider using `@kozmoai/plugin-search-backend-module-stack-overflow-collator` instead.
 */

import {
  StackOverflowDocument as _StackOverflowDocument,
  StackOverflowQuestionsRequestParams as _StackOverflowQuestionsRequestParams,
  StackOverflowQuestionsCollatorFactory as _StackOverflowQuestionsCollatorFactory,
  StackOverflowQuestionsCollatorFactoryOptions as _StackOverflowQuestionsCollatorFactoryOptions,
} from '@kozmoai/plugin-search-backend-module-stack-overflow-collator';

/**
 * @public
 * @deprecated
 * Import from `@kozmoai/plugin-search-backend-module-stack-overflow-collator` instead.
 */
export type StackOverflowDocument = _StackOverflowDocument;

/**
 * @public
 * @deprecated
 * Import from `@kozmoai/plugin-search-backend-module-stack-overflow-collator` instead.
 */
export type StackOverflowQuestionsRequestParams =
  _StackOverflowQuestionsRequestParams;

/**
 * @public
 * @deprecated
 * Import from `@kozmoai/plugin-search-backend-module-stack-overflow-collator` instead.
 */
export type StackOverflowQuestionsCollatorFactoryOptions =
  _StackOverflowQuestionsCollatorFactory;

/**
 * @public
 * @deprecated
 * Import from `@kozmoai/plugin-search-backend-module-stack-overflow-collator` instead.
 */
export const StackOverflowQuestionsCollatorFactory =
  _StackOverflowQuestionsCollatorFactory;
