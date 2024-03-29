# @kozmoai/plugin-auth-backend-module-microsoft-provider

## 0.1.9-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/plugin-auth-node@0.4.9-next.1

## 0.1.8-next.0

### Patch Changes

- 2af5354: Bump dependency `jose` to v5
- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.8-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0

## 0.1.5

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- 1ff2684: Added the possibility to use custom scopes for performing login with Microsoft EntraID.
- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.4
  - @kozmoai/backend-plugin-api@0.6.10

## 0.1.5-next.3

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.4-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3

## 0.1.5-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-auth-node@0.4.4-next.2

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/plugin-auth-node@0.4.4-next.1

## 0.1.5-next.0

### Patch Changes

- 1ff2684: Added the possibility to use custom scopes for performing login with Microsoft EntraID.
- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.4-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0

## 0.1.4

### Patch Changes

- 928efbc: Deprecated the `authModuleMicrosoftProvider` export. A default export is now available and should be used like this in your backend: `backend.add(import('@kozmoai/plugin-auth-backend-module-microsoft-provider'));`
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/plugin-auth-node@0.4.3

## 0.1.4-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.2
  - @kozmoai/plugin-auth-node@0.4.3-next.2

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.4.3-next.1
  - @kozmoai/backend-plugin-api@0.6.9-next.1

## 0.1.4-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.0
  - @kozmoai/plugin-auth-node@0.4.3-next.0

## 0.1.3

### Patch Changes

- a62764b: Updated dependency `passport` to `^0.7.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/plugin-auth-node@0.4.2
  - @kozmoai/backend-plugin-api@0.6.8

## 0.1.3-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/backend-plugin-api@0.6.8-next.3
  - @kozmoai/plugin-auth-node@0.4.2-next.3

## 0.1.3-next.2

### Patch Changes

- a62764b: Updated dependency `passport` to `^0.7.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.2
  - @kozmoai/plugin-auth-node@0.4.2-next.2
  - @kozmoai/backend-plugin-api@0.6.8-next.2

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.1
  - @kozmoai/plugin-auth-node@0.4.2-next.1

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.0
  - @kozmoai/plugin-auth-node@0.4.2-next.0
  - @kozmoai/backend-plugin-api@0.6.8-next.0

## 0.1.2

### Patch Changes

- a3236ad0ca: Fix link to the repository in `README.md`.
- 3979524c74: Added support for specifying a domain hint on the Microsoft authentication provider configuration.
- fde212dd10: Re-add the missing profile photo
  as well as access token retrieval for foreign scopes.

  Additionally, we switch from previously 48x48 to 96x96
  which is the size used at the profile card.

- 5aeb14f035: Correctly mark the client secret in configuration as secret
- 2817115d09: Removed `prompt=consent` from start method to fix #20641
- Updated dependencies
  - @kozmoai/backend-common@0.19.9
  - @kozmoai/backend-plugin-api@0.6.7
  - @kozmoai/plugin-auth-node@0.4.1

## 0.1.2-next.2

### Patch Changes

- [#20706](https://github.com/kozmoai/glint/pull/20706) [`fde212dd10`](https://github.com/kozmoai/glint/commit/fde212dd106e507c4a808e5ed8213e29d7338420) Thanks [@pjungermann](https://github.com/pjungermann)! - Re-add the missing profile photo
  as well as access token retrieval for foreign scopes.

  Additionally, we switch from previously 48x48 to 96x96
  which is the size used at the profile card.

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.2
  - @kozmoai/backend-common@0.19.9-next.2
  - @kozmoai/plugin-auth-node@0.4.1-next.2

## 0.1.2-next.1

### Patch Changes

- 3979524c74: Added support for specifying a domain hint on the Microsoft authentication provider configuration.
- 5aeb14f035: Correctly mark the client secret in configuration as secret
- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.1
  - @kozmoai/plugin-auth-node@0.4.1-next.1
  - @kozmoai/backend-plugin-api@0.6.7-next.1

## 0.1.2-next.0

### Patch Changes

- 2817115d09: Removed `prompt=consent` from start method to fix #20641
- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.0
  - @kozmoai/backend-plugin-api@0.6.7-next.0
  - @kozmoai/plugin-auth-node@0.4.1-next.0

## 0.1.0

### Minor Changes

- 2d8f7e82c1: Migrated the Microsoft auth provider to new `@kozmoai/plugin-auth-backend-module-microsoft-provider` module package.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8
  - @kozmoai/plugin-auth-node@0.4.0
  - @kozmoai/backend-plugin-api@0.6.6

## 0.1.0-next.0

### Minor Changes

- 2d8f7e82c1: Migrated the Microsoft auth provider to new `@kozmoai/plugin-auth-backend-module-microsoft-provider` module package.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8-next.2
  - @kozmoai/plugin-auth-node@0.4.0-next.2
  - @kozmoai/backend-plugin-api@0.6.6-next.2
