"use strict";

/**
 * Scan the build directory and make a search index.
 * Usage:
 *  require('./node_modules/\@visual-framework/vf-extensions/gulp-tasks/gulp-build-search-index.js')(gulp, path, buildDestionation);
 *  gulp.task('dev', gulp.series('vf-build-search-index'));
 *
 * Results in a search index at:
 *  buildDestionation+'/search_index.js'
 *
 * Requires `yarn add strip-js striptags node-html-parser`
 *
 * Elements wrapped with `class="vf-search-client-side--no-index"` will not be logged in the index
 */
module.exports = function(gulp, path, buildDestionation) {

  const fs = require("fs");
  const gutil = require("gulp-util");
  const through = require("through2");
  const stripJs = require("strip-js");
  const striptags = require("striptags");
  const HTMLParser = require("node-html-parser"); // https://www.npmjs.com/package/node-html-parser

  gulp.task("vf-build-search-index", function() {
    const fileName = buildDestionation+"/search_index.js";
    const endOfLine = "\r\n";
    var counter = 0;
    gutil.log(gutil.colors.green("Prepping search index for " + buildDestionation+"/search_index.js"));
    var output = "let searchIndex = {\"pages\": [";

    return gulp.src([buildDestionation+"/**/*.html"])
      .pipe(through.obj(function (file, enc, cb) {
        gutil.log(gutil.colors.green("Indexing:",file.path.split(buildDestionation)[1]));

        let text = fs.readFileSync(file.path, "utf8");
        let title = text.match(/<title>(.*?)<\/title>/gi) + " ";
        title = title.replace(/<title>(.*?)<\/title>/gi, "$1");
        title = title.split("|")[0]; // only keep anything before the first pipe
        var body = "";
        body = text.match(/<p class="vf-lede">(.*?)<\/p>/g);
        // fallback if body is empty show title as description for search instead of "null"
        if (!body) {
          body = title;
        }

        // remove any elements with class="vf-search-client-side--no-index"
        let bodyHtml = HTMLParser.parse(body);
        bodyHtml.querySelectorAll(".vf-search-client-side--no-index").forEach(function(a){
          a.set_content("");
        });
        body = new String(bodyHtml);
        body = stripJs(striptags(body.toString()));
        body = body.replace(/&quot;/g, " "); // remove white space
        body = body.replace(/class\=/g, " "); // remove white space
        body = body.replace(/<body.[\s\S]*?>(.[\s\S]*?)<\/body>/gi, "$1");
        body = body.replace(/\r?\n|\r/g, " "); // remove white space
        body = body.replace(/ {4}/g, " "); // remove white space
        body = body.replace(/ {3}/g, " "); // remove white space
        body = body.replace(/ {2}/g, " "); // remove white space
        body = body.replace(/"/g, "'"); // remove double quotes
        body = body.replace(/null/g, " "); // taking care of null values


        output += endOfLine + "{\"id\":\""+counter+"\", \"title\": \""+title+"\", \"text\": \""+body+"\", \"tags\": \"\", ";
        counter = counter + 1;

        // prep file path
        let localFilePath = file.path.split(buildDestionation)[1];

        output += "\"url\": \""+localFilePath+"\"";

        // close the json entry
        output += "},";
        cb(null, file);
      })
        .on("finish", function (status) {
          gutil.log(gutil.colors.green("Finished prepping search JSON"));
          // write the rendered JSON
          fs.writeFileSync(fileName, output + endOfLine + "]};");
        })
        .on("error", function(err) {
          gutil.log(gutil.colors.red(err.message));
          process.exit(1);
        })
      );
  });

  return gulp;
};
