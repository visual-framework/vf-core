"use strict";

const fs = require("fs");
const path = require("path");
const gulp = require("gulp");

// Pull configuration from the package.json:
// const {componentPath, componentDirectories, buildDestionation} = require('../vf-config');

// Gulp tasks live in their own files, for the sake of clarity.
// These are done as JS Modules as it makes passing paramaters simpler and avoids
// needing workarounds invlolving global variables. It also allows more flexibile reusability
// as an npm install
// Not familiar with JS Modules? Don't fret, it can be a lot like wrapping code in a function; here's
// a nice quick start: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#Exporting_module_features
// require('./gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
require(path.resolve(".", __dirname + "/gulp-tasks/vf-generator.js"))(gulp, path);
