'use strict';

const fs = require('fs');

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

const SassInput = './components/vf-core/index.scss';
const SassOutput = './public/css';
const autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };
const config = JSON.parse(fs.readFileSync('./package.json'));
global.vfName = config.vfConfig.vfName;
global.vfNamespace = config.vfConfig.vfNamespace;

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

const gulp = require('gulp');
const fractal = require('./fractal.js');
const logger = fractal.cli.console;
const path = require('path');
const notify = require('gulp-notify');
const shell = require('gulp-shell');
const rename = require('gulp-rename');
const watch = require('gulp-watch');

// Sass and CSS Stuff
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const nodeModuleImport = require('@node-sass/node-module-importer');
const recursive = require('./tools/css-generator/recursive-readdir');

// Linting things
const prettier = require('gulp-prettier');
const postcss     = require('gulp-postcss');
const reporter    = require('postcss-reporter');
const syntax_scss = require('postcss-scss');
const stylelint   = require('stylelint');

// Image things

const svgo = require('gulp-svgo');

// JS Stuff
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const patternPath = path.resolve(__dirname, 'components' );

// Local Server Stuff
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// Design Tokens
const theoG = require('gulp-theo')
const theo = require('theo')

// -----------------------------------------------------------------------------
// Sass and CSS Tasks
// -----------------------------------------------------------------------------

gulp.task('css', function() {
  const options = {
  };
  const opts = {
    importer: [nodeModuleImport],
    includePaths: [
      path.resolve(__dirname, 'components/vf-sass-config/variables'),
      path.resolve(__dirname, 'components/vf-sass-config/functions'),
      path.resolve(__dirname, 'components/vf-sass-config/mixins'),
      path.resolve(__dirname, 'components'),
      path.resolve(__dirname, 'components/vf-core-patterns'),
      path.resolve(__dirname, 'node_modules'),
    ]
  };
  return gulp
    .src(SassInput)
    .pipe(sourcemaps.init())
    .pipe(sass(opts))
    .on(
      'error',
      notify.onError(function(error) {
        return 'Problem file : ' + error.message;
      })
    )
    .pipe(browserSync.stream())
    .pipe(sourcemaps.write())
    .pipe(rename(
      {
        basename: "styles"
      }
    ))
    .pipe(gulp.dest(SassOutput))
    .pipe(cssnano())
    .pipe(rename(
      {
        suffix: ".min"
      }
    ))
    .pipe(gulp.dest(SassOutput));
});

// Sass Lint
gulp.task("scss-lint", function() {

  // Stylelint config rules
  var stylelintConfig = {
    "plugins": [
      "stylelint-order",
      "stylelint-scss"
    ],
    "extends": [
      "./node_modules/prettier-stylelint/config.js"
    ],
    "rules": {
      "indentation": 2,
      "string-quotes": "single",
      "order/order": [
        [
        "custom-properties",
        "dollar-variables",
        {
        type: "at-rule",
        name: "include",
        parameter: "set-*",
        message: "Stop being lazy and flatten your classnames"
        },
        "declarations",
        "rules",
        {
        	type: "at-rule",
        	name: "media",
        	hasBlock: true
        }
      ]
      ],
      "order/properties-alphabetical-order": true,
      "block-no-empty": true,
      "color-no-invalid-hex": true,
      "declaration-colon-space-after": "always",
      "declaration-colon-space-before": "never",
      "function-comma-space-after": "always",
      "media-feature-colon-space-after": "always",
      "media-feature-colon-space-before": "never",
      "media-feature-name-no-vendor-prefix": true,
      "max-empty-lines": 3,
      "max-nesting-depth": 3,
      "selector-nested-pattern": [ "^(?!&__|&--|&-|&_).*", {
        "message": "Stop being lazy and flatten your classnames",
        "severity": "warning"
      } ],
      "number-leading-zero": "never",
      "number-no-trailing-zeros": true,
      "property-no-vendor-prefix": true,
      "selector-list-comma-space-before": "never",
      "selector-list-comma-newline-after": "always",
      "string-quotes": "single",
      "value-no-vendor-prefix": true,
      // "indentation": [ 2, {
      //   "except": ["block"],
      //   "message": "Please use 2 spaces for indentation. Tabs make Stuart very grumpy.",
      //   "severity": "warning"
      // } ]
    }
  }

  var processors = [
    stylelint(stylelintConfig),
    reporter({
      clearMessages: true,
      throwError: false,
    })
  ];

  return gulp
    .src(
      ['components/**/vf-*.scss', '!components/**/index.scss', '!assets/**/*.scss']
    )
    .pipe(postcss(processors, {syntax: syntax_scss}));
});


// -----------------------------------------------------------------------------
// Scripts Tasks
// -----------------------------------------------------------------------------
gulp.task('scripts', function() {
  return gulp
    .src('./components/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./public/scripts'));
});

