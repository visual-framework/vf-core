'use strict';

const path = require('path');

module.exports = {
  context: {
    typography: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-font--sans.ios.json'))
  }
};
