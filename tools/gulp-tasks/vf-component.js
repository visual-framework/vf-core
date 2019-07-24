'use strict';

/**
 * Expose vf-component gulp task as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp) {
  const shell = require('gulp-shell');

  gulp.task('vf-component', shell.task(
    ['yo ./tools/component-generator']
  ));

  return gulp;
};
