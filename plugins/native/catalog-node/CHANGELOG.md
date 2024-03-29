# @kozmoai/plugin-catalog-node

## 1.8.0-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/plugin-permission-common@0.7.13-next.1
  - @kozmoai/plugin-permission-node@0.7.25-next.1
  - @kozmoai/catalog-client@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.22-next.1

## 1.8.0-next.0

### Minor Changes

- df12231: Allow setting EntityDataParser using CatalogModelExtensionPoint

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/plugin-permission-common@0.7.13-next.0
  - @kozmoai/plugin-permission-node@0.7.24-next.0
  - @kozmoai/catalog-client@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.22-next.0

## 1.7.0

### Minor Changes

- d8a54d0: Adds support for supplying field validators to the new backend's catalog plugin. If you're using entity policies, you should use the new `transformLegacyPolicyToProcessor` function to install them as processors instead.

  ```ts
  import {
    catalogProcessingExtensionPoint,
    catalogModelExtensionPoint,
  } from '@kozmoai/plugin-catalog-node/alpha';
  import {myPolicy} from './my-policy';

  export const catalogModulePolicyProvider = createBackendModule({
    pluginId: 'catalog',
    moduleId: 'internal-policy-provider',
    register(reg) {
      reg.registerInit({
        deps: {
          modelExtensions: catalogModelExtensionPoint,
          processingExtensions: catalogProcessingExtensionPoint,
        },
        async init({ modelExtensions, processingExtensions }) {
          modelExtensions.setFieldValidators({
            ...
          });
          processingExtensions.addProcessors(transformLegacyPolicyToProcessor(myPolicy))
        },
      });
    },
  });
  ```

### Patch Changes

- 9b2eb3f: Add support for `onProcessingError` handler at the catalog plugin (new backend system).

  You can use `setOnProcessingErrorHandler` at the `catalogProcessingExtensionPoint`
  as replacement for

  ```ts
  catalogBuilder.subscribe({
    onProcessingError: hander,
  });
  ```

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/catalog-client@1.6.0
  - @kozmoai/plugin-permission-node@0.7.21
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21
  - @kozmoai/plugin-permission-common@0.7.12

## 1.6.2-next.3

### Patch Changes

- 9b2eb3f: Add support for `onProcessingError` handler at the catalog plugin (new backend system).

  You can use `setOnProcessingErrorHandler` at the `catalogProcessingExtensionPoint`
  as replacement for

  ```ts
  catalogBuilder.subscribe({
    onProcessingError: hander,
  });
  ```

- Updated dependencies
  - @kozmoai/plugin-permission-node@0.7.21-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21-next.0
  - @kozmoai/plugin-permission-common@0.7.12

## 1.6.2-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-permission-node@0.7.21-next.2
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21-next.0
  - @kozmoai/plugin-permission-common@0.7.12

## 1.6.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21-next.0
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-node@0.7.21-next.1

## 1.6.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.6.0-next.0
  - @kozmoai/plugin-permission-node@0.7.21-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.20
  - @kozmoai/plugin-permission-common@0.7.12

## 1.6.1

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/catalog-client@1.5.2
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-node@0.7.20
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.20

## 1.6.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.2
  - @kozmoai/plugin-permission-node@0.7.20-next.2

## 1.6.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-permission-node@0.7.20-next.1
  - @kozmoai/backend-plugin-api@0.6.9-next.1
  - @kozmoai/catalog-client@1.5.2-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.19
  - @kozmoai/plugin-permission-common@0.7.11

## 1.6.1-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/catalog-client@1.5.2-next.0
  - @kozmoai/backend-plugin-api@0.6.9-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.19
  - @kozmoai/plugin-permission-common@0.7.11
  - @kozmoai/plugin-permission-node@0.7.20-next.0

## 1.6.0

### Minor Changes

- a168507: Added `EntitiesSearchFilter` and `EntityFilter` from `@kozmoai/plugin-catalog-backend`, for reuse
- 7804597: Permission rules can now be added for the Catalog plugin through the `CatalogPermissionExtensionPoint` interface.

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.5.0
  - @kozmoai/plugin-permission-common@0.7.11
  - @kozmoai/plugin-permission-node@0.7.19
  - @kozmoai/backend-plugin-api@0.6.8
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.19

## 1.6.0-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.8-next.3
  - @kozmoai/catalog-client@1.5.0-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.3

## 1.6.0-next.2

### Minor Changes

- a168507: Added `EntitiesSearchFilter` and `EntityFilter` from `@kozmoai/plugin-catalog-backend`, for reuse
- 7804597: Permission rules can now be added for the Catalog plugin through the `CatalogPermissionExtensionPoint` interface.

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.5.0-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.2

