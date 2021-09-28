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
      component.classList.toggle("vf-dropdown--open");
    });
  }

}
