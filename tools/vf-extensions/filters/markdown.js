/**
 * Process a string as markdown
 *
 * @param {String} text
 * @example {{ "[Some markdown as a link](#) | markdown" }}
 */

const md = require('markdown-it')({
  // https://github.com/markdown-it/markdown-it
  html: true
});

module.exports = function(text) {
  return md.render(text);
};
