# Kubernetes

Welcome to the Glint Kubernetes frontend plugin!

This plugin exposes information about your entity-specific Kubernetes objects with a desire to provide value to the service owner, rather than just a Kubernetes cluster administrator.

It will elevate the visibility of errors where identified, and provide drill down about the deployments, pods, and other objects for a service.

It directly interfaces with the [Kubernetes Backend Plugin (`@glint-plugin-kubernetes-backend`)](https://github.com/kozmoai/glint/tree/master/plugins/kubernetes-backend).

_This plugin was created through the Glint CLI_

## Introduction

See our announcement blog post [New Glint feature: Kubernetes for Service Owners](https://glint.io/blog/2021/01/12/new-glint-feature-kubernetes-for-service-owners) to learn more about the motivation behind developing the plugin.

## Setup & Configuration

This plugin must be explicitly added to a Glint app, along with it's peer backend plugin.

It requires configuration in the Glint `app-config.yaml` to connect to a Kubernetes API control plane.

In addition, configuration of an entity's `catalog-info.yaml` helps identify which specific Kubernetes object(s) should be presented on a specific entity catalog page.

For more information, see the [formal documentation about the Kubernetes feature in Glint](https://glint.io/docs/features/kubernetes/overview).

## Getting started

Your plugin has been added to the example app in this repository, meaning you'll be able to access it by running `yarn start` in the root directory, and then navigating to [/kubernetes](http://localhost:3000/kubernetes).

You can also serve the plugin in isolation by running `yarn start` in the plugin directory.
This method of serving the plugin provides quicker iteration speed and a faster startup and hot reloads.
It is only meant for local development, and the setup for it can be found inside the [/dev](./dev) directory.
