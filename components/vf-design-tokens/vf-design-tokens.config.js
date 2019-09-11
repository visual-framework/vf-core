'use strict';

const path = require('path');

// As the design tokens need special logic the fractal config is a `.js` file, that
// is not combinable with a `.yml` config file
// https://fractal.build/guide/core-concepts/configuration-files.html#configuration-file-formats
let fractalConfig = {
	title: 'Reusable Design Tokens',
  label: 'Design Tokens',
	status: 'beta',
  variants: {
    name: 'default',
    context: {
      hidden: "true" // as best i can tell this should hide the default, but it doesn't
    }
  }
};

// Only generate the tokens if the `/dist` assets have been generated
try {
  if (path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-colors.ios.json')) {
    fractalConfig.context = {
      'component-type': 'utility',
      colors: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-colors.ios.json')),
      spacing: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-spacing.ios.json')),
      typography: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-font--sans.ios.json'))
    };
  }
} catch(err) {
  fractalConfig.context = {
    'component-type': 'utility',
      colors: null,
      spacing: null,
      typography: null
  };
}

// export the config to fractal
module.exports = fractalConfig;
