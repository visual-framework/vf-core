// vf-location-nearest

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

// // if you need to import any other components' JS to use here
// import { vfOthercomponent } from 'vf-other-component/vf-other-component';

/**
 * Utility method to invalidate prior check.
  * @example vfLocationNearest('load')
  * @param {string} [type] - 'load' or 'unload' to set or unset
 */
function vfLocationNearestIndicate(type) {
  var el = document.querySelector('body');
  if (type == 'unload') {
    el.setAttribute('data-vf-location-nearest-loaded', 'false');
  } else if (type == 'load') {
    el.setAttribute('data-vf-location-nearest-loaded', 'true');
    vfLocationNearestDomActions();
  }
}

/**
 * Use the browser location API to try to atuodetct location.
 * @example vfLocationNearestDetect(locationsList)
 * @param {object} [locationsList] - An object of locations
 */
function vfLocationNearestDetect(locationsList) {
  // Via: https://developers.google.com/web/fundamentals/native-hardware/user-location#dont_keep_the_user_waiting_set_a_timeout
  var startPos;
  var geoOptions = {
    enableHighAccuracy: false,
    timeout: 10 * 1000
  }

  var geoSuccess = function(position) {
    startPos = position;
    vfLocationNearestResolve(locationsList, startPos.coords);
    // document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    // document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  var geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
    // if no match return false
    vfLocationNearestResolve(locationsList, false);
  };

  // Bootstrap browserapi
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
}

/**
 * Receive a location and process it against a user location if any.
 * @example vfLocationNearestResolve(locationsList, userLocation)
 * @param {object} [locationsList] - An object of locations
 * @param {object} [userLocation] - An obhject with .latitude and .lognitude
 */
function vfLocationNearestResolve(locationsList, userLocation) {
  console.log(locationsList, userLocation);

  console.log('user at',userLocation.latitude + ", " + userLocation.longitude)

  if (userLocation == false) {
    console.warn('vfLocationNearest', 'No user location detected, will use default');
    vfLocationNearestSave(locationsList['default'],'default')
  } else {
    // diameter matching
    console.warn('vfLocationNearest', 'diameter matching to be done');
    console.warn('vfLocationNearest', 'using default');
    // use default for now
    vfLocationNearestSave(locationsList['default'],'default')
  }
}

/**
 * Receive a resolved location and assign it to the DOM
 * @example vfLocationNearestSave(locationsList, userLocation)
 * @param {object} [location] - An object of lat,lon + name
 * @param {string} [locationId] - The ID
 */
function vfLocationNearestSave(location, locationId) {
  console.log('vfLocationNearestSave location',location,locationId)

  // assign to the body
  var el = document.querySelector('body');
  el.setAttribute('data-vf-location-nearest-location', locationId);
  el.setAttribute('data-vf-location-nearest-name', location.name);
  // We shouldn't need this level of detail, ohter request should the `location`
  // el.setAttribute('data-vf-location-nearest-latlon', location.latlon);

  // indicate we've loaded
  vfLocationNearestIndicate('load');
}

/**
  * Observe an element for changes to specify a manual location
  * @param {object} [locationsList] - An object of locations
  * @param {object} [scope] - the html scope to process, optional, defaults to `document`
  * @example vfLocationNearestOverridePopulate(locationsList, document.vfLocationNearestDomActions('.vf-component__container')[0]);
  */
 function vfLocationNearestOverridePopulate(locationsList, scope) {
  var scope = scope || document;

  console.log('todo: populate a dropdown with options, seperate function')
}

/**
  * Observe an element for changes to specify a manual location
  * @param {object} [scope] - the html scope to process, optional, defaults to `document`
  * @example vfLocationNearestOverrideActivate(locationsList, document.vfLocationNearestDomActions('.vf-component__container')[0]);
  */
function vfLocationNearestOverrideActivate(scope) {
  var scope = scope || document;

  console.log('todo: observchange')
}

/**
  * With attributes saved to the dom, we can take further action
  * <body data-vf-location-nearest-loaded="true"
  *   data-vf-location-nearest-location="default"
  *   data-vf-location-nearest-name="Heidelberg"
  * @param {object} [scope] - the html scope to process, optional, defaults to `document`
  * @example vfLocationNearestDomActions(document.vfLocationNearestDomActions('.vf-component__container')[0]);
  */
function vfLocationNearestDomActions(scope) {
  var scope = scope || document;
  // Get relevant elements and collections

  // push the active location to the dom
  function assignName() {
    const locationName = scope.querySelectorAll('[data-vf-js-location-nearest-name]');
    if (!locationName) {
      // exit: container not found
      return;
    }
    if (locationName.length == 0) {
      // exit: either tabs or tabbed content not found
      return;
    }
    console.log('todo: push the active location to the dom')
  }

  // add is-active to any elements/components
  function activateElements() {
    console.log('todo: add is-active to any elements/components')
  }

  assignName();
  activateElements()
}

/**
  * The global function for this component
  * @example vfLocationNearest(locationsList)
  * @param {object} [locationsList] - An object of locations
  */
 function vfLocationNearest(locationsList) {
  locationsList = locationsList || { default: {
    name: "Heidelberg",
    latlon: "49.4076, 8.6907"
  }};
  // console.log('vfLocationNearest locationsList',locationsList)

  // unset any prior check
  vfLocationNearestIndicate('unload');

  // get the current users location
  vfLocationNearestDetect(locationsList);

  // enable a manual override widget
  vfLocationNearestOverridePopulate(locationsList);
  vfLocationNearestOverrideActivate();
}

// If you need to invoke the component by default
// vfLocationNearest();

// By default your component should be usable with js imports
export { vfLocationNearest };

// You should also import it at ./components/vf-component-rollup/scripts.js
// import { vfLocationNearest } from 'vf-location-nearest/vf-location-nearest';
// Or import directly
// import { vfLocationNearest } from '../components/raw/vf-location-nearest/vf-location-nearest.js';
// And, if needed, invoke it
// vfLocationNearest();

