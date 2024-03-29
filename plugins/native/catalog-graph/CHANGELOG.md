# @kozmoai/plugin-catalog-graph

## 0.4.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.14.1-next.1
  - @kozmoai/plugin-catalog-react@1.10.1-next.1
  - @kozmoai/core-plugin-api@1.9.1-next.1
  - @kozmoai/frontend-plugin-api@0.6.1-next.1
  - @kozmoai/catalog-client@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/core-compat-api@0.2.1-next.1
  - @kozmoai/types@1.1.1

## 0.4.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.14.1-next.0
  - @kozmoai/plugin-catalog-react@1.10.1-next.0
  - @kozmoai/catalog-client@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/core-plugin-api@1.9.1-next.0
  - @kozmoai/frontend-plugin-api@0.6.1-next.0
  - @kozmoai/core-compat-api@0.2.1-next.0
  - @kozmoai/types@1.1.1

## 0.4.0

### Minor Changes

- 3dc64e9: Migrate plugin to the new frontend system, it is experimental and available via alpha subpath.

### Patch Changes

- 916da47: Change default icon for unknown entities to nothing instead of the help icon.
- f937aae: use `CatalogClient.getEntitiesByRefs()` to reduce the number of backend requests from plugin `catalog-graph`
- 3e1c6e2: Added possibility to show arrow heads for graph edges for better understandability.

  In order to show arrow heads in the catalog graph page, add `showArrowHeads` attribute to `CatalogGraphPage` component
  (typically in `packages/app/src/App.tsx`):

  ```diff
  - <CatalogGraphPage />
  + <CatalogGraphPage showArrowHeads />
  ```

  In order to show arrow heads in entity graphs, add `showArrowHeads` attribute to `EntityCatalogGraphCard` components
  (typically multiple occurrences in `packages/app/src/components/catalog/EntityPage.tsx`):

  ```diff
  - <EntityCatalogGraphCard variant="gridItem" height={400} />
  + <EntityCatalogGraphCard variant="gridItem" height={400} showArrowHeads />
  ```

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- Updated dependencies
  - @kozmoai/frontend-plugin-api@0.6.0
  - @kozmoai/core-compat-api@0.2.0
  - @kozmoai/plugin-catalog-react@1.10.0
  - @kozmoai/core-components@0.14.0
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/core-plugin-api@1.9.0
  - @kozmoai/catalog-client@1.6.0
  - @kozmoai/types@1.1.1

## 0.4.0-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.14.0-next.2
  - @kozmoai/plugin-catalog-react@1.10.0-next.3
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/core-compat-api@0.2.0-next.3
  - @kozmoai/core-plugin-api@1.9.0-next.1
  - @kozmoai/frontend-plugin-api@0.6.0-next.3
  - @kozmoai/types@1.1.1

## 0.4.0-next.2

### Minor Changes

- 3dc64e9: Migrate plugin to the new frontend system, it is experimental and available via alpha subpath.

### Patch Changes

- 3e1c6e2: Added possibility to show arrow heads for graph edges for better understandability.

  In order to show arrow heads in the catalog graph page, add `showArrowHeads` attribute to `CatalogGraphPage` component
  (typically in `packages/app/src/App.tsx`):

  ```diff
  - <CatalogGraphPage />
  + <CatalogGraphPage showArrowHeads />
  ```

  In order to show arrow heads in entity graphs, add `showArrowHeads` attribute to `EntityCatalogGraphCard` components
  (typically multiple occurrences in `packages/app/src/components/catalog/EntityPage.tsx`):

  ```diff
  - <EntityCatalogGraphCard variant="gridItem" height={400} />
  + <EntityCatalogGraphCard variant="gridItem" height={400} showArrowHeads />
  ```

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- Updated dependencies
  - @kozmoai/core-components@0.14.0-next.1
  - @kozmoai/core-plugin-api@1.9.0-next.1
  - @kozmoai/frontend-plugin-api@0.6.0-next.2
  - @kozmoai/plugin-catalog-react@1.10.0-next.2
  - @kozmoai/core-compat-api@0.2.0-next.2
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/types@1.1.1

## 0.3.4-next.1

### Patch Changes

- f937aae: use `CatalogClient.getEntitiesByRefs()` to reduce the number of backend requests from plugin `catalog-graph`
- Updated dependencies
  - @kozmoai/core-components@0.14.0-next.0
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/core-plugin-api@1.8.3-next.0
  - @kozmoai/plugin-catalog-react@1.9.4-next.1
  - @kozmoai/types@1.1.1

## 0.3.4-next.0

### Patch Changes

- 916da47: Change default icon for unknown entities to nothing instead of the help icon.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.4-next.0
  - @kozmoai/catalog-client@1.6.0-next.0
  - @kozmoai/core-components@0.13.10
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.2
  - @kozmoai/types@1.1.1

## 0.3.3

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/core-components@0.13.10
  - @kozmoai/core-plugin-api@1.8.2
  - @kozmoai/catalog-client@1.5.2
  - @kozmoai/plugin-catalog-react@1.9.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.3-next.2

## 0.3.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.2-next.0
  - @kozmoai/core-components@0.13.10-next.1
  - @kozmoai/plugin-catalog-react@1.9.3-next.1
  - @kozmoai/catalog-client@1.5.2-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1

