// This script is needed only for the VF component library
// ---

// Append a random hash on all links to example.com on page load
// this allows for better testing of vistied/new states
function hashLinkPreviews() {
  var anchors = document.getElementsByTagName("a");

  for (var i = 0; i < anchors.length; i++) {
    if (anchors[i].href.includes('javascript:void(0);')) {
      anchors[i].href = "https://example.com?hash=" + Math.floor(Math.random() * 100000000);
    }
  } 
}

// Execute scripts
window.onload = function() {
  hashLinkPreviews();
}


