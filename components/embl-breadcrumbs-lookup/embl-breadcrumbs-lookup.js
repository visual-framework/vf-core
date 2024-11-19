// embl-breadcrumbs-lookup
import { emblContentMetaProperties_Read } from "../embl-content-meta-properties/embl-content-meta-properties";

// to hold the EMBL taxonomy
var emblTaxonomy = {};

// placeholders for our new breadcrumbs
var emblBreadcrumbPrimary = document.createElement("ul");
emblBreadcrumbPrimary.classList.add("vf-breadcrumbs__list","vf-list","vf-list--inline");
var emblBreadcrumbRelated = document.createElement("ul");
emblBreadcrumbRelated.classList.add("vf-breadcrumbs__list","vf-breadcrumbs__list--related","vf-list","vf-list--inline");

// we store the primarily breadcrumb so it can be accessed by related crumbs, if needed
var primaryBreadcrumb;

/**
 * Look up a breadcrumb by its uuid and return the entry
 * @example emblBreadcrumbLookupByUuid(uuid)
 * @param {string} [uuid]  - the uuid of a term
 */
function emblBreadcrumbLookupByUuid(uuid) {
  // console.log('emblBreadcrumbLookupByUuid',uuid);
  if (emblTaxonomy.terms[uuid]) {
    // console.log('emblBreadcrumbLookupByUuid',emblTaxonomy.terms[uuid]);
    return emblTaxonomy.terms[uuid];
  }
}

/**
 * Take any appropriate actions depending on present metaTags
 * @example emblBreadcrumbsLookup()
 * @param {object} [metaProperties] - if you do not have meta tags on the page,
 *                                    you can explicitly pass options
 */
function emblBreadcrumbsLookup(metaProperties) {
  var emblBreadcrumbTarget = document.querySelectorAll("[data-embl-js-breadcrumbs-lookup]");

  if (emblBreadcrumbTarget.length === 0) {
    // console.warn('There is no `[data-embl-js-breadcrumbs-lookup]` in which to insert the breadcrumbs; exiting');
    return false;
  }
  if (emblBreadcrumbTarget.length > 1) {
    console.warn("There is more than one `[data-embl-js-breadcrumbs-lookup]` in which to insert the breadcrumbs; continuing but only the first element will be updated.");
  }
  if (metaProperties.active == "notSet") {
    // @todo: we could infer the active breadcrumb if only one is passed
    console.warn("There is no active EMBL breadcrumb specified, cannot proceed looking up breadcrumbs.");
    return false;
  }

  var majorFacets = ["who","what","where"];

  // do the primary breadcrumb first
  emblBreadcrumbAppend(emblBreadcrumbTarget,metaProperties[metaProperties.active],metaProperties.active,"primary");

  // do the non-primary meta terms
  // @todo: we probably shouldn't do related if there is no primary
  for (var i = 0; i < majorFacets.length; i++) {
    if (majorFacets[i] != metaProperties.active) {
      emblBreadcrumbAppend(emblBreadcrumbTarget,metaProperties[majorFacets[i]],majorFacets[i],"related");
    }
  }

  // make a 'related' label
  var relatedLabel = document.createElement("span");
  relatedLabel.innerHTML = "Related:";
  relatedLabel.classList.add("vf-breadcrumbs__heading");

  // If no related terms were found, hide the related label
  // we only hide it as we could add related terms later
  if (emblBreadcrumbRelated.childNodes.length == 0) {
    relatedLabel.classList.add("vf-u-display-none");
  }

  // now that we've processed all the meta properties, insert our rendered breadcrumbs
  emblBreadcrumbTarget[0].innerHTML = emblBreadcrumbPrimary.outerHTML + relatedLabel.outerHTML + emblBreadcrumbRelated.outerHTML;
}

/**
 * Get the EMBL taxonomy json from the ContentHub
 * @example emblGetTaxonomy()
 * @param {string} [url] - URL to pull the taxonomy from
 */
