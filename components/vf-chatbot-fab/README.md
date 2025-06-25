# Chatbot Floating Action Button

A floating action button (FAB) that triggers the chatbot modal.

## Usage

### When to use this component

Use the chatbot floating action button to:

- Provide easy access to help or support without cluttering the main interface
- Offer contextual assistance that users can access when needed
- Create a persistent help option that follows users as they navigate through content
- Enable quick access to chat functionality without dedicating permanent screen space
- Signal the availability of interactive help in a recognizable, standard way

The FAB is particularly effective on pages where users might need assistance while completing tasks, such as forms, checkout processes, or complex workflows.

### When not to use this component

This component is not to be used independent of the standalone or modal chatbot containers as it may not work correctly

Avoid the floating action button when:

- The main interface already has prominent help or chat access points
- Screen space is limited and the FAB would obstruct important content or controls
- Users primarily access the site on mobile devices where FABs can interfere with scrolling
- The chat functionality is central to the page purpose (use integrated chat instead)
- Analytics show that the floating position isn't being discovered or used effectively

For pages where chat is the primary function, a dedicated interface may be more appropriate than a floating trigger.

### Implementation

The FAB component provides:

- Fixed positioning that remains visible as users scroll
- Clear visual indicator (typically a chat or help icon) that suggests its function
- Hover and focus states that provide visual feedback
- Smooth animations and transitions for professional appearance
- Active state styling when the associated chat modal is open
- Responsive positioning that adapts to different screen sizes
- Accessibility features including proper labeling and keyboard navigation

The button typically appears in the bottom-right corner of the viewport and opens the chatbot modal when clicked.

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-fab
```

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
