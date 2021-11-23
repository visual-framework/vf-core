// vf-navigation
// only required for vf-navigation--on-this-page

/**
 * Function for JS scroll to top functionality
 * That must be executed exactly once
 * @example vfNavigationOnThisPage()
 */
export function vfNavigationOnThisPage() {
  var sectionList = document.querySelectorAll("[data-vf-js-navigation-on-this-page-container='true'],[data-vf-js-navigation-on-this-page-container='1']")[0];
  var section = document.querySelectorAll("[id]");
  var sectionPositions = {};
  var i = 0;

  if (!sectionList || !section) {
    // exit: either sections or section content not found
    return;
  }
  if (sectionList.length == 0 || section.length == 0) {
    // exit: either sections or section content not found
    return;
  }

  section.forEach(e => {
    sectionPositions[e.id] = e.offsetTop;
  });

  function activateNavigationItem() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sectionPositions) {
      // this implements a scrollspy concept based on https://codepen.io/zchee/pen/ogzvZZ
      if (sectionPositions[i] <= scrollPosition + 70) {
        // we activate the section 70 pixels before coming into view, as the sticky bar will cover it
        // only add remove the class if there is a new section to activate
        if (sectionList.querySelector("a[href*=" + i + "]") != null) {
          sectionList.querySelector("[aria-selected]").removeAttribute("aria-selected");
          sectionList.querySelector("a[href*=" + i + "]").setAttribute("aria-selected", "true");
        }
      }
    }
  }

  window.onscroll = function() {
    // we could introduce throttling, but as this is a fairly simple repaint, throttling is not likely required
    window.requestAnimationFrame(activateNavigationItem);
  };
}
