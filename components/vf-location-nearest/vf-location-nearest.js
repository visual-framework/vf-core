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

  if (userLocation == false) {
    console.warn('vfLocationNearest', 'No user location detected, will use default')
  } else {
    // diameter matching
    console.warn('vfLocationNearest', 'diameter matching to be done')
  }
}

/**
  * The global function for this component
  * @example vfLocationNearest(locationsList)
  * @param {object} [locationsList] - An object of locations
  */
function vfLocationNearest(locationsList) {
  locationsList = locationsList || 'defaultVal';

  console.log('vfLocationNearest locationsList',locationsList)

  // unset any prior check
  vfLocationNearestIndicate('unload');

  // get the current users location
  vfLocationNearestDetect(locationsList);
  // let userLocation =
  // console.log('userLocation',userLocation)

  // other stuff

  // indicate we've loaded
  vfLocationNearestIndicate('load');
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

