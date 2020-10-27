### 2.0.0

* replaces all spacing / sizing values with new tokens naming convention

### 1.2.0

* now uses Nunjucks 'blocks' so we can use this layout more programatically
* hides the defauly Nunjcuks file as it renders what looks like a blank page (because it's waiting for the block content)
* creates separate Nunjucks files to display variants in Fractal
* updates naming conventions of variables available
  * introduces `stack__spacing__custom` which will replace `custom_spacing_property` in the `2.0.0` component release

### 1.1.1

* dependency bumps

### 1.0.0-alpha.1

* Adds example if statement for setting context
