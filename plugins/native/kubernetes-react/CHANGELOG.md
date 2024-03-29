# @kozmoai/plugin-kubernetes-react

## 0.3.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.14.1-next.1
  - @kozmoai/core-plugin-api@1.9.1-next.1
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.5-next.1

## 0.3.1-next.0

### Patch Changes

- 4642cb7: Add support to fetch data for Daemon Sets and display an accordion in the same way as with Deployments
- Updated dependencies
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/core-components@0.14.1-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.5-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/core-plugin-api@1.9.1-next.0
  - @kozmoai/types@1.1.1

## 0.3.0

### Minor Changes

- 0dfc185: **BREAKING** The `PodScope`, `PodAndErrors`, and `PodExecTerminalProps` types no
  longer have a `clusterName` field; instead they now have the field `cluster`
  which contains the full `ClusterAttributes`.
- 0d526c8: **BREAKING** The pod exec terminal is now disabled by default since there are several scenarios where it is known not to work. It can be re-enabled at your own risk by setting the config parameter `kubernetes.podExecTerminal.enabled` to `true`.

### Patch Changes

- 5bf0c17: Pod dialogs display cluster title when specified.
- 74770c8: The `ErrorPanel` component will display the `title` field (when specified) for
  clusters with errors.
- 536f67d: Fix broken XtermJS CSS import
- b01c86c: The `ErrorReporting` component's cluster column now displays cluster titles when
  specified.
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 8472188: Added or fixed the `repository` field in `package.json`.
- 2b305eb: The `Cluster` component now renders the cluster's title, if specified.
- 3c184af: Extracted common dialog component.
- db1054b: Fixed a bug where the logs dialog and any other functionality depending on the proxy endpoint would fail for clusters configured with the OIDC auth provider.
- Updated dependencies
  - @kozmoai/core-components@0.14.0
  - @kozmoai/plugin-kubernetes-common@0.7.4
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/core-plugin-api@1.9.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.3.0-next.3

### Minor Changes

- 0dfc185: **BREAKING** The `PodScope`, `PodAndErrors`, and `PodExecTerminalProps` types no
  longer have a `clusterName` field; instead they now have the field `cluster`
  which contains the full `ClusterAttributes`.

### Patch Changes

- 5bf0c17: Pod dialogs display cluster title when specified.
- 74770c8: The `ErrorPanel` component will display the `title` field (when specified) for
  clusters with errors.
- b01c86c: The `ErrorReporting` component's cluster column now displays cluster titles when
  specified.
- 8472188: Added or fixed the `repository` field in `package.json`.
- 2b305eb: The `Cluster` component now renders the cluster's title, if specified.
- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.2
  - @kozmoai/core-components@0.14.0-next.2
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/core-plugin-api@1.9.0-next.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.3.0-next.2

### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- Updated dependencies
  - @kozmoai/core-components@0.14.0-next.1
  - @kozmoai/core-plugin-api@1.9.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.1

## 0.3.0-next.1

### Patch Changes

- 3c184af: Extracted common dialog component.
- Updated dependencies
  - @kozmoai/core-components@0.14.0-next.0
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/core-plugin-api@1.8.3-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.1

## 0.3.0-next.0

### Minor Changes

- 0d526c8: **BREAKING** The pod exec terminal is now disabled by default since there are several scenarios where it is known not to work. It can be re-enabled at your own risk by setting the config parameter `kubernetes.podExecTerminal.enabled` to `true`.

### Patch Changes

- 536f67d: Fix broken XtermJS CSS import
- db1054b: Fixed a bug where the logs dialog and any other functionality depending on the proxy endpoint would fail for clusters configured with the OIDC auth provider.
- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.0
  - @kozmoai/core-components@0.13.10
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.2
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.2.1

### Patch Changes

- d5d2c67: Add `authuser` search parameter to GKE cluster link formatter in k8s plugin

  Thanks to this, people with multiple simultaneously logged-in accounts in their GCP console will automatically view objects with the same email as the one signed in to the Google auth provider in Glint.

- Updated dependencies
  - @kozmoai/core-components@0.13.10
  - @kozmoai/core-plugin-api@1.8.2
  - @kozmoai/plugin-kubernetes-common@0.7.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.2.1-next.1

### Patch Changes

- d5d2c67: Add `authuser` search parameter to GKE cluster link formatter in k8s plugin

  Thanks to this, people with multiple simultaneously logged-in accounts in their GCP console will automatically view objects with the same email as the one signed in to the Google auth provider in Glint.

- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.2-next.0
  - @kozmoai/core-components@0.13.10-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.3-next.0

## 0.2.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.10-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.3-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.2.0

### Minor Changes

