## About

The `vf-chatbot-standalone`   component provides a full-screen conversational interface between a user and an AI system. It is typically accessed through a dedicated route or external site. Designed for more complex interactions, it supports extended dialogues, exploration of multiple topics, and access to documents or detailed support resources.

## Usage

### When to use this component

Only use the chatbot standalone if there's evidence it helps users:

- Engage in longer sessions or structured tasks such as report generation, data analysis, or learning journeys
- Focus in a distraction-free environment optimized for dialogue
- Interact with the bot as primary interface, rather than a secondary support layer
- Access rich responses such as cards, file previews, or dynamic visualizations

For example, the standalone chatbot works well when users need to complete complex workflows or explore content across multiple interactions. It is also effective when the conversation itself drives the experience, rather than supporting it. Test with users to ensure the dedicated interface supports their goals and provides clear value over embedded alternatives.

### When not to use this component

The chatbot standalone opens in a dedicated interface and removes users from their current context. This can interrupt active tasks or create unnecessary friction for users who only need quick or simple guidance.

Avoid using the standalone chatbot for brief interactions, especially when users benefit from staying within the current page or task flow. A [chatbot modal](../vf-chatbot-modal) or embedded support is usually more appropriate in these cases.

Do not use the standalone chatbot when:

- The task can be resolved with a simple search or static content
- The chatbot does not offer a clear improvement over lighter support mechanisms
- Accessing the chatbot disrupts processes that require deep concentration or formal
- The chatbot lacks the intelligence or depth to sustain a meaningful experience
- The target audience expects or benefits more from traditional, structured interfaces

Test your design without a standalone chatbot first. Well-written content, embedded guidance, or contextual help may meet user needs more effectively without introducing unnecessary complexity.

### Deciding between modal vs standalone

The [chatbot modal](../vf-chatbot-modal) and chatbot standalone are two distinct variants for delivering conversational interfaces. Choose between them based on use case needs and task complexity.

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

You can access working example of standalone version here:
[Visual Framework Chatbot - Standalone](/chatbot)

### Visual branding elements and content

The Chatbot branding elements follow EMBL brand guidelines but can be updated to suit your use case. For advice on branding updates please contact the EMBL Communications Team.

Texts shown in the examples are placeholder content. Please review and update all wording to fit your your project needs and ensure it meets legal, accessibility and organisational requirements.

### Accessibility

The component targets WCAG 2.1 AA accessibility standard.

Avoid this component when:

- You need a simple modal overlay chatbot (use `vf-chatbot-modal` instead)
- The interface needs to be embedded within existing content flows
- You require real-time streaming responses (component currently supports request/response pattern)
- Mobile space is extremely limited and you need a minimal interface

### Installation

```bash
yarn add @visual-framework/vf-chatbot-standalone @visual-framework/vf-chatbot-action-prompt @visual-framework/vf-chatbot-feedback @visual-framework/vf-chatbot-prompt @visual-framework/vf-chatbot-selector @visual-framework/vf-chatbot-sources @visual-framework/vf-chatbot-welcome
```

### Sass/CSS

```scss
@import "@visual-framework/vf-chatbot-standalone/index.scss";
```

### JavaScript

```javascript
import { VFChatbotStandalone, initVFChatbotStandalone } from "@visual-framework/vf-chatbot-standalone";
```

### Implementation

### Basic Setup

1. **JavaScript Initialization**
```javascript
// Or with custom configuration
const chatbotInstances = initVFChatbotStandalone(config);
```
where config is the configuration object with different options as described below 

#### Core Configuration Options

```javascript
const config = {
  // Basic Settings
  title: "AI Assistant",
  welcome_message: "Welcome! I'm here to help",
  input_placeholder: "Ask me anything...",
  welcome_max_suggestions: 4,
  
  // Content & Branding
  disclaimer: 'Custom disclaimer with <a href="/privacy">privacy policy</a>',
  footnote: 'Custom footnote with <a href="/feedback">feedback link</a>',
  
  // Icons & Assets
  icons: {
    assistant_avatar: "path/to/assistant-icon.svg",
    user_avatar: "path/to/user-icon.svg",
    send_button: "path/to/send-icon.svg",
    main_logo_url: "path/to/logo.svg"
  },
  
  // API Configuration
  api: {
    chat_endpoint: "/api/chat",
    feedback_endpoint: "/api/feedback", 
    qa_data_url: "path/to/qa-data.json",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer your-token"
    },
    timeout: 10000
  },
  
  // Feature Toggles
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
  }
};
```

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
      
      // UI labels
      placeholder: "Select services",
      title: "Available Services"
    }
  }
};
```

**Selector Data Format (JSON):**
```json
{
  "routes": [
    {
      "id": "service-1",
      "title": "Service 1 title"
    },
    {
      "id": "service-2", 
      "title": "Service 2 title"
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
    on_conversation_end: "handleConversationEnd"
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
  const { messageId, feedbackType, feedbackText } = event.detail;
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
  }
};

// Sources in API response
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

### Instance Management

```javascript
// Get chatbot configuration
const config = chatbotInstance.getConfiguration();

// Destroy instance
chatbotInstance.destroy();
```

### React Integration

The HTML template can be adapted for React applications. See the React syntax section below for implementation details on using the HTML template for the chatbot in JSX components.

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
