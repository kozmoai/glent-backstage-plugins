# @kozmoai/plugin-tech-insights-common

## 0.2.12

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- Updated dependencies
  - @kozmoai/types@1.1.1

## 0.2.12-next.0

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- Updated dependencies
  - @kozmoai/types@1.1.1-next.0

## 0.2.11

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.1.0

## 0.2.10

### Patch Changes

- 4024b37449: TechInsightsApi interface now has getFactSchemas() method.
  TechInsightsClient now implements method getFactSchemas().

  **BREAKING** FactSchema type moved from @kozmoai/plugin-tech-insights-node into @kozmoai/plugin-tech-insights-common

  These changes are **required** if you were importing this type directly.

  ```diff
  - import { FactSchema } from '@kozmoai/plugin-tech-insights-node';
  + import { FactSchema } from '@kozmoai/plugin-tech-insights-common';
  ```

- Updated dependencies
  - @kozmoai/types@1.0.2

## 0.2.10-next.0

### Patch Changes

- 4024b37449: TechInsightsApi interface now has getFactSchemas() method.
  TechInsightsClient now implements method getFactSchemas().

  **BREAKING** FactSchema type moved from @kozmoai/plugin-tech-insights-node into @kozmoai/plugin-tech-insights-common

  These changes are **required** if you were importing this type directly.

  ```diff
  - import { FactSchema } from '@kozmoai/plugin-tech-insights-node';
  + import { FactSchema } from '@kozmoai/plugin-tech-insights-common';
  ```

- Updated dependencies
  - @kozmoai/types@1.0.2

## 0.2.9

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.2

## 0.2.9-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.2-next.1

## 0.2.9-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.2-next.0

## 0.2.8

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.1

## 0.2.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.1-next.0

## 0.2.7

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.0

## 0.2.7-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.0

## 0.2.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.0

## 0.2.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.0

## 0.2.6

### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## 0.2.6-next.0

### Patch Changes

- 29f782eb37: Updated dependency `@types/luxon` to `^3.0.0`.

## 0.2.5

### Patch Changes

- 4e9a90e307: Updated dependency `luxon` to `^3.0.0`.

## 0.2.5-next.0

### Patch Changes

- 4e9a90e307: Updated dependency `luxon` to `^3.0.0`.

## 0.2.4

### Patch Changes

- Updated dependencies
  - @kozmoai/types@1.0.0

## 0.2.3

### Patch Changes

- Fix for the previous release with missing type declarations.
- Updated dependencies
  - @kozmoai/types@0.1.3

## 0.2.2

### Patch Changes

- c77c5c7eb6: Added `glint.role` to `package.json`
- Updated dependencies
  - @kozmoai/types@0.1.2

## 0.2.1

### Patch Changes

- a60eb0f0dd: adding new operation to run checks for multiple entities in one request

## 0.2.0

### Minor Changes

- b5bd60fddc: Added new property 'result' in CheckResult in @kozmoai/plugin-tech-insights-common. This property is later used in `@kozmoai/plugin-tech-insights` package.