## 1.5.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.5.0-next.0
  - @kozmoai/backend-plugin-api@0.6.8-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18

## 1.5.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.8-next.0
  - @kozmoai/catalog-client@1.4.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18

## 1.5.0

### Minor Changes

- e5bf3749ad: Support adding location analyzers in new catalog analysis extension point and move `AnalyzeOptions` and `ScmLocationAnalyzer` types to `@kozmoai/plugin-catalog-node`

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7
  - @kozmoai/catalog-client@1.4.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18

## 1.5.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.2

## 1.5.0-next.1

### Minor Changes

- e5bf3749ad: Support adding location analyzers in new catalog analysis extension point and move `AnalyzeOptions` and `ScmLocationAnalyzer` types to `@kozmoai/plugin-catalog-node`

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.1
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17

## 1.4.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.0
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17

## 1.4.7

### Patch Changes

- 7a2e2924c7: Added docs to `processingResult`
- Updated dependencies
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/backend-plugin-api@0.6.6
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17

## 1.4.7-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/errors@1.2.3-next.0
  - @kozmoai/backend-plugin-api@0.6.6-next.2
  - @kozmoai/catalog-client@1.4.5-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17-next.0

## 1.4.6-next.1

### Patch Changes

- 7a2e2924c7: Added docs to `processingResult`
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.5-next.1
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.16

## 1.4.6-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.5-next.0
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.16

## 1.4.4

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/plugin-catalog-common@1.0.16
  - @kozmoai/types@1.1.1
  - @kozmoai/backend-plugin-api@0.6.3

## 1.4.4-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.4-next.2
  - @kozmoai/catalog-model@1.4.2-next.2
  - @kozmoai/errors@1.2.2-next.0
  - @kozmoai/plugin-catalog-common@1.0.16-next.2
  - @kozmoai/types@1.1.1-next.0
  - @kozmoai/backend-plugin-api@0.6.3-next.3

## 1.4.4-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.3-next.2
  - @kozmoai/catalog-model@1.4.2-next.1
  - @kozmoai/catalog-client@1.4.4-next.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.16-next.1

## 1.4.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.3-next.1
  - @kozmoai/catalog-model@1.4.2-next.0
  - @kozmoai/catalog-client@1.4.4-next.0
  - @kozmoai/plugin-catalog-common@1.0.16-next.0
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0

## 1.4.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.2-next.0
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15

## 1.4.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.0
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15

## 1.4.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.0-next.2

## 1.4.1-next.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.0-next.1
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15

## 1.4.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.5-next.0
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15

## 1.4.0

### Minor Changes

- f06f0e46ba88: Support placeholder resolvers in the CatalogPlugin, also moves `PlaceholderResolver` and related types from `@kozmoai/plugin-catalog-backend` to `@kozmoai/plugin-catalog-node`.

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1
  - @kozmoai/backend-plugin-api@0.5.4
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15

## 1.4.0-next.0

### Minor Changes

- f06f0e46ba88: Support placeholder resolvers in the CatalogPlugin, also moves `PlaceholderResolver` and related types from `@kozmoai/plugin-catalog-backend` to `@kozmoai/plugin-catalog-node`.

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1-next.0
  - @kozmoai/backend-plugin-api@0.5.4-next.0
  - @kozmoai/catalog-client@1.4.3-next.0
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15-next.0

## 1.3.7

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.2
  - @kozmoai/types@1.1.0
  - @kozmoai/catalog-model@1.4.0
  - @kozmoai/errors@1.2.0
  - @kozmoai/backend-plugin-api@0.5.3
  - @kozmoai/plugin-catalog-common@1.0.14

## 1.3.7-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.0-next.1
  - @kozmoai/backend-plugin-api@0.5.3-next.2
  - @kozmoai/catalog-client@1.4.2-next.2
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.14-next.1

## 1.3.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/backend-plugin-api@0.5.3-next.1
  - @kozmoai/catalog-model@1.4.0-next.0
  - @kozmoai/catalog-client@1.4.2-next.1
  - @kozmoai/plugin-catalog-common@1.0.14-next.0
  - @kozmoai/types@1.0.2

## 1.3.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.2-next.0
  - @kozmoai/backend-plugin-api@0.5.3-next.0
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13

## 1.3.6

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.2
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13

## 1.3.6-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.2-next.1

## 1.3.6-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.2-next.0
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13

## 1.3.5

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/backend-plugin-api@0.5.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13

