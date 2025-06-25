# Chatbot Feedback Component

Thumbs up/down feedback controls for the chatbot responses.

## Usage

### When to use this component

Use the chatbot feedback component to:

- Collect user satisfaction data on AI-generated responses
- Identify which responses are helpful vs. unhelpful to improve the system
- Allow users to quickly indicate whether their question was answered effectively
- Gather specific feedback about response quality, accuracy, or relevance
- Enable continuous improvement of the chatbot's performance through user input

Feedback is particularly valuable for AI systems where response quality can vary, and user input helps train and refine the system over time.

### When not to use this component

This component is not to be used independent of the standalone or modal chatbot containers as it may not work correctly

Avoid feedback controls when:

- The chatbot handles simple, transactional queries where feedback adds unnecessary friction
- You lack the infrastructure to act on the feedback data collected
- The interface is already cluttered and feedback would add visual noise
- Users are completing time-sensitive tasks where feedback requests could be disruptive
- The chatbot responses are primarily navigational or procedural rather than informational

For simple FAQ-style bots or when feedback collection happens through other channels, this component may not be necessary.

### Implementation

The feedback component provides:

- Simple thumbs up/down voting interface that's quick to use
- Optional detailed feedback form for users who want to provide more context
- Visual confirmation when feedback is submitted successfully
- Discrete positioning that doesn't interfere with the conversation flow
- Different feedback options for positive vs. negative responses
- Success and error states with appropriate messaging
- Analytics integration points for tracking feedback patterns

Feedback appears below individual assistant responses, allowing granular assessment of each interaction rather than overall conversation rating.

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-feedback
````
