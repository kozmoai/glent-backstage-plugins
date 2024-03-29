# @kozmoai/plugin-azure-sites

## 0.1.20-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.14.1-next.1
  - @kozmoai/plugin-catalog-react@1.10.1-next.1
  - @kozmoai/core-plugin-api@1.9.1-next.1
  - @kozmoai/plugin-permission-common@0.7.13-next.1
  - @kozmoai/plugin-permission-react@0.4.21-next.1
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/theme@0.5.2-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.3-next.1

## 0.1.20-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.5.2-next.0
  - @kozmoai/core-components@0.14.1-next.0
  - @kozmoai/plugin-catalog-react@1.10.1-next.0
  - @kozmoai/plugin-permission-common@0.7.13-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/core-plugin-api@1.9.1-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.3-next.0
  - @kozmoai/plugin-permission-react@0.4.21-next.0

## 0.1.19

### Patch Changes

- 09a9c95: Updated README
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 5a409bb: Azure Sites `start` and `stop` action is now protected with the Permissions framework.

  The below example describes an action that forbids anyone but the owner of the catalog entity to trigger actions towards a site tied to an entity.

  ```typescript
     // packages/backend/src/plugins/permission.ts
    import { azureSitesActionPermission } from '@kozmoai/plugin-azure-sites-common';
     ...
     class TestPermissionPolicy implements PermissionPolicy {
    async handle(request: PolicyQuery, user?: GlintIdentityResponse): Promise<PolicyDecision> {
       if (isPermission(request.permission, azureSitesActionPermission)) {
         return createCatalogConditionalDecision(
           request.permission,
           catalogConditions.isEntityOwner({
             claims: user?.identity.ownershipEntityRefs ??  [],
           }),
         );
       }
       ...
       return {
         result: AuthorizeResult.ALLOW,
       };
     }
     ...
     }
  ```

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.10.0
  - @kozmoai/core-components@0.14.0
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/theme@0.5.1
  - @kozmoai/core-plugin-api@1.9.0
  - @kozmoai/plugin-permission-react@0.4.20
  - @kozmoai/plugin-azure-sites-common@0.1.2
  - @kozmoai/plugin-permission-common@0.7.12

## 0.1.19-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.5.1-next.1
  - @kozmoai/core-components@0.14.0-next.2
  - @kozmoai/plugin-catalog-react@1.10.0-next.3
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/core-plugin-api@1.9.0-next.1
  - @kozmoai/plugin-azure-sites-common@0.1.2-next.0
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-react@0.4.20-next.1

## 0.1.19-next.2

### Patch Changes

- 09a9c95: Updated README
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- Updated dependencies
  - @kozmoai/core-components@0.14.0-next.1
  - @kozmoai/core-plugin-api@1.9.0-next.1
  - @kozmoai/plugin-catalog-react@1.10.0-next.2
  - @kozmoai/plugin-permission-react@0.4.20-next.1
  - @kozmoai/theme@0.5.1-next.0
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.2-next.0
  - @kozmoai/plugin-permission-common@0.7.12

## 0.1.19-next.1

### Patch Changes

- 5a409bb: Azure Sites `start` and `stop` action is now protected with the Permissions framework.

  The below example describes an action that forbids anyone but the owner of the catalog entity to trigger actions towards a site tied to an entity.

  ```typescript
     // packages/backend/src/plugins/permission.ts
    import { azureSitesActionPermission } from '@kozmoai/plugin-azure-sites-common';
     ...
     class TestPermissionPolicy implements PermissionPolicy {
    async handle(request: PolicyQuery, user?: GlintIdentityResponse): Promise<PolicyDecision> {
       if (isPermission(request.permission, azureSitesActionPermission)) {
         return createCatalogConditionalDecision(
           request.permission,
           catalogConditions.isEntityOwner({
             claims: user?.identity.ownershipEntityRefs ??  [],
           }),
         );
       }
       ...
       return {
         result: AuthorizeResult.ALLOW,
       };
     }
     ...
     }
  ```

