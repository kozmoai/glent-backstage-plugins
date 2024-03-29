# @kozmoai/plugin-catalog-backend-module-openapi

## 0.1.31-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/integration@1.9.1-next.1
  - @kozmoai/plugin-catalog-backend@1.18.0-next.1
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.22-next.1
  - @kozmoai/plugin-catalog-node@1.8.0-next.1

## 0.1.30-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/plugin-catalog-backend@1.18.0-next.0
  - @kozmoai/plugin-catalog-node@1.8.0-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/config@1.1.2-next.0
  - @kozmoai/integration@1.9.1-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.22-next.0

## 0.1.27

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/plugin-catalog-backend@1.17.0
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/integration@1.9.0
  - @kozmoai/plugin-catalog-node@1.7.0
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21

## 0.1.27-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/integration@1.9.0-next.1
  - @kozmoai/plugin-catalog-backend@1.17.0-next.3
  - @kozmoai/plugin-catalog-node@1.6.2-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21-next.0

## 0.1.27-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-catalog-backend@1.17.0-next.2
  - @kozmoai/plugin-catalog-node@1.6.2-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21-next.0

## 0.1.27-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/plugin-catalog-backend@1.17.0-next.1
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.21-next.0
  - @kozmoai/plugin-catalog-node@1.6.2-next.1

## 0.1.27-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/plugin-catalog-backend@1.17.0-next.0
  - @kozmoai/plugin-catalog-node@1.6.2-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.20

## 0.1.26

### Patch Changes

- 4ebf99b: Add support for the new backend system.

  A new backend module for the catalog backend
  was added and exported as `default`.

  You can use it with the new backend system like

  ```ts title="packages/backend/src/index.ts"
  backend.add(import('@kozmoai/plugin-catalog-backend-module-openapi'));
  ```

- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/plugin-catalog-node@1.6.1
  - @kozmoai/plugin-catalog-backend@1.16.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.20

## 0.1.26-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.2
  - @kozmoai/plugin-catalog-backend@1.16.1-next.2
  - @kozmoai/plugin-catalog-node@1.6.1-next.2

## 0.1.26-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-catalog-backend@1.16.1-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.19
  - @kozmoai/plugin-catalog-node@1.6.1-next.1

## 0.1.26-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/plugin-catalog-node@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-backend@1.16.1-next.0
  - @kozmoai/plugin-catalog-common@1.0.19

## 0.1.25

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/plugin-catalog-node@1.6.0
  - @kozmoai/plugin-catalog-backend@1.16.0
  - @kozmoai/integration@1.8.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.19

## 0.1.25-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-backend@1.16.0-next.3
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-catalog-node@1.6.0-next.3

## 0.1.25-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.6.0-next.2
  - @kozmoai/plugin-catalog-backend@1.16.0-next.2
  - @kozmoai/backend-common@0.20.0-next.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18

## 0.1.25-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.15.1-next.1
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/backend-common@0.20.0-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-catalog-node@1.5.1-next.1

## 0.1.25-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.0
  - @kozmoai/integration@1.8.0-next.0
  - @kozmoai/plugin-catalog-backend@1.15.1-next.0
  - @kozmoai/plugin-catalog-node@1.5.1-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18

## 0.1.24

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.15.0
  - @kozmoai/plugin-catalog-node@1.5.0
  - @kozmoai/integration@1.7.2
  - @kozmoai/backend-common@0.19.9
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18

## 0.1.24-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.2
  - @kozmoai/plugin-catalog-backend@1.15.0-next.2
  - @kozmoai/plugin-catalog-node@1.5.0-next.2

## 0.1.24-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.15.0-next.1
  - @kozmoai/plugin-catalog-node@1.5.0-next.1
  - @kozmoai/integration@1.7.2-next.0
  - @kozmoai/backend-common@0.19.9-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17

## 0.1.24-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.15.0-next.0
  - @kozmoai/backend-common@0.19.9-next.0
  - @kozmoai/integration@1.7.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17
  - @kozmoai/plugin-catalog-node@1.4.8-next.0

## 0.1.23

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8
  - @kozmoai/integration@1.7.1
  - @kozmoai/plugin-catalog-backend@1.14.0
  - @kozmoai/plugin-catalog-node@1.4.7
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17

## 0.1.23-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8-next.2
  - @kozmoai/plugin-catalog-backend@1.14.0-next.2
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/integration@1.7.1-next.1
  - @kozmoai/plugin-catalog-node@1.4.7-next.2
  - @kozmoai/config@1.1.1-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17-next.0

