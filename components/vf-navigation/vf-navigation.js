// vf-navigation
// only required for vf-navigation--on-this-page

/**
 * Function for JS scroll to top functionality
 * That must be executed exactly once
 * @example vfNavigationOnThisPage()
 */
export function vfNavigationOnThisPage() {
  // this implements a scrollspy concept based on https://codepen.io/zchee/pen/ogzvZZ
  // const components = document.querySelectorAll("[data-vf-js-dropdown]");

  // for (let component of components) {
  //   component.addEventListener("click", () => {
  //     component.classList.toggle("vf-dropdown--open");
  //   });
  // }

  var sectionList = document.querySelectorAll("[data-vf-js-navigation-on-this-page-container]")[0];
  var section = document.querySelectorAll("[data-vf-js-navigation-on-this-page]");
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

  Array.prototype.forEach.call(section, function(e) {
    sectionPositions[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    // to do: throttle and request animationframe
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame#example
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sectionPositions) {
      if (sectionPositions[i] <= scrollPosition + 70) {
        // we activate the section 70 pixels before coming into view, as the sticky bar will cover it
        // only add remove the class if there is a new section to activate
        if (sectionList.querySelector("a[href*=" + i + "]") != null) {
          sectionList.querySelector("[aria-selected]").removeAttribute("aria-selected");
          sectionList.querySelector("a[href*=" + i + "]").setAttribute("aria-selected", "true");
        }
      }
    }
  };
}
