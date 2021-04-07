// embl-content-hub-loader

try {
  import { emblContentHubLoaderHtmlImports } from "embl-content-hub-loader/embl-content-hub-loader__html-imports";
} catch (e) {
  import { emblContentHubLoaderHtmlImports } from "../embl-content-hub-loader/embl-content-hub-loader__html-imports";
}
try {
  import { emblContentHubFetch } from "embl-content-hub-loader/embl-content-hub-loader__fetch";
} catch (e) {
  import { emblContentHubFetch } from "../embl-content-hub-loader/embl-content-hub-loader__fetch";
}

function emblContentHub() {

  // 1. make sure we have imports or a pollyfill
  emblContentHubLoaderHtmlImports();

  // 2. import the content
  emblContentHubFetch();
}

export { emblContentHub };
