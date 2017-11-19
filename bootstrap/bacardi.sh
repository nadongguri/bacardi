#!/bin/bash
#
# Copyright (c) 2017 The Bacardi Authors.
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

. $BACARDI_PATH/bootstrap/common/path_info.sh
. $BACARDI_PATH/bootstrap/common/string_util.sh
. $BACARDI_PATH/bootstrap/common/sync_third_party.sh

# Set path
if is_windows_platform; then
  set_path_env $(third_party_path)/win-bash
  set_path_env $(third_party_path)/win-wget
  set_path_env $(third_party_path)/win-unzip/bin
  set_path_env $(third_party_path)/node
  set_path_env $USERPROFILE/.windows-build-tools/python27
fi
set_path_env $(bootstrap_command_path)
set_path_env $(bacardi_path)/node_modules/.bin

# Init submodule
git submodule init
git submodule update

# Sync third_parties.
sync_node

# FIXME(zino): If npm packages are updated, then node-gyp will be triggered
# automatically. To get native/idl file list, we will use ./bacardi list*
# command again in binding.gyp. Then, it causes infinite loop finally.
# To avoid the problem, as a workaround, we should filter list* commands here.
if [ "$(substr $1 1 4)" = "list" ]; then
  gulp $@
  exit
fi

# NPM install or update
if [ ! -f .last_update ] || [ package.json -nt .last_update ]; then
  npm install && > .last_update
fi

for command in $(ls $(bootstrap_command_path)); do
  if [ "$1" = "$command" ]; then
    shift
    $(bootstrap_command_path)/$command $@
    exit
  fi
done

gulp $@
