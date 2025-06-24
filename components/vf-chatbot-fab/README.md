# Chatbot FAB (Floating Action Button) component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-fab.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-fab)

## About

The floating action button component for the Visual Framework chatbot. This component provides a persistent button that floats above the page content and allows users to initiate chat interactions.

## Usage

### JavaScript

```js
import { initVFChatbotFab } from '@visual-framework/vf-chatbot-fab/vf-chatbot-fab.js';
// Or import directly
// import { initVFChatbotFab } from '../components/raw/vf-chatbot-fab/vf-chatbot-fab.js';

initVFChatbotFab();
```

### Nunjucks template

```njk
{% render '@vf-chatbot-fab', {
  notification_count: 2,
  fab_active: false
} %}
```

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-fab
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```scss
@import "@visual-framework/vf-chatbot-fab/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)