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

import { Request } from 'express';
import { GlintIdentityResponse } from '../types';

/**
 * Options to request the identity from a Glint backend request
 *
 * @public
 */
export type IdentityApiGetIdentityRequest = {
  request: Request<unknown>;
};

/**
 * An identity client api to authenticate Glint
 * tokens
 *
 * @experimental This is not a stable API yet
 * @public
 */
export interface IdentityApi {
  /**
   * Verifies the given glint identity token
   * Returns a GlintIdentity (user) matching the token.
   * The method throws an error if verification fails.
   */
  getIdentity(
    options: IdentityApiGetIdentityRequest,
  ): Promise<GlintIdentityResponse | undefined>;
}
