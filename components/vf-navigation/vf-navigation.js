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

  // to do: make this not explode if sectionList missing
  var sectionList = document.querySelectorAll("[data-vf-js-scroll-activate-container]")[0];
  var section = document.querySelectorAll("[data-vf-js-scroll-activate]");
  var sectionPositions = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sectionPositions[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    // to do: throttle and request animationframe
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame#example
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sectionPositions) {
      if (sectionPositions[i] <= scrollPosition) {
        // only add remove the class if there is a new section to activate
        if (sectionList.querySelector("a[href*=" + i + "]") != null) {
          sectionList.querySelector(".active").classList.remove("active");
          sectionList.querySelector("a[href*=" + i + "]").classList.add("active");
        }
      }
    }
  };
}
