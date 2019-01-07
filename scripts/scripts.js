// embl-boilerplate-page

// embl-content-meta-properties

// In addition to being queried by other patterns' JS, this could
// also add classes to a page to affect the overall look of a page.


/**
 * Read metaProperties from existing metaTags and then runs
 * emblContentMetaProperties_Process()
 * @example emblContentMetaProperties_Read()
 */
function emblContentMetaProperties_Read() {
  var metaProperties = {};
  // <!-- Content descriptors -->
  // <meta name="embl:who" content="{{ meta-who }}"> <!-- the people, groups and teams involved -->
  // <meta name="embl:where" content="{{ meta-where }}"> <!-- at which EMBL sites the content applies -->
  // <meta name="embl:what" content="{{ meta-what }}"> <!-- the activities covered -->
  metaProperties.who = metaProperties.who || document.querySelector("meta[name='embl:who']");
  metaProperties.what = metaProperties.what || document.querySelector("meta[name='embl:what']");
  metaProperties.who = metaProperties.who || document.querySelector("meta[name='embl:who']");

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

  emblContentMetaProperties_Process(metaProperties);
}

/**
 * Take any appropriate actions depending on present metaTags
 * @example emblContentMetaProperties_Process()
 * @param {object} [metaProperties] - if you do not have meta tags on the page,
 *                                    you can explicitly pass options
 */
function emblContentMetaProperties_Process(metaProperties) {
  var metaProperties = metaProperties || {a: a, b: b, c: c};

  console.log('readTags',metaProperties)
}

// Process metaProperties
emblContentMetaProperties_Read();

// embl-group-page

// embl-subsite-page

// vf-article-meta-information

// vf-banner

var remove = function(){
  this.closest('.vf-banner--gdpr').remove();
};

var GDPRBanner = document.querySelectorAll('.vf-banner--gdpr');
var GDPRButton = document.querySelectorAll('.vf-banner--gdpr .vf-button');

for (var i = 0, len = GDPRBanner.length; i < len; i++) {
  GDPRButton[i].addEventListener('click', remove, false);
}

// vf-boilerplate-page

// vf-data-protection-banner

var remove = function(){
  this.closest('.vf-data-protection-banner').remove();
};

var GDPRBanner = document.querySelectorAll('.vf-data-protection-banner');
var GDPRButton = document.querySelectorAll('.vf-data-protection-banner__button');

for (var i = 0, len = GDPRBanner.length; i < len; i++) {
  GDPRButton[i].addEventListener('click', remove, false);
}

// vf-footer

// vf-no-js

/**
 * Finds all tabs on a page and activates them
 * @example vfTabs()
 */
