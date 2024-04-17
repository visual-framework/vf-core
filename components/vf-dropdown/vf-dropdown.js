// vf-dropdown

/**
 * Function for JS scroll to top functionality
 * That must be executed exactly once
 * @example vfDropdown()
 */
export function vfDropdown() {
  const components = document.querySelectorAll("[data-vf-js-dropdown]");
  const ARROW_UP_KEY = 38;
  const ARROW_DOWN_KEY = 40;
  const SPACE_KEY = 32;
  const ENTER_KEY = 13;
  const TAB_KEY = 9;
  const ESCAPE_KEY = 27;
  function isNavigationKey(keyboardEvent) {
    // if keyboard key is Arrow Up or Arrow Down
    return (
      keyboardEvent.keyCode === ARROW_UP_KEY ||
      keyboardEvent.keyCode === ARROW_DOWN_KEY
    );
  }

  for (let component of components) {
    component.setAttribute("role", "menubar");
    const innerLabel = component.querySelector(".vf-dropdown__label-container");
    innerLabel.setAttribute("tabindex", "0");
    const links = component.querySelectorAll(".vf-dropdown__menu-container .vf-dropdown__menu-item-link");
    const numOfLinks = links.length;
    let currentPos = null;
    component.setAttribute("aria-expanded", "false");
    component.addEventListener("focusout", function(e) {
      // if dropdown loses focus to another element that aren't its own links
      // check for relatedTarget to avoid bug with Safari
      if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) {
        component.setAttribute("aria-expanded", "false");
        component.classList.remove("vf-dropdown--open");
        currentPos = null;
      }
    });
    // to being able to prevent scrolling when user navigates with the keyboard
    // this must be done in the keydown event
    component.addEventListener("keydown", function(keyboardEvent) {
      // when user navigates with arror up and down, prevent scrolling
      if (currentPos !== null && isNavigationKey(keyboardEvent)) {
        keyboardEvent.preventDefault();
      }
      // when user open dropdown with SPACE key, prevent scrolling
      if (keyboardEvent.keyCode === SPACE_KEY) {
        keyboardEvent.preventDefault();
      }
    });
    component.addEventListener("keyup", function(keyboardEvent) {
      // if user presses Enter or Space key, open the dropdown
      if (keyboardEvent.keyCode === ENTER_KEY || keyboardEvent.keyCode === SPACE_KEY) {
        component.classList.toggle("vf-dropdown--open");
        if (component.getAttribute("aria-expanded") === "false") {
          component.setAttribute("aria-expanded", "true");
        } else {
          component.setAttribute("aria-expanded", "false");
        }
        currentPos = -1;
      }
      let valueToAdd = 0;
      if (currentPos !== null && (isNavigationKey(keyboardEvent))) {
        switch(keyboardEvent.keyCode) {
        case ARROW_UP_KEY:
          if (currentPos > 0) {
            valueToAdd = -1;
          }
          break;
        case ARROW_DOWN_KEY:
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
      // Handle navigation with Tab key, must track position of the element that has
      // focus, to being able to navigate with both Tab and Arrow keys
      if (currentPos !== null && keyboardEvent.keyCode === TAB_KEY) {
        if (!keyboardEvent.shiftKey && currentPos !== numOfLinks - 1) {
          currentPos += 1;
        } else if (keyboardEvent.shiftKey && currentPos > 0) {
          currentPos -= 1;
        }
      }
      // If an user presses ESC key, close the dropdown
      if (currentPos !== null && keyboardEvent.keyCode === ESCAPE_KEY) {
        component.setAttribute("aria-expanded", "false");
        component.classList.remove("vf-dropdown--open");
        innerLabel.focus();
        currentPos = null;
      }
    });

    component.addEventListener("click", function() {
      component.classList.toggle("vf-dropdown--open");
    });
  }
}
