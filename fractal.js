module.exports = {

  // mode: 'build' or 'server'
  initialize: function(mode, callback) {

    /* Create a new Fractal instance and export it for use elsewhere if required */
    const fractal        = module.exports = require('@frctl/fractal').create();
    const logger         = fractal.cli.console;
    const projectTitle   = vfName;

    /* Set the title of the project */
    fractal.set('project.title', projectTitle);

    /* Tell Fractal where the components will live */
    fractal.components.set('path', vfComponentPath);

    /* Tell Fractal where the documentation pages will live */
    fractal.docs.set('path', __dirname + '/docs');

    const nunj = require('@frctl/nunjucks')({
      env: {
        lstripBlocks: true,
        trimBlocks: true,
        autoescape: false
        // Nunjucks environment opts: https://mozilla.github.io/nunjucks/api.html#configure
      },
      filters: {
        // A filter and non-async version of frctl's context extension from
        // https://github.com/frctl/nunjucks/blob/develop/src/extensions/context.js
        // We mainly use this to make a component's YAML data available to REAMDE.md
        // {% set context = '@vf-heading' | componentContexts %}
        componentContexts:  function(component) {
          const source = fractal.components;
          const handle = component;
          const entity = source.find(handle);
          if (!entity) {
            throw new Error(`Could not render component '${handle}' - component not found.`);
          }
          const context = entity.isComponent ? entity.variants().default().context : entity.context;
          return context;
        }
      },
      // globals: {
      //   // global-name: global-val
      // },
      extensions: {
        codeblock: require('./tools/vf-frctl-extensions/codeblock.js')(fractal)
      }
    });

    fractal.components.set('ext', '.njk'); // look for files with a .nunj file extension
    fractal.components.engine(nunj); /* set as the default template engine for components */
    fractal.docs.set('ext', '.njk'); // look for files with a .njk file extension
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

    fractal.web.theme(vfThemeConfig);

    if (mode == 'server') {
      fractal.set('project.environment.local', 'true');
      const fractalServer = fractal.web.server({
        sync: true
      });
      fractalServer.start().then(() => {
        logger.success(`Your Visual Framework component library is available at ${fractalServer.url}`);
        // logger.success(`Network URL: ${server.urls.sync.external}`);
        console.log('done over here');
        fractal.watch();
        callback(fractal);
      });
    }

    if (mode == 'build') {
      fractal.set('project.environment.production', 'true');
      const builder = fractal.web.builder();
      builder.on('progress', (completed, total) =>
        logger.update(`Exported ${completed} of ${total} items`, 'info')
      );
      builder.on('error', err => logger.error(err.message));
      return builder.build().then(() => {
        logger.success('Fractal build completed!');

        callback(fractal);
      });
    }

  }
}
