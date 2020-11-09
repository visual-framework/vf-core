// embl-content-hub-loader__html-imports

// A trimmed down version of
// https://github.com/AshleyScirra/html-imports-polyfill/blob/master/htmlimports.js
// mostly we dropped CSS and sub-imports

function emblContentHubLoaderHtmlImports() {
  // Map a script URL to its import document for GetImportDocument()
  // const scriptUrlToImportDoc = new Map();

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
  }

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
  }

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
    /* eslint-disable no-unused-vars */
    let isRoot = false;
    /* eslint-enable no-unused-vars */

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
    /* eslint-disable no-unused-vars */
    const context = {
      importDoc: null,
      baseUrl: GetPathFromURL(url),
      dependencies: []
    };
    /* eslint-enable no-unused-vars */

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
      });
  }

  function AddImport(url, async, progressObject)
  {
    // Note async attribute ignored (was only used for old native implementation).
    return _AddImport(url, null, null, progressObject);
  }

  window["addImport"] = AddImport;
}

export { emblContentHubLoaderHtmlImports };
