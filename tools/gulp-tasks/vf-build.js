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

  // Rollup all-in-one build as a static site for CI
  gulp.task('vf-build',
    gulp.series(
      'vf-clean',
      'vf-css:package-info',
      gulp.parallel (
        'vf-css:generate-component-css',
        gulp.series('vf-css:build', 'vf-css:production', 'vf-component-assets', 'vf-scripts'),
        'vf-fractal:build'
      ),
      'vf-build:copy-assets'
  ));


  return gulp;
};
