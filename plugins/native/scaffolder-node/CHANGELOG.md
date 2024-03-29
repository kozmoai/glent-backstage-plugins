# @kozmoai/plugin-scaffolder-node

## 0.4.0-next.1

### Minor Changes

- aa543c9: Update task context type to contain the new auth initiator credentials.

### Patch Changes

- bbd1fe1: Made "checkpoint" on scaffolder action context non-optional
- Updated dependencies
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/integration@1.9.1-next.1
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.5.1-next.1

## 0.3.3-next.0

### Patch Changes

- 85f4723: Fixed file corruption for non UTF-8 data in fetch contents
- c6b132e: Introducing checkpoints for scaffolder task action idempotency
- Updated dependencies
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/integration@1.9.1-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.5.1-next.0

## 0.3.0

### Minor Changes

- 3a9ba42: Added functions to clone a repo, create a branch, add files and push and commit to the branch. This allows for files to be added to the a PR for use in the bitbucket pull request action for issue #21762
- 11b9a08: Introduced the first version of recoverable tasks.
- 78c100b: Support providing an overriding token for `fetch:template`, `fetch:plain` and `fetch:file` when interacting with upstream integrations

### Patch Changes

- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- 9b0bf20: Add gitea as new type to be used from integrations configuration
- e0e5afe: Add option to configure nunjucks with the `trimBlocks` and `lstripBlocks` options in the fetch:template action
- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/integration@1.9.0
  - @kozmoai/plugin-scaffolder-common@1.5.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.3.0-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/integration@1.9.0-next.1
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.5.0-next.1

## 0.3.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.5.0-next.1

## 0.3.0-next.1

### Minor Changes

- 78c100b: Support providing an overriding token for `fetch:template`, `fetch:plain` and `fetch:file` when interacting with upstream integrations

### Patch Changes

- e0e5afe: Add option to configure nunjucks with the `trimBlocks` and `lstripBlocks` options in the fetch:template action
- Updated dependencies
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.5.0-next.1

## 0.3.0-next.0

### Minor Changes

- 3a9ba42: Added functions to clone a repo, create a branch, add files and push and commit to the branch. This allows for files to be added to the a PR for use in the bitbucket pull request action for issue #21762
- 11b9a08: Introduced the first version of recoverable tasks.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/plugin-scaffolder-common@1.5.0-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0
  - @kozmoai/types@1.1.1

## 0.2.10

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/plugin-scaffolder-common@1.4.5
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0
  - @kozmoai/types@1.1.1

## 0.2.10-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.2
  - @kozmoai/backend-common@0.20.1-next.2

## 0.2.10-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/backend-plugin-api@0.6.9-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.4

## 0.2.10-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/backend-plugin-api@0.6.9-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.4

## 0.2.9

### Patch Changes

- 219d7f0: Refactor some methods to `-node` instead and use the new external modules
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/integration@1.8.0
  - @kozmoai/backend-plugin-api@0.6.8
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.4

## 0.2.9-next.3

### Patch Changes

- 219d7f0: Refactor some methods to `-node` instead and use the new external modules
- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/backend-plugin-api@0.6.8-next.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.3

## 0.2.9-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.2
  - @kozmoai/backend-plugin-api@0.6.8-next.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.3

## 0.2.9-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/backend-common@0.20.0-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.3

## 0.2.9-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.0
  - @kozmoai/integration@1.8.0-next.0
  - @kozmoai/backend-plugin-api@0.6.8-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.3

## 0.2.8

### Patch Changes

- 8613ba3928: Switched to using `"exports"` field for `/alpha` subpath export.
- Updated dependencies
  - @kozmoai/plugin-scaffolder-common@1.4.3
  - @kozmoai/integration@1.7.2
  - @kozmoai/backend-common@0.19.9
  - @kozmoai/backend-plugin-api@0.6.7
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.2.8-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.2
  - @kozmoai/backend-common@0.19.9-next.2

## 0.2.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.7.2-next.0
  - @kozmoai/plugin-scaffolder-common@1.4.3-next.1
  - @kozmoai/backend-common@0.19.9-next.1
  - @kozmoai/backend-plugin-api@0.6.7-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.2.8-next.0

### Patch Changes

