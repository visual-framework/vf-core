export class VFChatbotRouter {
  constructor(element) {
    if (!element) {
      console.error("Router element is required");
      return;
    }

    this.el = element;
    this.isMultiselect = this.el.hasAttribute("data-multiselect");
    this.maxMultiSelect = parseInt(
      this.el.getAttribute("data-max-multiselect") || "3",
      10
    );
    this.selectedItems = new Set();

    this.init();
  }

  init() {
    // Ensure element exists before querying
    if (!this.el) return;

    // Get DOM elements
    this.titleEl = this.el.querySelector("[data-vf-js-router-toggle]");
    this.dropdownEl = this.el.querySelector("[data-vf-js-router-dropdown]");
    this.searchEl = this.el.querySelector("[data-vf-js-router-search]");
    this.clearEl = this.el.querySelector("[data-vf-js-router-clear]");
    this.listItems = this.el.querySelectorAll("[data-vf-js-router-item]");

    // Initialize dropdown as closed
    if (this.dropdownEl) {
      this.dropdownEl.style.display = "none";
    }

    // Bind events
    this.bindEvents();

    // Initialize selected items and update display
    let initSelection = false;
    this.listItems.forEach(item => {
      if (item.classList.contains("vf-chatbot-router__item--selected")) {
        this.selectedItems.add(item.getAttribute("data-route-id"));
        initSelection = true;
      }
    });

    // Update display after initial selection
    if (initSelection) {
      this.updateSelectionDisplay();
    }
  }

  bindEvents() {
    // Toggle dropdown
    if (this.titleEl) {
      this.titleEl.addEventListener("click", e => {
        e.stopPropagation();
        this.toggleDropdown();
      });
    }

    // Search functionality
    if (this.searchEl) {
      this.searchEl.addEventListener("input", e => {
        e.stopPropagation();
        this.handleSearch(e.target.value);
      });
    }

    // Clear all selections
    if (this.clearEl) {
      this.clearEl.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        this.clearAllSelections();
      });
    }

    // List item selection
    this.listItems.forEach(item => {
      item.addEventListener("click", e => {
        e.stopPropagation();
        this.handleItemSelection(item);
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", e => {
      if (!this.el.contains(e.target)) {
        this.closeDropdown();
      }
    });

    // Prevent dropdown from closing when clicking inside
    this.dropdownEl?.addEventListener("click", e => {
      e.stopPropagation();
    });
  }

  toggleDropdown() {
    const isExpanded = this.dropdownEl.style.display === "block";
    if (isExpanded) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  openDropdown() {
    this.dropdownEl.style.display = "block";
    this.titleEl.classList.add("vf-chatbot-router__title--expanded");
  }

  closeDropdown() {
    this.dropdownEl.style.display = "none";
    this.titleEl.classList.remove("vf-chatbot-router__title--expanded");
  }

  handleSearch(query) {
    const searchQuery = query.toLowerCase();
    this.listItems.forEach(item => {
      const title = item
        .querySelector(".vf-chatbot-router__item-title")
        .textContent.toLowerCase();
      const description = item
        .querySelector(".vf-chatbot-router__item-description")
        .textContent.toLowerCase();
      const matches =
        title.includes(searchQuery) || description.includes(searchQuery);
      item.style.display = matches ? "flex" : "none";
    });
  }

  handleItemSelection(item) {
    const itemId = item.getAttribute("data-route-id");

    if (this.isMultiselect) {
      if (this.selectedItems.has(itemId)) {
        this.selectedItems.delete(itemId);
        item.classList.remove("vf-chatbot-router__item--selected");
      } else if (this.selectedItems.size < this.maxMultiSelect) {
        this.selectedItems.add(itemId);
        item.classList.add("vf-chatbot-router__item--selected");
      }
    } else {
      // Single select mode
      this.listItems.forEach(listItem => {
        listItem.classList.remove("vf-chatbot-router__item--selected");
      });
      this.selectedItems.clear();
      this.selectedItems.add(itemId);
      item.classList.add("vf-chatbot-router__item--selected");

      // Update title text immediately
      const title = item.querySelector(".vf-chatbot-router__item-title").textContent;
      const titleText = this.el.querySelector(".vf-chatbot-router__title-text");
      if (titleText) {
        titleText.textContent = title;
      }

      this.closeDropdown();
    }

    this.updateSelectionDisplay();
    this.updateClearButton();

    // Dispatch custom event
    this.el.dispatchEvent(
      new CustomEvent("routeselection", {
        detail: {
          selectedItems: Array.from(this.selectedItems),
          isMultiselect: this.isMultiselect
        }
      })
    );
  }

  clearAllSelections() {
    this.selectedItems.clear();
    this.listItems.forEach(item => {
      item.classList.remove("vf-chatbot-router__item--selected");
    });
    this.updateSelectionDisplay();
    this.updateClearButton();
  }

  updateSelectionDisplay() {
    const titleText = this.el.querySelector(".vf-chatbot-router__title-text");
    if (!titleText) return;

    if (this.selectedItems.size === 0) {
      titleText.textContent = "Select services";
      return;
    }

    if (!this.isMultiselect) {
      const selectedId = Array.from(this.selectedItems)[0];
      const selectedItem = this.el.querySelector(
        `[data-route-id="${selectedId}"]`
      );
      if (selectedItem) {
        const title = selectedItem.querySelector(
          ".vf-chatbot-router__item-title"
        ).textContent;
        titleText.textContent = title;
      }
    } else {
      titleText.textContent = `${this.selectedItems.size} selected`;
    }
  }

  updateClearButton() {
    if (this.clearEl) {
      if (this.selectedItems.size > 0) {
        this.clearEl.classList.add("vf-chatbot-router__clear--active");
      } else {
        this.clearEl.classList.remove("vf-chatbot-router__clear--active");
      }
    }
  }
}

// Function to initialize the component
export function initVFChatbotRouter(element) {
  return new VFChatbotRouter(element);
}
