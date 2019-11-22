# EBI Header and Footer Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Febi-header-footer.svg)](https://badge.fury.io/js/%40visual-framework%2Febi-header-footer)

This provides support for using the EBI header and footer from the EBI VF 1.3. It provides the minimum ammount of legacy CSS to make the header and footer work while avoiding conflicts with other 2.0 styles.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `ebi-header-footer` with this command.

```
$ yarn add --dev @visual-framework/ebi-header-footer
```

### Note

This component is not included in the default `vf-component-rollup` and will not be found in the default `styles.css`. You can add it to your local build or use `https://dev.assets.emblstatic.net/vf/develop/assets/ebi-header-footer/ebi-header-footer.css`

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/ebi-header-footer/index.scss";
```

_Make sure you import Sass requirements along with the modules._
