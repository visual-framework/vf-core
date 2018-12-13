// embl-breadcrumbs-lookup

var emblBreadcrumbsDebug = false;
var emblBreadcrumbsDebug = true;

/**
 * Take any appropriate actions depending on present metaTags
 * @example emblBreadcrumbsLookup()
 * @param {object} [metaProperties] - if you do not have meta tags on the page,
 *                                    you can explicitly pass options
 */
function emblBreadcrumbsLookup(metaProperties) {
  var majorFacets = ['who','what','where'];

  console.log('processing meta properties for: ', metaProperties);

  for (var i = 0; i < majorFacets.length; i++) {
    if (majorFacets[i] == metaProperties.active) {
      emblBreadcrumbAppend(metaProperties[majorFacets[i]],majorFacets[i],'primary')
    } else {
      // do the related paths
      emblBreadcrumbAppend(metaProperties[majorFacets[i]],majorFacets[i],'related')
    }
  }


}

/**
 * Receive a term and its context and create a breadcrumb
 * @example emblBreadcrumbAppend(term,facet,type)
 * @param {object} [term]  - the taxonomy item found, e.g. `Cancer`
 * @param {object} [facet] - the facet of the taxonomy (`who`, `what` or `where`)
 * @param {object} [type]  - if this is a `primary` or `related` path
 */
function emblBreadcrumbAppend(term,facet,type) {
  console.log('Processing breadcrumb for:', term + ', ' + facet + ', ' + type);

  var breadcrumbTarget = document.querySelectorAll('.embl-breadcrumbs-lookup > .vf-breadcrumbs');

  if (breadcrumbTarget.length === 0) {
    console.warn('There is no `.embl-breadcrumbs-lookup > .vf-breadcrumbs` in which to insert the breadcrumbs; exiting');
    return false;
  }
  if (breadcrumbTarget.length > 1) {
    console.warn('There is more than one `.embl-breadcrumbs-lookup > .vf-breadcrumbs` in which to insert the breadcrumbs; continuing but only the first element will be updated.');
  }

  // narrow down to the first matching element
  breadcrumbTarget = breadcrumbTarget[0];

  if (type == 'primary') {
    // remove any loading text
    var loadingText = document.querySelectorAll('.embl-breadcrumbs-lookup__loading-text');
    if (loadingText.length > 0) { loadingText[0].remove(); }

    var newBreadcrumb = document.createElement("li");
    newBreadcrumb.innerHTML = term;
    newBreadcrumb.classList.toggle('vf-breadcrumbs__item')
    breadcrumbTarget.prepend(newBreadcrumb);


    // breadcrumbTarget.prepend += `
    //     dsaf<li class="vf-breadcrumbs__item">
    //       ` + term + `
    //     </li>
    //     `;

  }





}


// Invoke embl-content-meta-properties function to pull tags from page
emblBreadcrumbsLookup(emblContentMetaProperties_Read());




// prepend polyfill for IE
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
