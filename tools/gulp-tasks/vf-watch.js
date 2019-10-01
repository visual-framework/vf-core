'use strict';

/**
 * Expose vf-watch gulp task as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path, componentPath, reload) {
  return gulp.task('vf-watch', function(done) {
    gulp.watch([componentPath + '/**/*.scss', '!' + componentPath + '/**/package.variables.scss'], gulp.series('vf-css')).on('change', reload);
    gulp.watch(componentPath + '/**/*.js', gulp.series('vf-scripts')).on('change', reload);
    gulp.watch([componentPath + '/**/*.njk'], gulp.series('vf-templates-precompile'));
    gulp.watch([componentPath + '/**/**/assets/*'], gulp.series('vf-component-assets')).on('change', reload);
  });

};
