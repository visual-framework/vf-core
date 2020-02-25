'use strict'; // vf-banner
// Turn the below code snippet into a banner
// <div class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
// data-vf-js-banner
// data-vf-js-banner-state="persistent|dismissible|blocking" data-vf-js-banner-esc-close="y|n"
// data-vf-js-banner-cookie-name="{{data-service-id}}"
// data-vf-js-banner-cookie-version="{{data-protection-version}}"
// data-vf-js-banner-extra-button="<a href='#'>string1</a><a href='#'>string2</a>">
//   <div class="vf-banner__content | vf-grid">
//     <p class="vf-text vf-text--body-l">
//       This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-link" href="JavaScript:Void(0);">Terms Of Use</a>.
//     </p>
//
//     <button class="vf-button vf-button--secondary">
//       {{vf-data-protection-banner__link}}
//     </button>
//   </div>
// </div>

/**
 * Clear the cooke. This is mostly a development tool.
 */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function vfBannerReset(vfBannerCookieNameAndVersion) {
  vfBannerSetCookie(vfBannerCookieNameAndVersion, false);
}
/**
 * Confirm a banner, initiate cookie logging
 */


function vfBannerConfirm(banner, vfBannerCookieNameAndVersion) {
  banner.classList += " vf-u-display-none";

  if (vfBannerCookieNameAndVersion !== 'null') {
    vfBannerSetCookie(vfBannerCookieNameAndVersion, true);
  }
}
/**
 * Log a cookie
 */


function vfBannerSetCookie(c_name, value, exdays) {
  // var value = value || 'true';
  var exdays = exdays || 90;
  var exdate = new Date();
  var c_value;
  exdate.setDate(exdate.getDate() + exdays);
  c_value = escape(value) + (exdays === null ? "" : ";expires=" + exdate.toUTCString()) + ";domain=" + document.domain + ";path=/";
  document.cookie = c_name + "=" + c_value;
}
/**
 * See if a cookie has been set
 */


function vfBannerGetCookie(c_name) {
  var i,
      x,
      y,
      ARRcookies = document.cookie.split(";");

  for (var i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");

    if (x === c_name) {
      return unescape(y);
    }
  }
}
/**
 * Finds all vf-banner on a page and activates them
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @example vfBanner(document.querySelectorAll('.vf-component__container')[0]);
 */


function vfBanner(scope) {
  var scope = scope || document;
  var bannerList = scope.querySelectorAll('[data-vf-js-banner]');

  if (!bannerList) {
    // exit: banners not found
    return;
  }

  if (bannerList.length == 0) {
    // exit: banner content not found
    return;
  } // generate the banner component, js events


  Array.prototype.forEach.call(bannerList, function (banner, i) {
    // map the JS data attributes to our object structure
    var bannerRemapped = JSON.parse(JSON.stringify(banner.dataset));

    if (typeof banner.dataset.vfJsBannerId != "undefined") {// don't reactivate an already processed banner
    } else {
      bannerRemapped.vfJsBannerText = banner.querySelectorAll('[data-vf-js-banner-text]')[0].innerHTML;
      var uniqueId = Math.round(Math.random() * 10000000); // set an id to target this banner

      banner.setAttribute('data-vf-js-banner-id', uniqueId); // preserve the classlist

      bannerRemapped.classList = banner.querySelectorAll('[data-vf-js-banner-text]')[0].classList; // Make the banner come alive

      vfBannerInsert(bannerRemapped, uniqueId);
    }
  });
}
/**
 * Takes a banner object and creates the necesary html markup, js events, and inserts
 * @example vfBannerInsert()
 * @param {object} [banner]  -
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @param {string} [bannerId] - the id of the target div, `data-vf-js-banner-id="1"`
 */


