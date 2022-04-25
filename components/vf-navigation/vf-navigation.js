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
  if (sectionList.length === 0 || section.length === 0) {
    // exit: either sections or section content not found
    return;
  }

  function activateNavigationItem() {
    // althought costly, we recalculate the position of elements each time as things move or load dynamically
    section.forEach((e) => {
      var rect = e.getBoundingClientRect();
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      sectionPositions[e.id] = rect.top + scrollTop;
      sectionHeights[e.id] = e.offsetHeight;
    });

    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sectionPositions) {
      // this implements a scrollspy concept based on https://codepen.io/zchee/pen/ogzvZZ
      if (sectionPositions[i] <= scrollPosition + 0) {
        // we activate the section 70 pixels before coming into view, as the sticky bar will cover it
        // only add remove the class if there is a new section to activate

        sectionList.forEach(function (currentValue, currentIndex, listObj) {
          // console.log(currentValue.href);
          if (currentValue.href.includes(i)) {
            currentValue.setAttribute("aria-selected", "true");
          }
        }, "myThisArg");
      }
      var isNotYetOnScreen = sectionPositions[i] > scrollPosition;
      var bottomOfElement = sectionPositions[i] + sectionHeights[i];
      if (scrollPosition - 70 > bottomOfElement || isNotYetOnScreen) {
        // we activate the container only while it is in view
        sectionList.forEach(function (currentValue, currentIndex, listObj) {
          if (currentValue.href.includes(i)) {
            currentValue.setAttribute("aria-selected", "false");
          }
        }, "myThisArg");
      }
    }
    isCalculating = false;
  }

  var isCalculating = false;
  window.onscroll = function () {
    if (!isCalculating) {
      isCalculating = true;
      window.requestAnimationFrame(activateNavigationItem);
    } else {
      // console.log("throttled!");
    }
  };
}
