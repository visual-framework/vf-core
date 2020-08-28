'use strict';

/**
 * Expose vf-component gulp task as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path) {
  const shell = require('gulp-shell');

  const generatorPath = path.resolve(__dirname, '..');

  gulp.task('vf-component', shell.task(
    ['yo ' + generatorPath]
  ));

  return gulp;
};
