---
full_width: true
title: "Component creation"
subtitle: The when and how of component modification
intro: Creating and amending code is a technical task that follows certain styles and is actioned in a process.
date: 2020-12-11 19:33:50
section: developing
order: 3
tags:
  - posts
  - guidance
  - developing
  - documentation
layout: layouts/section.njk
templateEngineOverride: njk
---

<article class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Pre-proposal",
    "id": "preproposal",
    "section__subheading": [
      ""
    ]
  } %}
  <div class="vf-content">
    {% markdown %}

    Before writing code or designing the first step is to consider:

    1. What behaviour needs to be facilitated?
    1. Is there an existing component that does this?
    1. Are there other components that can be adapted?

    Begin by [chatting on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ) or [creating a discussion in GitHub](https://github.com/visual-framework/vf-core/discussions).

    {% endmarkdown %}
  </div>
</article>


<article class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Proposing",
    "id": "proposing",
    "section__subheading": [
      ""
    ]
  } %}
  <div class="vf-content">
    {% markdown %}

    Once you're confident you need a new component, you can make an official component proposal. You'll want to answer questions like:

    - What does this component look like?
    - What does this component do?
    - Would a rebrand change the structure or layout of this component?
    - Can other websites use this component? Or is it only useful in your organisation or website?
    - Do you have any designs or concepts?
    - Have you done any user testing already?
    - How often do you expect to make use of this component?
    - Can you list out major elements in this component?
    - Will all elements of this component be used every time?
    - Does this component contain other components?
    - Do you already have a component?

    Those questions should be answered in an "issue" on GitHub; there's a nice template:

    <a href="https://github.com/visual-framework/vf-core/issues/new?assignees=&labels=&template=new-component-request.md" class="vf-button vf-button--secondary vf-button--sm">Propose a component</a>

    {% endmarkdown %}
  </div>
</article>

<article class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Evaluation",
    "id": "evaluation",
    "section__subheading": [
      ""
    ]
  } %}
  <div class="vf-content">
    {% markdown %}

    With a proposal made, the idea is evaluated for implementation as a core VF component available for all projects.

    At a high level the component creation and revision process [follows this flow diagram](https://coggle.it/diagram/V0hkiP976OIbGpy8/t/vanilla-pattern). If the component has technical complications, an unclear use case or other issues, it will be discussed in our [Consultation Process](/about/consultation/).

    Even if a component won't be centrally supported, it [can still be implemented at your project level](/about/consultation/#whatif).

    {% endmarkdown %}
  </div>
</article>


<article class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Design",
    "id": "design",
    "section__subheading": [
      ""
    ]
  } %}
  <div class="vf-content">
    {% markdown %}

    With an agreed concept, reference designs should be made in Figma (to be used with the [Design Kit](/design-kit/)).

    The design and technical implementation are an asynchronous process and both code and visuals will often need to be adapted as the other evolves. But, in an ideal world, each component implementation begins with a fully designed reference.

    {% endmarkdown %}
  </div>
</article>

