'use strict';

/**
 * Expose vf-css gulp tasks as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path, componentPath, buildDestionation, browserSync) {
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

  // Linting things
  const gulpStylelint   = require('gulp-stylelint');
  const SassInput = componentPath + '/vf-componenet-rollup/index.scss';
  const SassOutput = buildDestionation + '/css';

  // CSS Gen stuff
  const rename = require('gulp-rename');

  const sassPaths = [
    // Design tokens have first priority
    path.resolve('.',componentPath + '/vf-design-tokens/dist/sass'),
    path.resolve('.',componentPath + '/vf-design-tokens/dist/sass/custom-properties'),
    path.resolve('.',componentPath + '/vf-design-tokens/dist/sass/maps'),
    path.resolve('.',componentPath + '/vf-core-components/vf-design-tokens/dist/sass'),
    path.resolve('.',componentPath + '/vf-core-components/vf-design-tokens/dist/sass/custom-properties'),
    path.resolve('.',componentPath + '/vf-core-components/vf-design-tokens/dist/sass/maps'),
    // then sass config
    path.resolve('.',componentPath + '/vf-sass-config/variables'),
    path.resolve('.',componentPath + '/vf-sass-config/functions'),
    path.resolve('.',componentPath + '/vf-sass-config/mixins'),
    path.resolve('.',componentPath + '/vf-core-components/vf-sass-config/variables'),
    path.resolve('.',componentPath + '/vf-core-components/vf-sass-config/functions'),
    path.resolve('.',componentPath + '/vf-core-components/vf-sass-config/mixins'),
    // then components
    path.resolve('.',componentPath),
    path.resolve('.',componentPath + '/vf-core-components'),
    // and finally any multi-components
    path.resolve('.',componentPath + '/vf-form'),
    path.resolve('.',componentPath + '/vf-core-components/vf-form')
  ];

  gulp.task('vf-css', function(done) {
    const sassOpts = {
      // Import sass files
      // We'll check to see if the file exists before passing
      // it to sass for compilation
      importer: [function(url,prev,done) {
        var truncatedUrl = url.split(/[/]+/).pop();
        var parentFile = prev.split(/[/]+/).pop();

        // If you do not want to interveen in certain file names
        // if (parentFile == '_index.scss' || parentFile == '_vf-mixins.scss' || parentFile == 'vf-functions.scss') {
        //   return null;
        // }

        // only intervene in index.scss rollups
        if (parentFile == 'index.scss') {
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
          throw err
        data.forEach(function (value, i) {
          // Keep only the file name
          var value = value.history[0].split(/[/]+/).pop();

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
              process.emit('exit') // this fails precommit, but allows guld dev to work
              return 'Problem at file: ' + error.message;
            })
          )
          // .pipe(autoprefixer(autoprefixerOptions))
          .pipe(envs.reset)
          .pipe(browserSync.stream())
          .pipe(sourcemaps.write())
          .pipe(rename(
            {
              basename: 'styles'
            }
          ))
          .pipe(gulp.dest(SassOutput))
          // .pipe(cssnano())
          // .pipe(rename(
          //   {
          //     suffix: '.min'
          //   }
          // ))
          // .pipe(gulp.dest(SassOutput))
          .on('end', function() {
            done();
          });
      }
  });

  // Sass Build-Time things
  gulp.task('vf-css-build', function(done) {
    // const SassOutput = SassOutput + 'styles.css';
    return gulp
      .src(SassOutput + '/styles.css')
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(gulp.dest(SassOutput))
      .pipe(cssnano())
      .pipe(rename(
        {
          suffix: '.min'
        }
      ))
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
  // -----------------------------------------------------------------------------

  var genCss = function (option) {
    var file_name = path.basename(path.dirname(option.file_path)) + '.css';
    return gulp.src(option.file_path)
      .pipe(sass({
        includePaths: sassPaths,
        outputStyle: 'expanded'
      })
      .on('error', sass.logError))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(rename(file_name))
      .pipe(gulp.dest(option.dir));
  };

  gulp.task('vf-css-gen', function(done) {
    recursive(componentPath, ['*.css'], function (err, files) {
      files.forEach(function(file) {
        // only generate CSS for index.scss files, but not for the vf rollup
        if ((file.file.indexOf('index.scss') > -1) && (file.file_path.indexOf('vf-componenet-rollup/index.scss') == -1)) {
          genCss(file);
        }
      });
    });
    done();
  });

  return gulp;
};
