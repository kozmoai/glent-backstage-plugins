# @kozmoai/plugin-catalog-backend-module-github

## 0.5.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/backend-tasks@0.5.19-next.1
  - @kozmoai/integration@1.9.1-next.1
  - @kozmoai/plugin-catalog-backend@1.18.0-next.1
  - @kozmoai/catalog-client@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/plugin-catalog-common@1.0.22-next.1
  - @kozmoai/plugin-catalog-node@1.8.0-next.1
  - @kozmoai/plugin-events-node@0.3.0-next.1

## 0.5.3-next.0

### Patch Changes

- a936a8f: Migrated the `GithubLocationAnalyzer` to support new auth services.
- 999224f: Bump dependency `minimatch` to v9
- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- Updated dependencies
  - @kozmoai/plugin-events-node@0.3.0-next.0
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/plugin-catalog-backend@1.18.0-next.0
  - @kozmoai/plugin-catalog-node@1.8.0-next.0
  - @kozmoai/backend-tasks@0.5.18-next.0
  - @kozmoai/catalog-client@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/config@1.1.2-next.0
  - @kozmoai/integration@1.9.1-next.0
  - @kozmoai/plugin-catalog-common@1.0.22-next.0

## 0.5.0

### Minor Changes

- a950ed0: Prevent Entity Providers from eliminating Users and Groups from the DB when the synchronisation fails

### Patch Changes

- 785ff24: Added `validateLocationsExist` to the config
- 9477133: Decreased number of teams fetched by GraphQL Query responsible for fetching Teams and Members in organization, due to timeouts when running against big organizations
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/plugin-catalog-backend@1.17.0
  - @kozmoai/backend-tasks@0.5.15
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/integration@1.9.0
  - @kozmoai/catalog-client@1.6.0
  - @kozmoai/plugin-catalog-node@1.7.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21
  - @kozmoai/plugin-events-node@0.2.19

## 0.5.0-next.3

### Patch Changes

- 785ff24: Added `validateLocationsExist` to the config
- 1cae748: Updated dependency `git-url-parse` to `^14.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/integration@1.9.0-next.1
  - @kozmoai/backend-tasks@0.5.15-next.3
  - @kozmoai/plugin-catalog-backend@1.17.0-next.3
  - @kozmoai/plugin-catalog-node@1.6.2-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21-next.0
  - @kozmoai/plugin-events-node@0.2.19-next.3

## 0.5.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-catalog-backend@1.17.0-next.2
  - @kozmoai/backend-tasks@0.5.15-next.2
  - @kozmoai/plugin-catalog-node@1.6.2-next.2
  - @kozmoai/plugin-events-node@0.2.19-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/plugin-catalog-common@1.0.21-next.0

## 0.5.0-next.1

### Minor Changes

- a950ed0: Prevent Entity Providers from eliminating Users and Groups from the DB when the synchronisation fails

### Patch Changes

- 9477133: Decreased number of teams fetched by GraphQL Query responsible for fetching Teams and Members in organization, due to timeouts when running against big organizations
- Updated dependencies
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/plugin-catalog-backend@1.17.0-next.1
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/backend-tasks@0.5.15-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21-next.0
  - @kozmoai/plugin-catalog-node@1.6.2-next.1
  - @kozmoai/plugin-events-node@0.2.19-next.1

## 0.4.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/plugin-catalog-backend@1.17.0-next.0
  - @kozmoai/catalog-client@1.6.0-next.0
  - @kozmoai/backend-tasks@0.5.15-next.0
  - @kozmoai/plugin-catalog-node@1.6.2-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/plugin-catalog-common@1.0.20
  - @kozmoai/plugin-events-node@0.2.19-next.0

## 0.4.7

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/catalog-client@1.5.2
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/plugin-catalog-node@1.6.1
  - @kozmoai/plugin-catalog-backend@1.16.1
  - @kozmoai/backend-tasks@0.5.14
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/plugin-catalog-common@1.0.20
  - @kozmoai/plugin-events-node@0.2.18

## 0.4.7-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.2
  - @kozmoai/backend-common@0.20.1-next.2
  - @kozmoai/plugin-catalog-backend@1.16.1-next.2
  - @kozmoai/plugin-catalog-node@1.6.1-next.2
  - @kozmoai/plugin-events-node@0.2.18-next.2
  - @kozmoai/backend-tasks@0.5.14-next.2

## 0.4.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/config@1.1.1
  - @kozmoai/backend-tasks@0.5.14-next.1
  - @kozmoai/plugin-catalog-backend@1.16.1-next.1
  - @kozmoai/backend-plugin-api@0.6.9-next.1
  - @kozmoai/catalog-client@1.5.2-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-catalog-common@1.0.19
  - @kozmoai/plugin-catalog-node@1.6.1-next.1
  - @kozmoai/plugin-events-node@0.2.18-next.1

## 0.4.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/catalog-client@1.5.2-next.0
  - @kozmoai/plugin-catalog-node@1.6.1-next.0
  - @kozmoai/backend-plugin-api@0.6.9-next.0
  - @kozmoai/backend-tasks@0.5.14-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/plugin-catalog-backend@1.16.1-next.0
  - @kozmoai/plugin-catalog-common@1.0.19
  - @kozmoai/plugin-events-node@0.2.18-next.0

## 0.4.6

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/plugin-catalog-node@1.6.0
  - @kozmoai/plugin-catalog-backend@1.16.0
  - @kozmoai/catalog-client@1.5.0
  - @kozmoai/backend-tasks@0.5.13
  - @kozmoai/integration@1.8.0
  - @kozmoai/backend-plugin-api@0.6.8
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.19
  - @kozmoai/plugin-events-node@0.2.17

## 0.4.6-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/backend-plugin-api@0.6.8-next.3
  - @kozmoai/backend-tasks@0.5.13-next.3
  - @kozmoai/catalog-client@1.5.0-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/plugin-catalog-backend@1.16.0-next.3
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-catalog-node@1.6.0-next.3
  - @kozmoai/plugin-events-node@0.2.17-next.3

## 0.4.6-next.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.6.0-next.2
  - @kozmoai/plugin-catalog-backend@1.16.0-next.2
  - @kozmoai/backend-common@0.20.0-next.2
  - @kozmoai/catalog-client@1.5.0-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.2
  - @kozmoai/backend-tasks@0.5.13-next.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-events-node@0.2.17-next.2

## 0.4.6-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.15.1-next.1
  - @kozmoai/catalog-client@1.5.0-next.0
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/backend-common@0.20.0-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.1
  - @kozmoai/backend-tasks@0.5.13-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-catalog-node@1.5.1-next.1
  - @kozmoai/plugin-events-node@0.2.17-next.1

## 0.4.6-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.0
  - @kozmoai/backend-tasks@0.5.13-next.0
  - @kozmoai/integration@1.8.0-next.0
  - @kozmoai/plugin-catalog-backend@1.15.1-next.0
  - @kozmoai/plugin-catalog-node@1.5.1-next.0
  - @kozmoai/backend-plugin-api@0.6.8-next.0
  - @kozmoai/catalog-client@1.4.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-events-node@0.2.17-next.0

## 0.4.5

### Patch Changes

- 88b673aa76: Import `AnalyzeOptions` and `ScmLocationAnalyzer` types from `@kozmoai/plugin-catalog-node`
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.15.0
  - @kozmoai/plugin-catalog-node@1.5.0
  - @kozmoai/integration@1.7.2
  - @kozmoai/backend-common@0.19.9
  - @kozmoai/backend-plugin-api@0.6.7
  - @kozmoai/backend-tasks@0.5.12
  - @kozmoai/catalog-client@1.4.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-events-node@0.2.16

## 0.4.5-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.2
  - @kozmoai/backend-common@0.19.9-next.2
  - @kozmoai/plugin-catalog-backend@1.15.0-next.2
  - @kozmoai/backend-tasks@0.5.12-next.2
  - @kozmoai/plugin-catalog-node@1.5.0-next.2
  - @kozmoai/plugin-events-node@0.2.16-next.2

## 0.4.5-next.1

### Patch Changes

- 88b673aa76: Import `AnalyzeOptions` and `ScmLocationAnalyzer` types from `@kozmoai/plugin-catalog-node`
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.15.0-next.1
  - @kozmoai/plugin-catalog-node@1.5.0-next.1
  - @kozmoai/integration@1.7.2-next.0
  - @kozmoai/backend-common@0.19.9-next.1
  - @kozmoai/backend-tasks@0.5.12-next.1
  - @kozmoai/backend-plugin-api@0.6.7-next.1
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17
  - @kozmoai/plugin-events-node@0.2.16-next.1

## 0.4.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.15.0-next.0
  - @kozmoai/backend-common@0.19.9-next.0
  - @kozmoai/integration@1.7.1
  - @kozmoai/backend-plugin-api@0.6.7-next.0
  - @kozmoai/backend-tasks@0.5.12-next.0
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17
  - @kozmoai/plugin-catalog-node@1.4.8-next.0
  - @kozmoai/plugin-events-node@0.2.16-next.0

## 0.4.4

### Patch Changes

- 890e3b5ad4: Make sure to include the error message when ingestion fails
- 0b55f773a7: Removed some unused dependencies
- 4f16e60e6d: Request slightly smaller pages of data from GitHub
- b4b1cbf9fa: Make `defaultUserTransformer` resolve to `UserEntity` instead of `Entity`
- c101e683d5: Removed `catalogModuleGithubOrgEntityProvider`. Import from `@kozmoai/plugin-catalog-backend-module-github-org` instead.
- Updated dependencies
  - @kozmoai/backend-tasks@0.5.11
  - @kozmoai/backend-common@0.19.8
  - @kozmoai/integration@1.7.1
  - @kozmoai/plugin-catalog-backend@1.14.0
  - @kozmoai/plugin-catalog-node@1.4.7
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/backend-plugin-api@0.6.6
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17
  - @kozmoai/plugin-events-node@0.2.15

## 0.4.4-next.2

### Patch Changes

- 0b55f773a7: Removed some unused dependencies
- c101e683d5: Removed `catalogModuleGithubOrgEntityProvider`. Import from `@kozmoai/plugin-catalog-backend-module-github-org` instead.
- Updated dependencies
  - @kozmoai/backend-common@0.19.8-next.2
  - @kozmoai/plugin-catalog-backend@1.14.0-next.2
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/integration@1.7.1-next.1
  - @kozmoai/backend-tasks@0.5.11-next.2
  - @kozmoai/plugin-catalog-node@1.4.7-next.2
  - @kozmoai/backend-plugin-api@0.6.6-next.2
  - @kozmoai/catalog-client@1.4.5-next.0
  - @kozmoai/config@1.1.1-next.0
  - @kozmoai/plugin-catalog-common@1.0.17-next.0
  - @kozmoai/plugin-events-node@0.2.15-next.2

## 0.4.3-next.1

### Patch Changes

- b4b1cbf9fa: Make `defaultUserTransformer` resolve to `UserEntity` instead of `Entity`
- Updated dependencies
  - @kozmoai/backend-tasks@0.5.10-next.1
  - @kozmoai/plugin-catalog-backend@1.14.0-next.1
  - @kozmoai/plugin-catalog-node@1.4.6-next.1
  - @kozmoai/backend-common@0.19.7-next.1
  - @kozmoai/backend-plugin-api@0.6.5-next.1
  - @kozmoai/config@1.1.0
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/integration@1.7.1-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.16
  - @kozmoai/plugin-events-node@0.2.14-next.1

## 0.4.3-next.0

### Patch Changes

- 890e3b5ad4: Make sure to include the error message when ingestion fails
- Updated dependencies
  - @kozmoai/integration@1.7.1-next.0
  - @kozmoai/plugin-catalog-backend@1.14.0-next.0
  - @kozmoai/backend-common@0.19.7-next.0
  - @kozmoai/config@1.1.0
  - @kozmoai/backend-plugin-api@0.6.5-next.0
  - @kozmoai/backend-tasks@0.5.10-next.0
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.16
  - @kozmoai/plugin-catalog-node@1.4.6-next.0
  - @kozmoai/plugin-events-node@0.2.14-next.0

## 0.4.0

### Minor Changes

- fa7004d9722c: Added a `catalogModuleGithubOrgEntityProvider` for the new backend system

### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@kozmoai/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@kozmoai/plugin-example-backend'));
  ```