- 8613ba3928: Switched to using `"exports"` field for `/alpha` subpath export.
- Updated dependencies
  - @kozmoai/plugin-scaffolder-common@1.4.3-next.0
  - @kozmoai/backend-common@0.19.9-next.0
  - @kozmoai/integration@1.7.1
  - @kozmoai/backend-plugin-api@0.6.7-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1

## 0.2.6

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8
  - @kozmoai/integration@1.7.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/backend-plugin-api@0.6.6
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.2

## 0.2.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8-next.2
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/integration@1.7.1-next.1
  - @kozmoai/errors@1.2.3-next.0
  - @kozmoai/backend-plugin-api@0.6.6-next.2
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.2-next.0

## 0.2.5-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.7-next.1
  - @kozmoai/backend-plugin-api@0.6.5-next.1
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/integration@1.7.1-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.1

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.7.1-next.0
  - @kozmoai/backend-common@0.19.7-next.0
  - @kozmoai/backend-plugin-api@0.6.5-next.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-scaffolder-common@1.4.1

## 0.2.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.5
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/integration@1.7.0
  - @kozmoai/plugin-scaffolder-common@1.4.1
  - @kozmoai/types@1.1.1
  - @kozmoai/backend-plugin-api@0.6.3

## 0.2.3-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.2-next.2
  - @kozmoai/errors@1.2.2-next.0
  - @kozmoai/integration@1.7.0-next.3
  - @kozmoai/plugin-scaffolder-common@1.4.1-next.2
  - @kozmoai/types@1.1.1-next.0
  - @kozmoai/backend-plugin-api@0.6.3-next.3
  - @kozmoai/backend-common@0.19.5-next.3

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.5-next.2
  - @kozmoai/integration@1.7.0-next.2
  - @kozmoai/backend-plugin-api@0.6.3-next.2
  - @kozmoai/catalog-model@1.4.2-next.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-scaffolder-common@1.4.1-next.1

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.7.0-next.1
  - @kozmoai/backend-common@0.19.5-next.1
  - @kozmoai/backend-plugin-api@0.6.3-next.1
  - @kozmoai/catalog-model@1.4.2-next.0
  - @kozmoai/plugin-scaffolder-common@1.4.1-next.0
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.4-next.0
  - @kozmoai/integration@1.7.0-next.0
  - @kozmoai/backend-plugin-api@0.6.2-next.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-scaffolder-common@1.4.0

## 0.2.0

### Minor Changes

- e514aac3eac0: Introduce `each` property on action steps, allowing them to be ran repeatedly.

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- e07a4914f621: Added several new types that were moved from `@kozmoai/plugin-scaffolder-backend`.
- 349611126ae2: Added two new alpha extension points, `scaffolderTaskBrokerExtensionPoint` and `scaffolderTemplatingExtensionPoint`.
- 0b1d775be05b: Export `TemplateExample` from the `createTemplateAction` type.
- d3b31a791eb1: Deprecated `executeShellCommand`, `RunCommandOptions`, and `fetchContents` from `@kozmoai/plugin-scaffolder-backend`, since they are useful for Scaffolder modules (who should not be importing from the plugin package itself). You should now import these from `@kozmoai/plugin-scaffolder-backend-node` instead. `RunCommandOptions` was renamed in the Node package as `ExecuteShellCommandOptions`, for consistency.
- Updated dependencies
  - @kozmoai/backend-common@0.19.2
  - @kozmoai/backend-plugin-api@0.6.0
  - @kozmoai/integration@1.6.0
  - @kozmoai/plugin-scaffolder-common@1.4.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0

## 0.1.6-next.2

### Patch Changes

- 0b1d775be05b: Export `TemplateExample` from the `createTemplateAction` type.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.0-next.2
  - @kozmoai/backend-common@0.19.2-next.2

## 0.1.6-next.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- d3b31a791eb1: Deprecated `executeShellCommand`, `RunCommandOptions`, and `fetchContents` from `@kozmoai/plugin-scaffolder-backend`, since they are useful for Scaffolder modules (who should not be importing from the plugin package itself). You should now import these from `@kozmoai/plugin-scaffolder-backend-node` instead. `RunCommandOptions` was renamed in the Node package as `ExecuteShellCommandOptions`, for consistency.
- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.1
  - @kozmoai/backend-plugin-api@0.6.0-next.1
  - @kozmoai/integration@1.5.1
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-scaffolder-common@1.3.2

