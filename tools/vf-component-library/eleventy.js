const { DateTime } = require("luxon");
const _            = require("lodash");
const Path         = require("path");

module.exports = function(config) {

  // Add in tags, filters useful for Visual Framework installs
  // (fractal's render tag, codeblock, markdown, etc)
  // and common configuration
  const vfEleventyExtension = require("@visual-framework/vf-extensions\/11ty");
  config.addPlugin(vfEleventyExtension);

  // BroswerSync options
  config.setBrowserSyncConfig({ open: true });

  // Filters
  // https://www.11ty.io/docs/filters/
  // -----

  // {{ "myContent" | sampleFilter }}
  // config.addFilter("sampleFilter", function(value) {
  //   return 'ddd' + value;
  // });

  // Add any utility filters
  config.addFilter("dateDisplay", (dateObj, format = "d LLL y") => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc"
    }).toFormat(format);
  });

  // camelcase
  // {{ 'string words' | camelize(true) }}
  config.addFilter("camelize", (str, upperCaseFirst = false) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      if (upperCaseFirst) {
        return word.toUpperCase();
      } else {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }
    }).replace(/\s+/g, "").replace("-", "");
  });

  // Split filter support
  // {{ 'string words' | split(' ' ) }}
  config.addFilter("split", (string, divider = " ") => {
    return string.split(divider);
  });

  // Get the text between two strings
  // If either string cannot be found, will return "false"
  // {{ 'now the words i want then' | stringBetween('now','then') }}
  config.addFilter("stringBetween", (string, begin = " ", end = " ") => {
    // console.log(end)
    // console.log(string.length);
    // console.log(string.lastIndexOf(begin));
    // console.log(string.lastIndexOf(end));
    // console.log('---');
    if (string.lastIndexOf(begin) < 0) {
      return false;
    }
    if (string.lastIndexOf(end) < 0) {
      return false;
    }
    let halfTrucnated = string.substring(string.lastIndexOf(begin), string.length);
    halfTrucnated = halfTrucnated.replace(begin, ""); // remove the original match character
    return halfTrucnated.substring(
      0,
      halfTrucnated.indexOf(end)
    );
  });


  // Shortcodes
  // https://www.11ty.io/docs/shortcodes/
  // -----

  // nunjucks
  // {% sampleShortcode "firstName", "lastName" %}
  // handlebars
  // {{ sampleShortcode "firstName" "lastName" }}
  // config.addShortcode("sampleShortcode", function(firstName, lastName) {
  //   return 'hi ' + firstName + lastName;
  // });

  // If you want to minify html output
  // config.addTransform("htmlmin", require("./node_modules/\@visual-framework/vf-eleventy--extensions/utils/minify-html.js"));

  // Add any custom tags

  // config.addNunjucksTag("uppercase", function(nunjucksEngine) {
  //   return new function() {
  //     this.tags = ["uppercase"];
  //
  //     this.parse = function(parser, nodes, lexer) {
  //       var tok = parser.nextToken();
  //
  //       var args = parser.parseSignature(null, true);
  //       parser.advanceAfterBlockEnd(tok.value);
  //
  //       return new nodes.CallExtensionAsync(this, "run", args);
  //     };
  //
  //     this.run = function(context, myStringArg, callback) {
  //       let ret = new nunjucksEngine.runtime.SafeString(
  //         myStringArg.toUpperCase()
  //       );
  //       callback(null, ret);
  //     };
  //   }();
  // });

  // pass some assets right through
  // config.addPassthroughCopy("./src/site/images");

  return {
    dir: {
      input: "src/site",
      output: "build",
      data: "_data"
    },
    templateFormats : [
      "njk", "md", // note that .md files will also be parsed with njk processor
      "css", "js" // passthrough file copying for static assets
    ],
    openBrowser: true,
    htmlTemplateEngine : ["njk", "md"],
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true,
    pathPrefix: "/" // if your site is deployed to a sub-url, otherwise comment out
  };

};