- 899d71a: Change `formatClusterLink` to be an API and make it async for further customization possibilities.

  **BREAKING**
  If you have a custom k8s page and used `formatClusterLink` directly, you need to migrate to new `kubernetesClusterLinkFormatterApiRef`

### Patch Changes

- b5ae2e5: Add ID property to the table displaying kubernetes pods to avoid closing the info sidebar when the data reloads and needs to rerender.
- 706fc3a: Updated dependency `@kubernetes/client-node` to `0.20.0`.
- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.1
  - @kozmoai/core-components@0.13.9
  - @kozmoai/plugin-kubernetes-common@0.7.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.2.0-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.9-next.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.1

## 0.2.0-next.2

### Minor Changes

- 899d71a: Change `formatClusterLink` to be an API and make it async for further customization possibilities.

  **BREAKING**
  If you have a custom k8s page and used `formatClusterLink` directly, you need to migrate to new `kubernetesClusterLinkFormatterApiRef`

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-components@0.13.9-next.2
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.1

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.9-next.1
  - @kozmoai/core-plugin-api@1.8.1-next.1
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.1.2-next.0

### Patch Changes

- b5ae2e5a62: Add ID property to the table displaying kubernetes pods to avoid closing the info sidebar when the data reloads and needs to rerender.
- 706fc3a7e1: Updated dependency `@kubernetes/client-node` to `0.20.0`.
- Updated dependencies
  - @kozmoai/core-plugin-api@1.8.1-next.0
  - @kozmoai/core-components@0.13.9-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.1.1

### Patch Changes

- 0f4cad6da0: Internal refactor to avoid a null pointer problem
- 6c2b872153: Add official support for React 18.
- b52f576f48: Make sure types exported by other `kubernetes` plugins in the past are exported again after the creation
  of the react package.

  Some types have been moved to this new package but the export was missing, so they were not available anymore for developers.

- Updated dependencies
  - @kozmoai/core-components@0.13.8
  - @kozmoai/plugin-kubernetes-common@0.7.1
  - @kozmoai/core-plugin-api@1.8.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.1-next.1
  - @kozmoai/core-components@0.13.8-next.2

## 0.1.1-next.1

### Patch Changes

- 0f4cad6da0: Internal refactor to avoid a null pointer problem
- b52f576f48: Make sure types exported by other `kubernetes` plugins in the past are exported again after the creation
  of the react package.

  Some types have been moved to this new package but the export was missing, so they were not available anymore for developers.

- Updated dependencies
  - @kozmoai/core-components@0.13.8-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/core-plugin-api@1.8.0-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.1-next.0

## 0.1.1-next.0

### Patch Changes

- 6c2b872153: Add official support for React 18.
- Updated dependencies
  - @kozmoai/core-components@0.13.7-next.0
  - @kozmoai/core-plugin-api@1.8.0-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.1-next.0

## 0.1.0

### Minor Changes

- 2d8151061c: Refactor Kubernetes plugins in line with ADR 11, no breaking changes yet

### Patch Changes

- 4262e12921: Handle mixed decimals and bigint when calculating k8s resource usage
- 9a1fce352e: Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- 95518765ee: Add Kubernetes cluster plugin. Viewing Kubernetes clusters as an Admin from Glint
- 5dac12e435: The kubernetes APIs invokes Authentication Strategies when Glint-Kubernetes-Authorization-X-X headers are provided, this enable the possibility to invoke strategies that executes additional steps to get a kubernetes token like on pinniped or custom strategies
- Updated dependencies
  - @kozmoai/core-plugin-api@1.7.0
  - @kozmoai/core-components@0.13.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-kubernetes-common@0.7.0
  - @kozmoai/types@1.1.1

## 0.1.0-next.1

### Patch Changes

- 95518765ee: Add Kubernetes cluster plugin. Viewing Kubernetes clusters as an Admin from Glint
- 5dac12e435: The kubernetes APIs invokes Authentication Strategies when Glint-Kubernetes-Authorization-X-X headers are provided, this enable the possibility to invoke strategies that executes additional steps to get a kubernetes token like on pinniped or custom strategies
- Updated dependencies
  - @kozmoai/core-components@0.13.6-next.2
  - @kozmoai/core-plugin-api@1.7.0-next.1
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/errors@1.2.3-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.0-next.1
  - @kozmoai/types@1.1.1

## 0.1.0-next.0

### Minor Changes

- 2d8151061c: Refactor Kubernetes plugins in line with ADR 11, no breaking changes yet

### Patch Changes

- Updated dependencies
  - @kozmoai/core-components@0.13.6-next.1
  - @kozmoai/plugin-kubernetes-common@0.7.0-next.0
  - @kozmoai/core-plugin-api@1.7.0-next.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/types@1.1.1
