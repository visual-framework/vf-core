// vf-analytics-google

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
 * Utility method to invalidate prior GA check.
 */
function vfGaIndicateUnloaded() {
  var el = document.querySelector('body');
  el.setAttribute('data-vf-google-analytics-loaded', 'false');
}

/**
 * We poll the document until we find GA has loaded, or we've tried a few times.
 * Port of https://github.com/ebiwd/EBI-Framework/blob/v1.3/js/foundationExtendEBI.js#L4
 * @param {number} [numberOfGaChecksLimit=2]
 * @param {number} [checkTimeout=900]
 */
function vfGaIndicateLoaded(numberOfGaChecksLimit,numberOfGaChecks,checkTimeout) {
  var numberOfGaChecks = numberOfGaChecks || 0;
  var numberOfGaChecksLimit = numberOfGaChecksLimit || 5;
  var checkTimeout = checkTimeout || 900;
  var el = document.querySelector('body');

  // debug
  // console.log('checking',numberOfGaChecks,numberOfGaChecksLimit)

  numberOfGaChecks++;

  // If successful we set `data-vf-google-analytics-loaded` on the `body` to true.
  try {
    // unset our check
    vfGaIndicateUnloaded();

    if (ga && ga.loaded) {
      el.setAttribute('data-vf-google-analytics-loaded', 'true');
      vfGaInit();
    } else {
      if (numberOfGaChecks <= numberOfGaChecksLimit) {
        setTimeout(function () {
          vfGaIndicateLoaded(numberOfGaChecksLimit,numberOfGaChecks,checkTimeout);
        }, 900); // give a second check if GA was slow to load
      }
    }
  } catch (err) {
    if (numberOfGaChecks <= numberOfGaChecksLimit) {
      setTimeout(function () {
        vfGaIndicateLoaded(numberOfGaChecksLimit,numberOfGaChecks,checkTimeout);
      }, 900); // give a second check if GA was slow to load
    }
  }
  
}

/**
 * Get Meta Tag Content
 * via https://jonlabelle.com/snippets/view/javascript/get-meta-tag-content
 *
 * @param {string} metaName The meta tag name.
 * @return {string} The meta tag content value, or empty string if not found.
 */
function vfGetMeta(metaName) {
  var metas = document.getElementsByTagName('meta');
  var re = new RegExp('\\b' + metaName + '\\b', 'i');
  var i = 0;
  var mLength = metas.length;

  for (i; i < mLength; i++) {
      if (re.test(metas[i].getAttribute('name'))) {
          return metas[i].getAttribute('content');
      }
  }

  return '';
}

/**
 * Hooks into common analytics tracking
 */
function vfGaInit() {

  // Need help 
  // How to add dimension to your property
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/custom-dims-mets
  // https://support.google.com/analytics/answer/2709829?hl=en

  // standard google analytics bootstrap
  // @todo: add conditional
  ga('set', 'anonymizeIp', true);

  // lookup metadata  <meta name="vf:page-type" content="category;pageTypeHere"> 
  // Pass your GA dimension with a `;` divider
  var pageType = vfGetMeta('vf:page-type');
  if (pageType.length > 0) {
    var toLog = pageType.split(';');
    var dimension = toLog[1];
    var pageTypeName = toLog[0];
    ga('set', dimension, pageTypeName);
  }
  
  // standard google analytics bootstrap
  // @todo: add conditional
  ga('send', 'pageview');
  
  // If we want to send metrics in one go
  // ga('set', {
  //   'dimension5': 'custom dimension data'
  //   // 'metric5': 'custom metric data'
  // });
}

// You should also import it at ./components/vf-core/scripts.js
// import { vfcomponentName } from '../components/raw/vf-analytics-google/vf-analytics-google.js';
// And, if needed, invoke it
// vfGaIndicateLoaded();

// By default your component should be usable with js imports
export { vfGaIndicateLoaded };
