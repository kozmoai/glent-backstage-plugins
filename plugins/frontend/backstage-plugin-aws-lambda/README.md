# AWS Lambda Plugin

![preview of Lambda Widget](./docs/lambda-widget.png)

## Features

- AWS Lambda function overview card

## Plugin Setup

1. Install the plugin in the `packages/app` directory

```bash
yarn add @kozmoai/backstage-plugin-aws-lambda
```

2. Add widget component to your Backstage instance:

```ts
// packages/app/src/components/catalog/EntityPage.tsx
import {
  EntityAWSLambdaOverviewCard,
  isAWSLambdaAvailable
} from '@kozmoai/backstage-plugin-aws-lambda';

...

const overviewContent = (
  <Grid container spacing={3} alignItems="stretch">
   <EntitySwitch>
      <EntitySwitch.Case if={e => Boolean(isAWSLambdaAvailable(e))}>
        <Grid item md={6}>
          <EntityAWSLambdaOverviewCard />
        </Grid>
      </EntitySwitch.Case>
   </EntitySwitch>
  </Grid>
);
```

## Authentication

In order to perform requests to AWS lambda plugin first asks backend for temporary credentials via /api/aws/credentials

(it uses @kozmoai/backstage-plugin-aws-auth backend plugin)

Optionally, you can provide a Role ARN to the entity card to instruct it to request credentials for that particular role to pull the lambda information. The AWS user was have IAM permissions to `sts:AssumeRole` the providing role:

```ts
const overviewContent = (
  <Grid container spacing={3} alignItems="stretch">
    <EntitySwitch>
      <EntitySwitch.Case if={e => Boolean(isAWSLambdaAvailable(e))}>
        <Grid item md={6}>
          <EntityAWSLambdaOverviewCard
            roleArn={'arn:aws:iam::000000000000:role/roleName'}
          />
        </Grid>
      </EntitySwitch.Case>
    </EntitySwitch>
  </Grid>
);
```

Regardless of what auth method you use - you can also decide what function to show in the table (what function particular service uses) by annotating backstage.yaml with a name of the function, like:

```yaml
metadata:
  annotations:
    aws.com/lambda-function-name: HelloWorld
    aws.com/lambda-region: us-east-1
```

Make sure you have AWS auth backend plugin installed in your backstage backend (installation guide in the readme https://github.com/kozmoai/backstage-plugin-aws-auth)

## Links

- [Backstage](https://backstage.io)
- Get hosted, managed Backstage for your company: https://kozmo.io
