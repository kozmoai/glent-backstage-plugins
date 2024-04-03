// Copyright Wearekozmoai.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { GLINTAppData } from '../types';
import { Entity } from '@backstage/catalog-model';

export function useAppFromEntity(entity: Entity): GLINTAppData {
  const appData = (entity.metadata.annotations as GLINTAppData) ?? '';
  // ToDo Validate entity as AWS Entity, has proper data (i.e repo, association with env etc.)

  return appData;
}
