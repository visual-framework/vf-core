'use strict';

/**
 * Build tasks to generate a deployable static site,
 * most frequent use case will be for CI deployments.
 */

module.exports = function(gulp, buildDestionation) {

  // Copy compiled css/js and other assets
  gulp.task('vf-build:copy-assets', function() {
    return gulp.src(buildDestionation + '/**/*')
      .pipe(gulp.dest('./build'));
      console.info('Copied `/temp/build-files` assets.');
  });

  // Support for client projects using vf-build
  // but we need to see which Fractal build mode to invoke (or not at all, when it's not needed)
  let gulpFractalBuildTask;
  switch (global.vfBuildFractalMode) {
    case 'dataObject':
      // just render the objects to memory for further use
      gulpFractalBuildTask = 'vf-fractal:dataobject';
      break;
    case 'none':
      // don't invoke fractal at all
      gulpFractalBuildTask = 'vf-build:fractaldummybuild';
      break;
      console.error('Fractal build mode not supplied.');
    default:
    case 'normal':
      // standard full build of all static html for components
      gulpFractalBuildTask = 'vf-fractal:build';
      break;
  }

  gulp.task('vf-build:fractaldummybuild', function (done) {
    // an empty task as we can't run no gulp task using this approach
    done();
  });

  // Rollup all-in-one build as a static site for CI
  gulp.task('vf-build',
    gulp.series(
      'vf-clean',
      'vf-css:package-info',
      gulp.parallel (
        'vf-css:generate-component-css',
        gulp.series('vf-css:build', 'vf-css:production', 'vf-component-assets', 'vf-scripts'),
        gulp.series(gulpFractalBuildTask, 'vf-templates-precompile')
      ),
      'vf-build:copy-assets'
  ));

  return gulp;
};
