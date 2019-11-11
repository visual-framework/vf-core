// embl-breadcrumbs-lookup

import { emblContentMetaProperties_Read } from 'embl-content-meta-properties/embl-content-meta-properties';

// to hold the EMBL taxonomy
var emblTaxonomy = {};

// placeholders for our new breadcrumbs
var emblBreadcrumbPrimary = document.createElement("ul");
    emblBreadcrumbPrimary.classList.add('vf-breadcrumbs__list','vf-list','vf-list--inline');
var emblBreadcrumbRelated = document.createElement("ul");
    emblBreadcrumbRelated.classList.add('vf-breadcrumbs__list','vf-breadcrumbs__list--related','vf-list','vf-list--inline');

/**
 * Take any appropriate actions depending on present metaTags
 * @example emblBreadcrumbsLookup()
 * @param {object} [metaProperties] - if you do not have meta tags on the page,
 *                                    you can explicitly pass options
 */
function emblBreadcrumbsLookup(metaProperties) {
  var emblBreadcrumbTarget = document.querySelectorAll('[data-embl-js-breadcrumbs-lookup]');

  if (emblBreadcrumbTarget.length === 0) {
    // console.warn('There is no `[data-embl-js-breadcrumbs-lookup]` in which to insert the breadcrumbs; exiting');
    return false;
  }
  if (emblBreadcrumbTarget.length > 1) {
    console.warn('There is more than one `[data-embl-js-breadcrumbs-lookup]` in which to insert the breadcrumbs; continuing but only the first element will be updated.');
  }

  var majorFacets = ['who','what','where'];

  for (var i = 0; i < majorFacets.length; i++) {
    if (majorFacets[i] == metaProperties.active) {
      emblBreadcrumbAppend(emblBreadcrumbTarget,metaProperties[majorFacets[i]],majorFacets[i],'primary');
    } else {
      // do the related paths
      emblBreadcrumbAppend(emblBreadcrumbTarget,metaProperties[majorFacets[i]],majorFacets[i],'related');
    }
  }

  // make a 'related' label
  var relatedLabel = document.createElement("span");
      relatedLabel.innerHTML = 'Related:';
      relatedLabel.classList.add('vf-breadcrumbs__heading');

  // now that we've processed all the meta properties, insert our rendered breadcrumbs
  emblBreadcrumbTarget[0].innerHTML = emblBreadcrumbPrimary.outerHTML + relatedLabel.outerHTML + emblBreadcrumbRelated.outerHTML;
}

/**
 * Get the EMBL taxonomy json from the ContentHub
 * @example emblGetTaxonomy()
 * @param {string} [url] - URL to pull the taxonomy from
 */
function emblGetTaxonomy(url) {
  var url = url || 'https://dev.beta.embl.org/api/v1/pattern.json?pattern=embl-ontology&source=contenthub';

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
      reject(Error("Error loading ontology"));

    };

    // Make the request
    req.send();
  });

}

/**
 * Receive a term and its context and create a breadcrumb
 * @example emblBreadcrumbAppend(breadcrumbTarget,term,facet,type)
 * @param {dom elements} [breadcrumbTarget]  - elements with data-embl-js-breadcrumbs-lookup
 * @param {string} [termName]  - the taxonomy item found, e.g. `Cancer`
 * @param {string} [facet] - the facet of the taxonomy (`who`, `what` or `where`)
 * @param {string} [type]  - if this is a `primary` or `related` path
 */
