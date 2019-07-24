'use strict';

/**
 * Expose vf-watch gulp task as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path, componentPath, reload) {
  return gulp.task('vf-watch', function(done) {
    gulp.watch(componentPath + '/**/*.scss', gulp.series('vf-css')).on('change', reload);
    gulp.watch(componentPath + '/**/*.js', gulp.series('vf-scripts')).on('change', reload);
    gulp.watch(componentPath + '/**/**/assets/*.svg', gulp.series('vf-svg','vf-component-assets')).on('change', reload);
    gulp.watch([componentPath + '/**/**/assets/*', '!' + componentPath + '/**/**/assets/*.svg'], gulp.series('vf-component-assets')).on('change', reload);
  });

};
