/*
 * Copyright 2022 The Glint Authors
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

jest.mock('@kozmoai/plugin-scaffolder-node', () => {
  return {
    ...jest.requireActual('@kozmoai/plugin-scaffolder-node'),
    commitAndPushRepo: jest.fn(),
  };
});

import { createPublishGerritReviewAction } from './gerritReview';
import { ScmIntegrations } from '@kozmoai/integration';
import { ConfigReader } from '@kozmoai/config';
import { commitAndPushRepo } from '@kozmoai/plugin-scaffolder-node';
import { createMockActionContext } from '@kozmoai/plugin-scaffolder-node-test-utils';

describe('publish:gerrit:review', () => {
  const config = new ConfigReader({
    integrations: {
      gerrit: [
        {
          host: 'gerrithost.org',
          username: 'gerrituser',
          password: 'usertoken',
        },
      ],
    },
  });

  const integrations = ScmIntegrations.fromConfig(config);
  const action = createPublishGerritReviewAction({ integrations, config });
  const mockContext = createMockActionContext({
    input: {
      repoUrl:
        'gerrithost.org?owner=owner&workspace=parent&project=project&repo=repo',
      gitCommitMessage: 'Review from glint',
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should throw an error when the repoUrl is not well formed', async () => {
    await expect(
      action.handler({
        ...mockContext,
        input: {
          repoUrl: 'gerrithost.org?workspace=w&owner=o',
        },
      }),
    ).rejects.toThrow(/missing repo/);
  });

  it('should throw an error when no commit message is provided', async () => {
    await expect(
      action.handler({
        ...mockContext,
        input: { repoUrl: 'gerrithost.org?workspace=w&owner=o&repo=r' },
      }),
    ).rejects.toThrow(/Missing gitCommitMessage input/);
  });

  it('should throw if there is no integration config provided', async () => {
    await expect(
      action.handler({
        ...mockContext,
        input: {
          repoUrl: 'missing.com?workspace=w&owner=o&repo=repo',
        },
      }),
    ).rejects.toThrow(/No matching integration configuration/);
  });

  it('can correctly create a review', async () => {
    expect.assertions(3);

    await action.handler(mockContext);

    expect(commitAndPushRepo).toHaveBeenCalledWith({
      dir: mockContext.workspacePath,
      auth: { username: 'gerrituser', password: 'usertoken' },
      logger: mockContext.logger,
      commitMessage: expect.stringContaining(
        'Review from glint\n\nChange-Id:',
      ),
      gitAuthorInfo: {},
      branch: 'master',
      remoteRef: 'refs/for/master',
    });

    expect(mockContext.output).toHaveBeenCalledWith(
      'repoContentsUrl',
      'https://gerrithost.org/repo/+/refs/heads/master',
    );
    expect(mockContext.output).toHaveBeenCalledWith(
      'reviewUrl',
      expect.stringMatching(new RegExp('^https://gerrithost.org/#/q/I')),
    );
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
});
