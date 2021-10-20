"use strict";

const hljs = require("highlight.js");

// Return a block of syntax as code with style formatting
// uses: https://highlightjs.org/
// Sample:
// {% codeblock 'html' -%}
//   <link rel="stylesheet" href="https://dev.assets.emblstatic.net/vf/develop/css/styles.css">
//   <script src="https://dev.assets.emblstatic.net/vf/develop/scripts/scripts.js"></script>
// {% endcodeblock %}

module.exports = function(nunjucksEngine,fractal){
  function codeblockExtension() {

    this.tags = ["codeblock"];

    this.parse = function (parser, nodes, lexer) {
      var tok = parser.nextToken();
      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      var body = parser.parseUntilBlocks("error", "endcodeblock");
      var errorBody = null;
      if(parser.skipSymbol("error")) {
        parser.skip(lexer.TOKEN_BLOCK_END);
        errorBody = parser.parseUntilBlocks("endremote");
      }

      parser.advanceAfterBlockEnd();
      return new nodes.CallExtension(this, "run", args, [body, errorBody]);
    };

    this.run = function (context, format, body) {
      // let format = format || 'html'; // if format is not set, use "html"
      let txt = body();
      if(typeof txt == "undefined") return;
      txt = hljs.highlight(txt, {language: format, ignoreIllegals: true }).value;

      return new nunjucksEngine.runtime.SafeString(`<pre class="vf-code-example__pre"><code class="Code Code--lang-${format} vf-code-example">${txt}</code></pre>`);
    };

  }
  return new codeblockExtension();
};