## 0.3.3-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/core-components@0.13.10-next.0
  - @kozmoai/catalog-client@1.5.2-next.0
  - @kozmoai/plugin-catalog-react@1.9.3-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.1
  - @kozmoai/types@1.1.1

## 0.3.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.1
  - @kozmoai/plugin-catalog-react@1.9.2
  - @kozmoai/core-components@0.13.9
  - @kozmoai/theme@0.5.0
  - @kozmoai/catalog-client@1.5.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1

## 0.3.2-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.9-next.3
  - @kozmoai/catalog-client@1.5.0-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/theme@0.5.0-next.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-react@1.9.2-next.3

## 0.3.2-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.5.0-next.1
  - @kozmoai/plugin-catalog-react@1.9.2-next.2
  - @kozmoai/catalog-client@1.5.0-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-components@0.13.9-next.2
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/types@1.1.1

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.9-next.1
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/plugin-catalog-react@1.9.2-next.1
  - @kozmoai/catalog-client@1.5.0-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/theme@0.5.0-next.0
  - @kozmoai/types@1.1.1

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.1-next.0
  - @kozmoai/plugin-catalog-react@1.9.2-next.0
  - @kozmoai/core-components@0.13.9-next.0
  - @kozmoai/theme@0.5.0-next.0
  - @kozmoai/catalog-client@1.4.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1

## 0.3.0

### Minor Changes

- a604623324: Add the entire `Entity` to `EntityNodeData` and deprecate `name`, `kind`, `title`, `namespace` and `spec`.

  To get the deprecated properties in your custom component you can use:

  ```typescript
  import { DEFAULT_NAMESPACE } from '@kozmoai/catalog-model';

  const {
    kind,
    metadata: { name, namespace = DEFAULT_NAMESPACE, title },
  } = entity;
  ```

### Patch Changes

- 6c2b872153: Add official support for React 18.
- 62b5922916: Internal theme type updates
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.0
  - @kozmoai/core-components@0.13.8
  - @kozmoai/core-plugin-api@1.8.0
  - @kozmoai/theme@0.4.4
  - @kozmoai/catalog-client@1.4.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1

## 0.2.38-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.8-next.2
  - @kozmoai/plugin-catalog-react@1.9.0-next.2

## 0.2.38-next.1

### Patch Changes

- 62b5922916: Internal theme type updates
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.0-next.1
  - @kozmoai/core-components@0.13.8-next.1
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.0-next.0
  - @kozmoai/theme@0.4.4-next.0
  - @kozmoai/types@1.1.1

## 0.2.38-next.0

### Patch Changes

- 6c2b872153: Add official support for React 18.
- Updated dependencies
  - @kozmoai/core-components@0.13.7-next.0
  - @kozmoai/plugin-catalog-react@1.9.0-next.0
  - @kozmoai/core-plugin-api@1.8.0-next.0
  - @kozmoai/theme@0.4.4-next.0
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1

## 0.2.37

### Patch Changes

