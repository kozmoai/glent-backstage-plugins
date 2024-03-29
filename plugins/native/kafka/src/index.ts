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

/**
 * A Glint plugin that integrates towards Kafka
 *
 * @packageDocumentation
 */

export {
  kafkaPlugin,
  kafkaPlugin as plugin,
  EntityKafkaContent,
} from './plugin';
export { KAFKA_CONSUMER_GROUP_ANNOTATION } from './constants';
export {
  Router,
  isPluginApplicableToEntity,
  isPluginApplicableToEntity as isKafkaAvailable,
} from './Router';
