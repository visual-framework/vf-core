// vf-banner


// Turn the below code snippet into a banner
// <div class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--modal"
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
function vfBannerModalReset(vfBannerCookieNameAndVersion) {
  vfBannerSetCookie(vfBannerCookieNameAndVersion,false);
}

/**
 * Confirm a banner, initiate cookie logging
 */
function vfBannerModalConfirm(banner,vfBannerCookieNameAndVersion) {
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
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x === c_name) {
      return unescape(y);
    }
  }
}



/**
 * Finds all vf-banner--modal on a page and activates them
 * @example vfBannerModal()
 */
function vfBannerModal() {
  const bannerList = document.querySelectorAll('[data-vf-js-banner]');

  if (!bannerList) {
    // exit: banners not found
    return;
  }
  if (bannerList.length == 0) {
    // exit: banner content not found
    return;
  }

  // generate the banner pattern, js events
  Array.prototype.forEach.call(bannerList, (banner, i) => {

    // map the JS data attributes to our object structure
    var bannerRemapped = banner.dataset;
    // pickup text from existing element
    bannerRemapped.vfJsBannerModalText = banner.querySelectorAll('[data-vf-js-banner-modal-text]')[0].innerHTML;

    var uniqueId = Math.round(Math.random()*10000000);

    // set an id to target this banner
    banner.setAttribute('data-vf-js-banner-modal-id',uniqueId);

    // Make the banner come alive
    vfBannerModalInsert(bannerRemapped,uniqueId);
  });

}

/**
 * Takes a banner object and creates the necesary html markup, js events, and inserts
 * @example vfBannerModalInsert()
 * @param {object} [banner]  -
 * @param {string} [bannerModalId] - the id of the target div, `data-vf-js-banner-modal-id="1"`
 */
function vfBannerModalInsert(banner,bannerModalId) {
  var targetBanner = document.querySelectorAll('[data-vf-js-banner-modal-id="'+bannerModalId+'"]')[0];
  if (targetBanner == undefined) {
    return;
  }
  var generatedBannerHtml = '<div class="vf-banner__content | vf-grid">';

  generatedBannerHtml += banner.vfJsBannerModalText;

  // What type of banner?
  if (banner.vfJsBannerState === 'persistent') {
    // nothing more to do for persistent, you can't close it

  } else if (banner.vfJsBannerState === 'dismissible') {
    // nothing more to do for dismissible

  } else if (banner.vfJsBannerState === 'blocking') {
    console.warn('vf-banner--modal: Note, the blocking implementation is not yet feature complete.');
    // escape only works when blocking
    if (banner.vfJsBannerEscClose === 'y' || banner.vfJsBannerEscClose === 'Y') {
      document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
          vfBannerModalConfirm(targetBanner,'null');
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

  // if blocking or dismissible, allow the user to close it, store a cookie (if specified)
  if (banner.vfJsBannerState === 'blocking' || banner.vfJsBannerState === 'dismissible') {

    // prep for cookie
    var vfBannerCookieNameAndVersion = 'null';
    if (banner.vfJsBannerCookieName && banner.vfJsBannerCookieVersion) {
      vfBannerCookieNameAndVersion = banner.vfJsBannerCookieName + '_' + banner.vfJsBannerCookieVersion;

      // console.warn('vf-banner--modal: vfBannerModalReset cookie reset override is on.');
      // vfBannerModalReset(vfBannerCookieNameAndVersion);

      if (vfBannerGetCookie(vfBannerCookieNameAndVersion) === 'true') {
        // banner has been accepted, close
        targetBanner.classList += " vf-u-display-none";
        // exit, nothng more to do
        return;
      }
    }

    // On click: close banner, pass any cooke name (or `null`)
    if (banner.vfJsBannerButtonText) {
      targetBanner.addEventListener('click', function(){
        vfBannerModalConfirm(targetBanner,vfBannerCookieNameAndVersion);
      }, false);
    }
  }
}

vfBannerModal();


// By default this creates banners from HTML
// optionally you can programatically supply
// Target HTML
// `<div class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--modal"
//       data-vf-js-banner
//       data-vf-js-banner-modal-id="32423"
//
// ></div>`
// var programaticalBanner = {
//   vfJsBanner: "",
//   vfJsBannerButtonText: "I agree, dismiss this banner",
//   vfJsBannerCookieName: "MyService",
//   vfJsBannerCookieVersion: "0.1",
//   vfJsBannerExtraButton: "<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>",
//   vfJsBannerModalId: "2352286",
//   vfJsBannerModalText: '<p class="vf-text vf-text--body-l">This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-link" href="JavaScript:Void(0);">Terms Of Use</a>.</p>',
//   vfJsBannerState: "dismissible"
// };
// vfBannerModalInsert(programaticalBanner,'32423');