function vfTabs() {
  // Get relevant elements and collections
  // todo: `document` here should be a scopped passed param like #mydiv or .my-div
  const tablist = document.querySelectorAll('.vf-tabs__list');
  const tabsSection = "vf-tabs__section--";
  const panelsList = document.querySelectorAll('.vf-tabs-content');
  const panels = document.querySelectorAll('[id^="vf-tabs__section"]');
  const tabs = document.querySelectorAll('.vf-tabs__link');
  if (!tablist || !panels || !tabs) {
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
  }

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


vfTabs();

/*!
 * Float Labels
 * @version: 3.3.5
 * @author: Paul Ryley (http://geminilabs.io)
 * @url: https://geminilabs.github.io/float-labels.js
 * @license: MIT
 */
!function(t,r,e){"use strict";var n=function(t,e){this.t=this.e(t)?r.querySelectorAll(t):[t],this.n=[],this.i=e,this.r=[],this.o(),this.destroy=function(){this.u(function(t){t.removeEventListener("reset",this.events.reset),this.s(t)},function(t){this.a(t)})},this.rebuild=function(){this.u(null,function(t){this.l(t,!0)})}};n.prototype={c:{customEvent:null,customLabel:null,customPlaceholder:null,exclude:".no-label",inputRegex:/email|number|password|search|tel|text|url/,prefix:"fl-",prioritize:"label",requiredClass:"required",style:0,transform:"input,select,textarea"},o:function(){var i=this;i.f(),i.u(function(t,e){var n=i.n[e].style;t.addEventListener("reset",i.events.reset),t.classList.add(i.h("form")),n&&t.classList.add(i.h("style-"+n))},function(t){i.l(t)})},f:function(){var t=this;t.events={blur:t.d.bind(t),change:t.v.bind(t),focus:t.p.bind(t),input:t.v.bind(t),reset:t._.bind(t)}},b:function(t){return t?"add":"remove"},m:function(t){var e=this,n=e.y(t);n&&(t.classList.add(e.h(t.tagName.toLowerCase())),e.L(n,t),e.g(n,t),e.w(n,t),e.x(t,"add"),"function"==typeof e.n[e.S].customEvent&&e.n[e.S].customEvent.call(e,t))},T:function(t,e){var n="string"==typeof t?r.createElement(t):t;for(var i in e=e||{})e.hasOwnProperty(i)&&n.setAttribute(i,e[i]);return n},C:function(){var t=[].slice.call(arguments),n=t[0],i=t.slice(1);return Object.keys(i).forEach(function(t){for(var e in i[t])i[t].hasOwnProperty(e)&&(n[e]=i[t][e])}),n},l:function(t,e){var n=this;if(n.P(t)){if(n.j(t)){if(!0!==e)return;n.a(t)}n.m(t)}},y:function(t){var e='label[for="'+t.getAttribute("id")+'"]',n=this.t[this.S].querySelectorAll(e);return 1<n.length&&(n=t.parentNode.querySelectorAll(e)),1===n.length&&n[0]},q:function(t,e){var n=t.textContent.replace(/[*:]/g,"").trim(),i=e.getAttribute("placeholder");return(!n||n&&i&&"placeholder"===this.n[this.S].prioritize)&&(n=i),n},x:function(e,n){var i=this.events;["blur","input","focus"].forEach(function(t){"input"!==t||"file"!==e.type&&"SELECT"!==e.nodeName||(t="change"),e[n+"EventListener"](t,i[t])})},j:function(t){return t.parentNode.classList.contains(this.h("wrap"))},e:function(t){return"[object String]"===Object.prototype.toString.call(t)},P:function(t){var e="INPUT"===t.tagName&&!this.n[this.S].inputRegex.test(t.getAttribute("type")),n="SELECT"===t.tagName&&null!==t.getAttribute("multiple");return t.getAttribute("id")&&!e&&!n},u:function(t,e){for(var n=this,i=0;i<n.t.length;++i){if(void 0===n.r[i]){var r=n.C({},n.c,n.i,n.t[i].getAttribute("data-options")),o=":not("+r.exclude.split(/[\s,]+/).join("):not(")+")";n.r[i]=r.transform.replace(/,/g,o+",")+o,n.n[i]=r}var u=n.t[i].querySelectorAll(n.r[i]);n.S=i,"function"==typeof t&&t.call(n,n.t[i],i);for(var s=0;s<u.length;++s)"function"==typeof e&&e.call(n,u[s],i)}},d:function(t){t.target.parentNode.classList.remove(this.h("has-focus"))},v:function(t){t.target.parentNode.classList[this.b(t.target.value.length)](this.h("is-active"))},p:function(t){t.target.parentNode.classList.add(this.h("has-focus"))},_:function(){setTimeout(this.F.bind(this))},h:function(t){return this.n[this.S].prefix+t},s:function(t){var e=this.n[this.S].prefix,n=t.className.split(" ").filter(function(t){return 0!==t.lastIndexOf(e,0)});t.className=n.join(" ").trim()},a:function(t){var e=t.parentNode;if(this.j(t)){for(var n=r.createDocumentFragment();e.firstElementChild;){var i=e.firstElementChild;this.s(i),n.appendChild(i)}e.parentNode.replaceChild(n,e),this.O(t),this.x(t,"remove")}},F:function(){for(var t=this,e=t.t[t.S].querySelectorAll(t.r[t.S]),n=0;n<e.length;++n)e[n].parentNode.classList[t.b("SELECT"===e[n].tagName&&""!==e[n].value)](t.h("is-active"))},O:function(t){var e="data-placeholder",n=t.getAttribute(e);null!==n&&(t.removeAttribute(e),t.setAttribute("placeholder",n))},L:function(t,e){var n=this;t.classList.add(n.h("label")),t.textContent=n.q(t,e),"function"==typeof n.n[n.S].customLabel&&(t.textContent=n.n[n.S].customLabel.call(n,t,e))},g:function(t,e){var n=this,i=e.getAttribute("placeholder");"label"!==n.n[n.S].prioritize&&i||(i&&e.setAttribute("data-placeholder",i),i=n.q(t,e)),"function"==typeof n.n[n.S].customPlaceholder&&(i=n.n[n.S].customPlaceholder.call(n,i,e,t)),"SELECT"===e.tagName?n.R(e,i):e.setAttribute("placeholder",i)},R:function(t,e){var n=t.firstElementChild;n.hasAttribute("value")&&n.value?(t.insertBefore(new Option(e,""),n),!1===t.options[t.selectedIndex].defaultSelected&&(t.selectedIndex=0)):n.setAttribute("value",""),""===n.textContent&&(n.textContent=e)},w:function(t,e){var n=this,i=n.T("div",{class:n.h("wrap")+" "+n.h("wrap-"+e.tagName.toLowerCase())});void 0!==e.value&&e.value.length&&i.classList.add(n.h("is-active")),(null!==e.getAttribute("required")||e.classList.contains(n.n[n.S].requiredClass))&&i.classList.add(n.h("is-required")),e.parentNode.insertBefore(i,e),i.appendChild(t),i.appendChild(e)}},"function"==typeof define&&define.amd?define([],function(){return n}):"object"==typeof module&&module.exports?module.exports=n:t.FloatLabels=n}(window,document);