function vfBannerInsert(banner, bannerId, scope) {
  var scope = scope || document;
  var targetBanner = scope.querySelectorAll('[data-vf-js-banner-id="' + bannerId + '"]')[0];

  if (targetBanner == undefined) {
    return;
  }

  var generatedBannerHtml = '<div class="' + banner.classList + '" data-vf-js-banner-text>';
  generatedBannerHtml += banner.vfJsBannerText; // What type of banner?

  if (banner.vfJsBannerState === 'persistent') {// nothing more to do for persistent, you can't close it
  } else if (banner.vfJsBannerState === 'dismissible') {// nothing more to do for dismissible
  } else if (banner.vfJsBannerState === 'blocking') {
    console.warn('vf-banner: Note, the blocking implementation is not yet feature complete.'); // escape only works when blocking

    if (banner.vfJsBannerEscClose === 'y' || banner.vfJsBannerEscClose === 'Y') {
      document.onkeydown = function (evt) {
        evt = evt || window.event;

        if (evt.keyCode == 27) {
          vfBannerConfirm(targetBanner, 'null');
        }
      };
    }
  } // Split passed links into buttons
  // <a href='#'>string1</a>\<a href='#'>string2</a>


  if (banner.vfJsBannerExtraButton) {
    var vfBannerExtraButtons = banner.vfJsBannerExtraButton.split('</a>');
    vfBannerExtraButtons.forEach(function (button) {
      if (button.length > 1) {
        button += '</a>';
        var newButton = document.createElement('button');
        newButton.innerHTML = button;
        newButton = newButton.firstChild;
        newButton.classList = 'vf-button vf-button--primary';
        generatedBannerHtml += newButton.outerHTML;
      }
    });
  } // if there is a vfJsBannerButtonText and banner is blocking or dismissible,
  // add a button so user can close the banner


  if (banner.vfJsBannerButtonText && (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible')) {
    generatedBannerHtml += '<button class="vf-button vf-button--secondary" data-vf-js-banner-close>' + banner.vfJsBannerButtonText + '</button>';
  }

  generatedBannerHtml += '</div>'; // set the html of the banner

  targetBanner.innerHTML = generatedBannerHtml; // prep for cookie

  var vfBannerCookieNameAndVersion = 'null';

  if (banner.vfJsBannerCookieName && banner.vfJsBannerCookieVersion) {
    vfBannerCookieNameAndVersion = banner.vfJsBannerCookieName + '_' + banner.vfJsBannerCookieVersion;
  } // utility to reset cookie when developing
  // console.warn('vf-banner: vfBannerReset cookie reset override is on.');
  // vfBannerReset(vfBannerCookieNameAndVersion);
  // if blocking or dismissible, allow the user to close it, store a cookie (if specified)


  if (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible') {
    // On click: close banner, pass any cooke name (or `null`)
    if (banner.vfJsBannerButtonText) {
      targetBanner.addEventListener('click', function () {
        vfBannerConfirm(targetBanner, vfBannerCookieNameAndVersion);
      }, false);
    }
  }

  if (vfBannerCookieNameAndVersion != "null") {
    // if banner has been previously accepted
    if (vfBannerGetCookie(vfBannerCookieNameAndVersion) === 'true') {
      // banner has been accepted, close
      targetBanner.classList += " vf-u-display-none"; // exit, nothng more to do

      return;
    } // if banner is marked as auto-accept, set as read


    if (banner.vfJsBannerAutoAccept == "true") {
      if (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible') {
        vfBannerSetCookie(vfBannerCookieNameAndVersion, true);
      }
    }
  }
} // By default this creates banners from HTML
// optionally you can programatically supply
// Target HTML
// `<div class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
//       data-vf-js-banner
//       data-vf-js-banner-id="32423"
//
// ></div>`
// var programaticalBanner = {
//   vfJsBanner: "",
//   vfJsBannerButtonText: "I agree, dismiss this banner",
//   vfJsBannerCookieName: "MyService",
//   vfJsBannerCookieVersion: "0.1",
//   vfJsBannerExtraButton: "<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>",
//   vfJsBannerId: "2352286",
//   vfJsBannerText: '<p class="vf-text vf-text--body-l">This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-link" href="JavaScript:Void(0);">Terms Of Use</a>.</p>',
//   vfJsBannerState: "dismissible",
//   vfJsBannerAutoAccept: "true"
// };
// vfBannerInsert(programaticalBanner,'32423');
// vf-masthead
// The background image for the banner element are taken from the database.
// The filename includes the hex code for the background colour of the image.
// Then test if the 6 characters are a hex code and declare the background-color

/**
  * Function for making background color of banner from image file name
  * @example vfMastheadSetStyle()
  */


function vfMastheadSetStyle() {
  var vfMastheads = document.querySelectorAll('[data-vf-js-masthead]');

  if (vfMastheads[0]) {
    var el = vfMastheads[0];
    var bannerBG = getComputedStyle(el).getPropertyValue('--vf-masthead__bg-image');
    var filename = bannerBG.substr(0, bannerBG.lastIndexOf('.')) || bannerBG;
    var hexcode = filename.substr(filename.length - 6);
    var bannerBGC = "#" + hexcode;
    var regHex = /[0-9A-Fa-f]{6}/g;
    var threshold = 130; // about half of 256. Lower threshold equals more dark text on dark background

    var cBrightness = 255; // default to above the threshold

    if (regHex.test(hexcode)) {
      var cutHex = function cutHex(h) {
        return h.charAt(0) == "#" ? h.substring(1, 7) : h;
      };

      var hexToR = function hexToR(h) {
        return parseInt(cutHex(h).substring(0, 2), 16);
      };

      var hexToG = function hexToG(h) {
        return parseInt(cutHex(h).substring(2, 4), 16);
      };

      var hexToB = function hexToB(h) {
        return parseInt(cutHex(h).substring(4, 6), 16);
      };

      var getCorrectTextColor = function getCorrectTextColor(hex) {
        var hRed = hexToR(hex);
        var hGreen = hexToG(hex);
        var hBlue = hexToB(hex);
        return (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
      };

      if (!bannerBGC) return;
      bannerBGC = bannerBGC.trim();
      cBrightness = getCorrectTextColor(bannerBGC);

      if (cBrightness > threshold) {
        el.style.setProperty('--vf-masthead__color--foreground', "#000000");
      } else if (cBrightness < threshold) {
        el.style.setProperty('--vf-masthead__color--foreground', "#FFFFFF");
      }
    }
  }
}

; // vf-tabs

/**
 * Finds all tabs on a page and activates them
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @example vfTabs(document.querySelectorAll('.vf-component__container')[0]);
 */

function vfTabs(scope) {
  var scope = scope || document; // Get relevant elements and collections

  var tablist = scope.querySelectorAll('[data-vf-js-tabs]');
  var panelsList = scope.querySelectorAll('[data-vf-js-tabs-content]');
  var panels = scope.querySelectorAll('[data-vf-js-tabs-content] [id^="vf-tabs__section"]');
  var tabs = scope.querySelectorAll('[data-vf-js-tabs] .vf-tabs__link');

  if (!tablist || !panels || !tabs) {
    // exit: either tabs or tabbed content not found
    return;
  }

  if (tablist.length == 0 || panels.length == 0 || tabs.length == 0) {
    // exit: either tabs or tabbed content not found
    return;
  } // The tab switching function


  var switchTab = function switchTab(newTab) {
    // get the parent ul of the clicked tab
    var parentTabSet = newTab.closest(".vf-tabs__list");
    var oldTab = parentTabSet.querySelector('[aria-selected]');

    if (oldTab) {
      oldTab.removeAttribute('aria-selected');
      oldTab.setAttribute('tabindex', '-1');
      oldTab.classList.remove('is-active');
      var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
      panels[oldIndex].hidden = true;
    }

    newTab.focus(); // Make the active tab focusable by the user (Tab key)

    newTab.removeAttribute('tabindex'); // Set the selected state

    newTab.setAttribute('aria-selected', 'true');
    newTab.classList.add('is-active'); // Get the indices of the new tab to find the correct
    // tab panel to show

    var index = Array.prototype.indexOf.call(tabs, newTab);
    panels[index].hidden = false;
  }; // Add semantics are remove user focusability for each tab


  Array.prototype.forEach.call(tabs, function (tab, i) {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', 'tab' + (i + 1));
    tab.setAttribute('data-tabs__item', 'tab' + (i + 1));
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation'); // Reset any active tabs from a previous JS call

    tab.removeAttribute('aria-selected');
    tab.setAttribute('tabindex', '-1');
    tab.classList.remove('is-active'); // Handle clicking of tabs for mouse users

    tab.addEventListener('click', function (e) {
      e.preventDefault();
      switchTab(e.currentTarget);
    }); // Handle keydown events for keyboard users

    tab.addEventListener('keydown', function (e) {
      // Get the index of the current tab in the tabs node list
      var index = Array.prototype.indexOf.call(tabs, e.currentTarget); // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate

      var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;

      if (dir !== null) {
        e.preventDefault(); // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab

        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(tabs[dir]) : void 0;
      }
    });
  }); // Add tab panel semantics and hide them all

  Array.prototype.forEach.call(panels, function (panel, i) {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    var id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  }); // Add the tablist role to the first <ul> in the .tabbed container

  Array.prototype.forEach.call(tablist, function (tablistset, i) {
    tablistset.setAttribute('role', 'tablist'); // Initially activate the first tab

    var firstTab = tablistset.querySelectorAll('.vf-tabs__link')[0];
    firstTab.removeAttribute('tabindex');
    firstTab.setAttribute('aria-selected', 'true');
    firstTab.classList.add('is-active');
  });
  Array.prototype.forEach.call(panelsList, function (panel, i) {
    // Initially reveal the first tab panel
    var firstPanel = panel.querySelectorAll('.vf-tabs__section')[0];
    firstPanel.hidden = false;
  });
} // vf-tree

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
// if you need to import any other components' JS to use here
// import { vfOthercomponent } from 'vf-other-component/vf-other-component';

/**
 * The global function for this component
 * @example vfTree(firstPassedVar)
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 */


function vfTree(scope) {
  var scope = scope || document; // Get relevant elements and collections

  var treelist = scope.querySelectorAll('[data-vf-js-tree]'); // const panelsList = scope.querySelectorAll('[data-vf-js-tabs-content]');
  // const panels = scope.querySelectorAll('[data-vf-js-tabs-content] [id^="vf-tabs__section"]');
  // const tabs = scope.querySelectorAll('[data-vf-js-tabs] .vf-tabs__link');
  // if (!tablist || !panels || !tabs) {

  if (!treelist) {
    // exit: either trees or tabbed content not found
    return;
  } // if (tablist.length == 0 || panels.length == 0 || tabs.length == 0) {


  if (treelist.length == 0) {
    // exit: either trees or tabbed content not found
    return;
  } // Receive a target scope and toggle if it is active


  function vfTreeToggleActive(target) {
    var collpasedState = target.dataset['vfJsTree-Collapsed'];

    if (collpasedState === 'true') {
      collpasedState = false;
      target.classList.remove('vf-tree--collapsed');
      target.classList.add('vf-tree__item--expanded');
      target.setAttribute("aria-expanded", true);
    } else {
      collpasedState = true;
      target.classList.add('vf-tree--collapsed');
      target.classList.remove('vf-tree__item--expanded');
      target.setAttribute("aria-expanded", false);
    }

    target.dataset['vfJsTree-Collapsed'] = collpasedState;
  } // Logic to show/hide section of tree


  function vfTreeButtonHandler(target) {
    // if want to only get the direct children matches
    // this future proofs but also adds and edge case, so we won't use for now
    // let targetButton = Array.prototype.filter.call(target.children, function (item) {
    //   return item.matches('[data-vf-js-tree--button]');
    // });
    var targetButton = target.querySelectorAll('[data-vf-js-tree--button]');

    if (targetButton.length == 0) {
      // if no tree buttons found, nothing to do
      return;
    } // Handle clicking
    // Target the closest item


    targetButton[0].addEventListener('click', function (e) {
      console.log(target);
      e.preventDefault();
      vfTreeToggleActive(target);
    });
  } // For each treelist section, invoke handlers


  Array.prototype.forEach.call(treelist, function (treelistset, i) {
    // Handle hide/show for tree sets
    vfTreeButtonHandler(treelistset);
  });
} // vf-form__float-labels

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
 * @example vfcomponentName(firstPassedVar)
 * @param {string} [firstPassedVar]  - An option to be passed
 */


function vfFormFloatLabels() {
  function addFloatLabel(self) {
    var label = document.createElement('label');
    var id = 'label-' + new Date().getTime();
    label.setAttribute('id', id);
    self.dataset.inputOf = id;
    self.parentNode.insertBefore(label, self);
    label.innerHTML = self.getAttribute('placeholder'); // not namespaced as this is a HTML-native attribute

    label.classList.add('vf-form__label');
  }

  function floatLabelKeyUp(event) {
    var self = event.target;

    if (!self.dataset.inputOf && !!self.value) {
      addFloatLabel(self);
    } else {
      var label = document.querySelector('#' + self.dataset.inputOf);

      if (!self.value && !!label) {
        setTimeout(function () {
          label.parentNode.removeChild(label);
          delete self.dataset.inputOf;
        }, 10);
      }
    }
  }

  function wrapElement(element) {
    var parent = element.parentNode;
    var sibling = element.nextElementSibling;
    var div = document.createElement('div');
    div.appendChild(element);

    if (!sibling) {
      parent.appendChild(div);
    } else {
      parent.insertBefore(div, sibling);
    }
  }

  var floatLabels = document.querySelectorAll('[data-vf-js-form-floatlabel]');

  if (floatLabels.length === 0) {
    // console.warn('There are no `[data-vf-js-form-floatlabel]` to process; exiting');
    return false;
  }

  var inputs = [].slice.call(floatLabels);

  if (typeof inputs != "undefined") {
    for (var i in inputs) {
      if (_typeof(inputs[i]) == "object") {
        // prevent execution on array functions
        wrapElement(inputs[i]);

        if (!!inputs[i].value) {
          addFloatLabel(inputs[i]);
        }

        inputs[i].classList.add('vf-form__floatlabel'); // .vf-form__floatlabel

        inputs[i].addEventListener('keyup', floatLabelKeyUp);
      }
    }
  }

  function checkEmail(str) {
    var errorElem = document.getElementById('error'); // email regex

    var re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(str)) {
      if (document.getElementById('email-error')) {// do nothing
      } else {
        var el = document.getElementById('email-form'),
            elChild = document.createElement('div'),
            parent = elChild;
        elChild.innerHTML = '<div id="email-error" class="mt-b-form__message mt-b-form__message--inline-error"><p>Your email is incorrect</p></div>';
      }

      el.parentNode.appendChild(elChild);
    } else {
      var elem = document.getElementById('email-error');
      elem.parentNode.removeChild(elem);
    }
  }

  function checkForm() {
    var canSubmit = true;
    var emailcheck = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailField = document.getElementById('username').value;
    var passwordField = document.forms['loginform'].querySelector('.form__input--password').value;

    if (!emailcheck.test(emailField)) {
      canSubmit = false;
    }

    if (passwordField.length < 5) {
      canSubmit = false;
    }

    if (canSubmit) {
      document.forms['loginform'].querySelector('.mt-b-button__item').disabled = false;
    } else {
      document.forms['loginform'].querySelector('.mt-b-button__item').disabled = true;
    }
  }
} // embl-content-hub-loader__html-imports
// A trimmed down version of
// https://github.com/AshleyScirra/html-imports-polyfill/blob/master/htmlimports.js
// mostly we dropped CSS and sub-imports


function emblContentHubLoaderHtmlImports() {
  // Map a script URL to its import document for GetImportDocument()
  var scriptUrlToImportDoc = new Map();

  function GetPathFromURL(url) {
    if (!url.length) return url; // empty string

    var lastCh = url.charAt(url.length - 1);
    if (lastCh === "/" || lastCh === "\\") return url; // already a path terminated by slash

    var last_slash = url.lastIndexOf("/");
    if (last_slash === -1) last_slash = url.lastIndexOf("\\");
    if (last_slash === -1) return ""; // neither slash found, assume no path (e.g. "file.ext" returns "" as path)

    return url.substr(0, last_slash + 1);
  }

  ; // Determine base URL of document.

  var baseElem = document.querySelector("base");
  var baseHref = baseElem && baseElem.hasAttribute("href") ? baseElem.getAttribute("href") : ""; // If there is a base href, ensure it is of the form 'path/' (not '/path', 'path' etc)

  if (baseHref) {
    if (baseHref.startsWith("/")) baseHref = baseHref.substr(1);
    if (!baseHref.endsWith("/")) baseHref += "/";
  }

  function GetBaseURL() {
    return GetPathFromURL(location.origin + location.pathname) + baseHref;
  }

  ;

  function FetchAs(url, responseType) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(new Error("Failed to fetch '" + url + "': " + xhr.status + " " + xhr.statusText));
        }
      };

      xhr.onerror = reject;
      xhr.open("GET", url);
      xhr.responseType = responseType;
      xhr.send();
    });
  }

  function _AddImport(url, preFetchedDoc, rootContext, progressObject) {
    var isRoot = false; // The initial import creates a root context, which is passed along to all sub-imports.

    if (!rootContext) {
      isRoot = true;
      rootContext = {
        alreadyImportedUrls: new Set(),
        // for deduplicating imports
        stylePromises: [],
        scriptPromises: [],
        progress: progressObject || {} // progress written to this object (loaded, total)

      };
      rootContext.progress.loaded = 0;
      rootContext.progress.total = 1; // add root import
    } // Each import also tracks its own state with its own context.


    var context = {
      importDoc: null,
      baseUrl: GetPathFromURL(url),
      dependencies: []
    }; // preFetchedDoc is passed for sub-imports which pre-fetch their documents as an optimisation. If it's not passed,
    // fetch the URL to get the document.

    var loadDocPromise;
    if (preFetchedDoc) loadDocPromise = Promise.resolve(preFetchedDoc);else loadDocPromise = FetchAs(url, "document");
    return loadDocPromise.then(function (doc) {
      // HACK: in Edge, due to this bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12458748/
      // the fetched document URL is incorrect. doc.URL is also read-only so cannot directly be assigned. To work around this,
      // calculate the correct URL and use Object.defineProperty to override the returned document URL.
      Object.defineProperty(doc, "URL", {
        value: new URL(url, GetBaseURL()).toString()
      }); // we don't need the `body` wrapper, so return the first child

      return doc.body.firstChild;
    });
  }

  function AddImport(url, async, progressObject) {
    // Note async attribute ignored (was only used for old native implementation).
    return _AddImport(url, null, null, progressObject);
  }

  window["addImport"] = AddImport;
} // embl-conditional-edit

