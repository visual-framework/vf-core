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
[Visual Framework Chatbot - Standlone](/chatbot)

### Accessibility

The component targets WCAG 2.1 AA accessibility standard.

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
