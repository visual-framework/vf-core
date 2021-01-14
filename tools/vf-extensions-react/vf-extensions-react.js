// vf-extensions-react
import nunjucksSlim from "./assets/nunjucks-slim.js";

var vfNunjucksEnv = new nunjucksSlim.Environment(
    null,
    { autoescape: false }
);

// common vf nunjucks extensions
vfNunjucksEnv.addExtension('spaceless', require('@visual-framework/vf-frctl-extensions/spaceless.js')('null'));
vfNunjucksEnv.addExtension('codeblock', require('@visual-framework/vf-frctl-extensions/codeblock.js')('null'));
vfNunjucksEnv.addExtension('markdown', require('@visual-framework/vf-frctl-extensions/markdown.js')('null'));

export { vfNunjucksEnv };
