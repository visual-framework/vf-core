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
  * @example emblNotificationsInject(notification)
  * @param {object} [notification] - An object to be show on a page
  */
 function emblNotificationsInject(notification) {

  console.log('emblNotifications, showing:', notification);
    
}

/**
  * The global function for this component
  * @example emblNotifications(currentHost, currentPath)
  * @param {string} [currentHost] - a host url www.embl.org
  * @param {string} [currentPath] - a path /people/name
  */
function emblNotifications(currentHost, currentPath) {
  currentHost = currentHost || window.location.hostname;
  currentPath = currentPath || window.location.pathname;

  console.log('emblNotifications','Checking for notifcaitons.');

  // don't treat `wwwdev` as distinct from `www`
  currentHost = currentHost.replace(/wwwdev/g, "www");

  console.log('emblNotifications, Current url info:', currentHost + "," + currentPath);

  // Process each message against a URLs
  function matchNotification(message, targetUrl) {
    console.log('emblNotifications, matching:', currentHost+currentPath + " against " + targetUrl);

    // @todo 
    // compare against each field_notification_urls

    // if the page has a path, try to make matches
    // don't try to much no path or '/'
    if (currentPath.length > 1) {
      // Is there an exact match
      // console.log('emblNotifications, matching:', currentHost+currentPath);
      // emblNotificationsInject(messages[currentHost+currentPath]);
      // emblNotificationsInject(messages[currentHost+currentPath + '/']);

      // Handle wildcard matches like `/about/*`
      var currentPathArray = currentPath.split('/');

      // construct a list of possible paths to match
      // /style-lab/frag1/frag2 =
      // - /style-lab/frag1/frag2
      // - /style-lab/frag1
      // - /style-lab
      var pathsToMatch = [currentHost + currentPathArray[0]];
      for (var i = 1; i < currentPathArray.length; i++) {
        var tempPath = pathsToMatch[i - 1];
        pathsToMatch.push(tempPath + '/' + currentPathArray[i]);
      }

      // console.log(pathsToMatch);
      for (var i = 0; i < pathsToMatch.length; i++) {
        // console.log('emblNotifications, matching:', pathsToMatch[i]+'*');
        // we only match partial paths if they end in *
        // emblNotificationsInject(messages[pathsToMatch[i] + '*']);
        // emblNotificationsInject(messages[pathsToMatch[i] + '/*']);
      }
    } else {
      // no current path means we're on a root domain
      // `https://www.ebi.ac.uk` should match `www.ebi.ac.uk` and `www.ebi.ac.uk/` and `www.ebi.ac.uk/*`
      // console.log('emblNotifications, matching:', currentHost);
      // emblNotificationsInject(messages[currentHost]);
      // emblNotificationsInject(messages[currentHost + '/']);
      // emblNotificationsInject(messages[currentHost + '/*']);
    }
  }

  // Process each message, and its url fragmenets
  function processNotifications(messages) {
    // console.log('emblNotifications', messages);

    // Process each message
    for (let index = 0; index < messages.length; index++) {
      let currentMessage = messages[index];

      // Process the URLs for each path in a message
      let currentUrls = currentMessage.field_notification_urls.split(',');
      for (let indexUrls = 0; indexUrls < currentUrls.length; indexUrls++) {
        let url = currentUrls[indexUrls].trim();
        matchNotification(currentMessage, url); // pass the notification and active url to compare       
      }
    }
  }

  // Utility to fetch a file, process the JSON
  function loadRemoteNotifications(file) {
    console.log('emblNotifications','Opening URL ' + file);
    if (window.XMLHttpRequest) {
      var xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.open("GET", file, true);
    xmlhttp.onload = function (e) {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          // eval(xmlhttp.responseText);
          // var m = m || ''; // make sure the message isn't null
          processNotifications(eval(xmlhttp.responseText));
        } else {
          console.error(xmlhttp.statusText);
        }
      }
    };
    xmlhttp.onerror = function (e) {
      console.error(xmlhttp.statusText);
    };
    xmlhttp.send(null);
  }

  // Bootstrap the message fetching
  // If on dev, reference dev server
  if (window.location.hostname.indexOf('wwwdev.') === 0) {
    loadRemoteNotifications('https://wwwdev.embl.org/api/v1/notifications?_format=json&source=contenthub');
  } else {
    // @todo update this to point to prod
    loadRemoteNotifications('https://wwwdev.embl.org/api/v1/notifications?_format=json&source=contenthub');
  }

  // @todo
  //   - compare to `notification_ulrs`
  //     We can steal code from the EBI VF https://github.com/ebiwd/EBI-Framework/blob/v1.3/js/ebi-global-includes/script/4_ebiFrameworkContent.js#L391-L475
  // 3. If matching URL
  //   - invoke vf-banner
  //   - using options from `notification_position` `notification_presentation` `body` `title` `notification_link`

  // Possible features not currently planned:
  // - Only show if a wrapping element has data-vf-js-embl-notifications`
  // - Also load message from EBI https://ebi.emblstatic.net/announcements.js

  // @todo
  // - set up and test matching against a passed URL
  //   You can masquerade as another page or URL for adhoc use cases or testing:
  //   emblNotifications(currentHost = 'www.embl.org', currentPath = 'my/test/path`);

}

// By default your component should be usable with js imports
export { emblNotifications };

// Add this to your ./components/vf-component-rollup/scripts.js
// import { emblNotifications } from '../components/raw/embl-notifications/embl-notifications.js';
// And invoke it
// emblNotifications();

