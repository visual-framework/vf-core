'use strict';

const path = require('path');

// Only generate the colour tokens if the vf-design-tokens are installed.
// That is: if this is a full VF desing system, we probably have design tokens,
// if not we're likely running as a VF component system and we don't want things
// to blow up
try {
  if (path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-colors.ios.json')) {
    module.exports = {
      context: {
        colors: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-font--sans.ios.json'))
      }
    };
  }
} catch(err) {
  module.exports = {
    context: {
      colors: null
    }
  }
}