- Updated dependencies
  - @kozmoai/core-components@0.14.0-next.0
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/core-plugin-api@1.8.3-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.2-next.0
  - @kozmoai/plugin-catalog-react@1.9.4-next.1
  - @kozmoai/theme@0.5.0
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-react@0.4.20-next.0

## 0.1.19-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.4-next.0
  - @kozmoai/core-components@0.13.10
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.2
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.18

### Patch Changes

- a31f688: Show Azure site tags in `EntityAzureSitesOverviewWidget`.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/core-components@0.13.10
  - @kozmoai/core-plugin-api@1.8.2
  - @kozmoai/plugin-catalog-react@1.9.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.18-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.3-next.2

## 0.1.18-next.1

### Patch Changes

- a31f688: Show Azure site tags in `EntityAzureSitesOverviewWidget`.
- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.2-next.0
  - @kozmoai/core-components@0.13.10-next.1
  - @kozmoai/plugin-catalog-react@1.9.3-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.18-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/core-components@0.13.10-next.0
  - @kozmoai/plugin-catalog-react@1.9.3-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.17

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.1
  - @kozmoai/plugin-catalog-react@1.9.2
  - @kozmoai/core-components@0.13.9
  - @kozmoai/theme@0.5.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.17-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.9-next.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/theme@0.5.0-next.1
  - @kozmoai/plugin-azure-sites-common@0.1.1
  - @kozmoai/plugin-catalog-react@1.9.2-next.3

## 0.1.17-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.5.0-next.1
  - @kozmoai/plugin-catalog-react@1.9.2-next.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-components@0.13.9-next.2
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.17-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.9-next.1
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/plugin-catalog-react@1.9.2-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/theme@0.5.0-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.17-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.1-next.0
  - @kozmoai/plugin-catalog-react@1.9.2-next.0
  - @kozmoai/core-components@0.13.9-next.0
  - @kozmoai/theme@0.5.0-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.15

### Patch Changes

- 6c2b872153: Add official support for React 18.
- fdb5e23602: Import `MissingAnnotationEmptyState` from `@kozmoai/plugin-catalog-react` to remove the cyclical dependency
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.0
  - @kozmoai/core-components@0.13.8
  - @kozmoai/core-plugin-api@1.8.0
  - @kozmoai/theme@0.4.4
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.15-next.2

### Patch Changes

