// embl-boilerplate-page

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
      if (term.name === termName) {
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
   * @param {string} [breadcrumbUrl] - a fully formed URL, or 'null' to not make a link
   * @param {string} [position] - where to place it, `prepend` or `append`
   */
  function insertBreadcrumb(termName,breadcrumbUrl,position) {
    var newBreadcrumb = document.createElement("li");
    if (breadcrumbUrl && breadcrumbUrl !== 'null') {
      newBreadcrumb.innerHTML = '<a href="'+breadcrumbUrl+'" class="vf-breadcrumbs__link">' + termName + '</a>';
    } else {
      newBreadcrumb.innerHTML = termName;
    }
    newBreadcrumb.classList.toggle('vf-breadcrumbs__item');

    if (position === 'prepend') {
      breadcrumbTarget.prepend(newBreadcrumb);
    } else {
      breadcrumbTargetRelated.append(newBreadcrumb);
    }
  }

  var currentTerm = getCurrentTerm(termName);
  if (currentTerm == undefined || currentTerm == null) {
    console.warn('embl-js-breadcumbs-lookup: No matching breadcrumb found for `' + termName + '`; Exiting.');
  }
  var breadcrumbId = currentTerm.uuid,
      breadcrumbUrl = currentTerm.url || 'null',
      breadcrumbParents = currentTerm.parents;

  // narrow down to the first matching element
  breadcrumbTarget = breadcrumbTarget[0];

  if (type == 'primary') {
    // remove any loading text
    var loadingText = document.querySelectorAll('.embl-breadcrumbs-lookup__loading-text');
    if (loadingText.length > 0) { loadingText[0].remove(); }

    // add breadcrumb
    insertBreadcrumb(currentTerm.name_display,'null','prepend');

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

// embl-conditional-edit

/**
 * Invoke emblConditionalEditDetectParam scopped to objects where
 * data-embl-js-conditional-edit is present
 */
function emblConditionalEdit() {
  const emblConditionalEdit = document.querySelectorAll('[data-embl-js-conditional-edit]');
  if (!emblConditionalEdit) {
    // exit: lists not found
    return;
  }
  if (emblConditionalEdit.length == 0) {
    // exit: lists not found
    return;
  }

  Array.prototype.forEach.call(emblConditionalEdit, (element, i) => {
    emblConditionalEditDetectParam(location.href,element);
  });
}

/**
 * Detects `?embl-conditional-edit=enabled` or `?embl-conditional-edit=1`
 * and adds `.embl-coditional-edit__enabled` to display the edit links
 * @param {string} [url] - the url to check for an enabling param
 * @param {element} [element] - the scopped element to be processed
 */
function emblConditionalEditDetectParam(url,element) {
  var captured = /embl-conditional-edit=([^&]+)/.exec(url);
  if (captured == null) {
    // value not found

    // also try against any parent iframe url
    if (window.self !== window.top) {
      emblConditionalEditDetectParam(parent.window.location,element);
    }

    return;
  }
  captured = captured[1];

  if (captured == '1' || captured == 'enabled') {
    element.className += ' ' + 'embl-coditional-edit__enabled';
  }
}

emblConditionalEdit();

// embl-content-hub-loader

function emblContentHub() {

  // Some JS utilities
  // via https://stackoverflow.com/a/32135318
  Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
  },false;
  Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
  },false;


  /**
   * Get the number of days between two dates.
   */
  function days_between(date1, date2) {
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY) + 1;
  }

  // A list of all the links
  var emblContentHubLinks = document.querySelectorAll('[data-embl-js-content-hub-loader]');
  var emblContentHubLinkLoadingProgress = {};
  var emblContentHubShowTimers = false;

  // Handle the import of each element
  for (i = 0; i < emblContentHubLinks.length; ++i) {
    (function () {
      var linkPosition = i;

      // track time it takes for link to be shown
      if (emblContentHubShowTimers) { console.time('timer for import ' + linkPosition); }

      // if native, no need to wait
      if (emblContentHubLinks[linkPosition].import !== undefined) {
        emblContentHubGrabTheContent(emblContentHubLinks[linkPosition],linkPosition);
        if (linkPosition+1 == emblContentHubLinks.length) {
          emblContentHubSignalFinished();
        }
      } else {
        // await the import's loading
        emblContentHubAwaitLoading(emblContentHubLinks[linkPosition],linkPosition);
      }

    }());
  }

  // Add a class to the body once the last item has been processed
  function emblContentHubSignalFinished() {
    document.querySelectorAll('body')[0].classList.add('embl-content-hub-loaded');
  }

  // Dispatch load to the pollyfill
  function emblContentHubAwaitLoading(targetLink,position) {
    // Docs: https://github.com/AshleyScirra/html-imports-polyfill#usage
    addImport(targetLink.href, null, emblContentHubLinkLoadingProgress).then(function(value) {
      emblContentHubGrabTheContent(targetLink,position,value);

      if (position+1 == emblContentHubLinks.length) {
        emblContentHubSignalFinished();
      }
    });
  }

  // Generate a unique ID for the target element on the page
  function emblContentHubGenerateID(position) {
    return 'contentDbItem' + ('0000' + position).slice(-5);
  }

  // Show the remote content
  function emblContentHubGrabTheContent(targetLink,position,exportedContent) {

    // pickup the "meat" of the exported content
    exportedContent = exportedContent || targetLink.import.querySelector('.vf-content-hub-html');

    // if there is just one child element and it is a div, use that
    // (this helps with css grid layout)
    if (exportedContent.childElementCount === 1 &&
        exportedContent.firstElementChild.innerHTML.trimLeft().substr(0,4) === '<div'
       ) {
      exportedContent = exportedContent.firstElementChild;
      exportedContent.classList.add('vf-content-hub-html');
      exportedContent.classList.add('vf-content-hub-html__derived-div');
    }

    var contentID = emblContentHubGenerateID(position);

    // where does the content go?
    if (targetLink.dataset.target === 'self') {
      // if element already exists, remove it
      var oldElement = document.getElementById(contentID);
      if (oldElement) {
        oldElement.innerHTML = exportedContent.innerHTML;
      } else {
        // give content an ID
        exportedContent.setAttribute("id", contentID);
        exportedContent.classList.add(contentID);
        // just insert the new content
        exportedContent.appendAfter(targetLink);
      } // end if oldElement
    } else {
      var targetLocation = document.querySelector('.'+targetLink.dataset.target);
      // exportedContent.appendAfter(targetLocation);
      targetLocation.classList.add(contentID);
      targetLocation.innerHTML = exportedContent.innerHTML;
    }

    // display how long it took to load
    if (emblContentHubShowTimers) { console.timeEnd('timer for import ' + position); }

    emblContentHubAssignClasses(targetLink,position);
    emblContentHubUpdateDatesFormat(position);
  }

  // Enable class injection after loading contents
  // ... for all those edge cases
  // Background: https://gitlabci.ebi.ac.uk/emblorg/backlog/issues/82
  // Sample:
  //  <link rel="import" href="url" data-target="self"
  //        data-inject-class="vf-grid vf-grid__col-2"
  //        data-inject-class-target="ul"
  //        data-embl-js-content-hub-loader>
  //  This would make the ul a two-column grid.
  function emblContentHubAssignClasses(targetLink,position) {
    // var injectRequests = document.querySelectorAll('[data-inject-class][data-inject-class-target]');
    //
    // for (i = 0; i < injectRequests.length; ++i) {

    var classesToInject = targetLink.getAttribute('data-inject-class');
    var targetSelectorToInject = targetLink.getAttribute('data-inject-class-target');

    if (classesToInject && targetSelectorToInject) {
      // Limit scope to the imported element
      var targetElement = document.querySelector('.'+emblContentHubGenerateID(position)).querySelector(targetSelectorToInject);

      // We can't inject space separated classes to we need to split it into arrays and add one by one.
      var classesToInject = classesToInject.split(' ');

      for (classNumber = 0; classNumber < classesToInject.length; classNumber++) {
        targetElement.classList.add(classesToInject[classNumber]);
      }

    }


  }

  /**
   * Update the format of close date.
   */
  function emblContentHubUpdateDatesFormat(position) {
    var dateRemainingList = document.querySelector('.'+emblContentHubGenerateID(position)).querySelectorAll('.date-days-remaining');
    var todayDate = new Date();
    if (dateRemainingList.length > 0) {
      for (dateRemainingIndex = 0; dateRemainingIndex < dateRemainingList.length; dateRemainingIndex++) {
        var dateValue = parseInt(dateRemainingList[dateRemainingIndex].getAttribute('data-datetime')) * 1000;
        dateValue = new Date(dateValue);
        var numberOfDiffDays = days_between(dateValue, todayDate);
        // Update to 'Closes in 6 Days.' format if number of days is less than 30 days.
        if (numberOfDiffDays < 30 && numberOfDiffDays > 1) {
          dateRemainingList[dateRemainingIndex].innerHTML =  'Closes in ' + '<span>' + numberOfDiffDays + ' Days.</span>';
        }

        if (numberOfDiffDays == 1) {
          dateRemainingList[dateRemainingIndex].innerHTML =  'Closes in ' + '<span>' + numberOfDiffDays + ' Day.</span>';
        }
      }
    }
  }

}

