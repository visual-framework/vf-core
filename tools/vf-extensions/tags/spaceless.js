"use strict";

// Strip unneeded spaces

// Sample:
// {% spaceless -%}
//   <a href="#"
//     class="vf-link"
//       >
//     I have a bunch of
//     silly whitespace that can mass up pre-processors
// </a>
// {% endspaceless %}

// via https://github.com/mozilla/nunjucks/issues/207

module.exports = function(nunjucksEngine){
  this.tags = ["spaceless"];

  this.parse = function (parser, nodes, lexer) {
    var tok = parser.nextToken();

    var args = parser.parseSignature(null, true);
    parser.advanceAfterBlockEnd(tok.value);

    var body = parser.parseUntilBlocks("error","endspaceless");
    var errorBody = null;
    if(parser.skipSymbol("error")) {
      parser.skip(lexer.TOKEN_BLOCK_END);
      errorBody = parser.parseUntilBlocks("endremote");
    }

    parser.advanceAfterBlockEnd();

    return new nodes.CallExtension(this, "run", args, [body, errorBody]);
  };

  this.run = function (context, body) {
    return new nunjucksEngine.runtime.SafeString(body().replace(/\s+/g, " ").replace(/>\s</g, "><"));
  };
};
