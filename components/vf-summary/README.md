# Summary Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-summary.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-summary)

## About

Summaries in the form of text, headlines and often imagery for a range of types of content, including: articles, jobs, news and people profiles. 

### Publications Summary

The `vf-summary--publication` can be nested inside a vf-box where it takes the vf-box colours.

If the `vf-summary__author` list is truncated to a certain number of authors you will need to add vf-u-text--et-al to the `<p>` - `<p class="vf-summary__author | vf-u-text--et-al">` - for it to add et al to the end of the list.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-summary` with this command.

```
$ yarn add --dev @visual-framework/vf-summary
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-summary/index.scss";
```

_Make sure you import Sass requirements along with the modules._
