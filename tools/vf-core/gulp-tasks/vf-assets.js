"use strict";

/**
 * Expose vf-assets gulp task as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path, componentPath, buildDestionation) {
  const svgmin = require("gulp-svgmin");

  // Utility task to minify SVGs
  // After running you should check the quality differences of an SVG, and the
  // filesize savings.
  gulp.task("vf-svg", () => {
    return gulp
      .src(componentPath + "/**/*.svg")
      .pipe(svgmin())
      .pipe(gulp.dest(componentPath));
  });

  // make each component's `./assets` directory available
  gulp.task("vf-component-assets:directory", function() {
    return gulp
      .src([componentPath + "/vf-core-components/**/assets/**/*", componentPath + "/**/assets/**/*"])
      .pipe(gulp.dest(buildDestionation + "/assets"));
  });

  // make each component's `./vf-component.css` compiled CSS available
  gulp.task("vf-component-assets:compiled-css", function() {
    return gulp
      .src([componentPath + "/vf-core-components/**/*.css", componentPath + "/**/*.css"])
      .pipe(gulp.dest(buildDestionation + "/assets"));
  });

  // make each component's `./*.js` files available
  gulp.task("vf-component-assets:js", function() {
    return gulp
      .src([componentPath + "/vf-core-components/**/*.js", componentPath + "/**/*.js"])
      .pipe(gulp.dest(buildDestionation + "/assets"));
  });

  // copy all the files in a component
  // note: you shouldn't use this in combination with the other vf-commponent-assets tasks (redundant)
  gulp.task("vf-component-assets:everything", function() {
    return gulp
      .src([componentPath + "/vf-core-components/**/*.*", componentPath + "/**/*.*"])
      .pipe(gulp.dest(buildDestionation + "/assets"));
  });

  gulp.task("vf-component-assets", gulp.parallel(
    "vf-component-assets:directory", "vf-component-assets:compiled-css", "vf-component-assets:js"
  ));

  return gulp;
};
