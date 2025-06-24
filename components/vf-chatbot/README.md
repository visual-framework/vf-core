# Chatbot Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot)

## About

These components provide an interactive AI chatbot interface for the Visual Framework.

- **Modal Chatbot**: A pop-up dialog triggered by a floating action button
- **Standalone Chatbot**: A full-page chatbot interface
- **Shared Components**: Reusable elements used by both modal and standalone variants

## Usage

### Why a chatbot

While bots can be a solution to some business challenges, ensure that it is the right solution before implementing it. Consider the following:

- Will it solve a validated user problem?
- Are there more efficient alternatives?
- What are the potential cons or drawbacks if a chatbot is added to the process?
- How will this be maintained and updated in the future?

### Deciding between modal vs. standalone

The [chatbot standalone](../vf-chatbot-standalone) and [chatbot modal](../vf-chatbot-modal) are two distinct variants for delivering conversational interfaces. Choose between them based on use case needs and task complexity.

#### Modal

- For in-context support (e.g. help with current page or workflow)
- Access point is via a floating action button on the page
- Supports simple tasks such as getting information

#### Standalone

- Suitable for exploratory or focused workflows (e.g. discovering genetic variants)
- Launched via a link (such as "Talk to our AI chat assistant")
- Supports more complex tasks that benefit from expanded engagement

### Anatomy

| Element | Description |
|---------|-------------|
| Title bar | Shows the chatbot name, minimise button and close button. The title bar may include a dropdown for selecting categories. |
| Dialogue section | Scrollable chat window showing the conversation log. |
| Intro message | A brief onboarding message explaining the purpose and capabilities of the chatbot. Shows the icon, title and short message. |
| Banner | Used to show optional disclaimers or alerts (Max. 3 lines of text). For cases that require user consent, use a blur overlay on the background or a pre-access popup instead, as banners may be missed. |
| Text input area | Open input field for typing and sending queries. Expands up to 5 lines, after which it becomes scrollable. |

### Flows

| Flow | Details |
|------|---------|
| Suggested prompts | Appear on the initial screen. Provide a quick start to users with clickable queries. They help to provide context on the type of questions the user can ask on the platform. (Max. 60 characters) |
| Closing the chat dialogue | Clicking on the close icon "X" triggers a confirmation prompt to prevent accidental loss of the chat log. |
| Error management | If the chatbot is unable to provide a response to the query, display a clear error message and provide an alternative way for them to get their answers. |
| Links | Displayed in a clear underlined style. They can be shown inline or as a list. |
| Source attribution | Chips are shown in relevant paragraphs which cite the sources. Links to the sources and more details can be accessed via a "View sources" button. |
| Feedback on a query level | Users can assess the AI responses with a thumbs up/thumbs down or optional close/open response fields to give more details. |
| Category selection | A dropdown in the title bar lets users switch focus areas (e.g LLM version or data source). Single or multi-selection variants can be used depending on the use case. |

### Design assets

Design resources for the vf-chatbot are available in our shared Figma library.

You can access the Figma files here:
[View vf-chatbot Design file in Figma](https://www.figma.com/file/yourfigmalink)

### Accessibility

The component targets WCAG 2.1 AA accessibility standard.

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