function emblBreadcrumbAppend(breadcrumbTarget,termName,facet,type) {
  // console.log('Processing breadcrumb for:', termName + ', ' + facet + ', ' + type);

  function getCurrentTerm(termName) {
    if (termName === 'EMBL') termName = 'All EMBL sites'; // hack as we're not using IDs

    var termObject;

    Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), (termId) => {
      let term = emblTaxonomy.terms[termId];
      if (term.name === termName) {
        termObject = term;
        return; //exit
      }
    });

    // we never want to return undefined
    if (termObject == undefined || termObject == null) {
      console.warn('embl-js-breadcumbs-lookup: No matching breadcrumb found for `' + termName + '`; Will use a simple unlinked term.');
      termObject = {};
      termObject.name_display = termName;
      termObject.uuid = 'null';
      termObject.uuid = [];
      termObject.url = '#addBreadcrumbPatternForSimpleTerms';
    }

    return termObject;
  }

  /**
   * Take a term and get its parent term UUID
   * todo: this lookup is, perhaps, flawed as it gives us each ancestor, irregardless
   *       of it's who/what/where path, but maybe this will provide an interesting
   *       "odeur d'information"
   * @example getBreadcrumbParentTerm(parents,context)
   * @param {array} [parents]  - array of UUIDs
   * @param {string} [facet] - who, what, where
   */
  function getBreadcrumbParentTerm(parents,facet) {
    // var parentTodos = {
    //   // 1: 'Respect the parent term context: who/what/where'
    //   // 2: 'scan the taxonomy and get any parent IDs',
    //   // 3: 'if there are parent IDs, add breadcrumb and set URL',
    //   // 4: 'if parent was found, does the parent have a parent?'
    // };
    // console.log('Todos for getBreadcrumbParentTerm():',parentTodos);

    if (parents == undefined || parents == null) {
      // no parent breadcrumb preset, exiting
      return;
    }

    function insertParent(activeParent) {
      if (activeParent == undefined || activeParent == null) {
        console.warn('embl-js-breadcumbs-lookup: No matching parent found; Stopping parent lookup.');
        return;
      }
      activeParent.url = activeParent.url || '#no_url_specified';

      if (activeParent.name.indexOf(' root term') > 0) {
        // if we've reached a root term, abort lookups and don't insert a root term as a crumb
        return;
      }

      if (activeParent.primary == facet) {
        // only insert crumb if it respects the original term context: who/what/where
        emblBreadcrumbPrimary.innerHTML = formatBreadcrumb(activeParent.name_display,activeParent.url) + emblBreadcrumbPrimary.innerHTML;
      }

      // get parents of parent
      if (activeParent.parents) {
        getBreadcrumbParentTerm(activeParent.parents,facet);
      }

    }

    var activeParent;

    if (parents[facet]) {
      // if a parent has structured who/what/where parents
      activeParent = emblTaxonomy.terms[parents[facet]];
      insertParent(activeParent);
    } else {
      // otherwise lookup each parent
      parents.forEach(function (parentId) {
        activeParent = emblTaxonomy.terms[parentId];
        insertParent(activeParent);
      });
    }

    return;
  }

  /**
   * Generate HTML for a new breadcrumb
   * @example formatBreadcrumb(term,breadcrumbUrl)
   * @param {string} [termName]  - the taxonomy string of the item, e.g. `Cancer`
   * @param {string} [breadcrumbUrl] - a fully formed URL, or 'null' to not make a link
   */
  function formatBreadcrumb(termName,breadcrumbUrl) {
    var newBreadcrumb = '<li class="vf-breadcrumbs__item">';
    if (breadcrumbUrl && breadcrumbUrl !== 'null' && breadcrumbUrl !== '#no_url_specified') {
      newBreadcrumb += '<a href="'+breadcrumbUrl+'" class="vf-breadcrumbs__link">' + termName + '</a>';
    } else {
      newBreadcrumb += termName;
    }
    newBreadcrumb += '</li>';

    return newBreadcrumb;
  }

  var currentTerm = getCurrentTerm(termName);
  var breadcrumbId = currentTerm.uuid,
      breadcrumbUrl = currentTerm.url || '#addFunctionForBreadcrumbPatternForSimpleTerms',
      breadcrumbParents = currentTerm.parents;

  // narrow down to the first matching element
  breadcrumbTarget = breadcrumbTarget[0];

  if (type == 'primary') {

    // don't show path of breadcrumb if it is the current path
    if (new URL(breadcrumbUrl).pathname == window.location.pathname) {
      breadcrumbUrl = null;
    }

    // add breadcrumb
    emblBreadcrumbPrimary.innerHTML += formatBreadcrumb(currentTerm.name_display,breadcrumbUrl);

    // fetch parents for primary path
    getBreadcrumbParentTerm(breadcrumbParents, facet);
  } else if (type == 'related') {
    // add breadcrumb
    emblBreadcrumbRelated.innerHTML += formatBreadcrumb(currentTerm.name_display,breadcrumbUrl);
  }

}

function emblBreadcrumbs() {
  // We start the breadcrumbs by first getting the EMBL taxonomy.
  // todo: some sort of caching here, perhaps we write to local storage.
  // todo: abstract this out into its own `embl-taxonomy` component?
  emblGetTaxonomy().then(function(response) {
    emblTaxonomy = JSON.parse(response);

    // Preprocess the emblTaxonomy for some cleanup tasks
    Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), (termId) => {
      let term = emblTaxonomy.terms[termId];
      // If `name_display` is not set, use the internal name
      if (term.name_display === '') term.name_display = term.name;
      // handle null URL
      if (term.url === '') term.url = '#no_url_specified';
    });

    // Invoke embl-content-meta-properties function to pull tags from page
    emblBreadcrumbsLookup(emblContentMetaProperties_Read());

  }, function(error) {
    console.warn("Failed to get EMBL ontology", error);
    var emblBreadcrumbTarget = document.querySelectorAll('[data-embl-js-breadcrumbs-lookup]');
    if (emblBreadcrumbTarget.length > 0) {
      emblBreadcrumbTarget[0].innerHTML = '<!-- Breadcrumbs failed to render due to network issue -->';
    }
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

export { emblBreadcrumbs };

// Run it on default
// emblBreadcrumbs();
