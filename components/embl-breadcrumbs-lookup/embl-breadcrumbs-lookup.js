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

  // console.log('processing meta properties for: ', metaProperties);

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
 * Get the EMBL taxonomy json from the ContentHub
 * @example emblGetTaxonomy()
 * @param {string} [url] - URL to pull the taxonomy from
 */
function emblGetTaxonomy(url) {
  var url = url || 'http://dev.content.embl.org/api/v1/pattern.json?pattern=embl-taxonomy';

  // from https://developers.google.com/web/fundamentals/primers/promises
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

/**
 * Receive a term and its context and create a breadcrumb
 * @example emblBreadcrumbAppend(term,facet,type)
 * @param {object} [term]  - the taxonomy item found, e.g. `Cancer`
 * @param {object} [facet] - the facet of the taxonomy (`who`, `what` or `where`)
 * @param {object} [type]  - if this is a `primary` or `related` path
 */
function emblBreadcrumbAppend(term,facet,type) {
  // find the related breadcrumb ul, if it doesn't exist, make it
  function getRelatedBreadcrumbTarget() {
    var breadcrumbTargetRelated = document.querySelectorAll('.embl-breadcrumbs-lookup .vf-breadcrumbs--related');
    if (breadcrumbTargetRelated.length > 0) {
      // there's already a releated container, use it
      breadcrumbTargetRelated = breadcrumbTargetRelated[0];
      return breadcrumbTargetRelated;
    } else {
      breadcrumbTarget.innerHTML += `<ul class="vf-breadcrumbs vf-breadcrumbs--related | vf-list vf-list--inline"></ul>`;
      return document.querySelectorAll('.embl-breadcrumbs-lookup .vf-breadcrumbs--related')[0];
    }
  }

  // ensure a "related" label is present
  function addRelatedBreadcrumbLabel(breadcrumbTargetRelated) {
    var relatedLabel = breadcrumbTargetRelated.querySelectorAll('.vf-breadcrumbs__item-related-label');

    if (relatedLabel.length === 0) {
      // no label, so we make it
      // breadcrumbTargetRelated
      var newRelatedLabel = document.createElement("li");
      newRelatedLabel.innerHTML = 'Related';
      newRelatedLabel.classList.add('vf-breadcrumbs__item','vf-breadcrumbs__item-related-label')
      breadcrumbTargetRelated.prepend(newRelatedLabel);
    }
  }

  // We don't have a way to handle term IDs yet, so do a basic lookup based off
  // of the string name
  function getBreadcrumbId(termName) {
    if (termName === 'EMBL') termName = 'All EMBL sites'; // hack as we're not using IDs
    // console.log('Looking up',termName,emblTaxonomy);

    var id = 'no_match_found';

    // Add tab panel semantics and hide them all
    Array.prototype.forEach.call(emblTaxonomy.terms, (term, i) => {
      if (term.name === termName) {
        id = term.uuid;
        return; //exit
      }
    });

    return id;
  }

  // Get the URL of a term
  function getBreadcrumbUrl(id) {
    var url = id;
    var urlPrefix = 'https://dev.beta.embl.org/'

    return urlPrefix + url;
  }

  // Take a term and get its parent term
  function getBreadcrumbParentTerm(id) {
    var parentTodos = {
      1: 'what is the parent term context? who/what/where',
      2: 'scan the taxonomy and get any parent IDs',
      3: 'if there are parent IDs, add breadcrumb and set URL',
      4: 'if parent was found, does the parent have a parent?'
    }
    console.log('todo for getBreadcrumbParentTerm:',parentTodos);

    var term = 'Parent of Term';
    var breadcrumbUrl = id;
    insertBreadcrumb(term,breadcrumbUrl,'prepend');


    return;

  }

  /**
   * Generate an HTML elem and insert it into the DOM
   * @example insertBreadcrumb(term,breadcrumbUrl,position)
   * @param {object} [term]  - the taxonomy string of the item, e.g. `Cancer`
   * @param {object} [breadcrumbUrl] - a fully formed URL
   * @param {object} [position] - where to place it, `prepend` or `append`
   */
  console.warn('todo: rather than writing to the DOM each time, we shold construct the full breadcrumb and write once.');
  function insertBreadcrumb(term,breadcrumbUrl,position) {
    var newBreadcrumb = document.createElement("li");
    newBreadcrumb.innerHTML = '<a href="'+breadcrumbUrl+'" class="vf-breadcrumbs__link">' + term + '</a>';
    newBreadcrumb.classList.toggle('vf-breadcrumbs__item')

    if (position === 'prepend') {
      breadcrumbTarget.prepend(newBreadcrumb);
    } else {
      breadcrumbTargetRelated.append(newBreadcrumb);
    }
  }

  console.log('Processing breadcrumb for:', term + ', ' + facet + ', ' + type);

  var breadcrumbTarget = document.querySelectorAll('.embl-breadcrumbs-lookup > .vf-breadcrumbs');

  if (breadcrumbTarget.length === 0) {
    console.warn('There is no `.embl-breadcrumbs-lookup > .vf-breadcrumbs` in which to insert the breadcrumbs; exiting');
    return false;
  }
  if (breadcrumbTarget.length > 1) {
    console.warn('There is more than one `.embl-breadcrumbs-lookup > .vf-breadcrumbs` in which to insert the breadcrumbs; continuing but only the first element will be updated.');
  }

  var breadcrumbId = getBreadcrumbId(term);
  var breadcrumbUrl = getBreadcrumbUrl(breadcrumbId);

  // narrow down to the first matching element
  breadcrumbTarget = breadcrumbTarget[0];



  if (type == 'primary') {
    // remove any loading text
    var loadingText = document.querySelectorAll('.embl-breadcrumbs-lookup__loading-text');
    if (loadingText.length > 0) { loadingText[0].remove(); }

    // add breadcrumb
    insertBreadcrumb(term,breadcrumbUrl,'prepend');

    // fetch parents
    getBreadcrumbParentTerm(breadcrumbId);
  } else if (type == 'related') {
    // get/make the related ul
    var breadcrumbTargetRelated = getRelatedBreadcrumbTarget();
    // ensure there's a label
    addRelatedBreadcrumbLabel(breadcrumbTargetRelated);

    // add breadcrumb
    insertBreadcrumb(term,breadcrumbUrl,'append');
  }
}


var emblTaxonomy = {};

// We start the breadcrumbs by first getting the EMBL taxonomy.
// todo: some sort of caching here, perhaps we write to local storage.
// todo: abstract this out into its own `embl-taxonomy` pattern?
emblGetTaxonomy().then(function(response) {
  emblTaxonomy = JSON.parse(response);

  // Invoke embl-content-meta-properties function to pull tags from page
  emblBreadcrumbsLookup(emblContentMetaProperties_Read());

}, function(error) {
  console.error("Failed to get EMBL taxonomy", error);
});



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
