'use strict';

/**
 * Expose vf-scripts gulp task as a JS module
 * This makes dependency management a bit cleaner
 */

module.exports = function(gulp, path, componentPath, componentDirectories, buildDestionation) {
  const rename = require('gulp-rename');
  const rollup = require('gulp-better-rollup');
  const includePaths = require('rollup-plugin-includepaths');
  const babel = require('gulp-babel');
  const deleteLines = require('gulp-delete-lines');
  const eslint = require('gulp-eslint');

  var jsPaths = [componentPath];

  // Construct jsPaths to import from componentDirectories
  for (let directory = 0; directory < componentDirectories.length; directory++) {
    jsPaths.push(path.resolve('.', componentPath, componentDirectories[directory]).replace(/\\/g, '/'));
  }

  // add any multi-component paths
  // todo: this obviously doesn't support componentDirectories, but we need to
  //       architect a better way of supporting nested sub-components,
  //       perhaps it is `vf-form`'s responsibility to do a rollup for JS and CSS
  jsPaths.push(componentPath + '/vf-form');

  // Rollup all JS imports into CJS and babel them to ES5
  gulp.task('vf-scripts:es5', function() {
    let includePathOptions = {
      include: {},
      paths: jsPaths,
      // If you need to make any components cited as "external"
      // external: ['vfTabs'],
      extensions: ['.js']
    };

    return gulp.src(componentPath + '/vf-componenet-rollup/scripts.js')
      // .pipe(sourcemaps.init())
      .pipe(rollup({
        // There is no `input` option as rollup integrates into the gulp pipeline
        treeshake: false,
        // If you need to make any components cited as "external"
        // external: ['vfTabs','vfBanner'],
        plugins: [
          // Gulp better rollup does not appear to be working with babe anymore
          // as a workaround we run babel on the roll-d up JS
          // @todo: investigate this further
          // babel({
          //   'presets': [
          //     [
          //       '@babel/preset-env',
          //       {
          //         'targets': '> 0.25%, not dead, last 2 versions'
          //       }
          //     ]
          //   ]
          // }),
          includePaths(includePathOptions)
        ]
      }, {
        // Rollups `sourcemap` option is unsupported. Use `gulp-sourcemaps` plugin instead
        format: 'cjs',
      }))
      // If you wish to inline sourcemap into the exported .js file:
      // .pipe(sourcemaps.write())
      // When components are requested but not found, rollupJS leaves them as a node-style
      // `require()`, this trims those
      .pipe(deleteLines({
         'filters': [
         /require\('/i
         ]
       }))
       .pipe(babel({
        'presets': [
          [
            '@babel/preset-env',
            {
              'targets': '> 0.25%, not dead, last 2 versions'
            }
          ]
        ]
      }))

  .pipe(gulp.dest(buildDestionation + '/scripts'));
  });


  // Eventually we'll want to support ES6 natively with ES5 as fallback, `scripts.es5.js`
  gulp.task('vf-scripts:modern', function() {
    return gulp.src(componentPath + '/vf-componenet-rollup/scripts.js')
        .pipe(rename(function (path) {
          path.extname = '.modern.js';
        }))
      .pipe(gulp.dest(buildDestionation + '/scripts'));
  });

  // JS Lint
  // For config see .eslintrc.js
  const vfJsLintPaths = [componentPath+'/**/embl-*.js', componentPath+'/**/vf-*.js', '!assets/**/*.js',  '!'+componentPath+'/**/*.precompiled.js'];
  gulp.task('vf-lint:js-soft-fail', function() {
    return gulp.src(vfJsLintPaths)
      // a minimal rule set if .eslintrc.js is missing (avoid build break)
      .pipe(eslint({
        "rules":{
          indent: ["error", 2]
        }
      }))
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format());
  });

  gulp.task('vf-lint:js-hard-fail', function() {
    return gulp.src(vfJsLintPaths)
      // a minimal rule set if .eslintrc.js is missing (avoid build break)
      .pipe(eslint({
        "rules":{
          indent: ["error", 2]
        }
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });

  gulp.task('vf-scripts', gulp.series(
    'vf-scripts:es5', 'vf-scripts:modern', 'vf-lint:js-soft-fail'
  ));

  return gulp;
};
