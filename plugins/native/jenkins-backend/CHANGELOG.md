# @kozmoai/plugin-jenkins-backend

## 0.4.0-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/plugin-auth-node@0.4.9-next.1
  - @kozmoai/plugin-permission-common@0.7.13-next.1
  - @kozmoai/plugin-permission-node@0.7.25-next.1
  - @kozmoai/catalog-client@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/plugin-catalog-node@1.8.0-next.1
  - @kozmoai/plugin-jenkins-common@0.1.25-next.1

## 0.4.0-next.0

### Minor Changes

- 55191cc: **BREAKING**: Both `createRouter` and `DefaultJenkinsInfoProvider.fromConfig` now require the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.

  The `JenkinsInfoProvider` interface has been updated to receive `credentials` of the type `GlintCredentials` rather than a token.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/plugin-auth-node@0.4.8-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/plugin-permission-common@0.7.13-next.0
  - @kozmoai/plugin-catalog-node@1.8.0-next.0
  - @kozmoai/plugin-permission-node@0.7.24-next.0
  - @kozmoai/catalog-client@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/config@1.1.2-next.0
  - @kozmoai/plugin-jenkins-common@0.1.25-next.0

## 0.3.4

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/plugin-auth-node@0.4.4
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/catalog-client@1.6.0
  - @kozmoai/plugin-catalog-node@1.7.0
  - @kozmoai/plugin-permission-node@0.7.21
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-jenkins-common@0.1.24
  - @kozmoai/plugin-permission-common@0.7.12

## 0.3.4-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/plugin-catalog-node@1.6.2-next.3
  - @kozmoai/plugin-auth-node@0.4.4-next.3
  - @kozmoai/plugin-permission-node@0.7.21-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-jenkins-common@0.1.24-next.0
  - @kozmoai/plugin-permission-common@0.7.12

## 0.3.4-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-auth-node@0.4.4-next.2
  - @kozmoai/plugin-permission-node@0.7.21-next.2
  - @kozmoai/plugin-catalog-node@1.6.2-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-jenkins-common@0.1.24-next.0
  - @kozmoai/plugin-permission-common@0.7.12

## 0.3.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.4-next.1
  - @kozmoai/plugin-catalog-node@1.6.2-next.1
  - @kozmoai/plugin-jenkins-common@0.1.24-next.0
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-node@0.7.21-next.1

## 0.3.4-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/catalog-client@1.6.0-next.0
  - @kozmoai/plugin-auth-node@0.4.4-next.0
  - @kozmoai/plugin-catalog-node@1.6.2-next.0
  - @kozmoai/plugin-permission-node@0.7.21-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-jenkins-common@0.1.23
  - @kozmoai/plugin-permission-common@0.7.12

## 0.3.3

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/catalog-client@1.5.2
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/plugin-catalog-node@1.6.1
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-node@0.7.20
  - @kozmoai/plugin-auth-node@0.4.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-jenkins-common@0.1.23

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.2
  - @kozmoai/backend-common@0.20.1-next.2
  - @kozmoai/plugin-auth-node@0.4.3-next.2
  - @kozmoai/plugin-catalog-node@1.6.1-next.2
  - @kozmoai/plugin-permission-node@0.7.20-next.2

## 0.3.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-auth-node@0.4.3-next.1
  - @kozmoai/plugin-permission-node@0.7.20-next.1
  - @kozmoai/backend-plugin-api@0.6.9-next.1
  - @kozmoai/catalog-client@1.5.2-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-catalog-node@1.6.1-next.1
  - @kozmoai/plugin-jenkins-common@0.1.22
  - @kozmoai/plugin-permission-common@0.7.11

## 0.3.3-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/catalog-client@1.5.2-next.0
  - @kozmoai/plugin-catalog-node@1.6.1-next.0
  - @kozmoai/backend-plugin-api@0.6.9-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.3-next.0
  - @kozmoai/plugin-jenkins-common@0.1.22
  - @kozmoai/plugin-permission-common@0.7.11
  - @kozmoai/plugin-permission-node@0.7.20-next.0

## 0.3.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/plugin-catalog-node@1.6.0
  - @kozmoai/catalog-client@1.5.0
  - @kozmoai/plugin-auth-node@0.4.2
  - @kozmoai/plugin-permission-common@0.7.11
  - @kozmoai/plugin-permission-node@0.7.19
  - @kozmoai/backend-plugin-api@0.6.8
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-jenkins-common@0.1.22

## 0.3.2-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/backend-plugin-api@0.6.8-next.3
  - @kozmoai/catalog-client@1.5.0-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.2-next.3
  - @kozmoai/plugin-catalog-node@1.6.0-next.3
  - @kozmoai/plugin-jenkins-common@0.1.21
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.3

