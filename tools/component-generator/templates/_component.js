// <%= componentName %>

// Don't need JS? Then feel free to delete this file.

/*
 * A note on the Visual Framework and JavaScript:
 * The VF is primairly a CSS framework so we've included only a minimal amount
 * of JS in patterns and it's fully optional (just remove the JavaScript selectors
 * i.e. `data-vf-js-tabs`). So if you'd rather use Angular or Bootstrap for your
 * tabs, the Visual Framework won't get in the way.
 *
 * When querying the DOM for elements that should be acted on:
 * 🚫 Don't: const tabs = document.querySelectorAll('.vf-tabs');
 * ✅ Do:    const tabs = document.querySelectorAll('[data-vf-js-tabs]');
 *
 * This allows users who would prefer not to have this JS engange on an element
 * to drop `data-vf-js-PATTERN` and still maintain CSS styling.
 */

// Uncomment this boilerplate
// // if you need to import any other patterns' JS to use here
// import { vfOtherPattern } from 'vf-other-pattern/vf-other-pattern';
//
//  /**
//   * The global function for this pattern
//   * @example vfPatternName(firstPassedVar)
//   * @param {string} [firstPassedVar]  - An option to be passed
//   */
// function vfPatternName(firstPassedVar) {
//   firstPassedVar = firstPassedVar || 'defaultVal';
//
// }
//
// // If you need to invoke the pattern by default
// vfPatternName();
//
// // By default your pattern should be usable with js imports
// export { vfPatternName };
//
// // You should also import it at ./components/vf-core/scripts.js
// // import { vfPatternName } from '../components/raw/vf-pattern/vf-pattern.js';
// // And, if needed, invoke it
// // vfPatternName();
