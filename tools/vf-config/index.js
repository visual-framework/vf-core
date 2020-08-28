'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Expose vf-config as a JS module
 * Pull in some optional configuration from the package.json file, a la:
 * (note: all settings are optional)
 * "vfConfig": {
 *  "vfName": "My Component Library",
 *  "vfNameSpace": "myco-",
 *  "vfComponentPath": "./src/components",
 *  "vfComponentDirectories": [
 *     "vf-core-components",
 *     "../node_modules/your-optional-collection-of-dependencies"
 *    NOTE: Don't forget to symlink: `cd components` `ln -s ../node_modules/your-optional-collection-of-dependencies`
 *   ],
 *  "vfBuildDestination": "./build",
 *  "vfBuildFractalMode": "normal",
 *    NOTE : run fractal as 'normal' full build of static assets,
 *           'dataobject' to render only to memory or
 *           'none' to not build at all
 *  "vfThemePath": "@frctl/mandelbrot"
 *},
 */

// Load the vf-core package.json config
const config = JSON.parse(fs.readFileSync('./package.json'));
let vfCoreConfig;

if (config.name === '@visual-framework/vf-core') {
  // if being run from within the vf-core project, use the local package.json
  vfCoreConfig = JSON.parse(fs.readFileSync('./package.json'));
} else {
  // load vfCoreConfig from node_modules
  vfCoreConfig = JSON.parse(fs.readFileSync(require.resolve('@visual-framework/vf-core/package.json')));
}

config.vfConfig = config.vfConfig || [];
global.vfName = config.vfConfig.vfName || "Visual Framework 2.0";
global.vfNamespace = config.vfConfig.vfNamespace || "vf-";
global.vfComponentPath = config.vfConfig.vfComponentPath || path.resolve('.', 'components');
global.vfBuildDestination = config.vfConfig.vfBuildDestination || 'temp/build-files';
global.vfThemePath = config.vfConfig.vfThemePath || './tools/vf-frctl-theme';
global.vfBuildFractalMode = config.vfConfig.vfBuildFractalMode || 'normal';
global.vfVersion = vfCoreConfig.version || 'not-specified';
const componentPath = path.resolve('.', global.vfComponentPath).replace(/\\/g, '/');
const componentDirectories = config.vfConfig.vfComponentDirectories || ['vf-core-components'];
const buildDestionation = path.resolve('.', global.vfBuildDestination).replace(/\\/g, '/');

module.exports = {
  componentPath,
  componentDirectories,
  buildDestionation
};

