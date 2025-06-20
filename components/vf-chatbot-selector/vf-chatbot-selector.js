export class VFChatbotSelector {
  constructor(element) {
    if (!element) {
      console.error("Selector element is required");
      return;
    }

    this.el = element;
    this.isMultiselect = this.el.getAttribute("data-multiselect") === "true";
    this.maxMultiSelect = parseInt(
      this.el.getAttribute("data-max-multiselect") || "3",
      10
    );
    this.selectedItems = new Set();
    // this.allServicesSelected = true; // Track "All services" state

    this.showAllServices = this.el.getAttribute("data-show-all-services") === "true";
    this.showAllServicesSelected = this.el.getAttribute("data-show-all-services-selected") === "true";

    this.init();
    this.loadRoutes();
  }

  async loadRoutes() {
    try {
      const routesPath = this.el.getAttribute("data-routes-path");
      if (!routesPath) return;

      const response = await fetch(routesPath);
      const data = await response.json();

      // Update routes and refresh UI
      this.routes = data.routes;
      this.updateRoutesList();
    } catch (error) {
      console.error("Failed to load routes:", error);
    }
  }

  init() {
    // Ensure element exists before querying
    if (!this.el) return;

    // Get DOM elements
    this.titleEl = this.el.querySelector("[data-vf-js-selector-toggle]");
    this.dropdownEl = this.el.querySelector("[data-vf-js-selector-dropdown]");
    this.searchEl = this.el.querySelector("[data-vf-js-selector-search]");
    this.clearEl = this.el.querySelector("[data-vf-js-selector-clear]");
    this.listItems = this.el.querySelectorAll("[data-vf-js-selector-item]");
    this.allServicesItem = this.el.querySelector('[data-route-id="all"]'); // "All services" item

    // Initialize dropdown as closed
    if (this.dropdownEl) {
      this.dropdownEl.style.display = "none";
    }

    // Bind events
    this.bindEvents();

    // Initialize selected items and update display
    let initSelection = false;
    this.listItems.forEach(item => {
      if (item.classList.contains("vf-chatbot-selector__item--selected")) {
        this.selectedItems.add(item.getAttribute("data-route-id"));
        initSelection = true;
      }
    });

    // Initialize with "All services" if no selection
    const hasSelectedItems = Array.from(this.listItems).some(
      item =>
        item !== this.allServicesItem &&
        item.classList.contains("vf-chatbot-selector__item--selected")
    );

    if (!hasSelectedItems) {
      this.selectAllServices();
    }

    // Update display after initial selection
    this.updateSelectionDisplay();
    this.updateClearButton();
  }

  updateRoutesList() {
    const listEl = this.el.querySelector("[data-vf-js-chatbot-selector-list]");
    if (!listEl || !this.routes) return;

    // Clear existing list
    listEl.innerHTML = "";
    // Add "All services" option if enabled
    if (this.showAllServices) {
      const allServicesItem = document.createElement("li");
      allServicesItem.className = "vf-chatbot-selector__item";
      allServicesItem.setAttribute("data-vf-js-selector-item", "");
      allServicesItem.setAttribute("data-route-id", "all");
      allServicesItem.setAttribute("data-title", "All services");
      if (this.showAllServicesSelected) {
        allServicesItem.className += " vf-chatbot-selector__item--selected";
        allServicesItem.setAttribute("data-selected", "true");
      }
      allServicesItem.innerHTML = `<div class="vf-chatbot-selector__item-content">
          <div class="vf-chatbot-selector__item-title">All services</div>
          <div class="vf-chatbot-selector__item-description">This would select all services</div>
        </div>
        <span class="vf-chatbot-selector__tick">&#9143;</span>`;
      listEl.appendChild(allServicesItem);
    }
    // Add route items
    this.routes.forEach(route => {
      const item = document.createElement("li");
      item.className = "vf-chatbot-selector__item";
      if (!this.showAllServices && route.selected) {
        item.className += " vf-chatbot-selector__item--selected";
      }
      item.setAttribute("data-vf-js-selector-item", "");
      item.setAttribute("data-route-id", route.id);
      item.setAttribute("data-title", route.title);

      item.innerHTML = `
        <div class="vf-chatbot-selector__item-content">
          <div class="vf-chatbot-selector__item-title">${route.title}</div>
          ${
            route.description
              ? `<div class="vf-chatbot-selector__item-description">${route.description}</div>`
              : ""
          }
        </div>
        <span class="vf-chatbot-selector__tick">&#9143;</span>`;

      listEl.appendChild(item);
    });

    // Re-bind events after updating list
    this.listItems = this.el.querySelectorAll("[data-vf-js-selector-item]");
    this.allServicesItem = this.el.querySelector('[data-route-id="all"]');
    this.bindEvents();
  }

  bindEvents() {
    // Toggle dropdown
    if (this.titleEl) {
      // Remove any existing listeners first
      this.titleEl.removeEventListener("click", this.toggleDropdownHandler);

      // Create a bound handler that we can reference later
      this.toggleDropdownHandler = e => {
        e.preventDefault(); // Prevent default behavior
        e.stopImmediatePropagation(); // Stop multiple event triggers
        this.toggleDropdown();
      };

      // Add the new listener
      this.titleEl.addEventListener("click", this.toggleDropdownHandler);
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
    this.titleEl.classList.add("vf-chatbot-selector__title--expanded");
  }

  closeDropdown() {
    this.dropdownEl.style.display = "none";
    this.titleEl.classList.remove("vf-chatbot-selector__title--expanded");
  }

  handleSearch(query) {
    const searchQuery = query.toLowerCase();
    this.listItems.forEach(item => {
      const title = item
        .querySelector(".vf-chatbot-selector__item-title")
        .textContent.toLowerCase();
      const description = item
        .querySelector(".vf-chatbot-selector__item-description")
        .textContent.toLowerCase();
      const matches =
        title.includes(searchQuery) || description.includes(searchQuery);
      item.style.display = matches ? "flex" : "none";
    });
  }

  handleItemSelection(item) {
    const itemId = item.getAttribute("data-route-id");
    const isAllServices = itemId === "all";

    if (this.isMultiselect) {
      if (isAllServices) {
        // If "All services" is clicked, deselect everything else
        this.selectAllServices();
      } else {
        // If other service is clicked
        if (this.selectedItems.has(itemId)) {
          // Deselect the item
          this.selectedItems.delete(itemId);
          item.classList.remove("vf-chatbot-selector__item--selected");

          // If nothing else is selected, select "All services"
          if (this.selectedItems.size === 0) {
            this.selectAllServices();
          }
        } else {
          // Select the item and deselect "All services"
          if (this.allServicesSelected) {
            this.allServicesItem?.classList.remove(
              "vf-chatbot-selector__item--selected"
            );
            this.allServicesSelected = false;
          }
          if (this.selectedItems.size < this.maxMultiSelect) {
            this.selectedItems.add(itemId);
            item.classList.add("vf-chatbot-selector__item--selected");
          }
        }
      }
    } else {
      // Single select mode
      this.listItems.forEach(listItem => {
        listItem.classList.remove("vf-chatbot-selector__item--selected");
      });
      this.selectedItems.clear();
      this.selectedItems.add(itemId);
      item.classList.add("vf-chatbot-selector__item--selected");

      // Update title text immediately
      const title = item.querySelector(".vf-chatbot-selector__item-title")
        .textContent;
      const titleText = this.el.querySelector(
        ".vf-chatbot-selector__title-text"
      );
      if (titleText) {
        titleText.textContent = title;
      }

      this.closeDropdown();
    }

    this.updateSelectionDisplay();
    this.updateClearButton();
    this.dispatchSelectionEvent();
  }

  selectAllServices() {
    // Clear all selections
    this.selectedItems.clear();
    this.listItems.forEach(item => {
      item.classList.remove("vf-chatbot-selector__item--selected");
    });

    // Select "All services"
    this.allServicesSelected = true;
    this.allServicesItem?.classList.add("vf-chatbot-selector__item--selected");
  }

  clearAllSelections() {
    // Clear everything and select "All services"
    this.selectAllServices();
    this.updateSelectionDisplay();
    this.updateClearButton();
    this.dispatchSelectionEvent();
  }

  updateSelectionDisplay() {
    const titleText = this.el.querySelector(".vf-chatbot-selector__title-text");
    if (!titleText) return;

    if (this.allServicesSelected) {
      titleText.textContent = "All services";
    } else if (this.selectedItems.size === 0) {
      titleText.textContent = "Select services";
    } else if (!this.isMultiselect) {
      const selectedId = Array.from(this.selectedItems)[0];
      const selectedItem = this.el.querySelector(
        `[data-route-id="${selectedId}"]`
      );
      if (selectedItem) {
        const title = selectedItem.querySelector(
          ".vf-chatbot-selector__item-title"
        ).textContent;
        titleText.textContent = title;
      }
    } else {
      titleText.textContent = `${this.selectedItems.size} selected`;
    }
  }

  dispatchSelectionEvent() {
    this.el.dispatchEvent(
      new CustomEvent("routeselection", {
        detail: {
          selectedItems: this.allServicesSelected
            ? ["all"]
            : Array.from(this.selectedItems),
          isMultiselect: this.isMultiselect,
          isAllServices: this.allServicesSelected
        }
      })
    );
  }

  updateClearButton() {
    if (this.clearEl) {
      if (this.selectedItems.size > 0) {
        this.clearEl.classList.add("vf-chatbot-selector__clear--active");
      } else {
        this.clearEl.classList.remove("vf-chatbot-selector__clear--active");
      }
    }
  }
}

// Function to initialize the component
export function initVFChatbotSelector(element) {
  return new VFChatbotSelector(element);
}
