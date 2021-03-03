# VF React extensions

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-extensions-react.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-extensions-react)

## About

**This is an early alpha and subject to radical change or removal.**

This project has reusable code for many Visual Framework components, allowing them to be used in React projects like [vf-react](https://github.com/visual-framework/vf-react). It has reusable componentised code and config.

## Usage

1. Install this npm package (see Install section)
2. Install and import your desired component:
    - `import { VfCard } from "@visual-framework/vf-card/vf-card.react.js";`
3. Use your desired component
    - `<VfCard card_title="test" variant="striped" newTheme="primary" card_image="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/2020/04/SCHOOLS_1011_ells-learninglab_hd_01_Cool_500px.jpg" card_text="im some text" card_image__alt="people"></VfCard>`
### Supported components

React support is in its early stages and only a few components have support.

- vf-card
- vf-button

### Note for component makers

This approach allows the (precompiled) Nunjucks templates to be used by react through the "nunjucks-slim" runtime. This means you'll always have access to the latest VF templates, but comes at a cost in the "reactivity" of the component.

The [`vf-card.react.js`](https://github.com/visual-framework/vf-core/blob/develop/components/vf-card/vf-card.react.js) component provides an example of how this method works:

```js
// vf-card for React
// See vf-extensions-react for usage guidance
// We use vanilla JS templates for react for compatibility with create react app
// ---
import React from "react";
import Fragment from "react-dom-fragment";
// eslint-disable-next-line no-unused-vars
import VfCardTemplate from "./vf-card.precompiled.js"; // import templates before the nunjucks env
import { vfNunjucksEnv } from "@visual-framework/vf-extensions-react/vf-extensions-react.js";

// any JS actions needed on component insertion
class VfCardCallback extends React.Component {
  componentDidMount() {
    // console.log("any JS actions needed");
  }

  render() {
    return React.createElement(React.Fragment, null);
  }
}

const VfCard = React.memo(({
  variant, newTheme, card_image, card_text, card_image__alt, card_title
}) => {
  return React.createElement(React.Fragment, null,
    React.createElement(Fragment, {
      dangerouslySetInnerHTML: {
        // our HTML is handled by nunjucks, this should not receive user input
        __html: vfNunjucksEnv.render("vf-card", {
          variant: variant, newTheme: newTheme, card_image: card_image, card_text: card_text, card_image__alt: card_image__alt, card_title: card_title
        })
      }
    }),
    React.createElement(VfCardCallback, null)
  );
}
);

export { VfCard };
```

This approach should not be used when:

- when many items would appear on a page (vf-text, vf-table)
- when an item is interactive (vf-form elements)

In the above cases it is better to create a "pure" Reactive `.jsx` component template. This allows react to remain efficient, to handle state and do "react magic".

You can see an example of a pur react template — [coming soon](https://github.com/visual-framework/vf-core/issues/1402)


## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install with this command.

```
$ yarn add --dev @visual-framework/vf-extensions-react
```
