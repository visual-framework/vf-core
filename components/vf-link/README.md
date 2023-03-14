# Link component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-link.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-link)

## About

Links are used to help users navigate to new sections, pages or websites. Links have default, hover and selected states which provide visual cues to help the user interact with them or identify visited pages.

## Usage

The label of a link [should describe clearly the destination of the link](https://www.nngroup.com/articles/writing-links/). It should make sense to the user with little or no need to check other elements for context. [Avoid non descriptive labels](https://www.nngroup.com/articles/learn-more-links/) such as “click here” and “read more”.

Consider a user who scans through the content or uses a screen reader, how much information can they get from the link’s description alone? Use this principle as a guideline to create more descriptive links.

Avoid opening links in a new tab or window. It can be disorienting and [can cause accessibility issues for people who cannot visually perceive that the new tab has opened](https://www.w3.org/TR/WCAG20-TECHS/G200.html).

### When to use

Links should be used to help a user navigate to pages, sections or external websites.

### When not to use

Links should not be used to initiate actions, change or manipulate data. Use `vf-button` instead for such actions.

### Related documentation

For more information on links please consult the following documents:

- [Guidelines on links from the GOV.UK Design System](https://design-system.service.gov.uk/styles/typography/#links)
- [Guidelines on links from the Carbon Design System](https://carbondesignsystem.com/components/link/usage/)
- [F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text. | Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/F84.html)
- [G200: Opening new windows and tabs from a link only when necessary | Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [Writing Hyperlinks: Salient, Descriptive, Start with Keyword | Nielsen Norman Group](https://www.nngroup.com/articles/writing-links/)
- [“Learn More” Links: You Can Do Better | Nielsen Norman Group](https://www.nngroup.com/articles/learn-more-links/)

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-link` with this command.

```
$ yarn add --dev @visual-framework/vf-link
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-link/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
