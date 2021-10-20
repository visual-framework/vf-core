"use strict";

/**
 * Precompiled vf-core Nunjucks templates
 */

module.exports = function(gulp, path, componentPath) {

  const chalk = require("chalk");
  const fs = require("fs");
  const nunjucks = require("nunjucks");
  const fastglob = require("fast-glob");

  // Precompile vf-core Nunjucks templates
  // Requires that the fractal environment be initialised first
  gulp.task("vf-templates-precompile", function(done) {

    const componentList = fastglob.sync([componentPath+"/**/*.njk",componentPath+"/**/**/*.njk"], {
      allowEmpty: true,
      objectMode: true
      // absolute: false
      // ignore: [componentPath+'/**/index.scss',componentPath+'/**/**/index.scss',componentPath+'/vf-core-components/vf-core/components/**/*.scss']
    });

    // bail if fractal hasn't been started
    if (typeof global.fractal === "undefined") {
      console.log(chalk.red("The Fractal environment has not been initialised. Exiting the gulp task and proceeding."));
      return done();
    }

    // Grab the Nunjucks environment from fractal
    const env = global.fractal.components._engine._engine;

    componentList.forEach(component => {
      component.commonName = component.name.replace(".njk","");
      const vfPackage = `@visual-framework/${component.commonName}`;
      const src = path.resolve(
        __dirname,
        component.path
      );
      const dest = path.resolve(
        __dirname,
        component.path.replace(".njk", ".precompiled.js")
      );
      const front = `/**\n * Precompiled Nunjucks template: ${component.name}\n */\n`;
      if (!fs.existsSync(src)) {
        console.log(chalk.yellow(`Missing dependency: ${component.name}`));
        return;
      }
      // console.log(chalk.green(`Precompiling: ${component.commonName}`));
      const js = (() => {
        try {
          return nunjucks.precompile(src, {
            env: env,
            name: component.commonName
          });
        } catch (err) {
          console.log(chalk.red(err));
        }
      })();
      if (!js) {
        return;
      }
      fs.writeFileSync(dest, front + js);
    });

    done();

  });

  // A standalone command to start fractal and build the templates
  gulp.task("vf-templates-precompile:test", gulp.series(
    "vf-fractal:dataobject", "vf-templates-precompile"
  ));

  return gulp;
};

