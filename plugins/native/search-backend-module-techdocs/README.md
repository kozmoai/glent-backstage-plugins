# search-backend-module-techdocs

This package exports a module that extends the search backend to also index techdocs.

## Installation

Add the module package as a dependency:

```bash
# From your Glint root directory
yarn --cwd packages/backend add @kozmoai/plugin-search-backend-module-techdocs
```

Add the collator to your backend instance, along with the search plugin itself:

```tsx
// packages/backend/src/index.ts
import { createBackend } from '@kozmoai/backend-defaults';
import { searchPlugin } from '@kozmoai/plugin-search-backend/alpha';
import { searchModuleTechDocsCollator } from '@kozmoai/plugin-search-backend-module-techdocs/alpha';

const backend = createBackend();
backend.add(searchPlugin());
backend.add(searchModuleTechDocsCollator());
backend.start();
```

You may also want to add configuration parameters to your app-config, for example for controlling the scheduled indexing interval. These parameters should be placed under the `search.collators.techdocs` key. See [the config definition file](https://github.com/kozmoai/glint/blob/master/plugins/search-backend-module-techdocs/config.d.ts) for more details.
