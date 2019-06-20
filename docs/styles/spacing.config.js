'use strict';

const path = require('path');

module.exports = {
  context: {
    spacing: require(path.join(process.cwd(), 'components/vf-design-tokens/dist/json/vf-spacing.ios.json'))
  }
};
