# Heading component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-heading.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-heading)

## About

For basic heading formatting and sizes.

## Usage

[EMBL’s primary corporate typeface](https://www.embl.org/guidelines/design/design-guidelines/typeface/) is IBM Plex Sans. Subdomains should use the same font except for cases where they have a different brand guideline.

The `vf-heading` component leverages the design token typography sizes.

Use heading tags, such as `<h1>` and `<h2>` to define the structure of a page. Apply tokens, such as `vf-text-heading--1` to define the size and other stylistic elements of the heading. 

To establish a consistent content organisation throughout your site, style headings consistently. However, a heading level such as `<h1>` does not always need to correspond with the same token such as `vf-text-heading--1`. You can change the token if the page requires so but it is advisable to ensure the pages have a consistent heading structure whenever possible.

This component provides utility-like functionality and you'll rarely need to directly use this component. When coding a component's Sass, it will typically be better to use the mixins (`@include set-type(text-heading--1);`) than these
`vf-heading` classes.

### How to use

* Every page should have at least one heading (typically a h1).
* All text that looks like a heading should be marked up as a heading.
* All text that is marked up as a heading should be a conceptual section heading.
* The heading hierarchy should be meaningful, e.g:
`<h1>Recruitment: What to expect</h1>`
`<h2>Our recruitment process</h2>`
`<h3>Step 1: Application</h3>`

Headings should be written in sentence case.

### How not to use

* Do not skip heading levels (e.g. from `<h1>` to `<h3>` without a `<h4>` on a page) as this causes issues to users of screen readers and other assistive technologies.
* Do not use headings to style text that is not meant to be a heading element. Use a different vf-text style instead of a heading level for this type of text.

### Related documentation

For more information on headings please consult the following documents:
* [Headings | Web Accessibility Initiative (WAI) | W3C9](https://www.w3.org/WAI/tutorials/page-structure/headings/)
* [Easy Checks – A First Review of Web Accessibility | Web Accessibility Initiative (WAI) | W3C](https://www.w3.org/WAI/test-evaluate/preliminary/#headings)
* [Regions, Headings, and Lists | Semantic Structure | WebAIM](https://webaim.org/techniques/semanticstructure/#headings)
* [Typography | GOV.UK  Design System](https://design-system.service.gov.uk/styles/headings/)

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-heading` with this command.

```
$ yarn add --dev @visual-framework/vf-heading
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-heading/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
