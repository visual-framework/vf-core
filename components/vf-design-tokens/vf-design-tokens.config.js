'use strict';

const path = require('path');

// As the design tokens need special logic the fractal config is a `.js` file, that
// is not combinable with a `.yml` config file
// https://fractal.build/guide/core-concepts/configuration-files.html#configuration-file-formats
let fractalConfig = {
  title: 'Design Tokens',
  label: 'Design Tokens',
  status: 'live',
  variants: [
    {
      name: 'default',
      label: 'Welcome',
    },
  ]
};

// Only generate the tokens if the `/dist` assets have been generated
try {
  // Get the config from the project using the VF
  const config = require(path.resolve('.','package.json'));
  // https://nodejs.dev/learn/the-nodejs-path-module#pathnormalize
  if (path.normalize(config.vfConfig.vfComponentPath+'/vf-design-tokens/dist/json/vf-colors.ios.json')) {
    fractalConfig.context = {
      'component-type': 'utility',
      breakpoints: require(path.normalize(config.vfConfig.vfComponentPath+'/vf-design-tokens/dist/json/vf-breakpoints.ios.json')),
      colors: require(path.normalize(config.vfConfig.vfComponentPath+'/vf-design-tokens/dist/json/vf-colors.ios.json')),
      themes: require(path.normalize(config.vfConfig.vfComponentPath+'/vf-design-tokens/dist/json/vf-themes.ios.json')),
      uiColors: require(path.normalize(config.vfConfig.vfComponentPath+'/vf-design-tokens/dist/json/vf-ui-colors.ios.json')),
      spacing: require(path.normalize(config.vfConfig.vfComponentPath+'/vf-design-tokens/dist/json/vf-spacing.ios.json')),
      typography: require(path.normalize(config.vfConfig.vfComponentPath+'/vf-design-tokens/dist/json/vf-font--sans.ios.json'))
    };
  }
} catch(err) {
  fractalConfig.context = {
    'component-type': 'utility',
      breakpoints: null,
      colors: null,
      uiColors: null,
      spacing: null,
      typography: null
  };
}

// export the config to fractal
module.exports = fractalConfig;
