module.exports = {

  // mode: 'build' or 'server'
  initialize: function(mode, callback) {

    /* Create a new Fractal instance and export it for use elsewhere if required */
    const fractal        = module.exports = require('@frctl/fractal').create();
    const logger         = fractal.cli.console;
    var vfName           = global.vfName || 'Visual Framework component library';
    const projectTitle   = vfName;
    const path           = require('path');

    /* Set the title of the project */
    fractal.set('project.title', projectTitle);

    /* Tell Fractal where the components will live */
    var vfComponentPath = global.vfComponentPath || __dirname + '/components';
    fractal.components.set('path', vfComponentPath);

    /* Tell Fractal where the documentation pages will live */
    var vfDocsPath = global.vfDocsPath || __dirname + '/docs';
    fractal.docs.set('path', vfDocsPath);

    const nunj = require('@frctl/nunjucks')({
      env: {
        lstripBlocks: true,
        trimBlocks: true,
        autoescape: false
        // Nunjucks environment opts: https://mozilla.github.io/nunjucks/api.html#configure
      },
      paths: ["./components"],
      filters: {
        // {{ "## Parse me" | marked }}
        marked: function(string) {
          const renderMarkdown = require('marked');
          return renderMarkdown(string);
        },
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
        },
        hextorgb: module.exports = function(text) {
          function hexToRGB(hex) {
            var r = parseInt(hex.slice(1, 3), 16),
                g = parseInt(hex.slice(3, 5), 16),
                b = parseInt(hex.slice(5, 7), 16);
            return "rgb(" + r + ", " + g + ", " + b + ")";
          }

          var hex = new String(text);

          return hexToRGB(hex);
          }

      },
      // globals: {
      //   // global-name: global-val
      // },
      extensions: {
        codeblock: require(__dirname + '/tools/vf-frctl-extensions/codeblock.js')(fractal),
        spaceless: require(__dirname + '/tools/vf-frctl-extensions/spaceless.js')(fractal),
        markdown:  require(__dirname + '/tools/vf-frctl-extensions/markdown.js')(fractal)
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
    var vfBuilderPath = global.vfBuilderPath || __dirname + '/build';
    fractal.web.set('builder.dest', vfBuilderPath);

    /* configure web */
    var vfStaticPath = global.vfStaticPath || __dirname + '/temp/build-files';
    fractal.web.set('static.path', vfStaticPath);
    fractal.web.set('server.sync', true);
    var vfOpenBrowser = typeof global.vfOpenBrowser === "undefined" ? true : global.vfOpenBrowser;
    fractal.web.set('server.syncOptions', {
      watchOptions: {
        ignored: path.join(__dirname, './components/**/*.scss'),
      },
      open: vfOpenBrowser,
      browser: 'default',
      sync: true
    });

    var vfThemePath = global.vfThemePath || '@frctl/mandelbrot';
    const vfTheme = require(vfThemePath);
    const vfThemeConfig = vfTheme({}, fractal);

    fractal.components.set('statuses', {
      /* status definitions here */
      alpha: {
        label: "alpha",
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
        fractal.watch();
        callback(fractal);
      });
    }

    // If you want to build static html files
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

    // To build the fractal object in memory
    if (mode == 'dataobject') {
      fractal.set('project.environment.production', 'true');
      const server = fractal.web.server();

      server.start().then(function(){
        console.log('The Fractal component data has been generated.');
        callback(fractal);
        server.stop();
        fractal.unwatch(); // exit fractal
      });
      
    }
  }
}
