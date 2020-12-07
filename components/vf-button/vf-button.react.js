// vf-button for React
// See vf-extensions-react for usage guidance
// We use vanilla JS templates for react for compatibility with create react app
// ---
import React from "react";
import vfNunjucks from "@visual-framework/vf-extensions-react/assets/nunjucks-slim.js";
import VfButtonTemplate from "raw-loader!./vf-button.precompiled.js"; // https://webpack.js.org/loaders/raw-loader/
eval(VfButtonTemplate); // we use eval as we specifically want to run a known template

// any JS actions needed on component insertion
class VfButtonCallback extends React.Component {
  componentDidMount() {
    // console.log("any JS actions needed");
  }

  render() {
    return React.createElement("div", null);
  }
}

const VfButton = React.memo(({
  text, button_href, theme
}) => {
  // our HTML is handled by nunjucks, this should not receive user input
  return React.createElement("div", null,
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        // our HTML is handled by nunjucks, this should not receive user input
        __html: vfNunjucks.render("vf-button", {
          text: text, button_href: button_href, theme: theme
        })
      }
    }),
    React.createElement(VfButtonCallback, null)
  );
}
);

export { VfButton };
