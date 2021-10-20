"use strict";

/**
 * Expose gulp tasks as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp) {

  // This ensures we exit gulp "cleanly"
  // Done mainly for Eleventy as it doesn't always finish promptly, but it's a general-purpose task
  gulp.task("manual-exit", function(done) {
    done()(process.exit());
  });

  return gulp;
};

