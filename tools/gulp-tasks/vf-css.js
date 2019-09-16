'use strict';

/**
 * Expose vf-css gulp tasks as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path, componentPath, componentDirectories, buildDestionation, browserSync) {
  const fastglob = require('fast-glob');

  // Sass and CSS Stuff
  const sass = require('gulp-sass');
  const autoprefixer = require('gulp-autoprefixer');
  const autoprefixerOptions = { overrideBrowserslist: ['last 2 versions', '> 5%', 'Firefox ESR'] };
  const cssnano = require('gulp-cssnano');
  const sourcemaps = require('gulp-sourcemaps');
  const recursive = require('../css-generator/recursive-readdir');
  const ListStream = require('list-stream');
  const notify = require('gulp-notify');
  const source = require('vinyl-source-stream');
  const fs = require('fs');

  // Linting things
  const gulpStylelint   = require('gulp-stylelint');
  const SassInput = componentPath + '/vf-componenet-rollup/index.scss';
  const SassOutput = buildDestionation + '/css';

  // CSS Gen stuff
  const rename = require('gulp-rename');

  // construct sas import paths, priority
  var sassPaths = [];
  // take an array of sassTypes (paths), and componentPaths and add them to the sassPaths array
  function constructSassImportPaths(sassTypes, sassComponentDirectories) {
    for (let currentType = 0; currentType < sassTypes.length; currentType++) {
      sassPaths.push(path.resolve('.', componentPath, sassTypes[currentType]).replace(/\\/g, '/'));
      for (let directory = 0; directory < sassComponentDirectories.length; directory++) {
        sassPaths.push(path.resolve('.', componentPath, sassComponentDirectories[directory] + '/' + sassTypes[currentType]).replace(/\\/g, '/'));
      }
    }
  }

  // Design tokens have first priority
  constructSassImportPaths([
    'vf-design-tokens/dist/sass',
    'vf-design-tokens/dist/sass/custom-properties',
    'vf-design-tokens/dist/sass/maps'
  ], componentDirectories);

  // then sass config
  constructSassImportPaths([
    'vf-sass-config/variables',
    'vf-sass-config/functions',
    'vf-sass-config/mixins'
  ], componentDirectories);

  // then components
  constructSassImportPaths([
    ''
  ], componentDirectories);

  // and finally any multi-components
  constructSassImportPaths([
    'vf-form'
  ], componentDirectories);

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
    const sassOpts = {
      // Import sass files
      // We'll check to see if the file exists before passing
      // it to sass for compilation
      importer: [function(url,prev,done) {

        // windows compatibility
        url = url.replace(/\\/g, '/');
        prev = prev.replace(/\\/g, '/');

        var truncatedUrl = url.split(/[/]+/).pop();
        var parentFile = prev.split(/[/]+/).pop();

        // If you do not want to interveen in certain file names
        // if (parentFile == '_index.scss' || parentFile == '_vf-mixins.scss' || parentFile == 'vf-functions.scss') {
        //   return null;
        // }

        // only intervene in index.scss rollups
        // ignore `package.variables.scss` as it is dynamically made and gulp doesn't see it quickly enough
        if (parentFile == 'index.scss' && url != 'package.variables.scss') {
          if (availableComponents[url]) {
            done(url);
          } else if (availableComponents['_'+truncatedUrl]) {
            // maybe it was an _filename.scss?
            done(url);
          } else if (availableComponents[truncatedUrl]) {
            done(url);
          } else {
            let importWarning = `Couldn\'t find ${url} referenced in ${prev}`;
            console.warn(importWarning);
            done({ contents: `/* ${importWarning} */` });
          }
        } else {
          return null;
        }

      }],
      includePaths: sassPaths
    };

    // Find all the component sass files available.
    // We'll pass this as a variable to our sass build so we can
    // only include the file if it exists.
    var availableComponents = {}; // track the components avaialble
    gulp
      .src(fastglob.sync([componentPath+'/**/*.scss',componentPath+'/**/**/*.scss']), {
        allowEmpty: true,
        ignore: [componentPath+'/**/index.scss',componentPath+'/**/**/index.scss',componentPath+'/vf-core-components/vf-core/components/**/*.scss']
      })
      .pipe(ListStream.obj(function (err, data) {
        if (err)
          throw err;
        data.forEach(function (value, i) {
          // Keep only the file name
          value = value.history[0].replace(/\\/g, '/'); // windows compatibility
          value = value.split(/[/]+/).pop();

          availableComponents[value] = true;
        });

        runSassBuild();
      }));

      function runSassBuild() {
        return gulp
          .src(SassInput)
          .pipe(sourcemaps.init())
          .pipe(sass(sassOpts))
          .on(
            'error',
            notify.onError(function(error) {
              process.emit('exit') // this fails precommit, but allows `gulp vf-dev` to work
              return 'Problem at file: ' + error.message;
            })
          )
          .pipe(browserSync.stream())
          .pipe(sourcemaps.write())
          .pipe(rename(
            {
              basename: 'styles'
            }
          ))
          .pipe(gulp.dest(SassOutput))
          .on('end', function() {
            done();
          });
      }
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
  // Generate per-compone .css files
  // -----------------------------------------------------------------------------

  var genCss = function (option) {
    var file_name = path.basename(path.dirname(option.file_path)) + '.css';
    return gulp.src(option.file_path)
      .pipe(sass({
        includePaths: sassPaths,
        outputStyle: 'expanded'
      })
      .on('error', function(e){
        console.log('Couldn\'t find a component dependency, the per-component CSS won\'t be generated for this', e.message);
      }))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(rename(file_name))
      .pipe(gulp.dest(option.dir));
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
