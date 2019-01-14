// embl-breadcrumbs-lookup

/**
 * Take any appropriate actions depending on present metaTags
 * @example emblBreadcrumbsLookup()
 * @param {object} [metaProperties] - if you do not have meta tags on the page,
 *                                    you can explicitly pass options
 */
function emblBreadcrumbsLookup(metaProperties) {
  var emblBreadcrumbTarget = document.querySelectorAll('[data-embl-js-breadcrumbs-lookup] > .vf-breadcrumbs');

  if (emblBreadcrumbTarget.length === 0) {
    // console.warn('There is no `[data-embl-js-breadcrumbs-lookup] > .vf-breadcrumbs` in which to insert the breadcrumbs; exiting');
    return false;
  }
  if (emblBreadcrumbTarget.length > 1) {
    console.warn('There is more than one `[data-embl-js-breadcrumbs-lookup] > .vf-breadcrumbs` in which to insert the breadcrumbs; continuing but only the first element will be updated.');
  }

  var majorFacets = ['who','what','where'];

  console.warn('todo: rather than writing to the DOM each time, we shold construct the full breadcrumb and write once.');
  for (var i = 0; i < majorFacets.length; i++) {
    if (majorFacets[i] == metaProperties.active) {
      emblBreadcrumbAppend(emblBreadcrumbTarget,metaProperties[majorFacets[i]],majorFacets[i],'primary');
    } else {
      // do the related paths
      emblBreadcrumbAppend(emblBreadcrumbTarget,metaProperties[majorFacets[i]],majorFacets[i],'related');
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
 * @param {string} [termName]  - the taxonomy item found, e.g. `Cancer`
 * @param {string} [facet] - the facet of the taxonomy (`who`, `what` or `where`)
 * @param {string} [type]  - if this is a `primary` or `related` path
 */
function emblBreadcrumbAppend(breadcrumbTarget,termName,facet,type) {
  // console.log('Processing breadcrumb for:', termName + ', ' + facet + ', ' + type);

  // find the related breadcrumb ul, if it doesn't exist, make it
  function getRelatedBreadcrumbTarget() {
    var breadcrumbTargetRelated = breadcrumbTarget.querySelectorAll('.vf-breadcrumbs--related');
    if (breadcrumbTargetRelated.length > 0) {
      // there's already a releated container, use it
      breadcrumbTargetRelated = breadcrumbTargetRelated[0];
      return breadcrumbTargetRelated;
    } else {
      breadcrumbTarget.innerHTML += `<ul class="vf-breadcrumbs vf-breadcrumbs--related | vf-list vf-list--inline"></ul>`;
      return breadcrumbTarget.querySelectorAll('.vf-breadcrumbs--related')[0];
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

  function getCurrentTerm(termName) {
    if (termName === 'EMBL') termName = 'All EMBL sites'; // hack as we're not using IDs

    var termObject;

    Array.prototype.forEach.call(emblTaxonomy.terms, (term, i) => {
      if (term.name_display === termName) {
        termObject = term;
        return; //exit
      }
    });

    return termObject;
  }

  /**
   * Take a term and get its parent term
   * @example getBreadcrumbParentTerm(parents,context)
   * @param {array} [parents]  - array of UUIDs
   * @param {string} [facet] - who, what, where
   */
  function getBreadcrumbParentTerm(parents,facet) {
    var parentTodos = {
      1: 'what is the parent term context? who/what/where',
      // 2: 'scan the taxonomy and get any parent IDs',
      // 3: 'if there are parent IDs, add breadcrumb and set URL',
      4: 'if parent was found, does the parent have a parent?'
    };
    console.log('Todos for getBreadcrumbParentTerm():',parentTodos);

    // what = 98831673-5bc8-4348-8f42-17b09c1d5462
    // where = ce40f8b4-c7c3-40fe-911e-8d248654fe7e
    // who = 8c9899b9-b197-4750-b955-894cda8bf9d5

    // look up each parent UUID
    // todo: this lookup is, perhaps, flawed as it gives us each ancestor, irregardless
    //       of it's who/what/where path, but maybe this will provide an interesting
    //       "odeur d'information"
    Array.prototype.forEach.call(parents, (parentId, i) => {
      Array.prototype.forEach.call(emblTaxonomy.terms, (term, i) => {
        if (parentId === term.uuid) {
          insertBreadcrumb(term.name_display,term.url,'prepend');
          return; //exit
        }
      });
    });

    return;
  }

  /**
   * Generate an HTML elem and insert it into the DOM
   * @example insertBreadcrumb(term,breadcrumbUrl,position)
   * @param {string} [termName]  - the taxonomy string of the item, e.g. `Cancer`
   * @param {string} [breadcrumbUrl] - a fully formed URL
   * @param {string} [position] - where to place it, `prepend` or `append`
   */
  function insertBreadcrumb(termName,breadcrumbUrl,position) {
    var newBreadcrumb = document.createElement("li");
    newBreadcrumb.innerHTML = '<a href="'+breadcrumbUrl+'" class="vf-breadcrumbs__link">' + termName + '</a>';
    newBreadcrumb.classList.toggle('vf-breadcrumbs__item');

    if (position === 'prepend') {
      breadcrumbTarget.prepend(newBreadcrumb);
    } else {
      breadcrumbTargetRelated.append(newBreadcrumb);
    }
  }

  var currentTerm = getCurrentTerm(termName);
  var breadcrumbId = currentTerm.uuid,
      breadcrumbUrl = currentTerm.url,
      breadcrumbParents = currentTerm.parents;

  // narrow down to the first matching element
  breadcrumbTarget = breadcrumbTarget[0];

  if (type == 'primary') {
    // remove any loading text
    var loadingText = document.querySelectorAll('.embl-breadcrumbs-lookup__loading-text');
    if (loadingText.length > 0) { loadingText[0].remove(); }

    // add breadcrumb
    insertBreadcrumb(currentTerm.name_display,breadcrumbUrl,'prepend');

    // fetch parents
    getBreadcrumbParentTerm(breadcrumbParents, facet);
  } else if (type == 'related') {
    // get/make the related ul
    var breadcrumbTargetRelated = getRelatedBreadcrumbTarget();
    // ensure there's a label
    addRelatedBreadcrumbLabel(breadcrumbTargetRelated);

    // add breadcrumb
    insertBreadcrumb(currentTerm.name_display,breadcrumbUrl,'append');
  }
}


var emblTaxonomy = {};

function emblBreadcrumbs() {
  // We start the breadcrumbs by first getting the EMBL taxonomy.
  // todo: some sort of caching here, perhaps we write to local storage.
  // todo: abstract this out into its own `embl-taxonomy` pattern?
  emblGetTaxonomy().then(function(response) {
    emblTaxonomy = JSON.parse(response);

    // Preprocess the emblTaxonomy for some cleanup tasks
    Array.prototype.forEach.call(emblTaxonomy.terms, (term, i) => {
      // If `name_display` is not set, use the internal name
      if (term.name_display === '') term.name_display = term.name;
      // handle null URL
      if (term.url === '') term.url = 'https://embl.org/#no_url_specified';
    });

    // Invoke embl-content-meta-properties function to pull tags from page
    emblBreadcrumbsLookup(emblContentMetaProperties_Read());

  }, function(error) {
    console.error("Failed to get EMBL taxonomy", error);
  });
}


// Prepend polyfill for IE
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

// Run it on default
emblBreadcrumbs();
