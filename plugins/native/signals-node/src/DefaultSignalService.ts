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
import { EventsService } from '@kozmoai/plugin-events-node';
import { SignalPayload, SignalServiceOptions } from './types';
import { SignalService } from './SignalService';
import { JsonObject } from '@kozmoai/types';

/** @public */
export class DefaultSignalService implements SignalService {
  private events: EventsService;

  static create(options: SignalServiceOptions) {
    return new DefaultSignalService(options);
  }

  private constructor(options: SignalServiceOptions) {
    ({ events: this.events } = options);
  }

  /**
   * Publishes a signal to user refs to specific topic
   * @param signal - Signal to publish
   */
  async publish<TMessage extends JsonObject = JsonObject>(
    signal: SignalPayload<TMessage>,
  ) {
    await this.events.publish({
      topic: 'signals',
      eventPayload: signal,
    });
  }
}
