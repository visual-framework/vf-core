// vf-dropdown

/**
 * Function for JS scroll to top functionality
 * That must be executed exactly once
 * @example vfDropdown()
 */
export function vfDropdown() {
  const components = document.querySelectorAll("[data-vf-js-dropdown]");
  function isUpOrDownKey(keyboardEvent) {
    return (keyboardEvent.key === "ArrowUp" || keyboardEvent.key === "ArrowDown");
  }

  for (let component of components) {
    component.setAttribute("role", "menubar")
    const innerLabel = component.querySelector(".vf-dropdown__label-container");
    innerLabel.setAttribute("tabindex", "0");
    const links = component.querySelectorAll(".vf-dropdown__menu-container .vf-dropdown__menu-item-link");
    links.forEach(function(link) { link.setAttribute("tabindex", "-1") });
    const numOfLinks = links.length;
    let currentPos = null;
    component.setAttribute("aria-expanded", "false");
    component.addEventListener("focusout", function(e) {
      // if dropdown loses focus to another element that aren't its own links
      if (!e.currentTarget.contains(e.relatedTarget)) {
        innerLabel.setAttribute("tabindex", "0");
        component.setAttribute("aria-expanded", "false");
        component.classList.remove("vf-dropdown--open");
        currentPos = null;
      }
    });
    component.addEventListener("keyup", function(keyboardEvent) {
      // if user presses Enter key, open the dropdown
      if (keyboardEvent.keyCode === 13) {
        component.classList.toggle("vf-dropdown--open");
        if (component.getAttribute("aria-expanded") === "false") {
          component.setAttribute("aria-expanded", "true");
        } else {
          component.setAttribute("aria-expanded", "false");
        }
        currentPos = -1;
        innerLabel.setAttribute("tabindex", "-1");
      }
      let valueToAdd = 0;
      if (currentPos !== null && isUpOrDownKey(keyboardEvent)) {
        switch(keyboardEvent.key) {
          case "ArrowUp":
            if (currentPos > 0) {
              valueToAdd = -1;
            }
            break;
          case "ArrowDown":
            if (currentPos !== numOfLinks - 1) {
              valueToAdd = 1;
            }
            break;
          default:
            break;
        }
        currentPos += valueToAdd;
        links[currentPos].focus();
      }
    });

    component.addEventListener("click", function() {
      component.classList.toggle("vf-dropdown--open");
    });
  }
}