<article class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Technical implementation",
    "id": "technical",
    "section__subheading": [
      ""
    ]
  } %}
  <div class="vf-content">
    {% markdown %}

    With an agreed concept and a reference design (hopefully) done, the work to begin coding can begin.

    As first steps the developer should:

    - Consult the [guidelines]({{ '/guidance/components-and-patterns' | url }}) for the naming of things and coding standards.
    - Ensure the [local development environment is configured](/developing/getting-started/setting-up/)

    #### Creating new component files

    The VF codebase includes a folder and file creation tool to quickly create all the required files to make a component — it gives you the option to create an element, block, or container.

    ##### Install Yeoman

    - Check if it is installed `yo --version`
    - If you need to install `yarn global add yo@latest`
    - If you get stuck, [see the official install guide](http://yeoman.io/codelab/setup.html)

    ##### Set up your project

    If you're creating a component for all VF users:

    - Clone the [`vf-core` project](//github.com/visual-framework/vf-core/)

    If you're adding a custom component to any other project

    - Install the [`vf-component-generator` package](https://github.com/visual-framework/vf-core/tree/develop/tools/vf-component-generator) `yarn add @visual-framework/vf-component-generator --dev`

    ##### Generate the new component files

    - `yarn install`
    - `gulp vf-component`
    - Run [`vf-component-generator`](https://www.npmjs.com/package/@visual-framework/vf-component-generator) and answer the questions when prompted
    - **Type of component:** [See component guidance]({{ '/guidance/components-and-patterns' | url }})
    - **Name of component:** [See component naming guidance]({{ '/guidance/components-and-patterns' | url }})
    - **npm package:** If you're making something interesting (probably not an 'element'), then saying 'yes' will allow the component to be shared as an optional part of the framework on npm.
    - Your customised template component will be in the `/components` directory and [contain a number of pre-generated files]({{'/guidance/components-and-patterns/' | url}}).

    ##### Use the new CSS and JS

    If your component uses Sass/CSS, add it to `./components/vf-component-rollup/index.scss`

    ```
    @import "@visual-framework/<%= componentName %>/<%= componentName %>.scss";
    ```

    If your component uses JS, import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

    ```js
    import { vfComponentName } from '<%= componentName %>/<%= componentName %>';
    vfComponentName(); // if needed, invoke it
    ```

    {% endmarkdown %}
  </div>
</article>


<article class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Technical tips and considerations",
    "id": "tips",
    "section__subheading": [
      ""
    ]
  } %}
  <div class="vf-content">
    {% markdown %}

    <details class="vf-details">
      <summary class="vf-details--summary">Visual design and design tokens</summary>

      The visual design of the Visual Framework is done in [the Design kit](/design-kit/) and visuals can be created or revised as part of the parent issue for a ticket.

      The design decisions of spacing, colours, branding, typography and the like are stored in the Visual Framework's [Design tokens](/design-tokens/) and accessible to your code through the mixins in the [Sass config and templates component](/components/vf-sass-config/); some common examples: `color: set-color(vf-ui-color--black);` and `@include set-type(text-body--3);`

    </details>

    <details class="vf-details">
      <summary class="vf-details--summary">Layout and spacing</summary>

      Components can typically implement their layout and spacing by leveraging other components; here are the most common:

      - Column layouts: [`vf-grid`](/components/vf-grid) and [`embl-grid`](/components/embl-grid)
      - Vertical spacing between components: [`vf-stack`](/components/vf-stack)
      - Horizontal and vertical alignment: [`vf-cluster`](/components/vf-cluster)
      - Adding a visual element next to a column: [`vf-flag`](/components/vf-flag)
      - Big-little sidebar like layouts: [`vf-sidebar`](/components/vf-sidebar)

      You can reference these components' classes from your HTML markup and avoid duplicating layout CSS.

    </details>

    <details class="vf-details">
      <summary class="vf-details--summary">Using VF Sass tooling</summary>

      Follow the VF's [CSS and Sass style guidance]({{ '/guidance/css-and-sass/' | url }}).

    </details>

    <details class="vf-details">
      <summary class="vf-details--summary">Using JavaScript</summary>

      Typically we avoid using JavaScript with the Visual Framework, but sometimes it's requires and we have [guidance on creating JavaScript]({{ '/guidance/javascript/' | url }}).

    </details>

    <details class="vf-details">
      <summary class="vf-details--summary">Maintaining a `CHANGELOG.md`</summary>

      - Add a line of what is new in your component.
      - Use sentence styling.
      - Keep your notes, short and punchy.
      - End your sentences with periods.
          - https://github.com/visual-framework/vf-core/issues/1286
      - Link to any related issues or discussions, such as the above.

    </details>

    <details class="vf-details">
      <summary class="vf-details--summary">Developing your component</summary>

      - Edit your template files in the `/components/your-component-name` folder
          - For further guidance on component configuration, [consult the comments in the component template files](https://github.com/visual-framework/vf-core/tree/develop/tools/component-generator/templates).
      - Run `gulp vf-dev` to compile and preview the component

    </details>

    <details class="vf-details">
      <summary class="vf-details--summary">Sharing a component</summary>

      - Publish it to npm; and/or
      - If you think your component is useful to the global `vf-core` community, [make a Pull Request](/developing/getting-started/pull-requests/) or [open an issue](https://github.com/visual-framework/vf-core/issues/new/choose) to discuss.

    </details>


    {% endmarkdown %}
  </div>
</article>


<article class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Iterate",
    "id": "iterate",
    "section__subheading": [
      ""
    ]
  } %}
  <div class="vf-content">
    {% markdown %}

    The work is never done. Components will change and be improved based on learnings.

    - [Consultation process](/about/consultation/)
    - [Deprecating code](/developing/components/deprecating-components/)

    {% endmarkdown %}
  </div>
</article>
