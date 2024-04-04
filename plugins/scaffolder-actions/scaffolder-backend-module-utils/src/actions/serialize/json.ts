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

export function createSerializeJsonAction() {
  return createTemplateAction<{
    data: any;
    replacer?: string[];
    space?: string;
  }>({
    id: 'roadiehq:utils:serialize:json',
    description: 'Allows performing serialization on an object',
    supportsDryRun: true,
    schema: {
      input: {
        type: 'object',
        required: ['data'],
        properties: {
          data: {
            title: 'Data',
            description: 'Input data to perform seriazation on.',
            type: 'object',
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
        type: 'string',
        properties: {
          serialized: {
            title: 'Output result from serialization',
            type: 'string',
          },
        },
      },
    },

    async handler(ctx) {
      ctx.output(
        'serialized',
        JSON.stringify(ctx.input.data, ctx.input.replacer, ctx.input.space),
      );
    },
  });
}
