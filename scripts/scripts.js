'use strict';

// vf-banner


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
function vfBannerReset(vfBannerCookieNameAndVersion) {
  vfBannerSetCookie(vfBannerCookieNameAndVersion,false);
}

/**
 * Confirm a banner, initiate cookie logging
 */
function vfBannerConfirm(banner,vfBannerCookieNameAndVersion) {
  banner.classList += " vf-u-display-none";
  if (vfBannerCookieNameAndVersion !== 'null') {
    vfBannerSetCookie(vfBannerCookieNameAndVersion,true);
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
  const bannerList = scope.querySelectorAll('[data-vf-js-banner]');

  if (!bannerList) {
    // exit: banners not found
    return;
  }
  if (bannerList.length == 0) {
    // exit: banner content not found
    return;
  }

  // generate the banner component, js events
  Array.prototype.forEach.call(bannerList, (banner, i) => {

    // map the JS data attributes to our object structure
    var bannerRemapped = JSON.parse(JSON.stringify(banner.dataset));

    if (typeof(banner.dataset.vfJsBannerId) != "undefined") {
      // don't reactivate an already processed banner
    } else {
      bannerRemapped.vfJsBannerText = banner.querySelectorAll('[data-vf-js-banner-text]')[0].innerHTML;

      var uniqueId = Math.round(Math.random()*10000000);

      // set an id to target this banner
      banner.setAttribute('data-vf-js-banner-id',uniqueId);

      // preserve the classlist
      bannerRemapped.classList = banner.querySelectorAll('[data-vf-js-banner-text]')[0].classList;

      // Make the banner come alive
      vfBannerInsert(bannerRemapped,uniqueId);
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
function vfBannerInsert(banner,bannerId,scope) {
  var scope = scope || document;
  var targetBanner = scope.querySelectorAll('[data-vf-js-banner-id="'+bannerId+'"]')[0];
  if (targetBanner == undefined) {
    return;
  }

  var generatedBannerHtml = '<div class="'+banner.classList+'" data-vf-js-banner-text>';

  generatedBannerHtml += banner.vfJsBannerText;

  // What type of banner?
  if (banner.vfJsBannerState === 'persistent') {
    // nothing more to do for persistent, you can't close it

  } else if (banner.vfJsBannerState === 'dismissible') {
    // nothing more to do for dismissible

  } else if (banner.vfJsBannerState === 'blocking') {
    console.warn('vf-banner: Note, the blocking implementation is not yet feature complete.');
    // escape only works when blocking
    if (banner.vfJsBannerEscClose === 'y' || banner.vfJsBannerEscClose === 'Y') {
      document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
          vfBannerConfirm(targetBanner,'null');
        }
      };
    }
  }

  // Split passed links into buttons
  // <a href='#'>string1</a>\<a href='#'>string2</a>
  if (banner.vfJsBannerExtraButton) {
    var vfBannerExtraButtons = banner.vfJsBannerExtraButton.split('</a>');

    vfBannerExtraButtons.forEach(function(button){
      if (button.length > 1) {
        button += '</a>';
        var newButton = document.createElement('button');
        newButton.innerHTML = button;
        newButton = newButton.firstChild;
        newButton.classList = 'vf-button vf-button--primary';
        generatedBannerHtml += newButton.outerHTML;
      }
    });
  }

  // if there is a vfJsBannerButtonText and banner is blocking or dismissible,
  // add a button so user can close the banner
  if (banner.vfJsBannerButtonText && (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible')) {
    generatedBannerHtml += '<button class="vf-button vf-button--secondary" data-vf-js-banner-close>'+banner.vfJsBannerButtonText+'</button>';
  }

  generatedBannerHtml += '</div>';

  // set the html of the banner
  targetBanner.innerHTML = generatedBannerHtml;

  // prep for cookie
  var vfBannerCookieNameAndVersion = 'null';
  if (banner.vfJsBannerCookieName && banner.vfJsBannerCookieVersion) {
    vfBannerCookieNameAndVersion = banner.vfJsBannerCookieName + '_' + banner.vfJsBannerCookieVersion;
  }

  // utility to reset cookie when developing
  // console.warn('vf-banner: vfBannerReset cookie reset override is on.');
  // vfBannerReset(vfBannerCookieNameAndVersion);

  // if blocking or dismissible, allow the user to close it, store a cookie (if specified)
  if (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible') {
    // On click: close banner, pass any cooke name (or `null`)
    if (banner.vfJsBannerButtonText) {
      targetBanner.addEventListener('click', function(){
        vfBannerConfirm(targetBanner,vfBannerCookieNameAndVersion);
      }, false);
    }
  }

  if (vfBannerCookieNameAndVersion != "null") {
    // if banner has been previously accepted
    if (vfBannerGetCookie(vfBannerCookieNameAndVersion) === 'true') {
      // banner has been accepted, close
      targetBanner.classList += " vf-u-display-none";
      // exit, nothng more to do
      return;
    }

    // if banner is marked as auto-accept, set as read
    if (banner.vfJsBannerAutoAccept == "true") {
      if (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible') {
        vfBannerSetCookie(vfBannerCookieNameAndVersion,true);
      }
    }

  }

}

// By default this creates banners from HTML
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
  const vfMastheads = document.querySelectorAll('[data-vf-js-masthead]');
  if (vfMastheads[0]) {
    let el = vfMastheads[0];
    let bannerBG = getComputedStyle(el).getPropertyValue('--vf-masthead__bg-image');
    let filename = bannerBG.substr(0, bannerBG.lastIndexOf('.')) || bannerBG;
    let hexcode = filename.substr(filename.length - 6);
    let bannerBGC = "#" + hexcode;
    let regHex = /[0-9A-Fa-f]{6}/g;
    let threshold = 130; // about half of 256. Lower threshold equals more dark text on dark background
    let cBrightness = 255; // default to above the threshold

    if (regHex.test(hexcode)) {

      if (!bannerBGC) return;

      bannerBGC = bannerBGC.trim();

      function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
      function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
      function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
      function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}

      function getCorrectTextColor(hex){
        let hRed = hexToR(hex);
        let hGreen = hexToG(hex);
        let hBlue = hexToB(hex);
        return ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
      }

      cBrightness = getCorrectTextColor(bannerBGC);

      if (cBrightness > threshold){
        el.style.setProperty('--vf-masthead__color--foreground', "#000000");
      } else if (cBrightness < threshold) {
        el.style.setProperty('--vf-masthead__color--foreground', "#FFFFFF");
      }
    }
  }
};

// vf-tabs

/**
 * Finds all tabs on a page and activates them
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @example vfTabs(document.querySelectorAll('.vf-component__container')[0]);
 */
function vfTabs(scope) {
  var scope = scope || document;
  // Get relevant elements and collections
  const tablist = scope.querySelectorAll('[data-vf-js-tabs]');
  const panelsList = scope.querySelectorAll('[data-vf-js-tabs-content]');
  const panels = scope.querySelectorAll('[data-vf-js-tabs-content] [id^="vf-tabs__section"]');
  const tabs = scope.querySelectorAll('[data-vf-js-tabs] .vf-tabs__link');
  if (!tablist || !panels || !tabs) {
    // exit: either tabs or tabbed content not found
    return;
  }
  if (tablist.length == 0 || panels.length == 0 || tabs.length == 0) {
    // exit: either tabs or tabbed content not found
    return;
  }

  // The tab switching function
  const switchTab = (newTab) => {

    // get the parent ul of the clicked tab
    let parentTabSet = newTab.closest(".vf-tabs__list");
    let oldTab = parentTabSet.querySelector('[aria-selected]');
    if (oldTab) {
      oldTab.removeAttribute('aria-selected');
      oldTab.setAttribute('tabindex', '-1');
      oldTab.classList.remove('is-active');
      let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
      panels[oldIndex].hidden = true;
    }

    newTab.focus();
    // Make the active tab focusable by the user (Tab key)
    newTab.removeAttribute('tabindex');
    // Set the selected state
    newTab.setAttribute('aria-selected', 'true');
    newTab.classList.add('is-active');
    // Get the indices of the new tab to find the correct
    // tab panel to show
    let index = Array.prototype.indexOf.call(tabs, newTab);
    panels[index].hidden = false;
  };

  // Add semantics are remove user focusability for each tab
  Array.prototype.forEach.call(tabs, (tab, i) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', 'tab' + (i + 1));
    tab.setAttribute('data-tabs__item', 'tab' + (i + 1));
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation');

    // Reset any active tabs from a previous JS call
    tab.removeAttribute('aria-selected');
    tab.setAttribute('tabindex', '-1');
    tab.classList.remove('is-active');

    // Handle clicking of tabs for mouse users
    tab.addEventListener('click', e => {
      e.preventDefault();
      switchTab(e.currentTarget);
    });

    // Handle keydown events for keyboard users
    tab.addEventListener('keydown', e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(tabs[dir]) : void 0;
      }
    });
  });

  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, (panel, i) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    let id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  });

  // Add the tablist role to the first <ul> in the .tabbed container
  Array.prototype.forEach.call(tablist, (tablistset, i) => {
    tablistset.setAttribute('role', 'tablist');
    // Initially activate the first tab
    let firstTab = tablistset.querySelectorAll('.vf-tabs__link')[0];
    firstTab.removeAttribute('tabindex');
    firstTab.setAttribute('aria-selected', 'true');
    firstTab.classList.add('is-active');
  });
  Array.prototype.forEach.call(panelsList, (panel, i) => {
    // Initially reveal the first tab panel
    let firstPanel = panel.querySelectorAll('.vf-tabs__section')[0];
    firstPanel.hidden = false;
  });
}

