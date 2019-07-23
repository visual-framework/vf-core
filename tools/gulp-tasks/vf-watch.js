const gulp   = require('gulp');
const path = require('path');
const watch = require('gulp-watch');
const componentPath = path.resolve('.', global.vfComponentPath);

// -----------------------------------------------------------------------------
// Watch Tasks
// -----------------------------------------------------------------------------

gulp.task('vf-watch', function(done) {
  gulp.watch(componentPath + '/**/*.scss', gulp.series('vf-css')).on('change', reload);
  gulp.watch(componentPath + '/**/*.js', gulp.series('vf-scripts')).on('change', reload);
  gulp.watch(componentPath + '/**/**/assets/*.svg', gulp.series('vf-svg','vf-component-assets')).on('change', reload);
  gulp.watch([componentPath + '/**/**/assets/*', '!' + componentPath + '/**/**/assets/*.svg'], gulp.series('vf-component-assets')).on('change', reload);
});
