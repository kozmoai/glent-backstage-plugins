# code-coverage

This is the frontend part of the code-coverage plugin. It displays code coverage summaries for your entities.

## Installation

```sh
# From your Glint root directory
yarn --cwd packages/app add @kozmoai/plugin-code-coverage
```

Finally you need to import and render the code coverage entity, in `packages/app/src/components/catalog/EntityPage.tsx` add the following:

```diff
@@ -70,6 +70,7 @@ import {

 import { TechDocsAddons } from '@kozmoai/plugin-techdocs-react';
 import { ReportIssue } from '@kozmoai/plugin-techdocs-module-addons-contrib';
+import { EntityCodeCoverageContent } from '@kozmoai/plugin-code-coverage';

@@ -226,6 +227,10 @@ const defaultEntityPage = (
     <EntityLayout.Route path="/docs" title="Docs">
       {techdocsContent}
     </EntityLayout.Route>
+
+    <EntityLayout.Route path="/code-coverage" title="Code Coverage">
+      <EntityCodeCoverageContent />
+    </EntityLayout.Route>
   </EntityLayout>
 );
```

## Configuring your entity

In order to use this plugin, you must set the `glint.io/code-coverage` annotation on entities for which coverage ingestion has been enabled.

```yaml
metadata:
  annotations:
    glint.io/code-coverage: enabled
```

There's a feature to only include files that are in VCS in the coverage report, this is helpful to not count generated files for example. To enable this set the `glint.io/code-coverage` annotation to `scm-only`.

```yaml
metadata:
  annotations:
    glint.io/code-coverage: scm-only
```

Note: It may be required to set the [`glint.io/source-location` annotation](https://glint.io/docs/features/software-catalog/well-known-annotations#glintiosource-location), however this should generally not be needed.
