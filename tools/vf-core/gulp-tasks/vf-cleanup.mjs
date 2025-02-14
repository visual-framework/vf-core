// import del from "del";
import { deleteAsync } from "del";
"use strict";

/**
 * Expose vf-cleanup gulp task as a JS module
 * This makes dependency management a bit cleaner
 */
export default function(gulp, buildDestionation) {


  gulp.task("vf-clean", function(){
    return deleteAsync([buildDestionation, "build", "temp"], {force:true});
  });

  return gulp;
};
