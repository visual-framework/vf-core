const gulp   = require('gulp');
const del = require('del');

// -----------------------------------------------------------------------------
// Cleanup Tasks
// -----------------------------------------------------------------------------

gulp.task('vf-clean', function(){
  return del(['build/**','temp/**'], {force:true});
});
