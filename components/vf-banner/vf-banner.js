// vf-banner

/**
 * Clear the cooke. This is mostly a development tool.
 */
/* eslint-disable no-unused-vars */
function vfBannerReset(vfBannerCookieNameAndVersion) {
  vfBannerSetCookie(vfBannerCookieNameAndVersion,false);
}
/* eslint-enable no-unused-vars */

/**
 * Dismiss a banner
 */
function vfBannerClose(targetBanner) {

  // remove padding added to not cover up content
  if (targetBanner.classList.contains("vf-banner--fixed")) {
    var height = targetBanner.offsetHeight || 0;
    var pagePadding;
    if (targetBanner.classList.contains("vf-banner--top")) {
      pagePadding = document.body.style.paddingTop.replace(/\D/g,"") || 0;
      pagePadding = pagePadding - height;
      document.body.style.paddingTop = pagePadding+"px";
    }
    if (targetBanner.classList.contains("vf-banner--bottom")) {
      pagePadding = document.body.style.paddingBottom.replace(/\D/g,"") || 0;
      pagePadding = pagePadding - height;
      document.body.style.paddingBottom = pagePadding+"px";
    }
  }

  // dismiss banner
  targetBanner.classList.add("vf-u-display-none");
}

/**
 * Confirm a banner, initiate cookie logging
 */
function vfBannerConfirm(banner,vfBannerCookieNameAndVersion) {
  vfBannerClose(banner);
  if (vfBannerCookieNameAndVersion !== "null") {
    vfBannerSetCookie(vfBannerCookieNameAndVersion,true);
  }
}

/**
 * Log a cookie
 */
function vfBannerSetCookie(c_name, value, exdays) {
  // var value = value || 'true';
  /* eslint-disable no-redeclare */
  var exdays = exdays || 90;
  /* eslint-enable no-redeclare */
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
  var x, y,
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
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  /* eslint-enable no-redeclare */
  const bannerList = scope.querySelectorAll("[data-vf-js-banner]");

  if (!bannerList) {
    // exit: banners not found
    return;
  }
  if (bannerList.length == 0) {
    // exit: banner content not found
    return;
  }

  // generate the banner component, js events
  Array.prototype.forEach.call(bannerList, (banner) => {

    // map the JS data attributes to our object structure
    var bannerRemapped = JSON.parse(JSON.stringify(banner.dataset));

    if (typeof(banner.dataset.vfJsBannerId) != "undefined") {
      // don't reactivate an already processed banner
    } else {
      bannerRemapped.vfJsBannerText = banner.querySelectorAll("[data-vf-js-banner-text]")[0].innerHTML;

      var uniqueId = Math.round(Math.random()*10000000);

      // set an id to target this banner
      banner.setAttribute("data-vf-js-banner-id",uniqueId);

      // preserve the classlist
      bannerRemapped.classList = banner.querySelectorAll("[data-vf-js-banner-text]")[0].classList;

      // Make the banner come alive
      vfBannerInsert(bannerRemapped,uniqueId);
    }

  });

}