## 0.1.6-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.5-next.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-scaffolder-common@1.3.2

## 0.1.5

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.4
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-scaffolder-common@1.3.2

## 0.1.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.4-next.0
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-scaffolder-common@1.3.2-next.0

## 0.1.4

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.1.0
  - @kozmoai/catalog-model@1.4.0
  - @kozmoai/backend-plugin-api@0.5.3
  - @kozmoai/plugin-scaffolder-common@1.3.1

## 0.1.4-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.0-next.1
  - @kozmoai/backend-plugin-api@0.5.3-next.2
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.3.1-next.1

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.3-next.1
  - @kozmoai/catalog-model@1.4.0-next.0
  - @kozmoai/plugin-scaffolder-common@1.3.1-next.0
  - @kozmoai/types@1.0.2

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.3-next.0
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.3.0

## 0.1.3

### Patch Changes

- 6d954de4b06: Update typing for `RouterOptions::actions` and `ScaffolderActionsExtensionPoint::addActions` to allow any kind of action being assigned to it.
- Updated dependencies
  - @kozmoai/plugin-scaffolder-common@1.3.0
  - @kozmoai/backend-plugin-api@0.5.2
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/types@1.0.2

## 0.1.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-common@1.3.0-next.0

## 0.1.3-next.1

### Patch Changes

- 6d954de4b06: Update typing for `RouterOptions::actions` and `ScaffolderActionsExtensionPoint::addActions` to allow any kind of action being assigned to it.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.2-next.1

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.2-next.0
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.2.7

## 0.1.2

### Patch Changes

- e27ddc36dad: Added a possibility to cancel the running task (executing of a scaffolder template)
- a7eb36c6e38: Improve type-check for scaffolder output parameters
- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- 2898b6c8d52: Minor type tweaks for TypeScript 5.0
- Updated dependencies
  - @kozmoai/plugin-scaffolder-common@1.2.7
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/backend-plugin-api@0.5.1
  - @kozmoai/types@1.0.2

## 0.1.2-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.3.0-next.0
  - @kozmoai/backend-plugin-api@0.5.1-next.2
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.2.7-next.2

## 0.1.2-next.2

### Patch Changes

- 2898b6c8d52: Minor type tweaks for TypeScript 5.0
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.1-next.2
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.2.7-next.1

## 0.1.2-next.1

### Patch Changes

- a7eb36c6e38: Improve type-check for scaffolder output parameters
- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- Updated dependencies
  - @kozmoai/plugin-scaffolder-common@1.2.7-next.1
  - @kozmoai/backend-plugin-api@0.5.1-next.1
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/types@1.0.2

## 0.1.2-next.0

### Patch Changes

- e27ddc36dad: Added a possibility to cancel the running task (executing of a scaffolder template)
- Updated dependencies
  - @kozmoai/plugin-scaffolder-common@1.2.7-next.0
  - @kozmoai/backend-plugin-api@0.5.1-next.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/types@1.0.2

## 0.1.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.5.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.2.6

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.4.1-next.2

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.4.1-next.1
  - @kozmoai/catalog-model@1.2.1-next.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.2.6-next.1

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.4.1-next.0
  - @kozmoai/catalog-model@1.2.1-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.2.6-next.0

## 0.1.0

### Minor Changes

- d72866f0cc: New package that takes over some of the types and functionality from `@kozmoai/plugin-scaffolder-backend` that are shared with other modules

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.4.0
  - @kozmoai/catalog-model@1.2.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.2.5

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.4.0-next.2
  - @kozmoai/catalog-model@1.2.0-next.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.2.5-next.1

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.3.2-next.1
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-scaffolder-common@1.2.5-next.0

## 0.1.0-next.0

### Minor Changes

- d72866f0cc: New package that takes over some of the types and functionality from `@kozmoai/plugin-scaffolder-backend` that are shared with other modules

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/plugin-scaffolder-common@1.2.5-next.0
  - @kozmoai/backend-plugin-api@0.3.2-next.0
