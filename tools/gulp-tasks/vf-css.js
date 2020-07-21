'use strict';

/**
 * Expose vf-css gulp tasks as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path, componentPath, componentDirectories, buildDestionation, browserSync) {
  const fastglob = require('fast-glob');

  // Sass and CSS Stuff
  const sass = require('sass');
  const autoprefixer = require('gulp-autoprefixer');
  const autoprefixerOptions = { overrideBrowserslist: ['last 2 versions', '> 5%', 'Firefox ESR'] };
  const cssnano = require('gulp-cssnano');
  const sourcemaps = require('gulp-sourcemaps');
  const recursive = require('../css-generator/recursive-readdir');
  const ListStream = require('list-stream');
  const notify = require('gulp-notify');
  const source = require('vinyl-source-stream');
  const fs = require('fs');

  // Build stuff
  const chalk = require('chalk');

  // Linting things
  const gulpStylelint   = require('gulp-stylelint');
  const SassInput = componentPath + '/vf-componenet-rollup/index.scss';
  const SassOutput = buildDestionation + '/css';

  // CSS Gen stuff
  const rename = require('gulp-rename');

  // construct sass import paths
  var sassPaths = fastglob.sync([componentPath,componentPath+'/**','!'+componentPath+'/**/*.*'],{onlyFiles: false});

  // Lookup each component's package.json and make a package.scss
  gulp.task('vf-css:package-info', function(done) {
    const Transform = require('stream').Transform;

    // Convert part of the package.json to a sass map
    function packageJsonToScss(location) {
      return new Transform({
        objectMode: true,
        transform: (data, _, done) => {
          location = 'components/' + location.split('components/')[1];
          let name = JSON.parse(data.contents.toString()).name;
          let version = JSON.parse(data.contents.toString()).version;

          var output = `$componentInfo: (
             name: "` + name + `",
             version: "` + version + `",
             location: "` + location + `",
             vfCoreVersion: "` + global.vfVersion + `"
          );`

          done(null, output);
        }
      })
    }

    recursive(componentPath, ['*.css', '*.scss', '*.md', '*.njk', '_package.json'], function (err, files) {
      files.forEach(function(file, index, array) {
        // only process when a package.json is found
        if ((file.file.indexOf('package.json') > -1)) {
          return gulp.src(file.dir+'/package.json')
            .pipe(packageJsonToScss(file.dir))
            .pipe(source(file.file_path))
            .pipe(rename('package.variables.scss'))
            .pipe(gulp.dest(file.dir));
        } else {
          // do nothing
        }

        if (index + 1 == array.length) {
          done();
        }
      });
    });

  });

  gulp.task('vf-css:build', function(done) {
    console.log(chalk.yellow('Visual Framework Sass generation is being done by:'));
    console.log(chalk.yellow(sass.info));

    // console.log(chalk.yellow('Looking in these locations'));
    // console.log(sassPaths);

      // Import sass files
      // We'll check to see if the file exists before passing
      // it to sass for compilation
      const sassImporter = [function(url,prev,done) {

        // windows compatibility
        url = url.replace(/\\/g, '/');
        prev = prev.replace(/\\/g, '/');

        var truncatedUrl = url.split(/[/]+/).pop();
        var parentFile = prev.split(/[/]+/).pop();
        var underscoredFile = url.split(/[/]+/)[0]+'/_'+url.split(/[/]+/).pop(); // for mixins/vf-utility-mixins.scss -> mixins/_vf-utility-mixins.scss

        // If you do not want to interveen in certain file names
        // if (parentFile == '_index.scss' || parentFile == '_vf-mixins.scss' || parentFile == 'vf-functions.scss') {
        //   return null;
        // }

        // only intervene in index.scss rollups
        // ignore `package.variables.scss` as it is dynamically made and gulp doesn't see it quickly enough
        if (parentFile == 'index.scss' && url != 'package.variables.scss') {
          if (availableComponents[url]) {
            done({file: url});
          } else if (availableComponents[underscoredFile]) {
            // maybe it was an _filename.scss?
            done({file: underscoredFile});
          } else {
            let importWarning = `Notice: Couldn\'t find ${url} referenced in ${prev}, the CSS won\'t be included in the build. If this is expected, you might want to comment out the dependency.`;
            console.warn(chalk.yellow(importWarning));
            done({ contents: `/* ${importWarning} */` });
          }
        } else {
          return null;
        }
      }];

    // Find all the component sass files available.
    // We'll pass this as a variable to our sass build so we can
    // only include the file if it exists.
    var availableComponents = {}; // track the components avaialble

    var sassFileList = fastglob.sync([componentPath+'/**/*.scss',componentPath+'/**/**/*.scss'],
      { ignore: [componentPath+'/vf-core-components/vf-core/components/**/*.scss'] }
    );
    // Keep only the directory + file name
    for (let index = 0; index < sassFileList.length; index++) {
      let value = sassFileList[index];
      value = value.replace(/\\/g, '/'); // windows compatibility
      value = value.split(/[/]+/).slice(-2).join('/'); // make a list of paths like vf-table/vf-table.scss
      availableComponents[value] = true;
    }
    // generate the css
    sass.render({
      // https://github.com/sass/node-sass
      file: SassInput,
      importer: sassImporter,
      sourceMap: true,
      outFile: SassOutput+'/styles.css',
      includePaths: sassPaths
    }, function(err, result) {
      if (err) {
        console.log(chalk.yellow(err));
      }
      if (!err){
        fs.mkdirSync(SassOutput, { recursive: true }); // make folder, if it doesn't exist
        fs.writeFile(SassOutput+'/styles.css', result.css, function(err){
          if(!err){
            console.log('writing',SassOutput+'/styles.css')
          } else {
            console.log(chalk.yellow(err));
          }
        });
      }
      done();
    });
  });

  // Sass Build-Time things
  // Take the built styles.css and autoprefixer it, then runs cssnano and saves it with a .min.css suffix
  gulp.task('vf-css:production', function(done) {
    return gulp
      .src(SassOutput + '/styles.css')
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest(SassOutput))
      .pipe(cssnano())
      .pipe(gulp.dest(SassOutput))
      .on('end', function() {
        done();
      });
  });

  // Sass Lint
  // For stylelint config rules see .stylelinrc
  const vfScssLintPaths = [componentPath+'/**/embl-*.scss', componentPath+'/**/vf-*.scss', '!'+componentPath+'/**/index.scss', '!assets/**/*.scss', '!'+componentPath+'/vf-design-tokens/dist/**/*.scss'];
  gulp.task('vf-lint:scss-soft-fail', function() {
    return gulp
      .src(vfScssLintPaths)
      .pipe(gulpStylelint({
        failAfterError: false,
        reporters: [{formatter: 'string', console: true}]
      }));
  });
  gulp.task('vf-lint:scss-hard-fail', function() {
    return gulp
      .src(vfScssLintPaths)
      .pipe(gulpStylelint({
        failAfterError: true,
        reporters: [{formatter: 'string', console: true}]
      }));
  });

  // -----------------------------------------------------------------------------
  // CSS Generator Tasks
  // Generate per-component .css files
  // -----------------------------------------------------------------------------
  var genCss = function (option) {
    var file_name = path.basename(path.dirname(option.file_path)) + '.css';
    sass.render({
      file: option.file_path,
      includePaths: sassPaths,
      outputStyle: 'expanded'
    }, function(err, result) {
      if (err) { console.log(chalk.yellow(err)); }
      if (!err){
        fs.mkdirSync(option.dir, { recursive: true }); // make folder, if it doesn't exist
        fs.writeFile(option.dir+'/'+file_name, result.css, function(err) {
          if (err) { console.log(chalk.yellow(err));
          } else { //prefix
            // @todo, using gulp one file at a time is weird, but autoprefixer doesn't seem to support passing single values well
            gulp.src(option.dir+'/'+file_name)
              .pipe(autoprefixer(autoprefixerOptions))
              .pipe(gulp.dest(option.dir))
          }
        });
      }
      return;
    })
  };

  gulp.task('vf-css:generate-component-css', function(done) {
    recursive(componentPath, ['*.css'], function (err, files) {
      files.forEach(function(file) {
        // only generate CSS for index.scss files, but not for the vf rollup
        if ((file.file.indexOf('index.scss') > -1) && (file.file_path.replace(/\\/g, '/').indexOf('vf-componenet-rollup/index.scss') == -1)) {
          genCss(file);
        }
      });
    });
    done();
  });

  gulp.task('vf-css', gulp.series(
    'vf-css:package-info', 'vf-css:build'
  ));

  return gulp;
};
