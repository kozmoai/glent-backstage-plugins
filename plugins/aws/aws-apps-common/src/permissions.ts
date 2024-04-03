// Copyright Wearekozmoai.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { createPermission } from '@backstage/plugin-permission-common';

export const readGlintAppAuditPermission = createPermission({
  name: 'glint.app.audit.read',
  attributes: {
    action: 'read',
  },
});

export const glintPermissions = [readGlintAppAuditPermission];
