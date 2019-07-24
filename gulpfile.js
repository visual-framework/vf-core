'use strict';

// todo we might be able to remove these package.json Dependencies,
// they don't seem to be needed
// const replace = require('gulp-replace');
// const postcss     = require('gulp-postcss');
// const reporter    = require('postcss-reporter');
// const syntax_scss     = require('postcss-scss');
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');

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
// todo: this could/should become a JS module
const fs = require('fs');
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

// Gulp tasks live in their own files, for the sake of clarity.
// These are done as JS Modules as it makes passing paramaters simpler and avoids
// needing workarounds invlolving global variables. It also allows more flexibile reusability
// as an npm install
require('./tools/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, buildDestionation);
