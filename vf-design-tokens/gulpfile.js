'use strict';

const gulp = require('gulp');
const path = require('path');
const theoG = require('gulp-theo');
const rename = require('gulp-rename');
const theo = require('theo');

const componentPath = path.resolve(__dirname, 'src' );

// -----------------------------------------------------------------------------
// Design Token Tasks
// -----------------------------------------------------------------------------

const theoGeneratedFileWarning = `// This file has been dynamically generated from design tokens
// Please do NOT edit directly.`;
const theoSourceTokenLocation = `// Source: {{relative "${ componentPath }" meta.file}}`;

const theoGeneratedPropertiesTemplate = `${theoGeneratedFileWarning}

${theoSourceTokenLocation}

:root {
  {{#each props as |prop|}}
  {{#if prop.comment}}
  {{{trimLeft (indent (comment (trim prop.comment)))}}}
  {{/if}}
  --{{kebabcase prop.name}}: {{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}};
{{/each}}
}
`;

const theoGeneratedMapTemplate = `${theoGeneratedFileWarning}

${theoSourceTokenLocation}

\${{stem meta.file}}-map: (
{{#each props as |prop|}}
  {{#if prop.comment}}
  {{{trimLeft (indent (comment (trim prop.comment)))}}}
  {{/if}}
  '{{kebabcase prop.name}}': ({{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}}),
{{/each}}
);
`;

const theoGeneratedSassTemplate = `${theoGeneratedFileWarning}

${theoSourceTokenLocation}

{{#each props as |prop|}}
{{#if prop.comment}}
{{{trimLeft (indent (comment (trim prop.comment)))}}}
{{/if}}
\${{kebabcase prop.name}}: {{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}};
{{/each}}
`;

// Register design tokens to be processed by Theo

gulp.task('tokens:typographic-scale', () =>
  gulp.src('./src/typographic-scales/*.yml')
    .pipe(theoG({
      transform: { type: 'web' },
      format: { type: 'typography-map' }
    }))
    .pipe(rename(function (path) {
      path.extname = ".scss";
    }))
    .pipe(gulp.dest('./dist/sass'))
);

gulp.task('tokens:variables', () =>
  gulp.src('./src/variables/*.yml')
    .pipe(theoG({
      transform: { type: 'web' },
      format: { type: 'variables.scss' }
    }))
    .pipe(gulp.dest('./dist/sass'))
);

gulp.task('tokens:maps', () =>
  gulp.src(['./src/maps/*.yml', '!./src/typographic-scales/*.yml'])
    .pipe(theoG({
      transform: { type: 'web' },
      format: { type: 'map.scss' }
    }))
    .pipe(gulp.dest('./dist/sass'))
);

gulp.task('tokens:props', () =>
  gulp.src(['./src/maps/*.yml'])
    .pipe(theoG({
      transform: { type: 'web' },
      format: { type: 'custom-properties.scss' }
    }))
    .pipe(gulp.dest('./dist/sass'))
);

theo.registerTransform("web", ["color/hex"]);

// Register output format for token types
theo.registerFormat( "variables.scss",`${theoGeneratedSassTemplate}`);
theo.registerFormat( "map.scss",`${theoGeneratedMapTemplate}`);
theo.registerFormat( "custom-properties.scss",`${theoGeneratedPropertiesTemplate}`);

// The Theo typography token processor is a bit more complex
// and uses a custom format as a function
theo.registerFormat("typography-map", result => {
  let { category, type } = result
    .get("props")
    .first()
    .toJS();
  return `${theoGeneratedFileWarning}
// Source: ${path.basename(result.getIn(["meta", "file"]))}

$vf-${category}--${type}: (
${result
  .get("props")
  .map(
  prop => `
  '${prop.get("name")}': (
    'font-size': ${prop.getIn(["value", "font-size"])},
    'font-weight': ${prop.getIn(["value", "font-weight"])},
    'line-height': ${prop.getIn(["value", "line-height"])}
  ),`
  )
  .sort()
  .join("\n")}

);
  `;
});



gulp.task('tokens', gulp.parallel(
  'tokens:variables', 'tokens:typographic-scale', 'tokens:maps', 'tokens:props'
));
