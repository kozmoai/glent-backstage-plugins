# @kozmoai/plugin-search-backend

## 1.5.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/plugin-auth-node@0.4.9-next.1
  - @kozmoai/plugin-permission-common@0.7.13-next.1
  - @kozmoai/plugin-permission-node@0.7.25-next.1
  - @kozmoai/plugin-search-backend-node@1.2.18-next.1
  - @kozmoai/backend-openapi-utils@0.1.7-next.1
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-search-common@1.2.11-next.1

## 1.5.3-next.0

### Patch Changes

- 744c0cb: Update the router to use the new `auth` services, it now accepts an optional discovery service option to get credentials for the permission service.
- Updated dependencies
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/plugin-auth-node@0.4.8-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/plugin-permission-common@0.7.13-next.0
  - @kozmoai/plugin-search-common@1.2.11-next.0
  - @kozmoai/backend-openapi-utils@0.1.6-next.0
  - @kozmoai/plugin-search-backend-node@1.2.17-next.0
  - @kozmoai/plugin-permission-node@0.7.24-next.0
  - @kozmoai/config@1.1.2-next.0
  - @kozmoai/types@1.1.1

## 1.5.0

### Minor Changes

- 126c2f9: Updates the OpenAPI spec to use plugin as `info.title` instead of package name.
- 04907c3: Updates the OpenAPI specification title to plugin ID instead of package name.

### Patch Changes

- 3ed0eac: Authorized search engine now obeys query page limit
- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/plugin-auth-node@0.4.4
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/backend-openapi-utils@0.1.3
  - @kozmoai/plugin-permission-node@0.7.21
  - @kozmoai/plugin-search-backend-node@1.2.14
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-search-common@1.2.10

## 1.5.0-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/plugin-auth-node@0.4.4-next.3
  - @kozmoai/plugin-permission-node@0.7.21-next.3
  - @kozmoai/plugin-search-backend-node@1.2.14-next.3
  - @kozmoai/backend-openapi-utils@0.1.3-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-search-common@1.2.10

## 1.5.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-auth-node@0.4.4-next.2
  - @kozmoai/plugin-permission-node@0.7.21-next.2
  - @kozmoai/plugin-search-backend-node@1.2.14-next.2
  - @kozmoai/backend-openapi-utils@0.1.3-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-search-common@1.2.10

## 1.5.0-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/backend-openapi-utils@0.1.3-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-auth-node@0.4.4-next.1
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-node@0.7.21-next.1
  - @kozmoai/plugin-search-backend-node@1.2.14-next.1
  - @kozmoai/plugin-search-common@1.2.10

## 1.5.0-next.0

### Minor Changes

- 126c2f9: Updates the OpenAPI spec to use plugin as `info.title` instead of package name.
- 04907c3: Updates the OpenAPI specification title to plugin ID instead of package name.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/backend-openapi-utils@0.1.3-next.0
  - @kozmoai/plugin-auth-node@0.4.4-next.0
  - @kozmoai/plugin-permission-node@0.7.21-next.0
  - @kozmoai/plugin-search-backend-node@1.2.14-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-search-common@1.2.10

## 1.4.9

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/backend-openapi-utils@0.1.2
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-node@0.7.20
  - @kozmoai/plugin-auth-node@0.4.3
  - @kozmoai/plugin-search-backend-node@1.2.13
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-search-common@1.2.10

## 1.4.9-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.2
  - @kozmoai/backend-common@0.20.1-next.2
  - @kozmoai/backend-openapi-utils@0.1.2-next.2
  - @kozmoai/plugin-auth-node@0.4.3-next.2
  - @kozmoai/plugin-permission-node@0.7.20-next.2
  - @kozmoai/plugin-search-backend-node@1.2.13-next.2

## 1.4.9-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-auth-node@0.4.3-next.1
  - @kozmoai/plugin-permission-node@0.7.20-next.1
  - @kozmoai/plugin-search-backend-node@1.2.13-next.1
  - @kozmoai/backend-openapi-utils@0.1.2-next.1
  - @kozmoai/backend-plugin-api@0.6.9-next.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.11
  - @kozmoai/plugin-search-common@1.2.9

## 1.4.9-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/backend-openapi-utils@0.1.2-next.0
  - @kozmoai/backend-plugin-api@0.6.9-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-auth-node@0.4.3-next.0
  - @kozmoai/plugin-permission-common@0.7.11
  - @kozmoai/plugin-permission-node@0.7.20-next.0
  - @kozmoai/plugin-search-backend-node@1.2.13-next.0
  - @kozmoai/plugin-search-common@1.2.9

## 1.4.8

### Patch Changes

- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/backend-openapi-utils@0.1.1
  - @kozmoai/plugin-auth-node@0.4.2
  - @kozmoai/plugin-permission-common@0.7.11
  - @kozmoai/plugin-permission-node@0.7.19
  - @kozmoai/plugin-search-backend-node@1.2.12
  - @kozmoai/backend-plugin-api@0.6.8
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-search-common@1.2.9

## 1.4.8-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/backend-openapi-utils@0.1.1-next.3
  - @kozmoai/backend-plugin-api@0.6.8-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-auth-node@0.4.2-next.3
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.3
  - @kozmoai/plugin-search-backend-node@1.2.12-next.3
  - @kozmoai/plugin-search-common@1.2.8

## 1.4.8-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.2
  - @kozmoai/plugin-auth-node@0.4.2-next.2
  - @kozmoai/backend-openapi-utils@0.1.1-next.2
  - @kozmoai/backend-plugin-api@0.6.8-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.2
  - @kozmoai/plugin-search-backend-node@1.2.12-next.2
  - @kozmoai/plugin-search-common@1.2.8

## 1.4.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.1
  - @kozmoai/backend-openapi-utils@0.1.1-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-auth-node@0.4.2-next.1
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.1
  - @kozmoai/plugin-search-backend-node@1.2.12-next.1
  - @kozmoai/plugin-search-common@1.2.8

## 1.4.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.0
  - @kozmoai/backend-openapi-utils@0.1.1-next.0
  - @kozmoai/plugin-auth-node@0.4.2-next.0
  - @kozmoai/plugin-permission-node@0.7.19-next.0
  - @kozmoai/plugin-search-backend-node@1.2.12-next.0
  - @kozmoai/backend-plugin-api@0.6.8-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-search-common@1.2.8

## 1.4.7

### Patch Changes

- 6694b369a3: Update the OpenAPI spec with more complete error responses and request bodies using Optic. Also, updates the test cases to use the new `supertest` pass through from `@kozmoai/backend-openapi-utils`.
- Updated dependencies
  - @kozmoai/plugin-search-backend-node@1.2.11
  - @kozmoai/backend-common@0.19.9
  - @kozmoai/backend-plugin-api@0.6.7
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/backend-openapi-utils@0.1.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-auth-node@0.4.1
  - @kozmoai/plugin-permission-node@0.7.18
  - @kozmoai/plugin-search-common@1.2.8

