## About

The `vf-chatbot-modal`  component appears as an overlay, typically in the bottom right corner of the screen. It is designed for contextual assistance, allowing users to receive support without navigating away from the current page.

## Usage

### When to use this component

Only use the chatbot modal if it truly enables it helps users:

- Get quick, contextual help while staying focused on their main task
- Access specific guidance (such as FAQs, form instructions or navigation tips) without leaving the current page
- Complete short, task-oriented interactions with minimal disruption

For example, the modal works well during checkouts or while filling out complex forms, where users may need immediate support without losing their progress. Chatbot modals can also benefit users who are familiar with a service and want targeted help to speed up their work. Test with users to ensure the embedded assistance enhances rather than disrupts their workflow.

### When not to use this component

The chatbot modal overlays the existing interface and may distract users or obscure important content. Not all users will notice the chatbot icon or understand when to interact with it.

Do not use the chatbot modal if the help content is essential for completing a task. Critical guidance should be directly visible in the interface.

Test your workflow without a chatbot first. Clear content, in-line guidance, and intuitive layout may negate the need for a modal.

It's usually better to:

- Integrate support directly within the page or form
- Display key information upfront, especially if it applies to all users
- Use tooltips or inline help for very brief, contextual instructions
- Direct users to a dedicated help page for complex support needs

Avoid putting the chatbot modal for help or multi-step interactions. These are better suited to a [chatbot standalone](../vf-chatbot-standalone) experience or a well-structured support section.

Avoid placing modals over elements that users need to interact with, and never trigger the chatbot automatically without user intent.

### Deciding between modal vs standalone

The chatbot modal and [chatbot standalone](../vf-chatbot-standalone) are two distinct variants for delivering conversational interfaces. Choose between them based on use case needs and task complexity.

#### Modal

- For in-context support (e.g. help with current page or workflow)
- Access point is via a floating action button on the page
- Supports simple tasks such as getting information

#### Standalone

- Suitable for exploratory or focused workflows (e.g. discovering genetic variants)
- Launched via a link (such as "Talk to our AI chat assistant")
- Supports more complex tasks that benefit from sustained engagement

### Anatomy

| Element | Description |
|---------|-------------|
| Title bar | Shows the chatbot name, minimise button and close button. The title bar may include a dropdown for selecting categories. |
| Dialogue section | Scrollable chat window showing the conversation log. |
| Intro message | A brief onboarding message explaining the purpose and capabilities of the chatbot. Shows the icon, title and short message (Max. 2 lines of text). |
| Banner | Used to show optional disclaimers or alerts (Max. 3 lines of text). For cases that require user consent, use a blur overlay on the background or a pre-access popup instead, as banners may be missed. |
| Text input area | Open input field for typing and sending queries. Expands up to 5 lines, after which it becomes scrollable. |

### Flows

| Flow | Details |
|------|---------|
| Suggested prompts | Appear on the initial screen. Provide a quick-start to users with clickable queries. They help to provide context on the type of questions the user can ask on the platform. (Max. 60 characters) |
| Closing the chat dialogue | Clicking on the close icon "X" triggers a confirmation prompt to prevent accidental loss of the chat log. |
| Error management | If the chatbot is unable to provide a response to the query, display a clear error message and provide an alternative way for them to get their answers. |
| Links | Displayed in a clear underlined style. They can be shown inline or as a list. |
| Source attribution | Chips are shown in relevant paragraphs which cite the sources. Links to the sources and more details can be accessed via a "View sources" button. |
| Feedback on a query level | Users can assess the AI responses with a thumbs up/thumbs down or optional close/open response fields to give more details. |
| Category selection | A dropdown in the title bar lets users switch focus areas (e.g LLM version or data source). Single or multi-selection variants can be used depending on the use case. |

### Working example

You can access working example of modal version by clicking on the floating action button at the bottom right of this page.

### Visual branding elements and content

The Chatbot branding elements follow EMBL brand guidelines but can be updated to suit your use case. For advice on branding updates please contact the EMBL Communications Team.

