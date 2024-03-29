# @kozmoai/plugin-scaffolder-backend-module-gitlab

## 0.2.17-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/plugin-scaffolder-node@0.4.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/integration@1.9.1-next.1
  - @kozmoai/errors@1.2.4-next.0

## 0.2.16-next.0

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

## 0.2.13

### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 1cd2740: Use the Gitbeaker library for `gitlab:projectAccessToken:create` action, enabling the `expiresAt` option
- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/integration@1.9.0
  - @kozmoai/plugin-scaffolder-node@0.3.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.13-next.3

### Patch Changes

- 1cd2740: Use the Gitbeaker library for `gitlab:projectAccessToken:create` action, enabling the `expiresAt` option
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/integration@1.9.0-next.1
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.13-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.9.0-next.0

## 0.2.13-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.13-next.0

### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0

## 0.2.12

### Patch Changes

- 604c9dd: Add Scaffolder custom action that creates GitLab issues called `gitlab:issues:create`
- 7c522c5: Add `gitlab:repo:push` scaffolder action to push files to arbitrary branch without creating a Merge Request
- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/plugin-scaffolder-node@0.2.10
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0

## 0.2.12-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.2
  - @kozmoai/plugin-scaffolder-node@0.2.10-next.2

## 0.2.12-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-scaffolder-node@0.2.10-next.1
  - @kozmoai/errors@1.2.3

## 0.2.12-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0
  - @kozmoai/plugin-scaffolder-node@0.2.10-next.0

## 0.2.11

### Patch Changes

- 219d7f0: Extract some more actions to this library
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/plugin-scaffolder-node@0.2.9
  - @kozmoai/integration@1.8.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.11-next.3

### Patch Changes

- 219d7f0: Extract some more actions to this library
- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.2.9-next.3
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0-next.1

## 0.2.11-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/plugin-scaffolder-node@0.2.9-next.2

## 0.2.11-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-scaffolder-node@0.2.9-next.1

## 0.2.11-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.8.0-next.0
  - @kozmoai/plugin-scaffolder-node@0.2.9-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.10

### Patch Changes

- 26ca97ebaa: Add examples for `gitlab:projectAccessToken:create` scaffolder action & improve related tests
- Updated dependencies
  - @kozmoai/integration@1.7.2
  - @kozmoai/plugin-scaffolder-node@0.2.8
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.10-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.2.8-next.2

## 0.2.10-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.7.2-next.0
  - @kozmoai/plugin-scaffolder-node@0.2.8-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.10-next.0

### Patch Changes

- 26ca97ebaa: Add examples for `gitlab:projectAccessToken:create` scaffolder action & improve related tests
- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.2.8-next.0
  - @kozmoai/integration@1.7.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.9

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.7.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-scaffolder-node@0.2.6
  - @kozmoai/config@1.1.1

## 0.2.9-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.7.1-next.1
  - @kozmoai/errors@1.2.3-next.0
  - @kozmoai/plugin-scaffolder-node@0.2.6-next.2
  - @kozmoai/config@1.1.1-next.0

## 0.2.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.2.5-next.1
  - @kozmoai/config@1.1.0
  - @kozmoai/errors@1.2.2
  - @kozmoai/integration@1.7.1-next.0

## 0.2.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.7.1-next.0
  - @kozmoai/plugin-scaffolder-node@0.2.5-next.0
  - @kozmoai/config@1.1.0
  - @kozmoai/errors@1.2.2

## 0.2.6

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0
  - @kozmoai/errors@1.2.2
  - @kozmoai/integration@1.7.0
  - @kozmoai/plugin-scaffolder-node@0.2.3

## 0.2.6-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.2
  - @kozmoai/errors@1.2.2-next.0
  - @kozmoai/integration@1.7.0-next.3
  - @kozmoai/plugin-scaffolder-node@0.2.3-next.3

## 0.2.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.1
  - @kozmoai/integration@1.7.0-next.2
  - @kozmoai/plugin-scaffolder-node@0.2.3-next.2
  - @kozmoai/errors@1.2.1

