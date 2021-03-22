const path = require('path');

module.exports = {
  getTokenFile(text) {

    return "components." + path.basename(__filename) + ".properties";
  }
};
