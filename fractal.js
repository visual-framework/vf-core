'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Visual Framework 2.0');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');

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
const mandelbrot = require('@frctl/mandelbrot');

const VFTheme = mandelbrot({
  favicon: '/assets/favicon.ico',
  styles: [
    // 'default',
    '/css/local.css',
    '/css/styles.css'
  ],
  format: 'YAML',
  panels: ["html", "info", "resources"]
});

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
  }
});



// Customise Fractal templates
// https://fractal.build/guide/customisation/web-themes#template-customisation
VFTheme.addLoadPath(__dirname + '/tools/frctl-mandelbrot-embl-subtheme/views');
// Specify the static assets directory that contains the custom stylesheet.
VFTheme.addStatic(__dirname + '/tools/frctl-mandelbrot-embl-subtheme/assets', '/');


fractal.web.theme(VFTheme);

// fractal.components.set('resources', {
//   scss: {
//     label: 'SCSS',
//     match: ['**/*.scss']
//   }
// });
