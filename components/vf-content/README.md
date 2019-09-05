# Content Area Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-content.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-content)

## About

Use this container to get simple support for narrative content where it is not
practical to assign classes, such as Markdown or WYSIWYG text.

This container adds basic support for `p`, `ul`, `hr`, `a` and other core
html elements. Some components may also add specific support for `.vf-content`

### Demonstration

<div class="vf-content">
{{ "#### Sub-header" | marked }}

{% markdown %}
- list items
- list items
- list item [with a link](#)
- list items
{% endmarkdown %}
</div>

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-content` with this command.

```
$ yarn add --dev @visual-framework/vf-content
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-content/index.scss";
```

_Make sure you import any requirements along with the modules._
