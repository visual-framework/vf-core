// vf-local-overrides

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

// // if you need to import any other components' JS to use here
// import { vfOthercomponent } from 'vf-other-component/vf-other-component';

//  /**
//   * The global function for this component
//   * @example vfcomponentName(firstPassedVar)
//   * @param {string} [firstPassedVar]  - An option to be passed
//   */
//  function vfLocalOverrides(firstPassedVar) {
//   firstPassedVar = firstPassedVar || 'defaultVal';
//   console.log('vfLocalOverrides invoked with a value of', firstPassedVar);
// }

// // If you need to invoke the component by default
// vfLocalOverrides();

// By default your component should be usable with js imports
// export { vfLocalOverrides };
//
// // You should also import it at ./components/vf-core/scripts.js
// // import { vfcomponentName } from '../components/raw/vf-component/vf-component.js';
// // And, if needed, invoke it
// // vfcomponentName();

import React from 'react';

// VF njk templates
import vfNunjucks from './assets/nunjucks-slim.js';
/* eslint-disable import/no-webpack-loader-syntax, no-eval */
import VfLogoTemplate from "raw-loader!@visual-framework/vf-logo/vf-logo.precompiled.js"; // https://webpack.js.org/loaders/raw-loader/
eval(VfLogoTemplate); // we use eval as we specifically want to run a known template
/* eslint-enable import/no-webpack-loader-syntax, no-eval */

// VF component wrappers
// ----

class VfLogoCallback extends React.Component {
  componentDidMount() {
    // any JS actions needed
    // console.log('any JS actions needed')
  }

  render() {
    return <div />;
  }
}

type VfLogoProps = {
  title: string;
};

export const VfLogo = React.memo(({ title, VfLogoPath }: VfLogoProps) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ 
        // our HTML is handled by nunjucks, this should not receive user input
        __html: 
        vfNunjucks.render('vf-logo', { logo_href: '/vf-react', image: VfLogoPath, logo_text: title })
      }} />
      <VfLogoCallback></VfLogoCallback>
    </div>
  )
});

// export { vfNunjucks, VfLogo };