emblContentHub();

// embl-content-hub-loader__html-imports

// A trimmed down version of
// https://github.com/AshleyScirra/html-imports-polyfill/blob/master/htmlimports.js
// mostly we dropped CSS and sub-imports

function emblContentHubLoaderHtmlImports() {
	// Map a script URL to its import document for GetImportDocument()
	const scriptUrlToImportDoc = new Map();

	function GetPathFromURL(url)
	{
		if (!url.length)
			return url;		// empty string

		const lastCh = url.charAt(url.length - 1);
		if (lastCh === "/" || lastCh === "\\")
			return url;		// already a path terminated by slash

		let last_slash = url.lastIndexOf("/");

		if (last_slash === -1)
			last_slash = url.lastIndexOf("\\");

		if (last_slash === -1)
			return "";			// neither slash found, assume no path (e.g. "file.ext" returns "" as path)

		return url.substr(0, last_slash + 1);
	};

	// Determine base URL of document.
	const baseElem = document.querySelector("base");
	let baseHref = ((baseElem && baseElem.hasAttribute("href")) ? baseElem.getAttribute("href") : "");

	// If there is a base href, ensure it is of the form 'path/' (not '/path', 'path' etc)
	if (baseHref)
	{
		if (baseHref.startsWith("/"))
			baseHref = baseHref.substr(1);

		if (!baseHref.endsWith("/"))
			baseHref += "/";
	}

	function GetBaseURL()
	{
		return GetPathFromURL(location.origin + location.pathname) + baseHref;
	};

	function FetchAs(url, responseType)
	{
		return new Promise((resolve, reject) =>
		{
			const xhr = new XMLHttpRequest();
			xhr.onload = (() =>
			{
				if (xhr.status >= 200 && xhr.status < 300)
				{
					resolve(xhr.response);
				}
				else
				{
					reject(new Error("Failed to fetch '" + url + "': " + xhr.status + " " + xhr.statusText));
				}
			});
			xhr.onerror = reject;

			xhr.open("GET", url);
			xhr.responseType = responseType;
			xhr.send();
		});
	}


	function _AddImport(url, preFetchedDoc, rootContext, progressObject)
	{
		let isRoot = false;

		// The initial import creates a root context, which is passed along to all sub-imports.
		if (!rootContext)
		{
			isRoot = true;
			rootContext = {
				alreadyImportedUrls: new Set(),		// for deduplicating imports
				stylePromises: [],
				scriptPromises: [],
				progress: (progressObject || {})	// progress written to this object (loaded, total)
			};

			rootContext.progress.loaded = 0;
			rootContext.progress.total = 1;			// add root import
		}

		// Each import also tracks its own state with its own context.
		const context = {
			importDoc: null,
			baseUrl: GetPathFromURL(url),
			dependencies: []
		};

		// preFetchedDoc is passed for sub-imports which pre-fetch their documents as an optimisation. If it's not passed,
		// fetch the URL to get the document.
		let loadDocPromise;

		if (preFetchedDoc)
			loadDocPromise = Promise.resolve(preFetchedDoc);
		else
			loadDocPromise = FetchAs(url, "document");

		return loadDocPromise
		.then(doc =>
		{
			// HACK: in Edge, due to this bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12458748/
			// the fetched document URL is incorrect. doc.URL is also read-only so cannot directly be assigned. To work around this,
			// calculate the correct URL and use Object.defineProperty to override the returned document URL.
			Object.defineProperty(doc, "URL", {
				value: new URL(url, GetBaseURL()).toString()
			});

			// we don't need the `body` wrapper, so return the first child
			return doc.body.firstChild;
		})
	}

	function AddImport(url, async, progressObject)
	{
		// Note async attribute ignored (was only used for old native implementation).
		return _AddImport(url, null, null, progressObject);
	}

	window["addImport"] = AddImport;
}

