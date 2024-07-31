# Table component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-table.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-table)

## About

Ever useful for presentation of tabular information and data — never to be used for layout.

## Usage

The Table component is designed to display tabular data in an organised, accessible manner. It provides styling for features such as selection, sorting, captions and other variants.

The current vf-table is not optimised for mobile or smaller screens.

### When to use

- When displaying structured information in rows and columns for easy comparison across multiple items
- When handling large volumes of data that require sorting and management.
- To illustrate relationships and categories within structured data clearly.

### When not to use

- Do not use the vf-table as a visual layout for content on a page
- Do not use tables to present primarily visual content, such as images or videos, where a visual layout is more appropriate.
- Avoid tables for multi-level hierarchical information, as they can become cumbersome to navigate.
- Avoid tables when the context or relationships between data points are not well defined or necessary for understanding the information.

### Variants

#### Default Table:
- The basic table setup without additional functionalities.
#### Table with Footer:
- Includes a footer that can be used for summary information.
#### Table with Caption:
- The caption provides a concise summary or overall topic of the table, providing context for users.
#### Table with Row Headings:
- Use a different weight to emphasise the identifying information in a row (first column) by adding the class vf-table__heading
#### Actions:
- Common actions (e.g., edit, delete) can be shown in rows. Using this styling would allow users to complete tasks directly within a table hence reducing clicks required to perform the action.
#### Sortable Table:
- To show tables sorting in a specific order such as alphabetical or numerical, this styling can be used.
#### Selectable Table:
- The styling shows row selection for batch actions or further manipulation.

### CSS Class Reference

| Class                | Applies To | Result                                                                 |
| -------------------- | ---------- | ---------------------------------------------------------------------- |
| `vf-table`           | `table`    | Gives initial generic styling to the `table` element and it's children |
| `vf-table--striped`  | `vf-table` | Adds striped rows to the relevant `tr` elements.                       |
| `vf-table--bordered` | `vf-table` | adds a border around all elements                                      |
| `vf-table--compact`  | `vf-table` | Reduces the padding on the heading and cells                           |
| `vf-table--loose`    | `vf-table` | Increases the padding on the heading and cells                         |

##
### Accessibility
Accessibility is critical to ensure all users can interact with the Table component effectively.
- Use semantic HTML elements like  `<tr>`, `<th>`, and `<td>`.
- Ensure keyboard navigability and screen reader compatibility by using appropriate `aria` attributes.
- Maintain high contrast ratios for text and background colours.

### Best Practices Recommendations

- Align text to the left for readability, except for numerical data, which should be right-aligned to facilitate comparison.
- Ensure interactive elements like links are clearly visible and easily accessible, especially on touch devices.

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-table` with this command.

```
$ yarn add --dev @visual-framework/vf-table
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-table/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