## 0.1.22-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.14.0-next.1
  - @kozmoai/plugin-catalog-node@1.4.6-next.1
  - @kozmoai/backend-common@0.19.7-next.1
  - @kozmoai/config@1.1.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/integration@1.7.1-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.16

## 0.1.22-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.7.1-next.0
  - @kozmoai/plugin-catalog-backend@1.14.0-next.0
  - @kozmoai/backend-common@0.19.7-next.0
  - @kozmoai/config@1.1.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.16
  - @kozmoai/plugin-catalog-node@1.4.6-next.0

## 0.1.19

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.13.0
  - @kozmoai/backend-common@0.19.5
  - @kozmoai/config@1.1.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/integration@1.7.0
  - @kozmoai/plugin-catalog-common@1.0.16
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-node@1.4.4

## 0.1.19-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.13.0-next.3
  - @kozmoai/catalog-model@1.4.2-next.2
  - @kozmoai/config@1.1.0-next.2
  - @kozmoai/integration@1.7.0-next.3
  - @kozmoai/plugin-catalog-common@1.0.16-next.2
  - @kozmoai/types@1.1.1-next.0
  - @kozmoai/backend-common@0.19.5-next.3
  - @kozmoai/plugin-catalog-node@1.4.4-next.3

## 0.1.19-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.13.0-next.2
  - @kozmoai/config@1.1.0-next.1
  - @kozmoai/backend-common@0.19.5-next.2
  - @kozmoai/plugin-catalog-node@1.4.4-next.2
  - @kozmoai/integration@1.7.0-next.2
  - @kozmoai/catalog-model@1.4.2-next.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.16-next.1

## 0.1.19-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.13.0-next.1
  - @kozmoai/config@1.1.0-next.0
  - @kozmoai/integration@1.7.0-next.1
  - @kozmoai/backend-common@0.19.5-next.1
  - @kozmoai/catalog-model@1.4.2-next.0
  - @kozmoai/plugin-catalog-node@1.4.4-next.1
  - @kozmoai/plugin-catalog-common@1.0.16-next.0
  - @kozmoai/types@1.1.0

## 0.1.16-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.12.2-next.0
  - @kozmoai/backend-common@0.19.4-next.0
  - @kozmoai/integration@1.7.0-next.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15
  - @kozmoai/plugin-catalog-node@1.4.3-next.0

## 0.1.14

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.2
  - @kozmoai/plugin-catalog-backend@1.12.0
  - @kozmoai/plugin-catalog-node@1.4.1
  - @kozmoai/integration@1.6.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15

## 0.1.14-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.12.0-next.2
  - @kozmoai/backend-common@0.19.2-next.2
  - @kozmoai/plugin-catalog-node@1.4.1-next.2

## 0.1.14-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.1
  - @kozmoai/plugin-catalog-backend@1.12.0-next.1
  - @kozmoai/plugin-catalog-node@1.4.1-next.1
  - @kozmoai/integration@1.5.1
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15

## 0.1.14-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.12.0-next.0
  - @kozmoai/backend-common@0.19.2-next.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/integration@1.5.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15
  - @kozmoai/plugin-catalog-node@1.4.1-next.0

## 0.1.13

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.1
  - @kozmoai/plugin-catalog-backend@1.11.0
  - @kozmoai/plugin-catalog-node@1.4.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/integration@1.5.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15

## 0.1.13-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.1-next.0
  - @kozmoai/plugin-catalog-backend@1.11.0-next.0
  - @kozmoai/plugin-catalog-node@1.4.0-next.0
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/integration@1.5.1-next.0
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15-next.0

## 0.1.12

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-backend@1.10.0
  - @kozmoai/integration@1.5.0
  - @kozmoai/catalog-model@1.4.0
  - @kozmoai/plugin-catalog-node@1.3.7
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-catalog-common@1.0.14

## 0.1.12-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.2
  - @kozmoai/catalog-model@1.4.0-next.1
  - @kozmoai/plugin-catalog-backend@1.10.0-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/integration@1.5.0-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.14-next.1
  - @kozmoai/plugin-catalog-node@1.3.7-next.2

## 0.1.12-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.1
  - @kozmoai/plugin-catalog-backend@1.9.2-next.1
  - @kozmoai/integration@1.5.0-next.0
  - @kozmoai/catalog-model@1.4.0-next.0
  - @kozmoai/plugin-catalog-node@1.3.7-next.1
  - @kozmoai/plugin-catalog-common@1.0.14-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2

## 0.1.12-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.9.2-next.0
  - @kozmoai/plugin-catalog-node@1.3.7-next.0
  - @kozmoai/backend-common@0.18.6-next.0
  - @kozmoai/integration@1.4.5
  - @kozmoai/config@1.0.7
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13

