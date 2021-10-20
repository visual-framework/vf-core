"use strict";

/**
 * Expose fractal gulp tasks as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path) {

  // Store fractal build mode
  let fractalBuildMode;

  gulp.task("fractal:development", function(done) {
    fractalBuildMode = "server";
    global.vfOpenBrowser = true; // if you want to open a browser tab for the component library
    done();
  });

  gulp.task("fractal:build", function(done) {
    fractalBuildMode = "dataobject"; // run fractal in server mode as there's no need for static html assets
    global.vfOpenBrowser = false; // if you want to open a browser tab for the component library
    done();
  });

  // Run eleventy, but only after we wait for fractal to bootstrap
  gulp.task("fractal", function(done) {
    global.vfBuilderPath = __dirname + "/build/vf-core-components";
    global.vfDocsPath = path.resolve(__dirname, "../fractal/docs");
    global.fractal = require("@visual-framework/vf-core/fractal.js").initialize(fractalBuildMode,fractalReadyCallback); // make fractal components are available gloablly

    function fractalReadyCallback(fractal) {
      global.fractal = fractal; // save fractal globally
      console.log("Done building Fractal");
      done();
    }
  });

  return gulp;
};

