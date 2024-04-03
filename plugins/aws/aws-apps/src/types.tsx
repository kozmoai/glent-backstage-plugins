// Copyright Wearekozmoai.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { KeyValuePair } from '@aws-sdk/client-ecs';

export interface GLINTAppData {
  [key: string]: any;
}

export interface ContainerDetailsType {
  containerName: string | undefined;
  env: KeyValuePair[] | undefined;
}
