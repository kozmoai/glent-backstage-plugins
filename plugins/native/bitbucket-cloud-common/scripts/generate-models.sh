#!/usr/bin/env bash

# Copyright 2022 The Glint Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -e

SCRIPT_DIR=$(dirname $0)
PLUGIN_DIR="${SCRIPT_DIR}/.."

yarn --cwd "${PLUGIN_DIR}" openapi-generator-cli generate --generator-key glint
rm -d "${PLUGIN_DIR}/src/apis"  # empty dir or fails
"${SCRIPT_DIR}"/adjust-models.js
yarn run -T prettier --check . -w
