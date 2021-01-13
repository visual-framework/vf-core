---
title: Creating new components
subtitle: This codebase includes a folder and file creation tool.
intro: It allows you to quickly create all the required files to make a component -- it gives you the option to create am element, block, or container.
date: 2020-12-11 19:33:50
section: building
tags:
  - posts
  - guidance
  - components
layout: layouts/section.njk
templateEngineOverride: njk, md
---

Tip: also consult the [guidelines]({{ '/guidance/components-and-patterns' | url }}) for the naming of things and coding standards.

1. [Install the `vf-component-generator` package](https://github.com/visual-framework/vf-core/tree/develop/tools/vf-component-generator)
   - `yarn add @visual-framework/vf-component-generator --dev`
1. Install Yeoman
   - If you've come this far and you don't have `yo`, you should be able to install it with `yarn global add yo@latest`
   - If you get stuck, [see the official install guide](http://yeoman.io/codelab/setup.html)
1. Create a new component
   - Run [`vf-component-generator`](https://www.npmjs.com/package/@visual-framework/vf-component-generator) and answer the questions when prompted.
       - **Type of component:** [See component guidance]({{ '/guidance/components-and-patterns' | url }})
       - **Name of component:** [See component naming guidance]({{ '/guidance/components-and-patterns' | url }})
       - **npm package:** If you're making something interesting (probably not an 'element'), then saying 'yes' will allow the component to be shared as an optional part of the framework on npm.
    - Your customised template component will:
       - be in the `/components` directory.
       - [contain a number of pre-generated files]({{'/guidance/components-and-patterns/' | url}}).
1. Maintain a `CHANGELOG.md`
    - Add a line of what is new in your component.
    - Use sentence styling.
    - Keep your notes, short and punchy.
    - End your sentences with periods.
      - https://github.com/visual-framework/vf-core/issues/1286
    - Link to any related issues or discussions, such as the above.
1. Add the `@import 'vf-your-component.scss';` to `/assets/scss/styles.scss`.
1. Developing your component
   - Edit your template files in the `/components/your-component-name` folder
       - For further guidance on component configuration, [consult the comments in the component template files](https://github.com/visual-framework/vf-core/tree/develop/tools/component-generator/templates).
   - Run `gulp vf-dev` to compile and preview the component
1. Sharing you component back
   - Publish it to npm; and/or
   - If you think your component is useful to the global `vf-core` community, [make a Pull Request](https://github.com/visual-framework/vf-core/pulls) or [open an issue](https://github.com/visual-framework/vf-core/issues/new/choose) to discuss.

<hr/>

{% include "component-docs.njk" %}
