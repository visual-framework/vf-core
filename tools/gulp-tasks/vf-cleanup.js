'use strict';

/**
 * Expose vf-cleanup gulp task as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp) {
  const del = require('del');

  gulp.task('vf-clean', function(){
    return del(['build/**','temp/**'], {force:true});
  });

  return gulp;
};
