'use strict';

/**
 * Expose gulp tasks as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp) {

  // Prepare Eleventy
  process.argv.push('--config=eleventy.js'); // Eleventy config
  let elev;

  // Init Eleventy
  gulp.task('eleventy:init', function(done) {
    elev = require('../11ty/eleventy-cmd.js');
    done();
  });

  // Run elevent for local development
  gulp.task('eleventy:develop', function(done) {
    process.argv.push('--serve');
    process.env.ELEVENTY_ENV = 'development';

    // You could instead use elev.write() here, but then you should add your own browsersync task
    elev.watch().then(function() {
      console.log('Eleventy loaded, serving to browser');
      elev.serve('3000');
      done();
    });
  });

  // Run eleventy as a static build
  gulp.task('eleventy:build', function(done) {
    process.argv.push('--quiet');
    process.env.ELEVENTY_ENV = 'production';

    elev.write().then(function() {
      console.log('Done building 11ty');
      done();
    });
  });

  // Refresh eleventy
  // This is more thorough than elev.watch() as it will
  // also capture variable changes
  gulp.task('eleventy:reload', function(done) {
    elev.restart()
    elev.write()
  });

  return gulp;
};

