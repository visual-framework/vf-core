
/**
 * Data file for components. This code returns permalink for each component while ignoring some as they are not to be shown on VF site
 */

// const gutil = require("gulp-util");
const ignore = ["preview", "dist", "src", "previews"];
module.exports = {
  eleventyComputed: {
    permalink: function(data) {
      if (
        data &&
        data.pagination &&
        ignore.indexOf(data.pagination["items"][0].name) === -1
      ) {
        //Return permalink for components
        return `components/${data.pagination["items"][0].name}/index.html`;
      } else if (
        data &&
        !data.pagination &&
        data.page.fileSlug === "components"
      ) {
        //Return permalink for components root folder (special case)
        return "components/index.html";
      } else {
        // gutil.log(data);
        //Temporarily store ignored files in temp/ folder which is deleted at the end of the build
        return "temp/"+Math.random();
      }
    }
  }
};
