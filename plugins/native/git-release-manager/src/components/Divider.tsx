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

import React from 'react';
import { Box, Divider as MaterialDivider } from '@material-ui/core';

import { TEST_IDS } from '../test-helpers/test-ids';

export const Divider = () => {
  return (
    <Box
      marginTop={2}
      marginBottom={2}
      data-testid={TEST_IDS.components.divider}
    >
      <MaterialDivider />
    </Box>
  );
};
