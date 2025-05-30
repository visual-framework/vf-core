// vf-chatbot-sources

function VFChatbotSources(element) {
  this.el = element;
}

function initVFChatbotSources(messages) {
  if (!messages) {
    console.error("Message is required for VFChatbotSources");
    return null;
  }

  const sourceHTML = messages
    .map(
      message => `
    <li class="vf-chatbot-sources__item">
      <div class="vf-chatbot-sources__label">${message.domain}</div>
      <a class="vf-chatbot-sources__link" href="${message.url}" target="_blank" rel="noopener noreferrer">
        <span class="vf-chatbot-sources__title">${message.title}</span>
      </a>
      <div class="vf-chatbot-sources__description">${message.description}</div>
    </li>
  `
    )
    .join("");

  const el = document.createElement("div");
  el.className = "vf-chatbot-sources-toggle";
  el.innerHTML = `
    <button class="vf-chatbot-sources__toggle-link vf-link" data-vf-js-chatbot-sources-toggle>
      View sources
      <span class="vf-chatbot-sources__toggle-chevron">&#8964;</span>
    </button>
    <div class="vf-chatbot-sources vf-chatbot-sources--collapsed" data-vf-js-chatbot-sources>
      <div class="vf-chatbot-sources__header">
        <button class="vf-chatbot-sources__hide-link vf-link" data-vf-js-chatbot-sources-hide>
          Hide sources
          <span class="vf-chatbot-sources__hide-chevron">&#8963;</span>
        </button>
      </div>
      <ul class="vf-chatbot-sources__list">${sourceHTML}</ul>
    </div>
  `;

  // Toggle logic
  const toggleBtn = el.querySelector("[data-vf-js-chatbot-sources-toggle]");
  const sourcesDiv = el.querySelector("[data-vf-js-chatbot-sources]");
  const hideBtn = el.querySelector("[data-vf-js-chatbot-sources-hide]");

  toggleBtn.addEventListener("click", () => {
    sourcesDiv.classList.remove("vf-chatbot-sources--collapsed");
    toggleBtn.style.display = "none";
  });
  hideBtn.addEventListener("click", () => {
    sourcesDiv.classList.add("vf-chatbot-sources--collapsed");
    toggleBtn.style.display = "";
  });

  return new VFChatbotSources(el);
}

export { VFChatbotSources, initVFChatbotSources };
