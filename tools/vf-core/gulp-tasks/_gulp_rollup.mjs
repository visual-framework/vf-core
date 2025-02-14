import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
import _toesmTemp1  from "browser-sync";
import vfAssets from "./vf-assets.mjs";
import vfCleanup from "./vf-cleanup.mjs";
import vfCss from "./vf-css.mjs";
import vfScripts from "./vf-scripts.mjs";
import vfFractal from "./vf-fractal.mjs";
import vfWatch from "./vf-watch.mjs";
import vfTemplatePrecompile from "./vf-templates-precompile.mjs";
import vfBuild from "./vf-build.mjs";

"use strict";

/**
 * A rollup function to import all tasks.
 */

export default function(gulp, path, componentPath, componentDirectories, buildDestionation) {
  // Local Server Stuff

const browserSync  = _toesmTemp1.create();

  const reload = browserSync.reload;

  // Gulp tasks live in their own files, for the sake of clarity.
  // These are done as JS Modules as it makes passing paramaters simpler and avoids
  // needing workarounds invlolving global variables.
  vfAssets(gulp, path, componentPath,buildDestionation);
  vfCleanup(gulp, buildDestionation);
  // require(path.resolve('.', __dirname + '/vf-component.js'))(gulp, path); // moved to vf-component-generator
  vfCss(gulp, path, componentPath, componentDirectories, buildDestionation, browserSync);
  vfScripts(gulp, path, componentPath, componentDirectories, buildDestionation);
  vfFractal(gulp, path, componentPath, buildDestionation);
  vfWatch(gulp, path, componentPath, reload);
  vfTemplatePrecompile(gulp, path, componentPath);
  vfBuild(gulp, buildDestionation);

  // -----------------------------------------------------------------------------
  // Main tasks
  // -----------------------------------------------------------------------------

  gulp.task("vf-dev", gulp.series(
    "vf-clean", ["vf-css", "vf-scripts"], "vf-component-assets", "vf-fractal:start", ["vf-lint:scss-soft-fail", "vf-lint:js-soft-fail", "vf-templates-precompile", "vf-watch"]
  ));

  gulp.task("vf-prepush-test", gulp.parallel(
    "vf-lint:js-soft-fail", "vf-lint:scss-hard-fail", "vf-css"
  ));

  return gulp;
};