Texts shown in the examples are placeholder content. Please review and update all wording to fit your your project needs and ensure it meets legal, accessibility and organisational requirements.

### Adding the Floating Action Button (FAB)

We recommend using only one Floating Action Button (FAB) per screen. If a page already includes a FAB, consider integrating its functionality into the chatbot or prioritising the most important action for the user’s journey on that page.

Place the FAB 32 pixels from the bottom and 32 pixels from the right edge of the screen. This keeps the button in a consistent and expected position across different pages. If there’s a banner on the screen, position the FAB 32 pixels above the top edge of the banner instead. This helps keep the FAB visible and avoids overlap.

This guidance applies to both desktop and mobile.

### Accessibility

The component targets WCAG 2.1 AA accessibility standard.

### Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-chatbot-modal` and other dependant components with this command.

```bash
yarn add @visual-framework/vf-chatbot @visual-framework/vf-chatbot-modal
```

### Sass/CSS

```scss
@import "@visual-framework/vf-chatbot/index.scss";
@import "@visual-framework/vf-chatbot-modal/index.scss";
```

### JavaScript

```javascript


import { initVFChatbot } from 'vf-chatbot/vf-chatbot.js';
window.addEventListener("load", function() {
  initVFChatbot(config);
});
```
where config is the configuration object with different options as described below

#### Core Configuration Options

```javascript
const config = {
  // Basic Settings
  type: "modal",
  title: "AI Assistant",
  welcome_logo: true,
  welcome_message: "Welcome! I'm here to help",
  welcome_logo_alt: "AI Assistant",
  welcome_suggestions_title: "Try asking me:",
  input_placeholder: "Ask me ...",
  welcome_max_suggestions: 4,
  disclaimer: 'Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our <a class="vf-banner__link" target="_blank" rel="noopener noreferrer" aria-label="disclaimer notes (opens in new tab)" href="https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/">disclaimer notes</a>.',
  footnote: 'Review AI generated content for accuracy. <a class="vf-link" target="_blank" rel="noopener noreferrer" aria-label="Leave feedback (opens in new tab)" href="https://embl.service-now.com/esc?id=sc_cat_item&sys_id=5eeb8eb91b92e650b376da88b04bcbc1">Leave feedback</a>.',
  icons: {
    assistant_avatar: "../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg",
    user_avatar: "../../assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg",
    send_button: "../../assets/vf-chatbot/assets/vf-chatbot--icon-send.svg",
    main_logo_url: "../../assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg",
    minimize: "../../assets/vf-chatbot/assets/vf-chatbot--icon-minimize.svg",
    close: "../../assets/vf-chatbot/assets/vf-chatbot--icon-close.svg"
  },
  api: {
    chat_endpoint: false,
    feedback_endpoint: false,
    qa_data_url: "../../assets/vf-chatbot/assets/vf-chatbot-qa.json",
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer your-token"
    },
    timeout: 10000
  },
  features: {
    enable_welcome: true,
    enable_feedback: true,
    enable_sources: true,
    enable_welcome_suggestions: true,
    enable_typing_indicator: true,
    enable_disclaimer: true,
    enable_predefined_qa: true,
    enable_fallback_responses: true,
    enable_qa_data_loading: true,
    enable_instant_feedback: false
  },
  behavior: {
    auto_scroll: true,
    typing_delay: 800,
    show_scrollbar: false
  },
  selectorContext: {
    chatbotRoutes: {
      multiSelect: false,
      showSearch: true,
      showSearchThreshold: 5,
      routes: "../../assets/vf-chatbot/assets/vf-chatbot-selector-llms.json",
      placeholder: "Search",
      title: "Services",
      selector_logo_url: "../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg",
      selector_logo_title: "AI Assistant"
    }
  },
  handlers: {
    on_message_send: "handleMessageSend",
    on_response_receive: "handleResponseReceive",
    on_feedback_submit: "handleFeedbackSubmit",
    on_suggestion_click: "handleSuggestionClick",
    on_error: "handleError",
    on_conversation_start: "handleConversationStart",
    on_conversation_end: "handleConversationEnd",
    on_fab_click: "handleFabClick",
    on_dialog_confirm: "handleDialogConfirm",
    on_dialog_cancel: "handleDialogCancel",
    on_minimize: "handleMinimize"
  },
  feedback_options: {
    positive: [
      { id: "accurate", label: "Accurate" },
      { id: "easy", label: "Easy to understand" },
      { id: "formatted", label: "Well formatted" }
    ],
    negative: [
      { id: "inaccurate", label: "Inaccurate" },
      { id: "nocontext", label: "Did not use context" },
      { id: "poorformat", label: "Poorly formatted" }
    ]
  },
  enable_session_persistence: true, // If true, the chatbot will remember the conversation and state across page reloads or navigation
  persistence_storage: "sessionStorage", // "sessionStorage" (tab-scoped) or "localStorage" (shared across tabs)
  restore_minimized_state: true // If true, restore minimized state after navigation
};
```