- 3d63e60f3c36: Internal restructure to avoid circular imports
- 96353bb7cb4a: Properly support custom `userTransformer` returning `undefined` in `GithubMultiOrgEntityProvider`
- 3c44761b9191: Allow github user and team transforms to return any Entity
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.13.0
  - @kozmoai/backend-tasks@0.5.8
  - @kozmoai/backend-common@0.19.5
  - @kozmoai/config@1.1.0
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/integration@1.7.0
  - @kozmoai/plugin-catalog-common@1.0.16
  - @kozmoai/types@1.1.1
  - @kozmoai/backend-plugin-api@0.6.3
  - @kozmoai/plugin-catalog-node@1.4.4
  - @kozmoai/plugin-events-node@0.2.12

## 0.4.0-next.3

### Minor Changes

- fa7004d9722c: Added a `catalogModuleGithubOrgEntityProvider` for the new backend system

### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@kozmoai/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@kozmoai/plugin-example-backend'));
  ```

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.13.0-next.3
  - @kozmoai/catalog-client@1.4.4-next.2
  - @kozmoai/catalog-model@1.4.2-next.2
  - @kozmoai/config@1.1.0-next.2
  - @kozmoai/errors@1.2.2-next.0
  - @kozmoai/integration@1.7.0-next.3
  - @kozmoai/plugin-catalog-common@1.0.16-next.2
  - @kozmoai/types@1.1.1-next.0
  - @kozmoai/backend-plugin-api@0.6.3-next.3
  - @kozmoai/backend-common@0.19.5-next.3
  - @kozmoai/backend-tasks@0.5.8-next.3
  - @kozmoai/plugin-catalog-node@1.4.4-next.3
  - @kozmoai/plugin-events-node@0.2.12-next.3

## 0.3.8-next.2

### Patch Changes

- 96353bb7cb4a: Properly support custom `userTransformer` returning `undefined` in `GithubMultiOrgEntityProvider`
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.13.0-next.2
  - @kozmoai/config@1.1.0-next.1
  - @kozmoai/backend-tasks@0.5.8-next.2
  - @kozmoai/backend-common@0.19.5-next.2
  - @kozmoai/plugin-catalog-node@1.4.4-next.2
  - @kozmoai/integration@1.7.0-next.2
  - @kozmoai/backend-plugin-api@0.6.3-next.2
  - @kozmoai/catalog-model@1.4.2-next.1
  - @kozmoai/catalog-client@1.4.4-next.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.16-next.1
  - @kozmoai/plugin-events-node@0.2.12-next.2

## 0.3.8-next.1

### Patch Changes

- 3c44761b9191: Allow github user and team transforms to return any Entity
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.13.0-next.1
  - @kozmoai/config@1.1.0-next.0
  - @kozmoai/integration@1.7.0-next.1
  - @kozmoai/backend-tasks@0.5.8-next.1
  - @kozmoai/backend-common@0.19.5-next.1
  - @kozmoai/backend-plugin-api@0.6.3-next.1
  - @kozmoai/catalog-model@1.4.2-next.0
  - @kozmoai/plugin-catalog-node@1.4.4-next.1
  - @kozmoai/plugin-events-node@0.2.12-next.1
  - @kozmoai/catalog-client@1.4.4-next.0
  - @kozmoai/plugin-catalog-common@1.0.16-next.0
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0

## 0.3.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.12.2-next.0
  - @kozmoai/backend-common@0.19.4-next.0
  - @kozmoai/integration@1.7.0-next.0
  - @kozmoai/backend-tasks@0.5.7-next.0
  - @kozmoai/backend-plugin-api@0.6.2-next.0
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15
  - @kozmoai/plugin-catalog-node@1.4.3-next.0
  - @kozmoai/plugin-events-node@0.2.11-next.0

## 0.3.3

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 4b82382ed8c2: Fixed invalid configuration schema. The configuration schema may be more strict as a result.
- 81c231c9c9ee: Fixed a bug where the visibility filter was case sensitive and casting was inconsistent.
- Updated dependencies
  - @kozmoai/backend-common@0.19.2
  - @kozmoai/plugin-catalog-backend@1.12.0
  - @kozmoai/backend-plugin-api@0.6.0
  - @kozmoai/plugin-catalog-node@1.4.1
  - @kozmoai/plugin-events-node@0.2.9
  - @kozmoai/integration@1.6.0
  - @kozmoai/backend-tasks@0.5.5
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.12.0-next.2
  - @kozmoai/backend-plugin-api@0.6.0-next.2
  - @kozmoai/backend-tasks@0.5.5-next.2
  - @kozmoai/backend-common@0.19.2-next.2
  - @kozmoai/plugin-catalog-node@1.4.1-next.2
  - @kozmoai/plugin-events-node@0.2.9-next.2

## 0.3.3-next.1

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 4b82382ed8c2: Fixed invalid configuration schema. The configuration schema may be more strict as a result.
- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.1
  - @kozmoai/plugin-catalog-backend@1.12.0-next.1
  - @kozmoai/plugin-catalog-node@1.4.1-next.1
  - @kozmoai/plugin-events-node@0.2.9-next.1
  - @kozmoai/backend-plugin-api@0.6.0-next.1
  - @kozmoai/backend-tasks@0.5.5-next.1
  - @kozmoai/integration@1.5.1
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15

## 0.3.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.12.0-next.0
  - @kozmoai/backend-common@0.19.2-next.0
  - @kozmoai/backend-plugin-api@0.5.5-next.0
  - @kozmoai/backend-tasks@0.5.5-next.0
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/integration@1.5.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15
  - @kozmoai/plugin-catalog-node@1.4.1-next.0
  - @kozmoai/plugin-events-node@0.2.9-next.0

## 0.3.2

### Patch Changes

- b01b869d7158: fixed event handler to respect configured organization
- 68531cc70e1f: Break some internal circular import chains
- Updated dependencies
  - @kozmoai/errors@1.2.1
  - @kozmoai/backend-common@0.19.1
  - @kozmoai/plugin-catalog-backend@1.11.0
  - @kozmoai/plugin-catalog-node@1.4.0
  - @kozmoai/backend-plugin-api@0.5.4
  - @kozmoai/backend-tasks@0.5.4
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/integration@1.5.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15
  - @kozmoai/plugin-events-node@0.2.8

## 0.3.2-next.1

### Patch Changes

- b01b869d7158: fixed event handler to respect configured organization
- Updated dependencies
  - @kozmoai/config@1.0.8

## 0.3.2-next.0

### Patch Changes

- 68531cc70e1f: Break some internal circular import chains
- Updated dependencies
  - @kozmoai/errors@1.2.1-next.0
  - @kozmoai/backend-common@0.19.1-next.0
  - @kozmoai/plugin-catalog-backend@1.11.0-next.0
  - @kozmoai/plugin-catalog-node@1.4.0-next.0
  - @kozmoai/backend-plugin-api@0.5.4-next.0
  - @kozmoai/backend-tasks@0.5.4-next.0
  - @kozmoai/catalog-client@1.4.3-next.0
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/integration@1.5.1-next.0
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15-next.0
  - @kozmoai/plugin-events-node@0.2.8-next.0

## 0.3.1

### Patch Changes

- b9a6d1348d96: Properly handle `async` event callback
- df8411779da1: Add support for Repository Variables and Secrets to the `publish:github` and `github:repo:create` scaffolder actions. You will need to add `read/write` permissions to your GITHUB_TOKEN and/or Github Glint App for Repository `Secrets` and `Variables`

  Upgrade octokit introduces some breaking changes.

- Updated dependencies
  - @kozmoai/backend-common@0.19.0
  - @kozmoai/catalog-client@1.4.2
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-backend@1.10.0
  - @kozmoai/integration@1.5.0
  - @kozmoai/catalog-model@1.4.0
  - @kozmoai/errors@1.2.0
  - @kozmoai/backend-plugin-api@0.5.3
  - @kozmoai/backend-tasks@0.5.3
  - @kozmoai/plugin-catalog-node@1.3.7
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-catalog-common@1.0.14
  - @kozmoai/plugin-events-node@0.2.7

## 0.3.1-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.2
  - @kozmoai/catalog-model@1.4.0-next.1
  - @kozmoai/plugin-catalog-backend@1.10.0-next.2
  - @kozmoai/backend-plugin-api@0.5.3-next.2
  - @kozmoai/backend-tasks@0.5.3-next.2
  - @kozmoai/catalog-client@1.4.2-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/integration@1.5.0-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.14-next.1
  - @kozmoai/plugin-catalog-node@1.3.7-next.2
  - @kozmoai/plugin-events-node@0.2.7-next.2

## 0.3.1-next.2

### Patch Changes

- b9a6d1348d96: Properly handle `async` event callback
- Updated dependencies
  - @kozmoai/config@1.0.7

## 0.3.1-next.1

### Patch Changes

- df8411779da1: Add support for Repository Variables and Secrets to the `publish:github` and `github:repo:create` scaffolder actions. You will need to add `read/write` permissions to your GITHUB_TOKEN and/or Github Glint App for Repository `Secrets` and `Variables`

  Upgrade octokit introduces some breaking changes.

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.1
  - @kozmoai/plugin-catalog-backend@1.9.2-next.1
  - @kozmoai/integration@1.5.0-next.0
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/backend-plugin-api@0.5.3-next.1
  - @kozmoai/catalog-model@1.4.0-next.0
  - @kozmoai/backend-tasks@0.5.3-next.1
  - @kozmoai/plugin-catalog-node@1.3.7-next.1
  - @kozmoai/catalog-client@1.4.2-next.1
  - @kozmoai/plugin-events-node@0.2.7-next.1
  - @kozmoai/plugin-catalog-common@1.0.14-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2

## 0.3.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.2-next.0
  - @kozmoai/plugin-catalog-backend@1.9.2-next.0
  - @kozmoai/plugin-catalog-node@1.3.7-next.0
  - @kozmoai/backend-common@0.18.6-next.0
  - @kozmoai/integration@1.4.5
  - @kozmoai/config@1.0.7
  - @kozmoai/backend-plugin-api@0.5.3-next.0
  - @kozmoai/backend-tasks@0.5.3-next.0
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13
  - @kozmoai/plugin-events-node@0.2.7-next.0

## 0.3.0

### Minor Changes

- 970678adbe2: Implement events support for `GithubMultiOrgEntityProvider`

  **BREAKING:** Passing in a custom `teamTransformer` will now correctly completely override the default transformer behavior

### Patch Changes

- 78bb674a713: Fixed bug in queryWithPaging that caused secondary rate limit errors in GitHub with organizations having more than 1000 repositories. This change makes one request per second to avoid concurrency issues.
- bd101cefd37: Updated the `team.edited` event emitted from `GithubOrgEntityProvider` to also include teams description.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.9.1
  - @kozmoai/backend-common@0.18.5
  - @kozmoai/integration@1.4.5
  - @kozmoai/backend-tasks@0.5.2
  - @kozmoai/plugin-catalog-node@1.3.6
  - @kozmoai/backend-plugin-api@0.5.2
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13
  - @kozmoai/plugin-events-node@0.2.6

## 0.3.0-next.2

### Minor Changes

- 970678adbe2: Implement events support for `GithubMultiOrgEntityProvider`

  **BREAKING:** Passing in a custom `teamTransformer` will now correctly completely override the default transformer behavior

### Patch Changes

- bd101cefd37: Updated the `team.edited` event emitted from `GithubOrgEntityProvider` to also include teams description.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.9.1-next.2
  - @kozmoai/config@1.0.7

## 0.2.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.1
  - @kozmoai/plugin-catalog-backend@1.9.1-next.1
  - @kozmoai/backend-tasks@0.5.2-next.1
  - @kozmoai/plugin-catalog-node@1.3.6-next.1
  - @kozmoai/backend-plugin-api@0.5.2-next.1
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-events-node@0.2.6-next.1

## 0.2.8-next.0

### Patch Changes

- 78bb674a713: Fixed bug in queryWithPaging that caused secondary rate limit errors in GitHub with organizations having more than 1000 repositories. This change makes one request per second to avoid concurrency issues.
- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.0
  - @kozmoai/integration@1.4.5-next.0
  - @kozmoai/backend-tasks@0.5.2-next.0
  - @kozmoai/plugin-catalog-backend@1.9.1-next.0
  - @kozmoai/plugin-catalog-node@1.3.6-next.0
  - @kozmoai/backend-plugin-api@0.5.2-next.0
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13
  - @kozmoai/plugin-events-node@0.2.6-next.0

## 0.2.7

### Patch Changes

- 3756dd98feb: `GitHubEntityProvider`: Add option to configure visibility filter via `app-config.yaml`.

  Please find how to configure visibility filter config at https://glint.io/docs/integrations/github/discovery

- 3160138d8d4: Implement `GithubMultiOrgEntityProvider` for sourcing group and user entities from multiple GitHub organizations
- Updated dependencies
  - @kozmoai/backend-common@0.18.4
  - @kozmoai/plugin-catalog-backend@1.9.0
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/backend-tasks@0.5.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/integration@1.4.4
  - @kozmoai/plugin-catalog-node@1.3.5
  - @kozmoai/backend-plugin-api@0.5.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13
  - @kozmoai/plugin-events-node@0.2.5

## 0.2.7-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.9.0-next.3
  - @kozmoai/catalog-model@1.3.0-next.0
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/backend-plugin-api@0.5.1-next.2
  - @kozmoai/backend-tasks@0.5.1-next.2
  - @kozmoai/catalog-client@1.4.1-next.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.1
  - @kozmoai/plugin-catalog-node@1.3.5-next.3
  - @kozmoai/plugin-events-node@0.2.5-next.2

## 0.2.7-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.8.1-next.2
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/catalog-client@1.4.1-next.0
  - @kozmoai/backend-plugin-api@0.5.1-next.2
  - @kozmoai/backend-tasks@0.5.1-next.2
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.0
  - @kozmoai/plugin-catalog-node@1.3.5-next.2
  - @kozmoai/plugin-events-node@0.2.5-next.2

## 0.2.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.8.1-next.1
  - @kozmoai/backend-tasks@0.5.1-next.1
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/backend-common@0.18.4-next.1
  - @kozmoai/backend-plugin-api@0.5.1-next.1
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.0
  - @kozmoai/plugin-catalog-node@1.3.5-next.1
  - @kozmoai/plugin-events-node@0.2.5-next.1

## 0.2.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.8.1-next.0
  - @kozmoai/backend-common@0.18.4-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/integration@1.4.3
  - @kozmoai/backend-plugin-api@0.5.1-next.0
  - @kozmoai/backend-tasks@0.5.1-next.0
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.12
  - @kozmoai/plugin-catalog-node@1.3.5-next.0
  - @kozmoai/plugin-events-node@0.2.5-next.0

## 0.2.6

### Patch Changes

- 65454876fb2: Minor API report tweaks
- 90469c02c8c: Renamed `githubEntityProviderCatalogModule` to `catalogModuleGithubEntityProvider` to match the [recommended naming patterns](https://glint.io/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@kozmoai/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.8.0
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/backend-tasks@0.5.0
  - @kozmoai/backend-common@0.18.3
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-catalog-node@1.3.4
  - @kozmoai/backend-plugin-api@0.5.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/plugin-catalog-common@1.0.12
  - @kozmoai/plugin-events-node@0.2.4
  - @kozmoai/integration@1.4.3
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2

## 0.2.6-next.2

### Patch Changes

- 65454876fb2: Minor API report tweaks
- Updated dependencies
  - @kozmoai/backend-tasks@0.5.0-next.2
  - @kozmoai/backend-common@0.18.3-next.2
  - @kozmoai/backend-plugin-api@0.4.1-next.2
  - @kozmoai/plugin-catalog-backend@1.8.0-next.2
  - @kozmoai/plugin-catalog-node@1.3.4-next.2
  - @kozmoai/plugin-events-node@0.2.4-next.2
  - @kozmoai/config@1.0.7-next.0
  - @kozmoai/integration@1.4.3-next.0

## 0.2.6-next.1

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/errors@1.1.5-next.0
  - @kozmoai/backend-common@0.18.3-next.1
  - @kozmoai/catalog-client@1.4.0-next.1
  - @kozmoai/integration@1.4.3-next.0
  - @kozmoai/plugin-catalog-backend@1.8.0-next.1
  - @kozmoai/backend-plugin-api@0.4.1-next.1
  - @kozmoai/backend-tasks@0.4.4-next.1
  - @kozmoai/config@1.0.7-next.0
  - @kozmoai/catalog-model@1.2.1-next.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.12-next.1
  - @kozmoai/plugin-catalog-node@1.3.4-next.1
  - @kozmoai/plugin-events-node@0.2.4-next.1

## 0.2.6-next.0

### Patch Changes

- 928a12a9b3: Internal refactor of `/alpha` exports.
- Updated dependencies
  - @kozmoai/catalog-client@1.4.0-next.0
  - @kozmoai/plugin-catalog-backend@1.8.0-next.0
  - @kozmoai/backend-tasks@0.4.4-next.0
  - @kozmoai/backend-plugin-api@0.4.1-next.0
  - @kozmoai/backend-common@0.18.3-next.0
  - @kozmoai/catalog-model@1.2.1-next.0
  - @kozmoai/plugin-catalog-common@1.0.12-next.0
  - @kozmoai/plugin-catalog-node@1.3.4-next.0
  - @kozmoai/plugin-events-node@0.2.4-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2

## 0.2.5

### Patch Changes

- 66158754b4: Add support for filtering out forks
- 80afd5ff8b: Use github team slug and login annotations rather than entity name to infer location annotations
- 85b04f659a: Internal refactor to not use deprecated `substr`
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.7.2
  - @kozmoai/backend-plugin-api@0.4.0
  - @kozmoai/backend-common@0.18.2
  - @kozmoai/catalog-model@1.2.0
  - @kozmoai/plugin-events-node@0.2.3
  - @kozmoai/plugin-catalog-node@1.3.3
  - @kozmoai/backend-tasks@0.4.3
  - @kozmoai/catalog-client@1.3.1
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.11

## 0.2.5-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.4.0-next.2
  - @kozmoai/backend-common@0.18.2-next.2
  - @kozmoai/plugin-catalog-backend@1.7.2-next.2
  - @kozmoai/catalog-model@1.2.0-next.1
  - @kozmoai/plugin-events-node@0.2.3-next.2
  - @kozmoai/plugin-catalog-node@1.3.3-next.2
  - @kozmoai/backend-tasks@0.4.3-next.2
  - @kozmoai/catalog-client@1.3.1-next.1
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.11-next.1

## 0.2.5-next.1

### Patch Changes

- 66158754b4: Add support for filtering out forks
- 85b04f659a: Internal refactor to not use deprecated `substr`
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.7.2-next.1
  - @kozmoai/backend-common@0.18.2-next.1
  - @kozmoai/backend-plugin-api@0.3.2-next.1
  - @kozmoai/backend-tasks@0.4.3-next.1
  - @kozmoai/catalog-client@1.3.1-next.0
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.11-next.0
  - @kozmoai/plugin-catalog-node@1.3.3-next.1
  - @kozmoai/plugin-events-node@0.2.3-next.1

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/backend-common@0.18.2-next.0
  - @kozmoai/catalog-client@1.3.1-next.0
  - @kozmoai/plugin-catalog-backend@1.7.2-next.0
  - @kozmoai/plugin-catalog-common@1.0.11-next.0
  - @kozmoai/plugin-catalog-node@1.3.3-next.0
  - @kozmoai/backend-tasks@0.4.3-next.0
  - @kozmoai/backend-plugin-api@0.3.2-next.0
  - @kozmoai/plugin-events-node@0.2.3-next.0

## 0.2.3

### Patch Changes

- 427d8f4411: Added support for event based updates in the `GithubOrgEntityProvider`!
  Based on webhook events from GitHub the affected `User` or `Group` entity will be refreshed.
  This includes adding new entities, refreshing existing ones, and removing obsolete ones.

  Please find more information at
  https://glint.io/docs/integrations/github/org#installation-with-events-support

- f8d91a8810: fixed `catalogPath` option to properly glob match on received GitHub events.
- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@kozmoai/backend-common`.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.3.0
  - @kozmoai/backend-common@0.18.0
  - @kozmoai/catalog-model@1.1.5
  - @kozmoai/catalog-client@1.3.0
  - @kozmoai/backend-tasks@0.4.1
  - @kozmoai/plugin-catalog-node@1.3.1
  - @kozmoai/plugin-catalog-backend@1.7.0
  - @kozmoai/config@1.0.6
  - @kozmoai/plugin-events-node@0.2.1
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.10

