'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
const projectTitle = vfName;

/* Set the title of the project */
fractal.set('project.title', projectTitle);

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');

/* Handlebars with custom helpers */
const handlebars = require('gulp-compile-handlebars');
const hljs = require('highlight.js');
const nunj = require('@frctl/nunjucks')({
  env: {
    lstripBlocks: true,
    trimBlocks: true,
    autoescape: false
    // Nunjucks environment opts: https://mozilla.github.io/nunjucks/api.html#configure
  },
  // filters: {
  //   // filter-name: function filterFunc(){}
  // },
  // globals: {
  //   // global-name: global-val
  // },
  // extensions: {
  //   // extension-name: function extensionFunc(){}
  // },
  helpers: {
    codeblockhtml: function(txt,context){
      txt = txt.fn(context);
      if(typeof txt == "undefined") return;
      return '<code class="Code Code--lang-html vf-code-example"><pre class="vf-code-example__pre">' +
      hljs.highlight('html', txt).value + '</pre></code>';
    },
    codeblockjs: function(txt,context){
      txt = txt.fn(context);
      if(typeof txt == "undefined") return;
      return '<code class="Code Code--lang-js vf-code-example"><pre class="vf-code-example__pre">' +
      hljs.highlight('js', txt).value + '</pre></code>';
    }
  }
});

fractal.components.set('ext', '.njk'); // look for files with a .nunj file extension
fractal.components.engine(nunj); /* set as the default template engine for components */
fractal.docs.set('ext', '.njk'); // look for files with a .nunj file extension
fractal.docs.engine(nunj); /* you can also use the same instance for documentation, if you like! */

/* configure components */
fractal.components.set('default.status', 'alpha');
fractal.components.set('default.preview', `@preview`);

/* build destination */
fractal.web.set('builder.dest', __dirname + '/build');

/* configure web */
fractal.web.set('static.path', __dirname + '/public');
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
  open: true,
  browser: 'default',
  sync: true
});
/* Theme */
const vfTheme = require('./tools/vf-frctl-theme');
const vfThemeConfig = vfTheme({}, fractal);

fractal.components.set('statuses', {
  /* status definitions here */
  alpha: {
    label: "alhpa",
    description: "Do not implement.",
    color: "#DC0A28",
    text: "#FFFFFF"
  },
  beta: {
    label: "beta",
    description: "Work in progress. Implement with caution.",
    color: "#E89300"
  },
  live: {
    label: "live",
    description: "Ready to implement.",
    color: "#19993B"
  },
  deprecated: {
    label: "deprecated",
    description: "Never use this again.",
    color: "#707372"
  }
});

// Customise Fractal templates
// https://fractal.build/guide/customisation/web-themes#template-customisation
// VFTheme.addLoadPath(__dirname + '/tools/frctl-mandelbrot-vf-subtheme/views');
// Specify the static assets directory that contains the custom stylesheet.
// VFTheme.addStatic(__dirname + '/tools/frctl-mandelbrot-vf-subtheme/assets', '/');

fractal.web.theme(vfThemeConfig);
