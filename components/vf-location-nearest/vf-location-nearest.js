// vf-location-nearest

/**
 * Utility method to invalidate prior check.
  * @example vfLocationNearest('load')
  * @param {string} [type] - 'load' or 'unload' to set or unset
 */
function vfLocationNearestIndicate(type) {
  var el = document.querySelector("body");
  if (type == "unload") {
    el.setAttribute("data-vf-location-nearest-loaded", "false");
  } else if (type == "load") {
    el.setAttribute("data-vf-location-nearest-loaded", "true");
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
    timeout: 4 * 1000
  };

  var geoSuccess = function(position) {
    startPos = position;
    vfLocationNearestResolve(locationsList, startPos.coords);
  };
  var geoError = function(error) {
    console.warn("vfLocationNearest", "Geolocation error code: " + error.code);
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
 * @param {object} [userLocation] - An object with .latitude and .longitude
 */
function vfLocationNearestResolve(locationsList, userLocation) {
  // console.log(locationsList, userLocation);
  // console.log("user at",userLocation.latitude + ", " + userLocation.longitude);

  // Determine which location is closest using circles
  // https://stackoverflow.com/questions/21279559/geolocation-closest-locationlat-long-from-my-position/21297385#21297385
  function calculateNearestCity(latitude, longitude) {

    // Convert Degrees to Radians
    function Deg2Rad(deg) {
      return deg * Math.PI / 180;
    }
    function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
      lat1 = Deg2Rad(lat1);
      lat2 = Deg2Rad(lat2);
      lon1 = Deg2Rad(lon1);
      lon2 = Deg2Rad(lon2);
      var R = 6371; // km
      var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
      var y = (lat2 - lat1);
      var d = Math.sqrt(x * x + y * y) * R;
      return d;
    }

    var minDif = 99999;
    var closest = locationsList.default;

    // loop through each location, matching a close city then the next closest and so on
    for (const key in locationsList) {
      /* eslint-disable no-prototype-builtins */
      if (locationsList.hasOwnProperty(key)) {
      /* eslint-enable no-prototype-builtins */
        if (key != "default") {
          const evalutedLocation = locationsList[key];
          var dif = PythagorasEquirectangular(latitude, longitude, evalutedLocation.latlon.split(", ")[0], evalutedLocation.latlon.split(", ")[1]);
          if (dif < minDif) {
            closest = evalutedLocation;
            closest.id = key;
            minDif = dif;
          }
        }
      }
    }

    return closest;
  }


  if (userLocation == false) {
    // if no match, use the default location
    console.warn("vfLocationNearest", "No user location detected, will use default");
    vfLocationNearestSave(locationsList["default"].name, "default");
  } else {
    // geo diameter matching
    let closestCity  = calculateNearestCity(userLocation.latitude, userLocation.longitude);
    vfLocationNearestSave(closestCity.name, closestCity.id);
  }
}

/**
 * Receive a resolved location and assign it to the DOM
 * @example vfLocationNearestSave(locationsList, userLocation)
 * @param {object} [locationName] - A user-facing string
 * @param {string} [locationId] - The ID
 */
function vfLocationNearestSave(locationName, locationId) {
  // console.log('vfLocationNearestSave location',locationName,locationId)

  // assign to the body
  var el = document.querySelector("body");
  el.setAttribute("data-vf-location-nearest-location", locationId);
  el.setAttribute("data-vf-location-nearest-name", locationName);

  // indicate we've loaded
  vfLocationNearestIndicate("load");
}

/**
  * Observe an element for changes to specify a manual location
  * This may support a "type" but for now it's only a select list
  * @param {object} [locationsList] - An object of locations
  * @param {object} [scope] - the html scope to process, optional, defaults to `document`
  * @example vfLocationNearestOverridePopulate(locationsList, document.vfLocationNearestDomActions('.vf-component__container')[0]);
  */
function vfLocationNearestOverridePopulate(locationsList, scope) {
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  /* eslint-enable no-redeclare */

  const locationWidget = scope.querySelectorAll("[data-vf-js-location-nearest-override-widget]");
  if (!locationWidget) {
    // exit: container not found
    return;
  }
  if (locationWidget.length == 0) {
    // exit: content not found
    return;
  }

  let widget = "<label class=\"vf-form__label\" for=\"vf-form__select\"></label>"+
               "<select class=\"vf-form__select\" id=\"vf-form__select\">";

  // Create the markup for a dropdown
  for (const key in locationsList) {
    /* eslint-disable no-prototype-builtins */
    if (locationsList.hasOwnProperty(key)) {
    /* eslint-enable no-prototype-builtins */
      // const element = locationsList[key];
      widget = widget + `<option value="${key}">${locationsList[key].name}</option>`;
    }
  }
  widget = widget + "</select>";

  // assign values to widget
  locationWidget[0].innerHTML = widget;
}

/**
  * Observe an element for changes to specify a manual location
  * @param {object} [scope] - the html scope to process, optional, defaults to `document`
  * @example vfLocationNearestOverrideActivate(locationsList, document.vfLocationNearestDomActions('.vf-component__container')[0]);
  */
function vfLocationNearestOverrideActivate(scope) {
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  /* eslint-enable no-redeclare */

  const overrideElement = scope.querySelectorAll("[data-vf-js-location-nearest-override-widget]");
  if (!overrideElement) {
    // exit: container not found
    return;
  }
  if (overrideElement.length == 0) {
    // exit: content not found
    return;
  }

  overrideElement[0].addEventListener("change", function(e) {
    let activeItem = e.target;
    // console.log('You selected: ', activeItem.options[activeItem.target.selectedIndex].text);
    vfLocationNearestSave(activeItem.options[activeItem.selectedIndex].text, activeItem.value);
  });
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
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  /* eslint-enable no-redeclare */

  // Get items from dom
  var el = document.querySelector("body");
  var locationId = el.getAttribute("data-vf-location-nearest-location");
  var locationName = el.getAttribute("data-vf-location-nearest-name");

  // push the active location to the dom
  function assignName() {
    const locationNameHolder = scope.querySelectorAll("[data-vf-js-location-nearest-name]");
    if (!locationNameHolder) {
      // exit: container not found
      return;
    }
    if (locationNameHolder.length == 0) {
      // exit: content not found
      return;
    }
    // console.log('assignName','pushing the active location to the dom')
    locationNameHolder[0].innerHTML = locationName;
  }

  // simple activation of any elements/components through simple click simulation
  function activateElements() {
    const locationActivationTargets = scope.querySelectorAll("[data-vf-js-location-nearest-activation-target]");
    if (!locationActivationTargets) {
      // exit: container not found
      return;
    }
    if (locationActivationTargets.length == 0) {
      // exit: content not found
      return;
    }

    locationActivationTargets.forEach(element => {
      // console.log(element.getAttribute('data-vf-js-location-nearest-activation-target'));
      if (element.getAttribute("data-vf-js-location-nearest-activation-target") == locationId) {
        element.click();
      }
    });
  }

  assignName();
  activateElements();
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
  vfLocationNearestIndicate("unload");

  // Insert a widget of selectable locations
  vfLocationNearestOverridePopulate(locationsList);

  // get the current users location
  vfLocationNearestDetect(locationsList);

  // enable a manual override widget
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