// vf-tree

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
  var scope = scope || document;

  // Get relevant elements and collections
  const treelist = scope.querySelectorAll('[data-vf-js-tree]');
  // const panelsList = scope.querySelectorAll('[data-vf-js-tabs-content]');
  // const panels = scope.querySelectorAll('[data-vf-js-tabs-content] [id^="vf-tabs__section"]');
  // const tabs = scope.querySelectorAll('[data-vf-js-tabs] .vf-tabs__link');
  // if (!tablist || !panels || !tabs) {
  if (!treelist ) {
    // exit: either trees or tabbed content not found
    return;
  }
  // if (tablist.length == 0 || panels.length == 0 || tabs.length == 0) {
  if (treelist.length == 0 ) {
    // exit: either trees or tabbed content not found
    return;
  }

  // Receive a target scope and toggle if it is active
  function vfTreeToggleActive(target) {
    let collpasedState = target.dataset['vfJsTree-Collapsed'];

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
  }

  // Logic to show/hide section of tree
  function vfTreeButtonHandler(target) {
    // if want to only get the direct children matches
    // this future proofs but also adds and edge case, so we won't use for now
    // let targetButton = Array.prototype.filter.call(target.children, function (item) {
    //   return item.matches('[data-vf-js-tree--button]');
    // });

    const targetButton = target.querySelectorAll('[data-vf-js-tree--button]');
    
    if (targetButton.length == 0) {
      // if no tree buttons found, nothing to do
      return;
    }

    // Handle clicking
    // Target the closest item
    targetButton[0].addEventListener('click', e => {
      console.log(target);
      e.preventDefault();
      vfTreeToggleActive(target);
    });
  }

  // For each treelist section, invoke handlers
  Array.prototype.forEach.call(treelist, (treelistset, i) => {
    // Handle hide/show for tree sets
    vfTreeButtonHandler(treelistset);
  });
}

