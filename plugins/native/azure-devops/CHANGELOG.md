# @kozmoai/plugin-azure-devops

## 0.4.0-next.1

### Minor Changes

- 3270b1b: Azure DevOps plugin is now integrated with permission framework for its core features, see the https://github.com/kozmoai/glint/blob/master/plugins/azure-devops/README.md#permission-framework for more details.

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.14.1-next.1
  - @kozmoai/plugin-catalog-react@1.10.1-next.1
  - @kozmoai/plugin-azure-devops-common@0.4.0-next.1
  - @kozmoai/core-plugin-api@1.9.1-next.1
  - @kozmoai/plugin-permission-react@0.4.21-next.1
  - @kozmoai/frontend-plugin-api@0.6.1-next.1
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/core-compat-api@0.2.1-next.1
  - @kozmoai/errors@1.2.4-next.0

## 0.4.0-next.0

### Minor Changes

- 9fdb86a: Ability to fetch the README file from a different Azure DevOps path.

  Defaults to the current, Azure DevOps default behaviour (`README.md` in the root of the git repo); to use a different path, add the annotation `dev.azure.com/readme-path`

  Example:

  ```yaml
  dev.azure.com/readme-path: /my-path/README.md
  ```

- a9e7bd6: **BREAKING** The `AzureDevOpsClient` no longer requires `identityAPi` but now requires `fetchApi`.

  Updated to use `fetchApi` as per [ADR013](https://glint.io/docs/architecture-decisions/adrs-adr013)

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/core-components@0.14.1-next.0
  - @kozmoai/plugin-catalog-react@1.10.1-next.0
  - @kozmoai/plugin-azure-devops-common@0.4.0-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/core-plugin-api@1.9.1-next.0
  - @kozmoai/frontend-plugin-api@0.6.1-next.0
  - @kozmoai/core-compat-api@0.2.1-next.0

## 0.3.12

### Patch Changes

- e2083df: Added alpha support for the New Frontend System (Declarative Integration)
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 995d280: Updated imports from named to default imports to help with the Material UI v4 to v5 migration
- cb0afaa: Prefer `dev.azure.com/build-definition` annotation when it is provided, as it is more specific than `dev.azure.com/project-repo`. This can also be used as a filter for mono-repos.
- Updated dependencies
  - @kozmoai/frontend-plugin-api@0.6.0
  - @kozmoai/core-compat-api@0.2.0
  - @kozmoai/plugin-catalog-react@1.10.0
  - @kozmoai/core-components@0.14.0
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/core-plugin-api@1.9.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.2

## 0.3.12-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.14.0-next.2
  - @kozmoai/plugin-catalog-react@1.10.0-next.3
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/core-compat-api@0.2.0-next.3
  - @kozmoai/core-plugin-api@1.9.0-next.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/frontend-plugin-api@0.6.0-next.3
  - @kozmoai/plugin-azure-devops-common@0.3.2

## 0.3.12-next.2

### Patch Changes

- e2083df: Added alpha support for the New Frontend System (Declarative Integration)
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- Updated dependencies
  - @kozmoai/core-components@0.14.0-next.1
  - @kozmoai/core-plugin-api@1.9.0-next.1
  - @kozmoai/frontend-plugin-api@0.6.0-next.2
  - @kozmoai/plugin-catalog-react@1.10.0-next.2
  - @kozmoai/core-compat-api@0.2.0-next.2
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.2

## 0.3.12-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.14.0-next.0
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/core-plugin-api@1.8.3-next.0
  - @kozmoai/plugin-catalog-react@1.9.4-next.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.2

## 0.3.12-next.0

### Patch Changes

- 995d280: Updated imports from named to default imports to help with the Material UI v4 to v5 migration
- cb0afaa: Prefer `dev.azure.com/build-definition` annotation when it is provided, as it is more specific than `dev.azure.com/project-repo`. This can also be used as a filter for mono-repos.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.4-next.0
  - @kozmoai/core-components@0.13.10
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.2
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.2

## 0.3.11

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/core-components@0.13.10
  - @kozmoai/core-plugin-api@1.8.2
  - @kozmoai/plugin-catalog-react@1.9.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.2

## 0.3.11-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.3-next.2

## 0.3.11-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.2-next.0
  - @kozmoai/core-components@0.13.10-next.1
  - @kozmoai/plugin-catalog-react@1.9.3-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.2

## 0.3.11-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/core-components@0.13.10-next.0
  - @kozmoai/plugin-catalog-react@1.9.3-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.2

## 0.3.10

### Patch Changes

- c70e4f5: Added multi-org support
- 7c9af0b: Added support for annotations that use a subpath for the host. Also validated that the annotations have the correct number of slashes.
- 043b724: Introduced new `AzureDevOpsAnnotatorProcessor` that adds the needed annotations automatically. Also, moved constants to common package so they can be shared more easily
- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.1
  - @kozmoai/plugin-catalog-react@1.9.2
  - @kozmoai/core-components@0.13.9
  - @kozmoai/theme@0.5.0
  - @kozmoai/plugin-azure-devops-common@0.3.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3

## 0.3.10-next.3

### Patch Changes

- c70e4f5: Added multi-org support
- 7c9af0b: Added support for annotations that use a subpath for the host. Also validated that the annotations have the correct number of slashes.
- Updated dependencies
  - @kozmoai/plugin-azure-devops-common@0.3.2-next.1
  - @kozmoai/core-components@0.13.9-next.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/theme@0.5.0-next.1
  - @kozmoai/plugin-catalog-react@1.9.2-next.3

## 0.3.10-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.5.0-next.1
  - @kozmoai/plugin-catalog-react@1.9.2-next.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-components@0.13.9-next.2
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.2-next.0

## 0.3.10-next.1

### Patch Changes

- 043b724c56: Introduced new `AzureDevOpsAnnotatorProcessor` that adds the needed annotations automatically. Also, moved constants to common package so they can be shared more easily
- Updated dependencies
  - @kozmoai/core-components@0.13.9-next.1
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/plugin-catalog-react@1.9.2-next.1
  - @kozmoai/plugin-azure-devops-common@0.3.2-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/theme@0.5.0-next.0

## 0.3.10-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.1-next.0
  - @kozmoai/plugin-catalog-react@1.9.2-next.0
  - @kozmoai/core-components@0.13.9-next.0
  - @kozmoai/theme@0.5.0-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.1

## 0.3.8

### Patch Changes

- 6c2b872153: Add official support for React 18.
- ce9e59cbb3: Refactored the error handling for some of the hooks
- 361bb34d8e: Consolidated getting the annotation values into a single function to help with future changes
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.0
  - @kozmoai/core-components@0.13.8
  - @kozmoai/core-plugin-api@1.8.0
  - @kozmoai/theme@0.4.4
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.1

## 0.3.8-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.8-next.2
  - @kozmoai/plugin-catalog-react@1.9.0-next.2

## 0.3.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.9.0-next.1
  - @kozmoai/core-components@0.13.8-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.0-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/theme@0.4.4-next.0
  - @kozmoai/plugin-azure-devops-common@0.3.1

## 0.3.8-next.0

### Patch Changes

- 6c2b872153: Add official support for React 18.
- 361bb34d8e: Consolidated getting the annotation values into a single function to help with future changes
- Updated dependencies
  - @kozmoai/core-components@0.13.7-next.0
  - @kozmoai/plugin-catalog-react@1.9.0-next.0
  - @kozmoai/core-plugin-api@1.8.0-next.0
  - @kozmoai/theme@0.4.4-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-devops-common@0.3.1

## 0.3.7

### Patch Changes

- 9a1fce352e: Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- f95af4e540: Updated dependency `@testing-library/dom` to `^9.0.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.5
  - @kozmoai/core-plugin-api@1.7.0
  - @kozmoai/core-components@0.13.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/theme@0.4.3
  - @kozmoai/plugin-azure-devops-common@0.3.1

## 0.3.7-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.6-next.2
  - @kozmoai/core-plugin-api@1.7.0-next.1
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/plugin-catalog-react@1.8.5-next.2
  - @kozmoai/errors@1.2.3-next.0
  - @kozmoai/theme@0.4.3-next.0
  - @kozmoai/plugin-azure-devops-common@0.3.1

## 0.3.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.6-next.1
  - @kozmoai/plugin-catalog-react@1.8.5-next.1
  - @kozmoai/core-plugin-api@1.7.0-next.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/theme@0.4.2
  - @kozmoai/plugin-azure-devops-common@0.3.1

## 0.3.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.5-next.0
  - @kozmoai/core-plugin-api@1.7.0-next.0
  - @kozmoai/core-components@0.13.6-next.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/theme@0.4.2
  - @kozmoai/plugin-azure-devops-common@0.3.1

## 0.3.6

### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- 8cec7664e146: Removed `@types/node` dependency
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.4
  - @kozmoai/core-components@0.13.5
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/core-plugin-api@1.6.0
  - @kozmoai/errors@1.2.2
  - @kozmoai/plugin-azure-devops-common@0.3.1
  - @kozmoai/theme@0.4.2

## 0.3.6-next.3

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- Updated dependencies
  - @kozmoai/catalog-model@1.4.2-next.2
  - @kozmoai/core-components@0.13.5-next.3
  - @kozmoai/core-plugin-api@1.6.0-next.3
  - @kozmoai/errors@1.2.2-next.0
  - @kozmoai/plugin-azure-devops-common@0.3.1-next.0
  - @kozmoai/plugin-catalog-react@1.8.4-next.3
  - @kozmoai/theme@0.4.2-next.0

## 0.3.6-next.2

### Patch Changes

- 8cec7664e146: Removed `@types/node` dependency
- Updated dependencies
  - @kozmoai/core-components@0.13.5-next.2
  - @kozmoai/core-plugin-api@1.6.0-next.2
  - @kozmoai/plugin-catalog-react@1.8.4-next.2
  - @kozmoai/catalog-model@1.4.2-next.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.3.6-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.4-next.1
  - @kozmoai/core-components@0.13.5-next.1
  - @kozmoai/catalog-model@1.4.2-next.0
  - @kozmoai/core-plugin-api@1.6.0-next.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.3.5-next.0

### Patch Changes

- 482bb5c0bbf8: Moved `@types/react` to be a regular dependency
- Updated dependencies
  - @kozmoai/core-plugin-api@1.6.0-next.0
  - @kozmoai/core-components@0.13.5-next.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-azure-devops-common@0.3.0
  - @kozmoai/plugin-catalog-react@1.8.3-next.0

## 0.3.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.4
  - @kozmoai/plugin-catalog-react@1.8.1
  - @kozmoai/core-plugin-api@1.5.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.3.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.1-next.1

## 0.3.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.4-next.0
  - @kozmoai/core-plugin-api@1.5.3
  - @kozmoai/plugin-catalog-react@1.8.1-next.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/theme@0.4.1
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.3.2

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-catalog-react@1.8.0
  - @kozmoai/core-components@0.13.3
  - @kozmoai/core-plugin-api@1.5.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.3.2-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.8.0-next.2
  - @kozmoai/theme@0.4.1-next.1
  - @kozmoai/core-plugin-api@1.5.3-next.1
  - @kozmoai/core-components@0.13.3-next.2
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/errors@1.2.1-next.0
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.4.1-next.0
  - @kozmoai/core-components@0.13.3-next.1
  - @kozmoai/core-plugin-api@1.5.3-next.0
  - @kozmoai/plugin-catalog-react@1.7.1-next.1

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1-next.0
  - @kozmoai/core-components@0.13.3-next.0
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/core-plugin-api@1.5.2
  - @kozmoai/theme@0.4.0
  - @kozmoai/plugin-azure-devops-common@0.3.0
  - @kozmoai/plugin-catalog-react@1.7.1-next.0

## 0.3.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.5.2
  - @kozmoai/core-components@0.13.2
  - @kozmoai/theme@0.4.0
  - @kozmoai/plugin-catalog-react@1.7.0
  - @kozmoai/catalog-model@1.4.0
  - @kozmoai/errors@1.2.0
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.3.1-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.2-next.3
  - @kozmoai/catalog-model@1.4.0-next.1
  - @kozmoai/core-plugin-api@1.5.2-next.0
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/theme@0.4.0-next.1
  - @kozmoai/plugin-azure-devops-common@0.3.0
  - @kozmoai/plugin-catalog-react@1.7.0-next.3

## 0.3.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.4.0-next.1
  - @kozmoai/plugin-catalog-react@1.7.0-next.2
  - @kozmoai/core-components@0.13.2-next.2
  - @kozmoai/core-plugin-api@1.5.2-next.0

## 0.3.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/core-components@0.13.2-next.1
  - @kozmoai/plugin-catalog-react@1.7.0-next.1
  - @kozmoai/catalog-model@1.4.0-next.0
  - @kozmoai/core-plugin-api@1.5.2-next.0
  - @kozmoai/theme@0.4.0-next.0
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.3.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.7.0-next.0
  - @kozmoai/theme@0.4.0-next.0
  - @kozmoai/core-components@0.13.2-next.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.3.0

### Minor Changes

- 877df261085: The getBuildRuns function now checks contains multiple comma-separated builds and splits them to send multiple requests for each and concatenates the results.

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.3.0
  - @kozmoai/plugin-catalog-react@1.6.0
  - @kozmoai/core-components@0.13.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.3.0-next.2

### Minor Changes

- 877df261085: The getBuildRuns function now checks contains multiple comma-separated builds and splits them to send multiple requests for each and concatenates the results.

### Patch Changes

- Updated dependencies
  - @kozmoai/theme@0.3.0-next.0
  - @kozmoai/core-components@0.13.1-next.1
  - @kozmoai/plugin-catalog-react@1.6.0-next.2
  - @kozmoai/core-plugin-api@1.5.1

## 0.2.9-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.1-next.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/plugin-catalog-react@1.6.0-next.1

## 0.2.9-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.6.0-next.0
  - @kozmoai/core-components@0.13.0
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/theme@0.2.19
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.8

### Patch Changes

- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @kozmoai/core-components@0.13.0
  - @kozmoai/plugin-catalog-react@1.5.0
  - @kozmoai/theme@0.2.19
  - @kozmoai/core-plugin-api@1.5.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.8-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.5.0-next.3
  - @kozmoai/catalog-model@1.3.0-next.0
  - @kozmoai/core-components@0.13.0-next.3
  - @kozmoai/core-plugin-api@1.5.1-next.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/theme@0.2.19-next.0
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.8-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.6-next.2
  - @kozmoai/plugin-catalog-react@1.4.1-next.2
  - @kozmoai/core-plugin-api@1.5.1-next.1
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/theme@0.2.19-next.0
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.8-next.1

### Patch Changes

- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @kozmoai/core-components@0.12.6-next.1
  - @kozmoai/core-plugin-api@1.5.1-next.0
  - @kozmoai/plugin-catalog-react@1.4.1-next.1
  - @kozmoai/theme@0.2.19-next.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.8-next.0

### Patch Changes

- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- Updated dependencies
  - @kozmoai/core-components@0.12.6-next.0
  - @kozmoai/plugin-catalog-react@1.4.1-next.0
  - @kozmoai/core-plugin-api@1.5.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/theme@0.2.18
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.7

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/core-components@0.12.5
  - @kozmoai/plugin-catalog-react@1.4.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/core-plugin-api@1.5.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/theme@0.2.18
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.7-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.5-next.2
  - @kozmoai/plugin-catalog-react@1.4.0-next.2
  - @kozmoai/core-plugin-api@1.5.0-next.2

## 0.2.7-next.1

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/core-components@0.12.5-next.1
  - @kozmoai/errors@1.1.5-next.0
  - @kozmoai/core-plugin-api@1.4.1-next.1
  - @kozmoai/theme@0.2.18-next.0
  - @kozmoai/plugin-catalog-react@1.4.0-next.1
  - @kozmoai/catalog-model@1.2.1-next.1
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.4.0-next.0
  - @kozmoai/core-plugin-api@1.4.1-next.0
  - @kozmoai/catalog-model@1.2.1-next.0
  - @kozmoai/core-components@0.12.5-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/theme@0.2.17
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.6

### Patch Changes

- 347b16ecea: Fixed `AssignedToCurrentUsersTeams` & `CreatedByCurrentUsersTeams` filter in `AzurePullRequestsPage` component.
- Updated dependencies
  - @kozmoai/core-components@0.12.4
  - @kozmoai/catalog-model@1.2.0
  - @kozmoai/theme@0.2.17
  - @kozmoai/core-plugin-api@1.4.0
  - @kozmoai/plugin-catalog-react@1.3.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.2.0-next.1
  - @kozmoai/core-components@0.12.4-next.1
  - @kozmoai/core-plugin-api@1.3.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0
  - @kozmoai/plugin-catalog-react@1.3.0-next.2

## 0.2.6-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.4-next.0
  - @kozmoai/plugin-catalog-react@1.3.0-next.1
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/core-plugin-api@1.3.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.6-next.0

### Patch Changes

- 347b16ecea: Fixed `AssignedToCurrentUsersTeams` & `CreatedByCurrentUsersTeams` filter in `AzurePullRequestsPage` component.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.3.0-next.0
  - @kozmoai/catalog-model@1.1.6-next.0

## 0.2.5

### Patch Changes

- 80ce4e8c29: Small updates to some components to ensure theme typography properties are inherited correctly.
- Updated dependencies
  - @kozmoai/catalog-model@1.1.5
  - @kozmoai/plugin-catalog-react@1.2.4
  - @kozmoai/core-components@0.12.3
  - @kozmoai/core-plugin-api@1.3.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.5-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.3.0-next.1
  - @kozmoai/plugin-catalog-react@1.2.4-next.2
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/core-components@0.12.3-next.2
  - @kozmoai/errors@1.1.4
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.5-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/core-components@0.12.3-next.1
  - @kozmoai/core-plugin-api@1.2.1-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0
  - @kozmoai/plugin-catalog-react@1.2.4-next.1

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.5-next.0
  - @kozmoai/plugin-catalog-react@1.2.4-next.0
  - @kozmoai/core-components@0.12.3-next.0
  - @kozmoai/core-plugin-api@1.2.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.4

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.2
  - @kozmoai/plugin-catalog-react@1.2.3

## 0.2.3

### Patch Changes

- 2e701b3796: Internal refactor to use `react-router-dom` rather than `react-router`.
- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @kozmoai/core-plugin-api@1.2.0
  - @kozmoai/core-components@0.12.1
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-catalog-react@1.2.2
  - @kozmoai/catalog-model@1.1.4
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.3-next.4

### Patch Changes

- 2e701b3796: Internal refactor to use `react-router-dom` rather than `react-router`.
- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.4
  - @kozmoai/plugin-catalog-react@1.2.2-next.4
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/core-plugin-api@1.2.0-next.2
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.3-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.3
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/core-plugin-api@1.2.0-next.2
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0
  - @kozmoai/plugin-catalog-react@1.2.2-next.3

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.2.0-next.2
  - @kozmoai/core-components@0.12.1-next.2
  - @kozmoai/plugin-catalog-react@1.2.2-next.2
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.1
  - @kozmoai/core-plugin-api@1.1.1-next.1
  - @kozmoai/plugin-catalog-react@1.2.2-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.3-next.0

### Patch Changes

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @kozmoai/core-components@0.12.1-next.0
  - @kozmoai/core-plugin-api@1.1.1-next.0
  - @kozmoai/plugin-catalog-react@1.2.2-next.0
  - @kozmoai/catalog-model@1.1.4-next.0
  - @kozmoai/errors@1.1.4-next.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.2.1
  - @kozmoai/core-components@0.12.0
  - @kozmoai/core-plugin-api@1.1.0
  - @kozmoai/catalog-model@1.1.3
  - @kozmoai/errors@1.1.3
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.12.0-next.1
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/core-plugin-api@1.1.0-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0
  - @kozmoai/plugin-catalog-react@1.2.1-next.1

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.2.1-next.0
  - @kozmoai/core-components@0.12.0-next.0
  - @kozmoai/core-plugin-api@1.1.0-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.2
  - @kozmoai/plugin-catalog-react@1.2.0
  - @kozmoai/core-components@0.11.2
  - @kozmoai/core-plugin-api@1.0.7
  - @kozmoai/errors@1.1.2
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.2.0-next.2
  - @kozmoai/catalog-model@1.1.2-next.2
  - @kozmoai/core-components@0.11.2-next.2
  - @kozmoai/core-plugin-api@1.0.7-next.2
  - @kozmoai/errors@1.1.2-next.2
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.2.0-next.1
  - @kozmoai/core-components@0.11.2-next.1
  - @kozmoai/core-plugin-api@1.0.7-next.1
  - @kozmoai/catalog-model@1.1.2-next.1
  - @kozmoai/errors@1.1.2-next.1
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.2-next.0
  - @kozmoai/core-components@0.11.2-next.0
  - @kozmoai/plugin-catalog-react@1.1.5-next.0
  - @kozmoai/core-plugin-api@1.0.7-next.0
  - @kozmoai/errors@1.1.2-next.0
  - @kozmoai/theme@0.2.16
  - @kozmoai/plugin-azure-devops-common@0.3.0

## 0.2.0

### Minor Changes

- 6c1c59b96e: Added README card `EntityAzureReadmeCard` for Azure Devops.

  To get the README component working you'll need to do the following two steps:

  1. First we need to add the @kozmoai/plugin-azure-devops package to your frontend app:

     ```bash
     # From your Glint root directory
     yarn add --cwd packages/app @kozmoai/plugin-azure-devops
     ```

  2. Second we need to add the `EntityAzureReadmeCard` extension to the entity page in your app:

     ```tsx
     // In packages/app/src/components/catalog/EntityPage.tsx
     import {
       EntityAzureReadmeCard,
       isAzureDevOpsAvailable,
     } from '@kozmoai/plugin-azure-devops';

     // As it is a card, you can customize it the way you prefer
     // For example in the Service section

     const overviewContent = (
       <Grid container spacing={3} alignItems="stretch">
         <EntitySwitch>
           <EntitySwitch.Case if={isAzureDevOpsAvailable}>
             <Grid item md={6}>
               ...
             </Grid>
             <Grid item md={6}>
               <EntityAzureReadmeCard maxHeight={350} />
             </Grid>
           </EntitySwitch.Case>
         </EntitySwitch>
       </Grid>
     );
     ```

  **Notes:**

  - You'll need to add the `EntitySwitch.Case` above from step 2 to all the entity sections you want to see Readme in. For example if you wanted to see Readme when looking at Website entities then you would need to add this to the `websiteEntityPage` section.
  - The `if` prop is optional on the `EntitySwitch.Case`, you can remove it if you always want to see the tab even if the entity being viewed does not have the needed annotation
  - The `maxHeight` property on the `EntityAzureReadmeCard` will set the maximum screen size you would like to see, if not set it will default to 100%

### Patch Changes

- 817f3196f6: Updated React Router dependencies to be peer dependencies.
- 3f739be9d9: Minor API signatures cleanup
- 7d47def9c4: Removed dependency on `@types/jest`.
- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- Updated dependencies
  - @kozmoai/core-components@0.11.1
  - @kozmoai/core-plugin-api@1.0.6
  - @kozmoai/plugin-catalog-react@1.1.4
  - @kozmoai/plugin-azure-devops-common@0.3.0
  - @kozmoai/catalog-model@1.1.1
  - @kozmoai/errors@1.1.1

## 0.2.0-next.3

### Patch Changes

- 7d47def9c4: Removed dependency on `@types/jest`.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.1.4-next.2
  - @kozmoai/catalog-model@1.1.1-next.0
  - @kozmoai/core-components@0.11.1-next.3
  - @kozmoai/core-plugin-api@1.0.6-next.3
  - @kozmoai/errors@1.1.1-next.0

## 0.2.0-next.2

### Patch Changes

- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- Updated dependencies
  - @kozmoai/core-components@0.11.1-next.2
  - @kozmoai/core-plugin-api@1.0.6-next.2

## 0.2.0-next.1

### Patch Changes

- 817f3196f6: Updated React Router dependencies to be peer dependencies.
- Updated dependencies
  - @kozmoai/core-components@0.11.1-next.1
  - @kozmoai/core-plugin-api@1.0.6-next.1
  - @kozmoai/plugin-catalog-react@1.1.4-next.1

## 0.2.0-next.0

### Minor Changes

- 6c1c59b96e: Added README card `EntityAzureReadmeCard` for Azure Devops.

  To get the README component working you'll need to do the following two steps:

  1. First we need to add the @kozmoai/plugin-azure-devops package to your frontend app:

     ```bash
     # From your Glint root directory
     yarn add --cwd packages/app @kozmoai/plugin-azure-devops
     ```

  2. Second we need to add the `EntityAzureReadmeCard` extension to the entity page in your app:

     ```tsx
     // In packages/app/src/components/catalog/EntityPage.tsx
     import {
       EntityAzureReadmeCard,
       isAzureDevOpsAvailable,
     } from '@kozmoai/plugin-azure-devops';

     // As it is a card, you can customize it the way you prefer
     // For example in the Service section

     const overviewContent = (
       <Grid container spacing={3} alignItems="stretch">
         <EntitySwitch>
           <EntitySwitch.Case if={isAzureDevOpsAvailable}>
             <Grid item md={6}>
               ...
             </Grid>
             <Grid item md={6}>
               <EntityAzureReadmeCard maxHeight={350} />
             </Grid>
           </EntitySwitch.Case>
         </EntitySwitch>
       </Grid>
     );
     ```

  **Notes:**

  - You'll need to add the `EntitySwitch.Case` above from step 2 to all the entity sections you want to see Readme in. For example if you wanted to see Readme when looking at Website entities then you would need to add this to the `websiteEntityPage` section.
  - The `if` prop is optional on the `EntitySwitch.Case`, you can remove it if you always want to see the tab even if the entity being viewed does not have the needed annotation
  - The `maxHeight` property on the `EntityAzureReadmeCard` will set the maximum screen size you would like to see, if not set it will default to 100%

### Patch Changes

- 3f739be9d9: Minor API signatures cleanup
- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- Updated dependencies
  - @kozmoai/plugin-azure-devops-common@0.3.0-next.0
  - @kozmoai/core-plugin-api@1.0.6-next.0
  - @kozmoai/core-components@0.11.1-next.0
  - @kozmoai/plugin-catalog-react@1.1.4-next.0

## 0.1.24

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.11.0
  - @kozmoai/core-plugin-api@1.0.5
  - @kozmoai/plugin-catalog-react@1.1.3

## 0.1.24-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.1.3-next.2
  - @kozmoai/core-components@0.11.0-next.2

## 0.1.24-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@1.0.5-next.0
  - @kozmoai/plugin-catalog-react@1.1.3-next.0
  - @kozmoai/core-components@0.10.1-next.0

## 0.1.23

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- 4e9a90e307: Updated dependency `luxon` to `^3.0.0`.
- 8006d0f9bf: Updated dependency `msw` to `^0.44.0`.
- e049e41048: Exporting azureDevOpsApiRef, AzureGitTagsIcon, and all hooks for the benefit of other plugins.
- Updated dependencies
  - @kozmoai/core-components@0.10.0
  - @kozmoai/catalog-model@1.1.0
  - @kozmoai/core-plugin-api@1.0.4
  - @kozmoai/plugin-catalog-react@1.1.2
  - @kozmoai/theme@0.2.16
  - @kozmoai/errors@1.1.0
  - @kozmoai/plugin-azure-devops-common@0.2.4

## 0.1.23-next.3

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- 4e9a90e307: Updated dependency `luxon` to `^3.0.0`.
- Updated dependencies
  - @kozmoai/core-plugin-api@1.0.4-next.0
  - @kozmoai/core-components@0.10.0-next.3
  - @kozmoai/catalog-model@1.1.0-next.3
  - @kozmoai/plugin-catalog-react@1.1.2-next.3
  - @kozmoai/plugin-azure-devops-common@0.2.4-next.0

## 0.1.23-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.10.0-next.2
  - @kozmoai/catalog-model@1.1.0-next.2
  - @kozmoai/theme@0.2.16-next.1
  - @kozmoai/plugin-catalog-react@1.1.2-next.2

## 0.1.23-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.9.6-next.1
  - @kozmoai/catalog-model@1.1.0-next.1
  - @kozmoai/errors@1.1.0-next.0
  - @kozmoai/theme@0.2.16-next.0
  - @kozmoai/plugin-catalog-react@1.1.2-next.1

## 0.1.23-next.0

### Patch Changes

- e049e41048: Exporting azureDevOpsApiRef, AzureGitTagsIcon, and all hooks for the benefit of other plugins.
- Updated dependencies
  - @kozmoai/catalog-model@1.1.0-next.0
  - @kozmoai/core-components@0.9.6-next.0
  - @kozmoai/plugin-catalog-react@1.1.2-next.0

## 0.1.22

### Patch Changes

- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.1.1
  - @kozmoai/core-components@0.9.5
  - @kozmoai/core-plugin-api@1.0.3
  - @kozmoai/catalog-model@1.0.3

## 0.1.22-next.1

### Patch Changes

- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @kozmoai/core-components@0.9.5-next.1
  - @kozmoai/core-plugin-api@1.0.3-next.0
  - @kozmoai/catalog-model@1.0.3-next.0
  - @kozmoai/plugin-catalog-react@1.1.1-next.1

## 0.1.22-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.1.1-next.0
  - @kozmoai/core-components@0.9.5-next.0

## 0.1.21

### Patch Changes

- ac14fcaf38: Added entity view for Azure Git Tags, based on existing Pull Requests view
- Updated dependencies
  - @kozmoai/core-components@0.9.4
  - @kozmoai/core-plugin-api@1.0.2
  - @kozmoai/plugin-catalog-react@1.1.0
  - @kozmoai/plugin-azure-devops-common@0.2.3
  - @kozmoai/catalog-model@1.0.2

## 0.1.21-next.2

### Patch Changes

- ac14fcaf38: Added entity view for Azure Git Tags, based on existing Pull Requests view
- Updated dependencies
  - @kozmoai/core-components@0.9.4-next.1
  - @kozmoai/plugin-azure-devops-common@0.2.3-next.0
  - @kozmoai/plugin-catalog-react@1.1.0-next.2
  - @kozmoai/catalog-model@1.0.2-next.0
  - @kozmoai/core-plugin-api@1.0.2-next.1

## 0.1.21-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.9.4-next.0
  - @kozmoai/core-plugin-api@1.0.2-next.0
  - @kozmoai/plugin-catalog-react@1.1.0-next.1

## 0.1.21-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.1.0-next.0

## 0.1.20

### Patch Changes

- 24254fd433: build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- 230ad0826f: Bump to using `@types/node` v16
- Updated dependencies
  - @kozmoai/plugin-catalog-react@1.0.1
  - @kozmoai/catalog-model@1.0.1
  - @kozmoai/core-components@0.9.3
  - @kozmoai/core-plugin-api@1.0.1

## 0.1.20-next.1

### Patch Changes

- 24254fd433: build(deps): bump `@testing-library/user-event` from 13.5.0 to 14.0.0
- 230ad0826f: Bump to using `@types/node` v16
- Updated dependencies
  - @kozmoai/core-components@0.9.3-next.2
  - @kozmoai/core-plugin-api@1.0.1-next.0
  - @kozmoai/plugin-catalog-react@1.0.1-next.3

## 0.1.20-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.0.1-next.0
  - @kozmoai/plugin-catalog-react@1.0.1-next.0
  - @kozmoai/core-components@0.9.3-next.0

## 0.1.19

### Patch Changes

- a422d7ce5e: chore(deps): bump `@testing-library/react` from 11.2.6 to 12.1.3
- 4e6327ef7a: Updated readme
- Updated dependencies
  - @kozmoai/core-components@0.9.2
  - @kozmoai/core-plugin-api@1.0.0
  - @kozmoai/plugin-catalog-react@1.0.0
  - @kozmoai/catalog-model@1.0.0
  - @kozmoai/errors@1.0.0

## 0.1.18

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@0.9.0
  - @kozmoai/core-components@0.9.1
  - @kozmoai/catalog-model@0.13.0

## 0.1.18-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@0.9.0-next.0
  - @kozmoai/core-components@0.9.1-next.0
  - @kozmoai/catalog-model@0.13.0-next.0

## 0.1.17

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@0.12.0
  - @kozmoai/core-components@0.9.0
  - @kozmoai/plugin-catalog-react@0.8.0
  - @kozmoai/core-plugin-api@0.8.0

## 0.1.16

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.8.10
  - @kozmoai/plugin-catalog-react@0.7.0
  - @kozmoai/catalog-model@0.11.0
  - @kozmoai/core-plugin-api@0.7.0

## 0.1.15

### Patch Changes

- 1ed305728b: Bump `node-fetch` to version 2.6.7 and `cross-fetch` to version 3.1.5
- c77c5c7eb6: Added `glint.role` to `package.json`
- Updated dependencies
  - @kozmoai/core-components@0.8.9
  - @kozmoai/core-plugin-api@0.6.1
  - @kozmoai/errors@0.2.1
  - @kozmoai/plugin-catalog-react@0.6.15
  - @kozmoai/catalog-model@0.10.0
  - @kozmoai/theme@0.2.15
  - @kozmoai/plugin-azure-devops-common@0.2.1

## 0.1.14

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.8.8
  - @kozmoai/plugin-catalog-react@0.6.14

## 0.1.14-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.8.8-next.0
  - @kozmoai/plugin-catalog-react@0.6.14-next.0

## 0.1.13

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.8.7
  - @kozmoai/plugin-catalog-react@0.6.13

## 0.1.13-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.8.7-next.0
  - @kozmoai/plugin-catalog-react@0.6.13-next.0

## 0.1.12

### Patch Changes

- 0f104ecc4d: Updated to support cases where only Azure Pipelines to see Builds. You can use this new feature by adding the `dev.azure.com/project` and `dev.azure.com/build-definition` annotations to your `catalog-info.yaml` files. The Azure DevOps plugin [README has more detailed instructions](https://github.com/kozmoai/glint/tree/master/plugins/azure-devops#setup).
- Updated dependencies
  - @kozmoai/core-components@0.8.6

## 0.1.11

### Patch Changes

- 51fbedc445: Migrated usage of deprecated `IdentityApi` methods.
- Updated dependencies
  - @kozmoai/core-components@0.8.5
  - @kozmoai/core-plugin-api@0.6.0
  - @kozmoai/plugin-catalog-react@0.6.12
  - @kozmoai/catalog-model@0.9.10

## 0.1.11-next.0

### Patch Changes

- 51fbedc445: Migrated usage of deprecated `IdentityApi` methods.
- Updated dependencies
  - @kozmoai/core-components@0.8.5-next.0
  - @kozmoai/core-plugin-api@0.6.0-next.0
  - @kozmoai/plugin-catalog-react@0.6.12-next.0
  - @kozmoai/catalog-model@0.9.10-next.0

## 0.1.10

### Patch Changes

- a2ed2c2d69: - feat: Created PullRequestsDashboardProvider for resolving team and team member relations
  - feat: Created useUserTeamIds hook.
  - feat: Updated useFilterProcessor to provide teamIds for `AssignedToCurrentUsersTeams` and `CreatedByCurrentUsersTeams` filters.
- 5333451def: Cleaned up API exports
- Updated dependencies
  - @kozmoai/core-components@0.8.4
  - @kozmoai/core-plugin-api@0.5.0
  - @kozmoai/plugin-azure-devops-common@0.2.0
  - @kozmoai/plugin-catalog-react@0.6.11
  - @kozmoai/errors@0.2.0
  - @kozmoai/catalog-model@0.9.9

## 0.1.9

### Patch Changes

- 4ce51ab0f1: Internal refactor of the `react-use` imports to use `react-use/lib/*` instead.
- Updated dependencies
  - @kozmoai/core-plugin-api@0.4.1
  - @kozmoai/plugin-catalog-react@0.6.10
  - @kozmoai/core-components@0.8.3

## 0.1.8

### Patch Changes

- Updated dependencies
  - @kozmoai/core-plugin-api@0.4.0
  - @kozmoai/plugin-catalog-react@0.6.8
  - @kozmoai/core-components@0.8.2

## 0.1.7

### Patch Changes

- daf32e2c9b: Created some initial filters that can be used to create pull request columns:

  - All
  - AssignedToUser
  - AssignedToCurrentUser
  - AssignedToTeam
  - AssignedToTeams
  - AssignedToCurrentUsersTeams
  - CreatedByUser
  - CreatedByCurrentUser
  - CreatedByTeam
  - CreatedByTeams
  - CreatedByCurrentUsersTeams

  Example custom column creation:

  ```tsx
  const COLUMN_CONFIGS: PullRequestColumnConfig[] = [
    {
      title: 'Created by me',
      filters: [{ type: FilterType.CreatedByCurrentUser }],
    },
    {
      title: 'Created by Glint Core',
      filters: [
        {
          type: FilterType.CreatedByTeam,
          teamName: 'Glint Core',
        },
      ],
    },
    {
      title: 'Assigned to my teams',
      filters: [{ type: FilterType.AssignedToCurrentUsersTeams }],
    },
    {
      title: 'Other PRs',
      filters: [{ type: FilterType.All }],
      simplified: true,
    },
  ];

  <Route
    path="/azure-pull-requests"
    element={
      <AzurePullRequestsPage
        projectName="{PROJECT_NAME}"
        defaultColumnConfigs={COLUMN_CONFIGS}
      />
    }
  />;
  ```

- Updated dependencies
  - @kozmoai/core-plugin-api@0.3.1
  - @kozmoai/core-components@0.8.1
  - @kozmoai/plugin-azure-devops-common@0.1.3
  - @kozmoai/catalog-model@0.9.8
  - @kozmoai/plugin-catalog-react@0.6.7

## 0.1.6

### Patch Changes

- cd450844f6: Moved React dependencies to `peerDependencies` and allow both React v16 and v17 to be used.
- Updated dependencies
  - @kozmoai/core-components@0.8.0
  - @kozmoai/core-plugin-api@0.3.0
  - @kozmoai/plugin-catalog-react@0.6.5
  - @kozmoai/plugin-azure-devops-common@0.1.2

## 0.1.5

### Patch Changes

- 0749dd0307: feat: Created pull request card component and initial pull request dashboard page.
- 82cd709fdb: **Backend**

  - Created new `/dashboard-pull-requests/:projectName` endpoint
  - Created new `/all-teams` endpoint
  - Implemented pull request policy evaluation conversion

  **Frontend**

  - Refactored `PullRequestsPage` and added new properties for `projectName` and `pollingInterval`
  - Fixed spacing issue between repo link and creation date in `PullRequestCard`
  - Added missing condition to `PullRequestCardPolicy` for `RequiredReviewers`
  - Updated `useDashboardPullRequests` hook to implement long polling for pull requests

- Updated dependencies
  - @kozmoai/plugin-azure-devops-common@0.1.1
  - @kozmoai/core-components@0.7.6
  - @kozmoai/theme@0.2.14
  - @kozmoai/core-plugin-api@0.2.2

## 0.1.4

### Patch Changes

- a125278b81: Refactor out the deprecated path and icon from RouteRefs
- b5eac957f2: Added entity view for Azure Repo Pull Requests
- 2b5ccd2964: Improved Date handling for the Azure DevOps set of plugins by using strings and letting the frontend handle the conversion to DateTime
- Updated dependencies
  - @kozmoai/catalog-model@0.9.7
  - @kozmoai/plugin-catalog-react@0.6.4
  - @kozmoai/core-components@0.7.4
  - @kozmoai/core-plugin-api@0.2.0
  - @kozmoai/plugin-azure-devops-common@0.1.0

## 0.1.3

### Patch Changes

- b85acc8c35: refactor(`@kozmoai/plugin-azure-devops`): Consume types from `@kozmoai/plugin-azure-devops-common`.
  Stop re-exporting types from `@kozmoai/plugin-azure-devops-backend`.
  Added new types to `@kozmoai/plugin-azure-devops-common`.
- 84ace9a29c: Simplified queue time calculation in `BuildTable`.
- Updated dependencies
  - @kozmoai/core-components@0.7.3
  - @kozmoai/theme@0.2.13
  - @kozmoai/plugin-azure-devops-common@0.0.2
  - @kozmoai/core-plugin-api@0.1.13
  - @kozmoai/plugin-catalog-react@0.6.3

## 0.1.2

### Patch Changes

- 7359623e87: Azure DevOps frontend refactoring items from issue #7641

  - Remove backend setup documentation and linked to the Azure DevOps backend plugin for these instructions
  - Improved documentation to be easier to expand with new features in the future
  - Removed Router based on feedback from maintainers
  - Added tests for `getBuildResultComponent` and `getBuildStateComponent` from the BuildTable

- Updated dependencies
  - @kozmoai/theme@0.2.12
  - @kozmoai/errors@0.1.4
  - @kozmoai/core-components@0.7.2
  - @kozmoai/plugin-catalog-react@0.6.2
  - @kozmoai/catalog-model@0.9.6
  - @kozmoai/core-plugin-api@0.1.12

## 0.1.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-react@0.6.0
  - @kozmoai/core-components@0.7.0
  - @kozmoai/theme@0.2.11
