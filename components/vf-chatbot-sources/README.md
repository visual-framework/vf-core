# Chatbot Sources Component

Citation links component for chatbot responses, displaying reference sources for information.

## Usage

### When to use this component

Use the chatbot sources component to:

- Provide citations and references for AI-generated responses to build user trust
- Allow users to verify information by linking to original sources
- Meet transparency requirements for AI systems that pull from external data
- Enable users to explore topics in greater depth beyond the chatbot response
- Comply with attribution requirements for content that originates from specific databases or publications

Sources are particularly important for factual, scientific, or research-based chatbot responses where accuracy and credibility are essential.

### When not to use this component

This component is not to be used independent of the standalone or modal chatbot containers as it may not work correctly

Avoid showing sources when:

- The chatbot response is based on general knowledge that doesn't require specific attribution
- Sources would clutter the interface for simple, conversational responses
- The AI response is creative or opinion-based rather than factual
- You're displaying sources inline within the response text already
- The chatbot is handling procedural or navigational queries that don't need external validation

For casual conversations or simple FAQ-style interactions, sources may be unnecessary and could make the interface feel overly formal.

### Implementation

The sources component displays as a list of clickable links below chatbot responses. Each source includes:

- A descriptive title of the source material
- A link that opens in a new tab to preserve the chat context
- Clean, underlined styling that clearly indicates clickable links
- Automatic truncation of very long titles to maintain layout

Sources appear only when the chatbot response includes citation data, keeping the interface clean for responses that don't require attribution.

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-sources
```

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