// vf-form__float-labels

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
    if(!self.dataset.inputOf && !!self.value) {
      addFloatLabel(self);
    } else {
      var label = document.querySelector('#' + self.dataset.inputOf);
      if (!self.value && !!label) {
        setTimeout(function(){
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
    if(!sibling) {
      parent.appendChild(div);
    }
    else {
      parent.insertBefore(div, sibling);
    }
  }

  let floatLabels = document.querySelectorAll('[data-vf-js-form-floatlabel]');
  var inputs = [].slice.call(floatLabels);

  for(var i in inputs) {
    wrapElement(inputs[i]);
    if(!!inputs[i].value) {
      addFloatLabel(inputs[i]);
    }
    inputs[i].classList.add('vf-form__floatlabel');
    // .vf-form__floatlabel
    inputs[i].addEventListener('keyup', floatLabelKeyUp);
  }

  function checkEmail(str) {
    var errorElem =  document.getElementById('error');
    // email regex
    var re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(str)) {
      if (document.getElementById('email-error')) {
       // do nothing
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
    let canSubmit = true;
    let emailcheck = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailField = document.getElementById('username').value;
    const passwordField = document.forms['loginform'].querySelector('.form__input--password').value;
    if(!emailcheck.test(emailField)) {
      canSubmit = false;
    }
    if(passwordField.length < 5) {
      canSubmit = false;
    }
    if (canSubmit) {
      document.forms['loginform'].querySelector('.mt-b-button__item').disabled = false;
    } else {
      document.forms['loginform'].querySelector('.mt-b-button__item').disabled = true;
    }
  }

}

// embl-content-hub-loader__html-imports

// A trimmed down version of
// https://github.com/AshleyScirra/html-imports-polyfill/blob/master/htmlimports.js
// mostly we dropped CSS and sub-imports

function emblContentHubLoaderHtmlImports() {
	// Map a script URL to its import document for GetImportDocument()
	const scriptUrlToImportDoc = new Map();

	function GetPathFromURL(url)
	{
		if (!url.length)
			return url;		// empty string

		const lastCh = url.charAt(url.length - 1);
		if (lastCh === "/" || lastCh === "\\")
			return url;		// already a path terminated by slash

		let last_slash = url.lastIndexOf("/");

		if (last_slash === -1)
			last_slash = url.lastIndexOf("\\");

		if (last_slash === -1)
			return "";			// neither slash found, assume no path (e.g. "file.ext" returns "" as path)

		return url.substr(0, last_slash + 1);
	};

	// Determine base URL of document.
	const baseElem = document.querySelector("base");
	let baseHref = ((baseElem && baseElem.hasAttribute("href")) ? baseElem.getAttribute("href") : "");

	// If there is a base href, ensure it is of the form 'path/' (not '/path', 'path' etc)
	if (baseHref)
	{
		if (baseHref.startsWith("/"))
			baseHref = baseHref.substr(1);

		if (!baseHref.endsWith("/"))
			baseHref += "/";
	}

	function GetBaseURL()
	{
		return GetPathFromURL(location.origin + location.pathname) + baseHref;
	};

	function FetchAs(url, responseType)
	{
		return new Promise((resolve, reject) =>
		{
			const xhr = new XMLHttpRequest();
			xhr.onload = (() =>
			{
				if (xhr.status >= 200 && xhr.status < 300)
				{
					resolve(xhr.response);
				}
				else
				{
					reject(new Error("Failed to fetch '" + url + "': " + xhr.status + " " + xhr.statusText));
				}
			});
			xhr.onerror = reject;

			xhr.open("GET", url);
			xhr.responseType = responseType;
			xhr.send();
		});
	}


	function _AddImport(url, preFetchedDoc, rootContext, progressObject)
	{
		let isRoot = false;

		// The initial import creates a root context, which is passed along to all sub-imports.
		if (!rootContext)
		{
			isRoot = true;
			rootContext = {
				alreadyImportedUrls: new Set(),		// for deduplicating imports
				stylePromises: [],
				scriptPromises: [],
				progress: (progressObject || {})	// progress written to this object (loaded, total)
			};

			rootContext.progress.loaded = 0;
			rootContext.progress.total = 1;			// add root import
		}

		// Each import also tracks its own state with its own context.
		const context = {
			importDoc: null,
			baseUrl: GetPathFromURL(url),
			dependencies: []
		};

		// preFetchedDoc is passed for sub-imports which pre-fetch their documents as an optimisation. If it's not passed,
		// fetch the URL to get the document.
		let loadDocPromise;

		if (preFetchedDoc)
			loadDocPromise = Promise.resolve(preFetchedDoc);
		else
			loadDocPromise = FetchAs(url, "document");

		return loadDocPromise
		.then(doc =>
		{
			// HACK: in Edge, due to this bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12458748/
			// the fetched document URL is incorrect. doc.URL is also read-only so cannot directly be assigned. To work around this,
			// calculate the correct URL and use Object.defineProperty to override the returned document URL.
			Object.defineProperty(doc, "URL", {
				value: new URL(url, GetBaseURL()).toString()
			});

			// we don't need the `body` wrapper, so return the first child
			return doc.body.firstChild;
		})
	}

	function AddImport(url, async, progressObject)
	{
		// Note async attribute ignored (was only used for old native implementation).
		return _AddImport(url, null, null, progressObject);
	}

	window["addImport"] = AddImport;
}

// embl-conditional-edit

/**
 * Invoke emblConditionalEditDetectParam scopped to objects where
 * data-embl-js-conditional-edit is present
 * This will be dynamically run once emblContentHubSignalFinished is triggered.
 */
function emblConditionalEdit() {
  const emblConditionalEditItems = document.querySelectorAll('[data-embl-js-conditional-edit]');
  if (!emblConditionalEditItems) {
    // exit: lists not found
    return;
  }
  if (emblConditionalEditItems.length == 0) {
    // exit: lists not found
    return;
  }

  Array.prototype.forEach.call(emblConditionalEditItems, (element, i) => {
    emblConditionalEditDetectParam(location.href,element);
  });
}

/**
 * Detects `?embl-conditional-edit=enabled` or `?embl-conditional-edit=1` or ?embl-conditional-edit=true`
 * and adds `.embl-coditional-edit__enabled` to display the edit links
 * @param {string} [url] - the url to check for an enabling param
 * @param {element} [element] - the scopped element to be processed
 */
function emblConditionalEditDetectParam(url,element) {
  var captured = /embl-conditional-edit=([^&]+)/.exec(url);
  if (captured == null) {
    // value not found

    // also try against any parent iframe url
    if (window.self !== window.top) {
      emblConditionalEditDetectParam(parent.window.location,element);
    }

    return;
  }
  captured = captured[1];

  if (captured == '1' || captured == 'enabled' || captured == 'true') {
    element.className += ' ' + 'embl-coditional-edit__enabled';
  }
}

// embl-content-hub-loader__fetch

/**
 * Fetch html links from content.embl.org
 */
function emblContentHubFetch() {

  // Some JS utilities
  // via https://stackoverflow.com/a/32135318
  Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
  },false;
  Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
  },false;


  /**
   * Get the number of days between two dates.
   */
  function days_between(date1, date2) {
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY) + 1;
  }

  // A list of all the links
  var emblContentHubLinks = document.querySelectorAll('[data-embl-js-content-hub-loader]');
  var emblContentHubLinkLoadingProgress = {};
  var emblContentHubShowTimers = false;

  // Handle the import of each element
  for (var i = 0; i < emblContentHubLinks.length; ++i) {
    (function () {
      var linkPosition = i;

      // track time it takes for link to be shown
      if (emblContentHubShowTimers) { console.time('timer for import ' + linkPosition); }

      // await the load of the html import from the polyfill 
      // note: we use polyfill in all cases; see https://github.com/visual-framework/vf-core/issues/508
      emblContentHubAwaitLoading(emblContentHubLinks[linkPosition],linkPosition);
    }());
  }

  // Add a class to the body once the last item has been processed
  function emblContentHubSignalFinished() {
    document.querySelectorAll('body')[0].classList.add('embl-content-hub-loaded');

    // if the JS to run embl-conditional-edit is present, run it now
    if (typeof emblConditionalEdit === "function") {
      emblConditionalEdit();
    }
  }

  // Dispatch load to the pollyfill
  function emblContentHubAwaitLoading(targetLink,position) {
    // Docs: https://github.com/AshleyScirra/html-imports-polyfill#usage
    addImport(targetLink.href, null, emblContentHubLinkLoadingProgress).then(function(value) {
      emblContentHubGrabTheContent(targetLink,position,value);

      if (position+1 == emblContentHubLinks.length) {
        emblContentHubSignalFinished();
      }
    });
  }

  // Generate a unique ID for the target element on the page
  function emblContentHubGenerateID(position) {
    return 'contentDbItem' + ('0000' + position).slice(-5);
  }

  // Show the remote content
  function emblContentHubGrabTheContent(targetLink,position,exportedContent) {

    // pickup the "meat" of the exported content
    exportedContent = exportedContent || targetLink.import.querySelector('.vf-content-hub-html');

    // make sure we have something
    if (!exportedContent) {
      console.log('No content found for this import, exiting. The import may have already been preformed.', targetLink);
      return;
    }

    // if there is just one child element and it is a div, use that
    // (this helps with css grid layout)
    if (exportedContent.childElementCount === 1 &&
        exportedContent.firstElementChild.innerHTML.trimLeft().substr(0,4) === '<div'
       ) {
      exportedContent = exportedContent.firstElementChild;
      exportedContent.classList.add('vf-content-hub-html');
      exportedContent.classList.add('vf-content-hub-html__derived-div');
    }

    var contentID = emblContentHubGenerateID(position);

    // where does the content go?
    if (targetLink.dataset.target === 'self') {
      // if element already exists, remove it
      var oldElement = document.getElementById(contentID);
      if (oldElement) {
        oldElement.innerHTML = exportedContent.innerHTML;
      } else {
        // give content an ID
        exportedContent.setAttribute("id", contentID);
        exportedContent.classList.add(contentID);
        // just insert the new content
        exportedContent.appendAfter(targetLink);
      } // end if oldElement
    } else {
      var targetLocation = document.querySelector('.'+targetLink.dataset.target);
      // exportedContent.appendAfter(targetLocation);
      targetLocation.classList.add(contentID);
      targetLocation.innerHTML = exportedContent.innerHTML;
    }

    // display how long it took to load
    if (emblContentHubShowTimers) { console.timeEnd('timer for import ' + position); }

    emblContentHubAssignClasses(targetLink,position);
    emblContentHubUpdateDatesFormat(position);

    // run JS for some components on content, if they exist
    if (typeof(vfBanner) === 'function') {
      vfBanner(targetLocation);
    }
    if (typeof(vfTabs) === 'function') {
      vfTabs(targetLocation);
    }
    // don't run breadcrumbs as part of contenthub, use case is different
    // if (typeof(emblBreadcrumbs) === 'function') {
    //   emblBreadcrumbs(); // no scope for emblBreadcrumbs
    // }
  }

  // Enable class injection after loading contents
  // ... for all those edge cases
  // Background: https://gitlabci.ebi.ac.uk/emblorg/backlog/issues/82
  // Sample:
  //  <link rel="import" href="url" data-target="self"
  //        data-inject-class="vf-grid vf-grid__col-2"
  //        data-inject-class-target="ul"
  //        data-embl-js-content-hub-loader>
  //  This would make the ul a two-column grid.
  function emblContentHubAssignClasses(targetLink,position) {
    // var injectRequests = document.querySelectorAll('[data-inject-class][data-inject-class-target]');
    //
    // for (var i = 0; i < injectRequests.length; ++i) {

    var classesToInject = targetLink.getAttribute('data-inject-class');
    var targetSelectorToInject = targetLink.getAttribute('data-inject-class-target');

    if (classesToInject && targetSelectorToInject) {
      // Limit scope to the imported element
      var targetElement = document.querySelector('.'+emblContentHubGenerateID(position)).querySelector(targetSelectorToInject);

      // We can't inject space separated classes to we need to split it into arrays and add one by one.
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
    var dateRemainingList = document.querySelector('.'+emblContentHubGenerateID(position)).querySelectorAll('.date-days-remaining');
    var todayDate = new Date();
    if (dateRemainingList.length > 0) {
      for (let dateRemainingIndex = 0; dateRemainingIndex < dateRemainingList.length; dateRemainingIndex++) {
        var dateValue = parseInt(dateRemainingList[dateRemainingIndex].getAttribute('data-datetime')) * 1000;
        dateValue = new Date(dateValue);
        var numberOfDiffDays = days_between(dateValue, todayDate);
        // Update to 'Closes in 6 Days.' format if number of days is less than 30 days.
        if (numberOfDiffDays < 30 && numberOfDiffDays > 1) {
          dateRemainingList[dateRemainingIndex].innerHTML =  'Closes in ' + '<span>' + numberOfDiffDays + ' Days.</span>';
        }

        if (numberOfDiffDays == 1) {
          dateRemainingList[dateRemainingIndex].innerHTML =  'Closes in ' + '<span>' + numberOfDiffDays + ' Day.</span>';
        }
      }
    }
  }

}

// embl-content-hub-loader

function emblContentHub() {

  // 1. make sure we have imports or a pollyfill
  emblContentHubLoaderHtmlImports();

  // 2. import the content
  emblContentHubFetch();
}

// embl-content-meta-properties

// In addition to being queried by other components' JS, this could
// also add classes to a page to affect the overall look of a page.


/**
 * Read metaProperties from page's metatags
 * @example emblContentMetaProperties_Read()
 */
function emblContentMetaProperties_Read() {
  var metaProperties = {};
  // <!-- Content descriptors -->
  // <meta name="embl:who" content="{{ meta-who }}"> <!-- the people, groups and teams involved -->
  // <meta name="embl:what" content="{{ meta-what }}"> <!-- the activities covered -->
  // <meta name="embl:where" content="{{ meta-where }}"> <!-- at which EMBL sites the content applies -->
  // <meta name="embl:active" content="{{ meta-active }}"> <!-- which of the who/what/where is active -->
  metaProperties.who = metaProperties.who || document.querySelector("meta[name='embl:who']");
  metaProperties.what = metaProperties.what || document.querySelector("meta[name='embl:what']");
  metaProperties.where = metaProperties.where || document.querySelector("meta[name='embl:where']");
  metaProperties.active = metaProperties.active || document.querySelector("meta[name='embl:active']");

  // <!-- Content role -->
  // <meta name="embl:utility" content="-8"> <!-- if content is task and work based or if is meant to inspire -->
  // <meta name="embl:reach" content="-5"> <!-- if content is externally (public) or internally focused (those that work at EMBL) -->
  metaProperties.utility = metaProperties.utility || document.querySelector("meta[name='embl:utility']");
  metaProperties.reach = metaProperties.reach || document.querySelector("meta[name='embl:reach']");

  // <!-- Page infromation -->
  // <meta name="embl:maintainer" content="{{ meta-maintainer }}"> <!-- the contact person or group responsible for the page -->
  // <meta name="embl:last-review" content="{{ meta-last-review }}"> <!-- the last time the page was reviewed or updated -->
  // <meta name="embl:review-cycle" content="{{ meta-review-cycle }}"> <!-- how long in days before the page should be checked -->
  // <meta name="embl:expiry" content="{{ meta-expiry }}"> <!-- if there is a fixed point in time when the page is no longer relevant -->
  metaProperties.maintainer = metaProperties.maintainer || document.querySelector("meta[name='embl:maintainer']");
  metaProperties.lastReview = metaProperties.lastReview || document.querySelector("meta[name='embl:last-review']");
  metaProperties.reviewCycle = metaProperties.reviewCycle || document.querySelector("meta[name='embl:review-cycle']");
  metaProperties.expiry = metaProperties.expiry || document.querySelector("meta[name='embl:expiry']");

  for(var key in metaProperties) {
    if (metaProperties[key] != null && metaProperties[key].getAttribute("content").length != 0) {
      metaProperties[key] = metaProperties[key].getAttribute("content");
    } else {
      metaProperties[key] = 'notSet';
    }
  }

  return metaProperties;
}

// embl-breadcrumbs-lookup

// to hold the EMBL taxonomy
var emblTaxonomy = {};

// placeholders for our new breadcrumbs
var emblBreadcrumbPrimary = document.createElement("ul");
    emblBreadcrumbPrimary.classList.add('vf-breadcrumbs__list','vf-list','vf-list--inline');
var emblBreadcrumbRelated = document.createElement("ul");
    emblBreadcrumbRelated.classList.add('vf-breadcrumbs__list','vf-breadcrumbs__list--related','vf-list','vf-list--inline');

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

  var majorFacets = ['who','what','where'];

  for (var i = 0; i < majorFacets.length; i++) {
    if (majorFacets[i] == metaProperties.active) {
      emblBreadcrumbAppend(emblBreadcrumbTarget,metaProperties[majorFacets[i]],majorFacets[i],'primary');
    } else {
      // do the related paths
      emblBreadcrumbAppend(emblBreadcrumbTarget,metaProperties[majorFacets[i]],majorFacets[i],'related');
    }
  }

  // make a 'related' label
  var relatedLabel = document.createElement("span");
      relatedLabel.innerHTML = 'Related:';
      relatedLabel.classList.add('vf-breadcrumbs__heading');

  // now that we've processed all the meta properties, insert our rendered breadcrumbs
  emblBreadcrumbTarget[0].innerHTML = emblBreadcrumbPrimary.outerHTML + relatedLabel.outerHTML + emblBreadcrumbRelated.outerHTML;
}

