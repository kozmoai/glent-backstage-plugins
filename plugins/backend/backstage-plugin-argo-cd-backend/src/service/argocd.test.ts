import { getVoidLogger } from '@backstage/backend-common';
import { Config, ConfigReader } from '@backstage/config';
import { ArgoService } from './argocd.service';
import {
  argocdCreateApplicationResp,
  argocdCreateProjectResp,
} from './argocdTestResponses';
import fetchMock from 'jest-fetch-mock';
import { timer } from './timer.services';
import { Logger } from 'winston';
import { ResourceItem, UpdateArgoProjectAndAppProps } from './types';
import { mocked } from 'jest-mock';

fetchMock.enableMocks();
jest.mock('./timer.services', () => ({
  timer: jest.fn(),
}));
const loggerMock = {
  error: jest.fn(),
  info: jest.fn(),
} as unknown as Logger;

const getConfig = (options: {
  token?: string;
  clusterResourceBlacklist?: ResourceItem[];
  clusterResourceWhitelist?: ResourceItem[];
  namespaceResourceBlacklist?: ResourceItem[];
  namespaceResourceWhitelist?: ResourceItem[];
}): Config => {
  const {
    token,
    clusterResourceBlacklist,
    clusterResourceWhitelist,
    namespaceResourceBlacklist,
    namespaceResourceWhitelist,
  } = options;
  const configObject = {
    context: '',
    data: {
      argocd: {
        projectSettings: {
          ...(clusterResourceBlacklist && { clusterResourceBlacklist }),
          ...(clusterResourceWhitelist && { clusterResourceWhitelist }),
          ...(namespaceResourceBlacklist && { namespaceResourceBlacklist }),
          ...(namespaceResourceWhitelist && { namespaceResourceWhitelist }),
        },
        appLocatorMethods: [
          {
            type: 'config',
            instances: [
              {
                name: 'argoInstance1',
                url: 'https://argoInstance1.com',
                username: 'user',
                password: 'pass',
                ...(token && { token }),
              },
            ],
          },
        ],
        waitCycles: 3,
      },
    },
  };
  return ConfigReader.fromConfigs([configObject]);
};