/**
 * Takes a banner object and creates the necesary html markup, js events, and inserts
 * @example vfBannerInsert()
 * @param {object} [banner]  -
 * @param {string} [bannerId] - the id of the target div, `data-vf-js-banner-id="1"`
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 */
function vfBannerInsert(banner,bannerId,scope) {
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  /* eslint-enable no-redeclare */
  var targetBanner = scope.querySelectorAll("[data-vf-js-banner-id=\""+bannerId+"\"]")[0];
  if (targetBanner == undefined) {
    return;
  }

  var generatedBannerHtml = "<div class=\""+banner.classList+"\" data-vf-js-banner-text>";

  generatedBannerHtml += banner.vfJsBannerText;

  // What type of banner?
  if (banner.vfJsBannerState === "persistent") {
    // nothing more to do for persistent, you can't close it

  } else if (banner.vfJsBannerState === "dismissible") {
    // nothing more to do for dismissible

  } else if (banner.vfJsBannerState === "blocking") {
    console.warn("vf-banner: Note, the blocking implementation is not yet feature complete.");
    // escape only works when blocking
    if (banner.vfJsBannerEscClose === "y" || banner.vfJsBannerEscClose === "Y") {
      document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
          vfBannerConfirm(targetBanner,"null");
        }
      };
    }
  }

  // Split passed links into buttons
  // <a href='#'>string1</a>\<a href='#'>string2</a>
  if (banner.vfJsBannerExtraButton) {
    var vfBannerExtraButtons = banner.vfJsBannerExtraButton.split("</a>");

    vfBannerExtraButtons.forEach(function(button){
      if (button.length > 1) {
        button += "</a>";
        var newButton = document.createElement("button");
        newButton.innerHTML = button;
        newButton = newButton.firstChild;
        newButton.classList.add("vf-button","vf-button--primary");
        generatedBannerHtml += newButton.outerHTML;
      }
    });
  }

  // if there is a vfJsBannerButtonText and banner is blocking or dismissible,
  // add a button so user can close the banner
  if (banner.vfJsBannerButtonText && (banner.vfJsBannerState === "blocking" || banner.vfJsBannerState === "dismissible")) {
    if (banner.vfJsBannerButtonTheme == "primary") {
      generatedBannerHtml += "<button class=\"vf-button vf-button--primary\" data-vf-js-banner-close>"+banner.vfJsBannerButtonText+"</button>";
    }
    else if (banner.vfJsBannerButtonTheme == "secondary") {
      generatedBannerHtml += "<button class=\"vf-button vf-button--secondary\" data-vf-js-banner-close>"+banner.vfJsBannerButtonText+"</button>";
    }
    else if (banner.vfJsBannerButtonTheme == "tertiary") {
      generatedBannerHtml += "<button class=\"vf-button vf-button--tertiary\" data-vf-js-banner-close>"+banner.vfJsBannerButtonText+"</button>";
    }
    else {
      // default
      generatedBannerHtml += "<button class=\"vf-button vf-button--primary\" data-vf-js-banner-close>"+banner.vfJsBannerButtonText+"</button>";
    }
  }

  generatedBannerHtml += "</div>";

  // set the html of the banner
  targetBanner.innerHTML = generatedBannerHtml;

  // prep for cookie
  var vfBannerCookieNameAndVersion = "null";
  if (banner.vfJsBannerCookieName && banner.vfJsBannerCookieVersion) {
    vfBannerCookieNameAndVersion = banner.vfJsBannerCookieName + "_" + banner.vfJsBannerCookieVersion;
  }

  // utility to reset cookie when developing
  // console.warn('vf-banner: vfBannerReset cookie reset override is on.');
  // vfBannerReset(vfBannerCookieNameAndVersion);

  // if blocking or dismissible, allow the user to close it, store a cookie (if specified)
  if (banner.vfJsBannerState === "blocking" || banner.vfJsBannerState === "dismissible") {
    // On click: close banner, pass any cookie name (or `null`)
    if (banner.vfJsBannerButtonText) {
      targetBanner.querySelectorAll("[data-vf-js-banner-close]")[0].addEventListener("click", function(){
        vfBannerConfirm(targetBanner,vfBannerCookieNameAndVersion);
      }, false);
    }
  }

  // add appropriate padding to the page to not cover up content
  if (targetBanner.classList.contains("vf-banner--fixed")) {
    var height = Number(targetBanner.offsetHeight || 0);
    var pagePadding;
    if (targetBanner.classList.contains("vf-banner--top")) {
      pagePadding = Number(document.body.style.paddingTop.replace(/\D/g,"") || 0);
      pagePadding = pagePadding + height;
      document.body.style.paddingTop = pagePadding+"px";
    }
    if (targetBanner.classList.contains("vf-banner--bottom")) {
      pagePadding = Number(document.body.style.paddingBottom.replace(/\D/g,"") || 0);
      pagePadding = pagePadding + height;
      document.body.style.paddingBottom = pagePadding+"px";
    }
  }

  if (vfBannerCookieNameAndVersion != "null") {
    // if banner has been previously accepted
    if (vfBannerGetCookie(vfBannerCookieNameAndVersion) === "true") {
      // banner has been accepted, close
      vfBannerClose(targetBanner);
      // exit, nothng more to do
      return;
    }

    // if banner is marked as auto-accept, set as read
    if (banner.vfJsBannerAutoAccept == "true") {
      if (banner.vfJsBannerState === "blocking" || banner.vfJsBannerState === "dismissible") {
        vfBannerSetCookie(vfBannerCookieNameAndVersion,true);
      }
    }
  }
}

export { vfBanner };
