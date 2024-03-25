/*
 * Copyright 2021 Larder Software Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { DynamoDB, paginateListTables } from '@aws-sdk/client-dynamodb';
import { Config } from '@backstage/config';
import * as winston from 'winston';
import { AWSEntityProvider } from './AWSEntityProvider';
import { ResourceEntity } from '@backstage/catalog-model';
import { ANNOTATION_AWS_DDB_TABLE_ARN } from '../annotations';
import { arnToName } from '../utils/arnToName';

/**
 * Provides entities from AWS DynamoDB service.
 */
export class AWSDynamoDbTableProvider extends AWSEntityProvider {
  static fromConfig(
    config: Config,
    options: { logger: winston.Logger; providerId?: string },
  ) {
    const accountId = config.getString('accountId');
    const roleArn = config.getString('roleArn');
    const externalId = config.getOptionalString('externalId');
    const region = config.getString('region');

    return new AWSDynamoDbTableProvider(
      { accountId, roleArn, externalId, region },
      options,
    );
  }

  getProviderName(): string {
    return `aws-dynamo-db-table-${this.accountId}-${this.providerId ?? 0}`;
  }

  async run(): Promise<void> {
    if (!this.connection) {
      throw new Error('Not initialized');
    }

    const credentials = this.getCredentials();
    const ddb = new DynamoDB({ credentials });
    const defaultAnnotations = await this.buildDefaultAnnotations();

    this.logger.info(
      `Retrieving all DynamoDB tables for account ${this.accountId}`,
    );

    const paginatorConfig = {
      client: ddb,
      pageSize: 25,
    };

    const tablePages = paginateListTables(paginatorConfig, {});

    let ddbComponents: ResourceEntity[] = [];
    for await (const tablePage of tablePages) {
      if (!tablePage.TableNames) {
        continue;
      }
      const newComponents = (
        await Promise.all(
          tablePage.TableNames.map(async tableName => {
            const tableDescriptionResult = await ddb.describeTable({
              TableName: tableName,
            });
            const table = tableDescriptionResult.Table;
            if (table && table.TableName && table.TableArn) {
              const component: ResourceEntity = {
                kind: 'Resource',
                apiVersion: 'backstage.io/v1beta1',
                metadata: {
                  annotations: {
                    ...defaultAnnotations,
                    [ANNOTATION_AWS_DDB_TABLE_ARN]: table.TableArn,
                  },
                  name: arnToName(table.TableArn),
                  title: table.TableName,
                },
                spec: {
                  owner: this.accountId,
                  type: 'dynamo-db-table',
                },
              };
              return component;
            }
            return null;
          }),
        )
      )
        .filter(it => it)
        .map(it => it!);
      ddbComponents = ddbComponents.concat(...newComponents);
    }

    await this.connection.applyMutation({
      type: 'full',
      entities: ddbComponents.map(entity => ({
        entity,
        locationKey: this.getProviderName(),
      })),
    });
  }
}
