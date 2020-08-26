// vf-show-more

/**
 * Finds show more containers `data-vf-js-show-more`
 * Finds all "show" buttons on a page and activates them `data-vf-js-show-more-button`
 * Also find options "show less" buttons `data-vf-js-show-more-button-less`
 * Receives number of items to show `data-vf-js-show-more-pager-size`
 * Will add an `.is-active` to the targetList, the display is left to the CSS
 * @param {object} [scope] - the html scope to process, optional, defaults to `document`
 * @example vfShowMore(document.querySelectorAll('.vf-component__container')[0]);
 */
function vfShowMore(scope) {
  var scope = scope || document;
  // Get relevant elements and collections
  var buttonList = scope.querySelectorAll('[data-vf-js-show-more-button]');
  var buttonHideList = scope.querySelectorAll('[data-vf-js-show-more-button-less]');
  var targetList = scope.querySelectorAll('[data-vf-js-show-more]');
  var pagerSize = scope.querySelectorAll('[data-vf-js-show-more-pager-size]');
  if (!buttonList || !targetList) {
    // exit: either buttons or target content not found
    return;
  }
  if (buttonList.length == 0 || targetList.length == 0) {
    // exit: either buttons or target content not found
    return;
  }

  // initialise
  targetList.forEach(targetContent => {
    let itemsToShow = Math.round(targetContent.dataset.vfJsShowMorePagerSize);

    // generate the appropriate style to show
    // https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript
    var sheet = document.createElement('style');
    sheet.classList.add('vf-show-more__dynamic-styling');
    sheet.innerHTML = "/* Show/hide items beyond the specified ammount */ \n"
    + ".vf-show-more .vf-show-more__item {\n"
    + "  display: none;\n"
    + "}\n"
    + ".vf-show-more .vf-show-more__item:nth-child(-n+"+itemsToShow+") {\n"
    + "  display: unset;\n"
    + "}\n"
    + ".vf-show-more.is-active .vf-show-more__item:nth-child(n+"+itemsToShow+") {\n"
    + "  display: block; //fallback\n"
    + "  display: unset;\n"
    + "}\n";

    targetContent.appendChild(sheet);
  });

  // The showing function
  var showIt = function showIt(targetContent) {
    // get the parent ul of the clicked tab
    targetContent = targetContent.closest('[data-vf-js-show-more]');

    targetContent.focus();
    // Make the active tab focusable by the user (Tab key)
    targetContent.removeAttribute('tabindex');
    // Set the selected state
    targetContent.setAttribute('aria-selected', 'true');
    targetContent.classList.add('is-active');
  }

  // The hiding function
  var hideIt = function hideIt(targetContent) {
    // get the parent ul of the clicked tab
    targetContent = targetContent.closest('[data-vf-js-show-more]');

    targetContent.focus();
    // Make the active tab focusable by the user (Tab key)
    targetContent.removeAttribute('tabindex');
    // Set the selected state
    targetContent.setAttribute('aria-selected', 'false');
    targetContent.classList.remove('is-active');
  }

  // Add semantics
  Array.prototype.forEach.call(buttonList, function (button, i) {
    button.parentNode.setAttribute('role', 'presentation');

    // Reset any active tabs from a previous JS call
    button.classList.remove('is-active');

    // Handle clicking of show more for mouse users
    button.addEventListener('click', function (e) {
      e.preventDefault();
      showIt(e.currentTarget);
    });

    // this code is working but seems to not be needed (space and return also invoke)
    // ---
    // Handle keydown events for keyboard users
    // button.addEventListener('keydown', e => {
    //   // Get the index of the current tab in the tabs node list
    //   let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
    //   // Work out which key the user is pressing and
    //   // Calculate the new tab's index where appropriate
    //   let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
    //   if (dir !== null) {
    //     e.preventDefault();
    //     // If the down key is pressed, move focus to the open panel,
    //     // otherwise switch to the adjacent tab
    //     dir === 'down' ? showIt(tabs[dir]) : void 0;
    //   }
    // });
  });

  if (buttonHideList) {
    if (buttonHideList.length != 0) {
      Array.prototype.forEach.call(buttonHideList, function (button, i) {
        button.parentNode.setAttribute('role', 'presentation');

        // Reset any active tabs from a previous JS call
        button.classList.remove('is-active');

        // Handle clicking of hide/show less for mouse users
        button.addEventListener('click', function (e) {
          e.preventDefault();
          hideIt(e.currentTarget);
        });
      });
    }
  }
}

// By default your component should be usable with js imports
export { vfShowMore };

// // You should also import it at ./components/vf-core/scripts.js
// // import { vfShowMore } from '../components/raw/vf-show-more/vf-show-more.js';
// // And, if needed, invoke it
// // vfShowMore();
