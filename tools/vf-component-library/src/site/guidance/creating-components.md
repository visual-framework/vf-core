---
title: "Creating and changing components"
subtitle: When and how to make and change components
intro: Creating and amending code is a technical task that should follow a certain style and be actioned in process.
date: 2020-12-11 19:33:50
section: building
tags:
  - posts
  - guidance
layout: layouts/section.njk
templateEngineOverride: njk, md
---

At a high level the component creation and revision process [follows this flow diagram](https://coggle.it/diagram/V0hkiP976OIbGpy8/t/vanilla-pattern) and consult the [guidelines]({{ '/guidance/components-and-patterns' | url }}) for the naming of things and coding standards.

New components and changes should be raised as [issues](https://github.com/visual-framework/vf-core/issues) first.

### Creating new component files

This codebase includes a folder and file creation tool to quickly create all the required files to make a component — it gives you the option to create an element, block, or container.

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
1. Add an `@import 'vf-your-component.scss';` to `components/vf-component-rollup/index.scss`.

### Visual design and design tokens

The visual design of the Visual Framework is done in [the Design kit](/design-kit/) and visuals can be created or revised as part of the parent issue for a ticket.

The design decisions of spacing, colours, branding, typography and the like are stored in the Visual Framework's [Design tokens](/design-tokens/) and accessible to your code through the mixins in the [Sass config and templates component](/components/vf-sass-config/); some common examples: `color: set-color(vf-ui-color--black);` and `@include set-type(text-body--3);`

### Layout and spacing

Components can typically implement their layout and spacing by leveraging other components; here are the most common:

- Column layouts: [`vf-grid`](/components/vf-grid) and [`embl-grid`](/components/embl-grid)
- Vertical spacing between components: [`vf-stack`](/components/vf-stack)
- Horizontal and vertical alignment: [`vf-cluster`](/components/vf-cluster)
- Adding a visual element next to a column: [`vf-flag`](/components/vf-flag)
- Big-little sidebar like layouts: [`vf-sidebar`](/components/vf-sidebar)

You can reference these components' classes from your HTML markup and avoid duplicating layout CSS.

### Using VF Sass tooling

Follow the VF's [CSS and Sass style guidance]({{ '/guidance/css-and-sass/' | url }}).

### Using JavaScript

Typically we avoid using JavaScript with the Visual Framework, but sometimes it's requires and we have [guidance on creating JavaScript]({{ '/guidance/javascript/' | url }}).


### Maintaining a `CHANGELOG.md`

- Add a line of what is new in your component.
- Use sentence styling.
- Keep your notes, short and punchy.
- End your sentences with periods.
    - https://github.com/visual-framework/vf-core/issues/1286
- Link to any related issues or discussions, such as the above.

### Developing your component

- Edit your template files in the `/components/your-component-name` folder
    - For further guidance on component configuration, [consult the comments in the component template files](https://github.com/visual-framework/vf-core/tree/develop/tools/component-generator/templates).
- Run `gulp vf-dev` to compile and preview the component

### Sharing a component

- Publish it to npm; and/or
- If you think your component is useful to the global `vf-core` community, [make a Pull Request](/developing/getting-started/pull-requests/) or [open an issue](https://github.com/visual-framework/vf-core/issues/new/choose) to discuss.

### Iterate

The work is never done. Components will change and be improved based on learnings.

- [Consultation process](/about/consultation/)
- [Deprecating code](/developing/components/deprecating-components/)


{% include "component-docs.njk" %}
