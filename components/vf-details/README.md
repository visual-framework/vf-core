# Details component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-details.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-details)

## About

Use `vf-details` to let users reveal optional supporting information without leaving the page.

## Usage

`vf-details` is the Visual Framework disclosure component. It hides supplementary information behind a short, descriptive summary until the user chooses to reveal it.

Information inside a disclosure must always be optional to read - to be helpful, not essential. Users should be able to understand the page and complete their main task(s) without opening it.

A disclosure component can contribute to page height reduction, but should not reduce the user's mental effort to find, remember, understand and compare information. Hiding content can increase this effort when users must open several sections.

<strong>Top tip: review and simplify the content before introducing a disclosure component.</strong>

### When to use

Use `vf-details` for:

- Short supplementary explanations that some users may need.
- Additional context that is not required to understand the main content.
- Optional background information or definitions.
- Comparing content that is related.

Only use the component after confirming that the information can safely be hidden.

### When not to use

Do not use `vf-details` for:

- Information users need to understand the page.
- Information required to complete a task.
- Forms, filters or other task controls.
- Large amounts of text or complex instructions.
- Displaying data, tables, charts, figures, images or other assets.
- Unrelated sections placed together to shorten a page.
- Disclosures nested inside other disclosures.

When the disclosed content needs primary or secondary actions, consider a dedicated page or a task-focused pattern such as a panel or modal. When users need to compare detailed information, keep it visible or use a structure designed for comparison.

### Single disclosures

`vf-details` is by default a single disclosure element. The component uses the native `<details>` and `<summary>` elements. Omitting the open attribute (<details class="vf-details" open>) produces the native closed state.

You can use the component when displaying a single piece of optional supporting information.

A single disclosure should:

- Be closed by default.
- Have a short and specific summary.
- Contain no more than three short paragraphs of text.
- Contain only one level of information.
- Use a text link as its only additional interaction, when required.
- Remain understandable when viewed separately from other disclosures.

Do not place a disclosure around one short sentence simply to reduce page height. If the content is brief and useful to most users, keep it visible.

If a disclosure needs to be open when the page loads, reconsider whether the information should be hidden at all.

#### Using `vf-stack` and `vf-grid`

To create multiple stacked `vf-details` components, you can utilise `vf-stack` or `vf-grid` within the div element.

Use either layout utility to arrange a group vertically. The layout component controls the space between each disclosure; it does not change how the disclosures behave.

### Content guidance

#### Summary labels

The summary is the label users select to reveal the content. It must describe what will appear when the disclosure is opened.

Summary labels should:

- Be short and specific.
- Use sentence case.
- Make sense without the expanded content.
- Be unique within a group.
- Use familiar language.
- Describe the information rather than the interaction.

#### Expanded content

Expanded content should:

- Mainly consist of text.
- An inline link is the only recommended interaction inside expanded content.
- Be concise and easy to understand at a glance.
- Contain no more than three short paragraphs.
- Directly answer or explain the summary.
- Use the same terminology as the surrounding page.
- Remain supplementary to the primary experience.

Do not use disclosures to store content removed from the main page without first reviewing whether it is still needed.

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-details` with this command.

```
$ yarn add --dev @visual-framework/vf-details
```

### JS

This component does not use JS.

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-details/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
