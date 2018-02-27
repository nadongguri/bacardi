/**
 * Copyright (c) 2018 The Bacardi Authors.
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

import { _TypeValue } from 'core/parser/type_value';

/**
 * IDL Enum Information
 *
 * @see https://github.com/w3c/webidl2.js#enum
 */
export interface _EnumInfo {
  readonly type: 'enum';
  readonly name: string;
  readonly values: _TypeValue[];
}
