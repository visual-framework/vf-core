// vf-pagination

// Don't need JS?
// Feel free to delete this file.

/*
 * A note on the Visual Framework and JavaScript:
 * The VF is primairly a CSS framework so we've included only a minimal amount
 * of JS in components and it's fully optional (just remove the JavaScript selectors
 * i.e. `data-vf-js-tabs`). So if you'd rather use Angular or Bootstrap for your
 * tabs, the Visual Framework won't get in the way.
 *
 * When querying the DOM for elements that should be acted on:
 * 🚫 Don't: const tabs = document.querySelectorAll('.vf-tabs');
 * ✅ Do:    const tabs = document.querySelectorAll('[data-vf-js-tabs]');
 *
 * This allows users who would prefer not to have this JS engange on an element
 * to drop `data-vf-js-component` and still maintain CSS styling.
 */

 /**
  * The global function for this component
  * @example vfComponentName(firstPassedVar)
  * @param {string} [firstPassedVar]  - An option to be passed
  */
// function vfComponentName(firstPassedVar) {
//   firstPassedVar = firstPassedVar || 'defaultVal';
//
// }
//
// vfComponentName();
