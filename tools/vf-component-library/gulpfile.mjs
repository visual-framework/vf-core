import path from "path";
import gulp from "gulp";
import through from "through2";
import gutil from "gulp-util";
import fs from "fs";
import { exit } from "process";
import { deleteSync } from "del";

// Pull in optional configuration from the package.json file, a la:
import {
  componentPath,
  componentDirectories,
  buildDestionation
} from "@visual-framework/vf-config";

// replace endpoints for local & dev
const prodToDevEndPointsReplace = {
  "www.embl.org": "wwwdev.embl.org",
  "//ebi.emblstatic.net": "//dev.ebi.emblstatic.net",
  "//assets.emblstatic.net": "//dev.assets.emblstatic.net"
};

// Tasks to build/run vf-core component system
import rollupCore from "@visual-framework/vf-core/gulp-tasks/_gulp_rollup.mjs";
import rollupExtensions from "@visual-framework/vf-extensions/gulp-tasks/_gulp_rollup.js";
import buildSearchIndex from "@visual-framework/vf-extensions/gulp-tasks/gulp-build-search-index.js";

rollupCore(gulp, path, componentPath, componentDirectories, buildDestionation);
rollupExtensions(gulp, path, componentPath, componentDirectories, buildDestionation);

// search indexing
buildSearchIndex(gulp, path, buildDestionation);

// Watch folders for changes
gulp.task("watch", function() {
  gulp.watch(["./build/css/styles.css"], gulp.series("eleventy:reload"));
});

function replaceAll(sentence, wordsToReplace) {
  return Object.keys(wordsToReplace).reduce(
    (f, s, i) => `${f}`.replace(new RegExp(s, "ig"), wordsToReplace[s]),
    sentence
  );
}

gulp.task("replace-endpoints:dev", function(done) {
  return gulp.src([buildDestionation + "/**/*.html"]).pipe(
    through.obj(function(file, enc, cb) {
      let localFilePath = file.path.split(buildDestionation)[1];
      var final_text = "";
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
      exit(1);
    })
  );
});

gulp.task("apache-config", function() {
  const fileName = "build/.htaccess";
  const endOfLine = "\r\n";
  fs.writeFileSync(fileName, "# Static page mappings built with gulp");
  fs.appendFileSync(fileName, endOfLine);
  fs.appendFileSync(fileName, "RewriteEngine On");
  fs.appendFileSync(fileName, endOfLine);
  fs.appendFileSync(
    fileName,
    "RewriteRule ^components/vf-design-tokens/index.html$ /design-tokens/ [R=301,L]"
  );
  fs.appendFileSync(fileName, endOfLine);
  fs.appendFileSync(
    fileName,
    "RewriteRule ^developing/components/updating-a-component/index.html$ /guidance/versioning-and-component-interoperability/ [R=301,L]"
  );
  fs.appendFileSync(fileName, endOfLine);
  fs.appendFileSync(
    fileName,
    "RewriteRule ^developing/components/creating-new-components/index.html$ /guidance/creating-components/ [R=301,L]"
  );
  fs.appendFileSync(fileName, endOfLine);
  fs.appendFileSync(
    fileName,
    "RewriteRule ^developing/components/deprecating-components/index.html$ /guidance/deprecating-components/ [R=301,L]"
  );
  return gulp
    .src([
      "build/*.{html,jpg,png,gif,pdf,mp4,woff}",
      "build/**/*.{html,svg,jpg,png,gif,pdf,mp4,woff}"
    ])
    .pipe(
      through.obj(function(file, enc, cb) {
        cb(null, file);
      })
      .on("finish", function() {
        gutil.log(gutil.colors.green("Finished writing .htaccess"));
      })
      .on("error", function(err) {
        gutil.log(gutil.colors.red(err.message));
        exit(1);
      })
    );
});

gulp.task("build-temp-clean", () => {
  return deleteSync(["build/temp"]);
});

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
