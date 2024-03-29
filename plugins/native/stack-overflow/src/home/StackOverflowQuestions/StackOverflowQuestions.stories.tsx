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

import { HomePageStackOverflowQuestions } from '../../plugin';
import { wrapInTestApp, TestApiProvider } from '@kozmoai/test-utils';
import { configApiRef } from '@kozmoai/core-plugin-api';
import { ConfigReader } from '@kozmoai/config';
import { Grid } from '@material-ui/core';
import React, { ComponentType, PropsWithChildren } from 'react';
import { StackOverflowIcon } from '../../icons';
import { stackOverflowApiRef } from '../../api';

const mockStackOverflowApi = {
  listQuestions: async () => [
    {
      title: 'Customizing Spotify glint UI',
      link: 'stackoverflow.question/1',
      answer_count: 0,
      tags: ['glint'],
      owner: { 'some owner': 'name' },
    },
    {
      title: 'Customizing Spotify glint UI',
      link: 'stackoverflow.question/1',
      answer_count: 0,
      tags: ['glint'],
      owner: { 'some owner': 'name' },
    },
  ],
};

export default {
  title: 'Plugins/Home/Components/StackOverflow',
  component: HomePageStackOverflowQuestions,
  decorators: [
    (Story: ComponentType<PropsWithChildren<{}>>) =>
      wrapInTestApp(
        <>
          <TestApiProvider
            apis={[
              [
                configApiRef,
                new ConfigReader({
                  stackoverflow: {
                    baseUrl: 'https://api.stackexchange.com/2.2',
                  },
                }),
              ],
              [stackOverflowApiRef, mockStackOverflowApi],
            ]}
          >
            <Story />
          </TestApiProvider>
        </>,
      ),
  ],
};

export const Default = () => {
  return (
    <Grid item xs={12} md={6}>
      <HomePageStackOverflowQuestions
        requestParams={{
          tagged: 'glint',
          site: 'stackoverflow',
          pagesize: 5,
        }}
      />
    </Grid>
  );
};

export const WithIcon = () => {
  return (
    <Grid item xs={12} md={6}>
      <HomePageStackOverflowQuestions
        requestParams={{
          tagged: 'glint',
          site: 'stackoverflow',
          pagesize: 5,
        }}
        icon={<StackOverflowIcon />}
      />
    </Grid>
  );
};
