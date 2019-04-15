[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-link.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-link)

## About

## Demonstration

{% render "@vf-link", {
  href: "#",
  id: "harsh",
  text: "A default link"
} %}
<br/>
{% render "@vf-link", {
  href: "#",
  id: "harsh",
  style: ["hover"],
  text: "A default:hover link"
} %}
<br/>
{% render "@vf-link", {
  href: "#",
  id: "harsh",
  style: ["visited"],
  text: "A default:visited link"
} %}
<br/>
{% render "@vf-link", {
  href: "#",
  id: "harsh",
  style: ["disable"],
  text: "A disabled default link"
} %}


### Secondary links

{% render "@vf-link", {
  href: "#",
  id: "harsh",
  theme: "secondary",
  text: "A secondary link"
} %}
<br/>
{% render "@vf-link", {
  href: "#",
  id: "harsh",
  theme: "secondary",
  style: ["hover"],
  text: "A secondary:hover link"
} %}
<br/>
{% render "@vf-link", {
  href: "#",
  id: "harsh",
  theme: "secondary",
  style: ["visited"],
  text: "A secondary:visited link"
} %}
<br/>
{% render "@vf-link", {
  href: "#",
  id: "harsh",
  theme: "secondary",
  style: ["disabled"],
  text: "A disabled secondary link"
} %}



## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-link` with this command.

```
$ npm install --save @visual-framework/vf-link
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-link/index.scss";
```

_Make sure you import any requirements along with the modules._
