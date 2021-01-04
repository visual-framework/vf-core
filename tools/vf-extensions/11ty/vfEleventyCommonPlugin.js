// TODO: refactor this, some of this could go in index.js, some should be better broken out
module.exports = function(config) {
  // get the fractal environment
  var fractal = global.fractal;

  // Watch for changes, we'll use this to trigger a fractal rebuild
  const touch = require("touch");
  fractal.components.on("updated", function(source, eventData) {
    // don't do anything if it's css or js file thats updated as these are handled by vf-watch
    if (source.path.indexOf(".js") > 0 ||
        source.path.indexOf(".css") > 0 ||
        source.path.indexOf(".scss") > 0)
    {
      return;
    }

    console.log("Component source has been updated: " + source.path);

    // For now we're just touching a watched file until we can figure out something better
    // https://github.com/11ty/eleventy/issues/604
    // A solution will likely require a PR or forking eleventy's cmd.js
    // to `module.exports = elev;` and then we can:
    // ```
    // global.eleventy.restart()
    // global.eleventy.write()
    // ```
    touch('src/site/_data/fractalEnvironment.js');
    console.log('Manual rebuild of 11ty triggered')
  });

  // rss feed plugin
  // https://github.com/11ty/eleventy-plugin-rss
  const pluginRss = require("@11ty/eleventy-plugin-rss");
  config.addPlugin(pluginRss);

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');
};