When `enable_session_persistence` is true, you can choose where state is stored:

- `sessionStorage`: keeps chat state only for the current tab/window.
- `localStorage`: shares chat state across tabs on the same origin.

#### Service Selector Configuration

The chatbot includes an integrated selector component which can be configured to present different selection options to user:

```javascript
const selectorConfig = {
  selectorContext: {
    chatbotRoutes: {
      // Multi-selection settings
      multiSelect: true,
      maxMultiSelect: 3,

      // Search functionality
      showSearch: true,
      showSearchThreshold: 5,

      // "All Services" option
      showAllServices: true,
      showAllServicesSelected: true,

      // Data source
      routes: "assets/vf-chatbot-selector-services.json",

      // UI labels and logo
      placeholder: "Search",
      title: "Available Services",
      selector_logo_url: "../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg",
      selector_logo_title: "AI Assistant"
    }
  }
};

Please note that if you want to opt for a single selection option version of the selector dropdown, you need to omit the multiSelect, maxMultiSelect, showAllServices and showAllServicesSelected properties from the selectorConfig above.
```

**Selector Data Format (JSON):**
```json
{
  "routes": [
    {
      "id": "model-1",
      "title": "Model 1 title"
    },
    {
      "id": "model-2",
      "title": "Model 2 title"
    }
  ]
}
```

### Event Handling

#### Built-in Event Handlers

Chatbot comes with a provision to allow custom event handlers. These handlers can be defined in your code to handle specific actions for different events triggered during interaction with chatbot.
Configure custom handlers for chatbot events:

```javascript
const config = {
  handlers: {
    on_message_send: "handleMessageSend",
    on_response_receive: "handleResponseReceive",
    on_feedback_submit: "handleFeedbackSubmit",
    on_suggestion_click: "handleSuggestionClick",
    on_error: "handleError",
    on_conversation_start: "handleConversationStart",
    on_conversation_end: "handleConversationEnd",
    on_fab_click: "handleFabClick",
    on_dialog_confirm: "handleDialogConfirm",
    on_dialog_cancel: "handleDialogCancel",
    on_minimize: "handleMinimize"
  }
};

// Implement handler functions
function handleMessageSend(message, conversationId) {
  console.log('User sent:', message);
  // Track analytics, log conversations, etc.
}

function handleResponseReceive(response, sources, prompts) {
  console.log('Assistant responded:', response);
  // Process response, update UI, etc.
}

function handleFeedbackSubmit(feedbackData) {
  console.log('Feedback received:', feedbackData);
  // Send to analytics, update models, etc.
}
```

#### Custom Event Listeners

Likewise you can also listen to events emitted by the chatbot for specific interactions:

```javascript
// Listen for specific chatbot events
document.addEventListener('vf-chatbot:message-send', (event) => {
  const { message, conversationId } = event.detail;
  // Handle message send
});

document.addEventListener('vf-chatbot:message-receive', (event) => {
  const { message, conversationId } = event.detail;
  // Handle message send
});

document.addEventListener('vf-chatbot-feedback:submit', (event) => {
  const { messageId, feedbackType, feedbackText, feedbackComment } = event.detail;
  // Handle feedback submission
});

document.addEventListener('vf-chatbot-welcome:suggestion-click', (event) => {
  const { question } = event.detail;
  // Handle suggestion clicks
});

document.addEventListener('vf-chatbot:assistant-change', (obj) => {
  const { selectedRoutes } = obj.selectedAssistants;
  const { conversationId } = obj.conversationId;
  // Handle service selection
});

document.addEventListener('vf-chatbot:error', (event) => {
  const { message, conversationId } = event.detail;
  // Handle message send
});

document.addEventListener('vf-chatbot:conversation-start', (event) => {
  const { message, conversationId } = event.detail;
  // Handle conversation start
});

document.addEventListener('vf-chatbot:conversation-end', (event) => {
  const { message, conversationId } = event.detail;
  // Handle conversation end
});

```

### Feedback System Configuration

#### Feedback (with form)
```javascript
const config = {
  features: {
    enable_feedback: true,
    enable_instant_feedback: false // Default
  },
  feedback_options: {
    positive: [
      { id: "accurate", label: "Accurate" },
      { id: "easy", label: "Easy to understand" },
      { id: "formatted", label: "Well formatted" }
    ],
    negative: [
      { id: "inaccurate", label: "Inaccurate answer" },
      { id: "nocontext", label: "Did not use context" },
      { id: "poorformat", label: "Poorly formatted" }
    ]
  }
};
```

#### Instant Feedback (one-click)
```javascript
const config = {
  features: {
    enable_feedback: true,
    enable_instant_feedback: true // Thumbs up/down only
  }
};
```

### Q&A Data Configuration

Load predefined questions and answers:

```javascript
const config = {
  features: {
    enable_predefined_qa: true,
    enable_qa_data_loading: true
  },
  api: {
    qa_data_url: "path/to/qa-data.json"
  }
};
```

**Q&A Data Format:**
```json
{
  "predefinedQA": {
    "How can I submit genomic data to EMBL-EBI?": {
      "answer": "To submit genomic data, visit the EMBL-EBI submission portal, where you’ll find step-by-step guides and tools for submitting sequencing data, assemblies, annotations, and more.",
      "sources": [
        {
          "domain": "ebi.ac.uk",
          "title": "EMBL's European Bioinformatics Institute",
          "url": "https://www.ebi.ac.uk/",
          "description": "Run BLAST searches against comprehensive sequence databases at EMBL-EBI."
        },
        {
          "domain": "ena-docs.readthedocs.io",
          "title": "ENA Documentation",
          "url": "https://ena-docs.readthedocs.io/en/latest/",
          "description": "ENA Documentation"
        }
      ]
    }
  },
  "fallbackResponses": [
    {
      "answer": "I'm sorry, I'm having trouble connecting to my knowledge base right now. Could you try again in a moment?",
      "prompts": [
        {
          "action_text": "Contact support team",
          "action_url": "tel:+44 1223 494 444"
        },
        {
          "action_text": "Submit a support request",
          "action_url": "https://www.ebi.ac.uk/about/contact/support/"
        }
      ]
    }
  ]
}
```

### API Integration

#### Chat Endpoint
Your chat API should accept POST requests:

```javascript
// Request format
{
  "message": "User's question",
  "conversationId": "unique-id",
  "context": {
    "selectedServices": ["service-1", "service-2"]
  }
}

// Response format
{
  "response": "Assistant's answer",
  "sources": [
    {
      "title": "Documentation Link",
      "url": "https://example.com/docs"
    }
  ],
  "prompts": [
    {
      "action_text": "Learn More",
      "action_url": "https://example.com/learn"
    }
  ]
}
```

#### Custom Welcome Screen
```javascript
const config = {
  features: {
    enable_welcome: true,
    enable_welcome_suggestions: true
  },
  welcome_logo: true,
  welcome_message: "Welcome to our AI assistant!",
  welcome_suggestions_title: "Popular questions:",
  welcome_max_suggestions: 6
};
```

