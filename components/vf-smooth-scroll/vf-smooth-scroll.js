// vf-smooth-scroll

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
//  /**
//   * The global function for this component
//   * @example vfSmoothScroll(firstPassedVar)
//   * @param {string} [firstPassedVar]  - An option to be passed
//   */
// function vfSmoothScroll(firstPassedVar) {
//   firstPassedVar = firstPassedVar || 'defaultVal';
//
// }
//
// // If you need to invoke the component by default
// vfSmoothScroll();
//
// // By default your component should be usable with js imports
// export { vfSmoothScroll };
//
// // You should also import it at ./components/vf-component-rollup/scripts.js
// // import { vfSmoothScroll } from 'vf-smooth-scroll/vf-smooth-scroll';
// // Or import directly
// // import { vfSmoothScroll } from '../components/raw/vf-smooth-scroll/vf-smooth-scroll.js';
// // And, if needed, invoke it
// // vfSmoothScroll();

