// vf-tabs

/**
 * Finds all tabs on a page and activates them
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @example vfTabs(document.querySelectorAll('.vf-component__container')[0]);
 */
function vfTabs(scope) {
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  /* eslint-enable no-redeclare */
  // Get relevant elements and collections
  const tablist = scope.querySelectorAll("[data-vf-js-tabs]");
  const panelsList = scope.querySelectorAll("[data-vf-js-tabs-content]");
  const panels = scope.querySelectorAll("[data-vf-js-tabs-content] [id^=\"vf-tabs__section\"]");
  const tabs = scope.querySelectorAll("[data-vf-js-tabs] .vf-tabs__link");
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
    let oldTab = parentTabSet.querySelector("[aria-selected]");
    if (oldTab) {
      oldTab.removeAttribute("aria-selected");
      oldTab.setAttribute("tabindex", "-1");
      oldTab.classList.remove("is-active");
      let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
      panels[oldIndex].hidden = true;
    }

    newTab.focus();
    // Make the active tab focusable by the user (Tab key)
    newTab.removeAttribute("tabindex");
    // Set the selected state
    newTab.setAttribute("aria-selected", "true");
    newTab.classList.add("is-active");
    // Get the indices of the new tab to find the correct
    // tab panel to show
    let index = Array.prototype.indexOf.call(tabs, newTab);
    panels[index].hidden = false;
  };

  // Add semantics are remove user focusability for each tab
  Array.prototype.forEach.call(tabs, (tab, i) => {
    tab.setAttribute("role", "tab");
    tab.setAttribute("id", "tab" + (i + 1));
    tab.setAttribute("data-tabs__item", "tab" + (i + 1));
    tab.setAttribute("tabindex", "-1");
    tab.parentNode.setAttribute("role", "presentation");

    // Reset any active tabs from a previous JS call
    tab.removeAttribute("aria-selected");
    tab.setAttribute("tabindex", "-1");
    tab.classList.remove("is-active");

    // Handle clicking of tabs for mouse users
    tab.addEventListener("click", e => {
      e.preventDefault();
      switchTab(e.currentTarget);
    });

    // Handle keydown events for keyboard users
    tab.addEventListener("keydown", e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? "down" : null;
      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === "down" ? panels[i].focus() : tabs[dir] ? switchTab(tabs[dir]) : void 0;
      }
    });
  });

  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, (panel, i) => {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("tabindex", "-1");
    // let id = panel.getAttribute("id");
    panel.setAttribute("aria-labelledby", tabs[i].id);
    panel.hidden = true;
  });

  // Add the tablist role to the first <ul> in the .tabbed container
  Array.prototype.forEach.call(tablist, (tablistset) => {
    tablistset.setAttribute("role", "tablist");
    // Initially activate the first tab
    let firstTab = tablistset.querySelectorAll(".vf-tabs__link")[0];
    firstTab.removeAttribute("tabindex");
    firstTab.setAttribute("aria-selected", "true");
    firstTab.classList.add("is-active");
  });
  Array.prototype.forEach.call(panelsList, (panel) => {
    // Initially reveal the first tab panel
    let firstPanel = panel.querySelectorAll(".vf-tabs__section")[0];
    firstPanel.hidden = false;
  });
}

export { vfTabs };
