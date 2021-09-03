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
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  /* eslint-enable no-redeclare */

  // Get relevant elements and collections
  const treelist = scope.querySelectorAll("[data-vf-js-tree]");
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

  // Get screen-reader only text from root tree node data attributes
  const treeNodeOpenText = treelist[0].dataset.vfJsButtonHiddenOpenText;
  const treeNodeCloseText = treelist[0].dataset.vfJsButtonHiddenCloseText;
  // Receive a target scope and toggle if it is active
  function vfTreeToggleActive(target) {
    let collpasedState = target.dataset["vfJsTree-Collapsed"];

    if (collpasedState === "true") {
      collpasedState = false;
      target.classList.remove("vf-tree--collapsed");
      target.classList.add("vf-tree__item--expanded");
      target.setAttribute("aria-expanded", true);
    } else {
      collpasedState = true;
      target.classList.add("vf-tree--collapsed");
      target.classList.remove("vf-tree__item--expanded");
      target.setAttribute("aria-expanded", false);
    }

    // set screen reader text based on tree state
    target.querySelector("[data-vf-js-tree-button-hidden-text]").innerText = collpasedState ? treeNodeOpenText : treeNodeCloseText;

    target.dataset["vfJsTree-Collapsed"] = collpasedState;
  }

  // Logic to show/hide section of tree
  function vfTreeButtonHandler(target) {
    // if want to only get the direct children matches
    // this future proofs but also adds and edge case, so we won't use for now
    // let targetButton = Array.prototype.filter.call(target.children, function (item) {
    //   return item.matches('[data-vf-js-tree--button]');
    // });

    const targetButton = target.querySelectorAll("[data-vf-js-tree--button]");

    if (targetButton.length == 0) {
      // if no tree buttons found, nothing to do
      return;
    }

    // Handle clicking
    // Target the closest item
    targetButton[0].addEventListener("click", e => {
      console.log(target);
      e.preventDefault();
      vfTreeToggleActive(target);

    });
  }

  // For each treelist section, invoke handlers
  Array.prototype.forEach.call(treelist, (treelistset) => {
    // Handle hide/show for tree sets
    vfTreeButtonHandler(treelistset);
  });
}

// If you need to invoke the component by default
// vfcomponentName();

// By default your component should be usable with js imports
export { vfTree };
