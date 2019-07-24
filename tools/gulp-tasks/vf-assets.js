'use strict';

/**
 * Expose vf-assets gulp task as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path, componentPath, buildDestionation) {
  const svgmin = require('gulp-svgmin');

  gulp.task('vf-svg', () => {
    return gulp
      .src(componentPath + '/**/*.svg')
      .pipe(svgmin())
      .pipe(gulp.dest(componentPath));
  });

  gulp.task('vf-component-assets', function() {
    return gulp
      .src([componentPath + '/vf-core-components/**/assets/**/*', componentPath + '/**/assets/**/*'])
      .pipe(gulp.dest(buildDestionation + '/assets'));
  });

  return gulp;
};
