const gulp   = require('gulp');
const path = require('path');
const componentPath = path.resolve('.', global.vfComponentPath);

// Image things
const svgmin = require('gulp-svgmin');

// -----------------------------------------------------------------------------
// Component Assets
// -----------------------------------------------------------------------------
gulp.task('vf-svg', () => {
  return gulp
    .src(componentPath + '/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest(componentPath));
});
