'use strict';

const path = require('path');

module.exports = {
  context: {
    colors: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-colors.ios.json'))
  }
};
