// embl-content-hub-loader

import { emblContentHubLoaderHtmlImports } from "../embl-content-hub-loader/embl-content-hub-loader__html-imports";
import { emblContentHubFetch } from "../embl-content-hub-loader/embl-content-hub-loader__fetch";

function emblContentHub() {
  // 1. make sure we have imports or a polyfill
  emblContentHubLoaderHtmlImports();

  // 2. import the content
  emblContentHubFetch();
}

export { emblContentHub };