## 0.2.3-next.2

### Patch Changes

- f8d91a8810: fixed `catalogPath` option to properly glob match on received GitHub events.
- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@kozmoai/backend-common`.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.3.0-next.1
  - @kozmoai/backend-common@0.18.0-next.1
  - @kozmoai/backend-tasks@0.4.1-next.1
  - @kozmoai/catalog-client@1.3.0-next.2
  - @kozmoai/plugin-catalog-backend@1.7.0-next.2
  - @kozmoai/plugin-catalog-node@1.3.1-next.2
  - @kozmoai/plugin-events-node@0.2.1-next.1
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.10-next.1

## 0.2.3-next.1

### Patch Changes

- 427d8f4411: Added support for event based updates in the `GithubOrgEntityProvider`!
  Based on webhook events from GitHub the affected `User` or `Group` entity will be refreshed.
  This includes adding new entities, refreshing existing ones, and removing obsolete ones.

  Please find more information at
  https://glint.io/docs/integrations/github/org#installation-with-events-support

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.2.1-next.0
  - @kozmoai/backend-common@0.18.0-next.0
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/plugin-catalog-backend@1.7.0-next.1
  - @kozmoai/plugin-catalog-node@1.3.1-next.1
  - @kozmoai/plugin-events-node@0.2.1-next.0
  - @kozmoai/backend-tasks@0.4.1-next.0
  - @kozmoai/catalog-client@1.3.0-next.1
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.10-next.1

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.5-next.0
  - @kozmoai/catalog-client@1.3.0-next.0
  - @kozmoai/plugin-catalog-backend@1.7.0-next.0
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/backend-plugin-api@0.2.0
  - @kozmoai/backend-tasks@0.4.0
  - @kozmoai/config@1.0.5
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.10-next.0
  - @kozmoai/plugin-catalog-node@1.3.1-next.0
  - @kozmoai/plugin-events-node@0.2.0

## 0.2.2

### Patch Changes

- 70fa5ec3ec: Fixes the assignment of group member references in `GithubMultiOrgProcessor` so membership relations are resolved correctly.
- 884d749b14: Refactored to use `coreServices` from `@kozmoai/backend-plugin-api`.
- fe93cce743: Added the githubCredentialsProvider property to the GithubLocationAnalyzerOptions to be able to override the GithubCredentialsProvider.
- a0fd4af94a: Handle GitHub `push` events at the `GithubEntityProvider` by subscribing to the topic `github.push.`

  Implements `EventSubscriber` to receive events for the topic `github.push`.

  On `github.push`, the affected repository will be refreshed.
  This includes adding new Location entities, refreshing existing ones,
  and removing obsolete ones.

  Please find more information at
  https://glint.io/docs/integrations/github/discovery#installation-with-events-support

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- 754b5854df: Fix incorrectly exported GithubOrgEntityProvider as a type
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0
  - @kozmoai/catalog-client@1.2.0
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/plugin-catalog-node@1.3.0
  - @kozmoai/backend-tasks@0.4.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/backend-plugin-api@0.2.0
  - @kozmoai/plugin-events-node@0.2.0
  - @kozmoai/integration@1.4.1
  - @kozmoai/types@1.0.2
  - @kozmoai/catalog-model@1.1.4
  - @kozmoai/config@1.0.5
  - @kozmoai/plugin-catalog-common@1.0.9

## 0.2.2-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0-next.3
  - @kozmoai/backend-tasks@0.4.0-next.3
  - @kozmoai/backend-common@0.17.0-next.3
  - @kozmoai/backend-plugin-api@0.2.0-next.3
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/integration@1.4.1-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/plugin-catalog-common@1.0.9-next.3
  - @kozmoai/plugin-catalog-node@1.3.0-next.3
  - @kozmoai/plugin-events-node@0.2.0-next.3

## 0.2.2-next.2

### Patch Changes

- 884d749b14: Refactored to use `coreServices` from `@kozmoai/backend-plugin-api`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0-next.2
  - @kozmoai/plugin-catalog-node@1.3.0-next.2
  - @kozmoai/backend-common@0.17.0-next.2
  - @kozmoai/backend-plugin-api@0.2.0-next.2
  - @kozmoai/backend-tasks@0.4.0-next.2
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/integration@1.4.1-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/plugin-catalog-common@1.0.9-next.2
  - @kozmoai/plugin-events-node@0.2.0-next.2

## 0.2.2-next.1

### Patch Changes

- fe93cce743: Added the githubCredentialsProvider property to the GithubLocationAnalyzerOptions to be able to override the GithubCredentialsProvider.
- a0fd4af94a: Handle GitHub `push` events at the `GithubEntityProvider` by subscribing to the topic `github.push.`

  Implements `EventSubscriber` to receive events for the topic `github.push`.

  On `github.push`, the affected repository will be refreshed.
  This includes adding new Location entities, refreshing existing ones,
  and removing obsolete ones.

  Please find more information at
  https://glint.io/docs/integrations/github/discovery#installation-with-events-support

- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.1
  - @kozmoai/plugin-catalog-backend@1.6.0-next.1
  - @kozmoai/backend-tasks@0.4.0-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/backend-plugin-api@0.1.5-next.1
  - @kozmoai/plugin-catalog-node@1.2.2-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/integration@1.4.1-next.1
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/plugin-catalog-common@1.0.9-next.1
  - @kozmoai/plugin-events-node@0.2.0-next.1

## 0.2.2-next.0

### Patch Changes

- 70fa5ec3ec: Fixes the assignment of group member references in `GithubMultiOrgProcessor` so membership relations are resolved correctly.
- 3280711113: Updated dependency `msw` to `^0.49.0`.
- 754b5854df: Fix incorrectly exported GithubOrgEntityProvider as a type
- Updated dependencies
  - @kozmoai/catalog-client@1.2.0-next.0
  - @kozmoai/plugin-catalog-backend@1.6.0-next.0
  - @kozmoai/backend-common@0.16.1-next.0
  - @kozmoai/integration@1.4.1-next.0
  - @kozmoai/types@1.0.2-next.0
  - @kozmoai/backend-plugin-api@0.1.5-next.0
  - @kozmoai/plugin-catalog-node@1.2.2-next.0
  - @kozmoai/backend-tasks@0.3.8-next.0
  - @kozmoai/catalog-model@1.1.4-next.0
  - @kozmoai/config@1.0.5-next.0
  - @kozmoai/errors@1.1.4-next.0

## 0.2.0

### Minor Changes

- 67fe5bc9a9: BREAKING: Support authenticated backends by including a server token for catalog requests. The constructor of `GithubLocationAnalyzer` now requires an instance of `TokenManager` to be supplied:

  ```diff
  ...
    builder.addLocationAnalyzers(
      new GitHubLocationAnalyzer({
        discovery: env.discovery,
        config: env.config,
  +     tokenManager: env.tokenManager,
      }),
    );
  ...
  ```

- f64d66a45c: Added the ability for the GitHub discovery provider to validate that catalog files exist before emitting them.

  Users can now set the `validateLocationsExist` property to `true` in their GitHub discovery configuration to opt in to this feature.
  This feature only works with `catalogPath`s that do not contain wildcards.

  When `validateLocationsExist` is set to `true`, the GitHub discovery provider will retrieve the object from the
  repository at the provided `catalogPath`.
  If this file exists and is non-empty, then it will be emitted as a location for further processing.
  If this file does not exist or is empty, then it will not be emitted.
  Not emitting locations that do not exist allows for far fewer calls to the GitHub API to validate locations that do not exist.

### Patch Changes

- 67fe5bc9a9: Properly derive Github credentials when making requests in `GithubLocationAnalyzer` to support Github App authentication
- bef063dc8d: - Make it possible to inject custom user and team transformers when configuring the `GithubOrgEntityProvider`
- 4c9f7847e4: Updated dependency `msw` to `^0.48.0` while moving it to be a dev dependency.
- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.
- Updated dependencies
  - @kozmoai/backend-common@0.16.0
  - @kozmoai/plugin-catalog-backend@1.5.1
  - @kozmoai/integration@1.4.0
  - @kozmoai/backend-tasks@0.3.7
  - @kozmoai/catalog-model@1.1.3
  - @kozmoai/types@1.0.1
  - @kozmoai/backend-plugin-api@0.1.4
  - @kozmoai/plugin-catalog-node@1.2.1
  - @kozmoai/catalog-client@1.1.2
  - @kozmoai/config@1.0.4
  - @kozmoai/errors@1.1.3

## 0.2.0-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.1
  - @kozmoai/backend-plugin-api@0.1.4-next.1
  - @kozmoai/backend-tasks@0.3.7-next.1
  - @kozmoai/plugin-catalog-backend@1.5.1-next.1
  - @kozmoai/plugin-catalog-node@1.2.1-next.1
  - @kozmoai/catalog-client@1.1.2-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/integration@1.4.0-next.0
  - @kozmoai/types@1.0.1-next.0

## 0.2.0-next.0

### Minor Changes

- 67fe5bc9a9: BREAKING: Support authenticated backends by including a server token for catalog requests. The constructor of `GithubLocationAnalyzer` now requires an instance of `TokenManager` to be supplied:

  ```diff
  ...
    builder.addLocationAnalyzers(
      new GitHubLocationAnalyzer({
        discovery: env.discovery,
        config: env.config,
  +     tokenManager: env.tokenManager,
      }),
    );
  ...
  ```

- f64d66a45c: Added the ability for the GitHub discovery provider to validate that catalog files exist before emitting them.

  Users can now set the `validateLocationsExist` property to `true` in their GitHub discovery configuration to opt in to this feature.
  This feature only works with `catalogPath`s that do not contain wildcards.

  When `validateLocationsExist` is set to `true`, the GitHub discovery provider will retrieve the object from the
  repository at the provided `catalogPath`.
  If this file exists and is non-empty, then it will be emitted as a location for further processing.
  If this file does not exist or is empty, then it will not be emitted.
  Not emitting locations that do not exist allows for far fewer calls to the GitHub API to validate locations that do not exist.

### Patch Changes

- 67fe5bc9a9: Properly derive Github credentials when making requests in `GithubLocationAnalyzer` to support Github App authentication
- c1784a4980: Replaces in-code uses of `GitHub` with `Github` and deprecates old versions.
- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.0
  - @kozmoai/plugin-catalog-backend@1.5.1-next.0
  - @kozmoai/integration@1.4.0-next.0
  - @kozmoai/backend-tasks@0.3.7-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/types@1.0.1-next.0
  - @kozmoai/backend-plugin-api@0.1.4-next.0
  - @kozmoai/plugin-catalog-node@1.2.1-next.0
  - @kozmoai/catalog-client@1.1.2-next.0
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/errors@1.1.3-next.0

## 0.1.8

### Patch Changes

- 8749df3d02: `GitHubEntityProvider`: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  https://glint.io/docs/integrations/github/discovery

- 7022aebf35: Added `GithubLocationAnalyzer`. This can be used to add to the `CatalogBuilder`. When added this will be used by `RepoLocationAnalyzer` to figure out if the given URL that you are trying to import from the /catalog-import page already contains catalog-info.yaml files.
- 51046b58b0: Use schedule from config at backend module.

  Also, it removes `GithubEntityProviderCatalogModuleOptions`
  in favor of config-only for the backend module setup
  like at other similar modules.

- 7edb5909e8: Add missing config schema for the `GitHubEntityProvider`.
- be9474b103: Replaces in-code uses of `GitHub` by `Github` and deprecates old versions.

  Deprecates

  - `GitHubEntityProvider` replaced by `GithubEntityProvider`
  - `GitHubLocationAnalyzer` replaced by `GithubLocationAnalyzer`
  - `GitHubLocationAnalyzerOptions` replaced by `GithubLocationAnalyzerOptions`
  - `GitHubOrgEntityProvider` replaced by `GithubOrgEntityProvider`
  - `GitHubOrgEntityProviderOptions` replaced by `GithubOrgEntityProviderOptions`

  Renames

  - `GitHubLocationAnalyzer` to `GithubLocationAnalyzer`
  - `GitHubLocationAnalyzerOptions` to `GithubLocationAnalyzerOptions`

- a35a27df70: Updated the `moduleId` of the experimental module export.
- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.2.0
  - @kozmoai/catalog-model@1.1.2
  - @kozmoai/backend-common@0.15.2
  - @kozmoai/plugin-catalog-backend@1.5.0
  - @kozmoai/backend-tasks@0.3.6
  - @kozmoai/backend-plugin-api@0.1.3
  - @kozmoai/catalog-client@1.1.1
  - @kozmoai/config@1.0.3
  - @kozmoai/errors@1.1.2
  - @kozmoai/integration@1.3.2
  - @kozmoai/types@1.0.0

## 0.1.8-next.2

### Patch Changes

- 7022aebf35: Added `GitHubLocationAnalyzer`. This can be used to add to the `CatalogBuilder`. When added this will be used by `RepoLocationAnalyzer` to figure out if the given URL that you are trying to import from the /catalog-import page already contains catalog-info.yaml files.
- 7edb5909e8: Add missing config schema for the `GitHubEntityProvider`.
- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.2.0-next.2
  - @kozmoai/plugin-catalog-backend@1.5.0-next.2
  - @kozmoai/backend-tasks@0.3.6-next.2
  - @kozmoai/backend-common@0.15.2-next.2
  - @kozmoai/backend-plugin-api@0.1.3-next.2
  - @kozmoai/catalog-client@1.1.1-next.2
  - @kozmoai/catalog-model@1.1.2-next.2
  - @kozmoai/config@1.0.3-next.2
  - @kozmoai/errors@1.1.2-next.2
  - @kozmoai/integration@1.3.2-next.2
  - @kozmoai/types@1.0.0

## 0.1.8-next.1

### Patch Changes

- a35a27df70: Updated the `moduleId` of the experimental module export.
- Updated dependencies
  - @kozmoai/backend-common@0.15.2-next.1
  - @kozmoai/backend-plugin-api@0.1.3-next.1
  - @kozmoai/backend-tasks@0.3.6-next.1
  - @kozmoai/catalog-model@1.1.2-next.1
  - @kozmoai/config@1.0.3-next.1
  - @kozmoai/errors@1.1.2-next.1
  - @kozmoai/integration@1.3.2-next.1
  - @kozmoai/types@1.0.0
  - @kozmoai/plugin-catalog-backend@1.4.1-next.1
  - @kozmoai/plugin-catalog-node@1.1.1-next.1

## 0.1.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.2-next.0
  - @kozmoai/backend-plugin-api@0.1.3-next.0
  - @kozmoai/plugin-catalog-backend@1.4.1-next.0
  - @kozmoai/plugin-catalog-node@1.1.1-next.0
  - @kozmoai/backend-common@0.15.2-next.0
  - @kozmoai/backend-tasks@0.3.6-next.0
  - @kozmoai/config@1.0.3-next.0
  - @kozmoai/errors@1.1.2-next.0
  - @kozmoai/integration@1.3.2-next.0
  - @kozmoai/types@1.0.0

## 0.1.7

### Patch Changes

- 3c4a388537: New experimental alpha exports for use with the upcoming backend system.
- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- 3a62594a11: Add support for including (or excluding) Github repositories by topic
- 287a64bf97: Added the ability to configure the host for the `GitHubEntityProvider` to use against GitHub Enterprise
- 91e2abbd46: Remove the duplicated `scheduleFn` initialization in `GitHubEntityProvider`.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.2
  - @kozmoai/backend-common@0.15.1
  - @kozmoai/plugin-catalog-node@1.1.0
  - @kozmoai/integration@1.3.1
  - @kozmoai/plugin-catalog-backend@1.4.0
  - @kozmoai/backend-tasks@0.3.5
  - @kozmoai/catalog-model@1.1.1
  - @kozmoai/config@1.0.2
  - @kozmoai/errors@1.1.1

## 0.1.7-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.1.0-next.2
  - @kozmoai/backend-plugin-api@0.1.2-next.2
  - @kozmoai/catalog-model@1.1.1-next.0
  - @kozmoai/config@1.0.2-next.0
  - @kozmoai/errors@1.1.1-next.0
  - @kozmoai/integration@1.3.1-next.2
  - @kozmoai/plugin-catalog-backend@1.4.0-next.3
  - @kozmoai/backend-common@0.15.1-next.3
  - @kozmoai/backend-tasks@0.3.5-next.1

## 0.1.7-next.2

### Patch Changes

- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- 3a62594a11: Add support for including (or excluding) Github repositories by topic
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.2-next.1
  - @kozmoai/plugin-catalog-node@1.0.2-next.1
  - @kozmoai/backend-common@0.15.1-next.2
  - @kozmoai/integration@1.3.1-next.1
  - @kozmoai/plugin-catalog-backend@1.4.0-next.2

## 0.1.7-next.1

### Patch Changes

- 287a64bf97: Added the ability to configure the host for the `GitHubEntityProvider` to use against GitHub Enterprise
- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.1
  - @kozmoai/plugin-catalog-backend@1.4.0-next.1

## 0.1.7-next.0

### Patch Changes

- 3c4a388537: New experimental alpha exports for use with the upcoming backend system.
- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.0
  - @kozmoai/backend-tasks@0.3.5-next.0
  - @kozmoai/plugin-catalog-backend@1.3.2-next.0
  - @kozmoai/backend-plugin-api@0.1.2-next.0
  - @kozmoai/integration@1.3.1-next.0
  - @kozmoai/plugin-catalog-node@1.0.2-next.0

## 0.1.6

### Patch Changes

- f48950e34b: Github Entity Provider functionality for adding entities to the catalog.

  This provider replaces the GithubDiscoveryProcessor functionality as providers offer more flexibility with scheduling ingestion, removing and preventing orphaned entities.

  More information can be found on the [GitHub Discovery](https://glint.io/docs/integrations/github/discovery) page.

- c59d1ce487: Fixed bug where repository filter was including all archived repositories
- 97f0a37378: Improved support for wildcards in `catalogPath`
- Updated dependencies
  - @kozmoai/backend-common@0.15.0
  - @kozmoai/integration@1.3.0
  - @kozmoai/backend-tasks@0.3.4
  - @kozmoai/plugin-catalog-backend@1.3.1

## 0.1.6-next.2

### Patch Changes

- 97f0a37378: Improved support for wildcards in `catalogPath`
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.3.1-next.2

## 0.1.6-next.1

### Patch Changes

- f48950e34b: Github Entity Provider functionality for adding entities to the catalog.

  This provider replaces the GithubDiscoveryProcessor functionality as providers offer more flexibility with scheduling ingestion, removing and preventing orphaned entities.

  More information can be found on the [GitHub Discovery](https://glint.io/docs/integrations/github/discovery) page.

- Updated dependencies
  - @kozmoai/backend-common@0.15.0-next.1
  - @kozmoai/integration@1.3.0-next.1
  - @kozmoai/plugin-catalog-backend@1.3.1-next.1

## 0.1.6-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.0-next.0
  - @kozmoai/integration@1.3.0-next.0
  - @kozmoai/backend-tasks@0.3.4-next.0
  - @kozmoai/plugin-catalog-backend@1.3.1-next.0

## 0.1.5

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- 0f25116d28: Updated dependency `@octokit/graphql` to `^5.0.0`.
- 8006d0f9bf: Updated dependency `msw` to `^0.44.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.3.0
  - @kozmoai/backend-common@0.14.1
  - @kozmoai/catalog-model@1.1.0
  - @kozmoai/integration@1.2.2
  - @kozmoai/backend-tasks@0.3.3
  - @kozmoai/errors@1.1.0

