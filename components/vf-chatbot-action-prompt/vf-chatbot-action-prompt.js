export class VFChatbotActionPrompt {
  constructor(element) {
    this.el = element;
    this.link = this.el.querySelector(".vf-chatbot-action-prompt__link");

    if (this.link && !this.link.hasAttribute("href")) {
      this.link.addEventListener("click", e => {
        e.preventDefault();
        this.el.dispatchEvent(
          new CustomEvent("vf-chatbot-action-prompt:click", {
            bubbles: true,
            detail: {
              text: this.link.textContent.trim()
            }
          })
        );
      });
    }
  }
}

/**
 * Creates and returns a fully functional action prompts component.
 * @param {Array} prompts - Array of prompt objects, e.g., [{ action_text: 'Click me', action_url: '...' }]
 * @returns {HTMLElement|null} - The action prompts component element or null if no prompts.
 */
function initVFChatbotActionPrompt(prompts) {
  if (!prompts || prompts.length === 0) {
    return null;
  }

  // Create the main container
  const promptsContainer = document.createElement('div');
  promptsContainer.className = 'vf-chatbot-action-prompts';

  // Create the list container
  const promptsList = document.createElement('div');
  promptsList.className = 'vf-chatbot-action-prompts__list';

  // Create and append each prompt
  prompts.forEach(prompt => {
    const promptEl = document.createElement('div');
    promptEl.className = 'vf-chatbot-action-prompt';

    const link = document.createElement('a');
    link.className = 'vf-chatbot-action-prompt__link';
    link.href = prompt.action_url || '#';
    link.textContent = prompt.action_text;

    // Set target attribute for external links
    if (prompt.action_url && !prompt.action_url.startsWith('tel:')) {
      link.target = '_blank';
    }

    // If no URL is provided, the prompt can dispatch an event on click
    if (!prompt.action_url) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const event = new CustomEvent('vf-chatbot-action-prompt:click', {
          bubbles: true,
          detail: {
            text: prompt.action_text
          }
        });
        link.dispatchEvent(event);
      });
    }

    promptEl.appendChild(link);
    promptsList.appendChild(promptEl);
  });

  promptsContainer.appendChild(promptsList);

  return promptsContainer;
}

export { initVFChatbotActionPrompt };
