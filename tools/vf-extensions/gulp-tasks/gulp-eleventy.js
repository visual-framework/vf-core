"use strict";

/**
 * Expose gulp tasks as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp) {

  // Prepare Eleventy
  process.argv.push("--config=eleventy.js"); // Eleventy config
  let elev;

  // Init Eleventy
  gulp.task("eleventy:init", function(done) {
    console.log("eleventy:init is no longer required. You can remove it from your gulpfile.js");
    done();
  });

  // Run eleventy for local development
  gulp.task("eleventy:develop", function(done) {
    console.log("eleventy:develop underway");
    process.argv.push("--serve");
    process.env.ELEVENTY_ENV = "development";
    elev = require("../11ty/eleventy-cmd.js");
    elev.init()
      .then(function () {
        elev.watch().then(function() {
          console.log("Started 11ty");
          elev.serve(3030);
          done();
        });
      });
  });

  // Run eleventy as a static build
  gulp.task("eleventy:build", function(done) {
    process.argv.push("--quiet");
    process.env.ELEVENTY_ENV = "production";
    elev = require("../11ty/eleventy-cmd.js");
    elev.init()
      .then(function () {
        elev.write().then(function() {
          console.log("Done building 11ty");
          done();
        });
      });
  });

  // Refresh eleventy
  // This is more thorough than elev.watch() as it will
  // also capture variable changes
  gulp.task("eleventy:reload", function(done) {
    elev.restart();
    elev.write();
  });

  return gulp;
};
