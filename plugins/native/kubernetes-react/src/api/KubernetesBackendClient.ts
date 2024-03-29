/*
 * Copyright 2024 The Kozmoai Authors
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

import { KubernetesApi } from './types';
import {
  KubernetesRequestBody,
  ObjectsByEntityResponse,
  WorkloadsByEntityRequest,
  CustomObjectsByEntityRequest,
} from '@kozmoai/plugin-kubernetes-common';
import { DiscoveryApi, IdentityApi } from '@kozmoai/core-plugin-api';
import { stringifyEntityRef } from '@kozmoai/catalog-model';
import { KubernetesAuthProvidersApi } from '../kubernetes-auth-provider';
import { NotFoundError } from '@kozmoai/errors';

/** @public */
export class KubernetesBackendClient implements KubernetesApi {
  private readonly discoveryApi: DiscoveryApi;
  private readonly identityApi: IdentityApi;
  private readonly kubernetesAuthProvidersApi: KubernetesAuthProvidersApi;

  constructor(options: {
    discoveryApi: DiscoveryApi;
    identityApi: IdentityApi;
    kubernetesAuthProvidersApi: KubernetesAuthProvidersApi;
  }) {
    this.discoveryApi = options.discoveryApi;
    this.identityApi = options.identityApi;
    this.kubernetesAuthProvidersApi = options.kubernetesAuthProvidersApi;
  }

  private async handleResponse(response: Response): Promise<any> {
    if (!response.ok) {
      const payload = await response.text();
      let message;
      switch (response.status) {
        case 404:
          message =
            'Could not find the Kubernetes Backend (HTTP 404). Make sure the plugin has been fully installed.';
          break;
        default:
          message = `Request failed with ${response.status} ${response.statusText}, ${payload}`;
      }
      throw new Error(message);
    }

    return await response.json();
  }

  private async postRequired(path: string, requestBody: any): Promise<any> {
    const url = `${await this.discoveryApi.getBaseUrl('kubernetes')}${path}`;
    const { token: idToken } = await this.identityApi.getCredentials();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(idToken && { Authorization: `Bearer ${idToken}` }),
      },
      body: JSON.stringify(requestBody),
    });

    return this.handleResponse(response);
  }

  public async getCluster(clusterName: string): Promise<{
    name: string;
    authProvider: string;
    oidcTokenProvider?: string;
  }> {
    const cluster = await this.getClusters().then(clusters =>
      clusters.find(c => c.name === clusterName),
    );
    if (!cluster) {
      throw new NotFoundError(`Cluster ${clusterName} not found`);
    }

    return cluster;
  }

  private async getCredentials(
    authProvider: string,
    oidcTokenProvider?: string,
  ): Promise<{ token?: string }> {
    return await this.kubernetesAuthProvidersApi.getCredentials(
      authProvider === 'oidc'
        ? `${authProvider}.${oidcTokenProvider}`
        : authProvider,
    );
  }

  async getObjectsByEntity(
    requestBody: KubernetesRequestBody,
  ): Promise<ObjectsByEntityResponse> {
    return await this.postRequired(
      `/services/${requestBody.entity.metadata.name}`,
      requestBody,
    );
  }

  async getWorkloadsByEntity(
    request: WorkloadsByEntityRequest,
  ): Promise<ObjectsByEntityResponse> {
    return await this.postRequired('/resources/workloads/query', {
      auth: request.auth,
      entityRef: stringifyEntityRef(request.entity),
    });
  }

  async getCustomObjectsByEntity(
    request: CustomObjectsByEntityRequest,
  ): Promise<ObjectsByEntityResponse> {
    return await this.postRequired(`/resources/custom/query`, {
      entityRef: stringifyEntityRef(request.entity),
      auth: request.auth,
      customResources: request.customResources,
    });
  }

  async getClusters(): Promise<{ name: string; authProvider: string }[]> {
    const { token: idToken } = await this.identityApi.getCredentials();
    const url = `${await this.discoveryApi.getBaseUrl('kubernetes')}/clusters`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...(idToken && { Authorization: `Bearer ${idToken}` }),
      },
    });

    return (await this.handleResponse(response)).items;
  }

  async proxy(options: {
    clusterName: string;
    path: string;
    init?: RequestInit;
  }): Promise<Response> {
    const { authProvider, oidcTokenProvider } = await this.getCluster(
      options.clusterName,
    );
    const kubernetesCredentials = await this.getCredentials(
      authProvider,
      oidcTokenProvider,
    );
    const url = `${await this.discoveryApi.getBaseUrl('kubernetes')}/proxy${
      options.path
    }`;
    const identityResponse = await this.identityApi.getCredentials();
    const headers = KubernetesBackendClient.getKubernetesHeaders(
      options,
      kubernetesCredentials?.token,
      identityResponse,
      authProvider,
      oidcTokenProvider,
    );
    return await fetch(url, { ...options.init, headers });
  }

  private static getKubernetesHeaders(
    options: {
      clusterName: string;
      path: string;
      init?: RequestInit;
    },
    k8sToken: string | undefined,
    identityResponse: { token?: string },
    authProvider: string,
    oidcTokenProvider: string | undefined,
  ) {
    const kubernetesAuthHeader =
      KubernetesBackendClient.getKubernetesAuthHeaderByAuthProvider(
        authProvider,
        oidcTokenProvider,
      );
    return {
      ...options.init?.headers,
      [`Glint-Kubernetes-Cluster`]: options.clusterName,
      ...(k8sToken && {
        [kubernetesAuthHeader]: k8sToken,
      }),
      ...(identityResponse.token && {
        Authorization: `Bearer ${identityResponse.token}`,
      }),
    };
  }

  private static getKubernetesAuthHeaderByAuthProvider(
    authProvider: string,
    oidcTokenProvider: string | undefined,
  ): string {
    let header: string = 'Glint-Kubernetes-Authorization';

    header = header.concat('-', authProvider);

    if (oidcTokenProvider) header = header.concat('-', oidcTokenProvider);

    return header;
  }
}
