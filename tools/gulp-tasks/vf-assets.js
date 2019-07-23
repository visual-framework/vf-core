const gulp   = require('gulp');
const path = require('path');
const componentPath = path.resolve('.', global.vfComponentPath);
const buildDestionation = path.resolve('.', global.vfBuildDestination);

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

gulp.task('vf-component-assets', function() {
  return gulp
    .src([componentPath + '/vf-core-components/**/assets/**/*', componentPath + '/**/assets/**/*'])
    .pipe(gulp.dest(buildDestionation + '/assets'));
});
