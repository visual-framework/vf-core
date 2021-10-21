# Link List component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-link-list.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-link-list)

## About

This component has been <span style="color: rgb(228, 0, 70);">deprecated</span>. See "usage" for information on migrating.

## Usage

### Migrating

This deprecates vf-links-list as many components are either widely unused or only seldom used — for the components that aren't yet used much we also have major revisions coming and we wish to discourage use of components that are about to be overhauled.

Usage of this component can by substituted with other components or new ones under development:

- Links List Default: use vf-list + vf-heading
- Links List no heading: use vf-list
- Links List Tight: use vf-list  (we may add a vf-list--tight variant subject to demand)
- Links List Very Easy: see above
- Links List Easy: to be overhauled as vf-navigation--on-page
- Links List Has Images: use vf-summary--has-image or vf-flag--middle

### Original guidance

The Links List component is a robust list group that can be used in a variety of grid layouts.

The Links List can have a title `<h3 class="vf-links__heading">Example Title</h3>`.

In each list item you can have:

A link `<a class="vf-links__link" href="">Example Link</a>`.

Except for a Links List that is using the the design variant of `vf-links__list--easy` you can also use:

It can make use of the `vf-badge` component `<span class="vf-badge">Example Tag</span>`.

It can include meta information `<p class="vf-links__meta">Example Meta</p>`.

### Contextual Based Link Lists

#### "On this page"

If you want to provide a set of links that will anchor to sections on the page you should use:

note: You will need to add a corresponding `id` to the section you are linking to for the anchor to work.

##### Link List

```
<div class="vf-links vf-links__list--easy">
  <h3 class="vf-links__heading">On this page</h3>
  <ul class="vf-links__list | vf-list">
    <li class="vf-list__item">
      <a class="vf-list__link" href="#Anchor-Text">
        Anchor Text
        <svg class="vf-icon vf-icon__arrow--down | vf-list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.249,7.207,11.233,19.678h0a1.066,1.066,0,0,0,1.539,0L23.751,7.207a.987.987,0,0,0-.107-1.414l-1.85-1.557a1.028,1.028,0,0,0-1.438.111L12.191,13.8a.25.25,0,0,1-.379,0L3.644,4.346A1.021,1.021,0,0,0,2.948,4a1,1,0,0,0-.741.238L.356,5.793A.988.988,0,0,0,0,6.478.978.978,0,0,0,.249,7.207Z"></path></svg>
      </a>
    </li>
  </ul>
</div>
```

##### Linked Section In Page

```
<section class="vf-component" id="Anchor-Text">
  ...
</section>
```

#### "In this section"

If you want to include quick links as part of a section of content you can use:

##### Link List

```html
<div class="vf-links vf-links--tight vf-links__list--s vf-links__list--very-easy">
  <h3 class="vf-links__heading">In this section</h3>
  <ul class="vf-links__list vf-links__list--secondary | vf-list">
    <li class="vf-list__item">
      <a class="vf-list__link" href="#Anchor-Text">
        Anchor Text
      </a>
    </li>
  </ul>
</div>
```

##### Linked Text In Section

```html
<section class="vf-component">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolore eveniet sed totam deleniti, ipsum dolorum cupiditate, aut error quae beatae nemo esse pariatur repellendus illo dicta doloribus alias ipsa.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, ut aut eveniet consectetur rem. Sapiente quis optio cupiditate molestias debitis quisquam ab in. Voluptates, expedita modi aliquam, sint tempore magnam.</p>
  <p id="Anchor-Text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quo magnam accusamus vel porro, ullam tempora illo atque vitae voluptatum ratione temporibus, est, itaque quasi eum cupiditate mollitia adipisci. Suscipit.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur fuga eveniet ducimus, dolorem sit itaque sequi nisi praesentium consequatur, temporibus tempore rem illo laboriosam libero repudiandae neque labore suscipit expedita.</p>
</section>
```

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-link-list` with this command.

```
$ yarn add --dev @visual-framework/vf-link-list
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-link-list/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