describe('ArgoCD service', () => {
  const argoService = new ArgoService(
    'testusername',
    'testpassword',
    getConfig({ token: 'token' }),
    loggerMock,
  );

  const argoServiceForNoToken = new ArgoService(
    'testusername',
    'testpassword',
    getConfig({}),
    loggerMock,
  );

  beforeEach(() => {
    mocked(timer).mockResolvedValue(0);
    fetchMock.resetMocks();
    jest.clearAllMocks();
  });

  it('should get revision data', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        author: 'testuser',
        date: '2023-03-20T18:44:10Z',
        message: 'Update README.md',
      }),
    );

    const resp = await argoService.getRevisionData(
      'https://argoInstance1.com',
      { name: 'testApp' },
      'testToken',
      '15db63ac922a920f388bd841912838ae4d126317',
    );

    expect(resp).toStrictEqual({
      author: 'testuser',
      date: '2023-03-20T18:44:10Z',
      message: 'Update README.md',
    });
  });

  it('should fail to get revision data', async () => {
    fetchMock.mockRejectOnce(new Error());

    await expect(
      argoService.getRevisionData(
        'https://argoInstance1.com',
        { name: 'testApp' },
        'testToken',
        '15db63ac922a920f388bd841912838ae4d126317',
      ),
    ).rejects.toThrow();
  });

  it('should get all argo app data if no option is provided', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        items: [
          {
            metadata: {
              name: 'testAppName',
              namespace: 'testNamespace',
            },
          },
          {
            metadata: {
              name: 'testAppName2',
              namespace: 'testNamespace2',
            },
          },
        ],
      }),
    );
    const resp = await argoService.getArgoAppData(
      'https://argoInstance1.com',
      'argoInstance1',
      'testToken',
    );

    expect(resp).toStrictEqual({
      items: [
        {
          metadata: {
            name: 'testAppName',
            namespace: 'testNamespace',
            instance: {
              name: 'argoInstance1',
            },
          },
        },
        {
          metadata: {
            name: 'testAppName2',
            namespace: 'testNamespace2',
            instance: {
              name: 'argoInstance1',
            },
          },
        },
      ],
    });
  });

  it('should get argo app data', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        metadata: {
          name: 'testAppName',
          namespace: 'testNamespace',
        },
      }),
    );

    const resp = await argoService.getArgoAppData(
      'https://argoInstance1.com',
      'argoInstance1',
      'testToken',
      { name: 'testApp' },
    );

    expect(resp).toStrictEqual({
      instance: 'argoInstance1',
      metadata: {
        name: 'testAppName',
        namespace: 'testNamespace',
      },
    });
  });

  it('should fail to get argo app data', async () => {
    fetchMock.mockRejectOnce(new Error());

    await expect(
      argoService.getArgoAppData(
        'https://argoInstance1.com',
        'argoInstance1',
        'testToken',
        { name: 'testApp' },
      ),
    ).rejects.toThrow();
  });

  it('should successfully decorate the items when using the app selector', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        items: [
          {
            metadata: {
              name: 'testApp-prod',
              namespace: 'argocd',
            },
          },
          {
            metadata: {
              name: 'testApp-staging',
              namespace: 'argocd',
            },
          },
        ],
      }),
    );

    const resp = await argoService.getArgoAppData(
      'https://argoInstance1.com',
      'argoInstance1',
      'testToken',
      { selector: 'service=testApp' },
    );

    expect(resp).toStrictEqual({
      items: [
        {
          metadata: {
            instance: {
              name: 'argoInstance1',
            },
            name: 'testApp-prod',
            namespace: 'argocd',
          },
        },
        {
          metadata: {
            instance: {
              name: 'argoInstance1',
            },
            name: 'testApp-staging',
            namespace: 'argocd',
          },
        },
      ],
    });
  });

  it('should create a project in argo', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        argocdCreateProjectResp,
      }),
    );

    const resp = await argoService.createArgoProject({
      baseUrl: 'https://argoInstance1.com',
      argoToken: 'testToken',
      projectName: 'testProject',
      namespace: 'test-namespace',
      sourceRepo: 'https://github.com/backstage/backstage',
    });

    expect(resp).toStrictEqual({
      argocdCreateProjectResp,
    });
  });

  it('should fail to create a project in argo when argo errors out', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        error: 'Failed to Create project',
      }),
    );

    const resp = await argoService.createArgoProject({
      baseUrl: 'https://argoInstance1.com',
      argoToken: 'testToken',
      projectName: 'testProject',
      namespace: 'test-namespace',
      sourceRepo: 'https://github.com/backstage/backstage',
    });

    expect(resp).toStrictEqual({
      error: 'Failed to Create project',
    });
  });

  it('should fail to create a project in argo when argo user is not given enough permissions', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        response: {
          status: 403,
          error:
            'permission denied: projects, create, backstagetestmanual2, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
          message:
            'permission denied: projects, create, backstagetestmanual2, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
        },
      }),
    );

    const resp = await argoService.createArgoProject({
      baseUrl: 'https://argoInstance1.com',
      argoToken: 'testToken',
      projectName: 'testProject',
      namespace: 'test-namespace',
      sourceRepo: 'https://github.com/backstage/backstage',
    });

    expect(resp).toStrictEqual({
      response: {
        error:
          'permission denied: projects, create, backstagetestmanual2, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
        message:
          'permission denied: projects, create, backstagetestmanual2, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
        status: 403,
      },
    });
  });

  it('should create an app in argo', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        argocdCreateApplicationResp,
      }),
    );

    const resp = await argoService.createArgoApplication({
      baseUrl: 'https://argoInstance1.com',
      argoToken: 'testToken',
      appName: 'testProject',
      projectName: 'testProject',
      namespace: 'test-namespace',
      sourceRepo: 'https://github.com/backstage/backstage',
      sourcePath: 'kubernetes/nonproduction',
      labelValue: 'backstageId',
    });

    expect(resp).toStrictEqual({
      argocdCreateApplicationResp,
    });
  });

  it('should fail to create an app in argo when argo errors out', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        message: 'errorMessage',
      }),
      { status: 500 },
    );

    await expect(
      argoService.createArgoApplication({
        baseUrl: 'https://argoInstance1.com',
        argoToken: 'testToken',
        appName: 'testProject',
        projectName: 'testProject',
        namespace: 'test-namespace',
        sourceRepo: 'https://github.com/backstage/backstage',
        sourcePath: 'kubernetes/nonproduction',
        labelValue: 'backstageId',
      }),
    ).rejects.toThrow('Error creating argo app: errorMessage');
  });

  it('should fail to create a application in argo when argo user is not given enough permissions', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        response: {
          status: 403,
          error:
            'permission denied: applications, create, backstagetestmanual2/backstagetestmanual2, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
          message:
            'permission denied: applications, create, backstagetestmanual2/backstagetestmanual2, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
        },
      }),
    );

    const resp = await argoService.createArgoApplication({
      baseUrl: 'https://argoInstance1.com',
      argoToken: 'testToken',
      appName: 'testProject',
      projectName: 'testProject',
      namespace: 'test-namespace',
      sourceRepo: 'https://github.com/backstage/backstage',
      sourcePath: 'kubernetes/nonproduction',
      labelValue: 'backstageId',
    });

    expect(resp).toStrictEqual({
      response: {
        status: 403,
        error:
          'permission denied: applications, create, backstagetestmanual2/backstagetestmanual2, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
        message:
          'permission denied: applications, create, backstagetestmanual2/backstagetestmanual2, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
      },
    });
  });

  it('should create both app and project in argo', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        argocdCreateApplicationResp,
      }),
    );
    fetchMock.mockResponseOnce(
      JSON.stringify({
        argocdCreateApplicationResp,
      }),
    );

    const resp = await argoService.createArgoResources({
      argoInstance: 'argoInstance1',
      appName: 'testApp',
      projectName: 'testProject',
      namespace: 'testNamespace',
      sourceRepo: 'https://github.com/backstage/backstage',
      sourcePath: 'kubernetes/nonproduction',
      labelValue: 'backstageId',
      logger: getVoidLogger(),
    });

    expect(resp).toStrictEqual(true);
  });

  it('should fail to create both app and project in argo when argo rejects', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        error: 'Failure to create project',
      }),
      {
        status: 500,
      },
    );

    const resp = argoService.createArgoResources({
      argoInstance: 'argoInstance1',
      appName: 'testApp',
      projectName: 'testProject',
      namespace: 'testNamespace',
      sourceRepo: 'https://github.com/backstage/backstage',
      sourcePath: 'kubernetes/nonproduction',
      labelValue: 'backstageId',
      logger: getVoidLogger(),
    });

    await expect(resp).rejects.toThrow();
  });

  it('should delete project in argo', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const resp = await argoService.deleteProject({
      baseUrl: 'https://argoInstance1.com',
      argoProjectName: 'testApp',
      argoToken: 'testToken',
    });

    expect(resp).toStrictEqual(true);
  });

  it('should delete project with json content type header', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));
    await argoService.deleteProject({
      baseUrl: 'https://argoInstance1.com',
      argoProjectName: 'testApp',
      argoToken: 'testToken',
    });

    expect(fetchMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
        }),
      }),
    );
  });

  it('should fail to delete project in argo when bad status', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

    const resp = await argoService.deleteProject({
      baseUrl: 'https://argoInstance1.com',
      argoProjectName: 'testApp',
      argoToken: 'testToken',
    });

    expect(resp).toStrictEqual(false);
  });

  it('should fail to delete project in argo when bad permissions', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        error:
          'permission denied: projects, delete, backstagetestmanual, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
        message:
          'permission denied: projects, delete, backstagetestmanual, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
      }),
      { status: 403 },
    );

    const resp = argoService.deleteProject({
      baseUrl: 'https://argoInstance1.com',
      argoProjectName: 'testApp',
      argoToken: 'testToken',
    });

    await expect(resp).rejects.toThrow(
      'permission denied: projects, delete, backstagetestmanual, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
    );
  });

  it('should throw error message when status code is not one already being handled', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        error: 'something unexpected',
        message: 'something unexpected',
      }),
      { status: 403324 },
    );

    await expect(
      argoService.deleteProject({
        baseUrl: 'https://argoInstance1.com',
        argoProjectName: 'testApp',
        argoToken: 'testToken',
      }),
    ).rejects.toThrow('something unexpected');
  });

  it('should delete app in argo', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const resp = await argoService.deleteApp({
      baseUrl: 'https://argoInstance1.com',
      argoApplicationName: 'testApp',
      argoToken: 'testToken',
    });

    expect(resp).toStrictEqual(true);
  });

  it('should delete app with json content type header', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));
    await argoService.deleteApp({
      baseUrl: 'https://argoInstance1.com',
      argoApplicationName: 'testApp',
      argoToken: 'testToken',
    });

    expect(fetchMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
        }),
      }),
    );
  });

  it('should fail to delete app in argo when bad status', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

    const resp = await argoService.deleteApp({
      baseUrl: 'https://argoInstance1.com',
      argoApplicationName: 'testApp',
      argoToken: 'testToken',
    });

    expect(resp).toStrictEqual(false);
  });

  it('should fail to delete application in argo when bad permissions', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        error:
          'permission denied: projects, delete, backstagetestmanual, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
        message:
          'permission denied: projects, delete, backstagetestmanual, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
      }),
      { status: 403 },
    );

    const resp = argoService.deleteApp({
      baseUrl: 'https://argoInstance1.com',
      argoApplicationName: 'testApp',
      argoToken: 'testToken',
    });

    await expect(resp).rejects.toThrow(
      'permission denied: projects, delete, backstagetestmanual, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
    );
  });

  it('should sync app', async () => {
    fetchMock.mockResponseOnce('');

    const resp = await argoService.syncArgoApp({
      argoInstance: {
        name: 'testApp',
        url: 'https://argoInstance1.com',
        appName: ['testApp'],
      },
      argoToken: 'testToken',
      appName: 'testApp',
    });

    expect(resp).toStrictEqual({
      message: 'Re-synced testApp on testApp',
      status: 'Success',
    });
  });

  it('should fail to sync app on bad status', async () => {
    fetchMock.mockResponseOnce('', { status: 500 });

    const resp = await argoService.syncArgoApp({
      argoInstance: {
        name: 'testApp',
        url: 'https://argoInstance1.com',
        appName: ['testApp'],
      },
      argoToken: 'testToken',
      appName: 'testApp',
    });

    expect(resp).toStrictEqual({
      message: 'Failed to resync testApp on testApp',
      status: 'Failure',
    });
  });

  it('should fail to sync app on selector and name null', async () => {
    const appSelector = '';
    await expect(
      argoService.resyncAppOnAllArgos({ appSelector }),
    ).rejects.toThrow();
  });

  it('should fail to sync app on bad permissions', async () => {
    fetchMock.mockResponseOnce('', { status: 403 });

    const resp = await argoService.syncArgoApp({
      argoInstance: {
        name: 'testApp',
        url: 'https://argoInstance1.com',
        appName: ['testApp'],
      },
      argoToken: 'testToken',
      appName: 'testApp',
    });

    expect(resp).toStrictEqual({
      message: 'Failed to resync testApp on testApp',
      status: 'Failure',
    });
  });

  it('should sync all apps', async () => {
    // findArgoApp
    fetchMock.mockResponseOnce(
      JSON.stringify({
        items: [
          {
            metadata: {
              name: 'testAppName',
              namespace: 'testNamespace',
            },
          },
        ],
      }),
    );
    // token
    fetchMock.mockResponseOnce(
      JSON.stringify({
        token: 'testToken',
      }),
    );
    // sync
    fetchMock.mockResponseOnce('');

    const resp = await argoService.resyncAppOnAllArgos({
      appSelector: 'testApp',
    });

    expect(resp).toStrictEqual([
      [
        {
          message: 'Re-synced testAppName on argoInstance1',
          status: 'Success',
        },
      ],
    ]);
  });

  it('should return empty array when bad token', async () => {
    // token
    fetchMock.mockOnceIf(
      /.*\/api\/v1\/session/g,
      JSON.stringify({
        message: 'Unauthorized',
      }),
      { status: 401, statusText: 'Unauthorized' },
    );

    const resp = await argoServiceForNoToken.resyncAppOnAllArgos({
      appSelector: 'testApp',
    });

    expect(resp).toStrictEqual([]);
  });

  it('should fail to sync all apps when bad permissions', async () => {
    fetchMock.mockResponseOnce('', { status: 403 });

    const resp = await argoService.syncArgoApp({
      argoInstance: {
        name: 'testApp',
        url: 'https://argoInstance1.com',
        appName: ['testApp'],
      },
      argoToken: 'testToken',
      appName: 'testApp',
    });

    expect(resp).toStrictEqual({
      message: 'Failed to resync testApp on testApp',
      status: 'Failure',
    });
  });

  it('should fail to sync all apps due to permissions', async () => {
    // findArgoApp
    fetchMock.mockResponseOnce(
      JSON.stringify({
        items: [
          {
            metadata: {
              name: 'testAppName',
              namespace: 'testNamespace',
            },
          },
        ],
      }),
    );
    // token
    fetchMock.mockResponseOnce(
      JSON.stringify({
        token: 'testToken',
      }),
    );
    // sync
    fetchMock.mockResponseOnce(
      JSON.stringify({
        error:
          'permission denied: applications, sync, backstagetestmanual-nonprod/backstagetestmanual-nonprod, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
        message:
          'permission denied: applications, sync, backstagetestmanual-nonprod/backstagetestmanual-nonprod, sub: testuser18471, iat: 2022-04-13T12:28:34Z',
      }),
      { status: 403 },
    );

    const resp = await argoService.resyncAppOnAllArgos({
      appSelector: 'testApp',
    });

    expect(resp).toStrictEqual([
      [
        {
          message: 'Failed to resync testAppName on argoInstance1',
          status: 'Failure',
        },
      ],
    ]);
  });

  it('when deleteApp returns 404 Not found continue to delete Project', async () => {
    // deleteApp
    fetchMock.mockRejectedValueOnce(new Error('Not Found'));

    // deleteProject
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const resp = await argoService.deleteAppandProject({
      argoAppName: 'testApp',
      argoInstanceName: 'argoInstance1',
    });

    expect(resp).toStrictEqual({
      argoDeleteAppResp: {
        status: 'failed',
        message: 'Not Found',
      },
      argoDeleteProjectResp: {
        status: 'success',
        message: 'project is deleted successfully',
      },
    });
  });

  it('when deleteApp gives 5xx errors skip project deletion', async () => {
    // deleteApp
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

    // getArgoAppData
    fetchMock.mockRejectedValueOnce(new Error());

    const resp = await argoService.deleteAppandProject({
      argoAppName: 'testApp',
      argoInstanceName: 'argoInstance1',
    });

    expect(resp).toStrictEqual({
      argoDeleteAppResp: {
        status: 'failed',
        message: 'error getting argo app data',
      },
      argoDeleteProjectResp: {
        status: 'failed',
        message: 'skipping project deletion due to error deleting argo app',
      },
    });
  });

  it('should fail to delete app and skip project deletion due to pending app deletion', async () => {
    // deleteApp
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 500 });

    // getArgoAppData
    fetchMock.mockResponse(
      JSON.stringify({
        instance: 'argoInstance1',
        metadata: {
          name: 'testAppName',
          namespace: 'testNamespace',
        },
      }),
    );

    const resp = await argoService.deleteAppandProject({
      argoAppName: 'testApp',
      argoInstanceName: 'argoInstance1',
    });

    expect(resp).toStrictEqual({
      argoDeleteAppResp: {
        status: 'failed',
        message: 'application pending delete',
      },
      argoDeleteProjectResp: {
        status: 'failed',
        message: 'skipping project deletion due to app deletion pending',
      },
    });
  });

  it('when app is in pending to delete state skip project deletion', async () => {
    // deleteApp
    fetchMock.mockResponseOnce(JSON.stringify({}));

    // getArgoAppData
    fetchMock.mockResponseOnce(
      JSON.stringify({
        instance: 'argoInstance1',
        metadata: {
          name: 'testAppName',
          namespace: 'testNamespace',
        },
      }),
    );

    fetchMock.mockRejectedValue(
      new Error('Could not retrieve ArgoCD app data.'),
    );

    const resp = await argoService.deleteAppandProject({
      argoAppName: 'testApp',
      argoInstanceName: 'argoInstance1',
    });

    expect(resp).toStrictEqual({
      argoDeleteAppResp: {
        status: 'failed',
        message: 'application pending delete',
      },
      argoDeleteProjectResp: {
        status: 'failed',
        message: 'skipping project deletion due to app deletion pending',
      },
    });
  });

  it('when getArgoCD returns 404 one occurrence and the app is later deleted then delete project', async () => {
    // deleteApp
    fetchMock.mockResponseOnce(JSON.stringify({}));

    // getArgoAppData
    fetchMock.mockResponseOnce(
      JSON.stringify({
        instance: 'argoInstance1',
        metadata: {
          name: 'testAppName',
          namespace: 'testNamespace',
        },
      }),
    );
    fetchMock.mockRejectedValueOnce(
      new Error('Could not retrieve ArgoCD app data.'),
    );
    fetchMock.mockResponseOnce(JSON.stringify({}));

    // deleteProject
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const resp = await argoService.deleteAppandProject({
      argoAppName: 'testApp',
      argoInstanceName: 'argoInstance1',
    });

    expect(resp).toStrictEqual({
      argoDeleteAppResp: {
        status: 'success',
        message: 'application is deleted successfully',
      },
      argoDeleteProjectResp: {
        status: 'success',
        message: 'project is deleted successfully',
      },
    });
  });

  it('should successfully delete app and successfully to delete project', async () => {
    // deleteApp
    fetchMock.mockResponseOnce(JSON.stringify({}));

    // getArgoAppData
    fetchMock.mockResponseOnce(JSON.stringify({}));

    // deleteProject
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const resp = await argoService.deleteAppandProject({
      argoAppName: 'testApp',
      argoInstanceName: 'argoInstance1',
    });

    expect(resp).toStrictEqual({
      argoDeleteAppResp: {
        status: 'success',
        message: 'application is deleted successfully',
      },
      argoDeleteProjectResp: {
        status: 'success',
        message: 'project is deleted successfully',
      },
    });
  });
  it('should successfully delete app and fail to delete project returning error message', async () => {
    // deleteApp
    fetchMock.mockResponseOnce(JSON.stringify({}));

    // getArgoAppData
    fetchMock.mockResponseOnce(JSON.stringify({}));

    // deleteProject
    fetchMock.mockResponseOnce(
      JSON.stringify({
        error: 'something unexpected',
        message: 'something unexpected',
      }),
      { status: 403324 },
    );

    const resp = await argoService.deleteAppandProject({
      argoAppName: 'testApp',
      argoInstanceName: 'argoInstance1',
    });

    expect(resp).toStrictEqual({
      argoDeleteAppResp: {
        status: 'success',
        message: 'application is deleted successfully',
      },
      argoDeleteProjectResp: {
        status: 'failed',
        message: 'Cannot Delete Project: something unexpected',
      },
    });
  });

  describe('findArgoApp', () => {
    it('should return the argo instances an argo app is on', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify({
          metadata: {
            name: 'testApp-nonprod',
            namespace: 'argocd',
            status: {},
          },
        }),
      );

      const resp = await argoService.findArgoApp({ name: 'testApp-nonprod' });

      expect(resp).toStrictEqual([
        {
          name: 'argoInstance1',
          url: 'https://argoInstance1.com',
          appName: ['testApp-nonprod'],
        },
      ]);
    });

    it('should return an empty array even when the request fails', async () => {
      fetchMock.mockRejectOnce(new Error());
      expect(await argoService.findArgoApp({ name: 'test-app' })).toStrictEqual(
        [],
      );
    });

    it('should return the argo instances using the app selector', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify({
          items: [
            {
              metadata: {
                name: 'testApp-nonprod',
                namespace: 'argocd',
                status: {},
              },
            },
          ],
        }),
      );

      const resp = await argoService.findArgoApp({
        selector: 'name=testApp-nonprod',
      });

      expect(resp).toStrictEqual([
        {
          appName: ['testApp-nonprod'],
          name: 'argoInstance1',
          url: 'https://argoInstance1.com',
        },
      ]);
    });

    it('returns empty array when get token call fails', async () => {
      fetchMock.mockRejectedValueOnce(new Error('FetchError'));

      const resp = await argoServiceForNoToken.findArgoApp({
        selector: 'name=testApp-nonprod',
      });

      expect(resp).toStrictEqual([]);
    });

    it('logs error when token call fails', async () => {
      fetchMock.mockRejectedValueOnce(new Error('FetchError'));

      await argoServiceForNoToken.findArgoApp({
        selector: 'name=testApp-nonprod',
      });

      expect(loggerMock.error).toHaveBeenCalledWith(
        'Error getting token from Argo Instance argoInstance1: FetchError',
      );
    });
  });

  describe('updateArgoProjectAndApp', () => {
    const data: UpdateArgoProjectAndAppProps = {
      instanceConfig: { name: 'argoInstanceName', url: 'url' },
      argoToken: 'argoToken',
      appName: 'appName',
      projectName: 'projectName',
      namespace: 'namespace',
      sourceRepo: 'sourceRepo',
      sourcePath: 'sourcePath',
      labelValue: 'labelValue',
    };
    const getArgoAppDataResp = {
      metadata: {
        name: 'argoInstanceName',
        resourceVersion: 'resourceVersion',
      },
      spec: { source: { repoURL: 'sourceRepo' } },
      status: {},
      instance: 'instance',
    };
    const getArgoProjectResp = {
      metadata: { resourceVersion: 'resourceVersion' },
    };
    it('should throw error when argo app not found', async () => {
      fetchMock.mockResponseOnce('', { status: 404 }); // getArgoAppData
      await expect(argoService.updateArgoProjectAndApp(data)).rejects.toThrow(
        'Request failed with 404 Error',
      );
    });

    it('should throw error when source url undefined', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify({
          ...getArgoAppDataResp,
          spec: { source: { repoURL: '' } },
        }),
      ); // getArgoAppData
      await expect(argoService.updateArgoProjectAndApp(data)).rejects.toThrow(
        'No repo URL found for argo app',
      );
    });

    it('should throw error when app resourceVersion undefined', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify({ ...getArgoAppDataResp, metadata: {} }),
      ); // getArgoAppData
      await expect(argoService.updateArgoProjectAndApp(data)).rejects.toThrow(
        'No resourceVersion found for argo app',
      );
    });

    it('should throw error when project resourceVersion undefined', async () => {
      fetchMock
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)) // getArgoAppData
        .mockResponseOnce(JSON.stringify({ metadata: {} })); // getArgoProject
      await expect(argoService.updateArgoProjectAndApp(data)).rejects.toThrow(
        'No resourceVersion found for argo project',
      );
    });

    it('should throw error when argo project update fails', async () => {
      fetchMock
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)) // getArgoAppData
        .mockResponseOnce(JSON.stringify(getArgoProjectResp)) // getArgoProject
        .mockResponseOnce(JSON.stringify({ message: 'ERROR' }), {
          status: 500,
        }); // updateArgoProject

      await expect(argoService.updateArgoProjectAndApp(data)).rejects.toThrow(
        'Error updating argo project: ERROR',
      );
    });

    it('should throw error when argo app update fails', async () => {
      fetchMock
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)) // getArgoAppData
        .mockResponseOnce(JSON.stringify(getArgoProjectResp)) // getArgoProject
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)) // updateArgoProject
        .mockResponseOnce(JSON.stringify({ message: 'ERROR' }), {
          status: 500,
        }); // updateArgoApp

      await expect(argoService.updateArgoProjectAndApp(data)).rejects.toThrow(
        'Error updating argo app: ERROR',
      );
    });

    it('should return true when app and project update succeeds', async () => {
      fetchMock
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)) // getArgoAppData
        .mockResponseOnce(JSON.stringify(getArgoProjectResp)) // getArgoProject
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)) // updateArgoProject
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)); // updateArgoApp

      const resp = await argoService.updateArgoProjectAndApp(data);

      expect(resp).toBe(true);
    });

    it('should return true when app and project update succeeds and source repo changes', async () => {
      fetchMock
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)) // getArgoAppData
        .mockResponseOnce(JSON.stringify(getArgoProjectResp)) // getArgoProject
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)) // updateArgoProject
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)) // updateArgoApp
        .mockResponseOnce(JSON.stringify(getArgoProjectResp)) // getArgoProject
        .mockResponseOnce(JSON.stringify(getArgoAppDataResp)); // updateArgoProject

      const newData = { ...data, sourceRepo: 'newRepo' };

      const resp = await argoService.updateArgoProjectAndApp(newData);

      expect(resp).toBe(true);
    });
  });

  describe('getArgoProject', () => {
    const projectData = { metadata: { resourceVersion: 'resourceVersion' } };
    const argoProjectReq = {
      baseUrl: 'baseUrl',
      argoToken: 'token',
      projectName: 'projectName',
    };

    it('should get project data', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(projectData));

      const resp = await argoService.getArgoProject(argoProjectReq);

      expect(resp).toStrictEqual(projectData);
    });

    it('should throw an error when fail to get project', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ message: 'ERROR' }), {
        status: 500,
      });

      await expect(argoService.getArgoProject(argoProjectReq)).rejects.toThrow(
        'Failed to get argo project: ERROR',
      );
    });
  });

  describe('getApplicationData', () => {
    it('returns argo application data by calling argo api', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify({
          metadata: { name: 'application' },
        }),
      );

      const resp = await argoService.getArgoApplicationInfo({
        argoApplicationName: 'application',
        argoInstanceName: 'argoInstance1',
      });

      expect(resp).toEqual(
        expect.objectContaining({ metadata: { name: 'application' } }),
      );
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(
        'https://argoInstance1.com/api/v1/applications/application',
        expect.objectContaining({ headers: { Authorization: 'Bearer token' } }),
      );
    });

    it('fails to find argo application data because application is not found', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify({
          error: 'application not found',
          message: 'application not found',
        }),
        { status: 404 },
      );

      const resp = await argoService.getArgoApplicationInfo({
        argoApplicationName: 'application',
        argoInstanceName: 'argoInstance1',
      });

      expect(resp).toEqual(
        expect.objectContaining({
          error: 'application not found',
          message: 'application not found',
          statusCode: 404,
        }),
      );
    });

    it('fails because argo cluster is not found', async () => {
      await expect(
        argoService.getArgoApplicationInfo({
          argoApplicationName: 'application',
          argoInstanceName: 'cluster',
        }),
      ).rejects.toThrow(/does not have argo information/i);
    });

    it('fails because credentials are incorrect', async () => {
      const mockGetArgoToken = jest
        .spyOn(ArgoService.prototype, 'getArgoToken')
        .mockRejectedValueOnce('Unauthorized');

      await expect(
        argoServiceForNoToken.getArgoApplicationInfo({
          argoApplicationName: 'application',
          argoInstanceName: 'argoInstance1',
        }),
      ).rejects.toEqual('Unauthorized');

      expect(mockGetArgoToken).toHaveBeenCalledTimes(1);
    });

    it('fails because unauthorized to get application information', async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify({
          error: 'Unauthorized',
          message: 'Unauthorized',
        }),
        { status: 401 },
      );

      const resp = await argoService.getArgoApplicationInfo({
        argoApplicationName: 'application',
        argoInstanceName: 'argoInstance1',
      });

      expect(resp).toEqual(
        expect.objectContaining({
          error: 'Unauthorized',
          message: 'Unauthorized',
          statusCode: 401,
        }),
      );
    });

    it('fails to get argo application information for other reasons', async () => {
      fetchMock.mockResponseOnce('', { status: 500 });

      await expect(
        argoService.getArgoApplicationInfo({
          argoApplicationName: 'application',
          argoInstanceName: 'argoInstance1',
        }),
      ).rejects.toThrow(/invalid json/i);
    });
  });

  describe('resource black and white lists', () => {
    beforeEach(() => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
    });

    it('should include cluster and namespace white and black list if provided in the config', async () => {
      const service = new ArgoService(
        'testusername',
        'testpassword',
        getConfig({
          token: 'token',
          clusterResourceWhitelist: [
            { kind: 'clusterWhitelistKind', group: 'clusterWhitelistGroup' },
          ],
          clusterResourceBlacklist: [
            { kind: 'clusterBlacklistKind', group: 'clusterBlacklistGroup' },
          ],
          namespaceResourceWhitelist: [
            {
              kind: 'namespaceWhitelistKind',
              group: 'namespaceWhitelistGroup',
            },
          ],
          namespaceResourceBlacklist: [
            {
              kind: 'namespaceBlacklistKind',
              group: 'namespaceBlacklistGroup',
            },
          ],
        }),
        loggerMock,
      );

      await service.createArgoProject({
        baseUrl: 'baseUrl',
        argoToken: 'token',
        projectName: 'projectName',
        namespace: 'namespace',
        sourceRepo: 'repo',
      });

      expect(fetchMock.mock.calls[0][1]?.body).toContain(
        JSON.stringify([
          {
            kind: 'clusterBlacklistKind',
            group: 'clusterBlacklistGroup',
          },
        ]),
      );
      expect(fetchMock.mock.calls[0][1]?.body).toContain(
        JSON.stringify([
          {
            kind: 'clusterWhitelistKind',
            group: 'clusterWhitelistGroup',
          },
        ]),
      );
      expect(fetchMock.mock.calls[0][1]?.body).toContain(
        JSON.stringify([
          {
            kind: 'namespaceBlacklistKind',
            group: 'namespaceBlacklistGroup',
          },
        ]),
      );
      expect(fetchMock.mock.calls[0][1]?.body).toContain(
        JSON.stringify([
          {
            kind: 'namespaceWhitelistKind',
            group: 'namespaceWhitelistGroup',
          },
        ]),
      );
    });

    it('should not include namespace white or black lists', async () => {
      const service = new ArgoService(
        'testusername',
        'testpassword',
        getConfig({
          token: 'token',
          clusterResourceWhitelist: [
            { kind: 'clusterWhitelistKind', group: 'clusterWhitelistGroup' },
          ],
          clusterResourceBlacklist: [
            { kind: 'clusterBlacklistKind', group: 'clusterBlacklistGroup' },
          ],
        }),
        loggerMock,
      );

      await service.createArgoProject({
        baseUrl: 'baseUrl',
        argoToken: 'token',
        projectName: 'projectName',
        namespace: 'namespace',
        sourceRepo: 'repo',
      });

      expect(fetchMock.mock.calls[0][1]?.body).toContain(
        JSON.stringify([
          {
            kind: 'clusterBlacklistKind',
            group: 'clusterBlacklistGroup',
          },
        ]),
      );
      expect(fetchMock.mock.calls[0][1]?.body).toContain(
        JSON.stringify([
          {
            kind: 'clusterWhitelistKind',
            group: 'clusterWhitelistGroup',
          },
        ]),
      );
      expect(fetchMock.mock.calls[0][1]?.body).not.toContain(
        JSON.stringify([
          {
            kind: 'namespaceBlacklistKind',
            group: 'namespaceBlacklistGroup',
          },
        ]),
      );
      expect(fetchMock.mock.calls[0][1]?.body).not.toContain(
        JSON.stringify([
          {
            kind: 'namespaceWhitelistKind',
            group: 'namespaceWhitelistGroup',
          },
        ]),
      );
    });

    it('should not include any black or white lists', async () => {
      const service = new ArgoService(
        'testusername',
        'testpassword',
        getConfig({
          token: 'token',
        }),
        loggerMock,
      );

      await service.createArgoProject({
        baseUrl: 'baseUrl',
        argoToken: 'token',
        projectName: 'projectName',
        namespace: 'namespace',
        sourceRepo: 'repo',
      });
      expect(fetchMock.mock.calls[0][1]?.body).not.toContain(
        'clusterResourceWhitelist',
      );
      expect(fetchMock.mock.calls[0][1]?.body).not.toContain(
        'clusterResourceBlacklist',
      );
      expect(fetchMock.mock.calls[0][1]?.body).not.toContain(
        'namespaceResourceWhitelist',
      );
      expect(fetchMock.mock.calls[0][1]?.body).not.toContain(
        'namespaceResourceBlacklist',
      );
    });
  });
});