## 0.3.2-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.6.0-next.2
  - @kozmoai/backend-common@0.20.0-next.2
  - @kozmoai/plugin-auth-node@0.4.2-next.2
  - @kozmoai/catalog-client@1.5.0-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-jenkins-common@0.1.21
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.2

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.5.0-next.0
  - @kozmoai/backend-common@0.20.0-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.2-next.1
  - @kozmoai/plugin-catalog-node@1.5.1-next.1
  - @kozmoai/plugin-jenkins-common@0.1.21
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.1

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.0
  - @kozmoai/plugin-auth-node@0.4.2-next.0
  - @kozmoai/plugin-catalog-node@1.5.1-next.0
  - @kozmoai/plugin-permission-node@0.7.19-next.0
  - @kozmoai/backend-plugin-api@0.6.8-next.0
  - @kozmoai/catalog-client@1.4.6
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-jenkins-common@0.1.21
  - @kozmoai/plugin-permission-common@0.7.10

## 0.3.1

### Patch Changes

- 4bfb878807: Updated dependency `@types/jenkins` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.5.0
  - @kozmoai/backend-common@0.19.9
  - @kozmoai/backend-plugin-api@0.6.7
  - @kozmoai/catalog-client@1.4.6
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.1
  - @kozmoai/plugin-jenkins-common@0.1.21
  - @kozmoai/plugin-permission-node@0.7.18

## 0.3.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.2
  - @kozmoai/backend-common@0.19.9-next.2
  - @kozmoai/plugin-auth-node@0.4.1-next.2
  - @kozmoai/plugin-catalog-node@1.5.0-next.2
  - @kozmoai/plugin-permission-node@0.7.18-next.2

## 0.3.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.5.0-next.1
  - @kozmoai/backend-common@0.19.9-next.1
  - @kozmoai/plugin-auth-node@0.4.1-next.1
  - @kozmoai/plugin-permission-node@0.7.18-next.1
  - @kozmoai/backend-plugin-api@0.6.7-next.1
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-jenkins-common@0.1.20
  - @kozmoai/plugin-permission-common@0.7.9

## 0.3.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.0
  - @kozmoai/backend-plugin-api@0.6.7-next.0
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.1-next.0
  - @kozmoai/plugin-catalog-node@1.4.8-next.0
  - @kozmoai/plugin-jenkins-common@0.1.20
  - @kozmoai/plugin-permission-common@0.7.9
  - @kozmoai/plugin-permission-node@0.7.18-next.0

## 0.3.0

### Minor Changes

- 411896faf9: Added JobRunTable Component.
  Added new Route and extended Api to get buildJobs.
  Actions column has a new icon button, clicking on which takes us to page where we
  can see all the job runs.

### Patch Changes