## 0.1.11

### Patch Changes

- accaceadffa: Fixed bug in `jsonSchemaRefPlaceholderResolver` where relative $ref files were resolved through file system instead of base URL of file
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.9.1
  - @kozmoai/backend-common@0.18.5
  - @kozmoai/integration@1.4.5
  - @kozmoai/plugin-catalog-node@1.3.6
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13

## 0.1.11-next.2

### Patch Changes

- accaceadffa: Fixed bug in `jsonSchemaRefPlaceholderResolver` where relative $ref files were resolved through file system instead of base URL of file
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.9.1-next.2
  - @kozmoai/config@1.0.7

## 0.1.11-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.1
  - @kozmoai/plugin-catalog-backend@1.9.1-next.1
  - @kozmoai/plugin-catalog-node@1.3.6-next.1
  - @kozmoai/config@1.0.7

## 0.1.11-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.0
  - @kozmoai/integration@1.4.5-next.0
  - @kozmoai/plugin-catalog-backend@1.9.1-next.0
  - @kozmoai/plugin-catalog-node@1.3.6-next.0
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13

## 0.1.10

### Patch Changes

- c9a0fdcd2c8: Fix deprecated types.
- Updated dependencies
  - @kozmoai/backend-common@0.18.4
  - @kozmoai/plugin-catalog-backend@1.9.0
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/integration@1.4.4
  - @kozmoai/plugin-catalog-node@1.3.5
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13

## 0.1.10-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.9.0-next.3
  - @kozmoai/catalog-model@1.3.0-next.0
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.1
  - @kozmoai/plugin-catalog-node@1.3.5-next.3

## 0.1.10-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.8.1-next.2
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/config@1.0.7
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.0
  - @kozmoai/plugin-catalog-node@1.3.5-next.2

## 0.1.10-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.8.1-next.1
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/backend-common@0.18.4-next.1
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.0
  - @kozmoai/plugin-catalog-node@1.3.5-next.1

## 0.1.10-next.0

### Patch Changes

- c9a0fdcd2c8: Fix deprecated types.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.8.1-next.0
  - @kozmoai/backend-common@0.18.4-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/integration@1.4.3
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.12
  - @kozmoai/plugin-catalog-node@1.3.5-next.0

## 0.1.9

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.8.0
  - @kozmoai/backend-common@0.18.3
  - @kozmoai/plugin-catalog-node@1.3.4
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/integration@1.4.3
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2

## 0.1.9-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.3-next.2
  - @kozmoai/plugin-catalog-backend@1.8.0-next.2
  - @kozmoai/plugin-catalog-node@1.3.4-next.2
  - @kozmoai/config@1.0.7-next.0
  - @kozmoai/integration@1.4.3-next.0

## 0.1.9-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.3-next.1
  - @kozmoai/integration@1.4.3-next.0
  - @kozmoai/plugin-catalog-backend@1.8.0-next.1
  - @kozmoai/config@1.0.7-next.0
  - @kozmoai/catalog-model@1.2.1-next.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-node@1.3.4-next.1

## 0.1.9-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.8.0-next.0
  - @kozmoai/backend-common@0.18.3-next.0
  - @kozmoai/catalog-model@1.2.1-next.0
  - @kozmoai/plugin-catalog-node@1.3.4-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2

## 0.1.8

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.7.2
  - @kozmoai/backend-common@0.18.2
  - @kozmoai/catalog-model@1.2.0
  - @kozmoai/plugin-catalog-node@1.3.3
  - @kozmoai/config@1.0.6
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2

## 0.1.8-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.2
  - @kozmoai/plugin-catalog-backend@1.7.2-next.2
  - @kozmoai/catalog-model@1.2.0-next.1
  - @kozmoai/plugin-catalog-node@1.3.3-next.2
  - @kozmoai/config@1.0.6
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2

## 0.1.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.7.2-next.1
  - @kozmoai/backend-common@0.18.2-next.1
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-node@1.3.3-next.1

## 0.1.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/backend-common@0.18.2-next.0
  - @kozmoai/plugin-catalog-backend@1.7.2-next.0
  - @kozmoai/plugin-catalog-node@1.3.3-next.0

## 0.1.6

### Patch Changes

- f9abdb64fc: Updated internal usage of UrlReader interface.
- Updated dependencies
  - @kozmoai/backend-common@0.18.0
  - @kozmoai/catalog-model@1.1.5
  - @kozmoai/plugin-catalog-node@1.3.1
  - @kozmoai/plugin-catalog-backend@1.7.0
  - @kozmoai/config@1.0.6
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2

