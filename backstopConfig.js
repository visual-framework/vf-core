var glob = require("glob")

var viewports = [
  {
    "name": "small",
    "width": 375,
    "height": 667
  },

  {
    "name": "medium",
    "width": 768,
    "height": 1024
  },

  {
    "name": "huge",
    "width": 1366,
    "height": 768
  }
];

// Hide any selectors you don't need
var hideSelectors = [];
// Take out any selectors
var removeSelectors = [];
// Just get look at these selectors
var selectors = [];
var scenariosArray = [];
var htmlFiles = glob.sync("build/components/preview/**/*.html");

// Loop through all *.html pages and push to scenariosArray
htmlFiles.forEach(function(file, i) {
  var filename = file;
  scenariosArray.push({
    "label": filename,
    "url": "http://localhost:8888/"+filename,
    "hideSelectors": hideSelectors,
    "removeSelectors": removeSelectors,
    "selectors": selectors,
    "delay": 500
  });
});

module.exports = {
  "id": "SCL Test",
  "viewports": viewports,
  "scenarios": scenariosArray,
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "casper_scripts": "backstop_data/casper_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "casperFlags": [],
  "engine": "phantomjs",
  "report": ["browser"],
  "debug": false
}
