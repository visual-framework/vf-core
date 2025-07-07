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

### Visual branding elements and content

The Chatbot branding elements follow EMBL brand guidelines but can be updated to suit your use case. For advice on branding updates please contact the EMBL Communications Team.

Texts shown in the examples are placeholder content. Please review and update all wording to fit your your project needs and ensure it meets legal, accessibility and organisational requirements.

### Accessibility

The component targets WCAG 2.1 AA accessibility standard.
## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