emblContentHubLoaderHtmlImports();

// embl-content-meta-properties

// In addition to being queried by other patterns' JS, this could
// also add classes to a page to affect the overall look of a page.


/**
 * Read metaProperties from page's metatags
 * @example emblContentMetaProperties_Read()
 */
function emblContentMetaProperties_Read() {
  var metaProperties = {};
  // <!-- Content descriptors -->
  // <meta name="embl:who" content="{{ meta-who }}"> <!-- the people, groups and teams involved -->
  // <meta name="embl:what" content="{{ meta-what }}"> <!-- the activities covered -->
  // <meta name="embl:where" content="{{ meta-where }}"> <!-- at which EMBL sites the content applies -->
  // <meta name="embl:active" content="{{ meta-active }}"> <!-- which of the who/what/where is active -->
  metaProperties.who = metaProperties.who || document.querySelector("meta[name='embl:who']");
  metaProperties.what = metaProperties.what || document.querySelector("meta[name='embl:what']");
  metaProperties.where = metaProperties.where || document.querySelector("meta[name='embl:where']");
  metaProperties.active = metaProperties.active || document.querySelector("meta[name='embl:active']");

  // <!-- Content role -->
  // <meta name="embl:utility" content="-8"> <!-- if content is task and work based or if is meant to inspire -->
  // <meta name="embl:reach" content="-5"> <!-- if content is externally (public) or internally focused (those that work at EMBL) -->
  metaProperties.utility = metaProperties.utility || document.querySelector("meta[name='embl:utility']");
  metaProperties.reach = metaProperties.reach || document.querySelector("meta[name='embl:reach']");

  // <!-- Page infromation -->
  // <meta name="embl:maintainer" content="{{ meta-maintainer }}"> <!-- the contact person or group responsible for the page -->
  // <meta name="embl:last-review" content="{{ meta-last-review }}"> <!-- the last time the page was reviewed or updated -->
  // <meta name="embl:review-cycle" content="{{ meta-review-cycle }}"> <!-- how long in days before the page should be checked -->
  // <meta name="embl:expiry" content="{{ meta-expiry }}"> <!-- if there is a fixed point in time when the page is no longer relevant -->
  metaProperties.maintainer = metaProperties.maintainer || document.querySelector("meta[name='embl:maintainer']");
  metaProperties.lastReview = metaProperties.lastReview || document.querySelector("meta[name='embl:last-review']");
  metaProperties.reviewCycle = metaProperties.reviewCycle || document.querySelector("meta[name='embl:review-cycle']");
  metaProperties.expiry = metaProperties.expiry || document.querySelector("meta[name='embl:expiry']");

  for(var key in metaProperties) {
    if (metaProperties[key] != null && metaProperties[key].getAttribute("content").length != 0) {
      metaProperties[key] = metaProperties[key].getAttribute("content");
    } else {
      metaProperties[key] = 'notSet';
    }
  }

  return metaProperties;
}

