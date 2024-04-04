/*
 * Copyright 2022 Larder Software Limited
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
import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';
import jsonata from 'jsonata';
import { resolveSafeChildPath } from '@backstage/backend-common';
import fs from 'fs-extra';

export function createJsonJSONataTransformAction() {
  return createTemplateAction<{
    path: string;
    expression: string;
    replacer?: string[];
    space?: string;
    as?: 'string' | 'object';
  }>({
    id: 'kozmoai:utils:jsonata:json:transform',
    description:
      'Allows performing JSONata operations and transformations on a JSON file in the workspace. The result can be read from the `result` step output.',
    supportsDryRun: true,
    schema: {
      input: {
        type: 'object',
        required: ['path', 'expression'],
        properties: {
          path: {
            title: 'Path',
            description: 'Input path to read json file',
            type: 'string',
          },
          expression: {
            title: 'Expression',
            description: 'JSONata expression to perform on the input',
            type: 'string',
          },
          as: {
            title: 'Desired Result Type',
            description:
              'Permitted values are: "string" (default) and "object"',
            type: 'string',
            enum: ['string', 'object'],
          },
          replacer: {
            title: 'Replacer',
            description: 'Replacer array',
            type: 'array',
            items: {
              type: 'string',
            },
          },
          space: {
            title: 'Space',
            description: 'Space character',
            type: 'string',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          result: {
            title: 'Output result from JSONata',
            type: 'object | string',
          },
        },
      },
    },
    async handler(ctx) {
      let resultHandler: (rz: any) => any;

      if (ctx.input.as === 'object') {
        resultHandler = rz => rz;
      } else {
        resultHandler = rz =>
          JSON.stringify(rz, ctx.input.replacer, ctx.input.space);
      }
      const sourceFilepath = resolveSafeChildPath(
        ctx.workspacePath,
        ctx.input.path,
      );

      const data = JSON.parse(fs.readFileSync(sourceFilepath).toString());
      const expression = jsonata(ctx.input.expression);
      const result = expression.evaluate(data);

      ctx.output('result', resultHandler(result));
    },
  });
}
