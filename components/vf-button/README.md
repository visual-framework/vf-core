# Button component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-button.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-button)

## About

Buttons are clickable elements that trigger an action. They can communicate calls to action, are visually prominent, and allow users to interact with the pages in various ways.

## Usage

The `vf-button` component can be used with forms on a page and as a prominent 'call to action' link that goes to another page.

### When To Use

A button can be used to submit data or take action and as a link to navigate to another page.

Use the primary button for the principal call to action on a page or form. Avoid having multiple primary buttons on the same page or form.

Use secondary buttons for secondary calls to action. Pages with too many prominent calls to action [make it hard for users to know what to do next](https://design-system.service.gov.uk/components/button/). Before adding lots of secondary buttons, try to simplify the page or break the content down across multiple pages.

Tertiary buttons can be used for less prominent actions. Consider using a link instead of a button to send users to another page, if this action is not very important.

As the `vf-button` is relatively large, depending on the context, you may wish to use the `vf-button--small` variant instead.

#### Alignment

As a general rule, the `vf-button` should be left aligned on the page and when used inside a larger component.

When used in conjunction with a single form input, as in [the vf-search component](https://stable.visual-framework.dev/components/vf-search/), the `vf-button` needs to be inline with the input and to the right of it.

When a `vf-button` is used in a banner (e.g. to accept cookies) it needs to follow the content and be right aligned.

### When Not To Use

If using the `vf-button` as a link do not use it to link to content on the same page. Use the <a href="/components/vf-link-list/#vf-link-list--easy">`vf-link-list`</a> component instead.

### Label

Write button text in [sentence case](https://blog.prototypr.io/sentence-case-or-title-case-5bd581f05d88), describing the action it performs. For example:
- ‘Apply now’ to apply for a job.
- ‘Create account’ to create an account.
- ‘Sign in’ to an account that a user has already created.
- ‘Save and continue’ when pressing the button will save the information that the user has entered.

Try to keep the text on the button short and clear.

### Related documentation

The guidelines on buttons in [the GOV.UK Design System](https://design-system.service.gov.uk/components/button/) and [the Carbon Design System](https://www.carbondesignsystem.com/components/button/usage/) include additional advice on when and how to use buttons.

### Angular

Latest Angular package (3.0.0-alpha.0) was generated with Angular version 15.2.0 and has been tested on application with Angular version 15.2.0.

1. install `yarn add @visual-framework/vf-button`
2. import in your app.module
   ```
   import { VfButtonAngularModule } from '@visual-framework/vf-button/vf-button.angular';

   @NgModule({
     imports: [VfButtonAngularModule, YourOtherModules],
     ...
   })
   ```
3. can be used as
   ```
   <vf-button [text]="'Primary Button'" [theme]="'primary'"></vf-button>
   ```
4. add to your styles.scss
   ```
   @import '../node_modules/@visual-framework/vf-sass-config/index.scss';
   @import "../node_modules/@visual-framework/vf-button/vf-button.scss";
   ```
   (you should also make use of [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter))

Depending on the success of this method, we plan to add standardized guidance to the component library and component generator.

Usage:

```
<vf-button [text]="'Primary Button'" [theme]="'primary'"></vf-button>
```

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-button` with this command.

```
$ yarn add --dev @visual-framework/vf-button
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-button/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