## 0.1.5-next.2

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- 0f25116d28: Updated dependency `@octokit/graphql` to `^5.0.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.3.0-next.3
  - @kozmoai/backend-common@0.14.1-next.3
  - @kozmoai/integration@1.2.2-next.3
  - @kozmoai/backend-tasks@0.3.3-next.3
  - @kozmoai/catalog-model@1.1.0-next.3

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.0-next.1
  - @kozmoai/backend-common@0.14.1-next.1
  - @kozmoai/errors@1.1.0-next.0
  - @kozmoai/plugin-catalog-backend@1.2.1-next.1
  - @kozmoai/backend-tasks@0.3.3-next.1
  - @kozmoai/integration@1.2.2-next.1

## 0.1.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.1-next.0
  - @kozmoai/catalog-model@1.1.0-next.0
  - @kozmoai/integration@1.2.2-next.0
  - @kozmoai/backend-tasks@0.3.3-next.0
  - @kozmoai/plugin-catalog-backend@1.2.1-next.0

## 0.1.4

### Patch Changes

- 8335a6f6f3: Adds an edit URL to the GitHub Teams Group entities.
- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.2.0
  - @kozmoai/backend-tasks@0.3.2
  - @kozmoai/backend-common@0.14.0
  - @kozmoai/integration@1.2.1
  - @kozmoai/catalog-model@1.0.3

## 0.1.4-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.0-next.2
  - @kozmoai/integration@1.2.1-next.2
  - @kozmoai/backend-tasks@0.3.2-next.2
  - @kozmoai/plugin-catalog-backend@1.2.0-next.2

## 0.1.4-next.1

### Patch Changes

- 8335a6f6f3: Adds an edit URL to the GitHub Teams Group entities.
- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @kozmoai/backend-tasks@0.3.2-next.1
  - @kozmoai/backend-common@0.13.6-next.1
  - @kozmoai/integration@1.2.1-next.1
  - @kozmoai/plugin-catalog-backend@1.2.0-next.1
  - @kozmoai/catalog-model@1.0.3-next.0

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-tasks@0.3.2-next.0
  - @kozmoai/backend-common@0.13.6-next.0
  - @kozmoai/integration@1.2.1-next.0
  - @kozmoai/plugin-catalog-backend@1.2.0-next.0

## 0.1.3

### Patch Changes

- a7de43f648: `GitHubOrgEntityProvider.fromConfig` now supports a `schedule` option like other
  entity providers, that makes it more convenient to leverage using the common
  task scheduler.

  If you want to use this in your own project, it is used something like the following:

  ```ts
  // In packages/backend/src/plugins/catalog.ts
  builder.addEntityProvider(
    GitHubOrgEntityProvider.fromConfig(env.config, {
      id: 'production',
      orgUrl: 'https://github.com/kozmoai',
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: { cron: '*/30 * * * *' },
        timeout: { minutes: 10 },
      }),
      logger: env.logger,
    }),
  );
  ```

- Updated dependencies
  - @kozmoai/backend-common@0.13.3
  - @kozmoai/plugin-catalog-backend@1.1.2
  - @kozmoai/backend-tasks@0.3.1
  - @kozmoai/integration@1.2.0
  - @kozmoai/config@1.0.1
  - @kozmoai/catalog-model@1.0.2

## 0.1.3-next.1

### Patch Changes

- a7de43f648: `GitHubOrgEntityProvider.fromConfig` now supports a `schedule` option like other
  entity providers, that makes it more convenient to leverage using the common
  task scheduler.

  If you want to use this in your own project, it is used something like the following:

  ```ts
  // In packages/backend/src/plugins/catalog.ts
  builder.addEntityProvider(
    GitHubOrgEntityProvider.fromConfig(env.config, {
      id: 'production',
      orgUrl: 'https://github.com/kozmoai',
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: { cron: '*/30 * * * *' },
        timeout: { minutes: 10 },
      }),
      logger: env.logger,
    }),
  );
  ```

- Updated dependencies
  - @kozmoai/backend-common@0.13.3-next.2
  - @kozmoai/plugin-catalog-backend@1.1.2-next.2
  - @kozmoai/backend-tasks@0.3.1-next.1
  - @kozmoai/config@1.0.1-next.0
  - @kozmoai/catalog-model@1.0.2-next.0
  - @kozmoai/integration@1.2.0-next.1

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.3-next.0
  - @kozmoai/integration@1.2.0-next.0
  - @kozmoai/plugin-catalog-backend@1.1.2-next.0

## 0.1.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.1.0
  - @kozmoai/integration@1.1.0
  - @kozmoai/catalog-model@1.0.1
  - @kozmoai/backend-common@0.13.2

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.1.0-next.1
  - @kozmoai/integration@1.1.0-next.1
  - @kozmoai/backend-common@0.13.2-next.1

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.0.1-next.0
  - @kozmoai/plugin-catalog-backend@1.0.1-next.0
  - @kozmoai/backend-common@0.13.2-next.0
  - @kozmoai/integration@1.0.1-next.0

## 0.1.1

### Patch Changes

- 132189e466: Updated the code to handle User kind `spec.memberOf` now being optional.
- e949d68059: Made sure to move the catalog-related github and ldap config into their right places
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.0.0
  - @kozmoai/backend-common@0.13.1
  - @kozmoai/catalog-model@1.0.0
  - @kozmoai/integration@1.0.0
  - @kozmoai/config@1.0.0
  - @kozmoai/errors@1.0.0
  - @kozmoai/types@1.0.0

## 0.1.0

### Minor Changes

- d4934e19b1: Added package, moving out GitHub specific functionality from the catalog-backend

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.0
  - @kozmoai/plugin-catalog-backend@0.24.0
  - @kozmoai/catalog-model@0.13.0