## 1.4.7-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.2
  - @kozmoai/backend-common@0.19.9-next.2
  - @kozmoai/backend-openapi-utils@0.1.0-next.2
  - @kozmoai/plugin-auth-node@0.4.1-next.2
  - @kozmoai/plugin-permission-node@0.7.18-next.2
  - @kozmoai/plugin-search-backend-node@1.2.11-next.2

## 1.4.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.1
  - @kozmoai/plugin-auth-node@0.4.1-next.1
  - @kozmoai/plugin-permission-node@0.7.18-next.1
  - @kozmoai/plugin-search-backend-node@1.2.11-next.1
  - @kozmoai/backend-openapi-utils@0.1.0-next.1
  - @kozmoai/backend-plugin-api@0.6.7-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.9
  - @kozmoai/plugin-search-common@1.2.7

## 1.4.7-next.0

### Patch Changes

- 6694b369a3: Update the OpenAPI spec with more complete error responses and request bodies using Optic. Also, updates the test cases to use the new `supertest` pass through from `@kozmoai/backend-openapi-utils`.
- Updated dependencies
  - @kozmoai/plugin-search-backend-node@1.2.11-next.0
  - @kozmoai/backend-openapi-utils@0.1.0-next.0
  - @kozmoai/backend-common@0.19.9-next.0
  - @kozmoai/backend-plugin-api@0.6.7-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-auth-node@0.4.1-next.0
  - @kozmoai/plugin-permission-common@0.7.9
  - @kozmoai/plugin-permission-node@0.7.18-next.0
  - @kozmoai/plugin-search-common@1.2.7

## 1.4.6

### Patch Changes

- 16be6f9473: Set the default length limit to search query to 100. To override it, define `search.maxTermLength` in the config file.
- Updated dependencies
  - @kozmoai/backend-common@0.19.8
  - @kozmoai/plugin-auth-node@0.4.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/backend-openapi-utils@0.0.5
  - @kozmoai/backend-plugin-api@0.6.6
  - @kozmoai/plugin-search-backend-node@1.2.10
  - @kozmoai/plugin-permission-node@0.7.17
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.9
  - @kozmoai/plugin-search-common@1.2.7

## 1.4.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8-next.2
  - @kozmoai/plugin-auth-node@0.4.0-next.2
  - @kozmoai/errors@1.2.3-next.0
  - @kozmoai/backend-openapi-utils@0.0.5-next.0
  - @kozmoai/plugin-permission-node@0.7.17-next.2
  - @kozmoai/plugin-search-backend-node@1.2.10-next.2
  - @kozmoai/backend-plugin-api@0.6.6-next.2
  - @kozmoai/config@1.1.1-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.9-next.0
  - @kozmoai/plugin-search-common@1.2.7-next.0

## 1.4.5-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.7-next.1
  - @kozmoai/backend-plugin-api@0.6.5-next.1
  - @kozmoai/plugin-search-backend-node@1.2.9-next.1
  - @kozmoai/plugin-auth-node@0.3.2-next.1
  - @kozmoai/plugin-permission-node@0.7.16-next.1
  - @kozmoai/config@1.1.0
  - @kozmoai/backend-openapi-utils@0.0.4
  - @kozmoai/errors@1.2.2
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.8
  - @kozmoai/plugin-search-common@1.2.6

## 1.4.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.3.2-next.0
  - @kozmoai/backend-common@0.19.7-next.0
  - @kozmoai/config@1.1.0
  - @kozmoai/backend-openapi-utils@0.0.4
  - @kozmoai/backend-plugin-api@0.6.5-next.0
  - @kozmoai/errors@1.2.2
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-common@0.7.8
  - @kozmoai/plugin-permission-node@0.7.16-next.0
  - @kozmoai/plugin-search-backend-node@1.2.9-next.0
  - @kozmoai/plugin-search-common@1.2.6

## 1.4.3

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
  - @kozmoai/backend-common@0.19.5
  - @kozmoai/plugin-auth-node@0.3.0
  - @kozmoai/config@1.1.0
  - @kozmoai/errors@1.2.2
  - @kozmoai/plugin-permission-common@0.7.8
  - @kozmoai/plugin-search-common@1.2.6
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-permission-node@0.7.14
  - @kozmoai/backend-plugin-api@0.6.3
  - @kozmoai/backend-openapi-utils@0.0.4
  - @kozmoai/plugin-search-backend-node@1.2.7

## 1.4.3-next.3

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
  - @kozmoai/config@1.1.0-next.2
  - @kozmoai/errors@1.2.2-next.0
  - @kozmoai/plugin-permission-common@0.7.8-next.2
  - @kozmoai/plugin-search-common@1.2.6-next.2
  - @kozmoai/types@1.1.1-next.0
  - @kozmoai/plugin-permission-node@0.7.14-next.3
  - @kozmoai/backend-plugin-api@0.6.3-next.3
  - @kozmoai/backend-common@0.19.5-next.3
  - @kozmoai/backend-openapi-utils@0.0.4-next.0
  - @kozmoai/plugin-auth-node@0.3.0-next.3
  - @kozmoai/plugin-search-backend-node@1.2.7-next.3

## 1.4.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.1
  - @kozmoai/backend-common@0.19.5-next.2
  - @kozmoai/plugin-auth-node@0.3.0-next.2
  - @kozmoai/plugin-permission-node@0.7.14-next.2
  - @kozmoai/backend-plugin-api@0.6.3-next.2
  - @kozmoai/plugin-permission-common@0.7.8-next.1
  - @kozmoai/plugin-search-backend-node@1.2.7-next.2
  - @kozmoai/backend-openapi-utils@0.0.3
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-search-common@1.2.6-next.1

## 1.4.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.0
  - @kozmoai/backend-common@0.19.5-next.1
  - @kozmoai/backend-plugin-api@0.6.3-next.1
  - @kozmoai/plugin-auth-node@0.3.0-next.1
  - @kozmoai/plugin-permission-common@0.7.8-next.0
  - @kozmoai/plugin-permission-node@0.7.14-next.1
  - @kozmoai/plugin-search-backend-node@1.2.7-next.1
  - @kozmoai/backend-openapi-utils@0.0.3
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-search-common@1.2.6-next.0

## 1.4.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.3.0-next.0
  - @kozmoai/backend-common@0.19.4-next.0
  - @kozmoai/backend-openapi-utils@0.0.3
  - @kozmoai/backend-plugin-api@0.6.2-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-permission-node@0.7.13-next.0
  - @kozmoai/plugin-search-backend-node@1.2.6-next.0
  - @kozmoai/plugin-search-common@1.2.5

