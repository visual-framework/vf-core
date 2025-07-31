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

    this.showAllServices =
      this.el.getAttribute("data-show-all-services") === "true";
    this.showAllServicesSelected =
      this.el.getAttribute("data-show-all-services-selected") === "true";

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
    this.allServicesItem = this.el.querySelector("[data-route-id='all']");

    // Initialize dropdown as closed
    if (this.dropdownEl) {
      this.dropdownEl.style.display = "none";
    }

    // Bind events
    this.bindEvents();

    // Check if any items are pre-selected (not including "All services")
    let hasPreSelectedItems = false;
    this.listItems.forEach(item => {
      const itemId = item.getAttribute("data-route-id");
      if (item.classList.contains("vf-chatbot-selector__item--selected")) {
        if (itemId !== "all") {
          // Only count non-"All services" items as pre-selected
          this.selectedItems.add(itemId);
          hasPreSelectedItems = true;
        }
      }
    });

    // If no items are pre-selected, default to "All services"
    if (!hasPreSelectedItems && this.showAllServices) {
      this.selectAllServices();
    } else if (!hasPreSelectedItems && !this.showAllServices) {
      // If no "All services" option and no pre-selection, select first item for single-select
      if (!this.isMultiselect && this.listItems.length > 0) {
        const firstItem = this.listItems[0];
        const firstItemId = firstItem.getAttribute("data-route-id");
        this.selectedItems.add(firstItemId);
        firstItem.classList.add("vf-chatbot-selector__item--selected");
      }
    } else if (hasPreSelectedItems) {
      // If items are pre-selected, ensure "All services" is not selected
      this.allServicesSelected = false;
      if (this.allServicesItem) {
        this.allServicesItem.classList.remove(
          "vf-chatbot-selector__item--selected"
        );
      }
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

    // Check if any routes have pre-selected state
    const hasPreSelectedRoutes = this.routes.some(route => route.selected);

    // Add "All services" option if enabled
    if (this.showAllServices) {
      const allServicesItem = document.createElement("li");
      allServicesItem.className = "vf-chatbot-selector__item";
      allServicesItem.setAttribute("data-vf-js-selector-item", "");
      allServicesItem.setAttribute("data-route-id", "all");
      allServicesItem.setAttribute("data-title", "All services");
      allServicesItem.setAttribute("role", "button");
      allServicesItem.setAttribute("tabindex", "0");
      allServicesItem.setAttribute("aria-label", "Select all services");

      if (!hasPreSelectedRoutes && this.showAllServicesSelected) {
        allServicesItem.className += " vf-chatbot-selector__item--selected";
        allServicesItem.setAttribute("data-selected", "true");
      }

      allServicesItem.innerHTML = `<div class="vf-chatbot-selector__item-content">
          <div class="vf-chatbot-selector__item-title">All services</div>
          <div class="vf-chatbot-selector__item-description">This would select all services</div>
        </div>
        <span class="vf-chatbot-selector__tick">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.8478 19.4278C6.33162 19.4208 5.82376 19.2967 5.36257 19.0647C4.90137 18.8328 4.49889 18.4991 4.18551 18.0889L0.426086 13.8152C0.149005 13.4712 0.0154068 13.0335 0.0531476 12.5934C0.0908883 12.1533 0.297055 11.7447 0.62866 11.4529C0.960265 11.1611 1.39171 11.0085 1.83304 11.0271C2.27438 11.0456 2.69152 11.2338 2.99751 11.5523L6.52037 15.562C6.55956 15.6066 6.60755 15.6425 6.66133 15.6675C6.71511 15.6925 6.77349 15.7061 6.83279 15.7074C6.89209 15.7087 6.95101 15.6976 7.00582 15.675C7.06063 15.6523 7.11015 15.6185 7.15123 15.5758L21.0369 1.10375C21.1921 0.940538 21.3778 0.809473 21.5836 0.71804C21.7893 0.626608 22.0111 0.576599 22.2362 0.570868C22.4613 0.565137 22.6853 0.603797 22.8954 0.684641C23.1056 0.765484 23.2977 0.886928 23.4609 1.04204C23.6242 1.19715 23.7552 1.38289 23.8467 1.58865C23.9381 1.79441 23.9881 2.01617 23.9938 2.24126C23.9996 2.46635 23.9609 2.69036 23.8801 2.90051C23.7992 3.11066 23.6778 3.30282 23.5227 3.46604L9.46209 18.2655C9.1402 18.6414 8.7385 18.9409 8.28624 19.1419C7.83398 19.343 7.34257 19.4406 6.8478 19.4278Z" fill="#54585A"/>
          </svg>
        </span>`;
      listEl.appendChild(allServicesItem);
    }

    // Add route items
    this.routes.forEach(route => {
      const item = document.createElement("li");
      item.className = "vf-chatbot-selector__item";

      if (route.selected) {
        item.className += " vf-chatbot-selector__item--selected";
      }

      item.setAttribute("data-vf-js-selector-item", "");
      item.setAttribute("data-route-id", route.id);
      item.setAttribute("data-title", route.title);
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      item.setAttribute("aria-label", `Select ${route.title}`);

      item.innerHTML = `
        <div class="vf-chatbot-selector__item-content">
          <div class="vf-chatbot-selector__item-title">${route.title}</div>
  ${
  route.description
    ? `<div class="vf-chatbot-selector__item-description">${route.description}</div>`
    : ""
}
        </div>
        <span class="vf-chatbot-selector__tick">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.8478 19.4278C6.33162 19.4208 5.82376 19.2967 5.36257 19.0647C4.90137 18.8328 4.49889 18.4991 4.18551 18.0889L0.426086 13.8152C0.149005 13.4712 0.0154068 13.0335 0.0531476 12.5934C0.0908883 12.1533 0.297055 11.7447 0.62866 11.4529C0.960265 11.1611 1.39171 11.0085 1.83304 11.0271C2.27438 11.0456 2.69152 11.2338 2.99751 11.5523L6.52037 15.562C6.55956 15.6066 6.60755 15.6425 6.66133 15.6675C6.71511 15.6925 6.77349 15.7061 6.83279 15.7074C6.89209 15.7087 6.95101 15.6976 7.00582 15.675C7.06063 15.6523 7.11015 15.6185 7.15123 15.5758L21.0369 1.10375C21.1921 0.940538 21.3778 0.809473 21.5836 0.71804C21.7893 0.626608 22.0111 0.576599 22.2362 0.570868C22.4613 0.565137 22.6853 0.603797 22.8954 0.684641C23.1056 0.765484 23.2977 0.886928 23.4609 1.04204C23.6242 1.19715 23.7552 1.38289 23.8467 1.58865C23.9381 1.79441 23.9881 2.01617 23.9938 2.24126C23.9996 2.46635 23.9609 2.69036 23.8801 2.90051C23.7992 3.11066 23.6778 3.30282 23.5227 3.46604L9.46209 18.2655C9.1402 18.6414 8.7385 18.9409 8.28624 19.1419C7.83398 19.343 7.34257 19.4406 6.8478 19.4278Z" fill="#54585A"/>
          </svg>
        </span>`;

      listEl.appendChild(item);
    });

    // Update references and re-bind events ONCE
    this.listItems = this.el.querySelectorAll("[data-vf-js-selector-item]");
    this.allServicesItem = this.el.querySelector("[data-route-id='all']");

    // Only bind list item events (don't call full bindEvents or init)
    this.bindListItemEvents();

    // Handle initial selections for loaded routes
    this.handleInitialSelections();

    // Dispatch event to signal routes are loaded and UI is ready
    this.el.dispatchEvent(new CustomEvent("routesloaded"));
  }

  // New method to bind only list item events
  bindListItemEvents() {
    this.listItems.forEach(item => {
      // Remove any existing listeners first
      item.removeEventListener("click", this.itemClickHandler);
      item.removeEventListener("keydown", this.itemKeydownHandler);

      // Create bound handlers
      this.itemClickHandler = e => {
        e.stopPropagation();
        this.handleItemSelection(item);
      };

      this.itemKeydownHandler = e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          this.handleItemSelection(item);
        }
      };

      // Add new listeners
      item.addEventListener("click", this.itemClickHandler);
      item.addEventListener("keydown", this.itemKeydownHandler);
    });
  }

  // New method to handle initial selections without re-binding events
  handleInitialSelections() {
    // Don't reset the selectedItems Set here - it may already have pre-selected items
    let hasPreSelectedItems = this.selectedItems.size > 0; // Check existing selectedItems first

    // Also check DOM for any additional pre-selected items
    this.listItems.forEach(item => {
      const itemId = item.getAttribute("data-route-id");
      if (item.classList.contains("vf-chatbot-selector__item--selected")) {
        if (itemId !== "all") {
          this.selectedItems.add(itemId);
          hasPreSelectedItems = true;
        }
      }
    });

    // Set default selections only if no items are pre-selected
    if (
      !hasPreSelectedItems &&
      this.showAllServices &&
      this.showAllServicesSelected
    ) {
      this.selectAllServices();
    } else if (hasPreSelectedItems) {
      // If items are pre-selected, ensure "All services" is not selected
      this.allServicesSelected = false;
      if (this.allServicesItem) {
        this.allServicesItem.classList.remove(
          "vf-chatbot-selector__item--selected"
        );
      }
    }

    // Update display
    this.updateSelectionDisplay();
    this.updateClearButton();
  }

  // Update bindEvents to store handlers for cleanup
  bindEvents() {
    // Toggle dropdown
    if (this.titleEl) {
      this.titleEl.removeEventListener("click", this.toggleDropdownHandler);
      this.toggleDropdownHandler = e => {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.toggleDropdown();
      };
      this.titleEl.addEventListener("click", this.toggleDropdownHandler);
    }

    // Search functionality
    if (this.searchEl) {
      this.searchEl.removeEventListener("input", this.searchHandler);
      this.searchHandler = e => {
        e.stopPropagation();
        this.handleSearch(e.target.value);
      };
      this.searchEl.addEventListener("input", this.searchHandler);
    }

    // Clear all selections
    if (this.clearEl) {
      this.clearEl.removeEventListener("click", this.clearHandler);
      this.clearHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        this.clearAllSelections();
      };
      this.clearEl.addEventListener("click", this.clearHandler);
    }

    // Bind list items
    this.bindListItemEvents();

    // Document click handler (only add once)
    if (!this.documentClickHandler) {
      this.documentClickHandler = e => {
        if (!this.el.contains(e.target)) {
          this.closeDropdown();
        }
      };
      document.addEventListener("click", this.documentClickHandler);
    }

    // Dropdown click handler
    if (this.dropdownEl) {
      this.dropdownEl.removeEventListener("click", this.dropdownClickHandler);
      this.dropdownClickHandler = e => e.stopPropagation();
      this.dropdownEl.addEventListener("click", this.dropdownClickHandler);
    }
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
    if (this.dropdownEl) {
      this.dropdownEl.style.display = "none";
    }
    if (this.titleEl) {
      this.titleEl.classList.remove("vf-chatbot-selector__title--expanded");
    }
  }

  handleSearch(query) {
    const searchQuery = query.toLowerCase();
    this.listItems.forEach(item => {
      const title = item
        .querySelector(".vf-chatbot-selector__item-title")
        .textContent.toLowerCase();

      const descriptionEl = item.querySelector(
        ".vf-chatbot-selector__item-description"
      );
      const description = descriptionEl
        ? descriptionEl.textContent.toLowerCase()
        : "";

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

  handleItemClick(item) {
    const itemId = item.getAttribute("data-route-id");

    if (itemId === "all") {
      // Handle "All services" selection
      this.selectAllServices();
    } else {
      // Handle individual item selection
      if (this.isMultiselect) {
        // Multi-select logic
        if (this.selectedItems.has(itemId)) {
          // Deselect item
          this.selectedItems.delete(itemId);
          item.classList.remove("vf-chatbot-selector__item--selected");
        } else {
          // Select item and ensure we don't exceed max selection
          if (this.selectedItems.size < this.maxMultiSelect) {
            this.selectedItems.add(itemId);
            item.classList.add("vf-chatbot-selector__item--selected");
          }
        }

        // If we deselected all individual items, select "All services"
        if (this.selectedItems.size === 0 && this.showAllServices) {
          this.selectAllServices();
        } else {
          // Deselect "All services" when individual items are selected
          this.allServicesSelected = false;
          if (this.allServicesItem) {
            this.allServicesItem.classList.remove(
              "vf-chatbot-selector__item--selected"
            );
          }
        }
      } else {
        // Single-select logic
        // Clear all previous selections
        this.selectedItems.clear();
        this.listItems.forEach(li => {
          li.classList.remove("vf-chatbot-selector__item--selected");
        });

        // Select the clicked item
        this.selectedItems.add(itemId);
        item.classList.add("vf-chatbot-selector__item--selected");

        // Deselect "All services"
        this.allServicesSelected = false;

        // Close dropdown for single-select
        this.closeDropdown();
      }
    }

    // Update display and clear button
    this.updateSelectionDisplay();
    this.updateClearButton();
  }

  setSelection(selectedItems) {
    // Deselect all first
    this.selectedItems.clear();
    this.listItems.forEach(item => {
      item.classList.remove("vf-chatbot-selector__item--selected");
    });

    // If "all" is selected
    if (selectedItems.includes("all")) {
      this.selectAllServices();
    } else {
      selectedItems.forEach(id => {
        const item = this.el.querySelector(`[data-route-id="${id}"]`);
        if (item) {
          item.classList.add("vf-chatbot-selector__item--selected");
          this.selectedItems.add(id);
        }
      });
      this.allServicesSelected = false;
      if (this.allServicesItem) {
        this.allServicesItem.classList.remove("vf-chatbot-selector__item--selected");
      }
    }
    this.updateSelectionDisplay();
    this.updateClearButton();
    this.dispatchSelectionEvent();
  }

  selectAllServices() {
    if (!this.showAllServices) return;

    // Clear individual selections
    this.selectedItems.clear();

    // Remove selected class from all individual items
    this.listItems.forEach(item => {
      const itemId = item.getAttribute("data-route-id");
      if (itemId !== "all") {
        item.classList.remove("vf-chatbot-selector__item--selected");
      }
    });

    // Select "All services"
    this.allServicesSelected = true;
    if (this.allServicesItem) {
      this.allServicesItem.classList.add("vf-chatbot-selector__item--selected");
    }
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
      titleText.textContent = `${this.selectedItems.size} service${
        this.selectedItems.size > 1 ? "s" : ""
      } selected`;
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