// embl-group-page

// embl-subsite-page

// vf-article-meta-information

// vf-banner

var remove = function(){
  this.closest('.vf-banner--gdpr').remove();
};

var GDPRBanner = document.querySelectorAll('.vf-banner--gdpr');
var GDPRButton = document.querySelectorAll('.vf-banner--gdpr .vf-button');

for (var i = 0, len = GDPRBanner.length; i < len; i++) {
  GDPRButton[i].addEventListener('click', remove, false);
}

// vf-boilerplate-page

// vf-data-protection-banner

var remove = function(){
  this.closest('.vf-data-protection-banner').remove();
};

var GDPRBanner = document.querySelectorAll('.vf-data-protection-banner');
var GDPRButton = document.querySelectorAll('.vf-data-protection-banner__button');

for (var i = 0, len = GDPRBanner.length; i < len; i++) {
  GDPRButton[i].addEventListener('click', remove, false);
}

// vf-footer

// vf-inlay

// vf-no-js

// document.

/**
 * Finds all tabs on a page and activates them
 * @example vfTabs()
 */
function vfTabs() {
  // Get relevant elements and collections
  // todo: `document` here should be a scopped passed param like #mydiv or .my-div
  const tablist = document.querySelectorAll('[data-vf-js-tabs]');
  const panelsList = document.querySelectorAll('[data-vf-js-tabs-content]');
  const panels = document.querySelectorAll('[data-vf-js-tabs-content] [id^="vf-tabs__section"]');
  const tabs = document.querySelectorAll('[data-vf-js-tabs] .vf-tabs__link');
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
    let oldTab = parentTabSet.querySelector('[aria-selected]');
    if (oldTab) {
      oldTab.removeAttribute('aria-selected');
      oldTab.setAttribute('tabindex', '-1');
      oldTab.classList.remove('is-active');
      let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
      panels[oldIndex].hidden = true;
    }

    newTab.focus();
    // Make the active tab focusable by the user (Tab key)
    newTab.removeAttribute('tabindex');
    // Set the selected state
    newTab.setAttribute('aria-selected', 'true');
    newTab.classList.add('is-active');
    // Get the indices of the new tab to find the correct
    // tab panel to show
    let index = Array.prototype.indexOf.call(tabs, newTab);
    panels[index].hidden = false;
  }

  // Add semantics are remove user focusability for each tab
  Array.prototype.forEach.call(tabs, (tab, i) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', 'tab' + (i + 1));
    tab.setAttribute('data-tabs__item', 'tab' + (i + 1));
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation');

    // Reset any active tabs from a previous JS call
    tab.removeAttribute('aria-selected');
    tab.setAttribute('tabindex', '-1');
    tab.classList.remove('is-active');

    // Handle clicking of tabs for mouse users
    tab.addEventListener('click', e => {
      e.preventDefault();
      switchTab(e.currentTarget);
    });

    // Handle keydown events for keyboard users
    tab.addEventListener('keydown', e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(tabs[dir]) : void 0;
      }
    });
  });

  // Add tab panel semantics and hide them all
  Array.prototype.forEach.call(panels, (panel, i) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    let id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  });

  // Add the tablist role to the first <ul> in the .tabbed container
  Array.prototype.forEach.call(tablist, (tablistset, i) => {
    tablistset.setAttribute('role', 'tablist');
    // Initially activate the first tab
    let firstTab = tablistset.querySelectorAll('.vf-tabs__link')[0];
    firstTab.removeAttribute('tabindex');
    firstTab.setAttribute('aria-selected', 'true');
    firstTab.classList.add('is-active');
  });
  Array.prototype.forEach.call(panelsList, (panel, i) => {
    // Initially reveal the first tab panel
    let firstPanel = panel.querySelectorAll('.vf-tabs__section')[0];
    firstPanel.hidden = false;
  });

}


