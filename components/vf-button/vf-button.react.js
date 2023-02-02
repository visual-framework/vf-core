// vf-button for React
// See vf-extensions-react for usage guidance
// We use vanilla JS templates for react for compatibility with create react app
// ---
import React from "react";
import Fragment from "react-dom-fragment";
// eslint-disable-next-line no-unused-vars
import VfButtonTemplate from "./vf-button.precompiled.js";  // import templates before the nunjucks env
import { vfNunjucksEnv } from "@visual-framework/vf-extensions-react/vf-extensions-react.js";

// any JS actions needed on component insertion
class VfButtonCallback extends React.Component {
  componentDidMount() {
    // console.log("any JS actions needed");
  }

  render() {
    return React.createElement(React.Fragment, null);
  }
}

const VfButton = React.memo(({
  text, theme
}) => {
  return React.createElement(React.Fragment, null,
    React.createElement(Fragment, {
      dangerouslySetInnerHTML: {
        // our HTML is handled by nunjucks, this should not receive user input
        __html: vfNunjucksEnv.render("vf-button", {
          text: text, theme: theme
        })
      }
    }),
    React.createElement(VfButtonCallback, null)
  );
}
);

export { VfButton };
