# Chatbot Selector Component

Service selection dropdown for the chatbot, allowing users to choose which services to query.

## Usage

### When to use this component

Use the chatbot selector component to:

- Allow users to choose which AI model or service they want to interact with
- Enable selection of specific databases or knowledge sources for targeted queries
- Provide options for different types of assistance (e.g., general help, technical support, research queries)
- Let users customize their chatbot experience based on their specific needs or expertise level
- Switch between different language models or specialized AI assistants within the same interface

The selector is particularly useful when your chatbot integrates multiple services or when different user groups need access to different types of information or assistance.

### When not to use this component

This component is not to be used independent of the standalone or modal chatbot containers as it may not work correctly

Avoid the selector when:

- There's only one service or the choice is obvious from context
- The selection would confuse users or add unnecessary complexity
- Users typically need all available services simultaneously
- The chatbot automatically determines the best service based on the query
- The interface is already complex and additional options would overwhelm users

For simple, single-purpose chatbots or when the service selection happens outside the chat interface, this component may be unnecessary.

### Implementation

The selector component appears in the chatbot header and provides:

- Single or multi-select functionality depending on configuration
- Search capability for lists with many options (10+ items)
- Clear visual feedback showing selected services
- Dropdown interface with chevron indicator
- "Clear all" option for multi-select mode
- Responsive design that works across different screen sizes

Users can change their selection at any time during the conversation, with the chatbot adapting its responses based on the selected services.

### Features

1. Configurable single/multi-select mode
2. Search functionality for large lists (10+ items)
3. Clear visual feedback for selected items
4. Responsive dropdown design
5. Clear all functionality for multi-select mode
6. Chevron indicator for dropdown state

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-selector
```

### Dependencies

- @visual-framework/vf-sass-config

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)