## 1.3.5-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.3.0-next.0
  - @kozmoai/backend-plugin-api@0.5.1-next.2
  - @kozmoai/catalog-client@1.4.1-next.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.1

## 1.3.5-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.1-next.0
  - @kozmoai/backend-plugin-api@0.5.1-next.2
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.0

## 1.3.5-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.1-next.1
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.0

## 1.3.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.1-next.0
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.12

## 1.3.4

### Patch Changes

- e675f902980: Added `locationSpecToMetadataName` and `locationSpecToLocationEntity` as their new home, moved over from the backend package where they now are marked as deprecated.
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- Updated dependencies
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/backend-plugin-api@0.5.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/plugin-catalog-common@1.0.12
  - @kozmoai/types@1.0.2

## 1.3.4-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.4.1-next.2

## 1.3.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.1.5-next.0
  - @kozmoai/catalog-client@1.4.0-next.1
  - @kozmoai/backend-plugin-api@0.4.1-next.1
  - @kozmoai/catalog-model@1.2.1-next.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.12-next.1

## 1.3.4-next.0

### Patch Changes

- 928a12a9b3: Internal refactor of `/alpha` exports.
- Updated dependencies
  - @kozmoai/catalog-client@1.4.0-next.0
  - @kozmoai/backend-plugin-api@0.4.1-next.0
  - @kozmoai/catalog-model@1.2.1-next.0
  - @kozmoai/plugin-catalog-common@1.0.12-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2

## 1.3.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.4.0
  - @kozmoai/catalog-model@1.2.0
  - @kozmoai/catalog-client@1.3.1
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.11

## 1.3.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.4.0-next.2
  - @kozmoai/catalog-model@1.2.0-next.1
  - @kozmoai/catalog-client@1.3.1-next.1
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.11-next.1

## 1.3.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.3.2-next.1
  - @kozmoai/catalog-client@1.3.1-next.0
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.11-next.0

## 1.3.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/catalog-client@1.3.1-next.0
  - @kozmoai/plugin-catalog-common@1.0.11-next.0
  - @kozmoai/backend-plugin-api@0.3.2-next.0

## 1.3.1

### Patch Changes

- 483e907eaf: Internal updates of `createServiceFactory` from `@kozmoai/backend-plugin-api`.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.3.0
  - @kozmoai/catalog-model@1.1.5
  - @kozmoai/catalog-client@1.3.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.10

## 1.3.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.3.0-next.1
  - @kozmoai/catalog-client@1.3.0-next.2
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.10-next.1

## 1.3.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.2.1-next.0
  - @kozmoai/catalog-client@1.3.0-next.1
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.10-next.1

## 1.3.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.5-next.0
  - @kozmoai/catalog-client@1.3.0-next.0
  - @kozmoai/backend-plugin-api@0.2.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.10-next.0

## 1.3.0

### Minor Changes

- eacc8e2b55: Make it possible for entity providers to supply only entity refs, instead of full entities, in `delta` mutation deletions.

### Patch Changes

- 884d749b14: Refactored to use `coreServices` from `@kozmoai/backend-plugin-api`.
- Updated dependencies
  - @kozmoai/catalog-client@1.2.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/backend-plugin-api@0.2.0
  - @kozmoai/types@1.0.2
  - @kozmoai/catalog-model@1.1.4
  - @kozmoai/plugin-catalog-common@1.0.9

## 1.3.0-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.2.0-next.3
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/plugin-catalog-common@1.0.9-next.3

## 1.3.0-next.2

### Minor Changes

- eacc8e2b55: Make it possible for entity providers to supply only entity refs, instead of full entities, in `delta` mutation deletions.

### Patch Changes

- 884d749b14: Refactored to use `coreServices` from `@kozmoai/backend-plugin-api`.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.2.0-next.2
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/plugin-catalog-common@1.0.9-next.2

## 1.2.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/backend-plugin-api@0.1.5-next.1
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/plugin-catalog-common@1.0.9-next.1

## 1.2.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.2.0-next.0
  - @kozmoai/types@1.0.2-next.0
  - @kozmoai/backend-plugin-api@0.1.5-next.0
  - @kozmoai/catalog-model@1.1.4-next.0
  - @kozmoai/errors@1.1.4-next.0
  - @kozmoai/plugin-catalog-common@1.0.9-next.0

## 1.2.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.3
  - @kozmoai/types@1.0.1
  - @kozmoai/backend-plugin-api@0.1.4
  - @kozmoai/catalog-client@1.1.2
  - @kozmoai/errors@1.1.3
  - @kozmoai/plugin-catalog-common@1.0.8