## 1.4.0

### Minor Changes

- ebeb77586975: Now performs request validation based on OpenAPI schema through `@kozmoai/backend-openapi-utils`. Error responses for invalid input, like `"a"` instead of a number, may have changed.

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 12a8c94eda8d: Add package repository and homepage metadata
- 951ab6c9db58: Add missing `configSchema` to package.json
- Updated dependencies
  - @kozmoai/backend-common@0.19.2
  - @kozmoai/backend-plugin-api@0.6.0
  - @kozmoai/backend-openapi-utils@0.0.3
  - @kozmoai/plugin-search-backend-node@1.2.4
  - @kozmoai/plugin-auth-node@0.2.17
  - @kozmoai/plugin-permission-node@0.7.11
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-search-common@1.2.5

## 1.4.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.0-next.2
  - @kozmoai/backend-common@0.19.2-next.2
  - @kozmoai/plugin-permission-node@0.7.11-next.2
  - @kozmoai/plugin-search-backend-node@1.2.4-next.2
  - @kozmoai/plugin-auth-node@0.2.17-next.2

## 1.4.0-next.1

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 12a8c94eda8d: Add package repository and homepage metadata
- 951ab6c9db58: Add missing `configSchema` to package.json
- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.1
  - @kozmoai/backend-openapi-utils@0.0.3-next.1
  - @kozmoai/plugin-search-backend-node@1.2.4-next.1
  - @kozmoai/plugin-auth-node@0.2.17-next.1
  - @kozmoai/backend-plugin-api@0.6.0-next.1
  - @kozmoai/plugin-permission-node@0.7.11-next.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-search-common@1.2.5

## 1.4.0-next.0

### Minor Changes

- ebeb77586975: Now performs request validation based on OpenAPI schema through `@kozmoai/backend-openapi-utils`. Error responses for invalid input, like `"a"` instead of a number, may have changed.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-openapi-utils@0.0.3-next.0
  - @kozmoai/plugin-search-backend-node@1.2.4-next.0
  - @kozmoai/backend-common@0.19.2-next.0
  - @kozmoai/backend-plugin-api@0.5.5-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-auth-node@0.2.17-next.0
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-permission-node@0.7.11-next.0
  - @kozmoai/plugin-search-common@1.2.5

## 1.3.3

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1
  - @kozmoai/backend-common@0.19.1
  - @kozmoai/backend-plugin-api@0.5.4
  - @kozmoai/config@1.0.8
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-auth-node@0.2.16
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-permission-node@0.7.10
  - @kozmoai/plugin-search-backend-node@1.2.3
  - @kozmoai/plugin-search-common@1.2.5

## 1.3.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1-next.0
  - @kozmoai/backend-common@0.19.1-next.0
  - @kozmoai/backend-plugin-api@0.5.4-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-auth-node@0.2.16-next.0
  - @kozmoai/plugin-permission-common@0.7.7-next.0
  - @kozmoai/plugin-permission-node@0.7.10-next.0
  - @kozmoai/plugin-search-backend-node@1.2.3-next.0
  - @kozmoai/plugin-search-common@1.2.5-next.0

## 1.3.2

### Patch Changes

- ee411e7c2623: Update OpenAPI specs to be in line with linting standards.
- Updated dependencies
  - @kozmoai/backend-common@0.19.0
  - @kozmoai/types@1.1.0
  - @kozmoai/errors@1.2.0
  - @kozmoai/backend-plugin-api@0.5.3
  - @kozmoai/plugin-auth-node@0.2.15
  - @kozmoai/plugin-permission-node@0.7.9
  - @kozmoai/plugin-search-backend-node@1.2.2
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-permission-common@0.7.6
  - @kozmoai/plugin-search-common@1.2.4

## 1.3.2-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.2
  - @kozmoai/backend-plugin-api@0.5.3-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.15-next.2
  - @kozmoai/plugin-permission-common@0.7.6-next.0
  - @kozmoai/plugin-permission-node@0.7.9-next.2
  - @kozmoai/plugin-search-backend-node@1.2.2-next.2
  - @kozmoai/plugin-search-common@1.2.4-next.0

## 1.3.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.1
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/backend-plugin-api@0.5.3-next.1
  - @kozmoai/plugin-auth-node@0.2.15-next.1
  - @kozmoai/plugin-permission-node@0.7.9-next.1
  - @kozmoai/plugin-search-backend-node@1.2.2-next.1
  - @kozmoai/plugin-permission-common@0.7.6-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-search-common@1.2.4-next.0

## 1.3.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.6-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/backend-plugin-api@0.5.3-next.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.15-next.0
  - @kozmoai/plugin-permission-common@0.7.5
  - @kozmoai/plugin-permission-node@0.7.9-next.0
  - @kozmoai/plugin-search-backend-node@1.2.2-next.0
  - @kozmoai/plugin-search-common@1.2.3

## 1.3.1

### Patch Changes

- 021cfbb5152: Added an OpenAPI 3.0 spec and enforced schema-first model on the router.
- Updated dependencies
  - @kozmoai/backend-common@0.18.5
  - @kozmoai/plugin-permission-node@0.7.8
  - @kozmoai/plugin-auth-node@0.2.14
  - @kozmoai/plugin-search-backend-node@1.2.1
  - @kozmoai/backend-plugin-api@0.5.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-permission-common@0.7.5
  - @kozmoai/plugin-search-common@1.2.3

## 1.3.1-next.2

### Patch Changes

- 021cfbb5152: Added an OpenAPI 3.0 spec and enforced schema-first model on the router.
- Updated dependencies
  - @kozmoai/config@1.0.7

## 1.3.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.1
  - @kozmoai/plugin-auth-node@0.2.14-next.1
  - @kozmoai/plugin-permission-node@0.7.8-next.1
  - @kozmoai/plugin-search-backend-node@1.2.1-next.1
  - @kozmoai/backend-plugin-api@0.5.2-next.1
  - @kozmoai/config@1.0.7

## 1.3.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.0
  - @kozmoai/plugin-permission-node@0.7.8-next.0
  - @kozmoai/plugin-auth-node@0.2.14-next.0
  - @kozmoai/plugin-search-backend-node@1.2.1-next.0
  - @kozmoai/backend-plugin-api@0.5.2-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-permission-common@0.7.5
  - @kozmoai/plugin-search-common@1.2.3

## 1.3.0

### Minor Changes

