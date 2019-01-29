// embl-content-hub-loader

function emblContentHub() {

  // 1. make sure we have imports or a pollyfill
  emblContentHubLoaderHtmlImports();

  // 2. import the content
  emblContentHubFetch();
}

emblContentHub();
