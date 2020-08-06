'use strict';

/**
 * Scan the build directory and make a search index.
 * Usage:
 *  require('./node_modules/\@visual-framework/vf-extensions/gulp-tasks/vf-build-search-index.gulpfile.js')(gulp, path, buildDestionation);
 *  gulp.task('dev', gulp.series('vf-build-search-index'));
 * 
 * Results in a search index at:
 *  buildDestionation+'/search_index.js' 
 */
module.exports = function(gulp, path, buildDestionation) {

  const fs = require('fs');
  const gutil = require('gulp-util');
  const through = require('through2');
  const stripJs = require('strip-js');
  const striptags = require('striptags');

  gulp.task('vf-build-search-index', function() {
    const fileName = buildDestionation+'/search_index.js';
    const endOfLine = '\r\n';
    var counter = 0;
    gutil.log(gutil.colors.green('Prepping search index for ' + buildDestionation+'/search_index.js'));
    var output = 'let searchIndex = {"pages": [';

    return gulp.src([buildDestionation+'/**/*.html'])
    .pipe(through.obj(function (file, enc, cb) {
      gutil.log(gutil.colors.green('Indexing:',file.path.split(buildDestionation)[1]));

      let text = fs.readFileSync(file.path, 'utf8');

      let title = text.match(/<title>(.*?)<\/title>/gi) + ' ';
          title = title.replace(/<title>(.*?)<\/title>/gi, '$1');
          title = title.replace('| EMBL Design System | EMBL','');

      let body = text.match(/<body.[\s\S]*?>(.[\s\S]*?)body>/gi) + ' ';
          body = stripJs(striptags(body));
          body = body.replace(/&quot;/g, ' '); // remove white space
          body = body.replace(/class\=/g, ' '); // remove white space
          
          body = body.replace(/<body.[\s\S]*?>(.[\s\S]*?)<\/body>/gi, '$1');
          body = body.replace(/\r?\n|\r/g, ' '); // remove white space
          body = body.replace(/    /g, ' '); // remove white space
          body = body.replace(/   /g, ' '); // remove white space
          body = body.replace(/  /g, ' '); // remove white space
          body = body.replace(/"/g, '\''); // remove double quotes

      output += endOfLine + '{"id":"'+counter+'", "title": "'+title+'", "text": "'+body+'", "tags": "", ';
      counter = counter + 1;

      // prep file path
      let localFilePath = file.path.split(buildDestionation)[1];
      
      output += '"url": "'+localFilePath+'"';

      // close the json entry
      output += '},';
      cb(null, file)
    })
    .on('finish', function (status) {
      gutil.log(gutil.colors.green('Finished prepping JSON'));
        // write the rendered JSON
        fs.writeFileSync(fileName, output + endOfLine + ']};');
      })
      .on('error', function(err) {
        gutil.log(gutil.colors.red(err.message));
        process.exit(1)
      })
    );
  });

  return gulp;
};
