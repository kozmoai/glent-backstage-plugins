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

import { Logger } from 'winston';
import type { KubernetesRequestBody } from '@kozmoai/plugin-kubernetes-common';
import { Config } from '@kozmoai/config';
import * as k8sTypes from '@kozmoai/plugin-kubernetes-node';

/**
 *
 * @public
 */
export type ServiceLocatorMethod = 'multiTenant' | 'singleTenant' | 'http'; // TODO implement http

/**
 *
 * @public
 */
export interface KubernetesObjectsProviderOptions {
  logger: Logger;
  config: Config;
  fetcher: k8sTypes.KubernetesFetcher;
  serviceLocator: k8sTypes.KubernetesServiceLocator;
  customResources: k8sTypes.CustomResource[];
  objectTypesToFetch?: k8sTypes.ObjectToFetch[];
}

/**
 *
 * @public
 */
export type ObjectsByEntityRequest = KubernetesRequestBody;

// TODO remove this re-export as a breaking change after a couple of releases
/**
 * @public @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type KubernetesObjectsProvider = k8sTypes.KubernetesObjectsProvider;

/**
 * @public @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type CustomResourcesByEntity = k8sTypes.CustomResourcesByEntity;

/**
 * @public
 * @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type AuthMetadata = k8sTypes.AuthMetadata;

/**
 * @public
 * @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type ClusterDetails = k8sTypes.ClusterDetails;

/**
 * @public
 * @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type KubernetesClustersSupplier = k8sTypes.KubernetesClustersSupplier;

/**
 * @public @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type KubernetesObjectTypes = k8sTypes.KubernetesObjectTypes;

/**
 * @public @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type ObjectToFetch = k8sTypes.ObjectToFetch;

/**
 * @public @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type CustomResource = k8sTypes.CustomResource;

/**
 * @public @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type ObjectFetchParams = k8sTypes.ObjectFetchParams;

/**
 * @public @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type FetchResponseWrapper = k8sTypes.FetchResponseWrapper;

/**
 * @public @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type KubernetesFetcher = k8sTypes.KubernetesFetcher;

/**
 * @public @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type ServiceLocatorRequestContext =
  k8sTypes.ServiceLocatorRequestContext;

/**
 * @public @deprecated Import it from \@kozmoai/plugin-kubernetes-node instead
 */
export type KubernetesServiceLocator = k8sTypes.KubernetesServiceLocator;
