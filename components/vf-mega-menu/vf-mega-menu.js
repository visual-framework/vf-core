// vf-mega-menu

// Don't need JS? Then feel free to delete this file.

/*
 * A note on the Visual Framework and JavaScript:
 * The VF is primarily a CSS framework so we've included only a minimal amount
 * of JS in components and it's fully optional (just remove the JavaScript selectors
 * i.e. `data-vf-js-tabs`). So if you'd rather use Angular or Bootstrap for your
 * tabs, the Visual Framework won't get in the way.
 *
 * When querying the DOM for elements that should be acted on:
 * 🚫 Don't: const tabs = document.querySelectorAll('.vf-tabs');
 * ✅ Do:    const tabs = document.querySelectorAll('[data-vf-js-tabs]');
 *
 * This allows users who would prefer not to have this JS engage on an element
 * to drop `data-vf-js-component` and still maintain CSS styling.
 */

// Uncomment this boilerplate
// // if you need to import any other components' JS to use here
// import { vfOthercomponent } from vfImportPrefix + '../vf-other-component/vf-other-component';
//

function initMegaMenu(megaMenuComponent) {
  //add activated class to this mega menu. This will help us differentiate when menu is processed with JS and when its not.
  megaMenuComponent.classList.add("vf-mega-menu__activated");

  let previousMenuLinkComponent, previousExpandedSectionComponent;

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  megaMenuComponent.querySelectorAll("[data-vf-js-mega-menu-section-id]").forEach(item => {
    item.addEventListener('click', event => {
      // For now we do not show the mega menu on mobile.
      // We still need to decide on approach for mobile support.
      if (getWidth() > 768) {
        event.preventDefault();
        event.vfMegaMenuLink = true;
        const { target: linkComponent } = event;
        const newReferences = handleMenuClick(
          linkComponent,
          previousMenuLinkComponent,
          previousExpandedSectionComponent
        );
        previousMenuLinkComponent = newReferences?.previousMenuLinkComponent;
        previousExpandedSectionComponent =
          newReferences?.previousExpandedSectionComponent;
      } else {
        console.warn(`vf-mega-menu: No mega menu shown. Mega menu is currently alpha and not supported on small screen sizes. Your screens size is ${getWidth()}`);
      }
      // console.log({ linkComponent });
      // console.log({ previousMenuLinkComponent });
      // const associatedSection = linkComponent.getAttribute(
      //   "data-vf-js-mega-menu-section-id"
      // );
    });
  });

}




function handleMenuClick(
  menuItemComponent,
  previousMenuLinkComponent,
  previousExpandedSectionComponent
) {
  // console.log("expand / collapse");
  // debugger;
  const sectionAttribute = menuItemComponent.getAttribute(
    "data-vf-js-mega-menu-section-id"
  );
  const section = document.querySelector(
    `[data-vf-js-mega-menu-section="${sectionAttribute}"]`
  );
  // console.log("section", section, sectionAttribute);

  if (!section) {
    return;
  }

  // Capture clicks on things other than mega menu elements
  // https://www.blustemy.io/detecting-a-click-outside-an-element-in-javascript/
  document.addEventListener("click", (evt) => {
    let targetElement = evt.target; // clicked element
    do {
      if (targetElement == section || evt.vfMegaMenuLink == true) {
        // This is a click inside. Do nothing, just return.
        // console.log("Clicked inside!")
        return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    // console.log("Clicked outside!")
    if (section.getAttribute("aria-hidden") === "false") {
      // console.log("hiding!")
      section.setAttribute("aria-hidden", "true");
    }
  });

  //0. if section is visible, just hide it
  if (section.getAttribute("aria-hidden") === "false") {
    section.setAttribute("aria-hidden", "true");
    menuItemComponent.classList.remove("is-expanded");
    return;
  }

  //1. section is hidden. Hide all sections
  if (previousExpandedSectionComponent) {
    previousExpandedSectionComponent.setAttribute("aria-hidden", "true");
  }

  //2. remove highlight from previous link
  if (previousMenuLinkComponent) {
    previousMenuLinkComponent.classList.remove("is-expanded");
  }

  //3. show new section and add class to new link
  section.setAttribute("aria-hidden", "false");
  menuItemComponent.classList.add("is-expanded");

  //4. return new link and section components to be stored as previous
  return {
    previousMenuLinkComponent: menuItemComponent,
    previousExpandedSectionComponent: section
  };
}

// function createMenuSectionMap(megaMenuComponent) {
//   const allMenuComponents = megaMenuComponent.querySelectorAll(
//     "[data-vf-js-mega-menu-section-id]"
//   );

//   const menuSectionsMap = new Map();
//   allMenuComponents.forEach((component) => {
//     const sectionAttribute = component.getAttribute(
//       "data-vf-js-mega-menu-section-id"
//     );
//     const section = megaMenuComponent.querySelector(
//       `[data-vf-js-mega-menu-section="${sectionAttribute}"]`
//     );
//     menuSectionsMap.set(component, section);
//   });
//   return menuSectionsMap;
// }

 /**
  * The global function for this component
  * @example vfMegaMenu(firstPassedVar)
  * @param {string} [firstPassedVar]  - An option to be passed
  */
function vfMegaMenu(firstPassedVar) {
  firstPassedVar = firstPassedVar || 'defaultVal';

  const allMegaMenuComponents = document.querySelectorAll("[data-vf-js-mega-menu]") || [];

  //for each mega-menu
  allMegaMenuComponents.forEach(initMegaMenu);
}

// // If you need to invoke the component by default
// vfMegaMenu();

// By default your component should be usable with js imports
export { vfMegaMenu };

// You should also import it at ./components/vf-component-rollup/scripts.js
// import { vfMegaMenu } from 'vf-mega-menu/vf-mega-menu';
// Or import directly
// import { vfMegaMenu } from '../components/raw/vf-mega-menu/vf-mega-menu.js';
// And, if needed, invoke it
// vfMegaMenu();

