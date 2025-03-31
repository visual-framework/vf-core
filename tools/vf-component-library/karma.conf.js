module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'systemjs'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-systemjs'),
    ],
    reporters: ['progress', 'kjhtml'],
    files: [
      { pattern: 'node_modules/systemjs/dist/system.js', watched: false }, // ✅ Load SystemJS
      { pattern: 'node_modules/zone.js/bundles/zone-testing-bundle.umd.js', watched: false },
      { pattern: 'node_modules/typescript/lib/typescript.js', included: false, watched: false },
      { pattern: '../../components/**/*.spec.ts', included: false }
    ],
    preprocessors: {
      '../../components/**/*.spec.ts': ['coverage']
    },
    coverageReporter: {
      type: 'lcov', // Generates an lcov report for pipelines
      dir: require('path').join(__dirname, 'coverage'),
      subdir: '.',
      check: {
        global: {
          statements: 80,
          branches: 70,
          functions: 80,
          lines: 80
        }
      }
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
    singleRun: true,
    systemjs: {
      config: {
        paths: {
          'npm:': 'node_modules/',
        },
        map: {
          'ts': 'npm:typescript/lib/typescript.js',
          '@angular/core': 'npm:@angular/core/fesm2022/core.mjs',
          '@angular/common': 'npm:@angular/common/fesm2022/common.mjs',
          '@angular/compiler': 'npm:@angular/compiler/fesm2022/compiler.mjs',
          '@angular/platform-browser': 'npm:@angular/platform-browser/fesm2022/platform-browser.mjs',
          '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs',
          'rxjs': 'npm:rxjs/dist/bundles/rxjs.umd.js',
          'jasmine-core': 'npm:jasmine-core/lib/jasmine-core/jasmine.js',
        },
        transpiler: 'ts',
        packages: {
          'src': { defaultExtension: 'ts' },
        },
      },
    },
  });
};