/**
 * Invoke emblConditionalEditDetectParam scopped to objects where
 * data-embl-js-conditional-edit is present
 * This will be dynamically run once emblContentHubSignalFinished is triggered.
 */


function emblConditionalEdit() {
  var emblConditionalEditItems = document.querySelectorAll('[data-embl-js-conditional-edit]');

  if (!emblConditionalEditItems) {
    // exit: lists not found
    return;
  }

  if (emblConditionalEditItems.length == 0) {
    // exit: lists not found
    return;
  }

  Array.prototype.forEach.call(emblConditionalEditItems, function (element, i) {
    emblConditionalEditDetectParam(location.href, element);
  });
}
/**
 * Detects `?embl-conditional-edit=enabled` or `?embl-conditional-edit=1` or ?embl-conditional-edit=true`
 * and adds `.embl-coditional-edit__enabled` to display the edit links
 * @param {string} [url] - the url to check for an enabling param
 * @param {element} [element] - the scopped element to be processed
 */


function emblConditionalEditDetectParam(url, element) {
  var captured = /embl-conditional-edit=([^&]+)/.exec(url);

  if (captured == null) {
    // value not found
    // also try against any parent iframe url
    if (window.self !== window.top) {
      emblConditionalEditDetectParam(parent.window.location, element);
    }

    return;
  }

  captured = captured[1];

  if (captured == '1' || captured == 'enabled' || captured == 'true') {
    element.className += ' ' + 'embl-coditional-edit__enabled';
  }
} // embl-content-hub-loader__fetch

