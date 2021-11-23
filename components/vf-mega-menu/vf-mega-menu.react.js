// vf-mega-menu for React
// See vf-extensions-react for usage guidance
// We use vanilla JS templates for react for compatibility with create react app
// ---
import React from "react";
import Fragment from "react-dom-fragment";
// eslint-disable-next-line no-unused-vars
import VfMegaMenuTemplate from "./vf-mega-menu.precompiled.js"; // import templates before the nunjucks env
import { vfNunjucksEnv } from "@visual-framework/vf-extensions-react/vf-extensions-react.js";

// any JS actions needed on component insertion
class VfMegaMenuCallback extends React.Component {
  componentDidMount() {
    console.log('any JS actions needed')
  }

  render() {
    return React.createElement(React.Fragment, null);
  }
}

const VfMegaMenu = React.memo(({
  variant, newTheme, card_image, card_text, card_image__alt, card_title
  }) => {
    return React.createElement(React.Fragment, null,
      React.createElement(Fragment, {
          dangerouslySetInnerHTML: {
          // our HTML is handled by nunjucks, this should not receive user input
          __html: vfNunjucksEnv.render('vf-mega-menu', {
            variant: variant, newTheme: newTheme, card_image: card_image, card_text: card_text, card_image__alt: card_image__alt, card_title: card_title
          })
        }
      }),
      React.createElement(VfMegaMenuCallback, null)
    );
  }
);

export { VfMegaMenu };