## 0.1.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0-next.1
  - @kozmoai/plugin-catalog-backend@1.7.0-next.2
  - @kozmoai/plugin-catalog-node@1.3.1-next.2
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/integration@1.4.2-next.0
  - @kozmoai/types@1.0.2

## 0.1.6-next.1

### Patch Changes

- f9abdb64fc: Updated internal usage of UrlReader interface.
- Updated dependencies
  - @kozmoai/backend-common@0.18.0-next.0
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/plugin-catalog-backend@1.7.0-next.1
  - @kozmoai/plugin-catalog-node@1.3.1-next.1
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/integration@1.4.2-next.0
  - @kozmoai/types@1.0.2

## 0.1.6-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.5-next.0
  - @kozmoai/plugin-catalog-backend@1.7.0-next.0
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/config@1.0.5
  - @kozmoai/integration@1.4.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-node@1.3.1-next.0

## 0.1.5

### Patch Changes

- dd995cdc72: Enabled support of resolving `$refs` in all kind of yaml documents, not only OpenAPI. This implicitly adds `$ref` resolving support for AsyncAPI specs. Thus, the `openApiPlaceholderResolver` has been renamed to `jsonSchemaRefPlaceholderResolver`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/plugin-catalog-node@1.3.0
  - @kozmoai/integration@1.4.1
  - @kozmoai/types@1.0.2
  - @kozmoai/catalog-model@1.1.4
  - @kozmoai/config@1.0.5

## 0.1.5-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0-next.3
  - @kozmoai/backend-common@0.17.0-next.3
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/integration@1.4.1-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/plugin-catalog-node@1.3.0-next.3

## 0.1.5-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0-next.2
  - @kozmoai/plugin-catalog-node@1.3.0-next.2
  - @kozmoai/backend-common@0.17.0-next.2
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/integration@1.4.1-next.1
  - @kozmoai/types@1.0.2-next.1

## 0.1.5-next.1

### Patch Changes

- dd995cdc72: Enabled support of resolving `$refs` in all kind of yaml documents, not only OpenAPI. This implicitly adds `$ref` resolving support for AsyncAPI specs. Thus, the `openApiPlaceholderResolver` has been renamed to `jsonSchemaRefPlaceholderResolver`.
- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.1
  - @kozmoai/plugin-catalog-backend@1.6.0-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/plugin-catalog-node@1.2.2-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/integration@1.4.1-next.1
  - @kozmoai/catalog-model@1.1.4-next.1

## 0.1.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0-next.0
  - @kozmoai/backend-common@0.16.1-next.0
  - @kozmoai/integration@1.4.1-next.0
  - @kozmoai/types@1.0.2-next.0
  - @kozmoai/plugin-catalog-node@1.2.2-next.0
  - @kozmoai/catalog-model@1.1.4-next.0
  - @kozmoai/config@1.0.5-next.0

## 0.1.4

### Patch Changes

- 4ce887400d: Added support to use the `UrlReaders` when `$ref` pointing to a URL.
- Updated dependencies
  - @kozmoai/backend-common@0.16.0
  - @kozmoai/plugin-catalog-backend@1.5.1
  - @kozmoai/integration@1.4.0
  - @kozmoai/catalog-model@1.1.3
  - @kozmoai/types@1.0.1
  - @kozmoai/plugin-catalog-node@1.2.1
  - @kozmoai/config@1.0.4

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.1
  - @kozmoai/plugin-catalog-backend@1.5.1-next.1
  - @kozmoai/plugin-catalog-node@1.2.1-next.1
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/integration@1.4.0-next.0
  - @kozmoai/types@1.0.1-next.0

## 0.1.4-next.0

### Patch Changes

- 4ce887400d: Added support to use the `UrlReaders` when `$ref` pointing to a URL.
- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.0
  - @kozmoai/plugin-catalog-backend@1.5.1-next.0
  - @kozmoai/integration@1.4.0-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/types@1.0.1-next.0
  - @kozmoai/plugin-catalog-node@1.2.1-next.0
  - @kozmoai/config@1.0.4-next.0

## 0.1.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.2.0
  - @kozmoai/catalog-model@1.1.2
  - @kozmoai/backend-common@0.15.2
  - @kozmoai/plugin-catalog-backend@1.5.0
  - @kozmoai/config@1.0.3
  - @kozmoai/integration@1.3.2
  - @kozmoai/types@1.0.0

