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
  ],
};

// Only generate the tokens if the `/dist` assets have been generated
try {
  if (path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-colors.ios.json')) {
    fractalConfig.context = {
      'component-type': 'utility',
      breakpoints: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-breakpoints.ios.json')),
      colors: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-colors.ios.json')),
      uiColors: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-ui-colors.ios.json')),
      spacing: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-spacing.ios.json')),
      typography: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-font--sans.ios.json'))
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
