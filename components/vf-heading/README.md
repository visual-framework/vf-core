[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-heading.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-heading)

## About

Basic headline styles.

## Demo

{% set context = '@vf-heading' | patternContexts %}

{% for modifier in context.vf_heading_modifiers %}
  {% render '@vf-heading', {"type": modifier.type, "title": modifier.title} %}
  {# blank space needed for html sample rendering #}
  ```html
  {% render '@vf-heading', {"type": modifier.type, "title": modifier.title} %}
  ```
{% endfor %}

---

## Nunjucks template

{% verbatim %}
    {% render '@vf-heading', {"type": "large", "title": "Your headline"} %}
{% endverbatim %}

---

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-heading` with this command.

```
$ npm install --save @visual-framework/vf-heading
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-heading/index.scss";
```

_Make sure you import any requirements along with the modules._
