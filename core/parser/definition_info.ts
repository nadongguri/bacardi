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

import { _DictionaryInfo } from 'core/parser/dictionary_info';
import { _EnumInfo } from 'core/parser/enum_info';
import { _InterfaceInfo } from 'core/parser/interface_info';

/**
 * IDL Definition Information
 */
export type _DefinitionInfo = _InterfaceInfo | _DictionaryInfo | _EnumInfo;
