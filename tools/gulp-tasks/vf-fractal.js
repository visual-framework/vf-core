const gulp   = require('gulp');
const path = require('path');
const componentPath = path.resolve('.', global.vfComponentPath);
const buildDestionation = path.resolve('.', global.vfBuildDestination);
const fractalConfig = path.resolve('.', 'fractal.js') ;

// -----------------------------------------------------------------------------
// Fractal Tasks
// -----------------------------------------------------------------------------

gulp.task('vf-fractal:start', function(done) {
  const fractal = require(fractalConfig).initialize('server',fractalReadyCallback);
  function fractalReadyCallback() {
    done();
  }
});

gulp.task('vf-fractal:build', function(done) {
  const fractal = require(fractalConfig).initialize('build',fractalReadyCallback);
  function fractalReadyCallback() {
    // Copy compiled css/js and other assets
    gulp.src(buildDestionation + '/**/*')
      .pipe(gulp.dest('./build'));
      console.info('Copied `/temp/build-files` assets.');

    done();
  }
});
