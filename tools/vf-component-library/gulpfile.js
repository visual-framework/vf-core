const path = require('path');
const gulp = require('gulp');

// Pull in optional configuration from the package.json file, a la:
const {componentPath, componentDirectories, buildDestionation} = require('@visual-framework/vf-config');

// Tasks to build/run vf-core component system
require('@visual-framework/vf-core/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
require('@visual-framework/vf-extensions/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
// search indexing
require('@visual-framework/vf-extensions/gulp-tasks/gulp-build-search-index.js')(gulp, path, buildDestionation);

// Watch folders for changes
gulp.task('watch', function() {
  // left for convenience for local watch additions
  gulp.watch(['./build/css/styles.css'], gulp.series('eleventy:reload'));
});

// Let's build this sucker.
gulp.task('build', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts'),
  'vf-css:generate-component-css',
  'vf-component-assets:everything',
  'fractal:build',
  'fractal',
  'eleventy:init',
  'eleventy:build',
  'vf-build-search-index'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts'),
  'vf-css:generate-component-css',
  'vf-component-assets:everything',
  'fractal:development',
  'fractal',
  'eleventy:init',
  'eleventy:develop',
  'vf-build-search-index',
  gulp.parallel('watch','vf-watch')
));
