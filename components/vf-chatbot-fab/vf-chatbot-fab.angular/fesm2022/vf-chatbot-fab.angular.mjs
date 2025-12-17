import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

class VfChatbotFabAngularComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.notificationCount = 0;
        this.isInactive = false;
    }
    ngAfterViewInit() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFabAngularComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotFabAngularComponent, selector: "vf-chatbot-fab", inputs: { notificationCount: "notificationCount", isInactive: "isInactive" }, ngImport: i0, template: `
    <button
      #fabRef
      class="vf-chatbot-fab"
      [class.vf-chatbot-fab--inactive]="isInactive"
      aria-label="Open chat"
      data-vf-js-chatbot-fab
      type="button"
    >
      <svg
        class="vf-chatbot-fab__icon vf-chatbot-fab__icon--chat"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3256_34050)">
          <path
            d="M4.23995 24.0191L4.25995 17.5491H2.85995C1.28995 17.5491 0.00994589 16.2691 0.00994589 14.6991V3.75906C-5.41061e-05 2.18906 1.27995 0.909058 2.84995 0.909058H21.1399C22.7099 0.909058 23.9899 2.18906 23.9899 3.75906V14.6891C23.9899 16.2591 22.7099 17.5391 21.1399 17.5391H10.7399L4.22995 24.0091L4.23995 24.0191ZM2.84995 1.97906C1.86995 1.97906 1.06995 2.77906 1.06995 3.75906V14.6891C1.06995 15.6691 1.86995 16.4691 2.84995 16.4691H5.32995V21.4191L10.2999 16.4691H21.1499C22.1299 16.4691 22.9299 15.6691 22.9299 14.6891V3.75906C22.9299 2.77906 22.1299 1.97906 21.1499 1.97906H2.84995Z"
            fill="white"
          />
          <path
            d="M18.27 7.06906C18.76 7.55906 21.93 8.41906 21.93 8.41906C21.93 8.41906 18.75 9.28906 18.27 9.76906C17.79 10.2491 16.92 13.4291 16.92 13.4291C16.92 13.4291 16.04 10.2391 15.57 9.76906C15.1 9.29906 11.91 8.41906 11.91 8.41906C11.91 8.41906 15.02 7.61906 15.57 7.06906C16.12 6.51906 16.92 3.40906 16.92 3.40906C16.92 3.40906 17.78 6.57906 18.27 7.06906Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3256_34050">
            <rect
              width="24"
              height="23.11"
              fill="white"
              transform="translate(0 0.909058)"
            />
          </clipPath>
        </defs>
      </svg>

      <span
        *ngIf="notificationCount > 0"
        class="vf-chatbot-fab__badge"
      >
        {{ notificationCount }}
      </span>
    </button>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFabAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-fab',
                    template: `
    <button
      #fabRef
      class="vf-chatbot-fab"
      [class.vf-chatbot-fab--inactive]="isInactive"
      aria-label="Open chat"
      data-vf-js-chatbot-fab
      type="button"
    >
      <svg
        class="vf-chatbot-fab__icon vf-chatbot-fab__icon--chat"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3256_34050)">
          <path
            d="M4.23995 24.0191L4.25995 17.5491H2.85995C1.28995 17.5491 0.00994589 16.2691 0.00994589 14.6991V3.75906C-5.41061e-05 2.18906 1.27995 0.909058 2.84995 0.909058H21.1399C22.7099 0.909058 23.9899 2.18906 23.9899 3.75906V14.6891C23.9899 16.2591 22.7099 17.5391 21.1399 17.5391H10.7399L4.22995 24.0091L4.23995 24.0191ZM2.84995 1.97906C1.86995 1.97906 1.06995 2.77906 1.06995 3.75906V14.6891C1.06995 15.6691 1.86995 16.4691 2.84995 16.4691H5.32995V21.4191L10.2999 16.4691H21.1499C22.1299 16.4691 22.9299 15.6691 22.9299 14.6891V3.75906C22.9299 2.77906 22.1299 1.97906 21.1499 1.97906H2.84995Z"
            fill="white"
          />
          <path
            d="M18.27 7.06906C18.76 7.55906 21.93 8.41906 21.93 8.41906C21.93 8.41906 18.75 9.28906 18.27 9.76906C17.79 10.2491 16.92 13.4291 16.92 13.4291C16.92 13.4291 16.04 10.2391 15.57 9.76906C15.1 9.29906 11.91 8.41906 11.91 8.41906C11.91 8.41906 15.02 7.61906 15.57 7.06906C16.12 6.51906 16.92 3.40906 16.92 3.40906C16.92 3.40906 17.78 6.57906 18.27 7.06906Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3256_34050">
            <rect
              width="24"
              height="23.11"
              fill="white"
              transform="translate(0 0.909058)"
            />
          </clipPath>
        </defs>
      </svg>

      <span
        *ngIf="notificationCount > 0"
        class="vf-chatbot-fab__badge"
      >
        {{ notificationCount }}
      </span>
    </button>
  `,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { notificationCount: [{
                type: Input
            }], isInactive: [{
                type: Input
            }] } });

class VfChatbotFabAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFabAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFabAngularModule, declarations: [VfChatbotFabAngularComponent], imports: [CommonModule,
            FormsModule], exports: [VfChatbotFabAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFabAngularModule, imports: [CommonModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFabAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfChatbotFabAngularComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [
                        VfChatbotFabAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-chatbot-fab.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotFabAngularComponent, VfChatbotFabAngularModule };
//# sourceMappingURL=vf-chatbot-fab.angular.mjs.map
