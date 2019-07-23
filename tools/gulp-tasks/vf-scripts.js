const gulp   = require('gulp');
const rename = require('gulp-rename');
const rollup = require('gulp-better-rollup');
const includePaths = require('rollup-plugin-includepaths');
const babel = require('gulp-babel');
const path = require('path');
const componentPath = path.resolve('.', global.vfComponentPath);
const buildDestionation = path.resolve('.', global.vfBuildDestination);

// -----------------------------------------------------------------------------
// Scripts Tasks
// -----------------------------------------------------------------------------

// Rollup all JS imports into CJS and babel them to ES5
gulp.task('vf-scripts:es5', function() {
  let includePathOptions = {
      include: {},
      paths: [
        componentPath,
        componentPath + '/vf-core-components',
        componentPath + '/vf-form',
      ],
      external: ['vfTabs'],
      extensions: ['.js']
  };

  return gulp.src(componentPath + '/vf-componenet-rollup/scripts.js')
    // .pipe(sourcemaps.init())
    .pipe(rollup({
      // There is no `input` option as rollup integrates into the gulp pipeline
      treeshake: false,
      // external: ['vfTabs','vfBanner'],
      plugins: [
        babel({
          'presets': [
            [
              '@babel/preset-env',
              {
                'targets': '> 0.25%, not dead, last 2 versions'
              }
            ]
          ]
        }),
        includePaths(includePathOptions)
      ]
    }, {
      // Rollups `sourcemap` option is unsupported. Use `gulp-sourcemaps` plugin instead
      format: 'cjs',
    }))
    // inlining the sourcemap into the exported .js file
    // .pipe(sourcemaps.write())
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
