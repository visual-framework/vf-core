// embl-notifications

// if you need to import any other components' JS to use here
import { vfBanner } from "../vf-banner/vf-banner";

/**
  * After a notifications has been chosen, build it and insert into the document
  * @example emblNotificationsInject(notification)
  * @param {object} [message] - An object to be show on a page
  */
function emblNotificationsInject(message) {
  let output = document.createElement("div");

  // @todo:
  // - add support in contentHub for extra button text, link

  // preparation
  message.body = message.body.replace(/<[/]?[p>]+>/g, " "); // no <p> tags allowed in inline messages, preserve a space to not collide words
  // add vf-link to link
  message.body = message.body.replaceAll("<a href=", "<a class=\"vf-banner__link\" href="); // we might need a more clever regex, but this should also avoid links that already have a class
  // Learn more link is conditionally shown
  if (message.field_notification_link) {
    message.body = `${message.body} <a class="vf-banner__link" href="${message.field_notification_link}">Learn more</a>`;
  }
  // custom button text
  message.field_notification_button_text = message.field_notification_button_text || "Close notice";
  // notification memory and cookie options
  if (message.field_notification_cookie == "True") {
    output.dataset.vfJsBannerCookieName = message.cookieName;
    output.dataset.vfJsBannerCookieVersion = message.cookieVersion;
    if (message.field_notification_auto_accept == "True") {
      output.dataset.vfJsBannerAutoAccept = true;
    }
  }

  if (message.field_notification_position == "fixed") {
    output.classList.add("vf-banner", "vf-banner--fixed", "vf-banner--bottom", "vf-banner--notice");
    output.dataset.vfJsBanner = true;
    output.dataset.vfJsBannerState = message.field_notification_presentation;
    output.dataset.vfJsBannerButtonText = message.field_notification_button_text;
    // These features are not yet supported by the notification content type in the EMBL contentHub
    // output.dataset.vfJsBannerExtraButton = "<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>";
    output.innerHTML = `
      <div class="vf-banner__content | vf-grid" data-vf-js-banner-text>
        <p class="vf-text vf-text-body--2">${message.body}</p>
      </div>`;

    let target = document.body.firstChild;
    target.parentNode.prepend(output);
    vfBanner();
  } else if (message.field_notification_position == "inline") {
    output.classList.add("vf-grid", "vf-u-margin__top--400"); // we wrap in vf-grid for layout
    // we use vf-u-margin__top--400 as this element is usually inserted inside a contentHub wrapper and not affected by body.vf-stack
    // if vf-stack is set, this will have no practical affect
    output.innerHTML = `
      <div class="vf-banner vf-banner--alert vf-banner--info | vf-content" data-vf-google-analytics-region="notifications-banner">
        <div class="vf-banner__content">
          <p class="vf-banner__text">${message.body}</p>
        </div>
      </div>`;

    // insert after `vf-header` or at after `vf-body`
    // @todo: add support for where "inline" message should be shown
    // @todo: don't rely on the presence of vf-header to show inline notification, maybe <div data-notifications-go-here>
    let target = document.getElementsByClassName("vf-header");
    if (target.length > 0) {
      target[0].parentNode.insertBefore(output, target[0].nextSibling);
    } else {
      // if no vf-header, perhaps there's a masthead-black-bar?
      let target = document.getElementsByClassName("masthead-black-bar");
      if (target.length > 0) {
        target[0].parentNode.insertBefore(output, target[0].nextSibling);
      } else {
        // if no vf-header, show at vf-body
        // @thought: we might instead make this show as "top"
        let target = document.getElementsByClassName("vf-body");
        if (target.length > 0) {
          // output.classList.add('vf-u-grid--reset');
          target[0].prepend(output);
        } // if still no success, we soft fail
      }
    }

  } else if (message.field_notification_position == "top") {
    output.classList.add("vf-banner", "vf-banner--fixed", "vf-banner--top", "vf-banner--phase");
    output.dataset.vfJsBanner = true;
    output.dataset.vfJsBannerState = message.field_notification_presentation;
    output.dataset.vfJsBannerButtonText = message.field_notification_button_text;
    // These features are not yet supported by the notification content type in the EMBL contentHub
    // output.dataset.vfJsBannerExtraButton = "<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>";
    output.innerHTML = `
      <div class="vf-banner__content" data-vf-js-banner-text>
        <p class="vf-banner__text">${message.body}</p>
      </div>`;

    let target = document.body.firstChild;
    target.parentNode.prepend(output);
    vfBanner();
  }

  // console.log('emblNotifications, showing:', message);
}

/**
  * The global function for this component
  * Note: if you use embl-content-hub-loader, it will automatically invoke emblNotifications
  * @example emblNotifications(currentHost, currentPath)
  * @param {string} [currentHost] - a host url www.embl.org
  * @param {string} [currentPath] - a path /people/name
  */
