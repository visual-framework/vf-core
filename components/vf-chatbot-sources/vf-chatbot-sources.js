function VFChatbotSources(element) {
  this.el = element;
}

function initVFChatbotSources(sourceHTML) {
  if (!sourceHTML) {
    console.error("Message is required for VFChatbotSources");
    return null;
  }

  const el = document.createElement("div");
  el.className = "vf-chatbot-sources-toggle";
  el.innerHTML = `
    <button class="vf-chatbot-sources__toggle-link vf-link" data-vf-js-chatbot-sources-toggle>
      View sources
      <span class="vf-chatbot-sources__toggle-chevron">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3576_2094)">
        <path d="M6.00026 9.44814C5.80432 9.44849 5.61025 9.41007 5.42922 9.33511C5.24819 9.26014 5.08378 9.15011 4.94545 9.01134L0.247452 4.07094C0.165606 3.9853 0.101468 3.88435 0.0587149 3.77387C0.0159622 3.6634 -0.00456422 3.54557 -0.00168768 3.42714C0.00118887 3.30871 0.0274118 3.19202 0.0754778 3.08375C0.123544 2.97548 0.192508 2.87776 0.278415 2.7962C0.364323 2.71463 0.465485 2.65082 0.576101 2.60843C0.686718 2.56604 0.804614 2.54591 0.92303 2.54917C1.04145 2.55244 1.15805 2.57904 1.26617 2.62746C1.37428 2.67588 1.47177 2.74517 1.55305 2.83134L5.78306 7.28574C5.81098 7.3153 5.84465 7.33885 5.882 7.35495C5.91935 7.37104 5.95959 7.37934 6.00026 7.37934C6.04092 7.37934 6.08116 7.37104 6.11851 7.35495C6.15586 7.33885 6.18953 7.3153 6.21745 7.28574L10.4475 2.83134C10.5287 2.74517 10.6262 2.67588 10.7343 2.62746C10.8425 2.57904 10.9591 2.55244 11.0775 2.54917C11.1959 2.54591 11.3138 2.56604 11.4244 2.60843C11.535 2.65082 11.6362 2.71463 11.7221 2.7962C11.808 2.87776 11.877 2.97548 11.925 3.08375C11.9731 3.19202 11.9993 3.30871 12.0022 3.42714C12.0051 3.54557 11.9845 3.6634 11.9418 3.77387C11.899 3.88435 11.8349 3.9853 11.7531 4.07094L7.08026 8.99934C6.9387 9.14163 6.77041 9.25453 6.58506 9.33155C6.39971 9.40857 6.20097 9.4482 6.00026 9.44814Z" fill="#193F90"/>
        </g>
        <defs>
        <clipPath id="clip0_3576_2094">
        <rect width="12" height="12" fill="white"/>
        </clipPath>
        </defs>
        </svg>
      </span>
    </button>
    <div class="vf-chatbot-sources vf-chatbot-sources--collapsed" data-vf-js-chatbot-sources>
      <div class="vf-chatbot-sources__header">
        <button class="vf-chatbot-sources__hide-link vf-link" data-vf-js-chatbot-sources-hide>
          Hide sources
          <span class="vf-chatbot-sources__hide-chevron">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3576_5110)">
            <path d="M6.00026 2.55186C5.80432 2.55151 5.61025 2.58993 5.42922 2.66489C5.24819 2.73986 5.08378 2.84989 4.94545 2.98866L0.247452 7.92906C0.165606 8.0147 0.101468 8.11565 0.0587149 8.22613C0.0159622 8.3366 -0.00456422 8.45443 -0.00168768 8.57286C0.00118887 8.69129 0.0274118 8.80798 0.0754778 8.91625C0.123544 9.02452 0.192508 9.12224 0.278415 9.2038C0.364323 9.28537 0.465485 9.34918 0.576101 9.39157C0.686718 9.43396 0.804614 9.45409 0.92303 9.45083C1.04145 9.44756 1.15805 9.42096 1.26617 9.37254C1.37428 9.32412 1.47177 9.25483 1.55305 9.16866L5.78306 4.71426C5.81098 4.6847 5.84465 4.66115 5.882 4.64505C5.91935 4.62896 5.95959 4.62066 6.00026 4.62066C6.04092 4.62066 6.08116 4.62896 6.11851 4.64505C6.15586 4.66115 6.18953 4.6847 6.21745 4.71426L10.4475 9.16866C10.5287 9.25483 10.6262 9.32412 10.7343 9.37254C10.8425 9.42096 10.9591 9.44756 11.0775 9.45083C11.1959 9.45409 11.3138 9.43396 11.4244 9.39157C11.535 9.34918 11.6362 9.28537 11.7221 9.2038C11.808 9.12224 11.877 9.02452 11.925 8.91625C11.9731 8.80798 11.9993 8.69129 12.0022 8.57286C12.0051 8.45443 11.9845 8.3366 11.9418 8.22613C11.899 8.11565 11.8349 8.0147 11.7531 7.92906L7.08026 3.00066C6.9387 2.85837 6.77041 2.74547 6.58506 2.66845C6.39971 2.59143 6.20097 2.5518 6.00026 2.55186Z" fill="#193F90"/>
            </g>
            <defs>
            <clipPath id="clip0_3576_5110">
            <rect width="12" height="12" fill="white" transform="matrix(1 0 0 -1 0 12)"/>
            </clipPath>
            </defs>
            </svg>
          </span>
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
    // Scroll the sources div into view
    sourcesDiv.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  hideBtn.addEventListener("click", () => {
    sourcesDiv.classList.add("vf-chatbot-sources--collapsed");
    toggleBtn.style.display = "";
  });

  return new VFChatbotSources(el);
}

export { VFChatbotSources, initVFChatbotSources };
