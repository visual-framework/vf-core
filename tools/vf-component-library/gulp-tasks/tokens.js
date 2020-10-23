"use strict";

/**
 * Build tasks to generate a deployable static site,
 * most frequent use case will be for CI deployments.
 */

module.exports = function(gulp, componentPath) {
  const rename = require("gulp-rename");
  const del = require("del");
  // const merge = require('gulp-merge-json');
  // const dave = require("gulp-json-tree");
  var jsonConcat = require("gulp-json-concat");

  // copy the design token files to the 11ty documentation path
  gulp.task("tokens:copy", function() {
    return gulp.src(componentPath+"/vf-design-tokens/dist/json/*.ios.json")
      .pipe(rename (function(path) {
        path.basename = path.basename.replace("vf-", "");
        path.basename = path.basename.replace(".ios", "");
        path.basename = path.basename.replace("font-", "font");
        path.basename = path.basename.replace("-", "");
        path.basename = path.basename.replace("--", "");
        path.basename = path.basename.replace("colors", "colours");
        return path.dirname + path.basename;
      }))
      .pipe(gulp.dest("src/site/design-tokens/temp/"));
  });

  // combine individual json files into one large json file
  // (easier to use in 11ty)
  gulp.task("tokens:jsonConcat", function() {
    return gulp.src("src/site/design-tokens/temp/*.json")
      .pipe(jsonConcat("design-tokens.11tydata.json",function(data){
        return new Buffer(JSON.stringify(data));
      }))
      .pipe(gulp.dest("src/site/design-tokens/"));
  });

  // the individual json files aren't needed
  gulp.task("tokens:cleanup", function() {
    return del([
      "src/site/design-tokens/temp/*.json"
      // '!src/site/design-tokens/design-tokens.11tydata.json'
    ]);
  });

  // import design tokens for documentation
  gulp.task("tokens", gulp.series(
    "tokens:copy",
    "tokens:jsonConcat",
    "tokens:cleanup"
  ));

  return gulp;
};
