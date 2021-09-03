// vf-back-to-top

/**
 * Function for JS scroll to top functionality
 * That must be executed exactly once
 * @example vfBackToTop()
 */
export function vfBackToTop() {

  // add click handler on ALL of the "Back to top" links on page
  const links = document.querySelectorAll("[data-vf-js-back-to-top]");
  for (let link of links) {
    link.addEventListener("click", (event) => {

      // if target element has href defined, prevent it from navigating. Href is a non-js fallback
      event.preventDefault();

      // we get scroll target if from data param of element
      const scrollToId = event.target.dataset.scrollToId;
      // Get the element with given id or body if no id provided
      const targetElement = scrollToId ? document.getElementById(scrollToId) : document.body;
      // Scroll to the element
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // On scrolling, show or hide "Back to top" link when scroll is past one full screen height
  window.addEventListener("DOMContentLoaded", () => {

    //only handle first floating element, ignore additional elements
    const floatingElement = document.querySelector("[data-vf-js-back-to-top-floating]");

    if (!floatingElement) {
      //exit, no floating button element found
      return;
    }

    //hide initially
    setVisible(floatingElement, false);

    // Add handler only if floating element present
    if (floatingElement) {
      window.addEventListener("scroll", function () {
        // current scrollY value is past one full screen height?
        const isScrollPastWindowHeight = window.scrollY >= window.innerHeight;

        // toggle visibility
        setVisible(floatingElement, isScrollPastWindowHeight);
      });
    }

  });
}

function setVisible(element, isVisible){
  element.style.visibility = isVisible ? "visible" : "hidden";
}
