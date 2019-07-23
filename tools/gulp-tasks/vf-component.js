const gulp   = require('gulp');
const shell = require('gulp-shell');

gulp.task('vf-component', shell.task(
  ['yo ./tools/component-generator']
));
