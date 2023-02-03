const path = require('path');
const gulp = require('gulp');
const through = require("through2");
const gutil = require("gulp-util");
const fs = require("fs");


// Pull in optional configuration from the package.json file, a la:
const {componentPath, componentDirectories, buildDestionation} = require('@visual-framework/vf-config');
const { exit } = require('process');
// replace endpoints for local & dev
const prodToDevEndPointsReplace = {
  'www.embl.org': 'wwwdev.embl.org',
  '//ebi.emblstatic.net': '//dev.ebi.emblstatic.net',
  '//assets.emblstatic.net': '//dev.assets.emblstatic.net'
}

// Tasks to build/run vf-core component system
require('@visual-framework/vf-core/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
require('@visual-framework/vf-extensions/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
// search indexing
require('@visual-framework/vf-extensions/gulp-tasks/gulp-build-search-index.js')(gulp, path, buildDestionation);

// Watch folders for changes
gulp.task('watch', function() {
  // left for convenience for local watch additions
  gulp.watch(['./build/css/styles.css'], gulp.series('eleventy:reload'));
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
    (f, s, i) =>
      `${f}`.replace(new RegExp(s, 'ig'), wordsToReplace[s]),
      sentence
  )
}

/**
 * Gulp task to replace endpoints prod to dev for local development
 */
gulp.task("replace-endpoints:dev", function(done) {
  // console.log("coming in replace-endpoints:dev endpoints");
  return gulp.src([buildDestionation+"/**/*.html"])
    .pipe(through.obj(function (file, enc, cb) {
      gutil.log(gutil.colors.green("Replacing text :",file.path.split(buildDestionation)[1]));
      let text = fs.readFileSync(file.path, "utf8");

      const final_text = replaceAll(text, prodToDevEndPointsReplace);
      // prep file path
      let localFilePath = file.path.split(buildDestionation)[1];
      cb(null, file);
      fs.writeFileSync(file.path, final_text);
    })
      .on("finish", function (status) {
        gutil.log(gutil.colors.green("Finished upating dev endpoints"));
      })
      .on("error", function(err) {
        gutil.log(gutil.colors.red(err.message));
        process.exit(1);
      })
    );

});

// for prod site build
gulp.task('build', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts'),
  'vf-css:generate-component-css',
  'vf-component-assets:everything',
  'fractal:build',
  'fractal',
  'eleventy:init',
  'eleventy:build',
  'vf-build-search-index'
));

// for dev site build
gulp.task('build:dev', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts'),
  'vf-css:generate-component-css',
  'vf-component-assets:everything',
  'fractal:build',
  'fractal',
  'eleventy:init',
  'eleventy:build',
  'vf-build-search-index',
  'replace-endpoints:dev',
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts'),
  'vf-css:generate-component-css',
  'vf-component-assets:everything',
  'fractal:development',
  'fractal',
  'eleventy:init',
  'eleventy:develop',
  'vf-build-search-index',
  'replace-endpoints:dev',
  gulp.parallel('watch','vf-watch')
));