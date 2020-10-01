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
 * Track the last time an event was sent (don't double send)
 * @param {Date} lastGaEventTime
 */
var lastGaEventTime = Date.now();

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

  vfGaLinkTrackingInit();
}

/**
 * Track page links as events
 */
function vfGaLinkTrackingInit() {
  document.body.addEventListener("mousedown", function (evt) {
    // send GA events if GA closest area is detected
    let closestContainer = getClosestGa(evt.target, '[data-vf-google-analytics-region]');
    if (closestContainer) {
      vfGaTrackInteraction(evt.target);
    } else {
      var from = findParent('a',evt.target || evt.srcElement);
      if (from) {
       /* it's a link, actions here */
       // console.log('clicked from findParent: ',from);
       vfGaTrackInteraction(from);
      }
    }
  }, false );

  //find first parent with tagName [tagname]
  function findParent(tagname,el){
    while (el){
      if ((el.nodeName || el.tagName).toLowerCase()===tagname.toLowerCase()){
        return el;
      }
      el = el.parentNode;
    }
    return null;
  }
}

/*
 * Find closest element that has GA attribute
 * @returns {el} the closest element with GA attribute
 */
function getClosestGa(elem, selector) {
  // Element.matches() polyfill
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

	// Get the closest matching element
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
  }
	return null;
};

/**
 * Utility method to get the last in an array
 * @returns {var} the last item in the array
 * @example linkName = actedOnItem.src.split('/').vfGaLinkLast();
 */
if (!Array.prototype.vfGaLinkLast){
  Array.prototype.vfGaLinkLast = function(){
    return this[this.length - 1];
  };
};

// Catch any use cases that may have been existing
// To be removed in 2.0.0
function analyticsTrackInteraction(actedOnItem, customEventName) {
  console.warn('vfGa','As of 1.0.0-rc.3 analyticsTrackInteraction() is now vfGaTrackInteraction(). You function call is being proxied. You should update your code.');
  vfGaTrackInteraction(actedOnItem, customEventName);
}

/**
 * Analytics tracking
 * ---
 * This code tracks the user's clicks in various parts of the site and logs them as GA events.
 *
 * Dev note:
 * add class verbose-analytics to your body for a readout to console on clicks.
 *
 * @param {element} actedOnItem
 * @param {string} customEventName Event action
 * @example
 * jQuery(".analytics-content-footer").on('mousedown', 'a, button', function(e) {
 *   vfGaTrackInteraction(e.target,'Content footer');
 * });
 */
function vfGaTrackInteraction(actedOnItem, customEventName) {
  var customEventName = customEventName || []; // you can pass some custom text as a 3rd param
  let linkName;

  if (customEventName.length > 0) {
    linkName = customEventName;
  } else { // then derive a value

    // Fix for when tags have undefined .innerText
    if (typeof actedOnItem.innerText === 'undefined') {
      actedOnItem.innerText = '';
    }

    linkName = actedOnItem.innerText;
    // console.log('linkName',linkName);

    // if there's no text, it's probably and image
    if (linkName.length == 0 && actedOnItem.hasAttribute('src')) linkName = actedOnItem.src.split('/').vfGaLinkLast();
    if (linkName.length == 0 && actedOnItem.value) linkName = actedOnItem.value;

    // is there an inner image?
    if (linkName.length == 0 && actedOnItem.getElementsByTagName('img')) {
      if (actedOnItem.getElementsByTagName('img')[0]) {
        if (actedOnItem.getElementsByTagName('img')[0].hasAttribute('src')) {
          linkName = actedOnItem.src.split('/').vfGaLinkLast();
        }
      }
    }

    // fallback to an href value
    if (linkName.length == 0 && actedOnItem.href) linkName = actedOnItem.href;

    // special things for gloabl search box
    // if (parentContainer == 'Global search') {
    //   linkName = 'query: ' + jQuery('#global-search input#query').value;
    // }
  }

  // Get closest parent container
  // Track the region of the link clicked (global nav, masthead, hero, main content, footer, etc)
  //data-vf-google-analytics-region="main-content-area-OR-SOME-OTHER-NAME"
  let parentContainer = actedOnItem.closest("[data-vf-google-analytics-region]");
  if (parentContainer) {
    parentContainer = parentContainer.dataset.vfGoogleAnalyticsRegion;
  } else {
    parentContainer = 'No container specified';
  }

  // send to GA
  // Only if more than 100ms has past since last click.
  // Due to our structure, we fire multiple events, so we only send to GA the most specific event resolution
  if ((Date.now() - lastGaEventTime) > 150) {
    // track link name and region
    ga && ga('send', 'event', 'UI', 'UI Element / ' + parentContainer, linkName);

    // Track file type (PDF, DOC, etc) or if mailto
    // adapted from https://www.blastanalytics.com/blog/how-to-track-downloads-in-google-analytics
    var filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3|txt|fasta)$/i;
    var baseHref = '';
    var href = actedOnItem.href;
    if (href && href.match(/^mailto\:/i)) {
      var mailLink = href.replace(/^mailto\:/i, '');
      ga && ga('send', 'event', 'Email', 'Region / ' + parentContainer, mailLink);
      // Log email event
      vfGaLogMessage("Email", "Region / " + parentContainer, mailLink, lastGaEventTime, actedOnItem);
    }
    if (href && href.match(filetypes)) {
      var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
      var filePath = href;
      ga && ga('send', 'event', 'Download', 'Type / ' + extension + ' / ' + parentContainer, filePath);
      // Log Download event
      vfGaLogMessage("Download", "Type / " + extension + " / " + parentContainer, filePath, lastGaEventTime, actedOnItem);
    }

    // note that we've stored an event(s)
    lastGaEventTime = Date.now();
    // Default log the event.
    vfGaLogMessage("UI", "UI Element / " + parentContainer, linkName, lastGaEventTime, actedOnItem);
  }
}

/**
 * Helper function to log debug console messages.
 *
 * @param {string} eventCategory
 * @param {string} eventAction
 * @param {string} eventLabel
 * @param {string} lastGaEventTime
 * @param {element} actedOnItem
 */
function vfGaLogMessage(eventCategory, eventAction, eventLabel, lastGaEventTime, actedOnItem) {
  // conditional logging
  let conditionalLoggingCheck = document.querySelector("body");
  // debug: always turn on verbose analytics
  // conditionalLoggingCheck.setAttribute('data-vf-google-analytics-verbose', 'true');
  if (conditionalLoggingCheck.dataset.vfGoogleAnalyticsVerbose) {
    if (conditionalLoggingCheck.dataset.vfGoogleAnalyticsVerbose == "true") {
      console.log("%c Verbose analytics on ", "color: #FFF; background: #111; font-size: .75rem;");
      console.log("clicked on: %o ", actedOnItem);
      console.log("sent to GA: ", "event ->", eventCategory + " ->", eventAction + " ->", eventLabel, "; at: ", lastGaEventTime);
    }
  }
}

// You should also import it at ./components/vf-core/scripts.js
// import { vfcomponentName } from '../components/raw/vf-analytics-google/vf-analytics-google.js';
// And, if needed, invoke it
// vfGaIndicateLoaded();

// By default your component should be usable with js imports
export { vfGaIndicateLoaded };