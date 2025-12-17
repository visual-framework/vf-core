import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class VfChatbotSelectorAngularComponent {
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

class VfChatbotSelectorAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSelectorAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSelectorAngularModule, declarations: [VfChatbotSelectorAngularComponent], imports: [CommonModule,
            FormsModule], exports: [VfChatbotSelectorAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSelectorAngularModule, imports: [CommonModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSelectorAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfChatbotSelectorAngularComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [
                        VfChatbotSelectorAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-chatbot-selector.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotSelectorAngularComponent, VfChatbotSelectorAngularModule };
//# sourceMappingURL=vf-chatbot-selector.angular.mjs.map
