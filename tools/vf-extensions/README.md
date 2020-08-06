# vf-extensions

This project supports sites using Visual Framework components, like [`vf-eleventy`](https://github.com/visual-framework/vf-eleventy)
It has reusable componentised code, Gulp tasks, modules and config.

## What's here and what it does

### Gulp tasks

in `./gulp-tasks/`

- `gulp-build-search-index.js`: scans compiled html to make a JS object search index
- `_gulp_rollup.js`: require this bundle and get the files below
    - `gulp-eleventy.js`: specific to running Eleventy
    - `gulp-fractal.js`: specific to running Fractal
    - `gulp-util.js`: utility tasks

### Eleventy

in `/11ty`

- `eleventy-cmd.js`: a fork of the default Eleventy cmd.js
- `index.js`: reusable extensions/config for Eleventy and to load the below tags and filters
    - `vfEleventyCommonPlugin.js`: Reusable config for sane defaults 

### Nunjucks tags

in `./tags/`

- `codeblock.js`: outputs highlight code markup
- `markdwon_tag.js`: process a text area as markdown
- `render.js`: port-fork-enhancement of the Fractal render extension for Nunjucks for 11ty and the VF
  - `{% render '@'+variant.handle, variant.context, true, { escape: false, beautify: true, codetype: 'html', highlight: true } %}`
  - second property is for merging the parent context to set defaults
  - third option set escaping of code, beautify (formatting), code type (default: html) and highlighting (hljs)
- `spaceless.js`: trim unneeded whitespace

### Nunjucks filters

in `./filters/`

- `markdown.js`: process a string as markdown
- `section.js`: split the content into excerpt and remainder
- `path.js`: catch references to the "path" filter which is not part of 11ty and results in obtuse error codes

### Assorted utilities

In `./utils/` 

- `minify-html.js`: pass in html content and minify

## Usage with Eleventy

Note: Projects utilising `vf-eleventy` make use of this package by default.

1. a project based off [`vf-eleventy`](https://github.com/visual-framework/vf-eleventy)
2. `yarn add @visual-framework/vf-extensions`

3. in `eleventy.js` you should have:

```js
  const vfEleventyExtension = require("@visual-framework/vf-extensions\/11ty");
config.addPlugin(vfEleventyExtension);
```

4. in `gulpfile.js` you should have:

```js
require('./node_modules/\@visual-framework/vf-extensions/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
```
