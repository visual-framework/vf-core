// vf-banner-elixir

// if you need to import any other components' JS to use here
// import { vfOthercomponent } from vfImportPrefix + '../vf-other-component/vf-other-component';

/**
  * The global function for this component
  * @example vfBanner-Elixir(scope)
  * @param {object} [scope] - the html scope to process, optional, defaults to `document`
  */
function vfBannerElixir(scope) {
  /* eslint-disable no-redeclare */
  var scope = scope || document;
  /* eslint-enable no-redeclare */
  const elixirBanner = scope.querySelectorAll("[data-vf-js-banner-elixir]");
  if (elixirBanner.length == 0) {
    // exit: banner content not found
    return;
  }
  if (elixirBanner.length > 1) {
    console.warn("vf-banner-elixir","More than one ELIXIR banner found, only the first will be processed.");
    return;
  }

  let logo = elixirBanner[0].dataset.vfJsBannerElixirLogo;
  let name = elixirBanner[0].dataset.vfJsBannerElixirName;
  let description = elixirBanner[0].dataset.vfJsBannerElixirDescription;
  let link = elixirBanner[0].dataset.vfJsBannerElixirLink;

  if (!logo) {
    logo = "https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.2/images/logos/assorted/elixir_kitemark-60px.png";
  }
  if (logo == "CDR" || logo == "cdr") {
    logo == "https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.4/images/logos/ELIXIR/elixir-cdr.gif";
  }
  if (!name) {
    name = "This service";
  }
  if (!description) {
    description = "This is part of the ELIXIR distributed infrastructure for life-science information.";
  }
  if (!link || link == "default") {
    link = "http://www.elixir-europe.org";
  }

  elixirBanner[0].innerHTML = `
    <div class="vf-flag vf-flag--middle vf-flag--400">
      <div class="vf-flag__media">
        <a href="${link}" class="vf-banner__link"><img src="${logo}" alt="ELIXIR Logo"></a>
      </div>
      <div class="vf-flag__body">
        <h4 class='vf-banner__text--lg'><a href="${link}" class="vf-link">${name} is part of the ELIXIR infrastructure</a></h4>
        <p class="vf-banner__text">${description}</p>
      </div>
    </div>
  `;
}

// If you need to invoke the component by default
// vfBannerElixir();

// By default your component should be usable with js imports
export { vfBannerElixir };

// You should also import it at ./components/vf-component-rollup/scripts.js
// import { vfBannerElixir } from 'vf-banner-elixir/vf-banner-elixir';
// Or import directly
// import { vfBannerElixir } from '../components/raw/vf-banner-elixir/vf-banner-elixir.js';
// And, if needed, invoke it
// vfBannerElixir();