## 0.2.6-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.0
  - @kozmoai/integration@1.7.0-next.1
  - @kozmoai/plugin-scaffolder-node@0.2.3-next.1
  - @kozmoai/errors@1.2.1

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.7.0-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-scaffolder-node@0.2.2-next.0

## 0.2.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.2.0
  - @kozmoai/integration@1.6.0
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.1.6-next.2

## 0.2.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.1.6-next.1
  - @kozmoai/integration@1.5.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/integration@1.5.1
  - @kozmoai/plugin-scaffolder-node@0.1.6-next.0

## 0.2.2

### Patch Changes

- dd367967e2e1: Fixed a bug in `gitlab:group:ensureExists` where `repos` was always set as the root group.
- Updated dependencies
  - @kozmoai/errors@1.2.1
  - @kozmoai/config@1.0.8
  - @kozmoai/integration@1.5.1
  - @kozmoai/plugin-scaffolder-node@0.1.5

## 0.2.2-next.1

### Patch Changes

- dd367967e2e1: Fixed a bug in `gitlab:group:ensureExists` where `repos` was always set as the root group.
- Updated dependencies
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1-next.0
  - @kozmoai/integration@1.5.1-next.0
  - @kozmoai/plugin-scaffolder-node@0.1.5-next.0

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/integration@1.5.1-next.0
  - @kozmoai/plugin-scaffolder-node@0.1.5-next.0

## 0.2.1

### Patch Changes

- 50c4457119ec: Fixed publish configuration.
- 30e6edd7f6a5: Add support for dry run for `gitlab:group:ensureExists` action.
- f5a66052f04f: Tweak README
- Updated dependencies
  - @kozmoai/integration@1.5.0
  - @kozmoai/errors@1.2.0
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-scaffolder-node@0.1.4

## 0.2.1-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/integration@1.5.0-next.0
  - @kozmoai/plugin-scaffolder-node@0.1.4-next.2

## 0.2.1-next.2

### Patch Changes

- 30e6edd7f6a5: Add support for dry run for `gitlab:group:ensureExists` action.
- Updated dependencies
  - @kozmoai/config@1.0.7

## 0.2.1-next.1

### Patch Changes

- 50c4457119ec: Fixed publish configuration.
- Updated dependencies
  - @kozmoai/integration@1.5.0-next.0
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/plugin-scaffolder-node@0.1.4-next.1
  - @kozmoai/config@1.0.7

## 0.2.1-next.0

### Patch Changes

- f5a66052f04f: Tweak README
- Updated dependencies
  - @kozmoai/integration@1.4.5
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-scaffolder-node@0.1.4-next.0

## 0.2.0

### Minor Changes

- 439e2986be1: Add a new scaffolder action for gitlab to ensure a group exists

### Patch Changes

- f1496d4ab6f: Fix input schema validation issue for gitlab actions:

  - gitlab:group:ensureExists
  - gitlab:projectAccessToken:create
  - gitlab:projectDeployToken:create
  - gitlab:projectVariable:create

- Updated dependencies
  - @kozmoai/integration@1.4.5
  - @kozmoai/plugin-scaffolder-node@0.1.3
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5

## 0.2.0-next.2

### Minor Changes

- 439e2986be1: Add a new scaffolder action for gitlab to ensure a group exists

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.1.3-next.2
  - @kozmoai/config@1.0.7

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.1.3-next.1
  - @kozmoai/config@1.0.7

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.4.5-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-scaffolder-node@0.1.3-next.0

## 0.1.0

### Minor Changes

- 1ad400bb2de: Add Gitlab Scaffolder Plugin

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.1.2
  - @kozmoai/integration@1.4.4
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5

## 0.1.0-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/plugin-scaffolder-node@0.1.2-next.3

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.1.2-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/integration@1.4.4-next.0

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.1.2-next.1
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5

## 0.1.0-next.0

### Minor Changes

- 1ad400bb2de: Add Gitlab Scaffolder Plugin

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.1.2-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/integration@1.4.3
  - @kozmoai/errors@1.1.5