## 1.2.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.4-next.1
  - @kozmoai/catalog-client@1.1.2-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/types@1.0.1-next.0
  - @kozmoai/plugin-catalog-common@1.0.8-next.0

## 1.2.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/types@1.0.1-next.0
  - @kozmoai/backend-plugin-api@0.1.4-next.0
  - @kozmoai/catalog-client@1.1.2-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/plugin-catalog-common@1.0.8-next.0

## 1.2.0

### Minor Changes

- 404366c853: Deprecated the `LocationSpec` type. It got moved from this package to the `@kozmoai/plugin-catalog-common` so make sure imports are updated.

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.2
  - @kozmoai/plugin-catalog-common@1.0.7
  - @kozmoai/backend-plugin-api@0.1.3
  - @kozmoai/catalog-client@1.1.1
  - @kozmoai/errors@1.1.2
  - @kozmoai/types@1.0.0

## 1.2.0-next.2

### Minor Changes

- 404366c853: Deprecated the `LocationSpec` type. It got moved from this package to the `@kozmoai/plugin-catalog-common` so make sure imports are updated.

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-common@1.0.7-next.2
  - @kozmoai/backend-plugin-api@0.1.3-next.2
  - @kozmoai/catalog-client@1.1.1-next.2
  - @kozmoai/catalog-model@1.1.2-next.2
  - @kozmoai/errors@1.1.2-next.2
  - @kozmoai/types@1.0.0

## 1.1.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.1.1-next.1
  - @kozmoai/backend-plugin-api@0.1.3-next.1
  - @kozmoai/catalog-model@1.1.2-next.1
  - @kozmoai/errors@1.1.2-next.1
  - @kozmoai/types@1.0.0

## 1.1.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.2-next.0
  - @kozmoai/backend-plugin-api@0.1.3-next.0
  - @kozmoai/catalog-client@1.1.1-next.0
  - @kozmoai/errors@1.1.2-next.0
  - @kozmoai/types@1.0.0

## 1.1.0

### Minor Changes

- 9743bc788c: Added refresh function to the `EntityProviderConnection` to be able to schedule refreshes from entity providers.

### Patch Changes

- 7d7d947352: Adds experimental `catalogServiceRef` for obtaining a `CatalogClient` in the new backend system.
- 409ed984e8: Updated usage of experimental backend service APIs.
- 62788b2ee8: The experimental `CatalogProcessingExtensionPoint` now accepts multiple providers and processors at once.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.2
  - @kozmoai/catalog-client@1.1.0
  - @kozmoai/catalog-model@1.1.1
  - @kozmoai/errors@1.1.1

## 1.1.0-next.2

### Minor Changes

- 9743bc788c: Added refresh function to the `EntityProviderConnection` to be able to schedule refreshes from entity providers.

### Patch Changes

- 409ed984e8: Updated usage of experimental backend service APIs.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.2-next.2
  - @kozmoai/catalog-client@1.1.0-next.2
  - @kozmoai/catalog-model@1.1.1-next.0
  - @kozmoai/errors@1.1.1-next.0

## 1.0.2-next.1

### Patch Changes

- 7d7d947352: Adds experimental `catalogServiceRef` for obtaining a `CatalogClient` in the new backend system.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.2-next.1
  - @kozmoai/catalog-client@1.0.5-next.1

## 1.0.2-next.0

### Patch Changes

- 62788b2ee8: The experimental `CatalogProcessingExtensionPoint` now accepts multiple providers and processors at once.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.2-next.0

## 1.0.1

### Patch Changes

- 0599732ec0: Refactored experimental backend system with new type names.
- 56e1b4b89c: Fixed typos in alpha types.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.1

## 1.0.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.1-next.0

## 1.0.0

### Major Changes

- 9a6aba1d85: This package houses stable types from the `@kozmoai/plugin-catalog-backend` package and is intended for creation of catalog modules. Prefer importing from this package over the `@kozmoai/plugin-catalog-backend` package.

### Minor Changes

- 91c1d12123: Added alpha exports for the new experimental backend system.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.0
  - @kozmoai/catalog-model@1.1.0
  - @kozmoai/errors@1.1.0

## 1.0.0-next.0

### Major Changes

- 9a6aba1d85: This package houses stable types from the `@kozmoai/plugin-catalog-backend` package and is intended for creation of catalog modules. Prefer importing from this package over the `@kozmoai/plugin-catalog-backend` package.

### Minor Changes

- 91c1d12123: Added alpha exports for the new experimental backend system.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.1.0-next.0
  - @kozmoai/catalog-model@1.1.0-next.3