/**
 * Get the EMBL taxonomy json from the ContentHub
 * @example emblGetTaxonomy()
 * @param {string} [url] - URL to pull the taxonomy from
 */
function emblGetTaxonomy(url) {
  var url = url || 'https://dev.beta.embl.org/api/v1/pattern.json?pattern=embl-ontology&source=contenthub';

  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Error loading ontology"));

    };

    // Make the request
    req.send();
  });

}

/**
 * Receive a term and its context and create a breadcrumb
 * @example emblBreadcrumbAppend(breadcrumbTarget,term,facet,type)
 * @param {dom elements} [breadcrumbTarget]  - elements with data-embl-js-breadcrumbs-lookup
 * @param {string} [termName]  - the taxonomy item found, e.g. `Cancer`
 * @param {string} [facet] - the facet of the taxonomy (`who`, `what` or `where`)
 * @param {string} [type]  - if this is a `primary` or `related` path
 */
function emblBreadcrumbAppend(breadcrumbTarget,termName,facet,type) {
  // console.log('Processing breadcrumb for:', termName + ', ' + facet + ', ' + type);

  function getCurrentTerm(termName) {
    if (termName === 'EMBL') termName = 'All EMBL sites'; // hack as we're not using IDs

    var termObject;

    Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), (termId) => {
      let term = emblTaxonomy.terms[termId];
      if (term.name === termName) {
        termObject = term;
        return; //exit
      }
    });

    // we never want to return undefined
    if (termObject == undefined || termObject == null) {
      console.warn('embl-js-breadcumbs-lookup: No matching breadcrumb found for `' + termName + '`; Will use a simple unlinked term.');
      termObject = {};
      termObject.name_display = termName;
      termObject.uuid = 'null';
      termObject.uuid = [];
      termObject.url = '#addBreadcrumbPatternForSimpleTerms';
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
  function getBreadcrumbParentTerm(parents,facet) {
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
        emblBreadcrumbPrimary.innerHTML = formatBreadcrumb(activeParent.name_display,activeParent.url) + emblBreadcrumbPrimary.innerHTML;
      }

      // get parents of parent
      if (activeParent.parents) {
        getBreadcrumbParentTerm(activeParent.parents,facet);
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
  function formatBreadcrumb(termName,breadcrumbUrl) {
    var newBreadcrumb = '<li class="vf-breadcrumbs__item">';
    if (breadcrumbUrl && breadcrumbUrl !== 'null' && breadcrumbUrl !== '#no_url_specified') {
      newBreadcrumb += '<a href="'+breadcrumbUrl+'" class="vf-breadcrumbs__link">' + termName + '</a>';
    } else {
      newBreadcrumb += termName;
    }
    newBreadcrumb += '</li>';

    return newBreadcrumb;
  }

  var currentTerm = getCurrentTerm(termName);
  var breadcrumbId = currentTerm.uuid,
      breadcrumbUrl = currentTerm.url || '#addFunctionForBreadcrumbPatternForSimpleTerms',
      breadcrumbParents = currentTerm.parents;

  // narrow down to the first matching element
  breadcrumbTarget = breadcrumbTarget[0];

  if (type == 'primary') {

    // don't show path of breadcrumb if it is the current path
    if (new URL(breadcrumbUrl).pathname == window.location.pathname) {
      breadcrumbUrl = null;
    }

    // add breadcrumb
    emblBreadcrumbPrimary.innerHTML += formatBreadcrumb(currentTerm.name_display,breadcrumbUrl);

    // fetch parents for primary path
    getBreadcrumbParentTerm(breadcrumbParents, facet);
  } else if (type == 'related') {
    // add breadcrumb
    emblBreadcrumbRelated.innerHTML += formatBreadcrumb(currentTerm.name_display,breadcrumbUrl);
  }

}

function emblBreadcrumbs() {
  // We start the breadcrumbs by first getting the EMBL taxonomy.
  // todo: some sort of caching here, perhaps we write to local storage.
  // todo: abstract this out into its own `embl-taxonomy` component?
  emblGetTaxonomy().then(function(response) {
    emblTaxonomy = JSON.parse(response);

    // Preprocess the emblTaxonomy for some cleanup tasks
    Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), (termId) => {
      let term = emblTaxonomy.terms[termId];
      // If `name_display` is not set, use the internal name
      if (term.name_display === '') term.name_display = term.name;
      // handle null URL
      if (term.url === '') term.url = '#no_url_specified';
    });

    // Invoke embl-content-meta-properties function to pull tags from page
    emblBreadcrumbsLookup(emblContentMetaProperties_Read());

  }, function(error) {
    console.warn("Failed to get EMBL ontology", error);
    var emblBreadcrumbTarget = document.querySelectorAll('[data-embl-js-breadcrumbs-lookup]');
    if (emblBreadcrumbTarget.length > 0) {
      emblBreadcrumbTarget[0].innerHTML = '<!-- Breadcrumbs failed to render due to network issue -->';
    }
  });
}


// Prepend polyfill for IE
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
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

// Run it on default
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
emblBreadcrumbs();
// No default invokation