- 9a1fce352e: Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- f95af4e540: Updated dependency `@testing-library/dom` to `^9.0.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.5
  - @kozmoai/core-plugin-api@1.7.0
  - @kozmoai/core-components@0.13.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/theme@0.4.3
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/types@1.1.1

## 0.2.37-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.6-next.2
  - @kozmoai/core-plugin-api@1.7.0-next.1
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/plugin-catalog-react@1.8.5-next.2
  - @kozmoai/theme@0.4.3-next.0
  - @kozmoai/catalog-client@1.4.5-next.0
  - @kozmoai/types@1.1.1

## 0.2.37-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.6-next.1
  - @kozmoai/plugin-catalog-react@1.8.5-next.1
  - @kozmoai/core-plugin-api@1.7.0-next.0
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/theme@0.4.2
  - @kozmoai/types@1.1.1

## 0.2.37-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.5-next.0
  - @kozmoai/core-plugin-api@1.7.0-next.0
  - @kozmoai/core-components@0.13.6-next.0
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/theme@0.4.2
  - @kozmoai/types@1.1.1

## 0.2.36

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.4
  - @kozmoai/core-components@0.13.5
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/core-plugin-api@1.6.0
  - @kozmoai/theme@0.4.2
  - @kozmoai/types@1.1.1

## 0.2.36-next.3

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- Updated dependencies
  - @kozmoai/catalog-client@1.4.4-next.2
  - @kozmoai/catalog-model@1.4.2-next.2
  - @kozmoai/core-components@0.13.5-next.3
  - @kozmoai/core-plugin-api@1.6.0-next.3
  - @kozmoai/plugin-catalog-react@1.8.4-next.3
  - @kozmoai/theme@0.4.2-next.0
  - @kozmoai/types@1.1.1-next.0

## 0.2.36-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.5-next.2
  - @kozmoai/core-plugin-api@1.6.0-next.2
  - @kozmoai/plugin-catalog-react@1.8.4-next.2
  - @kozmoai/catalog-model@1.4.2-next.1
  - @kozmoai/catalog-client@1.4.4-next.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/types@1.1.0

## 0.2.36-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.4-next.1
  - @kozmoai/core-components@0.13.5-next.1
  - @kozmoai/catalog-model@1.4.2-next.0
  - @kozmoai/core-plugin-api@1.6.0-next.1
  - @kozmoai/catalog-client@1.4.4-next.0
  - @kozmoai/theme@0.4.1
  - @kozmoai/types@1.1.0

## 0.2.35-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.6.0-next.0
  - @kozmoai/core-components@0.13.5-next.0
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-react@1.8.3-next.0

## 0.2.33

### Patch Changes

- 64ee2c0c7ca5: Propagate entity spec to EntityNode so that spec info such as type can be used for graph node customization
- 62dc7a2b1ad1: Added maximum depth parameter to the catalogGraphParams in CatalogGraphCard.
- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @kozmoai/core-components@0.13.4
  - @kozmoai/plugin-catalog-react@1.8.1
  - @kozmoai/core-plugin-api@1.5.3
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/types@1.1.0

## 0.2.33-next.2

### Patch Changes

- 62dc7a2b1ad1: Added maximum depth parameter to the catalogGraphParams in CatalogGraphCard.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.1-next.1

## 0.2.33-next.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/core-components@0.13.4-next.0
  - @kozmoai/core-plugin-api@1.5.3
  - @kozmoai/theme@0.4.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-react@1.8.1-next.0

## 0.2.33-next.0

### Patch Changes

- 64ee2c0c7ca5: Propagate entity spec to EntityNode so that spec info such as type can be used for graph node customization
- Updated dependencies
  - @kozmoai/core-components@0.13.4-next.0
  - @kozmoai/core-plugin-api@1.5.3
  - @kozmoai/plugin-catalog-react@1.8.1-next.0
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/types@1.1.0

## 0.2.32

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-catalog-react@1.8.0
  - @kozmoai/core-components@0.13.3
  - @kozmoai/core-plugin-api@1.5.3
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1

## 0.2.32-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.0-next.2
  - @kozmoai/theme@0.4.1-next.1
  - @kozmoai/core-plugin-api@1.5.3-next.1
  - @kozmoai/core-components@0.13.3-next.2
  - @kozmoai/catalog-client@1.4.3-next.0
  - @kozmoai/catalog-model@1.4.1-next.0

## 0.2.32-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.4.1-next.0
  - @kozmoai/core-components@0.13.3-next.1
  - @kozmoai/core-plugin-api@1.5.3-next.0
  - @kozmoai/plugin-catalog-react@1.7.1-next.1

## 0.2.32-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.3-next.0
  - @kozmoai/catalog-client@1.4.3-next.0
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/core-plugin-api@1.5.2
  - @kozmoai/theme@0.4.0
  - @kozmoai/plugin-catalog-react@1.7.1-next.0

## 0.2.31

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.5.2
  - @kozmoai/catalog-client@1.4.2
  - @kozmoai/core-components@0.13.2
  - @kozmoai/theme@0.4.0
  - @kozmoai/plugin-catalog-react@1.7.0
  - @kozmoai/catalog-model@1.4.0

## 0.2.31-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.2-next.3
  - @kozmoai/catalog-model@1.4.0-next.1
  - @kozmoai/catalog-client@1.4.2-next.2
  - @kozmoai/core-plugin-api@1.5.2-next.0
  - @kozmoai/theme@0.4.0-next.1
  - @kozmoai/plugin-catalog-react@1.7.0-next.3

## 0.2.31-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.4.0-next.1
  - @kozmoai/plugin-catalog-react@1.7.0-next.2
  - @kozmoai/core-components@0.13.2-next.2
  - @kozmoai/core-plugin-api@1.5.2-next.0

## 0.2.31-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.2-next.1
  - @kozmoai/plugin-catalog-react@1.7.0-next.1
  - @kozmoai/catalog-model@1.4.0-next.0
  - @kozmoai/core-plugin-api@1.5.2-next.0
  - @kozmoai/catalog-client@1.4.2-next.1
  - @kozmoai/theme@0.4.0-next.0

## 0.2.31-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.2-next.0
  - @kozmoai/plugin-catalog-react@1.7.0-next.0
  - @kozmoai/theme@0.4.0-next.0
  - @kozmoai/core-components@0.13.2-next.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/catalog-model@1.3.0

## 0.2.30

### Patch Changes

- d446f8fb0a8: Expose all `EntityRelationsGraphProps` to Catalog Graph Page
- Updated dependencies
  - @kozmoai/theme@0.3.0
  - @kozmoai/plugin-catalog-react@1.6.0
  - @kozmoai/core-components@0.13.1
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/core-plugin-api@1.5.1

## 0.2.30-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.3.0-next.0
  - @kozmoai/core-components@0.13.1-next.1
  - @kozmoai/plugin-catalog-react@1.6.0-next.2
  - @kozmoai/core-plugin-api@1.5.1

## 0.2.30-next.1

### Patch Changes

- d446f8fb0a8: Expose all `EntityRelationsGraphProps` to Catalog Graph Page
- Updated dependencies
  - @kozmoai/core-components@0.13.1-next.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/plugin-catalog-react@1.6.0-next.1

## 0.2.30-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.6.0-next.0
  - @kozmoai/core-components@0.13.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/theme@0.2.19

## 0.2.29

### Patch Changes

- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @kozmoai/core-components@0.13.0
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/plugin-catalog-react@1.5.0
  - @kozmoai/theme@0.2.19
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/catalog-model@1.3.0

## 0.2.29-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.5.0-next.3
  - @kozmoai/catalog-model@1.3.0-next.0
  - @kozmoai/core-components@0.13.0-next.3
  - @kozmoai/catalog-client@1.4.1-next.1
  - @kozmoai/core-plugin-api@1.5.1-next.1
  - @kozmoai/theme@0.2.19-next.0

## 0.2.29-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.1-next.0
  - @kozmoai/core-components@0.12.6-next.2
  - @kozmoai/plugin-catalog-react@1.4.1-next.2
  - @kozmoai/core-plugin-api@1.5.1-next.1
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/theme@0.2.19-next.0

## 0.2.29-next.1

### Patch Changes

- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @kozmoai/core-components@0.12.6-next.1
  - @kozmoai/core-plugin-api@1.5.1-next.0
  - @kozmoai/plugin-catalog-react@1.4.1-next.1
  - @kozmoai/theme@0.2.19-next.0
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/catalog-model@1.2.1

## 0.2.29-next.0

### Patch Changes

- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- Updated dependencies
  - @kozmoai/core-components@0.12.6-next.0
  - @kozmoai/plugin-catalog-react@1.4.1-next.0
  - @kozmoai/core-plugin-api@1.5.0
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/theme@0.2.18

## 0.2.28

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/core-components@0.12.5
  - @kozmoai/plugin-catalog-react@1.4.0
  - @kozmoai/core-plugin-api@1.5.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/theme@0.2.18

## 0.2.28-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.5-next.2
  - @kozmoai/plugin-catalog-react@1.4.0-next.2
  - @kozmoai/core-plugin-api@1.5.0-next.2

## 0.2.28-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.5-next.1
  - @kozmoai/catalog-client@1.4.0-next.1
  - @kozmoai/core-plugin-api@1.4.1-next.1
  - @kozmoai/theme@0.2.18-next.0
  - @kozmoai/plugin-catalog-react@1.4.0-next.1
  - @kozmoai/catalog-model@1.2.1-next.1

## 0.2.28-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.0-next.0
  - @kozmoai/plugin-catalog-react@1.4.0-next.0
  - @kozmoai/core-plugin-api@1.4.1-next.0
  - @kozmoai/catalog-model@1.2.1-next.0
  - @kozmoai/core-components@0.12.5-next.0
  - @kozmoai/theme@0.2.17

## 0.2.27

### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- fe19058b74: Fix #16245: The CatalogGraphCard has parameter naming errors for CatalogGraphPage
- 1827710136: Expose additional props on the `CatalogGraphCard` to allow for custom node & label rendering or kind/relation filtering.
- Updated dependencies
  - @kozmoai/core-components@0.12.4
  - @kozmoai/catalog-model@1.2.0
  - @kozmoai/theme@0.2.17
  - @kozmoai/core-plugin-api@1.4.0
  - @kozmoai/plugin-catalog-react@1.3.0
  - @kozmoai/catalog-client@1.3.1

## 0.2.27-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.2.0-next.1
  - @kozmoai/core-components@0.12.4-next.1
  - @kozmoai/catalog-client@1.3.1-next.1
  - @kozmoai/core-plugin-api@1.3.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-catalog-react@1.3.0-next.2

## 0.2.27-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.4-next.0
  - @kozmoai/plugin-catalog-react@1.3.0-next.1
  - @kozmoai/catalog-client@1.3.1-next.0
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/core-plugin-api@1.3.0
  - @kozmoai/theme@0.2.16

## 0.2.27-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.3.0-next.0
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/catalog-client@1.3.1-next.0

## 0.2.26

### Patch Changes

- 99f05cbc70: The link from the `CatalogGraphCard` to the `CatalogGraphPage` no longer includes an explicit `maxDepth` parameter, letting the `CatalogGraphPage` choose the initial `maxDepth` instead.
- Updated dependencies
  - @kozmoai/catalog-model@1.1.5
  - @kozmoai/catalog-client@1.3.0
  - @kozmoai/plugin-catalog-react@1.2.4
  - @kozmoai/core-components@0.12.3
  - @kozmoai/core-plugin-api@1.3.0
  - @kozmoai/theme@0.2.16

## 0.2.26-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.3.0-next.1
  - @kozmoai/catalog-client@1.3.0-next.2
  - @kozmoai/plugin-catalog-react@1.2.4-next.2
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/core-components@0.12.3-next.2
  - @kozmoai/theme@0.2.16

## 0.2.26-next.1

### Patch Changes

- 99f05cbc70: The link from the `CatalogGraphCard` to the `CatalogGraphPage` no longer includes an explicit `maxDepth` parameter, letting the `CatalogGraphPage` choose the initial `maxDepth` instead.
- Updated dependencies
  - @kozmoai/catalog-client@1.3.0-next.1
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/core-components@0.12.3-next.1
  - @kozmoai/core-plugin-api@1.2.1-next.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-catalog-react@1.2.4-next.1

## 0.2.26-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.5-next.0
  - @kozmoai/catalog-client@1.3.0-next.0
  - @kozmoai/plugin-catalog-react@1.2.4-next.0
  - @kozmoai/core-components@0.12.3-next.0
  - @kozmoai/core-plugin-api@1.2.0
  - @kozmoai/theme@0.2.16

## 0.2.25

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.2
  - @kozmoai/plugin-catalog-react@1.2.3

## 0.2.24

### Patch Changes

- cb716004ef: Internal refactor to improve tests
- 2e701b3796: Internal refactor to use `react-router-dom` rather than `react-router`.
- 454f2e90db: Set the default `maxDepth` prop for `EntityRelationsGraph` to a smaller value to provide better readability.
- Updated dependencies
  - @kozmoai/core-plugin-api@1.2.0
  - @kozmoai/catalog-client@1.2.0
  - @kozmoai/core-components@0.12.1
  - @kozmoai/plugin-catalog-react@1.2.2
  - @kozmoai/catalog-model@1.1.4
  - @kozmoai/theme@0.2.16

## 0.2.24-next.4

### Patch Changes

- 2e701b3796: Internal refactor to use `react-router-dom` rather than `react-router`.
- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.4
  - @kozmoai/plugin-catalog-react@1.2.2-next.4
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/core-plugin-api@1.2.0-next.2
  - @kozmoai/theme@0.2.16

## 0.2.24-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.3
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/core-plugin-api@1.2.0-next.2
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-catalog-react@1.2.2-next.3

## 0.2.24-next.2

### Patch Changes

- 454f2e90db: Set the default `maxDepth` prop for `EntityRelationsGraph` to a smaller value to provide better readability.
- Updated dependencies
  - @kozmoai/core-plugin-api@1.2.0-next.2
  - @kozmoai/core-components@0.12.1-next.2
  - @kozmoai/plugin-catalog-react@1.2.2-next.2
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/theme@0.2.16

## 0.2.24-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.1
  - @kozmoai/core-plugin-api@1.1.1-next.1
  - @kozmoai/plugin-catalog-react@1.2.2-next.1
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/theme@0.2.16

## 0.2.24-next.0

### Patch Changes

- cb716004ef: Internal refactor to improve tests
- Updated dependencies
  - @kozmoai/catalog-client@1.2.0-next.0
  - @kozmoai/core-components@0.12.1-next.0
  - @kozmoai/core-plugin-api@1.1.1-next.0
  - @kozmoai/plugin-catalog-react@1.2.2-next.0
  - @kozmoai/catalog-model@1.1.4-next.0
  - @kozmoai/theme@0.2.16

## 0.2.23

### Patch Changes

- da0bf25d1a: Preserve graph options and increment `maxDepth` by 1.

  The change will preserve options used at the `CatalogGraphCard`
  (displayed at the entity page) and additionally, increments the
  `maxDepth` option by 1 to increase the scope slightly compared to
  the graph already seen by the users.

  The default for `maxDepth` at `CatalogGraphCard` is 1.

- 21d84ef332: feat: Enable theme overrides for components in catalog-graph plugin
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.2.1
  - @kozmoai/core-components@0.12.0
  - @kozmoai/core-plugin-api@1.1.0
  - @kozmoai/catalog-model@1.1.3
  - @kozmoai/catalog-client@1.1.2
  - @kozmoai/theme@0.2.16

## 0.2.23-next.1

### Patch Changes

- da0bf25d1a: Preserve graph options and increment `maxDepth` by 1.

  The change will preserve options used at the `CatalogGraphCard`
  (displayed at the entity page) and additionally, increments the
  `maxDepth` option by 1 to increase the scope slightly compared to
  the graph already seen by the users.

  The default for `maxDepth` at `CatalogGraphCard` is 1.

- Updated dependencies
  - @kozmoai/core-components@0.12.0-next.1
  - @kozmoai/catalog-client@1.1.2-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/core-plugin-api@1.1.0-next.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-catalog-react@1.2.1-next.1

## 0.2.23-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.2.1-next.0
  - @kozmoai/core-components@0.12.0-next.0
  - @kozmoai/core-plugin-api@1.1.0-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/catalog-client@1.1.2-next.0
  - @kozmoai/theme@0.2.16

## 0.2.22

### Patch Changes

- bde1e8c8e2: Added `curve` prop to the `DependencyGraph` component to select the type of layout
- Updated dependencies
  - @kozmoai/catalog-model@1.1.2
  - @kozmoai/plugin-catalog-react@1.2.0
  - @kozmoai/core-components@0.11.2
  - @kozmoai/catalog-client@1.1.1
  - @kozmoai/core-plugin-api@1.0.7
  - @kozmoai/theme@0.2.16

## 0.2.22-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.2.0-next.2
  - @kozmoai/catalog-client@1.1.1-next.2
  - @kozmoai/catalog-model@1.1.2-next.2
  - @kozmoai/core-components@0.11.2-next.2
  - @kozmoai/core-plugin-api@1.0.7-next.2
  - @kozmoai/theme@0.2.16

## 0.2.22-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.2.0-next.1
  - @kozmoai/catalog-client@1.1.1-next.1
  - @kozmoai/core-components@0.11.2-next.1
  - @kozmoai/core-plugin-api@1.0.7-next.1
  - @kozmoai/catalog-model@1.1.2-next.1
  - @kozmoai/theme@0.2.16

## 0.2.22-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.2-next.0
  - @kozmoai/core-components@0.11.2-next.0
  - @kozmoai/catalog-client@1.1.1-next.0
  - @kozmoai/plugin-catalog-react@1.1.5-next.0
  - @kozmoai/core-plugin-api@1.0.7-next.0
  - @kozmoai/theme@0.2.16

## 0.2.21

### Patch Changes

- 817f3196f6: Updated React Router dependencies to be peer dependencies.
- 7d47def9c4: Removed dependency on `@types/jest`.
- Updated dependencies
  - @kozmoai/core-components@0.11.1
  - @kozmoai/core-plugin-api@1.0.6
  - @kozmoai/plugin-catalog-react@1.1.4
  - @kozmoai/catalog-client@1.1.0
  - @kozmoai/catalog-model@1.1.1

## 0.2.21-next.2

### Patch Changes

- 7d47def9c4: Removed dependency on `@types/jest`.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.1.4-next.2
  - @kozmoai/catalog-client@1.1.0-next.2
  - @kozmoai/catalog-model@1.1.1-next.0
  - @kozmoai/core-components@0.11.1-next.3
  - @kozmoai/core-plugin-api@1.0.6-next.3

## 0.2.21-next.1

### Patch Changes

- 817f3196f6: Updated React Router dependencies to be peer dependencies.
- Updated dependencies
  - @kozmoai/core-components@0.11.1-next.1
  - @kozmoai/core-plugin-api@1.0.6-next.1
  - @kozmoai/plugin-catalog-react@1.1.4-next.1

## 0.2.21-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.0.6-next.0
  - @kozmoai/core-components@0.11.1-next.0
  - @kozmoai/catalog-client@1.0.5-next.0
  - @kozmoai/plugin-catalog-react@1.1.4-next.0

## 0.2.20

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.11.0
  - @kozmoai/core-plugin-api@1.0.5
  - @kozmoai/plugin-catalog-react@1.1.3

## 0.2.20-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.1.3-next.2
  - @kozmoai/core-components@0.11.0-next.2

## 0.2.20-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.0.5-next.0
  - @kozmoai/plugin-catalog-react@1.1.3-next.0
  - @kozmoai/core-components@0.10.1-next.0

## 0.2.19

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.10.0
  - @kozmoai/catalog-model@1.1.0
  - @kozmoai/core-plugin-api@1.0.4
  - @kozmoai/catalog-client@1.0.4
  - @kozmoai/plugin-catalog-react@1.1.2
  - @kozmoai/theme@0.2.16

## 0.2.19-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.0.4-next.0
  - @kozmoai/core-components@0.10.0-next.3
  - @kozmoai/catalog-client@1.0.4-next.2
  - @kozmoai/catalog-model@1.1.0-next.3
  - @kozmoai/plugin-catalog-react@1.1.2-next.3

## 0.2.19-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.10.0-next.2
  - @kozmoai/catalog-model@1.1.0-next.2
  - @kozmoai/theme@0.2.16-next.1
  - @kozmoai/plugin-catalog-react@1.1.2-next.2

## 0.2.19-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.9.6-next.1
  - @kozmoai/catalog-model@1.1.0-next.1
  - @kozmoai/theme@0.2.16-next.0
  - @kozmoai/catalog-client@1.0.4-next.1
  - @kozmoai/plugin-catalog-react@1.1.2-next.1

## 0.2.19-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.0-next.0
  - @kozmoai/core-components@0.9.6-next.0
  - @kozmoai/catalog-client@1.0.4-next.0
  - @kozmoai/plugin-catalog-react@1.1.2-next.0

## 0.2.18

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.1.1
  - @kozmoai/core-components@0.9.5
  - @kozmoai/catalog-client@1.0.3
  - @kozmoai/core-plugin-api@1.0.3
  - @kozmoai/catalog-model@1.0.3

## 0.2.18-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.9.5-next.1
  - @kozmoai/catalog-client@1.0.3-next.0
  - @kozmoai/core-plugin-api@1.0.3-next.0
  - @kozmoai/catalog-model@1.0.3-next.0
  - @kozmoai/plugin-catalog-react@1.1.1-next.1

## 0.2.18-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.1.1-next.0
  - @kozmoai/core-components@0.9.5-next.0

## 0.2.17

### Patch Changes

- f2d4136b72: Fix kind filter error in the dev app
- Updated dependencies
  - @kozmoai/core-components@0.9.4
  - @kozmoai/core-plugin-api@1.0.2
  - @kozmoai/plugin-catalog-react@1.1.0
  - @kozmoai/catalog-client@1.0.2
  - @kozmoai/catalog-model@1.0.2

## 0.2.17-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.9.4-next.1
  - @kozmoai/plugin-catalog-react@1.1.0-next.2
  - @kozmoai/catalog-model@1.0.2-next.0
  - @kozmoai/core-plugin-api@1.0.2-next.1
  - @kozmoai/catalog-client@1.0.2-next.0

## 0.2.17-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.9.4-next.0
  - @kozmoai/core-plugin-api@1.0.2-next.0
  - @kozmoai/plugin-catalog-react@1.1.0-next.1

## 0.2.17-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.1.0-next.0

## 0.2.16

### Patch Changes

- 7c7919777e: build(deps-dev): bump `@testing-library/react-hooks` from 7.0.2 to 8.0.0
- 24254fd433: build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- 77800a32dd: Added renderNode and renderLabel property to EntityRelationsGraph to support customization using CustomNode and CustomLabel components
- 99063c39ae: Minor API report cleanup
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.0.1
  - @kozmoai/catalog-model@1.0.1
  - @kozmoai/core-components@0.9.3
  - @kozmoai/core-plugin-api@1.0.1
  - @kozmoai/catalog-client@1.0.1

## 0.2.16-next.3

### Patch Changes

- 24254fd433: build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- Updated dependencies
  - @kozmoai/core-components@0.9.3-next.2
  - @kozmoai/core-plugin-api@1.0.1-next.0
  - @kozmoai/plugin-catalog-react@1.0.1-next.3

## 0.2.16-next.2

### Patch Changes

- 99063c39ae: Minor API report cleanup
- Updated dependencies
  - @kozmoai/core-components@0.9.3-next.1
  - @kozmoai/plugin-catalog-react@1.0.1-next.2
  - @kozmoai/catalog-model@1.0.1-next.1

## 0.2.16-next.1

### Patch Changes

- 77800a32dd: Added renderNode and renderLabel property to EntityRelationsGraph to support customization using CustomNode and CustomLabel components
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.0.1-next.1

## 0.2.16-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.0.1-next.0
  - @kozmoai/plugin-catalog-react@1.0.1-next.0
  - @kozmoai/core-components@0.9.3-next.0
  - @kozmoai/catalog-client@1.0.1-next.0

## 0.2.15

### Patch Changes

- a422d7ce5e: chore(deps): bump `@testing-library/react` from 11.2.6 to 12.1.3
- f24ef7864e: Minor typo fixes
- Updated dependencies
  - @kozmoai/core-components@0.9.2
  - @kozmoai/core-plugin-api@1.0.0
  - @kozmoai/plugin-catalog-react@1.0.0
  - @kozmoai/catalog-model@1.0.0
  - @kozmoai/catalog-client@1.0.0

## 0.2.14

### Patch Changes

- bf95bb806c: Remove usages of now-removed `CatalogApi.getEntityByName`
- Updated dependencies
  - @kozmoai/plugin-catalog-react@0.9.0
  - @kozmoai/core-components@0.9.1
  - @kozmoai/catalog-model@0.13.0
  - @kozmoai/catalog-client@0.9.0

## 0.2.14-next.0

### Patch Changes

- bf95bb806c: Remove usages of now-removed `CatalogApi.getEntityByName`
- Updated dependencies
  - @kozmoai/plugin-catalog-react@0.9.0-next.0
  - @kozmoai/core-components@0.9.1-next.0
  - @kozmoai/catalog-model@0.13.0-next.0
  - @kozmoai/catalog-client@0.9.0-next.0

## 0.2.13

### Patch Changes

- 899f196af5: Use `getEntityByRef` instead of `getEntityByName` in the catalog client
- f41a293231: - **DEPRECATION**: Deprecated `formatEntityRefTitle` in favor of the new `humanizeEntityRef` method instead. Please migrate to using the new method instead.
- 36aa63022b: Use `CompoundEntityRef` instead of `EntityName`, and `getCompoundEntityRef` instead of `getEntityName`, from `@kozmoai/catalog-model`.
- Updated dependencies
  - @kozmoai/catalog-model@0.12.0
  - @kozmoai/catalog-client@0.8.0
  - @kozmoai/core-components@0.9.0
  - @kozmoai/plugin-catalog-react@0.8.0
  - @kozmoai/core-plugin-api@0.8.0

## 0.2.12

### Patch Changes

- a8331830f1: Remove use of deprecated `useEntityKinds` hook.
- 6e1cbc12a6: Updated according to the new `getEntityFacets` catalog API method
- 919cf2f836: Minor updates to match the new `targetRef` field of relations, and to stop consuming the `target` field
- Updated dependencies
  - @kozmoai/core-components@0.8.10
  - @kozmoai/plugin-catalog-react@0.7.0
  - @kozmoai/catalog-model@0.11.0
  - @kozmoai/catalog-client@0.7.2
  - @kozmoai/core-plugin-api@0.7.0

## 0.2.11

### Patch Changes

- c77c5c7eb6: Added `glint.role` to `package.json`
- 538ca90790: Use updated type names from `@kozmoai/catalog-client`
- deaf6065db: Adapt to the new `CatalogApi.getLocationByRef`
- 7aeb491394: Replace use of deprecated `ENTITY_DEFAULT_NAMESPACE` constant with `DEFAULT_NAMESPACE`.
- Updated dependencies
  - @kozmoai/catalog-client@0.7.0
  - @kozmoai/core-components@0.8.9
  - @kozmoai/core-plugin-api@0.6.1
  - @kozmoai/plugin-catalog-react@0.6.15
  - @kozmoai/catalog-model@0.10.0
  - @kozmoai/theme@0.2.15

## 0.2.10

### Patch Changes

- 7bb1bde7f6: Minor API cleanups
- Updated dependencies
  - @kozmoai/catalog-client@0.6.0
  - @kozmoai/core-components@0.8.8
  - @kozmoai/plugin-catalog-react@0.6.14

## 0.2.10-next.0

### Patch Changes

- 7bb1bde7f6: Minor API cleanups
- Updated dependencies
  - @kozmoai/core-components@0.8.8-next.0
  - @kozmoai/plugin-catalog-react@0.6.14-next.0

## 0.2.9

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.8.7
  - @kozmoai/plugin-catalog-react@0.6.13

## 0.2.9-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.8.7-next.0
  - @kozmoai/plugin-catalog-react@0.6.13-next.0

## 0.2.8

### Patch Changes

- a3c4438abf: Deprecated the external `catalogEntity` route as this is now imported directly from `@kozmoai/plugin-catalog-react` instead.

  This means you can remove the route binding from your `App.tsx`:

  ```diff
  -    bind(catalogGraphPlugin.externalRoutes, {
  -      catalogEntity: catalogPlugin.routes.catalogEntity,
  -    });
  ```

- Updated dependencies
  - @kozmoai/core-components@0.8.6

## 0.2.7

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.8.5
  - @kozmoai/core-plugin-api@0.6.0
  - @kozmoai/plugin-catalog-react@0.6.12
  - @kozmoai/catalog-model@0.9.10
  - @kozmoai/catalog-client@0.5.5

## 0.2.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.8.5-next.0
  - @kozmoai/core-plugin-api@0.6.0-next.0
  - @kozmoai/plugin-catalog-react@0.6.12-next.0
  - @kozmoai/catalog-model@0.9.10-next.0
  - @kozmoai/catalog-client@0.5.5-next.0

## 0.2.6

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.8.4
  - @kozmoai/core-plugin-api@0.5.0
  - @kozmoai/plugin-catalog-react@0.6.11
  - @kozmoai/catalog-client@0.5.4
  - @kozmoai/catalog-model@0.9.9

## 0.2.5

### Patch Changes

- 4ce51ab0f1: Internal refactor of the `react-use` imports to use `react-use/lib/*` instead.
- Updated dependencies
  - @kozmoai/core-plugin-api@0.4.1
  - @kozmoai/plugin-catalog-react@0.6.10
  - @kozmoai/core-components@0.8.3

## 0.2.4

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@0.4.0
  - @kozmoai/plugin-catalog-react@0.6.8
  - @kozmoai/core-components@0.8.2
  - @kozmoai/catalog-client@0.5.3

## 0.2.3

### Patch Changes

- cd450844f6: Moved React dependencies to `peerDependencies` and allow both React v16 and v17 to be used.
- Updated dependencies
  - @kozmoai/core-components@0.8.0
  - @kozmoai/core-plugin-api@0.3.0
  - @kozmoai/plugin-catalog-react@0.6.5

## 0.2.2

### Patch Changes

- a125278b81: Refactor out the deprecated path and icon from RouteRefs
- Updated dependencies
  - @kozmoai/catalog-client@0.5.2
  - @kozmoai/catalog-model@0.9.7
  - @kozmoai/plugin-catalog-react@0.6.4
  - @kozmoai/core-components@0.7.4
  - @kozmoai/core-plugin-api@0.2.0

## 0.2.1

### Patch Changes

- ce0aef1841: Capture analytics events for clicks in the graph.
- Updated dependencies
  - @kozmoai/core-components@0.7.1
  - @kozmoai/core-plugin-api@0.1.11
  - @kozmoai/plugin-catalog-react@0.6.1
  - @kozmoai/catalog-model@0.9.5

## 0.2.0

### Minor Changes

- 5c42360577: Add documentation and more type safety around DependencyGraph

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@0.6.0
  - @kozmoai/core-components@0.7.0
  - @kozmoai/theme@0.2.11

## 0.1.3

### Patch Changes

- 81a41ec249: Added a `name` key to all extensions in order to improve Analytics API metadata.
- Updated dependencies
  - @kozmoai/core-components@0.6.1
  - @kozmoai/core-plugin-api@0.1.10
  - @kozmoai/plugin-catalog-react@0.5.2
  - @kozmoai/catalog-model@0.9.4
  - @kozmoai/catalog-client@0.5.0

## 0.1.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@0.1.9
  - @kozmoai/core-components@0.6.0
  - @kozmoai/plugin-catalog-react@0.5.1

## 0.1.1

### Patch Changes

- c0eb1fb9df: Make zooming configurable for `<CatalogGraphCard>` and disable it by default.
  This resolves an issue that scrolling on the entity page is sometimes captured
  by the graph making the page hard to use.
- Updated dependencies
  - @kozmoai/core-components@0.5.0
  - @kozmoai/catalog-client@0.4.0
  - @kozmoai/plugin-catalog-react@0.5.0
  - @kozmoai/catalog-model@0.9.3
