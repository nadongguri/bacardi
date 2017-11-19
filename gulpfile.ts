/**
 * Copyright (c) 2017 The Absolute Authors.
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

import * as gulp from 'gulp';
import * as path from 'path';
import * as through from 'through2';

gulp.task('default', (callback) => {
  // FIXME(zino): Should print available commands in Bacardi.
  return;
});

/**
 * This task will be used in binding.gyp to build native files.
 */
gulp.task('list_cpp_files', (callback) => {
  return gulp
      .src([
        'core/**/*.h', 'core/**/*.cc', 'examples/**/*.h', 'examples/**/*.cc',
        'test/**/*.h', 'test/**/*.cc'
      ])
      .pipe(printPath());
});

/**
 * This task will be used in binding.gyp to build idl files.
 */
gulp.task('list_idl_files', (callback) => {
  return gulp.src(['examples/**/*.idl', 'test/**/*.idl'])
      .pipe(printAbsolutePath());
});

/**
 * This task will be used in binding.gyp to build idl files.
 */
gulp.task('list_generated_cpp_files', (callback) => {
  // FIXME(zino): The following file list should be generated by idl generator
  // automatically.
  const isWindows = /^win/.test(process.platform);
  const genDir =
      'build/Release/obj/' + (isWindows ? 'global_intermediate/' : 'gen');
  const genFiles = [
    path.join(genDir, 'examples/calculator_bridge.cc'),
    path.join(genDir, 'examples/calculator_bridge.h'),
    path.join(genDir, 'examples/ternary_calculator_bridge.cc'),
    path.join(genDir, 'examples/ternary_calculator_bridge.h'),
    path.join(genDir, 'examples/electron/native/electron_native_bridge.cc'),
    path.join(genDir, 'examples/electron/native/electron_native_bridge.h'),
    path.join(genDir, 'test/test_interface_bridge.cc'),
    path.join(genDir, 'test/test_interface_bridge.h'),
  ];

  return genFiles.forEach((file) => {
    process.stdout.write('"' + file + '"\n');
  });
});

/* Custom plugins */
function printPath() {
  return through.obj((file, encoding, callback) => {
    process.stdout.write('"' + path.relative(file.cwd, file.path) + '"\n');
    callback();
  });
}

function printAbsolutePath() {
  return through.obj((file, encoding, callback) => {
    process.stdout.write('"' + file.path + '"\n');
    callback();
  });
}