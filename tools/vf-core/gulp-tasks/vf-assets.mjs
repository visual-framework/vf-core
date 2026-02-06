import svgmin  from "gulp-svgmin";
"use strict";

/**
 * Expose vf-assets gulp task as a JS module
 * This makes dependency management a bit cleaner
 */

export default function(gulp, path, componentPath, buildDestionation) {


  // Utility task to minify SVGs
  // After running you should check the quality differences of an SVG, and the
  // filesize savings.
  gulp.task("vf-svg", () => {
    return gulp
      .src(componentPath + "/**/*.svg", { encoding: false })
      .pipe(svgmin())
      .pipe(gulp.dest(componentPath));
  });

  // make each component's `./assets` directory available
  gulp.task("vf-component-assets:directory", function() {
    return gulp
      .src([componentPath + "/**/assets/**/*"], { encoding: false })
      .pipe(gulp.dest(buildDestionation + "/assets"));
  });

  // make each component's `./vf-component.css` compiled CSS available
  gulp.task("vf-component-assets:compiled-css", function() {
    return gulp
      .src([componentPath + "/**/*.css"], { encoding: false })
      .pipe(gulp.dest(buildDestionation + "/assets"));
  });

  // make each component's `./*.js` files available
  gulp.task("vf-component-assets:js", function() {
    return gulp
      .src([componentPath + "/**/*.js"], { encoding: false })
      .pipe(gulp.dest(buildDestionation + "/assets"));
  });

  // copy all the files in a component
  // note: you shouldn't use this in combination with the other vf-commponent-assets tasks (redundant)
  gulp.task("vf-component-assets:everything", function() {
    return gulp
      .src([componentPath + "/**/*.*"], { encoding: false })
      .pipe(gulp.dest(buildDestionation + "/assets"));
  });

  gulp.task("vf-component-assets", gulp.parallel(
    "vf-component-assets:directory", "vf-component-assets:compiled-css", "vf-component-assets:js"
  ));

  return gulp;
};
