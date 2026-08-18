# Tabs component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-tabs.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-tabs)

## About

The ever-useful tabs. This component works best with the included JS, but you can use the CSS styling on other tab implementations, like Bootstrap tabs.

## Usage

Tabs allow users to switch between a small number of related content sections without leaving the current page or task. Only one tab panel is shown at a time.

Use tabs when the sections are peers, belong to the same context, and users are likely to switch between them. Do not use tabs to hide important content, shorten a long page or replace page navigation.

### When to use

Use `vf-tabs` when all of the following are true:

- The content can be divided into a small number of related peer sections.
- Users usually need to view one section at a time.
- Users may need to switch between sections while staying in the same task.
- The sections do not need to be compared side by side.
- The first tab can show the most useful or most common content by default.
- Panel content appears immediately or uses a clear loading state.

Suitable examples include:

- Grouping a small number of related settings within one task.
- Organising one item into a few related sections, such as Overview, Details, and Activity.

### When not to use

Do not use `vf-tabs` when:

- Users need to read sections in order.
- Users need to compare information across sections.
- Most users need to see information from every section.
- The sections are separate destinations or pages.
- The content is long enough to require its own page structure.
- The tab set would contain too much content, reducing scanability.
- Important warnings, validation errors, or required information would be hidden.
- Tabs are being used mainly to make a page appear shorter.

If the content does not meet the usage criteria, consider another pattern.

#### Choose the right pattern for your use case

| User need | Recommended pattern | Reason |
|---|---|---|
| Switch between a few peer sections in the same context | Tabs | Keeps users in the same task while changing the visible section |
| Open and close several sections independently | Details | Allows more than one section to remain open |
| Reveal one short piece of optional information | Details | Provides a lighter interaction than a full tab set |
| Compare values, attributes, or results | Table or comparison layout | Keeps related information visible at the same time |
| Move through sections of a long page | In-page navigation or contents list | Preserves reading order and keeps all content available |
| Move between separate destinations | Page navigation | Gives each destination its own URL, title, and navigation state |
| Change the presentation of the same data | Filter, segmented control, or view switcher | Shows that the same content set is being changed or filtered |
| Complete steps in order | Stepper or sequential page structure | Communicates progress and dependency between steps |

### Anatomy

A tab set contains:

- <strong>Tab list</strong>: the group of tab controls.
- <strong>Tab labels</strong>: short, clear text that describes the content in each tab panel.
- <strong>Selected tab</strong>: the active control associated with the visible panel.
- <strong>Inactive tabs</strong>: available controls that show other panels when selected.
- <strong>Focus state</strong>: the visible keyboard focus indicator.
- <strong>Tab panel</strong>: the content area associated with the selected tab.
- <strong>Panel heading</strong>: a heading that identifies the visible content.

The selected state and focus state must be visually distinct. Selected shows which panel is active. Focus shows which control will respond to the next keyboard action.

### Content guidance

#### Tab labels

Write labels that are short, specific, and easy to scan.

Use:

- One or two words where possible.
- Sentence case.
- Parallel wording across the tab set.
- Labels that describe the panel content.

Avoid:

- Generic labels such as "More", "Other", "Tab 1", or "Information".
- Repeated labels within the same tab set.
- Icon-only labels.
- Labels that rely on badges or counts to make sense.
- Labels that need to wrap or truncate.

#### Number of tabs

Use two to six tabs as the recommended range.

Six tabs should be treated as an exception and should have a clear user need. Longer tab lists can make labels harder to scan and layouts harder to manage on smaller screens.

If there are more than six sections, consider whether the content would work better as an accordion, in-page navigation, separate pages or another structure.

#### Order and default tab

- Put the most useful or most frequently needed tab first.
- Keep the order stable.
- Select one tab by default.
- Do not reorder tabs based on recent use unless the behaviour is clearly communicated.

#### Panel content

Each panel should have a meaningful heading. Where useful, repeat the tab label as the panel heading so the content remains clear when printed, stacked or viewed without JavaScript.

Place shared instructions, warnings and primary actions outside the tab set when they apply to all panels. Do not hide information that users need to understand another panel.

Keep panel content focused and self-contained. Avoid placing long, complex or required tasks inside hidden panels, especially forms. Forms usually work better outside the tab set, where users can understand the full task, review their answers and find errors without switching between panels.

### Angular support

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

### React support

As of version 2.1.6 vf-tabs has experimental React support which has been tested on react version 18.2.0

1. install `yarn add @visual-framework/vf-tabs`
2. import in the JS file where you want to include this component
   ```
   import VfTabs from '@visual-framework/vf-tabs/vf-tabs.react';

   Make sure you have the jsx support enabled with babel. Alternatively, you can also copy the vf-tabs.react.js file from below to your react project and import as per the location.
   ```
3. can be used as
   ```
   <VfTabs {...tabsData}/>

   Here `tabsdata` can be declared just like above ( Angular section ).
   ```
4. add beloow to your  CSS file
   ```
   @import '~@visual-framework/vf-sass-config/index.scss';
   @import '~@visual-framework/vf-tabs/vf-tabs.scss';
   ```
   you should also install and import  [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles

Usage:

```
<VfTabs {...tabsData}/>
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
