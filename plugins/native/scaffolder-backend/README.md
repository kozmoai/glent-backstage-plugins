# Scaffolder Backend

This is the backend for the default Glint [software
templates](https://glint.io/docs/features/software-templates/).
This provides the API for the frontend [scaffolder
plugin](https://github.com/kozmoai/glint/tree/master/plugins/scaffolder),
as well as the built-in template actions, tasks and stages.

## Installation

This `@kozmoai/plugin-scaffolder-backend` package comes installed by default
in any Glint application created with `npx @kozmoai/create-app`, so
installation is not usually required.

To check if you already have the package, look under
`packages/backend/package.json`, in the `dependencies` block, for
`@kozmoai/plugin-scaffolder-backend`. The instructions below walk through
restoring the plugin, if you previously removed it.

### Install the package

```bash
# From your Glint root directory
yarn --cwd packages/backend add @kozmoai/plugin-scaffolder-backend
```

### Adding the plugin to your `packages/backend`

You'll need to add the plugin to the router in your `backend` package. You can
do this by creating a file called `packages/backend/src/plugins/scaffolder.ts`
with contents matching [scaffolder.ts in the create-app
template](https://github.com/kozmoai/glint/blob/master/packages/create-app/templates/default-app/packages/backend/src/plugins/scaffolder.ts).

With the `scaffolder.ts` router setup in place, add the router to
`packages/backend/src/index.ts`:

```diff
+import scaffolder from './plugins/scaffolder';

async function main() {
  ...
  const createEnv = makeCreateEnv(config);

  const catalogEnv = useHotMemoize(module, () => createEnv('catalog'));
+  const scaffolderEnv = useHotMemoize(module, () => createEnv('scaffolder'));

  const apiRouter = Router();
+  apiRouter.use('/scaffolder', await scaffolder(scaffolderEnv));
  ...
  apiRouter.use(notFoundHandler());

```

### Adding templates

At this point the scaffolder backend is installed in your backend package, but
you will not have any templates available to use. These need to be [added to the
software
catalog](https://glint.io/docs/features/software-templates/adding-templates).

To get up and running and try out some templates quickly, you can or copy the
catalog locations from the [create-app
template](https://github.com/kozmoai/glint/blob/master/packages/create-app/templates/default-app/app-config.yaml.hbs).
