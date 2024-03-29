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
import {
  createLegacyAuthAdapters,
  errorHandler,
  PluginEndpointDiscovery,
} from '@kozmoai/backend-common';
import express, { NextFunction, Request, Response } from 'express';
import Router from 'express-promise-router';
import {
  AuthService,
  GlintUserInfo,
  LoggerService,
  UserInfoService,
} from '@kozmoai/backend-plugin-api';
import * as https from 'https';
import http, { IncomingMessage } from 'http';
import { SignalManager } from './SignalManager';
import { IdentityApi } from '@kozmoai/plugin-auth-node';
import { EventsService } from '@kozmoai/plugin-events-node';
import { WebSocket, WebSocketServer } from 'ws';
import { Duplex } from 'stream';

/** @public */
export interface RouterOptions {
  logger: LoggerService;
  events: EventsService;
  identity: IdentityApi;
  discovery: PluginEndpointDiscovery;
  auth?: AuthService;
  userInfo?: UserInfoService;
}

/** @public */
export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger, discovery } = options;
  const { auth, userInfo } = createLegacyAuthAdapters(options);

  const manager = SignalManager.create(options);
  let subscribedToUpgradeRequests = false;
  let apiUrl: string | undefined = undefined;

  const webSocketServer = new WebSocketServer({
    noServer: true,
    clientTracking: false,
  });

  webSocketServer.on('error', (error: Error) => {
    logger.error('WebSocket server error', error);
  });

  webSocketServer.on('close', () => {
    logger.info('WebSocket server closed');
  });

  const handleUpgrade = async (
    request: Request<any, any, any, any, any>,
    socket: Duplex,
    head: Buffer,
  ) => {
    if (!apiUrl) {
      apiUrl = await discovery.getBaseUrl('signals');
    }

    if (!request.url || !apiUrl || !apiUrl.endsWith(request.url)) {
      return;
    }

    let userIdentity: GlintUserInfo | undefined = undefined;

    // Authentication token is passed in Sec-WebSocket-Protocol header as there
    // is no other way to pass the token with plain websockets
    try {
      const token = request.headers['sec-websocket-protocol'];
      if (token) {
        const credentials = await auth.authenticate(token);
        if (auth.isPrincipal(credentials, 'user')) {
          userIdentity = await userInfo.getUserInfo(credentials);
        }
      }
    } catch (e) {
      logger.error('Failed to authenticate WebSocket connection', e);
      socket.write(
        'HTTP/1.1 401 Web Socket Protocol Handshake\r\n' +
          'Upgrade: WebSocket\r\n' +
          'Connection: Upgrade\r\n' +
          '\r\n',
      );
      socket.destroy();
      return;
    }

    try {
      webSocketServer.handleUpgrade(
        request,
        socket,
        head,
        (ws: WebSocket, __: IncomingMessage) => {
          manager.addConnection(ws, userIdentity);
        },
      );
    } catch (e) {
      logger.error('Failed to handle WebSocket upgrade', e);
    }
  };

  const upgradeMiddleware = async (
    req: Request,
    _: Response,
    next: NextFunction,
  ) => {
    const server: https.Server | http.Server = (req.socket as any)?.server;
    if (
      subscribedToUpgradeRequests ||
      !server ||
      !req.headers ||
      req.headers.upgrade === undefined ||
      req.headers.upgrade.toLowerCase() !== 'websocket'
    ) {
      next();
      return;
    }

    subscribedToUpgradeRequests = true;
    server.on('upgrade', handleUpgrade);
  };

  const router = Router();
  router.use(express.json());
  router.use(upgradeMiddleware);

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });

  router.use(errorHandler());
  return router;
}