- 1469daa409e: Exports search plugin that can be used with the new backend system. For documentation on how to migrate, check out the [how to migrate to the new backend system guide](https://glint.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system).

### Patch Changes

- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- Updated dependencies
  - @kozmoai/backend-common@0.18.4
  - @kozmoai/plugin-permission-node@0.7.7
  - @kozmoai/plugin-permission-common@0.7.5
  - @kozmoai/plugin-search-backend-node@1.2.0
  - @kozmoai/plugin-auth-node@0.2.13
  - @kozmoai/backend-plugin-api@0.5.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-search-common@1.2.3

## 1.3.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/plugin-permission-node@0.7.7-next.2
  - @kozmoai/backend-plugin-api@0.5.1-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.13-next.2
  - @kozmoai/plugin-permission-common@0.7.5-next.0
  - @kozmoai/plugin-search-backend-node@1.2.0-next.2
  - @kozmoai/plugin-search-common@1.2.3-next.0

## 1.3.0-next.1

### Minor Changes

- 1469daa409e: Exports search plugin that can be used with the new backend system. For documentation on how to migrate, check out the [how to migrate to the new backend system guide](https://glint.io/docs/features/search/how-to-guides/#how-to-migrate-your-backend-installation-to-use-search-together-with-the-new-backend-system).

### Patch Changes

- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- Updated dependencies
  - @kozmoai/plugin-permission-node@0.7.7-next.1
  - @kozmoai/plugin-permission-common@0.7.5-next.0
  - @kozmoai/plugin-search-backend-node@1.2.0-next.1
  - @kozmoai/backend-common@0.18.4-next.1
  - @kozmoai/backend-plugin-api@0.5.1-next.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.13-next.1
  - @kozmoai/plugin-search-common@1.2.3-next.0

## 1.2.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.13-next.0
  - @kozmoai/plugin-permission-common@0.7.4
  - @kozmoai/plugin-permission-node@0.7.7-next.0
  - @kozmoai/plugin-search-backend-node@1.1.5-next.0
  - @kozmoai/plugin-search-common@1.2.2

## 1.2.4

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-permission-node@0.7.6
  - @kozmoai/plugin-auth-node@0.2.12
  - @kozmoai/backend-common@0.18.3
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-permission-common@0.7.4
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-search-backend-node@1.1.4
  - @kozmoai/plugin-search-common@1.2.2

## 1.2.4-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.2.12-next.2
  - @kozmoai/backend-common@0.18.3-next.2
  - @kozmoai/plugin-permission-node@0.7.6-next.2
  - @kozmoai/plugin-search-backend-node@1.1.4-next.2
  - @kozmoai/config@1.0.7-next.0

## 1.2.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-permission-node@0.7.6-next.1
  - @kozmoai/errors@1.1.5-next.0
  - @kozmoai/backend-common@0.18.3-next.1
  - @kozmoai/plugin-auth-node@0.2.12-next.1
  - @kozmoai/plugin-permission-common@0.7.4-next.0
  - @kozmoai/config@1.0.7-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-search-backend-node@1.1.4-next.1
  - @kozmoai/plugin-search-common@1.2.2-next.0

## 1.2.4-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.3-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.12-next.0
  - @kozmoai/plugin-permission-common@0.7.3
  - @kozmoai/plugin-permission-node@0.7.6-next.0
  - @kozmoai/plugin-search-backend-node@1.1.4-next.0
  - @kozmoai/plugin-search-common@1.2.1

## 1.2.3

### Patch Changes

- 1b30c9a0f7: Change the router's response to include the error message instead of its object type in case it fails during a search query because the messages have more info.
- Updated dependencies
  - @kozmoai/backend-common@0.18.2
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.11
  - @kozmoai/plugin-permission-common@0.7.3
  - @kozmoai/plugin-permission-node@0.7.5
  - @kozmoai/plugin-search-backend-node@1.1.3
  - @kozmoai/plugin-search-common@1.2.1

## 1.2.3-next.2

### Patch Changes

- 1b30c9a0f7: Change the router's response to include the error message instead of its object type in case it fails during a search query because the messages have more info.
- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.2
  - @kozmoai/plugin-auth-node@0.2.11-next.2
  - @kozmoai/plugin-permission-node@0.7.5-next.2
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-permission-common@0.7.3
  - @kozmoai/plugin-search-backend-node@1.1.3-next.2
  - @kozmoai/plugin-search-common@1.2.1

## 1.2.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.1
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.11-next.1
  - @kozmoai/plugin-permission-common@0.7.3
  - @kozmoai/plugin-permission-node@0.7.5-next.1
  - @kozmoai/plugin-search-backend-node@1.1.3-next.1
  - @kozmoai/plugin-search-common@1.2.1

## 1.2.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.0
  - @kozmoai/plugin-auth-node@0.2.11-next.0
  - @kozmoai/plugin-permission-node@0.7.5-next.0
  - @kozmoai/plugin-search-backend-node@1.1.3-next.0

## 1.2.1

### Patch Changes

- bfd66b0478: Allow max page limit for search results to be configurable
- Updated dependencies
  - @kozmoai/backend-common@0.18.0
  - @kozmoai/plugin-search-backend-node@1.1.1
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.9
  - @kozmoai/plugin-permission-common@0.7.3
  - @kozmoai/plugin-permission-node@0.7.3
  - @kozmoai/plugin-search-common@1.2.1

## 1.2.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0-next.1
  - @kozmoai/plugin-auth-node@0.2.9-next.1
  - @kozmoai/plugin-permission-node@0.7.3-next.1
  - @kozmoai/plugin-search-backend-node@1.1.1-next.2
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-permission-common@0.7.3-next.0
  - @kozmoai/plugin-search-common@1.2.1-next.0

## 1.2.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0-next.0
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.9-next.0
  - @kozmoai/plugin-permission-common@0.7.3-next.0
  - @kozmoai/plugin-permission-node@0.7.3-next.0
  - @kozmoai/plugin-search-backend-node@1.1.1-next.1
  - @kozmoai/plugin-search-common@1.2.1-next.0

## 1.2.1-next.0

### Patch Changes

- bfd66b0478: Allow max page limit for search results to be configurable
- Updated dependencies
  - @kozmoai/plugin-search-backend-node@1.1.1-next.0
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/config@1.0.5
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-auth-node@0.2.8
  - @kozmoai/plugin-permission-common@0.7.2
  - @kozmoai/plugin-permission-node@0.7.2
  - @kozmoai/plugin-search-common@1.2.0

## 1.2.0

### Minor Changes

- 29ebc43a0b: numberOfResults is now provided alongside the query result

### Patch Changes

- b05dcd5530: Move the `zod` dependency to a version that does not collide with other libraries
- Updated dependencies
  - @kozmoai/plugin-search-backend-node@1.1.0
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/plugin-permission-common@0.7.2
  - @kozmoai/plugin-permission-node@0.7.2
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.8
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-search-common@1.2.0
  - @kozmoai/config@1.0.5

## 1.2.0-next.3

### Patch Changes

- b05dcd5530: Move the `zod` dependency to a version that does not collide with other libraries
- Updated dependencies
  - @kozmoai/plugin-permission-common@0.7.2-next.2
  - @kozmoai/plugin-permission-node@0.7.2-next.3
  - @kozmoai/backend-common@0.17.0-next.3
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/plugin-auth-node@0.2.8-next.3
  - @kozmoai/plugin-search-backend-node@1.1.0-next.3
  - @kozmoai/plugin-search-common@1.2.0-next.3

## 1.2.0-next.2

### Minor Changes

- 29ebc43a0b: numberOfResults is now provided alongside the query result

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-search-backend-node@1.1.0-next.2
  - @kozmoai/backend-common@0.17.0-next.2
  - @kozmoai/plugin-search-common@1.2.0-next.2
  - @kozmoai/plugin-auth-node@0.2.8-next.2
  - @kozmoai/plugin-permission-node@0.7.2-next.2
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/plugin-permission-common@0.7.2-next.1

## 1.1.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.1
  - @kozmoai/plugin-search-backend-node@1.0.5-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/plugin-auth-node@0.2.8-next.1
  - @kozmoai/plugin-permission-node@0.7.2-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/plugin-permission-common@0.7.2-next.1
  - @kozmoai/plugin-search-common@1.1.2-next.1

## 1.1.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-search-backend-node@1.0.5-next.0
  - @kozmoai/backend-common@0.16.1-next.0
  - @kozmoai/plugin-auth-node@0.2.8-next.0
  - @kozmoai/plugin-permission-common@0.7.2-next.0
  - @kozmoai/plugin-permission-node@0.7.2-next.0
  - @kozmoai/types@1.0.2-next.0
  - @kozmoai/config@1.0.5-next.0
  - @kozmoai/errors@1.1.4-next.0
  - @kozmoai/plugin-search-common@1.1.2-next.0

## 1.1.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0
  - @kozmoai/plugin-auth-node@0.2.7
  - @kozmoai/plugin-permission-common@0.7.1
  - @kozmoai/types@1.0.1
  - @kozmoai/plugin-permission-node@0.7.1
  - @kozmoai/plugin-search-backend-node@1.0.4
  - @kozmoai/config@1.0.4
  - @kozmoai/errors@1.1.3
  - @kozmoai/plugin-search-common@1.1.1

## 1.1.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.1
  - @kozmoai/plugin-auth-node@0.2.7-next.1
  - @kozmoai/plugin-permission-node@0.7.1-next.1
  - @kozmoai/plugin-search-backend-node@1.0.4-next.1
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/types@1.0.1-next.0
  - @kozmoai/plugin-permission-common@0.7.1-next.0
  - @kozmoai/plugin-search-common@1.1.1-next.0

## 1.1.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.0
  - @kozmoai/plugin-auth-node@0.2.7-next.0
  - @kozmoai/plugin-permission-common@0.7.1-next.0
  - @kozmoai/types@1.0.1-next.0
  - @kozmoai/plugin-permission-node@0.7.1-next.0
  - @kozmoai/plugin-search-backend-node@1.0.4-next.0
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/plugin-search-common@1.1.1-next.0

## 1.1.0

### Minor Changes

- 16c853a6ed: Be less restrictive with unknown keys on query endpoint
- a799972bb1: The query received by search engines now contains a property called `pageLimit`, it specifies how many results to return per page when sending a query request to the search backend.

  Example:
  _Returns up to 30 results per page_

  ```
  GET /query?pageLimit=30
  ```

  The search backend validates the page limit and this value must not exceed 100, but it doesn't set a default value for the page limit parameter, it leaves it up to each search engine to set this, so Lunr, Postgres and Elastic Search set 25 results per page as a default value.

### Patch Changes

- 2d3a5f09ab: Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`
- Updated dependencies
  - @kozmoai/backend-common@0.15.2
  - @kozmoai/plugin-auth-node@0.2.6
  - @kozmoai/plugin-permission-node@0.7.0
  - @kozmoai/plugin-permission-common@0.7.0
  - @kozmoai/plugin-search-common@1.1.0
  - @kozmoai/plugin-search-backend-node@1.0.3
  - @kozmoai/config@1.0.3
  - @kozmoai/errors@1.1.2
  - @kozmoai/types@1.0.0

## 1.1.0-next.2

### Patch Changes

- 2d3a5f09ab: Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`
- Updated dependencies
  - @kozmoai/backend-common@0.15.2-next.2
  - @kozmoai/plugin-permission-common@0.7.0-next.2
  - @kozmoai/plugin-permission-node@0.7.0-next.2
  - @kozmoai/plugin-search-backend-node@1.0.3-next.2
  - @kozmoai/plugin-auth-node@0.2.6-next.2
  - @kozmoai/plugin-search-common@1.1.0-next.2
  - @kozmoai/config@1.0.3-next.2
  - @kozmoai/errors@1.1.2-next.2
  - @kozmoai/types@1.0.0

## 1.1.0-next.1

### Minor Changes

- 16c853a6ed: Be less restrictive with unknown keys on query endpoint
- a799972bb1: The query received by search engines now contains a property called `pageLimit`, it specifies how many results to return per page when sending a query request to the search backend.

  Example:
  _Returns up to 30 results per page_

  ```
  GET /query?pageLimit=30
  ```

  The search backend validates the page limit and this value must not exceed 100, but it doesn't set a default value for the page limit parameter, it leaves it up to each search engine to set this, so Lunr, Postgres and Elastic Search set 25 results per page as a default value.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.2-next.1
  - @kozmoai/plugin-search-common@1.1.0-next.1
  - @kozmoai/plugin-search-backend-node@1.0.3-next.1
  - @kozmoai/config@1.0.3-next.1
  - @kozmoai/errors@1.1.2-next.1
  - @kozmoai/types@1.0.0
  - @kozmoai/plugin-auth-node@0.2.6-next.1
  - @kozmoai/plugin-permission-common@0.6.5-next.1
  - @kozmoai/plugin-permission-node@0.6.6-next.1

## 1.0.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.2-next.0
  - @kozmoai/plugin-auth-node@0.2.6-next.0
  - @kozmoai/plugin-permission-node@0.6.6-next.0
  - @kozmoai/config@1.0.3-next.0
  - @kozmoai/errors@1.1.2-next.0
  - @kozmoai/types@1.0.0
  - @kozmoai/plugin-permission-common@0.6.5-next.0
  - @kozmoai/plugin-search-backend-node@1.0.3-next.0
  - @kozmoai/plugin-search-common@1.0.2-next.0

## 1.0.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.1
  - @kozmoai/plugin-auth-node@0.2.5
  - @kozmoai/plugin-permission-node@0.6.5
  - @kozmoai/plugin-search-backend-node@1.0.2
  - @kozmoai/config@1.0.2
  - @kozmoai/errors@1.1.1
  - @kozmoai/plugin-permission-common@0.6.4
  - @kozmoai/plugin-search-common@1.0.1

## 1.0.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.0.2-next.0
  - @kozmoai/errors@1.1.1-next.0
  - @kozmoai/plugin-permission-common@0.6.4-next.2
  - @kozmoai/backend-common@0.15.1-next.3
  - @kozmoai/plugin-auth-node@0.2.5-next.3
  - @kozmoai/plugin-permission-node@0.6.5-next.3
  - @kozmoai/plugin-search-backend-node@1.0.2-next.2

## 1.0.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.0
  - @kozmoai/plugin-search-backend-node@1.0.2-next.0
  - @kozmoai/plugin-auth-node@0.2.5-next.0
  - @kozmoai/plugin-permission-common@0.6.4-next.0
  - @kozmoai/plugin-permission-node@0.6.5-next.0
  - @kozmoai/plugin-search-common@1.0.1-next.0

## 1.0.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.0
  - @kozmoai/plugin-auth-node@0.2.4
  - @kozmoai/plugin-permission-node@0.6.4
  - @kozmoai/plugin-search-backend-node@1.0.1

## 1.0.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.0-next.0
  - @kozmoai/plugin-auth-node@0.2.4-next.0
  - @kozmoai/plugin-permission-node@0.6.4-next.0
  - @kozmoai/plugin-search-backend-node@1.0.1-next.0

## 1.0.0

### Major Changes

- 7bd7d336b2: This package has been promoted to 1.0. Read more about what it means in [New release: Glint Search 1.0 blog](https://glint.io/blog/2022/07/19/releasing-glint-search-1.0)

### Patch Changes

- a21cd43467: If error is `MissingIndexError` we return a 400 response with a more clear error message.
- Updated dependencies
  - @kozmoai/backend-common@0.14.1
  - @kozmoai/plugin-search-backend-node@1.0.0
  - @kozmoai/plugin-search-common@1.0.0
  - @kozmoai/plugin-auth-node@0.2.3
  - @kozmoai/plugin-permission-common@0.6.3
  - @kozmoai/plugin-permission-node@0.6.3
  - @kozmoai/errors@1.1.0

## 0.5.4-next.2

### Patch Changes

- a21cd43467: If error is `MissingIndexError` we return a 400 response with a more clear error message.
- Updated dependencies
  - @kozmoai/backend-common@0.14.1-next.3
  - @kozmoai/plugin-auth-node@0.2.3-next.2
  - @kozmoai/plugin-permission-common@0.6.3-next.1
  - @kozmoai/plugin-permission-node@0.6.3-next.2
  - @kozmoai/plugin-search-backend-node@0.6.3-next.2

## 0.5.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.1-next.1
  - @kozmoai/errors@1.1.0-next.0
  - @kozmoai/plugin-auth-node@0.2.3-next.1
  - @kozmoai/plugin-permission-common@0.6.3-next.0
  - @kozmoai/plugin-permission-node@0.6.3-next.1
  - @kozmoai/plugin-search-backend-node@0.6.3-next.1
  - @kozmoai/plugin-search-common@0.3.6-next.0

## 0.5.4-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.1-next.0
  - @kozmoai/plugin-auth-node@0.2.3-next.0
  - @kozmoai/plugin-permission-node@0.6.3-next.0
  - @kozmoai/plugin-search-backend-node@0.6.3-next.0

## 0.5.3

### Patch Changes

- 7d8acfc32e: `RouterOptions` and `createRouter` now marked as public exports
- 915700f64f: The provided search engine now adds a pagination-aware `rank` value to all results.
- Updated dependencies
  - @kozmoai/plugin-search-common@0.3.5
  - @kozmoai/plugin-permission-node@0.6.2
  - @kozmoai/backend-common@0.14.0
  - @kozmoai/plugin-auth-node@0.2.2
  - @kozmoai/plugin-search-backend-node@0.6.2
  - @kozmoai/plugin-permission-common@0.6.2

## 0.5.3-next.2

### Patch Changes

- 7d8acfc32e: `RouterOptions` and `createRouter` now marked as public exports
- Updated dependencies
  - @kozmoai/plugin-search-common@0.3.5-next.1
  - @kozmoai/backend-common@0.14.0-next.2
  - @kozmoai/plugin-search-backend-node@0.6.2-next.2
  - @kozmoai/plugin-auth-node@0.2.2-next.2
  - @kozmoai/plugin-permission-node@0.6.2-next.2

## 0.5.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.6-next.1
  - @kozmoai/plugin-auth-node@0.2.2-next.1
  - @kozmoai/plugin-permission-common@0.6.2-next.0
  - @kozmoai/plugin-permission-node@0.6.2-next.1
  - @kozmoai/plugin-search-backend-node@0.6.2-next.1
  - @kozmoai/plugin-search-common@0.3.5-next.0

## 0.5.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.6-next.0
  - @kozmoai/plugin-search-backend-node@0.6.2-next.0
  - @kozmoai/plugin-auth-node@0.2.2-next.0
  - @kozmoai/plugin-permission-node@0.6.2-next.0

## 0.5.2

### Patch Changes

- 8cc75993a6: Fixed issue in `PermissionEvaluator` instance check that would cause unexpected "invalid union" errors.
- Updated dependencies
  - @kozmoai/backend-common@0.13.3
  - @kozmoai/config@1.0.1
  - @kozmoai/plugin-search-backend-node@0.6.1
  - @kozmoai/plugin-auth-node@0.2.1
  - @kozmoai/plugin-search-common@0.3.4
  - @kozmoai/plugin-permission-common@0.6.1
  - @kozmoai/plugin-permission-node@0.6.1

## 0.5.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.3-next.2
  - @kozmoai/config@1.0.1-next.0
  - @kozmoai/plugin-search-backend-node@0.6.1-next.1
  - @kozmoai/plugin-search-common@0.3.4-next.0
  - @kozmoai/plugin-auth-node@0.2.1-next.1
  - @kozmoai/plugin-permission-common@0.6.1-next.0
  - @kozmoai/plugin-permission-node@0.6.1-next.1

## 0.5.2-next.0

### Patch Changes

- 8cc75993a6: Fixed issue in `PermissionEvaluator` instance check that would cause unexpected "invalid union" errors.
- Updated dependencies
  - @kozmoai/backend-common@0.13.3-next.0
  - @kozmoai/plugin-auth-node@0.2.1-next.0
  - @kozmoai/plugin-permission-node@0.6.1-next.0
  - @kozmoai/plugin-search-backend-node@0.6.1-next.0

## 0.5.0

### Minor Changes

- 94ccd772d4: **BREAKING**: The `authorization` property is no longer returned on search results when queried. Note: this will only result in a breaking change if you have custom code in your frontend that relies on the `authorization.resourceRef` property on documents.

### Patch Changes

- 30f9884359: Check for non-resource permissions when authorizing result-by-result in AuthorizedSearchEngine.
- 3c8cfaaa80: Use `PermissionEvaluator` instead of `PermissionAuthorizer`, which is now deprecated.
- 62ee65422c: Use new `IndexableResultSet` type as return type of query method in `SearchEngine` implementation.
- c98d271466: Use updated types from `@kozmoai/plugin-permission-common`
- Updated dependencies
  - @kozmoai/plugin-permission-common@0.6.0
  - @kozmoai/plugin-permission-node@0.6.0
  - @kozmoai/plugin-auth-node@0.2.0
  - @kozmoai/plugin-search-common@0.3.3
  - @kozmoai/backend-common@0.13.2
  - @kozmoai/plugin-search-backend-node@0.6.0

## 0.5.0-next.2

### Patch Changes

- 3c8cfaaa80: Use `PermissionEvaluator` instead of `PermissionAuthorizer`, which is now deprecated.
- Updated dependencies
  - @kozmoai/plugin-permission-common@0.6.0-next.1
  - @kozmoai/plugin-permission-node@0.6.0-next.2
  - @kozmoai/backend-common@0.13.2-next.2
  - @kozmoai/plugin-search-backend-node@0.6.0-next.1

## 0.5.0-next.1

### Patch Changes

- 30f9884359: Check for non-resource permissions when authorizing result-by-result in AuthorizedSearchEngine.
- c98d271466: Use updated types from `@kozmoai/plugin-permission-common`
- Updated dependencies
  - @kozmoai/plugin-permission-common@0.6.0-next.0
  - @kozmoai/plugin-permission-node@0.6.0-next.1
  - @kozmoai/backend-common@0.13.2-next.1
  - @kozmoai/plugin-search-common@0.3.3-next.1

## 0.5.0-next.0

### Minor Changes

- 94ccd772d4: **BREAKING**: The `authorization` property is no longer returned on search results when queried. Note: this will only result in a breaking change if you have custom code in your frontend that relies on the `authorization.resourceRef` property on documents.

### Patch Changes

- 62ee65422c: Use new `IndexableResultSet` type as return type of query method in `SearchEngine` implementation.
- Updated dependencies
  - @kozmoai/plugin-auth-node@0.2.0-next.0
  - @kozmoai/plugin-search-common@0.3.3-next.0
  - @kozmoai/plugin-search-backend-node@0.5.3-next.0
  - @kozmoai/backend-common@0.13.2-next.0
  - @kozmoai/plugin-permission-node@0.5.6-next.0

## 0.4.8

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.1
  - @kozmoai/config@1.0.0
  - @kozmoai/errors@1.0.0
  - @kozmoai/types@1.0.0
  - @kozmoai/plugin-permission-common@0.5.3
  - @kozmoai/plugin-search-backend-node@0.5.2
  - @kozmoai/plugin-auth-node@0.1.6
  - @kozmoai/plugin-permission-node@0.5.5
  - @kozmoai/plugin-search-common@0.3.2

## 0.4.7

### Patch Changes

- 3e54f6c436: Use `@kozmoai/plugin-search-common` package instead of `@kozmoai/search-common`.
- Updated dependencies
  - @kozmoai/backend-common@0.13.0
  - @kozmoai/plugin-search-common@0.3.1
  - @kozmoai/plugin-search-backend-node@0.5.1
  - @kozmoai/plugin-auth-node@0.1.5
  - @kozmoai/plugin-permission-node@0.5.4

## 0.4.7-next.0

### Patch Changes

- 3e54f6c436: Use `@kozmoai/plugin-search-common` package instead of `@kozmoai/search-common`.
- Updated dependencies
  - @kozmoai/backend-common@0.13.0-next.0
  - @kozmoai/plugin-search-common@0.3.1-next.0
  - @kozmoai/plugin-search-backend-node@0.5.1-next.0
  - @kozmoai/plugin-auth-node@0.1.5-next.0
  - @kozmoai/plugin-permission-node@0.5.4-next.0

## 0.4.6

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.12.0
  - @kozmoai/plugin-permission-common@0.5.2
  - @kozmoai/plugin-permission-node@0.5.3
  - @kozmoai/plugin-search-backend-node@0.5.0
  - @kozmoai/search-common@0.3.0
  - @kozmoai/plugin-auth-node@0.1.4

## 0.4.5

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.11.0
  - @kozmoai/plugin-permission-node@0.5.2
  - @kozmoai/plugin-auth-node@0.1.3

## 0.4.4

### Patch Changes

- Fix for the previous release with missing type declarations.
- Updated dependencies
  - @kozmoai/backend-common@0.10.9
  - @kozmoai/config@0.1.15
  - @kozmoai/errors@0.2.2
  - @kozmoai/search-common@0.2.4
  - @kozmoai/types@0.1.3
  - @kozmoai/plugin-auth-node@0.1.2
  - @kozmoai/plugin-permission-common@0.5.1
  - @kozmoai/plugin-permission-node@0.5.1
  - @kozmoai/plugin-search-backend-node@0.4.7

## 0.4.3

### Patch Changes

- c77c5c7eb6: Added `glint.role` to `package.json`
- Updated dependencies
  - @kozmoai/backend-common@0.10.8
  - @kozmoai/errors@0.2.1
  - @kozmoai/plugin-auth-node@0.1.1
  - @kozmoai/plugin-permission-common@0.5.0
  - @kozmoai/config@0.1.14
  - @kozmoai/search-common@0.2.3
  - @kozmoai/types@0.1.2
  - @kozmoai/plugin-permission-node@0.5.0
  - @kozmoai/plugin-search-backend-node@0.4.6

## 0.4.2

### Patch Changes

- b3f3e42036: Use `getBearerTokenFromAuthorizationHeader` from `@kozmoai/plugin-auth-node` instead of the deprecated `IdentityClient` method.
- Updated dependencies
  - @kozmoai/backend-common@0.10.7
  - @kozmoai/plugin-auth-node@0.1.0
  - @kozmoai/plugin-permission-node@0.4.3

## 0.4.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.10.0-next.0
  - @kozmoai/backend-common@0.10.7-next.0
  - @kozmoai/plugin-permission-node@0.4.3-next.0

## 0.4.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.9.0
  - @kozmoai/backend-common@0.10.6
  - @kozmoai/plugin-permission-node@0.4.2

## 0.4.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.9.0-next.1
  - @kozmoai/backend-common@0.10.6-next.0
  - @kozmoai/plugin-permission-node@0.4.2-next.1

## 0.4.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.9.0-next.0
  - @kozmoai/plugin-permission-node@0.4.2-next.0

## 0.4.0

### Minor Changes

- bbfbc755aa: **BREAKING** Added three additional required properties to `createRouter` to support filtering search results based on permissions. To make this change to an existing app, add the required parameters to the `createRouter` call in `packages/backend/src/plugins/search.ts`:

  ```diff
  export default async function createPlugin({
    logger,
  +  permissions,
    discovery,
    config,
    tokenManager,
  }: PluginEnvironment) {
    /* ... */

    return await createRouter({
      engine: indexBuilder.getSearchEngine(),
  +    types: indexBuilder.getDocumentTypes(),
  +    permissions,
  +    config,
      logger,
    });
  }
  ```

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-search-backend-node@0.4.5
  - @kozmoai/plugin-auth-backend@0.8.0
  - @kozmoai/search-common@0.2.2
  - @kozmoai/backend-common@0.10.5
  - @kozmoai/plugin-permission-node@0.4.1

## 0.3.1

### Patch Changes

- cd6854046e: Validate query string in search endpoint
- Updated dependencies
  - @kozmoai/backend-common@0.10.4
  - @kozmoai/config@0.1.13

## 0.3.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.10.4-next.0

## 0.3.0

### Minor Changes

- a41fbfe739: Search result location filtering

  This change introduces a filter for search results based on their location protocol. The intention is to filter out unsafe or
  malicious values before they can be consumed by the frontend. By default locations must be http/https URLs (or paths).

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.10.0

## 0.2.8

### Patch Changes

- dcd1a0c3f4: Minor improvement to the API reports, by not unpacking arguments directly
- Updated dependencies
  - @kozmoai/backend-common@0.9.13

## 0.2.7

### Patch Changes

- bab752e2b3: Change default port of backend from 7000 to 7007.

  This is due to the AirPlay Receiver process occupying port 7000 and preventing local Glint instances on MacOS to start.

  You can change the port back to 7000 or any other value by providing an `app-config.yaml` with the following values:

  ```
  backend:
    listen: 0.0.0.0:7123
    baseUrl: http://localhost:7123
  ```

  More information can be found here: https://glint.io/docs/conf/writing

- Updated dependencies
  - @kozmoai/backend-common@0.9.11

## 0.2.6

### Patch Changes

- a13f21cdc: Implement optional `pageCursor` based paging in search.

  To use paging in your app, add a `<SearchResultPager />` to your
  `SearchPage.tsx`.

- Updated dependencies
  - @kozmoai/search-common@0.2.0
  - @kozmoai/plugin-search-backend-node@0.4.2
  - @kozmoai/backend-common@0.9.1

## 0.2.5

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.9.0

## 0.2.4

### Patch Changes

- 64baedea5: Improve search query logging message
- Updated dependencies
  - @kozmoai/backend-common@0.8.10

## 0.2.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.8.6
  - @kozmoai/plugin-search-backend-node@0.4.0

## 0.2.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.8.5
  - @kozmoai/plugin-search-backend-node@0.3.0

## 0.2.1

### Patch Changes

- 3108ff7bf: Make `yarn dev` respect the `PLUGIN_PORT` environment variable.
- Updated dependencies
  - @kozmoai/plugin-search-backend-node@0.2.1
  - @kozmoai/backend-common@0.8.3

## 0.2.0

### Minor Changes

- 5aff84759: This release represents a move out of a pre-alpha phase of the Glint Search
  plugin, into an alpha phase. With this release, you gain more control over the
  layout of your search page on the frontend, as well as the ability to extend
  search on the backend to encompass everything Glint users may want to find.

  If you are updating to version `v0.4.0` of `@kozmoai/plugin-search` from a
  prior release, you will need to make modifications to your app backend.

  First, navigate to your backend package and install the two related search
  backend packages:

  ```sh
  cd packages/backend
  yarn add @kozmoai/plugin-search-backend @kozmoai/plugin-search-backend-node
  ```

  Wire up these new packages into your app backend by first creating a new
  `search.ts` file at `src/plugins/search.ts` with contents like the following:

  ```typescript
  import { useHotCleanup } from '@kozmoai/backend-common';
  import { createRouter } from '@kozmoai/plugin-search-backend';
  import {
    IndexBuilder,
    LunrSearchEngine,
  } from '@kozmoai/plugin-search-backend-node';
  import { PluginEnvironment } from '../types';
  import { DefaultCatalogCollator } from '@kozmoai/plugin-catalog-backend';

  export default async function createPlugin({
    logger,
    discovery,
  }: PluginEnvironment) {
    // Initialize a connection to a search engine.
    const searchEngine = new LunrSearchEngine({ logger });
    const indexBuilder = new IndexBuilder({ logger, searchEngine });

    // Collators are responsible for gathering documents known to plugins. This
    // particular collator gathers entities from the software catalog.
    indexBuilder.addCollator({
      defaultRefreshIntervalSeconds: 600,
      collator: new DefaultCatalogCollator({ discovery }),
    });

    // The scheduler controls when documents are gathered from collators and sent
    // to the search engine for indexing.
    const { scheduler } = await indexBuilder.build();

    // A 3 second delay gives the backend server a chance to initialize before
    // any collators are executed, which may attempt requests against the API.
    setTimeout(() => scheduler.start(), 3000);
    useHotCleanup(module, () => scheduler.stop());

    return await createRouter({
      engine: indexBuilder.getSearchEngine(),
      logger,
    });
  }
  ```

  Then, ensure the search plugin you configured above is initialized by modifying
  your backend's `index.ts` file in the following ways:

  ```diff
  +import search from './plugins/search';
  // ...
  +const searchEnv = useHotMemoize(module, () => createEnv('search'));
  // ...
  +apiRouter.use('/search', await search(searchEnv));
  // ...
  ```

### Patch Changes

- Updated dependencies [92963779b]
- Updated dependencies [db1c8f93b]
- Updated dependencies [5aff84759]
- Updated dependencies [eda9dbd5f]
  - @kozmoai/backend-common@0.8.2
  - @kozmoai/search-common@0.1.2
  - @kozmoai/plugin-search-backend-node@0.2.0

## 0.1.5

### Patch Changes

- Updated dependencies [22fd8ce2a]
- Updated dependencies [f9fb4a205]
  - @kozmoai/backend-common@0.8.0

## 0.1.4

### Patch Changes

- Updated dependencies [e0bfd3d44]
- Updated dependencies [38ca05168]
  - @kozmoai/backend-common@0.7.0

## 0.1.3

### Patch Changes

- b9b2b4b76: Lunr Search Engine support
- Updated dependencies [b9b2b4b76]
- Updated dependencies [d367f63b5]
- Updated dependencies [b42531cfe]
  - @kozmoai/plugin-search-backend-node@0.1.3
  - @kozmoai/backend-common@0.6.3

## 0.1.2

### Patch Changes

- 4d248725e: Bump to use the in-repo latest `backend-common`, and the correct version of `express-promise-router`
