# Copyright (c) 2017 The Bacardi Authors.
#
# Licensed under the Apache License, Version 2.0 (the 'License');
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an 'AS IS' BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

{
  'variables': {
    'examples_cpp_files': [
      'calculator.cc',
      'calculator.h',
      'ternary_calculator.cc',
      'ternary_calculator.h',
    ],

    'examples_idl_files': [
      '<(module_root_dir)/examples/calculator.idl',
    ],

    'examples_idl_output_files': [
      '<(SHARED_INTERMEDIATE_DIR)/examples/calculator_bridge.cc',
      '<(SHARED_INTERMEDIATE_DIR)/examples/calculator_bridge.h',
      '<(SHARED_INTERMEDIATE_DIR)/examples/ternary_calculator_bridge.cc',
      '<(SHARED_INTERMEDIATE_DIR)/examples/ternary_calculator_bridge.h',
    ],
  },
}