/**
 * Fetch html links from content.embl.org
 */


function emblContentHubFetch() {
  // Some JS utilities
  // via https://stackoverflow.com/a/32135318
  Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
  }, false;
  Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
  }, false;
  /**
   * Get the number of days between two dates.
   */

  function days_between(date1, date2) {
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24; // Convert both dates to milliseconds

    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime(); // Calculate the difference in milliseconds

    var difference_ms = Math.abs(date1_ms - date2_ms); // Convert back to days and return

    return Math.round(difference_ms / ONE_DAY) + 1;
  } // A list of all the links


  var emblContentHubLinks = document.querySelectorAll('[data-embl-js-content-hub-loader]');
  var emblContentHubLinkLoadingProgress = {};
  var emblContentHubShowTimers = false; // Handle the import of each element

  for (var i = 0; i < emblContentHubLinks.length; ++i) {
    (function () {
      var linkPosition = i; // track time it takes for link to be shown

      if (emblContentHubShowTimers) {
        console.time('timer for import ' + linkPosition);
      } // await the load of the html import from the polyfill 
      // note: we use polyfill in all cases; see https://github.com/visual-framework/vf-core/issues/508


      emblContentHubAwaitLoading(emblContentHubLinks[linkPosition], linkPosition);
    })();
  } // Add a class to the body once the last item has been processed


  function emblContentHubSignalFinished() {
    document.querySelectorAll('body')[0].classList.add('embl-content-hub-loaded'); // if the JS to run embl-conditional-edit is present, run it now

    if (typeof emblConditionalEdit === "function") {
      emblConditionalEdit();
    }
  } // Dispatch load to the pollyfill


  function emblContentHubAwaitLoading(targetLink, position) {
    // Docs: https://github.com/AshleyScirra/html-imports-polyfill#usage
    addImport(targetLink.href, null, emblContentHubLinkLoadingProgress).then(function (value) {
      emblContentHubGrabTheContent(targetLink, position, value);

      if (position + 1 == emblContentHubLinks.length) {
        emblContentHubSignalFinished();
      }
    });
  } // Generate a unique ID for the target element on the page


  function emblContentHubGenerateID(position) {
    return 'contentDbItem' + ('0000' + position).slice(-5);
  } // Show the remote content


  function emblContentHubGrabTheContent(targetLink, position, exportedContent) {
    // pickup the "meat" of the exported content
    exportedContent = exportedContent || targetLink.import.querySelector('.vf-content-hub-html'); // make sure we have something

    if (!exportedContent) {
      console.log('No content found for this import, exiting. The import may have already been preformed.', targetLink);
      return;
    } // if there is just one child element and it is a div, use that
    // (this helps with css grid layout)


    if (exportedContent.childElementCount === 1 && exportedContent.firstElementChild.innerHTML.trimLeft().substr(0, 4) === '<div') {
      exportedContent = exportedContent.firstElementChild;
      exportedContent.classList.add('vf-content-hub-html');
      exportedContent.classList.add('vf-content-hub-html__derived-div');
    } else if (exportedContent.childNodes.length == 3) {
      // if there are three or fewer child nodes this is likely a no-results reply
      // We'll still inject the content from the contentHub along with any passed "no matches" text
      var noContentMessage = targetLink.getAttribute('data-embl-js-content-hub-loader-no-content');

      if (noContentMessage == 'true') {
        // use a default
        noContentMessage = 'No content was found found for this query.';
      }

      var noContentMessageElement = document.createElement('div');
      noContentMessageElement.classList.add('vf-text');
      noContentMessageElement.classList.add('embl-content-hub-html__no-content-found');
      noContentMessageElement.innerHTML = noContentMessage;
      exportedContent.appendChild(noContentMessageElement.firstChild); // if data-embl-js-content-hub-loader-no-content-hide is true or has a class, hide accordingly

      var noContentHideBehavior = targetLink.getAttribute('data-embl-js-content-hub-loader-no-content-hide');

      if (noContentHideBehavior) {
        if (noContentHideBehavior == 'true') {
          // if true, just hide the response
          exportedContent.classList.add('vf-u-display-none');
        } else {
          // otherwise hide any element specified
          document.querySelector(noContentHideBehavior).classList.add('vf-u-display-none');
        }
      } // END noContentHideBehavior

    } // END exportedContent.childElementCount


    var contentID = emblContentHubGenerateID(position); // where does the content go?

    if (targetLink.dataset.target === 'self') {
      // if element already exists, remove it
      var oldElement = document.getElementById(contentID);

      if (oldElement) {
        oldElement.innerHTML = exportedContent.innerHTML;
      } else {
        // give content an ID
        exportedContent.setAttribute("id", contentID);
        exportedContent.classList.add(contentID); // just insert the new content

        exportedContent.appendAfter(targetLink);
      } // end if oldElement

    } else {
      var targetLocation = document.querySelector('.' + targetLink.dataset.target); // exportedContent.appendAfter(targetLocation);

      targetLocation.classList.add(contentID);
      targetLocation.innerHTML = exportedContent.innerHTML;
    } // display how long it took to load


    if (emblContentHubShowTimers) {
      console.timeEnd('timer for import ' + position);
    }

    emblContentHubAssignClasses(targetLink, position);
    emblContentHubUpdateDatesFormat(position); // run JS for some components on content, if they exist

    if (typeof vfBanner === 'function') {
      vfBanner(targetLocation);
    }

    if (typeof vfTabs === 'function') {
      vfTabs(targetLocation);
    } // don't run breadcrumbs as part of contenthub, use case is different
    // if (typeof(emblBreadcrumbs) === 'function') {
    //   emblBreadcrumbs(); // no scope for emblBreadcrumbs
    // }

  } // Enable class injection after loading contents
  // ... for all those edge cases
  // Background: https://gitlabci.ebi.ac.uk/emblorg/backlog/issues/82
  // Sample:
  //  <link rel="import" href="url" data-target="self"
  //        data-inject-class="vf-grid vf-grid__col-2"
  //        data-inject-class-target="ul"
  //        data-embl-js-content-hub-loader>
  //  This would make the ul a two-column grid.


  function emblContentHubAssignClasses(targetLink, position) {
    // var injectRequests = document.querySelectorAll('[data-inject-class][data-inject-class-target]');
    //
    // for (var i = 0; i < injectRequests.length; ++i) {
    var classesToInject = targetLink.getAttribute('data-inject-class');
    var targetSelectorToInject = targetLink.getAttribute('data-inject-class-target');

    if (classesToInject && targetSelectorToInject) {
      // Limit scope to the imported element
      var targetElement = document.querySelector('.' + emblContentHubGenerateID(position)).querySelector(targetSelectorToInject); // We can't inject space separated classes to we need to split it into arrays and add one by one.

      var classesToInject = classesToInject.split(' ');

      for (classNumber = 0; classNumber < classesToInject.length; classNumber++) {
        targetElement.classList.add(classesToInject[classNumber]);
      }
    }
  }
  /**
   * Update the format of close date.
   */


  function emblContentHubUpdateDatesFormat(position) {
    var dateRemainingList = document.querySelector('.' + emblContentHubGenerateID(position)).querySelectorAll('.date-days-remaining');
    var todayDate = new Date();

    if (dateRemainingList.length > 0) {
      for (var dateRemainingIndex = 0; dateRemainingIndex < dateRemainingList.length; dateRemainingIndex++) {
        var dateValue = parseInt(dateRemainingList[dateRemainingIndex].getAttribute('data-datetime')) * 1000;
        dateValue = new Date(dateValue);
        var numberOfDiffDays = days_between(dateValue, todayDate); // Update to 'Closes in 6 Days.' format if number of days is less than 30 days.

        if (numberOfDiffDays < 30 && numberOfDiffDays > 1) {
          dateRemainingList[dateRemainingIndex].innerHTML = 'Closes in ' + '<span>' + numberOfDiffDays + ' Days.</span>';
        }

        if (numberOfDiffDays == 1) {
          dateRemainingList[dateRemainingIndex].innerHTML = 'Closes in ' + '<span>' + numberOfDiffDays + ' Day.</span>';
        }
      }
    }
  }
} // embl-content-hub-loader


