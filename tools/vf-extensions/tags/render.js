// A port-fork-enhancement of the Fractal render extension for Nunjucks for 11ty
// Original: https://github.com/frctl/nunjucks/blob/develop/src/extensions/render.js

// {% render '@'+variant.handle, variant.context, true, { escape: false, beautify: true, codetype: 'html', highlight: true } %}
// - second property is for merging the parent context to set defaults
// - third option set escaping of code, beautify (formatting), code type (default: html) and highlighting (hljs)

module.exports = function (nunjucksEngine,fractal) {

  this.tags = ["render"];

  this.parse = function (parser, nodes) {
      var tok = parser.nextToken();
      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      return new nodes.CallExtensionAsync(this, 'run', args);
  };

  this.run = function () {

      const source = fractal.components;
      const args = Array.from(arguments);
      const rootContext = args[0].ctx;
      const callback = args.pop();
      args.shift();
      const handle = args[0];
      let context = args[1];
      const merge = args[2] || true;
      args[3] = args[3] || {};
      const escape = args[3].escape || false;
      const beautify = args[3].beautify || false;
      const codetype = args[3].codetype || 'html';
      const highlight = args[3].highlight || false;
      const inherit = args[3].inherit || false;
      const entity = source.find(handle);
      if (!entity) {
        console.warn(`Could not render component '${handle}' - component was not found.`);
        ret = new nunjucksEngine.runtime.SafeString(`<!-- Could not render component '${handle}' - component not found. -->`);
        callback(null, ret)
        return;
      }
      const defaultContext = entity.isComponent ? entity.variants().default().context : entity.context;
      if (!context) {
          context = defaultContext;
      } else if (merge) {
        // Inherit unspecified settings from the parent
        // If parent context has svg: true, and you don't specify, then you'll inherit
        context = Object.assign(defaultContext, context);
      }

      source.resolve(context).then(context => {
          // fix env for rendered components
          // let env = JSON.parse(JSON.stringify(rootContext._env));
          // context._env = env;
          entity.render(context).then(html => {
              let ret;
              if (beautify) {
                // https://www.npmjs.com/package/js-beautify
                const beautify = require('js-beautify').html;
                html = beautify(html, { indent_size: 2 });
              }
              if (highlight) {
                const hljs = require('highlight.js');
                html = hljs.highlight(html, {language: codetype, ignoreIllegals: true }).value;
              }
              if (escape) {
                // escaped by default, so just don't pass a safe string
                ret = html;
              } else {
                ret = new nunjucksEngine.runtime.SafeString(html);
              }
              callback(null, ret);
          }).catch(err => {
            // if we still fail, we're likely missing a nested sub-componenent
            console.warn(`Could not render component '${handle}' - a nested-component was not found.`);
            ret = new nunjucksEngine.runtime.SafeString(`<!-- Could not render component '${handle}' - a nested-component not found. -->`);
            callback(null, ret)
          });
      });
  };

};
