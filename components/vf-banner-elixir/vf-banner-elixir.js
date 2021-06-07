// vf-banner-elixir

/*
 * A note on the Visual Framework and JavaScript:
 * The VF is primarily a CSS framework so we've included only a minimal amount
 * of JS in components and it's fully optional (just remove the JavaScript selectors
 * i.e. `data-vf-js-tabs`). So if you'd rather use Angular or Bootstrap for your
 * tabs, the Visual Framework won't get in the way.
 *
 * When querying the DOM for elements that should be acted on:
 * 🚫 Don't: const tabs = document.querySelectorAll('.vf-tabs');
 * ✅ Do:    const tabs = document.querySelectorAll('[data-vf-js-tabs]');
 *
 * This allows users who would prefer not to have this JS engage on an element
 * to drop `data-vf-js-component` and still maintain CSS styling.
 */

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
  if (!elixirBanner) {
    // exit: banners not found
    return;
  }
  if (elixirBanner.length == 0) {
    // exit: banner content not found
    return;
  }
  if (elixirBanner.length > 1) {
    console.warn('vf-banner-elixir','More than one ELIXIR banner found, only the first will be processed.')
    return;
  }

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

