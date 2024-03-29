# @kozmoai/plugin-auth-backend-module-google-provider

## 0.1.11-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/plugin-auth-node@0.4.9-next.1

## 0.1.10-next.0

### Patch Changes

- 38af71a: Updated dependency `google-auth-library` to `^9.0.0`.
- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.8-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0

## 0.1.7

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.4
  - @kozmoai/backend-plugin-api@0.6.10

## 0.1.7-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.4-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3

## 0.1.7-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-auth-node@0.4.4-next.2

## 0.1.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/plugin-auth-node@0.4.4-next.1

## 0.1.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.4-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0

## 0.1.6

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/plugin-auth-node@0.4.3

## 0.1.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.2
  - @kozmoai/plugin-auth-node@0.4.3-next.2

## 0.1.6-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.3-next.1
  - @kozmoai/backend-plugin-api@0.6.9-next.1

## 0.1.6-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.0
  - @kozmoai/plugin-auth-node@0.4.3-next.0

## 0.1.5

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.2
  - @kozmoai/backend-plugin-api@0.6.8

## 0.1.5-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.8-next.3
  - @kozmoai/plugin-auth-node@0.4.2-next.3

## 0.1.5-next.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.2-next.2
  - @kozmoai/backend-plugin-api@0.6.8-next.2

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.8-next.1
  - @kozmoai/plugin-auth-node@0.4.2-next.1

## 0.1.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.2-next.0
  - @kozmoai/backend-plugin-api@0.6.8-next.0

## 0.1.4

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7
  - @kozmoai/plugin-auth-node@0.4.1

## 0.1.4-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.2
  - @kozmoai/plugin-auth-node@0.4.1-next.2

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.1-next.1
  - @kozmoai/backend-plugin-api@0.6.7-next.1

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.0
  - @kozmoai/plugin-auth-node@0.4.1-next.0

## 0.1.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.0
  - @kozmoai/backend-plugin-api@0.6.6

## 0.1.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.0-next.2
  - @kozmoai/backend-plugin-api@0.6.6-next.2

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.5-next.1
  - @kozmoai/plugin-auth-node@0.3.2-next.1

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.3.2-next.0
  - @kozmoai/backend-plugin-api@0.6.5-next.0

## 0.1.0

### Minor Changes

- 8513cd7d00e3: New module for `@kozmoai/plugin-auth-backend` that adds a Google auth provider.

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
  - @kozmoai/plugin-auth-node@0.3.0
  - @kozmoai/backend-plugin-api@0.6.3

## 0.1.0-next.3

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
  - @kozmoai/backend-plugin-api@0.6.3-next.3
  - @kozmoai/plugin-auth-node@0.3.0-next.3

## 0.1.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.3.0-next.2
  - @kozmoai/backend-plugin-api@0.6.3-next.2

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.3-next.1
  - @kozmoai/plugin-auth-node@0.3.0-next.1

## 0.1.0-next.0

### Minor Changes

- 8513cd7d00e3: New module for `@kozmoai/plugin-auth-backend` that adds a Google auth provider.

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.3.0-next.0
  - @kozmoai/backend-plugin-api@0.6.2-next.0