vfTabs();

/*!
 * Float Labels
 * @version: 3.3.5
 * @author: Paul Ryley (http://geminilabs.io)
 * @url: https://geminilabs.github.io/float-labels.js
 * @license: MIT
 */
!function(t,r,e){"use strict";var n=function(t,e){this.t=this.e(t)?r.querySelectorAll(t):[t],this.n=[],this.i=e,this.r=[],this.o(),this.destroy=function(){this.u(function(t){t.removeEventListener("reset",this.events.reset),this.s(t)},function(t){this.a(t)})},this.rebuild=function(){this.u(null,function(t){this.l(t,!0)})}};n.prototype={c:{customEvent:null,customLabel:null,customPlaceholder:null,exclude:".no-label",inputRegex:/email|number|password|search|tel|text|url/,prefix:"fl-",prioritize:"label",requiredClass:"required",style:0,transform:"input,select,textarea"},o:function(){var i=this;i.f(),i.u(function(t,e){var n=i.n[e].style;t.addEventListener("reset",i.events.reset),t.classList.add(i.h("form")),n&&t.classList.add(i.h("style-"+n))},function(t){i.l(t)})},f:function(){var t=this;t.events={blur:t.d.bind(t),change:t.v.bind(t),focus:t.p.bind(t),input:t.v.bind(t),reset:t._.bind(t)}},b:function(t){return t?"add":"remove"},m:function(t){var e=this,n=e.y(t);n&&(t.classList.add(e.h(t.tagName.toLowerCase())),e.L(n,t),e.g(n,t),e.w(n,t),e.x(t,"add"),"function"==typeof e.n[e.S].customEvent&&e.n[e.S].customEvent.call(e,t))},T:function(t,e){var n="string"==typeof t?r.createElement(t):t;for(var i in e=e||{})e.hasOwnProperty(i)&&n.setAttribute(i,e[i]);return n},C:function(){var t=[].slice.call(arguments),n=t[0],i=t.slice(1);return Object.keys(i).forEach(function(t){for(var e in i[t])i[t].hasOwnProperty(e)&&(n[e]=i[t][e])}),n},l:function(t,e){var n=this;if(n.P(t)){if(n.j(t)){if(!0!==e)return;n.a(t)}n.m(t)}},y:function(t){var e='label[for="'+t.getAttribute("id")+'"]',n=this.t[this.S].querySelectorAll(e);return 1<n.length&&(n=t.parentNode.querySelectorAll(e)),1===n.length&&n[0]},q:function(t,e){var n=t.textContent.replace(/[*:]/g,"").trim(),i=e.getAttribute("placeholder");return(!n||n&&i&&"placeholder"===this.n[this.S].prioritize)&&(n=i),n},x:function(e,n){var i=this.events;["blur","input","focus"].forEach(function(t){"input"!==t||"file"!==e.type&&"SELECT"!==e.nodeName||(t="change"),e[n+"EventListener"](t,i[t])})},j:function(t){return t.parentNode.classList.contains(this.h("wrap"))},e:function(t){return"[object String]"===Object.prototype.toString.call(t)},P:function(t){var e="INPUT"===t.tagName&&!this.n[this.S].inputRegex.test(t.getAttribute("type")),n="SELECT"===t.tagName&&null!==t.getAttribute("multiple");return t.getAttribute("id")&&!e&&!n},u:function(t,e){for(var n=this,i=0;i<n.t.length;++i){if(void 0===n.r[i]){var r=n.C({},n.c,n.i,n.t[i].getAttribute("data-options")),o=":not("+r.exclude.split(/[\s,]+/).join("):not(")+")";n.r[i]=r.transform.replace(/,/g,o+",")+o,n.n[i]=r}var u=n.t[i].querySelectorAll(n.r[i]);n.S=i,"function"==typeof t&&t.call(n,n.t[i],i);for(var s=0;s<u.length;++s)"function"==typeof e&&e.call(n,u[s],i)}},d:function(t){t.target.parentNode.classList.remove(this.h("has-focus"))},v:function(t){t.target.parentNode.classList[this.b(t.target.value.length)](this.h("is-active"))},p:function(t){t.target.parentNode.classList.add(this.h("has-focus"))},_:function(){setTimeout(this.F.bind(this))},h:function(t){return this.n[this.S].prefix+t},s:function(t){var e=this.n[this.S].prefix,n=t.className.split(" ").filter(function(t){return 0!==t.lastIndexOf(e,0)});t.className=n.join(" ").trim()},a:function(t){var e=t.parentNode;if(this.j(t)){for(var n=r.createDocumentFragment();e.firstElementChild;){var i=e.firstElementChild;this.s(i),n.appendChild(i)}e.parentNode.replaceChild(n,e),this.O(t),this.x(t,"remove")}},F:function(){for(var t=this,e=t.t[t.S].querySelectorAll(t.r[t.S]),n=0;n<e.length;++n)e[n].parentNode.classList[t.b("SELECT"===e[n].tagName&&""!==e[n].value)](t.h("is-active"))},O:function(t){var e="data-placeholder",n=t.getAttribute(e);null!==n&&(t.removeAttribute(e),t.setAttribute("placeholder",n))},L:function(t,e){var n=this;t.classList.add(n.h("label")),t.textContent=n.q(t,e),"function"==typeof n.n[n.S].customLabel&&(t.textContent=n.n[n.S].customLabel.call(n,t,e))},g:function(t,e){var n=this,i=e.getAttribute("placeholder");"label"!==n.n[n.S].prioritize&&i||(i&&e.setAttribute("data-placeholder",i),i=n.q(t,e)),"function"==typeof n.n[n.S].customPlaceholder&&(i=n.n[n.S].customPlaceholder.call(n,i,e,t)),"SELECT"===e.tagName?n.R(e,i):e.setAttribute("placeholder",i)},R:function(t,e){var n=t.firstElementChild;n.hasAttribute("value")&&n.value?(t.insertBefore(new Option(e,""),n),!1===t.options[t.selectedIndex].defaultSelected&&(t.selectedIndex=0)):n.setAttribute("value",""),""===n.textContent&&(n.textContent=e)},w:function(t,e){var n=this,i=n.T("div",{class:n.h("wrap")+" "+n.h("wrap-"+e.tagName.toLowerCase())});void 0!==e.value&&e.value.length&&i.classList.add(n.h("is-active")),(null!==e.getAttribute("required")||e.classList.contains(n.n[n.S].requiredClass))&&i.classList.add(n.h("is-required")),e.parentNode.insertBefore(i,e),i.appendChild(t),i.appendChild(e)}},"function"==typeof define&&define.amd?define([],function(){return n}):"object"==typeof module&&module.exports?module.exports=n:t.FloatLabels=n}(window,document);
