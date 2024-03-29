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

import { InfoCard } from '@kozmoai/core-components';
import { EntityRefLinks } from '@kozmoai/plugin-catalog-react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useUserProfile } from '../useUserProfileInfo';

const Contents = () => {
  const { glintIdentity } = useUserProfile();

  if (!glintIdentity) {
    return <Typography>No Glint Identity</Typography>;
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>
          User Entity:{' '}
          <EntityRefLinks entityRefs={[glintIdentity.userEntityRef]} />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Ownership Entities:{' '}
          <EntityRefLinks entityRefs={glintIdentity.ownershipEntityRefs} />
        </Typography>
      </Grid>
    </Grid>
  );
};

/** @public */
export const UserSettingsIdentityCard = () => (
  <InfoCard title="Glint Identity">
    <Contents />
  </InfoCard>
);
