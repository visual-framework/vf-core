'use strict';

const fs = require('fs');

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

// Pull in some optional configuration from the package.json file, a la:
// "vfConfig": {
//   "vfName": "My Component Library",
//   "vfNameSpace": "myco-",
//   "vfComponentPath": "./src/components",
//   "vfBuildDestination": "./build",
//   "vfThemePath": "@frctl/mandelbrot"
// },
// all settings are optional
const config = JSON.parse(fs.readFileSync('./package.json'));
config.vfConfig = config.vfConfig || [];
global.vfName = config.vfConfig.vfName || "Visual Framework 2.0";
global.vfNamespace = config.vfConfig.vfNamespace || "vf-";
global.vfComponentPath = config.vfConfig.vfComponentPath || __dirname + '/components';
global.vfBuildDestination = config.vfConfig.vfBuildDestination || __dirname + '/temp/build-files';
global.vfThemePath = config.vfConfig.vfThemePath || './tools/vf-frctl-theme';
const path = require('path');
const componentPath = path.resolve('.', global.vfComponentPath);
const buildDestionation = path.resolve('.', global.vfBuildDestination);

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

const gulp = require('gulp');
const shell = require('gulp-shell');

// todo we might be able to remove these
// const replace = require('gulp-replace');

// Local Server Stuff
global.browserSync = require('browser-sync').create();
const reload = global.browserSync.reload;

// Many Gulp tasks live in their own files, for the sake of clarity.
require('require-dir')('./tools/gulp-tasks');

// -----------------------------------------------------------------------------
// Default Tasks
// -----------------------------------------------------------------------------

gulp.task('vf-scripts', gulp.series(
  'vf-scripts:es5', 'vf-scripts:modern'
));

gulp.task('vf-dev', gulp.series(
  'vf-clean', 'vf-component-assets', ['vf-css', 'vf-scripts'], 'vf-fractal:start', ['vf-lint:scss-soft-fail', 'vf-watch']
));

// Build as a static site for CI
gulp.task('vf-build', gulp.series(
  'vf-clean', 'vf-css-gen', 'vf-css', 'vf-component-assets', 'vf-scripts', 'vf-fractal:build'
));

gulp.task('vf-prepush-test', gulp.parallel(
  'vf-lint:scss-hard-fail', 'vf-css'
));

gulp.task('vf-component', shell.task(
  ['yo ./tools/component-generator']
));
