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
import { parseRepoPickerUrl, serializeRepoPickerUrl } from './utils';

describe('utils', () => {
  describe('serializeRepoPickerUrl', () => {
    it('should return undefined when host is not set', () => {
      expect(serializeRepoPickerUrl({})).toBeUndefined();
    });

    it('should set the correct owner and repo', () => {
      expect(
        serializeRepoPickerUrl({
          host: 'github.com',
          owner: 'owner',
          repoName: 'glint',
        }),
      ).toBe('github.com?owner=owner&repo=glint');
    });

    it('should set correct other options', () => {
      expect(
        serializeRepoPickerUrl({
          host: 'github.com',
          organization: 'organization',
          workspace: 'workspace',
          project: 'glint',
        }),
      ).toBe(
        'github.com?organization=organization&workspace=workspace&project=glint',
      );
    });

    it('should set all correct options', () => {
      expect(
        serializeRepoPickerUrl({
          host: 'github.com',
          owner: 'owner',
          repoName: 'glint',
          organization: 'organization',
          workspace: 'workspace',
          project: 'glint',
        }),
      ).toBe(
        'github.com?owner=owner&repo=glint&organization=organization&workspace=workspace&project=glint',
      );
    });
  });

  describe('parseRepoPickerUrl', () => {
    it('should parse a complete string', () => {
      expect(
        parseRepoPickerUrl(
          'github.com?owner=owner&repo=glint&organization=organization&workspace=workspace&project=glint',
        ),
      ).toEqual({
        host: 'github.com',
        owner: 'owner',
        repoName: 'glint',
        organization: 'organization',
        workspace: 'workspace',
        project: 'glint',
      });
    });
  });
});
