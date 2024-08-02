# Tabs component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-tabs.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-tabs)

## About

The ever-useful tabs. This component works best with the included JS, but you can use the CSS styling on other tab implementations, like Bootstrap tabs.

## Usage

These tabs have been made with accessibility in mind, however tabs should be avoided where content structure avoids the need to use tabs.

Nested tabs are also possible, as demonstrated in the example, however this provides further usability challenges and should be strongly avoided.

### Angular

As of version 2.1.5 vf-tabs has experimental Angular support.
This package was generated with Angular version 15.2.0 and has been tested on application with Angular version 15.2.0.

1. Install `yarn add @visual-framework/vf-tabs`
2. Import in your app.module
   ```
   import { VfTabsAngularModule } from '@visual-framework/vf-tabs/vf-tabs.angular';

   @NgModule({
     imports: [VfTabsAngularModule, YourOtherModules],
     ...
   })
   ```
3. Can be used as
   ```
   <vf-tabs [tabsdata]="tabsdata"></vf-tabs>
   ```
  Here `tabsdata` can be declared in app.component.ts as below -
  ```
   public tabsdata = [
    [
      { tab_title: `Section` },
      { tab_number: 58 },
      { tab_heading: `Section 1` },
      { tab_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a class='vf-link' href='#'>Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.` }
    ],
    [
      { tab_title: `A Short Section` },
      { tab_number: 546 },
      { tab_heading: `Section 2` },
      { tab_content: `Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.` }
    ],
    [
      { tab_title: `A Rather Long Section` },
      { tab_number: 878 },
      { tab_heading: `Section 3` },
      { tab_content: `Phasellus ac tristique orci. Nulla maximus <a class='vf-link' href='#'>justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class='vf-link' href='#'>pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.` }
    ],
    [
      { tab_title: `Nested Tabs` },
      { tab_number: 8793456 },
      { tab_heading: `Section 4` },
      { tab_content: `
            <div class="vf-tabs">
              <ul class="vf-tabs__list" data-vf-js-tabs>
                <li class="vf-tabs__item">
                  <a class="vf-tabs__link" href="#vf-tabs__section-nested--234548">Nested tab 1</a>
                </li>
                <li class="vf-tabs__item">
                  <a class="vf-tabs__link" href="#vf-tabs__section-nested--29974">Nested tab 2</a>
                </li>
              </ul>
            </div>

            <div class="vf-tabs-content" data-vf-js-tabs-content>
              <section class="vf-tabs__section" id="vf-tabs__section-nested--234548">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante erat imperdiet velit, nec laoreet enim lacus a velit. <a href="#">Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat mi leo sit amet lectus. Praesent non odio bibendum magna bibendum accumsan.</p>
              </section>
              <section class="vf-tabs__section" id="vf-tabs__section-nested--29974">
                <p>Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna semper, eleifend magna non, facilisis nisl. Proin et est et lorem dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id, condimentum lacinia est. In lacinia cursus odio a aliquam. Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat tellus.</p>
              </section>
            </div>`}
    ],
    [
      {tab_title: `A fifth section`},
      {tab_number: 545541},
      {tab_heading: `Section 5`},
      {tab_content: `Phasellus ac tristique orci. Nulla maximus <a class="vf-link" href="#">justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class="vf-link" href="#">pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.`}
    ],
    [
      {tab_title: `A sixth section`},
      {tab_number: 621211},
      {tab_heading: `Section 6`},
      {tab_content: `Phasellus ac tristique orci. Nulla maximus <a class="vf-link" href="#">justo nec dignissim consequat</a>. Sed vehicula diam sit amet mi efficitur vehicula in in nisl. Aliquam erat volutpat. Suspendisse lorem turpis, accumsan consequat consectetur gravida, <a class="vf-link" href="#">pellentesque ac ante</a>. Aliquam in commodo ligula, sit amet mollis neque. Vestibulum at facilisis massa.`}
    ],
    [
      { tab_title: `Section` },
      { tab_number: 99999 },
      { tab_heading: `Default` },
      { tab_content: `An <a href="/#vf-tabs__section--88888">example deep link</a> loading this anchor will directly activate the neighbouring tab. <code>/vf-tabs#vf-tabs__section--88888</code>` }
    ],
    [
      { tab_title: `A Short Section` },
      { tab_number: 88888 },
      { tab_heading: `Deep-linked tab` },
      { tab_content: `If you see me on page load, the deep link has worked.` }
    ]
  ];
  ```

4. CSS to be added to your styles.scss
   ```
   @import '../node_modules/@visual-framework/vf-sass-config/index.scss';
   @import '../node_modules/@visual-framework/vf-tabs/vf-tabs.scss';
   ```
   you should also install [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles

5. Javascript file:
   1. Copy the vf-tabs.js (from Assets section below) to your src/assets/vf-tabs folder.
   2. Comment or remove the  last line "export { vfTabs };" in this copied file.
   3. In the angular.json inside "scripts": [] add the above file reference like -
        "scripts": [
              "src/assets/vf-tabs/vf-tabs.js"
            ]
   4. Rerun the project if already running.

  Usage:

  ```
  <vf-tabs [tabsdata]="tabsdata"></vf-tabs>
  ```

### Deep linking

A tab can be activated on page load by passing it on the link `#vf-tabs__section-tab_id`

This is the default behaviour and can be deactivated when invoking vfTabs:

```js
// vfTabs(scope, activateDeepLinkOnLoad)
vfTabs(document, false);
```

Note: The deep linking feature is not designed with `vf-location-nearest` compatibility. A `vf-location-nearest` tab may not respect a deep linked hash url.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-tabs` with this command.

```
$ yarn add --dev @visual-framework/vf-tabs
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-tabs/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
