'use strict';

/**
 * A rollup function to import all tasks.
 */

module.exports = function(gulp, path, componentPath, componentDirectories, buildDestionation) {
  const watch = require('gulp-watch');

  // Local Server Stuff
  const browserSync = require('browser-sync').create();
  const reload = browserSync.reload;

  // Gulp tasks live in their own files, for the sake of clarity.
  // These are done as JS Modules as it makes passing paramaters simpler and avoids
  // needing workarounds invlolving global variables.
  require(path.resolve('.', __dirname + '/vf-assets.js'))(gulp, path, componentPath, buildDestionation);
  require(path.resolve('.', __dirname + '/vf-cleanup.js'))(gulp, buildDestionation);
  require(path.resolve('.', __dirname + '/vf-component.js'))(gulp, path);
  require(path.resolve('.', __dirname + '/vf-css.js'))(gulp, path, componentPath, componentDirectories, buildDestionation, browserSync);
  require(path.resolve('.', __dirname + '/vf-scripts.js'))(gulp, path, componentPath, componentDirectories, buildDestionation);
  require(path.resolve('.', __dirname + '/vf-fractal.js'))(gulp, path, componentPath, buildDestionation);
  require(path.resolve('.', __dirname + '/vf-watch.js'))(gulp, path, componentPath, reload);
  require(path.resolve('.', __dirname + '/vf-templates-precompile.js'))(gulp, path, componentPath);
  require(path.resolve('.', __dirname + '/vf-build.js'))(gulp, buildDestionation);

  // -----------------------------------------------------------------------------
  // Main tasks
  // -----------------------------------------------------------------------------

  gulp.task('vf-dev', gulp.series(
    'vf-clean', ['vf-css', 'vf-scripts'], 'vf-component-assets', 'vf-fractal:start', ['vf-lint:scss-soft-fail', 'vf-templates-precompile', 'vf-watch']
  ));

  gulp.task('vf-prepush-test', gulp.parallel(
    'vf-lint:scss-hard-fail', 'vf-css'
  ));

  return gulp;
};