- [#20842](https://github.com/kozmoai/glint/pull/20842) [`fdb5e23602`](https://github.com/kozmoai/glint/commit/fdb5e2360299c5faa30f4d4236fc548b94d37446) Thanks [@benjdlambert](https://github.com/benjdlambert)! - Import `MissingAnnotationEmptyState` from `@kozmoai/plugin-catalog-react` to remove the cyclical dependency

- Updated dependencies
  - @kozmoai/core-components@0.13.8-next.2
  - @kozmoai/plugin-catalog-react@1.9.0-next.2

## 0.1.15-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.0-next.1
  - @kozmoai/core-components@0.13.8-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.0-next.0
  - @kozmoai/theme@0.4.4-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.15-next.0

### Patch Changes

- 6c2b872153: Add official support for React 18.
- Updated dependencies
  - @kozmoai/core-components@0.13.7-next.0
  - @kozmoai/plugin-catalog-react@1.9.0-next.0
  - @kozmoai/core-plugin-api@1.8.0-next.0
  - @kozmoai/theme@0.4.4-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.14

### Patch Changes

- 9a1fce352e: Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- f95af4e540: Updated dependency `@testing-library/dom` to `^9.0.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.5
  - @kozmoai/core-plugin-api@1.7.0
  - @kozmoai/core-components@0.13.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/theme@0.4.3
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.14-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.6-next.2
  - @kozmoai/core-plugin-api@1.7.0-next.1
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/plugin-catalog-react@1.8.5-next.2
  - @kozmoai/theme@0.4.3-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.14-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.6-next.1
  - @kozmoai/plugin-catalog-react@1.8.5-next.1
  - @kozmoai/core-plugin-api@1.7.0-next.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/theme@0.4.2
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.14-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.5-next.0
  - @kozmoai/core-plugin-api@1.7.0-next.0
  - @kozmoai/core-components@0.13.6-next.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/theme@0.4.2
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.13

### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.4
  - @kozmoai/core-components@0.13.5
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/core-plugin-api@1.6.0
  - @kozmoai/plugin-azure-sites-common@0.1.1
  - @kozmoai/theme@0.4.2

## 0.1.13-next.3

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- Updated dependencies
  - @kozmoai/catalog-model@1.4.2-next.2
  - @kozmoai/core-components@0.13.5-next.3
  - @kozmoai/core-plugin-api@1.6.0-next.3
  - @kozmoai/plugin-azure-sites-common@0.1.1-next.0
  - @kozmoai/plugin-catalog-react@1.8.4-next.3
  - @kozmoai/theme@0.4.2-next.0

## 0.1.13-next.2

### Patch Changes

- 8cec7664e146: Removed `@types/node` dependency
- Updated dependencies
  - @kozmoai/core-components@0.13.5-next.2
  - @kozmoai/core-plugin-api@1.6.0-next.2
  - @kozmoai/plugin-catalog-react@1.8.4-next.2
  - @kozmoai/catalog-model@1.4.2-next.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.13-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.4-next.1
  - @kozmoai/core-components@0.13.5-next.1
  - @kozmoai/catalog-model@1.4.2-next.0
  - @kozmoai/core-plugin-api@1.6.0-next.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.12-next.0

### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- Updated dependencies
  - @kozmoai/core-plugin-api@1.6.0-next.0
  - @kozmoai/core-components@0.13.5-next.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-azure-sites-common@0.1.0
  - @kozmoai/plugin-catalog-react@1.8.3-next.0

## 0.1.10

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.4
  - @kozmoai/plugin-catalog-react@1.8.1
  - @kozmoai/core-plugin-api@1.5.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.10-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.1-next.1

## 0.1.10-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.4-next.0
  - @kozmoai/core-plugin-api@1.5.3
  - @kozmoai/plugin-catalog-react@1.8.1-next.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.9

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-catalog-react@1.8.0
  - @kozmoai/core-components@0.13.3
  - @kozmoai/core-plugin-api@1.5.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.9-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.0-next.2
  - @kozmoai/theme@0.4.1-next.1
  - @kozmoai/core-plugin-api@1.5.3-next.1
  - @kozmoai/core-components@0.13.3-next.2
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.9-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.4.1-next.0
  - @kozmoai/core-components@0.13.3-next.1
  - @kozmoai/core-plugin-api@1.5.3-next.0
  - @kozmoai/plugin-catalog-react@1.7.1-next.1

## 0.1.9-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.3-next.0
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/core-plugin-api@1.5.2
  - @kozmoai/theme@0.4.0
  - @kozmoai/plugin-azure-sites-common@0.1.0
  - @kozmoai/plugin-catalog-react@1.7.1-next.0

## 0.1.8

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.5.2
  - @kozmoai/core-components@0.13.2
  - @kozmoai/theme@0.4.0
  - @kozmoai/plugin-catalog-react@1.7.0
  - @kozmoai/catalog-model@1.4.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.8-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.2-next.3
  - @kozmoai/catalog-model@1.4.0-next.1
  - @kozmoai/core-plugin-api@1.5.2-next.0
  - @kozmoai/theme@0.4.0-next.1
  - @kozmoai/plugin-azure-sites-common@0.1.0
  - @kozmoai/plugin-catalog-react@1.7.0-next.3

## 0.1.8-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.4.0-next.1
  - @kozmoai/plugin-catalog-react@1.7.0-next.2
  - @kozmoai/core-components@0.13.2-next.2
  - @kozmoai/core-plugin-api@1.5.2-next.0

## 0.1.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.2-next.1
  - @kozmoai/plugin-catalog-react@1.7.0-next.1
  - @kozmoai/catalog-model@1.4.0-next.0
  - @kozmoai/core-plugin-api@1.5.2-next.0
  - @kozmoai/theme@0.4.0-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.7.0-next.0
  - @kozmoai/theme@0.4.0-next.0
  - @kozmoai/core-components@0.13.2-next.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.7

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.3.0
  - @kozmoai/plugin-catalog-react@1.6.0
  - @kozmoai/core-components@0.13.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.7-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.3.0-next.0
  - @kozmoai/core-components@0.13.1-next.1
  - @kozmoai/plugin-catalog-react@1.6.0-next.2
  - @kozmoai/core-plugin-api@1.5.1

## 0.1.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.1-next.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/plugin-catalog-react@1.6.0-next.1

## 0.1.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.6.0-next.0
  - @kozmoai/core-components@0.13.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/theme@0.2.19
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.6

### Patch Changes

- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @kozmoai/core-components@0.13.0
  - @kozmoai/plugin-catalog-react@1.5.0
  - @kozmoai/theme@0.2.19
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.6-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.5.0-next.3
  - @kozmoai/catalog-model@1.3.0-next.0
  - @kozmoai/core-components@0.13.0-next.3
  - @kozmoai/core-plugin-api@1.5.1-next.1
  - @kozmoai/theme@0.2.19-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.6-next.2
  - @kozmoai/plugin-catalog-react@1.4.1-next.2
  - @kozmoai/core-plugin-api@1.5.1-next.1
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/theme@0.2.19-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.6-next.1

### Patch Changes

- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @kozmoai/core-components@0.12.6-next.1
  - @kozmoai/core-plugin-api@1.5.1-next.0
  - @kozmoai/plugin-catalog-react@1.4.1-next.1
  - @kozmoai/theme@0.2.19-next.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.6-next.0

### Patch Changes

- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- Updated dependencies
  - @kozmoai/core-components@0.12.6-next.0
  - @kozmoai/plugin-catalog-react@1.4.1-next.0
  - @kozmoai/core-plugin-api@1.5.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/theme@0.2.18
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.5

### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/core-components@0.12.5
  - @kozmoai/plugin-catalog-react@1.4.0
  - @kozmoai/core-plugin-api@1.5.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/theme@0.2.18
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.5-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.5-next.2
  - @kozmoai/plugin-catalog-react@1.4.0-next.2
  - @kozmoai/core-plugin-api@1.5.0-next.2

## 0.1.5-next.1

### Patch Changes

- cb8ec97cdeb: Change black & white colors to be theme aware
- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/core-components@0.12.5-next.1
  - @kozmoai/core-plugin-api@1.4.1-next.1
  - @kozmoai/theme@0.2.18-next.0
  - @kozmoai/plugin-catalog-react@1.4.0-next.1
  - @kozmoai/catalog-model@1.2.1-next.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.4.0-next.0
  - @kozmoai/core-plugin-api@1.4.1-next.0
  - @kozmoai/catalog-model@1.2.1-next.0
  - @kozmoai/core-components@0.12.5-next.0
  - @kozmoai/theme@0.2.17
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.4

### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- 98a00a09d5: Fixed `AzureSites` plugin start and stop issue #15904
  Fixed `AzureSites` UI load issue #15907
- 4bdd6bcb3c: Prefer Link over plain anchors
- Updated dependencies
  - @kozmoai/core-components@0.12.4
  - @kozmoai/catalog-model@1.2.0
  - @kozmoai/theme@0.2.17
  - @kozmoai/core-plugin-api@1.4.0
  - @kozmoai/plugin-catalog-react@1.3.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.4-next.2

### Patch Changes

- 98a00a09d5: Fixed `AzureSites` plugin start and stop issue #15904
  Fixed `AzureSites` UI load issue #15907
- Updated dependencies
  - @kozmoai/catalog-model@1.2.0-next.1
  - @kozmoai/core-components@0.12.4-next.1
  - @kozmoai/core-plugin-api@1.3.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0
  - @kozmoai/plugin-catalog-react@1.3.0-next.2

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.4-next.0
  - @kozmoai/plugin-catalog-react@1.3.0-next.1
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/core-plugin-api@1.3.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.3.0-next.0
  - @kozmoai/catalog-model@1.1.6-next.0

## 0.1.3

### Patch Changes

- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.
- Updated dependencies
  - @kozmoai/catalog-model@1.1.5
  - @kozmoai/plugin-catalog-react@1.2.4
  - @kozmoai/core-components@0.12.3
  - @kozmoai/core-plugin-api@1.3.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.3.0-next.1
  - @kozmoai/plugin-catalog-react@1.2.4-next.2
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/core-components@0.12.3-next.2
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/core-components@0.12.3-next.1
  - @kozmoai/core-plugin-api@1.2.1-next.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0
  - @kozmoai/plugin-catalog-react@1.2.4-next.1

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.5-next.0
  - @kozmoai/plugin-catalog-react@1.2.4-next.0
  - @kozmoai/core-components@0.12.3-next.0
  - @kozmoai/core-plugin-api@1.2.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.2
  - @kozmoai/plugin-catalog-react@1.2.3

## 0.1.1

### Patch Changes

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @kozmoai/core-plugin-api@1.2.0
  - @kozmoai/core-components@0.12.1
  - @kozmoai/plugin-catalog-react@1.2.2
  - @kozmoai/catalog-model@1.1.4
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.1-next.4

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.4
  - @kozmoai/plugin-catalog-react@1.2.2-next.4
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/core-plugin-api@1.2.0-next.2
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.1-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.3
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/core-plugin-api@1.2.0-next.2
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0
  - @kozmoai/plugin-catalog-react@1.2.2-next.3

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.2.0-next.2
  - @kozmoai/core-components@0.12.1-next.2
  - @kozmoai/plugin-catalog-react@1.2.2-next.2
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.1
  - @kozmoai/core-plugin-api@1.1.1-next.1
  - @kozmoai/plugin-catalog-react@1.2.2-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.1-next.0

### Patch Changes

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.0
  - @kozmoai/core-plugin-api@1.1.1-next.0
  - @kozmoai/plugin-catalog-react@1.2.2-next.0
  - @kozmoai/catalog-model@1.1.4-next.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.0

### Minor Changes

- 4a75ce761c: Azure Sites (Apps & Functions) support for a given entity. View the current status of the site, quickly jump to site's Overview page, or Log Stream page.

### Patch Changes

- f905853ad6: Prefer using `Link` from `@kozmoai/core-components` rather than material-UI.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.2.1
  - @kozmoai/core-components@0.12.0
  - @kozmoai/core-plugin-api@1.1.0
  - @kozmoai/catalog-model@1.1.3
  - @kozmoai/plugin-azure-sites-common@0.1.0
  - @kozmoai/theme@0.2.16

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.0-next.1
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/core-plugin-api@1.1.0-next.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-sites-common@0.1.0-next.0
  - @kozmoai/plugin-catalog-react@1.2.1-next.1

## 0.1.0-next.0

### Minor Changes

- 4a75ce761c: Azure Sites (Apps & Functions) support for a given entity. View the current status of the site, quickly jump to site's Overview page, or Log Stream page.

### Patch Changes

- f905853ad6: Prefer using `Link` from `@kozmoai/core-components` rather than material-UI.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.2.1-next.0
  - @kozmoai/core-components@0.12.0-next.0
  - @kozmoai/core-plugin-api@1.1.0-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0-next.0
  - @kozmoai/theme@0.2.16
