const path = require("path");
const gulp = require("gulp");
const through = require("through2");
const gutil = require("gulp-util");
const fs = require("fs");

// Pull in optional configuration from the package.json file, a la:
const {
  componentPath,
  componentDirectories,
  buildDestionation
} = require("@visual-framework/vf-config");
const { exit } = require("process");
// replace endpoints for local & dev
const prodToDevEndPointsReplace = {
  "www.embl.org": "wwwdev.embl.org",
  "//ebi.emblstatic.net": "//dev.ebi.emblstatic.net",
  "//assets.emblstatic.net": "//dev.assets.emblstatic.net"
};

// Tasks to build/run vf-core component system
require("@visual-framework/vf-core/gulp-tasks/_gulp_rollup.js")(
  gulp,
  path,
  componentPath,
  componentDirectories,
  buildDestionation
);
require("@visual-framework/vf-extensions/gulp-tasks/_gulp_rollup.js")(
  gulp,
  path,
  componentPath,
  componentDirectories,
  buildDestionation
);
// search indexing
require("@visual-framework/vf-extensions/gulp-tasks/gulp-build-search-index.js")(
  gulp,
  path,
  buildDestionation
);

// Watch folders for changes
gulp.task("watch", function() {
  // left for convenience for local watch additions
  gulp.watch(["./build/css/styles.css"], gulp.series("eleventy:reload"));
});

/**
 * Replaces all occurrences of words in a sentence with new words.
 * @function
 * @param {string} sentence - The sentence to modify.
 * @param {Object} wordsToReplace - An object containing words to be replaced as the keys and their replacements as the values.
 * @returns {string} - The modified sentence.
 */
function replaceAll(sentence, wordsToReplace) {
  return Object.keys(wordsToReplace).reduce(
    (f, s, i) => `${f}`.replace(new RegExp(s, "ig"), wordsToReplace[s]),
    sentence
  );
}

/**
 * Gulp task to replace endpoints prod to dev for local development
 */
gulp.task("replace-endpoints:dev", function(done) {
  // console.log("coming in replace-endpoints:dev endpoints");
  return gulp.src([buildDestionation + "/**/*.html"]).pipe(
    through
      .obj(function(file, enc, cb) {
        let localFilePath = file.path.split(buildDestionation)[1];
        var final_text = "";
        // // Update endpoints only for ebi-header-footer component page
        if (localFilePath == "/components/ebi-header-footer/index.html") {
          gutil.log(
            gutil.colors.green(
              "Replacing dev endpoints :",
              file.path.split(buildDestionation)[1]
            )
          );
          let text = fs.readFileSync(file.path, "utf8");
          final_text = replaceAll(text, prodToDevEndPointsReplace);
          fs.writeFileSync(file.path, final_text);
        }
        cb(null, file);
      })
      .on("end", function(status) {
        gutil.log(gutil.colors.green("Finished replacing dev endpoints"));
      })
      .on("error", function(err) {
        gutil.log(gutil.colors.red(err.message));
        process.exit(1);
      })
  );
});

/**
 * Gulp task to create redirect rules
 */
gulp.task("apache-config", function() {
  const fileName = "build/.htaccess";
  const endOfLine = "\r\n";
  require("fs").writeFileSync(
    fileName,
    "# Static page mappings built with gulp"
  );
  require("fs").appendFileSync(fileName, endOfLine);
  require("fs").appendFileSync(fileName, "RewriteEngine On");
  require("fs").appendFileSync(fileName, endOfLine);
  require("fs").appendFileSync(
    fileName,
    "RewriteRule ^components/vf-design-tokens/index.html$ /design-tokens/ [R=301,L]"
  );
  require("fs").appendFileSync(fileName, endOfLine);
  require("fs").appendFileSync(
    fileName,
    "RewriteRule ^developing/components/updating-a-component/index.html$ /guidance/versioning-and-component-interoperability/ [R=301,L]"
  );
  require("fs").appendFileSync(fileName, endOfLine);
  require("fs").appendFileSync(
    fileName,
    "RewriteRule ^developing/components/creating-new-components/index.html$ /guidance/creating-components/ [R=301,L]"
  );
  require("fs").appendFileSync(fileName, endOfLine);
  require("fs").appendFileSync(
    fileName,
    "RewriteRule ^developing/components/deprecating-components/index.html$ /guidance/deprecating-components/ [R=301,L]"
  );
  return gulp
    .src([
      "build/*.{html,jpg,png,gif,pdf,mp4,woff}",
      "build/**/*.{html,svg,jpg,png,gif,pdf,mp4,woff}"
    ])
    .pipe(
      through
        .obj(function(file, enc, cb) {
          cb(null, file);
        })
        .on("finish", function() {
          gutil.log(gutil.colors.green("Finished writing .htaccess"));
        })
        .on("error", function(err) {
          gutil.log(gutil.colors.red(err.message));
          process.exit(1);
        })
    );
});

/**
 * Gulp task to delete temp files created during build process
 */
gulp.task("build-temp-clean", () => {
  let del = require("del");
  return del(["build/temp"]);
});

// for prod site build
gulp.task(
  "build",
  gulp.series(
    "vf-clean",
    gulp.parallel("vf-css", "vf-scripts"),
    "vf-css:generate-component-css",
    "vf-component-assets:everything",
    "fractal:build",
    "fractal",
    "eleventy:init",
    "eleventy:build",
    "vf-build-search-index",
    "apache-config",
    "build-temp-clean"
  )
);

// for dev site build
gulp.task(
  "build:dev",
  gulp.series(
    "vf-clean",
    gulp.parallel("vf-css", "vf-scripts"),
    "vf-css:generate-component-css",
    "vf-component-assets:everything",
    "fractal:build",
    "fractal",
    "eleventy:init",
    "eleventy:build",
    "vf-build-search-index",
    "replace-endpoints:dev",
    "apache-config",
    "build-temp-clean"
  )
);

// Build and watch things during dev
gulp.task(
  "dev",
  gulp.series(
    "vf-clean",
    gulp.parallel("vf-css", "vf-scripts"),
    "vf-css:generate-component-css",
    "vf-component-assets:everything",
    "fractal:development",
    "fractal",
    "eleventy:init",
    "eleventy:develop",
    "vf-build-search-index",
    "replace-endpoints:dev",
    "apache-config",
    "build-temp-clean",
    gulp.parallel("watch", "vf-watch")
  )
);
