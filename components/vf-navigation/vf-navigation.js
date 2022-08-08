// vf-navigation
// only required for vf-navigation--on-this-page

/**
 * Function for JS scroll to top functionality
 * That must be executed exactly once
 * @example vfNavigationOnThisPage()
 */

export function vfNavigationOnThisPage() {
  var scope = document;
  var navLinks = scope.querySelectorAll(
    "[data-vf-js-navigation-on-this-page-container] .vf-navigation__item a"
  );

  var sections = scope.querySelectorAll("[id]");
  var sectionPositions = [];

  if (!navLinks || !sections) {
    // exit: either sections or section content not found
    return;
  }
  if (navLinks.length === 0 || sections.length === 0) {
    // exit: either sections or section content not found
    return;
  }

  function activateNavigationItem() {
    // althought costly, we recalculate the position of elements each time as things move or load dynamically
    sectionPositions = [];
    sections.forEach((e) => {
      var rect = e.getBoundingClientRect();
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // as currently we query for all elements with id, we remove script tags and other elements
      if (rect.width !== 0 && rect.height !== 0) {
        sectionPositions.push({ id: e.id, position: rect.top + scrollTop});
      }
    });
    sectionPositions.reverse();

    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var currentSection = sectionPositions.find(function(s) { return !(scrollPosition <= s.position - 95) });
    navLinks.forEach(function(link) {
      link.setAttribute("aria-selected", "false")
    });
    if (!currentSection) {
      navLinks[0].setAttribute("aria-selected", "true")
    } else {
      navLinks.forEach(function(link) {
        if(link.hash === ('#'+currentSection.id)) {
          link.setAttribute("aria-selected", "true");
        }
      })
    }
    isCalculating = false;
  }

  var isCalculating = false;
  window.onscroll = function () {
    if (!isCalculating) {
      isCalculating = true;
      window.requestAnimationFrame(activateNavigationItem);
    }
  };
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      var section = document.querySelector(link.hash);
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      if (!section) return;
      event.preventDefault();
      var elemStyles = window.getComputedStyle(section);
      var value = elemStyles.paddingTop !== '0px' ? elemStyles.paddingTop : elemStyles.marginTop;
      var offset = parseInt(value.slice(0, -2), 10);
      window.scroll({
        top: (section.getBoundingClientRect().top + scrollPosition) - (offset + 40),
        behavior: 'smooth',
      })
    });
  });

}
