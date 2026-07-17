# Pagination component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-pagination.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-pagination)

## About

Pagination provides a clear way for users to navigate through content or data split across multiple pages.

## Usage

The `vf-pagination` component helps users focus on a manageable set of content at a time and gives users the controls to move across the pages in any order (non-linear navigation). It commonly appears below the content it controls, after the final item in the list. The placement could vary in some use cases. Pagination is often used for search results, listings and tables.

### When to use this component

- To split large amounts of content or data into smaller, manageable chunks that are easier for users to consume and navigate. Examples include search results or article listing pages.
- When loading all available data at once would significantly increase page load time.
- When most users will only look at the content on the first page or first few pages.
- When users need a stable sense of position (for example “page 3 of 12”) and the ability to return to a specific page reliably (e.g., sharing or bookmarking a page of results).

### When not to use this component

- Don’t use pagination when all items fit on a single page.
- This component should not be used for long article pages.
- Don't use pagination for linear journeys such as multi-step forms or guided flows. In such cases use the `vf-button` with clear labels to let users move to the next or previous page.
- Avoid pagination when it would cause users to lose selections, filters, or context between pages.

### Variants

The pagination component provides options that can be used to provide the navigation experience that best fits different use cases.

**[Default](/components/vf-pagination/#vf-pagination--default)**

The default pagination component shows Previous (<) and Next (>) navigation controls alongside a set of numbered page links.

**[Jump to controls](/components/vf-pagination/#vf-pagination--first-page-selected)**

This variant extends the navigation controls of the default by adding “Jump to first page” (<<) and “Jump to last page” (>>) buttons.

### Accessibility

**Landmarks and naming**
- Wrap pagination in a nav landmark (or equivalent) and provide an accessible name such as aria-label="Pagination" or, ideally, a context-specific label like aria-label="Search results pages".
- WCAG reference: 1.3.1 Info and Relationships (WCAG 2.2).

**Current page**
- Mark the current page with aria-current="page" (or equivalent) so screen readers announce it correctly.
- WCAG reference: 4.1.2 Name, Role, Value (WCAG 2.2).

**Touch targets**
- Ensure all interactive targets (numbers and arrows) meet minimum target size and have enough spacing to avoid accidental activation.
- WCAG reference: 2.5.8 Target Size (Minimum) (WCAG 2.2).

**Link/button labelling**
<ul>
  <li>Use clear, localised labels for controls:
    <ul>
      <li>“Go to page 2”
      </li>
      <li>“Go to next page”
      </li>
      <li>“Go to previous page”
      </li>
      <li>“Go to first page”
      </li>
      <li>“Go to last page”
      </li>
    </ul>
  </li>
  <li>Avoid abbreviations like “Goto” and avoid relying on symbols alone (“<”, “>”) without accessible text.
  </li>
  <li>WCAG reference: 2.4.6 Headings and Labels (WCAG 2.2), 4.1.2 Name, Role, Value (WCAG 2.2).
  </li>
</ul>

**Keyboard interaction**
- Ensure all controls are reachable with Tab and activatable with Enter and Space as appropriate.
- Provide a visible focus indicator that meets contrast requirements.
- WCAG reference: 2.1.1 Keyboard (WCAG 2.2), 2.4.7 Focus Visible (WCAG 2.2), 1.4.11 Non-text Contrast (WCAG 2.2)

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install with this command.

```
$ yarn add --dev @visual-framework/vf-pagination
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-pagination/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
