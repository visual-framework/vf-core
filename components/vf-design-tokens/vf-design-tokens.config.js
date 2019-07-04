'use strict';

const path = require('path');

// Only generate the tokens if the `/dist` assets have been generated
try {
  if (path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-colors.ios.json')) {
    module.exports = {
      context: {
        colors: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-colors.ios.json')),
        spacing: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-spacing.ios.json')),
        typography: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-font--sans.ios.json'))
      }
    };
  }
} catch(err) {
  module.exports = {
    context: {
      colors: null,
      spacing: null,
      typography: null
    }
  }
}
