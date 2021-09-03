# Badge component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-badge.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-badge)

## About

The `vf-badge` component is used to denote if a page, section, or link has a production state of `alpha`, `beta` or other information.

## Usage

The `vf-badge` accepts a single text item of content.

| content type | variable | description |
| ------------ | -------- | ----------- |
| text         | `text`   |             |

### Links

The `vf-badge` component can also be a link using `<a class="vf-badge" href="">badge title</a>`.

### Nunjucks and yml options

#### Nunjucks and YML variables available

| variable       | options   | default |
| -------------- | --------- | ------- |
| text           |           |         |
| badge_href     |           | null    |
| theme          | 'primary' |         |
| style          | 'outline' |         |
| override_class |           |         |
| id             |           |         |


## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-profile` with this command.

```
$ yarn add --dev @visual-framework/vf-badge
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-badge/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)


## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
