// vf-navigation
// only required for vf-navigation--on-this-page

/**
 * Function for JS scroll to top functionality
 * That must be executed exactly once
 * @example vfNavigationOnThisPage()
 */

export function vfNavigationOnThisPage() {
  var scope = document;
  var sectionList = scope.querySelectorAll(
    "[data-vf-js-navigation-on-this-page-link]"
  );
  // console.log(sectionList);
  var section = scope.querySelectorAll("[id]");
  var sectionPositions = {};
  var sectionHeights = {};
  var i = 0;

  if (!sectionList || !section) {
    // exit: either sections or section content not found
    return;
  }
  if (sectionList.length == 0 || section.length == 0) {
    // exit: either sections or section content not found
    return;
  }

  section.forEach((e) => {
    sectionPositions[e.id] = e.offsetTop;
  });
  section.forEach((e) => {
    sectionHeights[e.id] = e.offsetHeight;
  });

  function activateNavigationItem() {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sectionPositions) {
      // this implements a scrollspy concept based on https://codepen.io/zchee/pen/ogzvZZ
      if (sectionPositions[i] <= scrollPosition + 0) {
        // we activate the section 70 pixels before coming into view, as the sticky bar will cover it
        // only add remove the class if there is a new section to activate
        sectionList.forEach(function (currentValue, currentIndex, listObj) {
          if (currentValue.href.includes(i)) {
            currentValue.setAttribute("aria-selected", "true");
          }
        }, "myThisArg");
      }
      if (
        sectionPositions[i] - scrollPosition <=
          -Math.abs(window.innerHeight + sectionHeights[i] - 70) ||
        sectionPositions[i] - scrollPosition >= window.innerHeight
      ) {
        // we activate the container only while it is in view
        sectionList.forEach(function (currentValue, currentIndex, listObj) {
          if (currentValue.href.includes(i)) {
            currentValue.setAttribute("aria-selected", "false");
          }
        }, "myThisArg");
      }
    }
  }

  window.onscroll = function () {
    // we could introduce throttling, but as this is a fairly simple repaint, throttling is not likely required
    window.requestAnimationFrame(activateNavigationItem);
  };
}