// -----------------------------------------------------------------------------
// Pattern Assets
// -----------------------------------------------------------------------------
gulp.task('pattern-assets', function() {
  return gulp
    .src(['./components/**/**/assets/**/*'])
    .pipe(gulp.dest('./public/assets'));
    // .pipe(gulp.dest('./assets'));
});


// -----------------------------------------------------------------------------
// Pattern Assets
// -----------------------------------------------------------------------------
gulp.task('images', () => {
  return gulp
    .src('./components/**/*.svg')
    .pipe(svgo())
    .pipe(gulp.dest('./components'));
});

// -----------------------------------------------------------------------------
// Design Token Tasks
// -----------------------------------------------------------------------------

theo.registerFormat("typography-map", result => {
  let { category, type } = result
    .get("props")
    .first()
    .toJS();
  return `$vf-${category}--${type}: (
${result
  .get("props")
  .map(
  prop => `
  '${prop.get("name")}': (
    'font-size': ${prop.getIn(["value", "font-size"])},
    'font-weight': ${prop.getIn(["value", "font-weight"])},
    'line-height': ${prop.getIn(["value", "line-height"])}
  ),`
  )
  .sort()
  .join("\n")}

);
  `;
});

gulp.task('tokens:typographic-scale', () =>
  gulp.src('./components/vf-design-tokens/typographic-scales/*.yml')
    .pipe(theoG({
      transform: { type: 'web' },
      format: { type: 'typography-map' }
    }))
    .pipe(rename(function (path) {
      path.extname = ".scss";
    }))
    .pipe(gulp.dest('./components/vf-sass-config/variables'))
);

gulp.task('tokens:variables', () =>
  gulp.src('./components/vf-design-tokens/variables/*.yml')
    .pipe(theoG({
      transform: { type: 'web' },
      format: { type: 'scss' }
    }))
    .pipe(gulp.dest('./components/vf-sass-config/variables'))
);

gulp.task('tokens:maps', () =>
  gulp.src(['./components/vf-design-tokens/maps/*.yml', '!./components/vf-design-tokens/typographic-scales/*.yml'])
    .pipe(theoG({
      transform: { type: 'web' },
      format: { type: 'map.scss' }
    }))
    .pipe(gulp.dest('./components/vf-sass-config/variables'))
);

// -----------------------------------------------------------------------------
// Fractal Tasks
// -----------------------------------------------------------------------------

gulp.task('frctlStart', function() {
  fractal.set('project.environment.local', 'true');
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
    logger.success(`Network URL: ${server.urls.sync.external}`);
  });
});

gulp.task('frctlBuild', function() {
  fractal.set('project.environment.production', 'true');
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) =>
    logger.update(`Exported ${completed} of ${total} items`, 'info')
  );
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');

    // Copy compiled css/js and other assets
    gulp.src('./public/**/*')
    .pipe(gulp.dest('./build'));
    logger.success('Copied `/public` assets.');
  });
});

// -----------------------------------------------------------------------------
// CSS Generator Tasks
// -----------------------------------------------------------------------------

var genCss = function (option) {
  var file_name = path.basename(path.dirname(option.file_path)) + ".css";
  return gulp.src(option.file_path)
    .pipe(sass({
      includePaths: [
        path.resolve(__dirname, 'components/vf-sass-config/variables'),
        path.resolve(__dirname, 'components/vf-sass-config/functions'),
        path.resolve(__dirname, 'components/vf-sass-config/mixins'),
        path.resolve(__dirname, 'components'),
        path.resolve(__dirname, 'components/vf-core-patterns'),
        path.resolve(__dirname, 'node_modules')
      ],
      outputStyle: 'expanded'
    })
    .on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(rename(file_name))
    .pipe(gulp.dest(option.dir));
};

gulp.task('CSSGen', function(done) {
  recursive(patternPath, ['*.css'], function (err, files) {
    files.forEach(function(file) {
      if (file.file.indexOf('index.scss') > -1) {
        genCss(file);
      }
    });
  });
  done();
});

// -----------------------------------------------------------------------------
// Watch Tasks
// -----------------------------------------------------------------------------

gulp.task('watch', function(done) {
  fractal.watch();
  gulp.watch('./**/*.scss', gulp.series(['css', 'scss-lint'])).on('change', reload);
  gulp.watch('./components/**/*.js', gulp.series('scripts')).on('change', reload);
  gulp.watch('./components/**/**/assets/*', gulp.series('images', 'pattern-assets')).on('change', reload);
});


// -----------------------------------------------------------------------------
// Default Tasks
// -----------------------------------------------------------------------------

// Build as a static site for CI
gulp.task('build', gulp.series(
  'scss-lint', 'CSSGen', 'css', 'pattern-assets', 'scripts', 'frctlBuild'
));

gulp.task('dev', gulp.parallel(
  'frctlStart', 'pattern-assets', 'css', 'scripts', 'watch'
));

gulp.task('tokens', gulp.parallel(
  'tokens:variables', 'tokens:typographic-scale', 'tokens:maps'
));

gulp.task('component', shell.task(
  ['yo ./tools/component-generator']
));
