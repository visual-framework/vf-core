// vf-search-client-side

// if you need to import any other components' JS to use here
// import { vfOthercomponent } from 'vf-other-component/vf-other-component';

/* global lunr */
/* global searchIndex */

/**
 * The global function for this component
 * @example vfcomponentName()
 */
function vfSearchClientSide() {
  var searchTerm;
  const searchQueryInput = document.querySelectorAll("[data-vf-search-client-side-input]"); // where we put the query
  const searchResultsContainer = document.querySelectorAll("[data-vf-search-client-side-results]"); // where we put the search results

  // some tips
  // https://lunrjs.com/guides/customising.html
  // https://davidwalsh.name/adding-search-to-your-site-with-javascript

  // this lunr pipeline disregards hyphens by breaking up words
  // It's particularly good if users might type `vf-tabs` or `tabs` to find `vf-tabs`
  var customPipelineWithoutHyphens = function (builder) {
    var pipelineFunction = function (token) {
      var tokenStr = token.toString();
      // if there are no hyphens then skip this logic
      if (tokenStr.indexOf("-") < 0) return token;


      // split the token by hyphens, returning a clone of the original token with the split
      // e.g. 'anti-virus' -> 'anti', 'virus'
      var tokens = tokenStr.split("-").map(function (s) {
        return token.clone(function () {
          return s;
        });
      });

      // var tokens = [];
      // clone the token and replace any hyphens
      // e.g. 'anti-virus' -> 'antivirus'
      // tokens.push(token.clone(function(s) {
      //   return s.replace('-', '');
      // }));

      // finally push the original token into the list
      // 'anti-virus' -> 'anti-virus'
      tokens.push(token);
      return tokens;
    };

    lunr.Pipeline.registerFunction(pipelineFunction, "customPipelineWithoutHyphens");
    builder.pipeline.before(lunr.stemmer, pipelineFunction);
    builder.searchPipeline.before(lunr.stemmer, pipelineFunction);
  };

  // set up lunr search index
  var idx = lunr(function () {
    this.tokenizer.separator = /[\s]+/;
    this.use(customPipelineWithoutHyphens);

    this.field("title", {
      boost: 100
    });
    this.field("text", {
      boost: 0.1
    });
    this.field("url");
    this.metadataWhitelist = ["position"];

    searchIndex.pages.forEach(function (page) {
      this.add(page);
    }, this);

  });

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === variable) {
        var temp = decodeURIComponent(pair[1].replace(/\+/g, "%20"));
        temp = temp.replace(/(<([^>]+)>)/ig, ""); // "strip tags"
        // console.log("Found query", temp);
        return temp;
      }
    }
  }

  // Grab any query from the URL on bootstrap
  searchTerm = getQueryVariable("search_query");

  // set the input box to the search query
  if (typeof searchTerm !== "undefined") {
    searchQueryInput[0].value = searchTerm;
  }

  // get search box query string
  function getValueFromSearchBox() {
    searchTerm = searchQueryInput[0].value.replace(/(<([^>]+)>)/ig, ""); // "strip tags"
    renderResults();
  }

  // watch search box for changes
  let searchQueryInputTimeout;
  searchQueryInput[0].addEventListener("keypress", function(){
    if(searchQueryInputTimeout) {
      clearTimeout(searchQueryInputTimeout);
      searchQueryInputTimeout = null;
    }

    searchQueryInputTimeout = setTimeout(getValueFromSearchBox, 600);
  });

  function renderResults() {
    // strip out searches for `vf-` as it's a junk term
    let searchTermTrimmed = searchTerm.replace("vf-", "");

    // run the search
    let results = idx.search(searchTermTrimmed);

    if (results.length === 0) {
      searchResultsContainer[0].innerHTML = "No results found";

      return false;
    }

    let searchDestinationPrefix = searchQueryInput[0].dataset.vfSearchClientSideDestinationPrefix;

    // console.log("searchTermTrimmed", searchTermTrimmed);

    // map the search hits to the search pages
    let resultPages = results.map(function (match) {
      return searchIndex.pages[match.ref];
    });

    // generate the HTML markup for the results
    let renderedResults = "";

    // if search term, generate output
    if (searchTermTrimmed != "") {
      resultPages.forEach(element => {
        if (typeof element !== "undefined") {
          element.text = element.text || "";
          renderedResults += "<a class='result' href='" + searchDestinationPrefix + element.url + "?q=" + searchTerm + "'><h3>" + element.title + "</h3></a>";
          renderedResults += "<p class='snippet'>" + element.text.substring(0, 200) + "</p>";
          renderedResults += "<p><code>" + element.url + "</code></p>";
        }
      });
    } else {
      // renderedResults = "<p class='snippet'>Enter a search query.</p>";
    }

    // put the results on the page
    searchResultsContainer[0].innerHTML = renderedResults;
  }

  // default invocation
  getValueFromSearchBox();
}

export { vfSearchClientSide };

// You should import this js file at ./components/vf-core/scripts.js
// import { vfcomponentName } from '../components/raw/vf-component/vf-component.js';
// And, if needed, invoke it
// vfSearchClientSide();
