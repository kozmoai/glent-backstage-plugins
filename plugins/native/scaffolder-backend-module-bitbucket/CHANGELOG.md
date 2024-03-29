# @kozmoai/plugin-scaffolder-backend-module-bitbucket

## 0.2.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/plugin-scaffolder-node@0.4.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/integration@1.9.1-next.1
  - @kozmoai/plugin-scaffolder-backend-module-bitbucket-cloud@0.1.4-next.1
  - @kozmoai/plugin-scaffolder-backend-module-bitbucket-server@0.1.4-next.1
  - @kozmoai/errors@1.2.4-next.0

## 0.2.3-next.0

### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- Updated dependencies
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.3-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/plugin-scaffolder-backend-module-bitbucket-server@0.1.3-next.0
  - @kozmoai/plugin-scaffolder-backend-module-bitbucket-cloud@0.1.3-next.0
  - @kozmoai/config@1.1.2-next.0
  - @kozmoai/integration@1.9.1-next.0

## 0.2.0

### Minor Changes

- 5eb6882: Split `@kozmoai/plugin-scaffolder-backend-module-bitbucket` into
  `@kozmoai/plugin-scaffolder-backend-module-bitbucket-cloud` and
  `@kozmoai/plugin-scaffolder-backend-module-bitbucket-server`.

  `@kozmoai/plugin-scaffolder-backend-module-bitbucket` was **deprecated** in favor of these two replacements.

  Please use any of the two replacements depending on your needs.

  ```diff
  - backend.add(import('@kozmoai/plugin-scaffolder-backend-module-bitbucket'));
  + backend.add(import('@kozmoai/plugin-scaffolder-backend-module-bitbucket-cloud'));
  + backend.add(import('@kozmoai/plugin-scaffolder-backend-module-bitbucket-server'));
  ```

### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- fc98bb6: Enhanced the pull request action to allow for adding new content to the PR as described in this issue #21762
- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/plugin-scaffolder-backend-module-bitbucket-server@0.1.0
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/integration@1.9.0
  - @kozmoai/plugin-scaffolder-node@0.3.0
  - @kozmoai/plugin-scaffolder-backend-module-bitbucket-cloud@0.1.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.0-next.3

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/integration@1.9.0-next.1
  - @kozmoai/plugin-scaffolder-backend-module-bitbucket-server@0.1.0-next.1
  - @kozmoai/plugin-scaffolder-backend-module-bitbucket-cloud@0.1.0-next.1
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.0-next.2

### Minor Changes

- 5eb6882: Split `@kozmoai/plugin-scaffolder-backend-module-bitbucket` into
  `@kozmoai/plugin-scaffolder-backend-module-bitbucket-cloud` and
  `@kozmoai/plugin-scaffolder-backend-module-bitbucket-server`.

  `@kozmoai/plugin-scaffolder-backend-module-bitbucket` was **deprecated** in favor of these two replacements.

  Please use any of the two replacements depending on your needs.

  ```diff
  - backend.add(import('@kozmoai/plugin-scaffolder-backend-module-bitbucket'));
  + backend.add(import('@kozmoai/plugin-scaffolder-backend-module-bitbucket-cloud'));
  + backend.add(import('@kozmoai/plugin-scaffolder-backend-module-bitbucket-server'));
  ```

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-backend-module-bitbucket-server@0.1.0-next.0
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-scaffolder-backend-module-bitbucket-cloud@0.1.0-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.9.0-next.0

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.1.2-next.0

### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- fc98bb6: Enhanced the pull request action to allow for adding new content to the PR as described in this issue #21762
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0

## 0.1.1

### Patch Changes

- a694f71: The Scaffolder builtin actions now contains an action for running pipelines from Bitbucket Cloud Rest API
- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/plugin-scaffolder-node@0.2.10
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.2
  - @kozmoai/plugin-scaffolder-node@0.2.10-next.2

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-scaffolder-node@0.2.10-next.1
  - @kozmoai/errors@1.2.3

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0
  - @kozmoai/plugin-scaffolder-node@0.2.10-next.0

## 0.1.0

### Minor Changes

- 219d7f0: Create new scaffolder module for external integrations

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/plugin-scaffolder-node@0.2.9
  - @kozmoai/integration@1.8.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.1.0-next.0

### Minor Changes

- 219d7f0: Create new scaffolder module for external integrations

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.2.9-next.3
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0-next.1
