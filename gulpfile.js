'use strict';

const fs = require('fs');
const path = require('path');
const gulp = require('gulp');

// Pull configuration from the package.json:
const {componentPath, componentDirectories, buildDestionation} = require('./tools/vf-config');

// Gulp tasks live in their own files, for the sake of clarity.
// These are done as JS Modules as it makes passing paramaters simpler and avoids
// needing workarounds invlolving global variables. It also allows more flexibile reusability
// as an npm install
// Not familiar with JS Modules? Don't fret, it can be a lot like wrapping code in a function; here's
// a nice quick start: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#Exporting_module_features
require('./tools/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);


// The below gulp tasks are intended for use only by vf-core
// ---

// Copy prepared files for deployment
// Intended for use directly by vf-core
gulp.task('vf-core:deploy-move-build-files', function() {
  // vf-core copy some assets into /temp as to de-conflict fractal asset writing
  console.info('Copying `/temp/build-files` assets.');
  return gulp.src(buildDestionation + '/**/*')
    .pipe(gulp.dest('./build')); // hard-coded as this is used only by vf-core directly
});

// Runs vf-build and does an 
gulp.task('vf-core:prepare-deploy',
  gulp.series(
    'vf-build',
    'vf-core:deploy-move-build-files',
  )
);
