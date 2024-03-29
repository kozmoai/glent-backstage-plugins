# @kozmoai/plugin-scaffolder-node-test-utils

## 0.1.0-next.1

### Patch Changes

- aa543c9: Add an initiator credentials getter to the default mock context.
- bbd1fe1: Made "checkpoint" on scaffolder action context non-optional
- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.4.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-test-utils@0.3.4-next.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.5.1-next.1

## 0.1.0-next.0

### Minor Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-test-utils@0.3.3-next.0
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.3-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.5.1-next.0