function emblContentHub() {
  // 1. make sure we have imports or a pollyfill
  emblContentHubLoaderHtmlImports(); // 2. import the content

  emblContentHubFetch();
} // embl-content-meta-properties
// In addition to being queried by other components' JS, this could
// also add classes to a page to affect the overall look of a page.

/**
 * Read metaProperties from page's metatags
 * @example emblContentMetaProperties_Read()
 */


function emblContentMetaProperties_Read() {
  var metaProperties = {}; // <!-- Content descriptors -->
  // <meta name="embl:who" content="{{ meta-who }}"> <!-- the people, groups and teams involved -->
  // <meta name="embl:what" content="{{ meta-what }}"> <!-- the activities covered -->
  // <meta name="embl:where" content="{{ meta-where }}"> <!-- at which EMBL sites the content applies -->
  // <meta name="embl:active" content="{{ meta-active }}"> <!-- which of the who/what/where is active -->

  metaProperties.who = metaProperties.who || document.querySelector("meta[name='embl:who']");
  metaProperties.what = metaProperties.what || document.querySelector("meta[name='embl:what']");
  metaProperties.where = metaProperties.where || document.querySelector("meta[name='embl:where']");
  metaProperties.active = metaProperties.active || document.querySelector("meta[name='embl:active']"); // <!-- Content role -->
  // <meta name="embl:utility" content="-8"> <!-- if content is task and work based or if is meant to inspire -->
  // <meta name="embl:reach" content="-5"> <!-- if content is externally (public) or internally focused (those that work at EMBL) -->

  metaProperties.utility = metaProperties.utility || document.querySelector("meta[name='embl:utility']");
  metaProperties.reach = metaProperties.reach || document.querySelector("meta[name='embl:reach']"); // <!-- Page infromation -->
  // <meta name="embl:maintainer" content="{{ meta-maintainer }}"> <!-- the contact person or group responsible for the page -->
  // <meta name="embl:last-review" content="{{ meta-last-review }}"> <!-- the last time the page was reviewed or updated -->
  // <meta name="embl:review-cycle" content="{{ meta-review-cycle }}"> <!-- how long in days before the page should be checked -->
  // <meta name="embl:expiry" content="{{ meta-expiry }}"> <!-- if there is a fixed point in time when the page is no longer relevant -->

  metaProperties.maintainer = metaProperties.maintainer || document.querySelector("meta[name='embl:maintainer']");
  metaProperties.lastReview = metaProperties.lastReview || document.querySelector("meta[name='embl:last-review']");
  metaProperties.reviewCycle = metaProperties.reviewCycle || document.querySelector("meta[name='embl:review-cycle']");
  metaProperties.expiry = metaProperties.expiry || document.querySelector("meta[name='embl:expiry']");

  for (var key in metaProperties) {
    if (metaProperties[key] != null && metaProperties[key].getAttribute("content").length != 0) {
      metaProperties[key] = metaProperties[key].getAttribute("content");
    } else {
      metaProperties[key] = 'notSet';
    }
  }

  return metaProperties;
} // embl-breadcrumbs-lookup
// to hold the EMBL taxonomy


