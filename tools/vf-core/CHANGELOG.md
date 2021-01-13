### 2.2.15

* Remove gulp-cssnano and use builtin dart sass minification.
  * https://github.com/visual-framework/vf-core/pull/1305
* Write generated CSS sourcemap to output directory.

### 2.2.13

- dependency bump

### 2.2.12

* bug: issue where the compiled css location would be incorrectly output in some scenarios
  * https://github.com/visual-framework/vf-core/pull/1245

### 2.2.9

- fix: avoid build failure on missing .eslintrc.js config in child projects
  - https://github.com/visual-framework/vf-core/pull/1178

### 2.2.8

- adds ESLint task and config
  - https://github.com/visual-framework/vf-core/issues/1143
- adds `buildTimeStamp` to `componentInfo` component sass map
  - https://github.com/visual-framework/vf-core/issues/974

### 2.2.7

- dependency bump

### 2.2.6

- dependency bump

### 2.2.4

- bug: css nano aggressive grid optimizations #1073
  - https://github.com/visual-framework/vf-core/pull/1073

### 2.2.3

- move vf-component-generator gulp tasks into the vf-component-generator

### 2.2.2

- adds `gulp vf-component-assets:everything` task

### 2.2.1

- adds an `interval` to each watch task to give the CPU a breather

### 2.2.0

- Initial release as vf-core 2.2.0
