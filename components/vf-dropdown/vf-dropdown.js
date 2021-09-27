// vf-dropdown

/**
 * Function for JS scroll to top functionality
 * That must be executed exactly once
 * @example vfBackToTop()
 */
export function vfDropdown() {
  const components = document.querySelectorAll("[data-vf-js-dropdown]");

  for (let component of components) {
    component.addEventListener("click", (event) => {
      // if target element has href defined, prevent it from navigating. Href is a non-js fallback
      const d = component.getElementsByClassName(
        "vf-dropdown__menu-container"
      )[0];
      d.style.display = d.style.display === "block" ? "none" : "block";
      component.classList.toggle("menu-opened");
    });
  }

}
