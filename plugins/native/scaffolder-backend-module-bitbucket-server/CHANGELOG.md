# @kozmoai/plugin-scaffolder-backend-module-bitbucket-server

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/plugin-scaffolder-node@0.4.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/integration@1.9.1-next.1
  - @kozmoai/errors@1.2.4-next.0

## 0.1.3-next.0

### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- Updated dependencies
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.3-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/config@1.1.2-next.0
  - @kozmoai/integration@1.9.1-next.0

## 0.1.0

### Minor Changes

- 5eb6882: New scaffolder module `@kozmoai/plugin-scaffolder-backend-module-bitbucket-server`.

  Extracted from `@kozmoai/plugin-scaffolder-backend-module-bitbucket`
  and replaces its actions related to Bitbucket Server.

  - `publish:bitbucketServer`
  - `publish:bitbucketServer:pull-request`

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/integration@1.9.0
  - @kozmoai/plugin-scaffolder-node@0.3.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.1.0-next.1

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/integration@1.9.0-next.1
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.1.0-next.0

### Minor Changes

- 5eb6882: New scaffolder module `@kozmoai/plugin-scaffolder-backend-module-bitbucket-server`.

  Extracted from `@kozmoai/plugin-scaffolder-backend-module-bitbucket`
  and replaces its actions related to Bitbucket Server.

  - `publish:bitbucketServer`
  - `publish:bitbucketServer:pull-request`

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.9.0-next.0