function emblGetTaxonomy(url) {
  /* eslint-disable no-redeclare */
  var url = url || "https://www.embl.org/api/v1/pattern.json?pattern=embl-ontology&source=contenthub";
  /* eslint-disable no-redeclare */

  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // @todo: some sort of caching here, perhaps we write to local storage.
        // @todo: abstract this out into its own `embl-taxonomy` component?
        // capture the taxonomy in the global var
        emblTaxonomy = JSON.parse(req.response);

        // Resolve
        resolve();
      } else {
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
    var termObject; // store the match
    if (termName === "EMBL") termName = "All EMBL sites"; // hack as we're not using IDs

    // if a term has not been passed, attempt to use the primary term's parent information
    // @todo: add a flag to explicitly "dontLookup" or "doLookup"
    if (termName == "notSet") {
      termName = ""; // we'll either find a positive termObject or not show anything
      // console.log('here',primaryBreadcrumb)
      if (primaryBreadcrumb.parents) {
        if (primaryBreadcrumb.parents[facet]) {
          termName = primaryBreadcrumb.parents[facet];
        }
      }
    }

    // if using a `string/NameOfThing` value, not accordingly
    if (termName.indexOf("string/") >= 0) {
      console.warn("embl-js-breadcrumbs-lookup: using a passed string value to make breadcrumbs " + termName);
      termName = termName.replace("string/","");
    }

    // scan through all terms and find a match, if any
    function emblBreadcrumbLookup(termName) {
      // @todo: if a UUID meta property is set, use that

      // if it's UUID match we use that
      termObject = emblBreadcrumbLookupByUuid(termName);
      if (typeof(termObject) != "undefined" ){
        return; //exit
      }

      // We prefer profiles
      Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), (termId) => {
        let term = emblTaxonomy.terms[termId];
        if (term.type == "profile") {
          if (term.name === termName) {
            termObject = term;
            return; //exit
          }
        }
      });

      // If no profile found, match other types of taxonomy entries
      if (typeof termObject === "undefined") {
        Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), (termId) => {
          let term = emblTaxonomy.terms[termId];
          if (term.type != "profile") {
            if (term.name === termName) {
              termObject = term;
              return; //exit
            }
          }
        });
      }

      // If there's still no match, see if we can find a matching display name
      // @todo: this is an easy win but creates messy matching, but maybe that's ok if you're not using UUID
      // There's a risk of multiple "training" entries

      // We prefer profiles
      Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), (termId) => {
        let term = emblTaxonomy.terms[termId];
        if (term.type == "profile") {
          if (term.name_display === termName) {
            termObject = term;
            return; //exit
          }
        }
      });

      // If no profile found, match other types of taxonomy entries
      if (typeof termObject === "undefined") {
        Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), (termId) => {
          let term = emblTaxonomy.terms[termId];
          if (term.type != "profile") {
            if (term.name_display === termName) {
              termObject = term;
              return; //exit
            }
          }
        });
      }
    }

    // don't scan for junk matches
    if (termName != "notSet" && termName != "" && termName != "none") {
      emblBreadcrumbLookup(termName);
    }

    // Validation and protection
    // we never want to return undefined
    if (termObject == undefined || termObject == null) {
      termObject = {};

      // generate fallback links
      // console.warn('embl-js-breadcrumbs-lookup: No matching breadcrumb found for `' + termName + '`; Will formulate a URL.');
      if (facet == "who") {
        // fallback for people: search people directory
        termObject.url = "https://www.embl.org/search/#stq="+termName.replace(/[\W_]+/g," ").replace(/\s+/g, "-").toLowerCase()+"&activeFacet=People%20directory&origin=breadcrumbTermNotFound";
      } else {
        // otherwise try and search
        termObject.url = "https://www.embl.org/search/#stq="+termName+"&taxonomyFacet="+facet+"&origin=breadcrumbTermNotFound"; // if no link specified, do a search
      }

      termObject.name_display = termName;
      termObject.uuid = "null";
      termObject.uuid = [];
    } else if (typeof termObject.url == "undefined") {
      // if entry was found but no link specified, generate a url for a search
      var urlFacet = "";
      if (termObject.primary != undefined) {
        // prepare a search facet if available
        urlFacet = "&taxonomyFacet="+termObject.primary;
      }
      termObject.url = "https://www.embl.org/search/#stq="+termObject.name+urlFacet+"&origin=breadcrumbTaxonomy";
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
   * @param {object} [lastParent] - term object to prevent recursion, optional
   */
  function getBreadcrumbParentTerm(parents,facet,lastParent) {
    // var parentTodos = {
    //   // 1: 'Respect the parent term context: who/what/where'
    //   // 2: 'scan the taxonomy and get any parent IDs',
    //   // 3: 'if there are parent IDs, add breadcrumb and set URL',
    //   // 4: 'if parent was found, does the parent have a parent?'
    // };
    // console.log('Todos for getBreadcrumbParentTerm():',parentTodos);

    /* eslint-disable no-redeclare */
    var lastParent = lastParent || {}; // track last insertion to prevent recursion
    /* eslint-enable no-redeclare */

    if (parents == undefined || parents == null) {
      // no parent breadcrumb preset, exiting
      return;
    }

    function insertParent(activeParent) {
      if (activeParent == undefined || activeParent == null) {
        console.warn("embl-js-breadcrumbs-lookup: No matching parent found; Stopping parent lookup.");
        return;
      }
      activeParent.url = activeParent.url || "#no_url_specified";

      if (activeParent.name.indexOf(" root term") > 0) {
        // if we've reached a root term, abort lookups and don't insert a root term as a crumb
        return;
      }

      if (activeParent.primary == facet) {
        // only insert crumb if it respects the original term context: who/what/where
        if (activeParent.uuid != lastParent.uuid) {
          // no recursive output
          emblBreadcrumbPrimary.innerHTML = formatBreadcrumb(activeParent.name_display,activeParent.url,false) + emblBreadcrumbPrimary.innerHTML;
        }
      }

      // get parents of parent
      if (activeParent.parents) {
        if (activeParent.uuid != lastParent.uuid) {
          lastParent = activeParent;
          getBreadcrumbParentTerm(activeParent.parents,facet,lastParent);
        } else {
          console.log("embl-js-breadcrumbs-lookup", "Recursion in parent lookup. Check the EMBL.org Profile. Aborting lookup.");
          console.log("embl-js-breadcrumbs-lookup", "activeParent", activeParent);
          console.log("embl-js-breadcrumbs-lookup", "lastParent", lastParent);
        }
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
        // recursive test
        // parentId = '0c79d36e-ed33-482d-a396-15a0b2bc4540';
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
   * @param {boolean} [current] - if the breadcrumb is the current page
   */
  function formatBreadcrumb(termName,breadcrumbUrl,current) {
    if (termName == "" || termName == "none") {
      // if no term, do nothing
      return "";
    }

    if (current) {
      current = " aria-current=\"location\"";
    }

    var newBreadcrumb = "<li class=\"vf-breadcrumbs__item\""+current+">";
    if (breadcrumbUrl && breadcrumbUrl !== "null" && breadcrumbUrl !== "#no_url_specified") {
      newBreadcrumb += "<a href=\""+breadcrumbUrl+"\" class=\"vf-breadcrumbs__link\">" + termName + "</a>";
    } else {
      newBreadcrumb += termName;
    }
    newBreadcrumb += "</li>";

    return newBreadcrumb;
  }

  var currentTerm = getCurrentTerm(termName);
  /* eslint-disable no-unused-vars */
  var breadcrumbId = currentTerm.uuid,
    breadcrumbUrl = currentTerm.url,
    breadcrumbParents = currentTerm.parents,
    breadcrumbCurrent = false;
  /* eslint-enable no-unused-vars */

  // narrow down to the first matching element
  breadcrumbTarget = breadcrumbTarget[0];

  if (type == "primary") {
    // save it
    primaryBreadcrumb = currentTerm;

    var breadcrumbPath = new URL(breadcrumbUrl).pathname;
    var breadcrumbPathPrefix = ""; // if a crumb does or does not end in a "/" account for that
    if (breadcrumbPath.slice(-1) == "/") {
      breadcrumbPathPrefix == breadcrumbPath.slice(0, -1);
    } else {
      breadcrumbPathPrefix = breadcrumbPath + "/";
    }

    // check if the current breadcrumb is the current url
    if (breadcrumbPath == window.location.pathname || breadcrumbPathPrefix == window.location.pathname) {
      breadcrumbUrl = null;
      breadcrumbCurrent = true;
    }

    // add breadcrumb
    emblBreadcrumbPrimary.innerHTML += formatBreadcrumb(currentTerm.name_display,breadcrumbUrl,breadcrumbCurrent);

    // fetch parents for primary path
    getBreadcrumbParentTerm(breadcrumbParents, facet);
  } else if (type == "related") {
    // add breadcrumb
    emblBreadcrumbRelated.innerHTML += formatBreadcrumb(currentTerm.name_display,breadcrumbUrl,breadcrumbCurrent);
  }

}

function emblBreadcrumbs() {

  //clear existing breadcrumbs
  emblBreadcrumbPrimary.innerText = "";
  emblBreadcrumbRelated.innerText = "";

  // We start the breadcrumbs by first getting the EMBL taxonomy.
  emblGetTaxonomy().then(function() {
    // console.log('emblTaxonomy', emblTaxonomy);

    // Preprocess the emblTaxonomy for some cleanup tasks
    Array.prototype.forEach.call(Object.keys(emblTaxonomy.terms), (termId) => {
      let term = emblTaxonomy.terms[termId];
      // If `name_display` is not set, use the internal name
      if (term.name_display === "") term.name_display = term.name;
      // handle null URL
      if (term.url === "") term.url = "#no_url_specified";
    });

    // Invoke embl-content-meta-properties function to pull tags from page
    emblBreadcrumbsLookup(emblContentMetaProperties_Read());

  }, function(error) {
    console.warn("Failed to get EMBL ontology", error);
    var emblBreadcrumbTarget = document.querySelectorAll("[data-embl-js-breadcrumbs-lookup]");
    if (emblBreadcrumbTarget.length > 0) {
      emblBreadcrumbTarget[0].innerHTML = "<!-- Breadcrumbs failed to render due to network issue -->";
    }
  });
}


// Prepend polyfill for IE
// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md
(function (arr) {
  arr.forEach(function (item) {
    /* eslint-disable no-prototype-builtins */
    if (item.hasOwnProperty("prepend")) {
      return;
    }
    /* eslint-enable no-prototype-builtins */
    Object.defineProperty(item, "prepend", {
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

export { emblBreadcrumbs, emblGetTaxonomy };

// Run it on default
// emblBreadcrumbs();
