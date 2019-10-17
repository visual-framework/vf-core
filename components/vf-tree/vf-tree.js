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

  // The tree path switching function
  const activatePath = (newTab) => {
  };

  // Logoic to show/hide whole tree
  Array.prototype.forEach.call(treelist, (treelistset, i) => {

    const treelistsetButton = treelistset.querySelectorAll('[data-vf-js-tree--button]');
    
    if (treelistsetButton.length == 0) {
      // if no tree buttons found, nothing to do
      return;
    }
    
    // Handle clicking of overall tree show/hide
    treelistsetButton[0].addEventListener('click', e => {
      e.preventDefault();

      let collpasedState = treelistset.dataset['vfJsTree-Collapsed'];

      if (collpasedState === 'true') {
        collpasedState = false;
        treelistset.classList.remove('vf-tree--collapsed');
      } else {
        collpasedState = true;
        treelistset.classList.add('vf-tree--collapsed');
      }

      treelistset.dataset['vfJsTree-Collapsed'] = collpasedState;
    });

  });
  
}

// If you need to invoke the component by default
// vfcomponentName();

// By default your component should be usable with js imports
export { vfTree };