- 930ac236d8: Added support for the [new backend system](https://glint.io/docs/backend-system/)
- Updated dependencies
  - @kozmoai/backend-common@0.19.8
  - @kozmoai/plugin-catalog-node@1.4.7
  - @kozmoai/plugin-auth-node@0.4.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/backend-plugin-api@0.6.6
  - @kozmoai/plugin-permission-node@0.7.17
  - @kozmoai/catalog-client@1.4.5
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-jenkins-common@0.1.20
  - @kozmoai/plugin-permission-common@0.7.9

## 0.2.9-next.2

### Patch Changes

- 930ac236d8: Added support for the [new backend system](https://glint.io/docs/backend-system/)
- Updated dependencies
  - @kozmoai/backend-common@0.19.8-next.2
  - @kozmoai/plugin-auth-node@0.4.0-next.2
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/errors@1.2.3-next.0
  - @kozmoai/plugin-catalog-node@1.4.7-next.2
  - @kozmoai/plugin-permission-node@0.7.17-next.2
  - @kozmoai/backend-plugin-api@0.6.6-next.2
  - @kozmoai/catalog-client@1.4.5-next.0
  - @kozmoai/config@1.1.1-next.0
  - @kozmoai/plugin-jenkins-common@0.1.20-next.0
  - @kozmoai/plugin-permission-common@0.7.9-next.0

## 0.2.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.7-next.1
  - @kozmoai/plugin-auth-node@0.3.2-next.1
  - @kozmoai/plugin-permission-node@0.7.16-next.1
  - @kozmoai/config@1.1.0
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/plugin-jenkins-common@0.1.19
  - @kozmoai/plugin-permission-common@0.7.8

## 0.2.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.3.2-next.0
  - @kozmoai/backend-common@0.19.7-next.0
  - @kozmoai/config@1.1.0
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/plugin-jenkins-common@0.1.19
  - @kozmoai/plugin-permission-common@0.7.8
  - @kozmoai/plugin-permission-node@0.7.16-next.0

## 0.2.6

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.5
  - @kozmoai/plugin-auth-node@0.3.0
  - @kozmoai/config@1.1.0
  - @kozmoai/catalog-client@1.4.4
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/plugin-jenkins-common@0.1.19
  - @kozmoai/plugin-permission-common@0.7.8
  - @kozmoai/plugin-permission-node@0.7.14

## 0.2.6-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.4-next.2
  - @kozmoai/catalog-model@1.4.2-next.2
  - @kozmoai/config@1.1.0-next.2
  - @kozmoai/errors@1.2.2-next.0
  - @kozmoai/plugin-jenkins-common@0.1.19-next.2
  - @kozmoai/plugin-permission-common@0.7.8-next.2
  - @kozmoai/plugin-permission-node@0.7.14-next.3
  - @kozmoai/backend-common@0.19.5-next.3
  - @kozmoai/plugin-auth-node@0.3.0-next.3

## 0.2.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.1
  - @kozmoai/backend-common@0.19.5-next.2
  - @kozmoai/plugin-auth-node@0.3.0-next.2
  - @kozmoai/plugin-permission-node@0.7.14-next.2
  - @kozmoai/catalog-model@1.4.2-next.1
  - @kozmoai/plugin-permission-common@0.7.8-next.1
  - @kozmoai/catalog-client@1.4.4-next.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-jenkins-common@0.1.19-next.1

## 0.2.6-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.0
  - @kozmoai/backend-common@0.19.5-next.1
  - @kozmoai/catalog-model@1.4.2-next.0
  - @kozmoai/plugin-auth-node@0.3.0-next.1
  - @kozmoai/plugin-permission-common@0.7.8-next.0
  - @kozmoai/plugin-permission-node@0.7.14-next.1
  - @kozmoai/catalog-client@1.4.4-next.0
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-jenkins-common@0.1.19-next.0

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.3.0-next.0
  - @kozmoai/backend-common@0.19.4-next.0
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-jenkins-common@0.1.18
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-permission-node@0.7.13-next.0

## 0.2.3

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- 4b82382ed8c2: Fixed invalid configuration schema. The configuration schema may be more strict as a result.
- Updated dependencies
  - @kozmoai/backend-common@0.19.2
  - @kozmoai/plugin-jenkins-common@0.1.18
  - @kozmoai/plugin-auth-node@0.2.17
  - @kozmoai/plugin-permission-node@0.7.11
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-permission-common@0.7.7

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.2
  - @kozmoai/plugin-permission-node@0.7.11-next.2
  - @kozmoai/plugin-auth-node@0.2.17-next.2

## 0.2.3-next.1

### Patch Changes

- 12a8c94eda8d: Add package repository and homepage metadata
- 4b82382ed8c2: Fixed invalid configuration schema. The configuration schema may be more strict as a result.
- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.1
  - @kozmoai/plugin-jenkins-common@0.1.18-next.0
  - @kozmoai/plugin-auth-node@0.2.17-next.1
  - @kozmoai/plugin-permission-node@0.7.11-next.1
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-permission-common@0.7.7

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.0
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-auth-node@0.2.17-next.0
  - @kozmoai/plugin-jenkins-common@0.1.17
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-permission-node@0.7.11-next.0

## 0.2.2

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1
  - @kozmoai/backend-common@0.19.1
  - @kozmoai/catalog-client@1.4.3
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-auth-node@0.2.16
  - @kozmoai/plugin-jenkins-common@0.1.17
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-permission-node@0.7.10

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1-next.0
  - @kozmoai/backend-common@0.19.1-next.0
  - @kozmoai/catalog-client@1.4.3-next.0
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-auth-node@0.2.16-next.0
  - @kozmoai/plugin-jenkins-common@0.1.17-next.0
  - @kozmoai/plugin-permission-common@0.7.7-next.0
  - @kozmoai/plugin-permission-node@0.7.10-next.0

## 0.2.1

### Patch Changes

- 0f93b6707e04: Don't expose username and authentication header if configured.
- 6c244b42cb06: Expose permissions through the metadata endpoint.
- Updated dependencies
  - @kozmoai/backend-common@0.19.0
  - @kozmoai/catalog-client@1.4.2
  - @kozmoai/plugin-jenkins-common@0.1.16
  - @kozmoai/catalog-model@1.4.0
  - @kozmoai/errors@1.2.0
  - @kozmoai/plugin-auth-node@0.2.15
  - @kozmoai/plugin-permission-node@0.7.9
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-permission-common@0.7.6

## 0.2.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.2
  - @kozmoai/catalog-model@1.4.0-next.1
  - @kozmoai/catalog-client@1.4.2-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/plugin-auth-node@0.2.15-next.2
  - @kozmoai/plugin-jenkins-common@0.1.16-next.2
  - @kozmoai/plugin-permission-common@0.7.6-next.0
  - @kozmoai/plugin-permission-node@0.7.9-next.2

## 0.2.1-next.1

### Patch Changes

- 0f93b6707e04: Don't expose username and authentication header if configured.
- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.1
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/catalog-model@1.4.0-next.0
  - @kozmoai/plugin-auth-node@0.2.15-next.1
  - @kozmoai/plugin-permission-node@0.7.9-next.1
  - @kozmoai/catalog-client@1.4.2-next.1
  - @kozmoai/plugin-permission-common@0.7.6-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-jenkins-common@0.1.16-next.1

## 0.2.1-next.0

### Patch Changes

- 6c244b42cb06: Expose permissions through the metadata endpoint.
- Updated dependencies
  - @kozmoai/catalog-client@1.4.2-next.0
  - @kozmoai/plugin-jenkins-common@0.1.16-next.0
  - @kozmoai/backend-common@0.18.6-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-auth-node@0.2.15-next.0
  - @kozmoai/plugin-permission-common@0.7.5
  - @kozmoai/plugin-permission-node@0.7.9-next.0

## 0.2.0

### Minor Changes

- cf95c5137c9: Updated rebuild to use Jenkins API replay build, which works for Jenkins jobs that have required parameters. Jenkins SDK could not be used for this request because it does not have support for replay.

  Added link to view build in Jenkins CI/CD table action column.

### Patch Changes

- 670a2dd6f4e: Fix handling of slashes in branch names
- Updated dependencies
  - @kozmoai/backend-common@0.18.5
  - @kozmoai/plugin-auth-node@0.2.14
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-jenkins-common@0.1.15
  - @kozmoai/plugin-permission-common@0.7.5

## 0.1.35-next.1

### Patch Changes

- 670a2dd6f4e: Fix handling of slashes in branch names
- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.1
  - @kozmoai/plugin-auth-node@0.2.14-next.1
  - @kozmoai/config@1.0.7

## 0.1.35-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.0
  - @kozmoai/plugin-auth-node@0.2.14-next.0
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-jenkins-common@0.1.15
  - @kozmoai/plugin-permission-common@0.7.5

## 0.1.34

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4
  - @kozmoai/catalog-client@1.4.1
  - @kozmoai/plugin-permission-common@0.7.5
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/plugin-auth-node@0.2.13
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-jenkins-common@0.1.15

## 0.1.34-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.3.0-next.0
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/catalog-client@1.4.1-next.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-auth-node@0.2.13-next.2
  - @kozmoai/plugin-jenkins-common@0.1.15-next.1
  - @kozmoai/plugin-permission-common@0.7.5-next.0

## 0.1.34-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/catalog-client@1.4.1-next.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-auth-node@0.2.13-next.2
  - @kozmoai/plugin-jenkins-common@0.1.15-next.0
  - @kozmoai/plugin-permission-common@0.7.5-next.0

## 0.1.34-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-permission-common@0.7.5-next.0
  - @kozmoai/backend-common@0.18.4-next.1
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-auth-node@0.2.13-next.1
  - @kozmoai/plugin-jenkins-common@0.1.15-next.0

## 0.1.34-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-auth-node@0.2.13-next.0
  - @kozmoai/plugin-jenkins-common@0.1.14
  - @kozmoai/plugin-permission-common@0.7.4

## 0.1.33

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/catalog-client@1.4.0
  - @kozmoai/plugin-auth-node@0.2.12
  - @kozmoai/backend-common@0.18.3
  - @kozmoai/errors@1.1.5
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/plugin-jenkins-common@0.1.14
  - @kozmoai/plugin-permission-common@0.7.4
  - @kozmoai/config@1.0.7

## 0.1.33-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.2.12-next.2
  - @kozmoai/backend-common@0.18.3-next.2
  - @kozmoai/config@1.0.7-next.0

## 0.1.33-next.1

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/errors@1.1.5-next.0
  - @kozmoai/backend-common@0.18.3-next.1
  - @kozmoai/catalog-client@1.4.0-next.1
  - @kozmoai/plugin-auth-node@0.2.12-next.1
  - @kozmoai/plugin-permission-common@0.7.4-next.0
  - @kozmoai/config@1.0.7-next.0
  - @kozmoai/catalog-model@1.2.1-next.1
  - @kozmoai/plugin-jenkins-common@0.1.14-next.1

## 0.1.33-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.4.0-next.0
  - @kozmoai/backend-common@0.18.3-next.0
  - @kozmoai/catalog-model@1.2.1-next.0
  - @kozmoai/plugin-jenkins-common@0.1.14-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.12-next.0
  - @kozmoai/plugin-permission-common@0.7.3

## 0.1.32

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2
  - @kozmoai/catalog-model@1.2.0
  - @kozmoai/catalog-client@1.3.1
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.11
  - @kozmoai/plugin-jenkins-common@0.1.13
  - @kozmoai/plugin-permission-common@0.7.3

## 0.1.32-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.2
  - @kozmoai/catalog-model@1.2.0-next.1
  - @kozmoai/plugin-auth-node@0.2.11-next.2
  - @kozmoai/catalog-client@1.3.1-next.1
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-jenkins-common@0.1.13-next.1
  - @kozmoai/plugin-permission-common@0.7.3

## 0.1.32-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.1
  - @kozmoai/catalog-client@1.3.1-next.0
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.11-next.1
  - @kozmoai/plugin-jenkins-common@0.1.13-next.0
  - @kozmoai/plugin-permission-common@0.7.3

## 0.1.32-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/backend-common@0.18.2-next.0
  - @kozmoai/catalog-client@1.3.1-next.0
  - @kozmoai/plugin-auth-node@0.2.11-next.0
  - @kozmoai/plugin-jenkins-common@0.1.13-next.0

## 0.1.30

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0
  - @kozmoai/catalog-model@1.1.5
  - @kozmoai/catalog-client@1.3.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.9
  - @kozmoai/plugin-jenkins-common@0.1.12
  - @kozmoai/plugin-permission-common@0.7.3

## 0.1.30-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0-next.1
  - @kozmoai/catalog-client@1.3.0-next.2
  - @kozmoai/plugin-auth-node@0.2.9-next.1
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-jenkins-common@0.1.12-next.1
  - @kozmoai/plugin-permission-common@0.7.3-next.0

## 0.1.30-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0-next.0
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/catalog-client@1.3.0-next.1
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.9-next.0
  - @kozmoai/plugin-jenkins-common@0.1.12-next.1
  - @kozmoai/plugin-permission-common@0.7.3-next.0

## 0.1.30-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.5-next.0
  - @kozmoai/catalog-client@1.3.0-next.0
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/config@1.0.5
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.8
  - @kozmoai/plugin-jenkins-common@0.1.12-next.0
  - @kozmoai/plugin-permission-common@0.7.2

## 0.1.29

### Patch Changes

- cfe2b98fbe: Remove unnecessary dependency `promise-any-polyfill`.
- 3280711113: Updated dependency `msw` to `^0.49.0`.
- 9447b0fb46: added support for standalone jenkins projects
- Updated dependencies
  - @kozmoai/catalog-client@1.2.0
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/plugin-permission-common@0.7.2
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.8
  - @kozmoai/catalog-model@1.1.4
  - @kozmoai/config@1.0.5
  - @kozmoai/plugin-jenkins-common@0.1.11

## 0.1.29-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-permission-common@0.7.2-next.2
  - @kozmoai/backend-common@0.17.0-next.3
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/plugin-auth-node@0.2.8-next.3
  - @kozmoai/plugin-jenkins-common@0.1.11-next.3

## 0.1.29-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.2
  - @kozmoai/plugin-auth-node@0.2.8-next.2
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/plugin-jenkins-common@0.1.11-next.2
  - @kozmoai/plugin-permission-common@0.7.2-next.1

## 0.1.29-next.1

### Patch Changes

- cfe2b98fbe: Remove unnecessary dependency promise-any-polyfill
- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.1
  - @kozmoai/plugin-auth-node@0.2.8-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/catalog-client@1.2.0-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/plugin-jenkins-common@0.1.11-next.1
  - @kozmoai/plugin-permission-common@0.7.2-next.1

## 0.1.29-next.0

### Patch Changes

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @kozmoai/catalog-client@1.2.0-next.0
  - @kozmoai/backend-common@0.16.1-next.0
  - @kozmoai/plugin-auth-node@0.2.8-next.0
  - @kozmoai/plugin-permission-common@0.7.2-next.0
  - @kozmoai/catalog-model@1.1.4-next.0
  - @kozmoai/config@1.0.5-next.0
  - @kozmoai/errors@1.1.4-next.0
  - @kozmoai/plugin-jenkins-common@0.1.11-next.0

## 0.1.28

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0
  - @kozmoai/catalog-model@1.1.3
  - @kozmoai/plugin-auth-node@0.2.7
  - @kozmoai/plugin-permission-common@0.7.1
  - @kozmoai/catalog-client@1.1.2
  - @kozmoai/config@1.0.4
  - @kozmoai/errors@1.1.3
  - @kozmoai/plugin-jenkins-common@0.1.10

## 0.1.28-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.1
  - @kozmoai/plugin-auth-node@0.2.7-next.1
  - @kozmoai/catalog-client@1.1.2-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/plugin-jenkins-common@0.1.10-next.0
  - @kozmoai/plugin-permission-common@0.7.1-next.0

## 0.1.28-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/plugin-auth-node@0.2.7-next.0
  - @kozmoai/plugin-permission-common@0.7.1-next.0
  - @kozmoai/catalog-client@1.1.2-next.0
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/plugin-jenkins-common@0.1.10-next.0

## 0.1.27

### Patch Changes

- b19ea927af: Fixed a bug where `extraRequestHeaders` configuration was ignored.
- Updated dependencies
  - @kozmoai/catalog-model@1.1.2
  - @kozmoai/backend-common@0.15.2
  - @kozmoai/plugin-auth-node@0.2.6
  - @kozmoai/plugin-permission-common@0.7.0
  - @kozmoai/catalog-client@1.1.1
  - @kozmoai/config@1.0.3
  - @kozmoai/errors@1.1.2
  - @kozmoai/plugin-jenkins-common@0.1.9

## 0.1.27-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.2-next.2
  - @kozmoai/plugin-permission-common@0.7.0-next.2
  - @kozmoai/plugin-jenkins-common@0.1.9-next.2
  - @kozmoai/plugin-auth-node@0.2.6-next.2
  - @kozmoai/catalog-client@1.1.1-next.2
  - @kozmoai/catalog-model@1.1.2-next.2
  - @kozmoai/config@1.0.3-next.2
  - @kozmoai/errors@1.1.2-next.2

## 0.1.27-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.1.1-next.1
  - @kozmoai/backend-common@0.15.2-next.1
  - @kozmoai/catalog-model@1.1.2-next.1
  - @kozmoai/config@1.0.3-next.1
  - @kozmoai/errors@1.1.2-next.1
  - @kozmoai/plugin-auth-node@0.2.6-next.1
  - @kozmoai/plugin-jenkins-common@0.1.9-next.1
  - @kozmoai/plugin-permission-common@0.6.5-next.1

## 0.1.27-next.0

### Patch Changes

- b19ea927af: Fixed a bug where `extraRequestHeaders` configuration was ignored.
- Updated dependencies
  - @kozmoai/catalog-model@1.1.2-next.0
  - @kozmoai/catalog-client@1.1.1-next.0
  - @kozmoai/backend-common@0.15.2-next.0
  - @kozmoai/plugin-auth-node@0.2.6-next.0
  - @kozmoai/config@1.0.3-next.0
  - @kozmoai/errors@1.1.2-next.0
  - @kozmoai/plugin-jenkins-common@0.1.9-next.0
  - @kozmoai/plugin-permission-common@0.6.5-next.0

## 0.1.26

### Patch Changes

- 618c06f838: Add example on how to pass through permissions
- a966ed8385: Unwrap error message when getting projects
- 47952621dc: Extend configuration so that extra headers can be sent to jenkins instance
- d669d89206: Minor API signatures cleanup
- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- 69ec1cf39f: Updated dependency `jenkins` to `^1.0.0`.
- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- e55d855a6b: Jenkins plugin works again
- Updated dependencies
  - @kozmoai/backend-common@0.15.1
  - @kozmoai/plugin-auth-node@0.2.5
  - @kozmoai/catalog-client@1.1.0
  - @kozmoai/catalog-model@1.1.1
  - @kozmoai/config@1.0.2
  - @kozmoai/errors@1.1.1
  - @kozmoai/plugin-permission-common@0.6.4
  - @kozmoai/plugin-jenkins-common@0.1.8

## 0.1.26-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@1.1.0-next.2
  - @kozmoai/catalog-model@1.1.1-next.0
  - @kozmoai/config@1.0.2-next.0
  - @kozmoai/errors@1.1.1-next.0
  - @kozmoai/plugin-permission-common@0.6.4-next.2
  - @kozmoai/backend-common@0.15.1-next.3
  - @kozmoai/plugin-auth-node@0.2.5-next.3

## 0.1.26-next.2

### Patch Changes

- 47952621dc: Extend configuration so that extra headers can be sent to jenkins instance
- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.2
  - @kozmoai/plugin-auth-node@0.2.5-next.2
  - @kozmoai/catalog-client@1.0.5-next.1
  - @kozmoai/plugin-permission-common@0.6.4-next.1

## 0.1.26-next.1

### Patch Changes

- d669d89206: Minor API signatures cleanup
- 69ec1cf39f: Updated dependency `jenkins` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/plugin-auth-node@0.2.5-next.1
  - @kozmoai/backend-common@0.15.1-next.1

## 0.1.26-next.0

### Patch Changes

- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.0
  - @kozmoai/catalog-client@1.0.5-next.0
  - @kozmoai/plugin-auth-node@0.2.5-next.0
  - @kozmoai/plugin-permission-common@0.6.4-next.0
  - @kozmoai/plugin-jenkins-common@0.1.8-next.0

## 0.1.25

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.0
  - @kozmoai/plugin-auth-node@0.2.4
  - @kozmoai/plugin-jenkins-common@0.1.7

## 0.1.25-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.0-next.1
  - @kozmoai/plugin-jenkins-common@0.1.7-next.0

## 0.1.25-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.0-next.0
  - @kozmoai/plugin-auth-node@0.2.4-next.0

## 0.1.24

### Patch Changes

- 8747824221: feature: added support for multiple branches to the `JenkinsApi`
- a70869e775: Updated dependency `msw` to `^0.43.0`.
- 8006d0f9bf: Updated dependency `msw` to `^0.44.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.14.1
  - @kozmoai/catalog-model@1.1.0
  - @kozmoai/catalog-client@1.0.4
  - @kozmoai/plugin-auth-node@0.2.3
  - @kozmoai/plugin-permission-common@0.6.3
  - @kozmoai/errors@1.1.0
  - @kozmoai/plugin-jenkins-common@0.1.6

## 0.1.24-next.3

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.14.1-next.3
  - @kozmoai/catalog-client@1.0.4-next.2
  - @kozmoai/plugin-auth-node@0.2.3-next.2
  - @kozmoai/plugin-permission-common@0.6.3-next.1
  - @kozmoai/catalog-model@1.1.0-next.3

## 0.1.24-next.2

### Patch Changes

- 8747824221: feature: added support for multiple branches to the `JenkinsApi`
- Updated dependencies
  - @kozmoai/catalog-model@1.1.0-next.2
  - @kozmoai/backend-common@0.14.1-next.2

## 0.1.24-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.0-next.1
  - @kozmoai/backend-common@0.14.1-next.1
  - @kozmoai/errors@1.1.0-next.0
  - @kozmoai/catalog-client@1.0.4-next.1
  - @kozmoai/plugin-auth-node@0.2.3-next.1
  - @kozmoai/plugin-jenkins-common@0.1.6-next.0
  - @kozmoai/plugin-permission-common@0.6.3-next.0

## 0.1.24-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.1-next.0
  - @kozmoai/catalog-model@1.1.0-next.0
  - @kozmoai/plugin-auth-node@0.2.3-next.0
  - @kozmoai/catalog-client@1.0.4-next.0

## 0.1.23

### Patch Changes

- 83f6a64d2c: bug fix: provide glint token for rebuild api call
- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.14.0
  - @kozmoai/plugin-auth-node@0.2.2
  - @kozmoai/catalog-client@1.0.3
  - @kozmoai/plugin-permission-common@0.6.2
  - @kozmoai/catalog-model@1.0.3
  - @kozmoai/plugin-jenkins-common@0.1.5

## 0.1.23-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.0-next.2
  - @kozmoai/plugin-auth-node@0.2.2-next.2

## 0.1.23-next.1

### Patch Changes

- 83f6a64d2c: bug fix: provide glint token for rebuild api call
- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.13.6-next.1
  - @kozmoai/catalog-client@1.0.3-next.0
  - @kozmoai/plugin-auth-node@0.2.2-next.1
  - @kozmoai/plugin-permission-common@0.6.2-next.0
  - @kozmoai/catalog-model@1.0.3-next.0
  - @kozmoai/plugin-jenkins-common@0.1.5-next.0

## 0.1.23-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.6-next.0
  - @kozmoai/plugin-auth-node@0.2.2-next.0

## 0.1.22

### Patch Changes

- 8cc75993a6: Fixed issue in `PermissionEvaluator` instance check that would cause unexpected "invalid union" errors.
- Updated dependencies
  - @kozmoai/backend-common@0.13.3
  - @kozmoai/config@1.0.1
  - @kozmoai/plugin-auth-node@0.2.1
  - @kozmoai/catalog-client@1.0.2
  - @kozmoai/catalog-model@1.0.2
  - @kozmoai/plugin-jenkins-common@0.1.4
  - @kozmoai/plugin-permission-common@0.6.1

## 0.1.22-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.3-next.2
  - @kozmoai/config@1.0.1-next.0
  - @kozmoai/catalog-model@1.0.2-next.0
  - @kozmoai/plugin-auth-node@0.2.1-next.1
  - @kozmoai/plugin-permission-common@0.6.1-next.0
  - @kozmoai/catalog-client@1.0.2-next.0
  - @kozmoai/plugin-jenkins-common@0.1.4-next.0

## 0.1.22-next.0

### Patch Changes

- 8cc75993a6: Fixed issue in `PermissionEvaluator` instance check that would cause unexpected "invalid union" errors.
- Updated dependencies
  - @kozmoai/backend-common@0.13.3-next.0
  - @kozmoai/plugin-auth-node@0.2.1-next.0

## 0.1.20

### Patch Changes

- 1917923ab8: Use `PermissionEvaluator` instead of `PermissionAuthorizer`, which is now deprecated.
- b013de3f50: feature: provide access token to JenkinsInstanceConfig. It can be passed to other backend calls if authentication enabled. DefaultJenkinsInfoProvider sends always this token to catalog api if access token exists.
- ca91107110: Fixed possible type error if jenkins response contains null values
- 71f8708f00: Make `resourceRef` required in `JenkinsApi` to match usage.
- Updated dependencies
  - @kozmoai/plugin-permission-common@0.6.0
  - @kozmoai/catalog-model@1.0.1
  - @kozmoai/plugin-auth-node@0.2.0
  - @kozmoai/backend-common@0.13.2
  - @kozmoai/plugin-jenkins-common@0.1.3
  - @kozmoai/catalog-client@1.0.1

## 0.1.20-next.2

### Patch Changes

- 1917923ab8: Use `PermissionEvaluator` instead of `PermissionAuthorizer`, which is now deprecated.
- b013de3f50: feature: provide access token to JenkinsInstanceConfig. It can be passed to other backend calls if authentication enabled. DefaultJenkinsInfoProvider sends always this token to catalog api if access token exists.
- Updated dependencies
  - @kozmoai/plugin-permission-common@0.6.0-next.1
  - @kozmoai/backend-common@0.13.2-next.2

## 0.1.20-next.1

### Patch Changes

- ca91107110: Fixed possible type error if jenkins response contains null values
- Updated dependencies
  - @kozmoai/plugin-permission-common@0.6.0-next.0
  - @kozmoai/plugin-jenkins-common@0.1.3-next.1
  - @kozmoai/backend-common@0.13.2-next.1

## 0.1.20-next.0

### Patch Changes

- 71f8708f00: Make `resourceRef` required in `JenkinsApi` to match usage.
- Updated dependencies
  - @kozmoai/catalog-model@1.0.1-next.0
  - @kozmoai/plugin-auth-node@0.2.0-next.0
  - @kozmoai/backend-common@0.13.2-next.0
  - @kozmoai/catalog-client@1.0.1-next.0
  - @kozmoai/plugin-jenkins-common@0.1.3-next.0

## 0.1.19

### Patch Changes

- 89c7e47967: Minor README update
- f24ef7864e: Minor typo fixes
- Updated dependencies
  - @kozmoai/backend-common@0.13.1
  - @kozmoai/catalog-model@1.0.0
  - @kozmoai/catalog-client@1.0.0
  - @kozmoai/config@1.0.0
  - @kozmoai/errors@1.0.0
  - @kozmoai/plugin-permission-common@0.5.3
  - @kozmoai/plugin-auth-node@0.1.6
  - @kozmoai/plugin-jenkins-common@0.1.2

## 0.1.18

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.0
  - @kozmoai/catalog-model@0.13.0
  - @kozmoai/catalog-client@0.9.0
  - @kozmoai/plugin-auth-node@0.1.5
  - @kozmoai/plugin-jenkins-common@0.1.1

## 0.1.18-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.0-next.0
  - @kozmoai/catalog-model@0.13.0-next.0
  - @kozmoai/catalog-client@0.9.0-next.0
  - @kozmoai/plugin-auth-node@0.1.5-next.0
  - @kozmoai/plugin-jenkins-common@0.1.1-next.0

## 0.1.17

### Patch Changes

- 899f196af5: Use `getEntityByRef` instead of `getEntityByName` in the catalog client
- 23e1c17bba: Jenkins plugin supports permissions now. We have added a new permission, so you can manage the permission for the users.
  A new permission `jenkinsExecutePermission` is provided in `jenkins-common` package. This permission rule will be applied to check rebuild actions
  if user is allowed to execute this action.

  > We use 'catalog-entity' as a resource type, so you need to integrate a policy to handle catalog-entity resources

  > You need to use this permission in your permission policy to check the user role/rights and return
  > `AuthorizeResult.ALLOW` to allow rebuild action to logged user. (e.g: you can check if user or related group owns the entity)

- 36aa63022b: Use `CompoundEntityRef` instead of `EntityName`, and `getCompoundEntityRef` instead of `getEntityName`, from `@kozmoai/catalog-model`.
- Updated dependencies
  - @kozmoai/catalog-model@0.12.0
  - @kozmoai/catalog-client@0.8.0
  - @kozmoai/backend-common@0.12.0
  - @kozmoai/plugin-jenkins-common@0.1.0
  - @kozmoai/plugin-permission-common@0.5.2
  - @kozmoai/plugin-auth-node@0.1.4

## 0.1.16

### Patch Changes

- 67a7c02d26: Remove usages of `EntityRef` and `parseEntityName` from `@kozmoai/catalog-model`
- Updated dependencies
  - @kozmoai/backend-common@0.11.0
  - @kozmoai/catalog-model@0.11.0
  - @kozmoai/catalog-client@0.7.2

## 0.1.15

### Patch Changes

- Fix for the previous release with missing type declarations.
- Updated dependencies
  - @kozmoai/backend-common@0.10.9
  - @kozmoai/catalog-client@0.7.1
  - @kozmoai/catalog-model@0.10.1
  - @kozmoai/config@0.1.15

## 0.1.14

### Patch Changes

- c77c5c7eb6: Added `glint.role` to `package.json`
- 377fce4677: The `DefaultJenkinsInfoProvider.fromConfig` now requires an implementation of the `CatalogApi` rather than a `CatalogClient` instance.
- Updated dependencies
  - @kozmoai/backend-common@0.10.8
  - @kozmoai/catalog-client@0.7.0
  - @kozmoai/catalog-model@0.10.0
  - @kozmoai/config@0.1.14

## 0.1.13

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@0.6.0
  - @kozmoai/backend-common@0.10.7

## 0.1.13-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.10.7-next.0

## 0.1.12

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.10.6

## 0.1.12-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.10.6-next.0

## 0.1.11

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.10.4
  - @kozmoai/config@0.1.13
  - @kozmoai/catalog-model@0.9.10
  - @kozmoai/catalog-client@0.5.5

## 0.1.11-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.10.4-next.0
  - @kozmoai/config@0.1.13-next.0
  - @kozmoai/catalog-model@0.9.10-next.0
  - @kozmoai/catalog-client@0.5.5-next.0

## 0.1.10

### Patch Changes

- eb3fd85d3e: feature: add crumbIssuer option to Jenkins (optional) configuration, improve the UI to show a notification after executing the action re-build
- Updated dependencies
  - @kozmoai/backend-common@0.10.0
  - @kozmoai/catalog-client@0.5.3

## 0.1.9

### Patch Changes

- b055a6addc: Align on usage of `cross-fetch` vs `node-fetch` in frontend vs backend packages, and remove some unnecessary imports of either one of them
- Updated dependencies
  - @kozmoai/backend-common@0.9.12

## 0.1.8

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

## 0.1.7

### Patch Changes

- e8a1c1afe2: Don't require a validation pattern for the Jenkins base URL.
- Updated dependencies
  - @kozmoai/backend-common@0.9.9
  - @kozmoai/catalog-client@0.5.1

## 0.1.6

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@0.9.4
  - @kozmoai/backend-common@0.9.6
  - @kozmoai/catalog-client@0.5.0

## 0.1.5

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-client@0.4.0
  - @kozmoai/catalog-model@0.9.3
  - @kozmoai/backend-common@0.9.4
  - @kozmoai/config@0.1.10

## 0.1.4

### Patch Changes

- 4c86555a2: Fix the case where lastBuild is null.
- Updated dependencies
  - @kozmoai/backend-common@0.9.0
  - @kozmoai/config@0.1.8

## 0.1.3

### Patch Changes

- efbb82dd3: Extract `JenkinsConfig` to make writing a custom `JenkinsInfoProvider` easier.
- Updated dependencies
  - @kozmoai/backend-common@0.8.10
  - @kozmoai/config@0.1.7

## 0.1.2

### Patch Changes

- eee05803a: Update `@kozmoai/backend-common` to `^0.8.6`
- Updated dependencies
  - @kozmoai/catalog-client@0.3.17
  - @kozmoai/backend-common@0.8.7