function emblNotifications(currentHost, currentPath) {
  currentHost = currentHost || window.location.hostname;
  currentPath = currentPath || window.location.pathname;
  // don't treat `wwwdev` as distinct from `www`
  currentHost = currentHost.replace(/wwwdev/g, "www");

  // console.log('emblNotifications','Checking for notifications.');
  // console.log('emblNotifications, Current url info:', currentHost + "," + currentPath);

  // Process each message against a URLs
  function matchNotification(message, targetUrl) {
    let matchFound = false;

    if (message.hasBeenShown == true) {
      // console.warn('emblNotifications', 'This message has already been displayed on the page.')
      return;
    }

    // console.log('emblNotifications, targetUrl:', targetUrl);
    // console.log('emblNotifications, matching:', currentHost+currentPath);

    // Is there an exact match?
    matchFound = compareUrls(currentHost+currentPath, targetUrl);

    // Handle wildcard matches like `/about/*`
    if (targetUrl.slice(-1) == "*") {
      matchFound = compareUrls(currentHost+currentPath, targetUrl, true);
    }

    // if a match has been made on the current url path, show the message
    if (matchFound == true) {
      // console.log('emblNotifications: MATCH FOUND 🎉', targetUrl, currentHost, currentPath);
      message.hasBeenShown = true;
      emblNotificationsInject(message);
    }
  }

  // Handle string comparisons for URLs
  function compareUrls(url1, url2, isWildCard) {
    isWildCard = isWildCard || false;

    // we ignore case
    // we could probably optimise by moving this higher in the logic, but it's more maintainable to have it here
    url1 = url1.toLowerCase();
    url2 = url2.toLowerCase();

    // don't allow matches to end in `*`
    if (url1.slice(-1) == "*") url1 = url1.substring(0, url1.length - 1);
    if (url2.slice(-1) == "*") url2 = url2.substring(0, url2.length - 1);

    // don't allow matches to end in `/`
    if (url1.slice(-1) == "/") url1 = url1.substring(0, url1.length - 1);
    if (url2.slice(-1) == "/") url2 = url2.substring(0, url2.length - 1);

    // console.log('emblNotifications, comparing:', url1 + "," + url2);

    if (url1 == url2) {
      return true;
    } else if (isWildCard) {
      // console.log('emblNotifications, wildcard comparison:', url1, url2)
      if (url1.indexOf(url2) == 0) {
        // only success if match found from beginning of string
        // we only support wildcards on the right side
        // console.log('emblNotifications: WILDCARD MATCH FOUND 🎉');
        return true;
      }
    }
    return false;
  }

  // Process each message, and its URL fragments
  function processNotifications(messages) {
    // console.log('emblNotifications', messages);

    // Process each message
    for (let index = 0; index < messages.length; index++) {
      let currentMessage = messages[index];

      // track if a message has already been show on the page
      // we want to be sure a message isn't accidently shown twice
      currentMessage.hasBeenShown = false;

      // Process the URLs for each path in a message
      let currentUrls = currentMessage.field_notification_urls.split(",");
      for (let indexUrls = 0; indexUrls < currentUrls.length; indexUrls++) {
        let url = currentUrls[indexUrls].trim();
        matchNotification(currentMessage, url); // pass the notification and active url to compare
      }
    }
  }

  // Utility to fetch a file, process the JSON
  function loadRemoteNotifications(file) {
    // console.log('emblNotifications','Opening URL :' + file);
    if (window.XMLHttpRequest) {
      var xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.open("GET", file, true);
    xmlhttp.onload = function() {
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
    xmlhttp.onerror = function() {
      console.error(xmlhttp.statusText);
    };
    xmlhttp.send(null);
  }

  // Bootstrap the message fetching
  // If on dev, reference dev server
  if (window.location.hostname.indexOf("wwwdev.") === 0) {
    loadRemoteNotifications("https://wwwdev.embl.org/api/v1/notifications?_format=json&source=contenthub");
  } else if (window.location.hostname.indexOf("localhost") === 0) {
    loadRemoteNotifications("https://wwwdev.embl.org/api/v1/notifications?_format=json&source=contenthub");
  } else {
    loadRemoteNotifications("https://www.embl.org/api/v1/notifications?_format=json&source=contenthub");
  }

  // Check fallback notifications
  loadRemoteNotifications("https://embl-communications.github.io/embl-notifcations-fallback/notifications.js");
}

// By default your component should be usable with js imports
export { emblNotifications };

// Add this to your ./components/vf-component-rollup/scripts.js
// import { emblNotifications } from '../components/raw/embl-notifications/embl-notifications.js';
// And invoke it
// Note: if you use embl-content-hub-loader, it will automatically invoke emblNotifications
// emblNotifications();
