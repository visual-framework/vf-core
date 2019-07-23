'use strict';

const fs = require('fs');

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

// Pull in some optional configuration from the package.json file, a la:
// "vfConfig": {
//   "vfName": "My Component Library",
//   "vfNameSpace": "myco-",
//   "vfComponentPath": "./src/components",
//   "vfBuildDestination": "./build",
//   "vfThemePath": "@frctl/mandelbrot"
// },
// all settings are optional
const config = JSON.parse(fs.readFileSync('./package.json'));
config.vfConfig = config.vfConfig || [];
global.vfName = config.vfConfig.vfName || "Visual Framework 2.0";
global.vfNamespace = config.vfConfig.vfNamespace || "vf-";
global.vfComponentPath = config.vfConfig.vfComponentPath || __dirname + '/components';
global.vfBuildDestination = config.vfConfig.vfBuildDestination || __dirname + '/temp/build-files';
global.vfThemePath = config.vfConfig.vfThemePath || './tools/vf-frctl-theme';
const autoprefixerOptions = { overrideBrowserslist: ['last 2 versions', '> 5%', 'Firefox ESR'] };
const path = require('path');
const componentPath = path.resolve('.', global.vfComponentPath);
const buildDestionation = path.resolve('.', global.vfBuildDestination);
const SassInput = componentPath + '/vf-componenet-rollup/index.scss';
const SassOutput = buildDestionation + '/css';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

const gulp = require('gulp');
const notify = require('gulp-notify');
const shell = require('gulp-shell');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const ListStream = require('list-stream');
const fastglob = require('fast-glob');
const replace = require('gulp-replace');
const del = require('del');

// Sass and CSS Stuff
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const recursive = require('./tools/css-generator/recursive-readdir');

// Linting things
const postcss     = require('gulp-postcss');
const reporter    = require('postcss-reporter');
const syntax_scss     = require('postcss-scss');
const gulpStylelint   = require('gulp-stylelint');

// Image things
const svgmin = require('gulp-svgmin');

// JS Stuff
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
// const sourcemaps = require('gulp-sourcemaps');

// Local Server Stuff
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// Some Gulp tasks live in their own files, for the sake of clarity.
require('require-dir')('./tools/gulp-tasks');

// -----------------------------------------------------------------------------
// Sass and CSS Tasks
// -----------------------------------------------------------------------------

const sassPaths = [
  // Design tokens have first priority
  componentPath + '/vf-design-tokens/dist/sass',
  componentPath + '/vf-design-tokens/dist/sass/custom-properties',
  componentPath + '/vf-design-tokens/dist/sass/maps',
  componentPath + '/vf-core-components/vf-design-tokens/dist/sass',
  componentPath + '/vf-core-components/vf-design-tokens/dist/sass/custom-properties',
  componentPath + '/vf-core-components/vf-design-tokens/dist/sass/maps',
  // then sass config
  componentPath + '/vf-sass-config/variables',
  componentPath + '/vf-sass-config/functions',
  componentPath + '/vf-sass-config/mixins',
  componentPath + '/vf-core-components/vf-sass-config/variables',
  componentPath + '/vf-core-components/vf-sass-config/functions',
  componentPath + '/vf-core-components/vf-sass-config/mixins',
  // then components
  componentPath,
  componentPath + '/vf-core-components',
  // and finally any multi-components
  componentPath + '/vf-form',
  componentPath + '/vf-core-components/vf-form'
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
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(browserSync.stream())
        .pipe(sourcemaps.write())
        .pipe(rename(
          {
            basename: 'styles'
          }
        ))
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
    }

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
// Component Assets
// -----------------------------------------------------------------------------
gulp.task('vf-component-assets', function() {
  return gulp
    .src([componentPath + '/vf-core-components/**/assets/**/*', componentPath + '/**/assets/**/*'])
    .pipe(gulp.dest(buildDestionation + '/assets'));
});


// -----------------------------------------------------------------------------
// Component Assets
// -----------------------------------------------------------------------------
gulp.task('svg', () => {
  return gulp
    .src(componentPath + '/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest(componentPath));
});

// -----------------------------------------------------------------------------
// Fractal Tasks
// -----------------------------------------------------------------------------

gulp.task('frctlStart', function(done) {
  const fractal = require('./fractal.js').initialize('server',fractalReadyCallback);
  function fractalReadyCallback() {
    done();
  }
});

gulp.task('frctlBuild', function(done) {
  const fractal = require('./fractal.js').initialize('build',fractalReadyCallback);
  function fractalReadyCallback() {
    // Copy compiled css/js and other assets
    gulp.src(buildDestionation + '/**/*')
      .pipe(gulp.dest('./build'));
      console.info('Copied `/temp/build-files` assets.');

    done();
  }
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

// -----------------------------------------------------------------------------
// Watch Tasks
// -----------------------------------------------------------------------------

gulp.task('vf-watch', function(done) {
  gulp.watch(componentPath + '/**/*.scss', gulp.series('vf-css')).on('change', reload);
  gulp.watch(componentPath + '/**/*.js', gulp.series('vf-scripts')).on('change', reload);
  gulp.watch(componentPath + '/**/**/assets/*.svg', gulp.series('svg','vf-component-assets')).on('change', reload);
  gulp.watch([componentPath + '/**/**/assets/*', '!' + componentPath + '/**/**/assets/*.svg'], gulp.series('vf-component-assets')).on('change', reload);
});

// -----------------------------------------------------------------------------
// Cleanup Tasks
// -----------------------------------------------------------------------------

gulp.task('vf-clean', function(){
  return del(['build/**','temp/**'], {force:true});
});

// -----------------------------------------------------------------------------
// Default Tasks
// -----------------------------------------------------------------------------

gulp.task('vf-scripts', gulp.series(
  'vf-scripts:es5', 'vf-scripts:modern'
));

gulp.task('vf-dev', gulp.series(
  'vf-clean', 'vf-component-assets', ['vf-css', 'vf-scripts'], 'frctlStart', ['vf-lint:scss-soft-fail', 'vf-watch']
));

// Build as a static site for CI
gulp.task('vf-build', gulp.series(
  'vf-clean', 'vf-css-gen', 'vf-css', 'vf-component-assets', 'vf-scripts', 'frctlBuild'
));

gulp.task('vf-prepush-test', gulp.parallel(
  'vf-lint:scss-hard-fail', 'vf-css'
));

gulp.task('vf-component', shell.task(
  ['yo ./tools/component-generator']
));
