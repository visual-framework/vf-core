
/**
 * Catch references to the "path" filter which is not part of 11ty and
 * results in obtuse error codes.
 *
 * @param {String} text
 */

module.exports = function(text) {
  let result = 'Could not render path for ' + text + ' -- the "path" filter is not supported by 11ty, instead use "| url"';
  console.warn(result);
  return '#<!-- ' + result + ' -->';
}
