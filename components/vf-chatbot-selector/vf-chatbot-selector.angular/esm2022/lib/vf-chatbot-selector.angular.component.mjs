import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
export class VfChatbotSelectorAngularComponent {
    constructor(elRef, http) {
        this.elRef = elRef;
        this.http = http;
        this.chatbotRoutes = {};
        this.context = {};
        this.config = {};
        this.search = '';
        this.selected = [];
        this.showSearchBox = true;
        this.maxSelect = 1;
    }
    ngOnInit() {
        const defaults = {
            routes: [],
            multiSelect: false,
            maxMultiSelect: 1,
            showSearch: true,
            showSearchThreshold: 5,
            showAllServices: false,
            showAllServicesSelected: false,
            selector_logo_url: '../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg',
            selector_logo_title: 'AI Assistant',
            title: 'Select option',
            placeholder: 'Search...',
        };
        // Prefer any explicit `context` input; otherwise fall back to `chatbotRoutes`.
        const source = (this.context && Object.keys(this.context).length > 0)
            ? this.context
            : (this.chatbotRoutes || {});
        // Merge defaults into the chosen source so template bindings exist and are objects
        this.context = { ...defaults, ...source };
        this.config = this.context; // keep `config` for backwards compatibility
        this.maxSelect = this.config.maxMultiSelect || 3;
        this.showSearchBox =
            this.context.chatbotRoutes.showSearch &&
                (this.context.chatbotRoutes.routes || []).length > this.context.chatbotRoutes.showSearchThreshold;
        this.loadRoutesFromApi();
    }
    clearAll(event) {
        event.preventDefault();
        this.selected = [];
    }
    toggleSelect(routeId) {
        if (this.context.chatbotRoutes.multiSelect) {
            if (this.selected.includes(routeId)) {
                this.selected = this.selected.filter(id => id !== routeId);
            }
            else if (this.selected.length < this.maxSelect) {
                this.selected.push(routeId);
            }
        }
        else {
            this.selected = [routeId];
        }
    }
    loadRoutesFromApi() {
        const url = this.context.chatbotRoutes.routes;
        this.http.get(url).subscribe(config => {
            this.context.chatbotRoutes.array_routes = config['routes'];
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSelectorAngularComponent, deps: [{ token: i0.ElementRef }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotSelectorAngularComponent, selector: "vf-chatbot-selector", inputs: { chatbotRoutes: "chatbotRoutes", context: "context" }, ngImport: i0, template: `
    <div
      class="vf-chatbot-selector"
      data-vf-js-chatbot-selector
      [attr.data-routes-path]="context.chatbotRoutes.routes"
      [attr.data-multiselect]="context.chatbotRoutes.multiSelect ? 'true' : 'false'"
      [attr.data-max-select]="context.chatbotRoutes.maxMultiSelect.toString()"
      [attr.data-show-all-services]="context.chatbotRoutes.showAllServices ? 'true' : 'false'"
      [attr.data-show-all-services-selected]="context.chatbotRoutes.showAllServicesSelected ? 'true' : 'false'"
    >
      <button
        class="vf-chatbot-selector__title"
        data-vf-js-selector-toggle
        aria-expanded="false"
        aria-haspopup="listbox"
      >
        <img [src]="context.selector_logo_url" [alt]="context.chatbotRoutes.selector_logo_title" />
        <div class="vf-chatbot-selector__title-content vf-u-margin__left--200">
          <span class="vf-chatbot-selector__main-text">
            {{ context.chatbotRoutes.selector_logo_title }}
          </span>
          <span class="vf-chatbot-selector__title-text">
            {{
              selected.length === 0 ? context.chatbotRoutes.title : context.chatbotRoutes.routes
            }}
          </span>
        </div>
        <span class="vf-chatbot-selector__chevron">
          <svg
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3647_8230)">
              <path
                d="M15.999 19.0975C15.7378 19.098 15.479 19.0468 15.2377 18.9468C14.9963 18.8469 14.7771 18.7001 14.5926 18.5151L8.32863 11.9279C8.21951 11.8137 8.13399 11.6791 8.07698 11.5318C8.01998 11.3845 7.99261 11.2274 7.99645 11.0695C8.00028 10.9116 8.03525 10.756 8.09934 10.6117C8.16342 10.4673 8.25537 10.337 8.36992 10.2283C8.48446 10.1195 8.61934 10.0344 8.76683 9.97791C8.91432 9.92139 9.07152 9.89454 9.2294 9.89889C9.38729 9.90325 9.54277 9.93872 9.68692 10.0033C9.83107 10.0678 9.96106 10.1602 10.0694 10.2751L15.7094 16.2143C15.7467 16.2537 15.7916 16.2851 15.8414 16.3066C15.8912 16.3281 15.9448 16.3391 15.999 16.3391C16.0533 16.3391 16.1069 16.3281 16.1567 16.3066C16.2065 16.2851 16.2514 16.2537 16.2886 16.2143L21.9286 10.2751C22.037 10.1602 22.167 10.0678 22.3112 10.0033C22.4553 9.93872 22.6108 9.90325 22.7687 9.89889C22.9266 9.89454 23.0838 9.92139 23.2312 9.97791C23.3787 10.0344 23.5136 10.1195 23.6282 10.2283C23.7427 10.337 23.8347 10.4673 23.8987 10.6117C23.9628 10.756 23.9978 10.9116 24.0016 11.0695C24.0055 11.2274 23.9781 11.3845 23.9211 11.5318C23.8641 11.6791 23.7786 11.8137 23.6694 11.9279L17.439 18.4991C17.2503 18.6888 17.0259 18.8394 16.7788 18.9421C16.5316 19.0448 16.2667 19.0976 15.999 19.0975Z"
                fill="#707372"
              />
            </g>
            <defs>
              <clipPath id="clip0_3647_8230">
                <rect width="16" height="16" fill="white" transform="translate(8 6.5)" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>

      <div class="vf-chatbot-selector__dropdown" data-vf-js-selector-dropdown>
        <div class="vf-chatbot-selector__search" *ngIf="showSearchBox">
          <label
            class="vf-u-sr-only"
            id="vf-chatbot-selector-search-label"
            for="vf-chatbot-selector-search"
          >
            Type to search
          </label>
          <input
            type="text"
            id="vf-chatbot-selector-search"
            aria-labelledby="vf-chatbot-selector-search-label"
            [placeholder]="context.chatbotRoutes.placeholder"
            [(ngModel)]="search"
            data-vf-js-selector-search
          />
        </div>

        <div class="vf-chatbot-selector__header" *ngIf="context.chatbotRoutes.multiSelect">
          <span>
            Select up to {{context.chatbotRoutes.maxMultiSelect.toString()}} services
          </span>
          <a
            href="#"
            class="vf-chatbot-selector__clear"
            role="button"
            data-vf-js-selector-clear
          >
            Clear all
          </a>
        </div>

        <ul class="vf-chatbot-selector__list" data-vf-js-chatbot-selector-list>
          <li
            *ngFor="let route of context.chatbotRoutes.array_routes" id = {{route.id}}
            (click)="toggleSelect(route.id)"
            [class.selected]="selected.includes(route.id)"
          >
            {{ route.title }}
          </li>
        </ul>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSelectorAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vf-chatbot-selector', template: `
    <div
      class="vf-chatbot-selector"
      data-vf-js-chatbot-selector
      [attr.data-routes-path]="context.chatbotRoutes.routes"
      [attr.data-multiselect]="context.chatbotRoutes.multiSelect ? 'true' : 'false'"
      [attr.data-max-select]="context.chatbotRoutes.maxMultiSelect.toString()"
      [attr.data-show-all-services]="context.chatbotRoutes.showAllServices ? 'true' : 'false'"
      [attr.data-show-all-services-selected]="context.chatbotRoutes.showAllServicesSelected ? 'true' : 'false'"
    >
      <button
        class="vf-chatbot-selector__title"
        data-vf-js-selector-toggle
        aria-expanded="false"
        aria-haspopup="listbox"
      >
        <img [src]="context.selector_logo_url" [alt]="context.chatbotRoutes.selector_logo_title" />
        <div class="vf-chatbot-selector__title-content vf-u-margin__left--200">
          <span class="vf-chatbot-selector__main-text">
            {{ context.chatbotRoutes.selector_logo_title }}
          </span>
          <span class="vf-chatbot-selector__title-text">
            {{
              selected.length === 0 ? context.chatbotRoutes.title : context.chatbotRoutes.routes
            }}
          </span>
        </div>
        <span class="vf-chatbot-selector__chevron">
          <svg
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3647_8230)">
              <path
                d="M15.999 19.0975C15.7378 19.098 15.479 19.0468 15.2377 18.9468C14.9963 18.8469 14.7771 18.7001 14.5926 18.5151L8.32863 11.9279C8.21951 11.8137 8.13399 11.6791 8.07698 11.5318C8.01998 11.3845 7.99261 11.2274 7.99645 11.0695C8.00028 10.9116 8.03525 10.756 8.09934 10.6117C8.16342 10.4673 8.25537 10.337 8.36992 10.2283C8.48446 10.1195 8.61934 10.0344 8.76683 9.97791C8.91432 9.92139 9.07152 9.89454 9.2294 9.89889C9.38729 9.90325 9.54277 9.93872 9.68692 10.0033C9.83107 10.0678 9.96106 10.1602 10.0694 10.2751L15.7094 16.2143C15.7467 16.2537 15.7916 16.2851 15.8414 16.3066C15.8912 16.3281 15.9448 16.3391 15.999 16.3391C16.0533 16.3391 16.1069 16.3281 16.1567 16.3066C16.2065 16.2851 16.2514 16.2537 16.2886 16.2143L21.9286 10.2751C22.037 10.1602 22.167 10.0678 22.3112 10.0033C22.4553 9.93872 22.6108 9.90325 22.7687 9.89889C22.9266 9.89454 23.0838 9.92139 23.2312 9.97791C23.3787 10.0344 23.5136 10.1195 23.6282 10.2283C23.7427 10.337 23.8347 10.4673 23.8987 10.6117C23.9628 10.756 23.9978 10.9116 24.0016 11.0695C24.0055 11.2274 23.9781 11.3845 23.9211 11.5318C23.8641 11.6791 23.7786 11.8137 23.6694 11.9279L17.439 18.4991C17.2503 18.6888 17.0259 18.8394 16.7788 18.9421C16.5316 19.0448 16.2667 19.0976 15.999 19.0975Z"
                fill="#707372"
              />
            </g>
            <defs>
              <clipPath id="clip0_3647_8230">
                <rect width="16" height="16" fill="white" transform="translate(8 6.5)" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>

      <div class="vf-chatbot-selector__dropdown" data-vf-js-selector-dropdown>
        <div class="vf-chatbot-selector__search" *ngIf="showSearchBox">
          <label
            class="vf-u-sr-only"
            id="vf-chatbot-selector-search-label"
            for="vf-chatbot-selector-search"
          >
            Type to search
          </label>
          <input
            type="text"
            id="vf-chatbot-selector-search"
            aria-labelledby="vf-chatbot-selector-search-label"
            [placeholder]="context.chatbotRoutes.placeholder"
            [(ngModel)]="search"
            data-vf-js-selector-search
          />
        </div>

        <div class="vf-chatbot-selector__header" *ngIf="context.chatbotRoutes.multiSelect">
          <span>
            Select up to {{context.chatbotRoutes.maxMultiSelect.toString()}} services
          </span>
          <a
            href="#"
            class="vf-chatbot-selector__clear"
            role="button"
            data-vf-js-selector-clear
          >
            Clear all
          </a>
        </div>

        <ul class="vf-chatbot-selector__list" data-vf-js-chatbot-selector-list>
          <li
            *ngFor="let route of context.chatbotRoutes.array_routes" id = {{route.id}}
            (click)="toggleSelect(route.id)"
            [class.selected]="selected.includes(route.id)"
          >
            {{ route.title }}
          </li>
        </ul>
      </div>
    </div>
  ` }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.HttpClient }], propDecorators: { chatbotRoutes: [{
                type: Input
            }], context: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1zZWxlY3Rvci5hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZmLWNoYXRib3Qtc2VsZWN0b3IuYW5ndWxhci9zcmMvbGliL3ZmLWNoYXRib3Qtc2VsZWN0b3IuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBMkdyRSxNQUFNLE9BQU8saUNBQWlDO0lBUzVDLFlBQW9CLEtBQWlCLEVBQVUsSUFBZ0I7UUFBM0MsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFSdEQsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFFb0QsQ0FBQztJQUVuRSxRQUFRO1FBQ04sTUFBTSxRQUFRLEdBQUc7WUFDZixNQUFNLEVBQUUsRUFBRTtZQUNWLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLG1CQUFtQixFQUFFLENBQUM7WUFDdEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsdUJBQXVCLEVBQUUsS0FBSztZQUM5QixpQkFBaUIsRUFBRSxzRUFBc0U7WUFDekYsbUJBQW1CLEVBQUUsY0FBYztZQUNuQyxLQUFLLEVBQUUsZUFBZTtZQUN0QixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDO1FBRUYsK0VBQStFO1FBQy9FLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNkLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUM7UUFFL0IsbUZBQW1GO1FBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxHQUFHLFFBQVEsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDRDQUE0QztRQUV4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVO2dCQUNyQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFDcEcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFZO1FBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWU7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLENBQUM7WUFDN0QsQ0FBQztpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBQ0QsaUJBQWlCO1FBQ2pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztJQUdILENBQUM7K0dBakVZLGlDQUFpQzttR0FBakMsaUNBQWlDLDJIQWpHbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4RlQ7OzRGQUdVLGlDQUFpQztrQkFuRzdDLFNBQVM7K0JBQ0UscUJBQXFCLFlBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEZUO3dHQUlRLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbnRlcmZhY2UgQ29uZmlnIHtcbiAgcm91dGVzOiBhbnlbXTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2Zi1jaGF0Ym90LXNlbGVjdG9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInZmLWNoYXRib3Qtc2VsZWN0b3JcIlxuICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LXNlbGVjdG9yXG4gICAgICBbYXR0ci5kYXRhLXJvdXRlcy1wYXRoXT1cImNvbnRleHQuY2hhdGJvdFJvdXRlcy5yb3V0ZXNcIlxuICAgICAgW2F0dHIuZGF0YS1tdWx0aXNlbGVjdF09XCJjb250ZXh0LmNoYXRib3RSb3V0ZXMubXVsdGlTZWxlY3QgPyAndHJ1ZScgOiAnZmFsc2UnXCJcbiAgICAgIFthdHRyLmRhdGEtbWF4LXNlbGVjdF09XCJjb250ZXh0LmNoYXRib3RSb3V0ZXMubWF4TXVsdGlTZWxlY3QudG9TdHJpbmcoKVwiXG4gICAgICBbYXR0ci5kYXRhLXNob3ctYWxsLXNlcnZpY2VzXT1cImNvbnRleHQuY2hhdGJvdFJvdXRlcy5zaG93QWxsU2VydmljZXMgPyAndHJ1ZScgOiAnZmFsc2UnXCJcbiAgICAgIFthdHRyLmRhdGEtc2hvdy1hbGwtc2VydmljZXMtc2VsZWN0ZWRdPVwiY29udGV4dC5jaGF0Ym90Um91dGVzLnNob3dBbGxTZXJ2aWNlc1NlbGVjdGVkID8gJ3RydWUnIDogJ2ZhbHNlJ1wiXG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cInZmLWNoYXRib3Qtc2VsZWN0b3JfX3RpdGxlXCJcbiAgICAgICAgZGF0YS12Zi1qcy1zZWxlY3Rvci10b2dnbGVcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIlxuICAgICAgPlxuICAgICAgICA8aW1nIFtzcmNdPVwiY29udGV4dC5zZWxlY3Rvcl9sb2dvX3VybFwiIFthbHRdPVwiY29udGV4dC5jaGF0Ym90Um91dGVzLnNlbGVjdG9yX2xvZ29fdGl0bGVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1zZWxlY3Rvcl9fdGl0bGUtY29udGVudCB2Zi11LW1hcmdpbl9fbGVmdC0tMjAwXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2Zi1jaGF0Ym90LXNlbGVjdG9yX19tYWluLXRleHRcIj5cbiAgICAgICAgICAgIHt7IGNvbnRleHQuY2hhdGJvdFJvdXRlcy5zZWxlY3Rvcl9sb2dvX3RpdGxlIH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmYtY2hhdGJvdC1zZWxlY3Rvcl9fdGl0bGUtdGV4dFwiPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgc2VsZWN0ZWQubGVuZ3RoID09PSAwID8gY29udGV4dC5jaGF0Ym90Um91dGVzLnRpdGxlIDogY29udGV4dC5jaGF0Ym90Um91dGVzLnJvdXRlc1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInZmLWNoYXRib3Qtc2VsZWN0b3JfX2NoZXZyb25cIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjMyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjMxXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzIgMzFcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGcgY2xpcC1wYXRoPVwidXJsKCNjbGlwMF8zNjQ3XzgyMzApXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNS45OTkgMTkuMDk3NUMxNS43Mzc4IDE5LjA5OCAxNS40NzkgMTkuMDQ2OCAxNS4yMzc3IDE4Ljk0NjhDMTQuOTk2MyAxOC44NDY5IDE0Ljc3NzEgMTguNzAwMSAxNC41OTI2IDE4LjUxNTFMOC4zMjg2MyAxMS45Mjc5QzguMjE5NTEgMTEuODEzNyA4LjEzMzk5IDExLjY3OTEgOC4wNzY5OCAxMS41MzE4QzguMDE5OTggMTEuMzg0NSA3Ljk5MjYxIDExLjIyNzQgNy45OTY0NSAxMS4wNjk1QzguMDAwMjggMTAuOTExNiA4LjAzNTI1IDEwLjc1NiA4LjA5OTM0IDEwLjYxMTdDOC4xNjM0MiAxMC40NjczIDguMjU1MzcgMTAuMzM3IDguMzY5OTIgMTAuMjI4M0M4LjQ4NDQ2IDEwLjExOTUgOC42MTkzNCAxMC4wMzQ0IDguNzY2ODMgOS45Nzc5MUM4LjkxNDMyIDkuOTIxMzkgOS4wNzE1MiA5Ljg5NDU0IDkuMjI5NCA5Ljg5ODg5QzkuMzg3MjkgOS45MDMyNSA5LjU0Mjc3IDkuOTM4NzIgOS42ODY5MiAxMC4wMDMzQzkuODMxMDcgMTAuMDY3OCA5Ljk2MTA2IDEwLjE2MDIgMTAuMDY5NCAxMC4yNzUxTDE1LjcwOTQgMTYuMjE0M0MxNS43NDY3IDE2LjI1MzcgMTUuNzkxNiAxNi4yODUxIDE1Ljg0MTQgMTYuMzA2NkMxNS44OTEyIDE2LjMyODEgMTUuOTQ0OCAxNi4zMzkxIDE1Ljk5OSAxNi4zMzkxQzE2LjA1MzMgMTYuMzM5MSAxNi4xMDY5IDE2LjMyODEgMTYuMTU2NyAxNi4zMDY2QzE2LjIwNjUgMTYuMjg1MSAxNi4yNTE0IDE2LjI1MzcgMTYuMjg4NiAxNi4yMTQzTDIxLjkyODYgMTAuMjc1MUMyMi4wMzcgMTAuMTYwMiAyMi4xNjcgMTAuMDY3OCAyMi4zMTEyIDEwLjAwMzNDMjIuNDU1MyA5LjkzODcyIDIyLjYxMDggOS45MDMyNSAyMi43Njg3IDkuODk4ODlDMjIuOTI2NiA5Ljg5NDU0IDIzLjA4MzggOS45MjEzOSAyMy4yMzEyIDkuOTc3OTFDMjMuMzc4NyAxMC4wMzQ0IDIzLjUxMzYgMTAuMTE5NSAyMy42MjgyIDEwLjIyODNDMjMuNzQyNyAxMC4zMzcgMjMuODM0NyAxMC40NjczIDIzLjg5ODcgMTAuNjExN0MyMy45NjI4IDEwLjc1NiAyMy45OTc4IDEwLjkxMTYgMjQuMDAxNiAxMS4wNjk1QzI0LjAwNTUgMTEuMjI3NCAyMy45NzgxIDExLjM4NDUgMjMuOTIxMSAxMS41MzE4QzIzLjg2NDEgMTEuNjc5MSAyMy43Nzg2IDExLjgxMzcgMjMuNjY5NCAxMS45Mjc5TDE3LjQzOSAxOC40OTkxQzE3LjI1MDMgMTguNjg4OCAxNy4wMjU5IDE4LjgzOTQgMTYuNzc4OCAxOC45NDIxQzE2LjUzMTYgMTkuMDQ0OCAxNi4yNjY3IDE5LjA5NzYgMTUuOTk5IDE5LjA5NzVaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzcwNzM3MlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBfMzY0N184MjMwXCI+XG4gICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cIndoaXRlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDggNi41KVwiIC8+XG4gICAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1zZWxlY3Rvcl9fZHJvcGRvd25cIiBkYXRhLXZmLWpzLXNlbGVjdG9yLWRyb3Bkb3duPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1zZWxlY3Rvcl9fc2VhcmNoXCIgKm5nSWY9XCJzaG93U2VhcmNoQm94XCI+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzcz1cInZmLXUtc3Itb25seVwiXG4gICAgICAgICAgICBpZD1cInZmLWNoYXRib3Qtc2VsZWN0b3Itc2VhcmNoLWxhYmVsXCJcbiAgICAgICAgICAgIGZvcj1cInZmLWNoYXRib3Qtc2VsZWN0b3Itc2VhcmNoXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBUeXBlIHRvIHNlYXJjaFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cInZmLWNoYXRib3Qtc2VsZWN0b3Itc2VhcmNoXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInZmLWNoYXRib3Qtc2VsZWN0b3Itc2VhcmNoLWxhYmVsXCJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250ZXh0LmNoYXRib3RSb3V0ZXMucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWFyY2hcIlxuICAgICAgICAgICAgZGF0YS12Zi1qcy1zZWxlY3Rvci1zZWFyY2hcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1zZWxlY3Rvcl9faGVhZGVyXCIgKm5nSWY9XCJjb250ZXh0LmNoYXRib3RSb3V0ZXMubXVsdGlTZWxlY3RcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIFNlbGVjdCB1cCB0byB7e2NvbnRleHQuY2hhdGJvdFJvdXRlcy5tYXhNdWx0aVNlbGVjdC50b1N0cmluZygpfX0gc2VydmljZXNcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1zZWxlY3Rvcl9fY2xlYXJcIlxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLXZmLWpzLXNlbGVjdG9yLWNsZWFyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xlYXIgYWxsXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWwgY2xhc3M9XCJ2Zi1jaGF0Ym90LXNlbGVjdG9yX19saXN0XCIgZGF0YS12Zi1qcy1jaGF0Ym90LXNlbGVjdG9yLWxpc3Q+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgcm91dGUgb2YgY29udGV4dC5jaGF0Ym90Um91dGVzLmFycmF5X3JvdXRlc1wiIGlkID0ge3tyb3V0ZS5pZH19XG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlU2VsZWN0KHJvdXRlLmlkKVwiXG4gICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWQuaW5jbHVkZXMocm91dGUuaWQpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyByb3V0ZS50aXRsZSB9fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVmZDaGF0Ym90U2VsZWN0b3JBbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2hhdGJvdFJvdXRlczogYW55ID0ge307XG4gIEBJbnB1dCgpIGNvbnRleHQ6IGFueSA9IHt9O1xuICBjb25maWc6IGFueSA9IHt9O1xuICBzZWFyY2ggPSAnJztcbiAgc2VsZWN0ZWQ6IHN0cmluZ1tdID0gW107XG4gIHNob3dTZWFyY2hCb3ggPSB0cnVlO1xuICBtYXhTZWxlY3QgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIHJvdXRlczogW10sXG4gICAgICBtdWx0aVNlbGVjdDogZmFsc2UsXG4gICAgICBtYXhNdWx0aVNlbGVjdDogMSxcbiAgICAgIHNob3dTZWFyY2g6IHRydWUsXG4gICAgICBzaG93U2VhcmNoVGhyZXNob2xkOiA1LFxuICAgICAgc2hvd0FsbFNlcnZpY2VzOiBmYWxzZSxcbiAgICAgIHNob3dBbGxTZXJ2aWNlc1NlbGVjdGVkOiBmYWxzZSxcbiAgICAgIHNlbGVjdG9yX2xvZ29fdXJsOiAnLi4vLi4vYXNzZXRzL3ZmLWNoYXRib3QvYXNzZXRzL3ZmLWNoYXRib3QtLWljb24tMjR4MjQtZGFyay1ncmVlbi5zdmcnLFxuICAgICAgc2VsZWN0b3JfbG9nb190aXRsZTogJ0FJIEFzc2lzdGFudCcsXG4gICAgICB0aXRsZTogJ1NlbGVjdCBvcHRpb24nLFxuICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nLFxuICAgIH07XG5cbiAgICAvLyBQcmVmZXIgYW55IGV4cGxpY2l0IGBjb250ZXh0YCBpbnB1dDsgb3RoZXJ3aXNlIGZhbGwgYmFjayB0byBgY2hhdGJvdFJvdXRlc2AuXG4gICAgY29uc3Qgc291cmNlID0gKHRoaXMuY29udGV4dCAmJiBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpLmxlbmd0aCA+IDApXG4gICAgICA/IHRoaXMuY29udGV4dFxuICAgICAgOiAodGhpcy5jaGF0Ym90Um91dGVzIHx8IHt9KTtcblxuICAgIC8vIE1lcmdlIGRlZmF1bHRzIGludG8gdGhlIGNob3NlbiBzb3VyY2Ugc28gdGVtcGxhdGUgYmluZGluZ3MgZXhpc3QgYW5kIGFyZSBvYmplY3RzXG4gICAgdGhpcy5jb250ZXh0ID0geyAuLi5kZWZhdWx0cywgLi4uc291cmNlIH07XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQ7IC8vIGtlZXAgYGNvbmZpZ2AgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbiAgICB0aGlzLm1heFNlbGVjdCA9IHRoaXMuY29uZmlnLm1heE11bHRpU2VsZWN0IHx8IDM7XG4gICAgdGhpcy5zaG93U2VhcmNoQm94ID1cbiAgICAgIHRoaXMuY29udGV4dC5jaGF0Ym90Um91dGVzLnNob3dTZWFyY2ggJiZcbiAgICAgICh0aGlzLmNvbnRleHQuY2hhdGJvdFJvdXRlcy5yb3V0ZXMgfHwgW10pLmxlbmd0aCA+IHRoaXMuY29udGV4dC5jaGF0Ym90Um91dGVzLnNob3dTZWFyY2hUaHJlc2hvbGQ7XG4gICAgdGhpcy5sb2FkUm91dGVzRnJvbUFwaSgpO1xuICB9XG5cbiAgY2xlYXJBbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gW107XG4gIH1cblxuICB0b2dnbGVTZWxlY3Qocm91dGVJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5jaGF0Ym90Um91dGVzLm11bHRpU2VsZWN0KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhyb3V0ZUlkKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZC5maWx0ZXIoaWQgPT4gaWQgIT09IHJvdXRlSWQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkLmxlbmd0aCA8IHRoaXMubWF4U2VsZWN0KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChyb3V0ZUlkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IFtyb3V0ZUlkXTtcbiAgICB9XG4gIH1cbiAgbG9hZFJvdXRlc0Zyb21BcGkoKTogdm9pZCB7XG4gIGNvbnN0IHVybCA9IHRoaXMuY29udGV4dC5jaGF0Ym90Um91dGVzLnJvdXRlcztcbiAgdGhpcy5odHRwLmdldDxDb25maWc+KHVybCkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XG4gIHRoaXMuY29udGV4dC5jaGF0Ym90Um91dGVzLmFycmF5X3JvdXRlcyA9IGNvbmZpZ1sncm91dGVzJ107XG59KTtcbiAgXG4gIFxufVxufVxuIl19