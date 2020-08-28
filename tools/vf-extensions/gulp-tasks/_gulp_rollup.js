'use strict';

/**
 * A rollup function to import all tasks.
 */

module.exports = function(gulp, path, componentPath, componentDirectories, buildDestionation) {

  // Gulp tasks live in their own files, for the sake of clarity.
  // These are done as JS Modules as it makes passing paramaters simpler and avoids
  // needing workarounds invlolving global variables.
  require(path.resolve('.', __dirname + '/gulp-fractal.js'))(gulp, path, componentPath, componentDirectories, buildDestionation);
  require(path.resolve('.', __dirname + '/gulp-eleventy.js'))(gulp, path, componentPath, componentDirectories, buildDestionation);
  require(path.resolve('.', __dirname + '/gulp-util.js'))(gulp, path, componentPath, componentDirectories, buildDestionation);

  // Has added npm dependencies so not included
  // require(path.resolve('.', __dirname + '/gulp-build-search-index.js'))(gulp, path, buildDestionation);

  return gulp;
};
