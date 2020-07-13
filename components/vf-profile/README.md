# vf-profile Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-profile.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-profile)

## Installation

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-profile` with this command.

```
$ yarn add --dev @visual-framework/vf-profile
```


## Usage

The `vf-profile` component is to be used to display a persons details in small, compact display. This can be used on pages that display several team members and it can be used on a group home page to show the group leader.

### Content

The `vf-profile` allows for a variety of content related to a person.

| content type | variable             | description |
| ------------ | -------------------- | ----------- |
| image        | `profile__image`     |             |
| alt text     | `profile__image_alt` |             |
| text         | `profile__name`      |             |
| url          | `profile__name_href` |             |
| text         | `profile__job_title` |             |
| text         | `profile__text`      |             |
| group        | `profile__emails`    |             |
| text         | `profile__email`     |             |
| group        | `profile__phones`    |             |
| text         | `profile__phone`     |             |
| text         | `profile__uuid`      |             |
| url          | `profile__uuid_href` |             |


All content is optional


#### Hiding Content Items

All content in this component can be set so that it is hidden (not generated in HTML) so that we can hide specific items of content depending on the overall context of the page.

The content types available to hide are:

- image
- title
- job title
- text
- all emails
- all phone numbers
- ORCID

These content items follow the variable name, for example the title variable name is `profile__title`. To hide any of these items the variable is prefixed with `hide_`, for example `hide_profile__emails`.

To hide a content item you will need to use <code>&lcub;% set %&rcub;</code> in your `.njk` file above where you are including it, for example:

<code>
&lcub;% set hide_profile__emails == true %&rcub; <br>
&lcub;% include vf-profile %&rcub;
</code>




### Nunjucks and yml options

#### Nunjucks or YML variables available

| variable       | options                       | default     |
| -------------- | ----------------------------- | ----------- |
| layout         | `block` or `inline`           | `block`     |
| size           | `small`, `medium`, or `large` | `medium`    |
| theme          | `primary` or `secondary`      |             |
| design variant | `very-easy` or `easy`         | `very-easy` |

#### Component Specific Variants

The `vf-profile` has two sets of component specific variants.

##### Layout Variants

There are two layout variants available for the component either **block** or **inline**. The layout for `vf-profile` defaults to **block** and using nunjucks we add the class `vf-profile--block` automatically. To change this to be **inline** you would need to add this line `layout: inline` to the `.yml` file.

##### Size Variants

There are three size variants available for the component that are **small**, **medium**, or **large**. We set **medium** as the default and using nunjucks we add the class `vf-profile--medium` automatically. To change this to either **small**, or **large** you would need to add `size: small` or `size: large` to the `.yml` file. If you want to be explicit you can define `size: medium` too.


#### Theme Variants

There are two theme variants available for the component that are **primary**, and **secondary**. To add a theme to the component you would need to add `theme: primary` or `theme: secondary` to the `.yml` file.

#### Design Variants

There are two design variants available for the component, either **very-easy** ot **easy**. To add a design variant for `vf-profile` defaults to `vf-profile--very-easy` and using nunjucks we add the class automatically. To change this to **easy** you would need to add this line `variant: eady` to the `.yml` file.




#### Sass/CSS

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-profile/index.scss";
```

_Make sure you import Sass requirements along with the modules._

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
