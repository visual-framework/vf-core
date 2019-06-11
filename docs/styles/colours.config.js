'use strict';

const path = require('path');

module.exports = {
  context: {
    colors: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-colors.ios.json')),
    uiColors: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-ui-colors.ios.json')),
    fonts: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-font--sans.ios.json')),
    spaces: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-spacing.ios.json'))
  }
};
