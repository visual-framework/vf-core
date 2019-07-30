'use strict';

/**
 * Expose vf-fractal gulp tasks as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path, componentPath, buildDestionation) {
  const fractalConfig = path.resolve('.', 'fractal.js') ;

  gulp.task('vf-fractal:start', function(done) {
    const fractal = require(fractalConfig).initialize('server',fractalReadyCallback);
    function fractalReadyCallback() {
      done();
    }
  });

  gulp.task('vf-fractal:build', function(done) {
    const fractal = require(fractalConfig).initialize('build',fractalReadyCallback);
    function fractalReadyCallback() {
      done();
    }
  });

  return gulp;
};