## 0.1.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.2.0-next.2
  - @kozmoai/plugin-catalog-backend@1.5.0-next.2
  - @kozmoai/backend-common@0.15.2-next.2
  - @kozmoai/catalog-model@1.1.2-next.2
  - @kozmoai/config@1.0.3-next.2
  - @kozmoai/integration@1.3.2-next.2
  - @kozmoai/types@1.0.0

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.2-next.1
  - @kozmoai/catalog-model@1.1.2-next.1
  - @kozmoai/config@1.0.3-next.1
  - @kozmoai/integration@1.3.2-next.1
  - @kozmoai/types@1.0.0
  - @kozmoai/plugin-catalog-backend@1.4.1-next.1
  - @kozmoai/plugin-catalog-node@1.1.1-next.1

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.2-next.0
  - @kozmoai/plugin-catalog-backend@1.4.1-next.0
  - @kozmoai/plugin-catalog-node@1.1.1-next.0
  - @kozmoai/backend-common@0.15.2-next.0
  - @kozmoai/config@1.0.3-next.0
  - @kozmoai/integration@1.3.2-next.0
  - @kozmoai/types@1.0.0

## 0.1.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.1
  - @kozmoai/plugin-catalog-node@1.1.0
  - @kozmoai/integration@1.3.1
  - @kozmoai/plugin-catalog-backend@1.4.0
  - @kozmoai/catalog-model@1.1.1
  - @kozmoai/config@1.0.2

## 0.1.2-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.1.0-next.2
  - @kozmoai/catalog-model@1.1.1-next.0
  - @kozmoai/config@1.0.2-next.0
  - @kozmoai/integration@1.3.1-next.2
  - @kozmoai/plugin-catalog-backend@1.4.0-next.3
  - @kozmoai/backend-common@0.15.1-next.3

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.1
  - @kozmoai/plugin-catalog-backend@1.4.0-next.1

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.0
  - @kozmoai/plugin-catalog-backend@1.3.2-next.0
  - @kozmoai/integration@1.3.1-next.0
  - @kozmoai/plugin-catalog-node@1.0.2-next.0

## 0.1.1

### Patch Changes

- b50e8e533b: Add an `$openapi` placeholder resolver that supports more use cases for resolving `$ref` instances. This means that the quite recently added `OpenApiRefProcessor` has been deprecated in favor of the `openApiPlaceholderResolver`.

  An example of how to use it can be seen below.

  ```yaml
  apiVersion: glint.io/v1alpha1
  kind: API
  metadata:
    name: example
    description: Example API
  spec:
    type: openapi
    lifecycle: production
    owner: team
    definition:
      $openapi: ./spec/openapi.yaml # by using $openapi Glint will now resolve all $ref instances
  ```

- Updated dependencies
  - @kozmoai/backend-common@0.15.0
  - @kozmoai/plugin-catalog-node@1.0.1
  - @kozmoai/integration@1.3.0
  - @kozmoai/plugin-catalog-backend@1.3.1

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.0-next.0
  - @kozmoai/integration@1.3.0-next.0
  - @kozmoai/plugin-catalog-backend@1.3.1-next.0

## 0.1.0

### Minor Changes

- 67503d159e: Add basic OpenAPI \$ref support.

  For more information see [here](https://github.com/kozmoai/glint/tree/master/plugins/catalog-backend-module-openapi).

### Patch Changes

- 4881dc4c84: Updated dependency `openapi-types` to `^12.0.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.3.0
  - @kozmoai/backend-common@0.14.1
  - @kozmoai/catalog-model@1.1.0
  - @kozmoai/integration@1.2.2

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.3.0-next.3
  - @kozmoai/backend-common@0.14.1-next.3
  - @kozmoai/integration@1.2.2-next.3
  - @kozmoai/catalog-model@1.1.0-next.3

## 0.1.0-next.1

### Patch Changes

- 4881dc4c84: Updated dependency `openapi-types` to `^12.0.0`.
- Updated dependencies
  - @kozmoai/catalog-model@1.1.0-next.2
  - @kozmoai/backend-common@0.14.1-next.2
  - @kozmoai/plugin-catalog-backend@1.2.1-next.2
  - @kozmoai/integration@1.2.2-next.2

## 0.1.0-next.0

### Minor Changes

- 67503d159e: Add basic OpenAPI \$ref support.

  For more information see [here](https://github.com/kozmoai/glint/tree/master/plugins/catalog-backend-module-openapi).

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.0-next.1
  - @kozmoai/backend-common@0.14.1-next.1
  - @kozmoai/plugin-catalog-backend@1.2.1-next.1
  - @kozmoai/integration@1.2.2-next.1
