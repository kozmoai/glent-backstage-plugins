/*
 * Copyright 2023 Larder Software Limited
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

import { getVoidLogger } from '@backstage/backend-common';
import { createYamlJSONataTransformAction } from './yaml';
import { PassThrough } from 'stream';
import mock from 'mock-fs';
import YAML from 'yaml';

describe('kozmoai:utils:jsonata:yaml:transform', () => {
  const mockContext = {
    workspacePath: 'lol',
    logger: getVoidLogger(),
    logStream: new PassThrough(),
    output: jest.fn(),
    createTemporaryDirectory: jest.fn(),
  };

  beforeEach(() => {
    mockContext.output.mockReset();
    mock({
      'fake-tmp-dir': {},
    });
  });
  afterEach(() => mock.restore());

  const action = createYamlJSONataTransformAction();

  it('should output default string result of having applied the given transformation', async () => {
    mock({
      'fake-tmp-dir': {
        'fake-file.yaml': 'hello: [world]',
      },
    });
    await action.handler({
      ...mockContext,
      workspacePath: 'fake-tmp-dir',
      input: {
        path: 'fake-file.yaml',
        expression: '$ ~> | $ | { "hello": [hello, "item2"] }|',
      },
    });

    expect(mockContext.output).toHaveBeenCalledWith(
      'result',
      YAML.stringify({ hello: ['world', 'item2'] }),
    );
  });

  it('should output string result of having applied the given transformation', async () => {
    mock({
      'fake-tmp-dir': {
        'fake-file.yaml': 'hello: [world]',
      },
    });
    await action.handler({
      ...mockContext,
      workspacePath: 'fake-tmp-dir',
      input: {
        path: 'fake-file.yaml',
        expression: '$ ~> | $ | { "hello": [hello, "item2"] }|',
        as: 'string',
      },
    });

    expect(mockContext.output).toHaveBeenCalledWith(
      'result',
      YAML.stringify({ hello: ['world', 'item2'] }),
    );
  });

  it('should pass options to YAML.stringify', async () => {
    mock({
      'fake-tmp-dir': {
        'fake-file.yaml': '',
      },
    });

    const opts = {
      indent: 3,
      noArrayIndent: true,
      skipInvalid: true,
      flowLevel: 23,
      sortKeys: true,
      lineWidth: -1,
      noRefs: true,
      noCompatMode: true,
      condenseFlow: true,
      quotingType: '"' as const,
      forceQuotes: true,
    };

    await action.handler({
      ...mockContext,
      workspacePath: 'fake-tmp-dir',
      input: {
        path: 'fake-file.yaml',
        expression: '{ "hello": "beautiful world", "foo": {"bar":"deep"} }',
        options: opts,
      },
    });

    expect(mockContext.output).toHaveBeenCalledWith(
      'result',
      YAML.stringify({ hello: 'beautiful world', foo: { bar: 'deep' } }, opts),
    );
  });

  it('should output object result of having applied the given transformation', async () => {
    mock({
      'fake-tmp-dir': {
        'fake-file.yaml': 'hello: [world]',
      },
    });
    await action.handler({
      ...mockContext,
      workspacePath: 'fake-tmp-dir',
      input: {
        path: 'fake-file.yaml',
        expression: '$ ~> | $ | { "hello": [hello, "item2"] }|',
        as: 'object',
      },
    });

    expect(mockContext.output).toHaveBeenCalledWith('result', {
      hello: ['world', 'item2'],
    });
  });

  it('should be able to handle multi yaml and apply a transformation', async () => {
    mock({
      'fake-tmp-dir': {
        'fake-file.yaml': '---\nhello: [world]\n---\nfoo: [bar]',
      },
    });
    await action.handler({
      ...mockContext,
      workspacePath: 'fake-tmp-dir',
      input: {
        path: 'fake-file.yaml',
        expression: '$[0]',
        loadAll: true,
        as: 'object',
      },
    });

    expect(mockContext.output).toHaveBeenCalledWith('result', {
      hello: ['world'],
    });
  });
});
