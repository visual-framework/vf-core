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
 * @param {string} [referrer] - what part of the page is asking for a check, we pass this to avoid recursion
 */
function emblConditionalEditDetectParam(url,element,referrer) {
  var captured = /embl-conditional-edit=([^&]+)/.exec(url);
  if (captured == null && referrer != 'iframe') {
    // value not found

    // also try against any parent iframe url
    if (window.self !== window.top) {
      console.log(url, parent.window.location.href)
      emblConditionalEditDetectParam(parent.window.location.href,element,'iframe');
    }

    return;
  }
  captured = captured || false; // avoid null
  captured = captured[1];

  if (captured == '1' || captured == 'enabled' || captured == 'true') {
    element.className += ' ' + 'embl-coditional-edit__enabled';
  }
}

export { emblConditionalEdit };
