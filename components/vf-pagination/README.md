# Pagination component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-pagination.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-pagination)

## About

A simple pagination component for long listings such as `search results`.

## Usage

### When to use this component

Use pagination:
- for long listings (such as `search results` and article archives) that consist of more than 100 items. If your list consists of fewer items you may not need to add pagination.
- when most users will only look at the content on the first page or first few pages.

### When not to use this component

Do not use pagination:
- for linear content such as a long page or article.
- when you are asking the user to complete a form. Instead, use `vf-button` to let the user move to the next page and a Back link to let them move to the previous page.

Also see the recommendations by [Nielsen Norman](https://www.nngroup.com/articles/item-list-view-all/) and [the pagination compoment in gov.uk](https://design-system.service.gov.uk/components/pagination/).

### Accessibility

This component targets WCAG 2.1 AA accessibility.

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