var emblTaxonomy = {}; // placeholders for our new breadcrumbs

var emblBreadcrumbPrimary = document.createElement("ul");
emblBreadcrumbPrimary.classList.add('vf-breadcrumbs__list', 'vf-list', 'vf-list--inline');
var emblBreadcrumbRelated = document.createElement("ul");
emblBreadcrumbRelated.classList.add('vf-breadcrumbs__list', 'vf-breadcrumbs__list--related', 'vf-list', 'vf-list--inline'); // we store the primairy breadcrumb so it can be accessed by related crumbs, if needed

var primaryBreadcrumb;
/**
 * Take any appropriate actions depending on present metaTags
 * @example emblBreadcrumbsLookup()
 * @param {object} [metaProperties] - if you do not have meta tags on the page,
 *                                    you can explicitly pass options
 */

function emblBreadcrumbsLookup(metaProperties) {
  var emblBreadcrumbTarget = document.querySelectorAll('[data-embl-js-breadcrumbs-lookup]');

  if (emblBreadcrumbTarget.length === 0) {
    // console.warn('There is no `[data-embl-js-breadcrumbs-lookup]` in which to insert the breadcrumbs; exiting');
    return false;
  }

  if (emblBreadcrumbTarget.length > 1) {
    console.warn('There is more than one `[data-embl-js-breadcrumbs-lookup]` in which to insert the breadcrumbs; continuing but only the first element will be updated.');
  }

  if (metaProperties.active == 'notSet') {
    // @todo: we could infer the active breadcrumb if only one is passed
    console.warn('There is no active EMBL breadcrumb specified, cannot proceed looking up breadcrumbs.');
    return false;
  }

  var majorFacets = ['who', 'what', 'where']; // do the primairy breadcrumb first

  emblBreadcrumbAppend(emblBreadcrumbTarget, metaProperties[metaProperties.active], metaProperties.active, 'primary'); // do the non-primairy meta terms
  // @todo: we probably shouldn't do related if there is no primairy

  for (var i = 0; i < majorFacets.length; i++) {
    if (majorFacets[i] != metaProperties.active) {
      emblBreadcrumbAppend(emblBreadcrumbTarget, metaProperties[majorFacets[i]], majorFacets[i], 'related');
    }
  } // make a 'related' label


  var relatedLabel = document.createElement("span");
  relatedLabel.innerHTML = 'Related:';
  relatedLabel.classList.add('vf-breadcrumbs__heading'); // If no related terms were found, hide the related label
  // we only hide it as we could add related terms later

  if (emblBreadcrumbRelated.childNodes.length == 0) {
    relatedLabel.classList.add('vf-u-display-none');
  } // now that we've processed all the meta properties, insert our rendered breadcrumbs


  emblBreadcrumbTarget[0].innerHTML = emblBreadcrumbPrimary.outerHTML + relatedLabel.outerHTML + emblBreadcrumbRelated.outerHTML;
}
/**
 * Get the EMBL taxonomy json from the ContentHub
 * @example emblGetTaxonomy()
 * @param {string} [url] - URL to pull the taxonomy from
 */


function emblGetTaxonomy(url) {
  var url = url || 'https://www.embl.org/api/v1/pattern.json?pattern=embl-ontology&source=contenthub';
  return new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function () {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    }; // Handle network errors


    req.onerror = function () {
      reject(Error("Error loading ontology"));
    }; // Make the request


    req.send();
  });
}
/**
 * Receive a string and convert any non a-z character
 * @example emblBreadcrumbRemoveDiacritics('Spaßß')
 * @param {str} - a name or such
 * @todo this might be better as a general vf utility
 */


