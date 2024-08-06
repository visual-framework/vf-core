// vf-tabs

/**
 * Finds all tabs on a page and activates them
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @param {boolean} [activateDeepLinkOnLoad] - if deep linked tabs should be activated on page load, defaults to true
 * @example vfTabs(document.querySelectorAll('.vf-component__container')[0]);
 */
function vfTabs(scope) {
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  var activateDeepLinkOnLoad = activateDeepLinkOnLoad || true;
  /* eslint-enable no-redeclare */
  // Get relevant elements and collections
  const tabsList = scope.querySelectorAll("[data-vf-js-tabs]");
  const panelsList = scope.querySelectorAll("[data-vf-js-tabs-content]");
  const panels = scope.querySelectorAll(
    "[data-vf-js-tabs-content] [id^='vf-tabs__section']"
  );
  const tabs = scope.querySelectorAll("[data-vf-js-tabs] .vf-tabs__link");

  if (!tabsList || !panels || !tabs) {
    // exit: either tabs or tabbed content not found
    return;
  }
  if (tabsList.length == 0 || panels.length == 0 || tabs.length == 0) {
    // exit: either tabs or tabbed content not found
    return;
  }

  // Add semantics are remove user focusability for each tab
  Array.prototype.forEach.call(tabs, (tab, i) => {
    const tabId = tab.href.split("#")[1]; // calculate an ID based off the tab href (todo: add support for a data-vf-js-tab-id, and if set use that)
    tab.setAttribute("role", "tab");
    tab.setAttribute("id", tabId);
    tab.setAttribute("data-tabs__item", tabId);
    tab.setAttribute("tabindex", "0");
    tab.parentNode.setAttribute("role", "presentation");

    // Reset any active tabs from a previous JS call
    tab.removeAttribute("aria-selected");
    tab.setAttribute("tabindex", "-1");
    tab.classList.remove("is-active");
    // Handle clicking of tabs for mouse users
    tab.addEventListener("click", e => {
      e.preventDefault();
      vfTabsSwitch(e.currentTarget);
    });

    // Handle keydown events for keyboard users
    tab.addEventListener("keydown", e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir =
        e.which === 37
          ? index - 1
          : e.which === 39
            ? index + 1
            : e.which === 40
              ? "down"
              : null;
      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === "down"
          ? panels[i].focus({ preventScroll: true })
          : tabs[dir]
            ? vfTabsSwitch(tabs[dir])
            : void 0;
      }
    });
  });

  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, panel => {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("tabindex", "-1");
    // let id = panel.getAttribute("id");
    panel.setAttribute("aria-labelledby", panel.id);
    panel.hidden = true;
  });

  // Add the tabsList role to the first <ul> in the .tabbed container
  Array.prototype.forEach.call(tabsList, tabsListset => {
    tabsListset.setAttribute("role", "tabsList");
    // Initially activate the first tab
    let firstTab = tabsListset.querySelectorAll(".vf-tabs__link")[0];
    firstTab.removeAttribute("tabindex");
    firstTab.setAttribute("aria-selected", "true");
    firstTab.classList.add("is-active");
  });
  Array.prototype.forEach.call(panelsList, panel => {
    // Initially reveal the first tab panel
    let firstPanel = panel.querySelectorAll(".vf-tabs__section")[0];
    firstPanel.hidden = false;
  });

  // activate any deeplinks to a specific tab
  if (activateDeepLinkOnLoad) {
    Array.prototype.forEach.call(panels, panel => {
      let links = panel.querySelectorAll("[href*='vf-tabs__section']");
      links.forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();
          let href = e.currentTarget.getAttribute("href");
          vfTabsDeepLinkOnLoad(tabs, href);
        });
      });
    });
  }
}

// The tab switching function
const vfTabsSwitch = newTab => {
  // Update url based on tab id

  // get the parent ul of the clicked tab
  let parentTabSet = newTab.closest(".vf-tabs");
  let parentPanelSet = parentTabSet.nextElementSibling;
  let tabs = parentTabSet.querySelectorAll("[data-vf-js-tabs] .vf-tabs__link");
  let panels = parentPanelSet.querySelectorAll(
    "[data-vf-js-tabs-content] [id^='vf-tabs__section']"
  );

  tabs.forEach(tab => {
    if (tab.getAttribute("aria-selected")) {
      tab.removeAttribute("aria-selected");
      tab.setAttribute("tabindex", "-1");
      tab.classList.remove("is-active");

      panels.forEach(panel => {
        if (panel.id === tab.id) {
          panel.hidden = true;
        }
      });
    }
  });

  newTab.focus({ preventScroll: true });
  // Make the active tab focusable by the user (Tab key)
  newTab.removeAttribute("tabindex");
  // Set the selected state
  newTab.setAttribute("aria-selected", "true");
  newTab.classList.add("is-active");
  // Get the indices of the new tab to find the correct
  // tab panel to show
  panels.forEach(panel => {
    if (panel.id === newTab.id) {
      panel.hidden = false;
    }
  });
};

function vfTabsDeepLinkOnLoad(tabs, href) {
  // 1. See if there is a `#vf-tabs__section--88888`
  if (href) {
    var hash = href.substring(href.indexOf("#") + 1);
  } else {
    // No hash found
    return false;
  }
  console.log("vfTabs: will activate tab", hash);

  // 2. loop through all tabs, if a match then activate
  Array.prototype.forEach.call(tabs, tab => {
    let tabId = tab.getAttribute("data-tabs__item");
    if (tabId == hash) {
      vfTabsSwitch(tab);
    }
  });
}

export { vfTabs };
