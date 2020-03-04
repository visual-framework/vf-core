// embl-notifications

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
 * This allows users who would prefer not to have this JS engange on an element
 * to drop `data-vf-js-component` and still maintain CSS styling.
 */

// if you need to import any other components' JS to use here
import { vfBanner } from 'vf-banner/vf-banner';

 /**
  * The global function for this component
  * @example emblNotifications(firstPassedVar)
  * @param {string} [firstPassedVar]  - An option to be passed
  */
function emblNotifications(firstPassedVar) {
  firstPassedVar = firstPassedVar || 'defaultVal';

  // @todo
  // 1. Fetch json from contentHub
  // 2. If success
  //   - get current page url
  //   - compare to `notification_ulrs`
  //     We can steal code from the EBI VF https://github.com/ebiwd/EBI-Framework/blob/v1.3/js/ebi-global-includes/script/4_ebiFrameworkContent.js#L391-L475
  // 3. If matching URL
  //   - invoke vf-banner
  //   - using options from `notification_position` `notification_presentation` `body` `title` `notification_link`

  // Possible features not currently planned:
  // - Only show if a wrapping element has data-vf-js-embl-notifications`

}

// By default your component should be usable with js imports
export { emblNotifications };

// Add this to your ./components/vf-component-rollup/scripts.js
// import { vfEmblNotification } from '../components/raw/embl-notifications/embl-notifications.js';
// And invoke it
// emblNotifications();