function emblBreadcrumbRemoveDiacritics(str) {
  str = str || ''; // https://github.com/backbone-paginator/backbone.paginator/blob/a579796a30e583c4dfa09e0a86e4abd21e0b5b56/plugins/diacritic.js

  var defaultDiacriticsRemovalMap = [{
    'base': 'A',
    'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
  }, {
    'base': 'AA',
    'letters': /[\uA732]/g
  }, {
    'base': 'AE',
    'letters': /[\u00C6\u01FC\u01E2]/g
  }, {
    'base': 'AO',
    'letters': /[\uA734]/g
  }, {
    'base': 'AU',
    'letters': /[\uA736]/g
  }, {
    'base': 'AV',
    'letters': /[\uA738\uA73A]/g
  }, {
    'base': 'AY',
    'letters': /[\uA73C]/g
  }, {
    'base': 'B',
    'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
  }, {
    'base': 'C',
    'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
  }, {
    'base': 'D',
    'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
  }, {
    'base': 'DZ',
    'letters': /[\u01F1\u01C4]/g
  }, {
    'base': 'Dz',
    'letters': /[\u01F2\u01C5]/g
  }, {
    'base': 'E',
    'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
  }, {
    'base': 'F',
    'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
  }, {
    'base': 'G',
    'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
  }, {
    'base': 'H',
    'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
  }, {
    'base': 'I',
    'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
  }, {
    'base': 'J',
    'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g
  }, {
    'base': 'K',
    'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
  }, {
    'base': 'L',
    'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
  }, {
    'base': 'LJ',
    'letters': /[\u01C7]/g
  }, {
    'base': 'Lj',
    'letters': /[\u01C8]/g
  }, {
    'base': 'M',
    'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
  }, {
    'base': 'N',
    'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
  }, {
    'base': 'NJ',
    'letters': /[\u01CA]/g
  }, {
    'base': 'Nj',
    'letters': /[\u01CB]/g
  }, {
    'base': 'O',
    'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
  }, {
    'base': 'OI',
    'letters': /[\u01A2]/g
  }, {
    'base': 'OO',
    'letters': /[\uA74E]/g
  }, {
    'base': 'OU',
    'letters': /[\u0222]/g
  }, {
    'base': 'P',
    'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
  }, {
    'base': 'Q',
    'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
  }, {
    'base': 'R',
    'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
  }, {
    'base': 'S',
    'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
  }, {
    'base': 'T',
    'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
  }, {
    'base': 'TZ',
    'letters': /[\uA728]/g
  }, {
    'base': 'U',
    'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
  }, {
    'base': 'V',
    'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
  }, {
    'base': 'VY',
    'letters': /[\uA760]/g
  }, {
    'base': 'W',
    'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
  }, {
    'base': 'X',
    'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
  }, {
    'base': 'Y',
    'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
  }, {
    'base': 'Z',
    'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
  }, {
    'base': 'a',
    'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
  }, {
    'base': 'aa',
    'letters': /[\uA733]/g
  }, {
    'base': 'ae',
    'letters': /[\u00E6\u01FD\u01E3]/g
  }, {
    'base': 'ao',
    'letters': /[\uA735]/g
  }, {
    'base': 'au',
    'letters': /[\uA737]/g
  }, {
    'base': 'av',
    'letters': /[\uA739\uA73B]/g
  }, {
    'base': 'ay',
    'letters': /[\uA73D]/g
  }, {
    'base': 'b',
    'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
  }, {
    'base': 'c',
    'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
  }, {
    'base': 'd',
    'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
  }, {
    'base': 'dz',
    'letters': /[\u01F3\u01C6]/g
  }, {
    'base': 'e',
    'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
  }, {
    'base': 'f',
    'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
  }, {
    'base': 'g',
    'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
  }, {
    'base': 'h',
    'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
  }, {
    'base': 'hv',
    'letters': /[\u0195]/g
  }, {
    'base': 'i',
    'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
  }, {
    'base': 'j',
    'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
  }, {
    'base': 'k',
    'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
  }, {
    'base': 'l',
    'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
  }, {
    'base': 'lj',
    'letters': /[\u01C9]/g
  }, {
    'base': 'm',
    'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
  }, {
    'base': 'n',
    'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
  }, {
    'base': 'nj',
    'letters': /[\u01CC]/g
  }, {
    'base': 'o',
    'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
  }, {
    'base': 'oi',
    'letters': /[\u01A3]/g
  }, {
    'base': 'ou',
    'letters': /[\u0223]/g
  }, {
    'base': 'oo',
    'letters': /[\uA74F]/g
  }, {
    'base': 'p',
    'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
  }, {
    'base': 'q',
    'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
  }, {
    'base': 'r',
    'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
  }, {
    'base': 's',
    'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
  }, {
    'base': 't',
    'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
  }, {
    'base': 'tz',
    'letters': /[\uA729]/g
  }, {
    'base': 'u',
    'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
  }, {
    'base': 'v',
    'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
  }, {
    'base': 'vy',
    'letters': /[\uA761]/g
  }, {
    'base': 'w',
    'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
  }, {
    'base': 'x',
    'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
  }, {
    'base': 'y',
    'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
  }, {
    'base': 'z',
    'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
  }];

  for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
    str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
  } // remove all commas, apostrophes, etc
  // @todo, this should be done by an optional paramater


  str = str.replace(/[^a-zA-Z0-9 ]/, "");
  return str;
}
/**
 * Receive a term and its context and create a breadcrumb
 * @example emblBreadcrumbAppend(breadcrumbTarget,term,facet,type)
 * @param {dom elements} [breadcrumbTarget]  - elements with data-embl-js-breadcrumbs-lookup
 * @param {string} [termName]  - the taxonomy item found, e.g. `Cancer`
 * @param {string} [facet] - the facet of the taxonomy (`who`, `what` or `where`)
 * @param {string} [type]  - if this is a `primary` or `related` path
 */