#### Source Citations
```javascript
const config = {
  features: {
    enable_sources: true
    enable_sources_custom_format: true,
  }
};

// Sources in API response (predefined format)
{
  "response": "Here's the information...",
  "sources": [
    {
      "title": "Official Documentation",
      "url": "https://docs.example.com",
      "description": "Complete guide to the platform"
    }
  ]
}

// Sources in API response (custom format)
{
  "response": "Here's the information...",
  "sources": `<nav>
    <ul>
    <li><a href="#nowhere" title="Lorum ipsum dolor sit amet">Lorem</a></li>
    <li><a href="#nowhere" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
    <li><a href="#nowhere" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
    <li><a href="#nowhere" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
    <li><a href="#nowhere" title="Pellentesque fermentum dolor">Pellentesque</a></li>
    </ul>
  </nav>`
}
```

#### Action Prompts
```javascript
// Action prompts in API response
{
  "response": "I can help you with that...",
  "prompts": [
    {
      "action_text": "Start Tutorial",
      "action_url": "https://example.com/tutorial"
    },
    {
      "action_text": "Contact Support",
      "action_url": "mailto:support@example.com"
    }
  ]
}
```

### Angular

This component now has experimental Angular support.

1. Install `yarn add @visual-framework/vf-chatbot @visual-framework/vf-chatbot-modal`
2. Import in your app module
  ```
  import { VfChatbotAngularModule } from '@visual-framework/vf-chatbot/vf-chatbot.angular';

  @NgModule({
    imports: [VfChatbotAngularModule, YourOtherModules],
    ...
  })
  ```
3. JS assets inclusion
  * Copy required JS files to your Angular `src/assets` folder, keeping these paths:
    - `src/assets/vf-chatbot/vf-chatbot.js`
    - `src/assets/vf-chatbot-modal/vf-chatbot-modal.js`
  * In `angular.json`, add these file references in `scripts: []`.
  * Rerun the project if already running.
4. Can be used as
  ```
  <vf-chatbot [config]="chatbotConfig"></vf-chatbot>

  // component.ts
  chatbotConfig = {
    type: 'modal'
    // ...other options from the config examples above
  };
  ```
5. Add below to your `styles.scss`
  ```
  $vf-font-plex-mono-prefix: '~@visual-framework/vf-font-plex-mono/assets';
  $vf-font-plex-sans-prefix: '~@visual-framework/vf-font-plex-sans/assets';

  @import '~@visual-framework/vf-sass-starter/index.scss';
  @import '~@visual-framework/vf-link/vf-link.scss';
  @import '~@visual-framework/vf-chatbot/vf-chatbot.scss';
  @import '~@visual-framework/vf-chatbot-modal/index.scss';
  ```
  You should also install [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles.

### React

This component now has React support which has been tested on react version 18.2.0

1. Install `yarn add @visual-framework/vf-chatbot @visual-framework/vf-chatbot-modal`
2. Import in the JS file where you want to include this component
   ```
   import VFChatbot from '@visual-framework/vf-chatbot/vf-chatbot.react';

   Make sure you have the jsx support enabled with babel. Alternatively, you can also copy the vf-chatbot.react.js file from below to your react project and import as per the location.
   ```
3. Can be used as
   ```
   <VFChatbot config={chatbotConfig} />

   where chatbotConfig is defined as above. Please make sure to specify paths appended with `${process.env.PUBLIC_URL}`
   e.g. assistant_avatar: `${process.env.PUBLIC_URL}/assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg`,
   ```
4. Styling changes

   You should install [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles and then add below code in your main SCSS file
    ```
    $vf-font-plex-mono-prefix: '~@visual-framework/vf-font-plex-mono/assets';
    $vf-font-plex-sans-prefix: '~@visual-framework/vf-font-plex-sans/assets';

    @import '~@visual-framework//vf-sass-starter/index.scss';
    @import "~@visual-framework/vf-link/vf-link.scss";
    @import "~@visual-framework/vf-chatbot/vf-chatbot.scss";
    @import "~@visual-framework/vf-chatbot-modal/index.scss";
    @import "~@visual-framework/vf-chatbot-modal/index.scss";
    ```

5. Usage:

    ```
    <VFChatbot config={chatbotConfig} />

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
