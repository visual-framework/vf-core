# The Cluster Layout Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-cluster.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-cluster)

The `vf-cluster` is a layout component that can be used when we need to give various content items (of indeterment sizes) an equaly spaced layout on the page that can respond to the browsers viewport width.

The main use case for `vf-cluster` is to be mainly used when something the available grid systems are too 'rigid' because of the different widths of the content.


## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-cluster` with this command.

```
$ yarn add --dev @visual-framework/vf-cluster
```

### Sass/CSS

The source files included are written in `scss` syntax of [Sass](https://sass-lang.com/). You can point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-cluster/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)

## Development

### Integration

#### Eleventy

To use the `vf-cluster` component we make use of the `@extends` directive from [Nunjucks](https://mozilla.github.io/nunjucks/templating.html#extends) to 'wrap' around the content we want this layout component to render.

##### Requirements

To use the `vf-cluster` component you must be using [vX.X.X](https://github.com/visual-framework/vf-eleventy/releases/tag/v2.0.0-alpha.18) of `vf-eleventy`.

##### Code

In the `.njk` file you are wanting to use the `vf-cluster` you must include the following code to 'extend' the file with the `vf-cluster` component.

{% raw %}
```html
{% extends layout.cluster %}
```
{% endraw %}

<br/>

You will then need to create a 'block' to put the relevant content inside so that it renders within the `vf-cluster` layout when rendered.
<br/>

{% raw %}
```html
{% block cluster_content %}
...
{% endblock %}
```
{% endraw %}

<br/>

To make use of `.yml` to render the `vf-cluster` to the variant you wish to use, you will have to 'set' the context in the `.njk` file.
<br/>

{% raw %}
```html
{% set context = cluster1 %}
```
{% endraw %}

<small>note: `cluster1` is an example, please pick your own semantic, readable context names</small>
<br>
With these set you can then add the relevant content as needed.

#### WordPress


##### Requirements

To use the `vf-cluster` component you must be using [vX.X.X](https://github.com/visual-framework/vf-wp/releases/tag/v1.0.0-beta.24) of `vf-wp`.

### Variants

There are four spacing variants and three alignment variants available for this component as well as an option to define the width of the `vf-cluster`s children.

| custom property       | options                       | default     |
| -------------- | ----------------------------- | ----------- |
| spacing        | small, medium, large          | none        |
| alignment      | start, center, end            | none        |

#### Spacing Variants

There are three spacing variants that determina the inline and block spacing between items of content inside of `vf-cluster`.

#### Alignment Variants

This variant determines where the child components align in the vertical space available. When setting this in your `.yml` file it will add the relevant CSS value as the inline CSS custom property `-vf-cluster-alignment`.

### CSS Custom Properties

| custom property          | options                                                 | example     |
| ------------------------ | ------------------------------------------------------- | ----------- |
| --vf-cluster-alignment   | could be used for a different vertical alignment value  | `baseline`  |
| --vf-cluster-margin      | can take a CSS size value to overide the defualt        | `31px`      |
| --vf-cluster__item--flex | can take a CSS flex value to determine the child widths | `210px 1 0` |

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