function emblBreadcrumbAppend(breadcrumbTarget, termName, facet, type) {
  // console.log('Processing breadcrumb for:', termName + ', ' + facet + ', ' + type);
  function getCurrentTerm(termName) {
    var termObject; // store the match

    if (termName === 'EMBL') termName = 'All EMBL sites'; // hack as we're not using IDs
    // if a term has not been passed, attempt to use the primary term's parent information
    // @todo: add a flag to explicitly "dontLookup" or "doLookup"

    if (termName == "notSet") {
      if (primaryBreadcrumb.parents[facet]) {
        termName = primaryBreadcrumb.parents[facet];
      } else {
        // No matches? Then don't show anything.
        termName = '';
      }
    } // if using a `string/NameOfThing` value, not accordingly


    if (termName.indexOf('string/') >= 0) {
      console.warn('embl-js-breadcumbs-lookup: using a passed string value to make breadcrumbs ' + termName);
      termName = termName.replace('string/', '');
    } // scan through all terms and find a match, if any


    function scanTaxonomyForTerm(termName) {
      // @todo: prefer UUID matches first
      // We prefer profiles
      Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), function (termId) {
        var term = emblTaxonomy.terms[termId];

        if (term.type == 'profile') {
          if (term.name === termName) {
            termObject = term;
            return; //exit
          }
        }
      }); // If no profile found, match other types of taxonomy entries

      if (typeof termObject === 'undefined') {
        Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), function (termId) {
          var term = emblTaxonomy.terms[termId];

          if (term.type != 'profile') {
            if (term.name === termName) {
              termObject = term;
              return; //exit
            }
          }
        });
      } // If there's still no match, see if we can find a matching display name
      // @todo: this is an easy win but creates messy matching, but maybe that's ok if you're not using UUID
      // There's a risk of multiple "training" entries
      // We prefer profiles


      Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), function (termId) {
        var term = emblTaxonomy.terms[termId];

        if (term.type == 'profile') {
          if (term.name_display === termName) {
            termObject = term;
            return; //exit
          }
        }
      }); // If no profile found, match other types of taxonomy entries

      if (typeof termObject === 'undefined') {
        Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), function (termId) {
          var term = emblTaxonomy.terms[termId];

          if (term.type != 'profile') {
            if (term.name_display === termName) {
              termObject = term;
              return; //exit
            }
          }
        });
      }
    } // don't scan for junk matches 


    if (termName != 'notSet' && termName != '' && termName != 'none') {
      scanTaxonomyForTerm(termName);
    } // Validation and protection
    // we never want to return undefined


    if (termObject == undefined || termObject == null) {
      // console.warn('embl-js-breadcumbs-lookup: No matching breadcrumb found for `' + termName + '`; Will formulate a URL.');
      termObject = {};

      if (facet == 'who') {
        // if we're linking to people generate a person URL
        termObject.url = 'https://www.embl.org/people/person/' + emblBreadcrumbRemoveDiacritics(termName).replace(/[\W_]+/g, ' ').replace(/\s+/g, '-').toLowerCase();
      } else {
        // otherwise try and search
        termObject.url = 'https://www.embl.org/search/#stq=' + termName + '&taxonomyFacet=' + facet + '&origin=breadcrumbTermNotFound'; // if no link specified, do a search
      }

      termObject.name_display = termName;
      termObject.uuid = 'null';
      termObject.uuid = [];
    } else if (typeof termObject.url == 'undefined') {
      // if entry was found but no link specified, generate a url for a search
      var urlFacet = '';

      if (termObject.primary != undefined) {
        // prepare a search facet if available
        urlFacet = '&taxonomyFacet=' + termObject.primary;
      }

      termObject.url = 'https://www.embl.org/search/#stq=' + termObject.name + urlFacet + '&origin=breadcrumbTaxonomy';
    }

    return termObject;
  }
  /**
   * Take a term and get its parent term UUID
   * todo: this lookup is, perhaps, flawed as it gives us each ancestor, irregardless
   *       of it's who/what/where path, but maybe this will provide an interesting
   *       "odeur d'information"
   * @example getBreadcrumbParentTerm(parents,context)
   * @param {array} [parents]  - array of UUIDs
   * @param {string} [facet] - who, what, where
   */


  function getBreadcrumbParentTerm(parents, facet) {
    // var parentTodos = {
    //   // 1: 'Respect the parent term context: who/what/where'
    //   // 2: 'scan the taxonomy and get any parent IDs',
    //   // 3: 'if there are parent IDs, add breadcrumb and set URL',
    //   // 4: 'if parent was found, does the parent have a parent?'
    // };
    // console.log('Todos for getBreadcrumbParentTerm():',parentTodos);
    if (parents == undefined || parents == null) {
      // no parent breadcrumb preset, exiting
      return;
    }

    function insertParent(activeParent) {
      if (activeParent == undefined || activeParent == null) {
        console.warn('embl-js-breadcumbs-lookup: No matching parent found; Stopping parent lookup.');
        return;
      }

      activeParent.url = activeParent.url || '#no_url_specified';

      if (activeParent.name.indexOf(' root term') > 0) {
        // if we've reached a root term, abort lookups and don't insert a root term as a crumb
        return;
      }

      if (activeParent.primary == facet) {
        // only insert crumb if it respects the original term context: who/what/where
        emblBreadcrumbPrimary.innerHTML = formatBreadcrumb(activeParent.name_display, activeParent.url) + emblBreadcrumbPrimary.innerHTML;
      } // get parents of parent


      if (activeParent.parents) {
        getBreadcrumbParentTerm(activeParent.parents, facet);
      }
    }

    var activeParent;

    if (parents[facet]) {
      // if a parent has structured who/what/where parents
      activeParent = emblTaxonomy.terms[parents[facet]];
      insertParent(activeParent);
    } else {
      // otherwise lookup each parent
      parents.forEach(function (parentId) {
        activeParent = emblTaxonomy.terms[parentId];
        insertParent(activeParent);
      });
    }

    return;
  }
  /**
   * Generate HTML for a new breadcrumb
   * @example formatBreadcrumb(term,breadcrumbUrl)
   * @param {string} [termName]  - the taxonomy string of the item, e.g. `Cancer`
   * @param {string} [breadcrumbUrl] - a fully formed URL, or 'null' to not make a link
   */


  function formatBreadcrumb(termName, breadcrumbUrl) {
    if (termName == '' || termName == 'none') {
      // if no term, do nothing
      return '';
    }

    var newBreadcrumb = '<li class="vf-breadcrumbs__item">';

    if (breadcrumbUrl && breadcrumbUrl !== 'null' && breadcrumbUrl !== '#no_url_specified') {
      newBreadcrumb += '<a href="' + breadcrumbUrl + '" class="vf-breadcrumbs__link">' + termName + '</a>';
    } else {
      newBreadcrumb += termName;
    }

    newBreadcrumb += '</li>';
    return newBreadcrumb;
  }

  var currentTerm = getCurrentTerm(termName);
  var breadcrumbId = currentTerm.uuid,
      breadcrumbUrl = currentTerm.url,
      breadcrumbParents = currentTerm.parents; // narrow down to the first matching element

  breadcrumbTarget = breadcrumbTarget[0];

  if (type == 'primary') {
    // save it
    primaryBreadcrumb = currentTerm; // don't show path of breadcrumb if it is the current path

    if (new URL(breadcrumbUrl).pathname == window.location.pathname) {
      breadcrumbUrl = null;
    } // add breadcrumb


    emblBreadcrumbPrimary.innerHTML += formatBreadcrumb(currentTerm.name_display, breadcrumbUrl); // fetch parents for primary path

    getBreadcrumbParentTerm(breadcrumbParents, facet);
  } else if (type == 'related') {
    // add breadcrumb
    emblBreadcrumbRelated.innerHTML += formatBreadcrumb(currentTerm.name_display, breadcrumbUrl);
  }
}

function emblBreadcrumbs() {
  // We start the breadcrumbs by first getting the EMBL taxonomy.
  // todo: some sort of caching here, perhaps we write to local storage.
  // todo: abstract this out into its own `embl-taxonomy` component?
  emblGetTaxonomy().then(function (response) {
    emblTaxonomy = JSON.parse(response); // Preprocess the emblTaxonomy for some cleanup tasks

    Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), function (termId) {
      var term = emblTaxonomy.terms[termId]; // If `name_display` is not set, use the internal name

      if (term.name_display === '') term.name_display = term.name; // handle null URL

      if (term.url === '') term.url = '#no_url_specified';
    }); // Invoke embl-content-meta-properties function to pull tags from page

    emblBreadcrumbsLookup(emblContentMetaProperties_Read());
  }, function (error) {
    console.warn("Failed to get EMBL ontology", error);
    var emblBreadcrumbTarget = document.querySelectorAll('[data-embl-js-breadcrumbs-lookup]');

    if (emblBreadcrumbTarget.length > 0) {
      emblBreadcrumbTarget[0].innerHTML = '<!-- Breadcrumbs failed to render due to network issue -->';
    }
  });
} // Prepend polyfill for IE
// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md


(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }

    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]); // Run it on default
// emblBreadcrumbs();

/*
 *
 * scripts.css
 * The Visual Framework kitchen sink of JavaScript.
 * Import this as a quick way to get *everything*,
 *
 */


vfBanner();
vfMastheadSetStyle();
vfTabs();
vfTree();
vfFormFloatLabels();
emblContentHub();
emblBreadcrumbs(); // No default invokation