### 2.2.44

* Dependency update [Tracking issue](https://github.com/visual-framework/vf-core/issues/1647)

### 2.2.43

* Fixed build errors [Tracking issue](https://github.com/visual-framework/vf-core/issues/2052)

### 2.2.42

* Changelog correction [Tracking issue](https://github.com/visual-framework/vf-core/issues/2035)

### 2.2.41

* Dependency bump

### 2.2.39

* Added : Angular support for vf-badge, vf-banner, vf-hero

### 2.2.38

* Dependency bump node upgrade

### 2.2.37

* Dependency bump

### 2.2.36

* Use `renderMarkdown.parse` for marked 4+ support.

### 2.2.35

* Update @visual-framework/vf-frctl-extensions to ^2.0.0 for marked 4+ support.

### 2.2.34

* Update marked to 4.0.4
* Update browser-sync 2.27.7

### 2.2.33

* Update sass to 1.43.2
* https://github.com/visual-framework/vf-core/pull/1677

### 2.2.30

* Dependency bump.

### 2.2.28

* Critical: pins `marked` dependency to 2.0.7, as 2.1.0 breaks support in node 12.
  * https://github.com/visual-framework/vf-core/pull/1590

### 2.2.27

* Require node 12 or greater. Node 10 is now out of support and many dependencies no longer work.

### 2.2.26

* dependency bump

### 2.2.25

* dependency bump

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
