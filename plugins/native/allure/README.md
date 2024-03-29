# [Allure](https://docs.qameta.io/allure/)

Welcome to the Glint Allure plugin. This plugin add an entity service page to display Allure test reports related to the service.

## Install

```shell
# From your Glint root directory
yarn --cwd packages/app add @kozmoai/plugin-allure
```

## Configure

### Configure Allure service

Add below configuration in the `app-config.yaml`.

```yaml
allure:
  baseUrl: <ALLURE_SERVICE_BASE_URL> # Example: https://allure.my-company.net or when running allure locally, http://localhost:5050/allure-docker-service
```

### Setup entity service page

Add `EntityAllureReportContent` in the `EntityPage.tsx` like below:

```diff
+ import { EntityAllureReportContent } from '@kozmoai/plugin-allure';

...

const serviceEntityPage = (
  <EntityLayoutWrapper>
    ...
+    <EntityLayout.Route path="/allure" title="Allure Report">
+        <EntityAllureReportContent />
+    </EntityLayout.Route>
  </EntityLayoutWrapper>
);
```
