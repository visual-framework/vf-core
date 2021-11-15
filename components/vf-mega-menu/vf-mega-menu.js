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

function initMegamenu(megamenuComponent) {
  //add activated class to this megamenu. This will help us differentiate when menu is processed with JS and when its not.
  megamenuComponent.classList.add("vf-megamenu__activated");

  const menuContainerComponent = megamenuComponent.querySelector(
    ".vf-megamenu__menu-container"
  );
  let previousMenuLinkComponent, previousExpandedSectionComponent;
  menuContainerComponent.addEventListener("click", function (event) {
    const { target: linkComponent } = event;
    console.log({ linkComponent });
    const associatedSection = linkComponent.getAttribute(
      "data-vf-js-megamenu-section-id"
    );
    if (associatedSection) {
      //do only if this link has associated section to expand/collapse
      event.preventDefault();

      console.log({ previousMenuLinkComponent });

      const newReferences = handleMenuClick(
        linkComponent,
        megamenuComponent,
        previousMenuLinkComponent,
        previousExpandedSectionComponent
      );
      previousMenuLinkComponent = newReferences?.previousMenuLinkComponent;
      previousExpandedSectionComponent =
        newReferences?.previousExpandedSectionComponent;
    }
  });
}

function handleMenuClick(
  menuItemComponent,
  megamenuComponent,
  previousMenuLinkComponent,
  previousExpandedSectionComponent
) {
  // console.log("expand / collapse");
  // debugger;
  const sectionAttribute = menuItemComponent.getAttribute(
    "data-vf-js-megamenu-section-id"
  );
  const section = megamenuComponent.querySelector(
    `[data-vf-js-megamenu-section="${sectionAttribute}"]`
  );
  console.log(section);

  if (!section) {
    return;
  }
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

// function createMenuSectionMap(megamenuComponent) {
//   const allMenuComponents = megamenuComponent.querySelectorAll(
//     "[data-vf-js-megamenu-section-id]"
//   );

//   const menuSectionsMap = new Map();
//   allMenuComponents.forEach((component) => {
//     const sectionAttribute = component.getAttribute(
//       "data-vf-js-megamenu-section-id"
//     );
//     const section = megamenuComponent.querySelector(
//       `[data-vf-js-megamenu-section="${sectionAttribute}"]`
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

  const allMegamenumegamenuComponents =
  document.querySelectorAll("[data-vf-js-megamenu]") || [];

  //for each megamenu
  allMegamenumegamenuComponents.forEach(initMegamenu);
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

