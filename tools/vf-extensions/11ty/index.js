// const dateToISO = require("./src/dateToISO");
// const absoluteUrl = require("./src/absoluteUrl");
// const htmlToAbsoluteUrls = require("./src/htmlToAbsoluteUrls");

module.exports = function(config) {

  // A useful way to reference to the contect we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Common configuration
  // --------------
  config.addPlugin(require("./vfEleventyCommonPlugin.js"));

  // Filters
  // --------------
  config.addFilter("markdown", require("../filters/markdown.js") );
  config.addFilter("squash", require("../filters/squash.js") );
  config.addFilter("path", require("../filters/path.js") );

  // Tags
  // --------------

  // Support the fractal-style render
  // `{% render "@vf-heading", {"title": "EMBL.org", "type": "extra-large"} %}`
  // config.addNunjucksTag("render", require("./src/filters/render.js"));
  config.addNunjucksTag("render", function(nunjucksEngine) {
    var fractalRenderExtension = require("../tags/render.js");
    return new fractalRenderExtension(nunjucksEngine,fractal);
  });

  // Return a block of syntax as code with style formatting
  // Sample:
  // {% codeblock 'html' -%}
  //   <link rel="stylesheet" href="https://dev.assets.emblstatic.net/vf/develop/css/styles.css">
  //   <script src="https://dev.assets.emblstatic.net/vf/develop/scripts/scripts.js"></script>
  // {% endcodeblock %}
  config.addNunjucksTag("codeblock", function(nunjucksEngine) {
    var codeblockExtension = require("../tags/codeblock.js");
    return new codeblockExtension(nunjucksEngine,fractal);
  });

  // Add a tag level markdown filter
  // {% markdown %}
  //
  // [I'm some markdown](#link)
  //
  // {% endmarkdown %}
  config.addNunjucksTag("markdown", function(nunjucksEngine) {
    var fractalRenderExtension = require("../tags/markdown_tag.js");
    return new fractalRenderExtension(nunjucksEngine);
  });

  // Return a section of code without spaces
  // {% spaceless -%}
  //   <a href="#"
  //     class="vf-link"
  //       >
  //     I have a bunch of
  //     silly whitespace that can mass up pre-processors
  // </a>
  // {% endspaceless %}
  config.addNunjucksTag("spaceless", function(nunjucksEngine) {
    var SpacelessExtension = require("../tags/spaceless.js");
    return new SpacelessExtension(nunjucksEngine);
  });

};
