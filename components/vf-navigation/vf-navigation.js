// vf-navigation
// only required for vf-navigation--on-this-page

/**
 * Function for JS scroll to top functionality
 * That must be executed exactly once
 * @example vfNavigationOnThisPage()
 */

export function vfNavigationOnThisPage() {
  var scope = document;
  // based on the attribute we select all navigation links
  var navLinks = scope.querySelectorAll(
    "[data-vf-js-navigation-on-this-page-container='true'] .vf-navigation__item a"
  );
  // we store all ids from anchor tags to know the sections we should care about
  var ids = [];
  navLinks.forEach(function(link) {
    if (link.hash) {
      ids.push(link.hash.substring(1));
    }
  });
  // get all elements with an id and convert it from NodeList to Array
  var sections = Array.prototype.slice.call(scope.querySelectorAll("[id]"));
  var sectionPositions = [];

  if (!navLinks || !sections) {
    // exit: either sections or section content not found
    return;
  }
  if (navLinks.length === 0 || sections.length === 0) {
    // exit: either sections or section content not found
    return;
  }
  // remove all the elements that doesn't appear in the navigation based on it's id
  sections = sections.filter(function(section) {
    return ids.indexOf(section.id) !== -1;
  });
  function activateNavigationItem() {
    // althought costly, we recalculate the position of elements each time as things move or load dynamically
    sectionPositions = [];
    sections.forEach(function(e) {
      var rect = e.getBoundingClientRect();
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      sectionPositions.push({ id: e.id, position: rect.top + scrollTop });
    });
    // put sections in the bottom at the beginning of the array
    sectionPositions.reverse();

    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    // We reverse the array because Array.find starts to search from position 0 and to simplify
    // the logic to find which element is closest to the current scroll position, otherwise it will always
    // select the first element.
    var currentSection = sectionPositions.find(function(s) {
      return !(scrollPosition <= s.position - 95);
    });
    navLinks.forEach(function(link) {
      link.setAttribute("aria-selected", "false");
    });
    // if we don't match any section yet, highlight the first link
    if (!currentSection) {
      navLinks[0].setAttribute("aria-selected", "true");
    } else {
      navLinks.forEach(function(link) {
        if (link.hash === "#" + currentSection.id) {
          link.setAttribute("aria-selected", "true");
        }
      });
    }
    isCalculating = false;
  }

  var isCalculating = false;
  window.onscroll = function() {
    if (!isCalculating) {
      isCalculating = true;
      window.requestAnimationFrame(activateNavigationItem);
    }
  };
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      var section = document.querySelector(link.hash);
      var scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (!section) return;
      event.preventDefault();
      // get current styles of element we are moving to
      var elemStyles = window.getComputedStyle(section);
      // take into account the padding and/or margin top
      var value =
        elemStyles.paddingTop !== "0px"
          ? elemStyles.paddingTop
          : elemStyles.marginTop;
      // we remove the px characters from the value
      var offset = parseInt(value.slice(0, -2), 10);
      // total offset: margin/padding top of the element plus the size of the navigation bar
      window.scroll({
        top:
          section.getBoundingClientRect().top + scrollPosition - (offset + 40),
        behavior: "smooth"
      });
    });
  });
}
