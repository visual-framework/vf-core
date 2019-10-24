'use strict';

// const resolve = require('path').resolve

/**
 * Expose vf-fractal gulp tasks as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path) {

  // start fractal in a desired mode, and await it to return the environment
  let startFractal = function(mode) {
    return new Promise(function(resolve, ) {
      const fractalConfig = path.resolve(__dirname, '../../fractal.js').replace(/\\/g, '/');
      require(fractalConfig).initialize(mode, fractalReadyCallback);

      function fractalReadyCallback(fractal) {
        global.fractal = fractal; // "save" fractal so the templates and nunjucks environments are available 
        resolve();
      }
    });
  }

  gulp.task('vf-fractal:start', function(done) {
    startFractal('server').then(done);
  });

  gulp.task('vf-fractal:build', function(done) {
    global.vfOpenBrowser = false;
    startFractal('build').then(done);
  });

  gulp.task('vf-fractal:dataobject', function(done) {
    global.vfOpenBrowser = false;
    startFractal('dataobject').then(done);
  });

  return gulp;
};
