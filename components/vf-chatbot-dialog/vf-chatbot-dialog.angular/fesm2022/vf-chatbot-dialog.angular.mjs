import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

class VfChatbotDialogAngularComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this.title = 'Close chat and delete conversation?';
        this.message = 'Are you sure you want to close the chat? <br>Your current conversation history will be permanently deleted.';
        this.cancelLabel = 'Keep chat open';
        this.confirmLabel = 'Close and delete';
    }
    ngAfterViewInit() {
        const el = this.elRef.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotDialogAngularComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotDialogAngularComponent, selector: "vf-chatbot-dialog", inputs: { title: "title", message: "message", cancelLabel: "cancelLabel", confirmLabel: "confirmLabel" }, ngImport: i0, template: `
    <div
      class="vf-chatbot-dialog"
      data-vf-js-chatbot-dialog
    >
      <div class="vf-chatbot-dialog__content">
        <div class="vf-chatbot-dialog__header vf-u-margin__bottom--400">
          <h2 class="vf-chatbot-dialog__title">{{ title }}</h2>

          <button
            class="vf-chatbot-dialog__close"
            data-vf-js-dialog-close
            aria-label="Close dialog"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 
                   10.59 12 5 17.59 6.41 19 12 13.41 
                   17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
        </div>

        <div class="vf-chatbot-dialog__body vf-u-margin__bottom--800">
          <p
            class="vf-text vf-text-body--3"
            [innerHTML]="message"
          ></p>
        </div>

        <div class="vf-chatbot-dialog__actions">
          <button
            class="vf-chatbot-dialog__button vf-chatbot-dialog__button--outline"
            data-vf-js-dialog-cancel
          >
            {{ cancelLabel }}
          </button>

          <button
            class="vf-chatbot-dialog__button vf-chatbot-dialog__button--primary"
            data-vf-js-dialog-confirm
          >
            {{ confirmLabel }}
          </button>
        </div>
      </div>
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotDialogAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-dialog',
                    template: `
    <div
      class="vf-chatbot-dialog"
      data-vf-js-chatbot-dialog
    >
      <div class="vf-chatbot-dialog__content">
        <div class="vf-chatbot-dialog__header vf-u-margin__bottom--400">
          <h2 class="vf-chatbot-dialog__title">{{ title }}</h2>

          <button
            class="vf-chatbot-dialog__close"
            data-vf-js-dialog-close
            aria-label="Close dialog"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 
                   10.59 12 5 17.59 6.41 19 12 13.41 
                   17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
        </div>

        <div class="vf-chatbot-dialog__body vf-u-margin__bottom--800">
          <p
            class="vf-text vf-text-body--3"
            [innerHTML]="message"
          ></p>
        </div>

        <div class="vf-chatbot-dialog__actions">
          <button
            class="vf-chatbot-dialog__button vf-chatbot-dialog__button--outline"
            data-vf-js-dialog-cancel
          >
            {{ cancelLabel }}
          </button>

          <button
            class="vf-chatbot-dialog__button vf-chatbot-dialog__button--primary"
            data-vf-js-dialog-confirm
          >
            {{ confirmLabel }}
          </button>
        </div>
      </div>
    </div>
  `
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { title: [{
                type: Input
            }], message: [{
                type: Input
            }], cancelLabel: [{
                type: Input
            }], confirmLabel: [{
                type: Input
            }] } });

class VfChatbotDialogAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotDialogAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotDialogAngularModule, declarations: [VfChatbotDialogAngularComponent], imports: [CommonModule,
            FormsModule], exports: [VfChatbotDialogAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotDialogAngularModule, imports: [CommonModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotDialogAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfChatbotDialogAngularComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [
                        VfChatbotDialogAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-chatbot-dialog.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotDialogAngularComponent, VfChatbotDialogAngularModule };
//# sourceMappingURL=vf-chatbot-dialog.angular.mjs.map
