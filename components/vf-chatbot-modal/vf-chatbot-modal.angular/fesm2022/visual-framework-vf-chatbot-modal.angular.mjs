import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { NgModule, EventEmitter, Component, Input, Output } from '@angular/core';
import * as i2 from 'vf-chatbot-dialog.angular';
import { VfChatbotDialogAngularModule } from 'vf-chatbot-dialog.angular';
import * as i3 from 'vf-chatbot-prompt.angular';
import { VfChatbotPromptAngularModule } from 'vf-chatbot-prompt.angular';
import * as i4 from 'vf-chatbot-selector.angular';
import { VfChatbotSelectorAngularModule } from 'vf-chatbot-selector.angular';
import * as i5 from 'vf-chatbot-welcome.angular';
import { VfChatbotWelcomeAngularModule } from 'vf-chatbot-welcome.angular';
import { FormsModule } from '@angular/forms';
import { VfChatbotActionPromptAngularModule } from 'vf-chatbot-action-prompt.angular';
import { VfChatbotFeedbackAngularModule } from 'vf-chatbot-feedback.angular';

class VfChatbotModalAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularModule, imports: [CommonModule,
            FormsModule,
            VfChatbotModalAngularComponent,
            VfChatbotActionPromptAngularModule,
            VfChatbotSelectorAngularModule,
            VfChatbotWelcomeAngularModule,
            VfChatbotPromptAngularModule,
            VfChatbotFeedbackAngularModule,
            VfChatbotDialogAngularModule], exports: [VfChatbotModalAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularModule, imports: [CommonModule,
            FormsModule,
            VfChatbotModalAngularComponent,
            VfChatbotActionPromptAngularModule,
            VfChatbotSelectorAngularModule,
            VfChatbotWelcomeAngularModule,
            VfChatbotPromptAngularModule,
            VfChatbotFeedbackAngularModule,
            VfChatbotDialogAngularModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        VfChatbotModalAngularComponent,
                        VfChatbotActionPromptAngularModule,
                        VfChatbotSelectorAngularModule,
                        VfChatbotWelcomeAngularModule,
                        VfChatbotPromptAngularModule,
                        VfChatbotFeedbackAngularModule,
                        VfChatbotDialogAngularModule
                    ],
                    exports: [
                        VfChatbotModalAngularComponent
                    ]
                }]
        }] });

class VfChatbotModalAngularComponent {
    constructor() {
        this.config = { type: 'modal' };
        this.messages = [];
        this.sources = [];
        this.prompts = [];
        this.qaData = [];
        this.isOpen = false;
        this.dialogTitle = 'Close chat and delete conversation?';
        this.dialogMessage = 'Are you sure you want to close the chat? <br>Your current conversation history will be permanently deleted.';
        this.dialogCancelLabel = 'Keep chat open';
        this.dialogConfirmLabel = 'Close and delete';
        this.close = new EventEmitter();
        this.minimize = new EventEmitter();
    }
    get configJson() {
        return JSON.stringify(this.config || {});
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotModalAngularComponent, isStandalone: true, selector: "vf-chatbot-modal", inputs: { config: "config", messages: "messages", sources: "sources", prompts: "prompts", qaData: "qaData", isOpen: "isOpen" }, outputs: { close: "close", minimize: "minimize" }, ngImport: i0, template: `
<section
  class="vf-content vf-chatbot-modal-container"
  data-vf-js-chatbot-modal-container
  [attr.data-vf-chatbot-config]="configJson"
  [class.vf-chatbot-modal-container--active]="isOpen"
  [class.vf-chatbot-modal-container--inactive]="!isOpen"
  [attr.aria-modal]="isOpen ? 'true' : 'false'"
  [attr.aria-label]="(config?.title || 'AI Assistant') + ' chatbot'"
  role="dialog"
>
  <div class="vf-chatbot-modal__header vf-u-margin__bottom--400">
    <div class="vf-chatbot-modal__header-left">
      <vf-chatbot-selector
        *ngIf="config?.selectorContext"
        [context]="config.selectorContext"
      ></vf-chatbot-selector>

      <div *ngIf="!config?.selectorContext" class="vf-chatbot-selector">
        <div class="vf-chatbot-selector__title">
          <img
            *ngIf="config?.icons?.main_logo_url"
            [src]="config?.icons?.main_logo_url"
            [alt]="config?.title || 'AI Assistant'"
          />
          <div class="vf-chatbot-selector__title-content">
            <span class="vf-chatbot-selector__main-text">
              {{ config?.title || 'AI Assistant' }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="vf-chatbot-modal__header-right">
      <button
        type="button"
        class="vf-chatbot-modal__minimize"
        aria-label="Minimize chatbot"
        data-vf-js-chatbot-modal-minimize
        (click)="minimize.emit()"
      >
        <img *ngIf="config?.icons?.minimize" [src]="config?.icons?.minimize" alt="" />
      </button>
      <button
        type="button"
        class="vf-chatbot-modal__close"
        aria-label="Close chatbot"
        data-vf-js-chatbot-modal-close
        (click)="close.emit()"
      >
        <img *ngIf="config?.icons?.close" [src]="config?.icons?.close" alt="" />
      </button>
    </div>
  </div>

  <div class="vf-chatbot-modal | vf-u-background-color-ui--grey--light" data-vf-js-chatbot-modal>
    <div class="vf-chatbot-modal__content" data-vf-js-chatbot-modal-content>
      <vf-chatbot-welcome
        *ngIf="config?.features?.enable_welcome"
        [qaData]="qaData"
        [welcome_logo]="config?.welcome_logo ?? false"
        [welcome_logo_url]="config?.icons?.main_logo_url ?? ''"
        [welcome_logo_alt]="config?.welcome_logo_alt ?? 'AI Assistant'"
        [welcome_title]="config?.title ?? ''"
        [welcome_message]="config?.welcome_message ?? ''"
        [welcome_suggestions_title]="config?.welcome_suggestions_title ?? ''"
        [enable_welcome_suggestions]="config?.features?.enable_welcome_suggestions ?? false"
        [welcome_max_suggestions]="config?.welcome_max_suggestions ?? 4"
        [qa_data_url]="config?.api?.qa_data_url ?? ''"
        [enable_qa_data_loading]="config?.features?.enable_qa_data_loading ?? true"
        [enable_predefined_qa]="config?.features?.enable_predefined_qa ?? true"
        [enable_fallback_responses]="config?.features?.enable_fallback_responses ?? true"
      ></vf-chatbot-welcome>

      <div
        class="vf-chatbot-modal__messages vf-u-margin__bottom--400"
        [ngClass]="{
          'vf-chatbot-modal__messages-no-scrollbar': config?.behavior?.show_scrollbar === false
        }"
        data-vf-js-chatbot-modal-messages
        [attr.data-auto-scroll]="config?.behavior?.auto_scroll"
        role="region"
        aria-label="Chat messages"
      >
        <vf-chatbot-prompt
          *ngFor="let msg of messages"
          [type]="msg.type ?? ''"
          [avatar]="msg.avatar"
          [content]="msg.content ?? ''"
          [sources]="sources"
          [prompts]="prompts"
          [allowFeedback]="config?.features?.enable_feedback ?? true"
        ></vf-chatbot-prompt>
      </div>

      <div
        *ngIf="config?.disclaimer && config?.features?.enable_disclaimer"
        class="vf-chatbot-modal__disclaimer"
        data-vf-js-chatbot-modal-disclaimer
      >
        <div class="vf-banner vf-banner--alert vf-banner--info">
          <div class="vf-banner__content">
            <p class="vf-banner__text" [innerHTML]="config.disclaimer"></p>
            <button
              role="button"
              aria-label="close notification banner"
              class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
              (click)="config?.onDismissDisclaimer?.()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>dismiss banner</title>
                <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="vf-chatbot-modal__input-container" role="region" aria-label="Chat message input">
      <div class="vf-chatbot-modal__input-wrapper">
        <label class="vf-u-sr-only" id="vf-chatbot-modal-input-label" for="vf-chatbot-modal-input">Ask me</label>
        <textarea
          id="vf-chatbot-modal-input"
          data-vf-js-chatbot-modal-input
          aria-labelledby="vf-chatbot-modal-input-label"
          class="vf-chatbot-modal__input vf-form__textarea vf-u-padding__left--400"
          [placeholder]="config?.input_placeholder"
          rows="1"
        ></textarea>
        <button class="vf-chatbot-modal__send-button" aria-label="Send message" data-vf-js-chatbot-modal-send type="button">
          <img [src]="config?.icons?.send_button" alt="Send" />
        </button>
      </div>

      <div *ngIf="config?.footnote" class="vf-chatbot-modal__footnote vf-u-margin__top--200 vf-u-margin__bottom--200" data-vf-js-chatbot-modal-footnote [innerHTML]="config.footnote"></div>
    </div>

    <vf-chatbot-dialog
      [title]="dialogTitle"
      [message]="dialogMessage"
      [cancelLabel]="dialogCancelLabel"
      [confirmLabel]="dialogConfirmLabel"
    ></vf-chatbot-dialog>

    <template id="user-message-template"></template>
    <template id="assistant-message-template"></template>
    <template id="single-action-prompt-template"></template>
    <template id="loading-indicator-template"></template>
    <template id="action-prompts-template"></template>
    <template id="feedback-positive-template"></template>
    <template id="feedback-negative-template"></template>
  </div>
</section>
`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: VfChatbotDialogAngularModule }, { kind: "component", type: i2.VfChatbotDialogAngularComponent, selector: "vf-chatbot-dialog", inputs: ["title", "message", "cancelLabel", "confirmLabel"] }, { kind: "ngmodule", type: VfChatbotPromptAngularModule }, { kind: "component", type: i3.VfChatbotPromptAngularComponent, selector: "vf-chatbot-prompt", inputs: ["type", "isLoading", "avatar", "content", "sources", "prompts", "allowFeedback"] }, { kind: "ngmodule", type: VfChatbotSelectorAngularModule }, { kind: "component", type: i4.VfChatbotSelectorAngularComponent, selector: "vf-chatbot-selector", inputs: ["chatbotRoutes", "context"] }, { kind: "ngmodule", type: VfChatbotWelcomeAngularModule }, { kind: "component", type: i5.VfChatbotWelcomeAngularComponent, selector: "vf-chatbot-welcome", inputs: ["qaData", "welcome_logo", "welcome_logo_url", "welcome_logo_alt", "welcome_title", "welcome_message", "welcome_suggestions_title", "enable_welcome_suggestions", "welcome_max_suggestions", "enable_qa_data_loading", "enable_predefined_qa", "enable_fallback_responses", "qa_data_url"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-modal',
                    standalone: true,
                    imports: [
                        CommonModule,
                        VfChatbotDialogAngularModule,
                        VfChatbotPromptAngularModule,
                        VfChatbotSelectorAngularModule,
                        VfChatbotWelcomeAngularModule
                    ],
                    template: `
<section
  class="vf-content vf-chatbot-modal-container"
  data-vf-js-chatbot-modal-container
  [attr.data-vf-chatbot-config]="configJson"
  [class.vf-chatbot-modal-container--active]="isOpen"
  [class.vf-chatbot-modal-container--inactive]="!isOpen"
  [attr.aria-modal]="isOpen ? 'true' : 'false'"
  [attr.aria-label]="(config?.title || 'AI Assistant') + ' chatbot'"
  role="dialog"
>
  <div class="vf-chatbot-modal__header vf-u-margin__bottom--400">
    <div class="vf-chatbot-modal__header-left">
      <vf-chatbot-selector
        *ngIf="config?.selectorContext"
        [context]="config.selectorContext"
      ></vf-chatbot-selector>

      <div *ngIf="!config?.selectorContext" class="vf-chatbot-selector">
        <div class="vf-chatbot-selector__title">
          <img
            *ngIf="config?.icons?.main_logo_url"
            [src]="config?.icons?.main_logo_url"
            [alt]="config?.title || 'AI Assistant'"
          />
          <div class="vf-chatbot-selector__title-content">
            <span class="vf-chatbot-selector__main-text">
              {{ config?.title || 'AI Assistant' }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="vf-chatbot-modal__header-right">
      <button
        type="button"
        class="vf-chatbot-modal__minimize"
        aria-label="Minimize chatbot"
        data-vf-js-chatbot-modal-minimize
        (click)="minimize.emit()"
      >
        <img *ngIf="config?.icons?.minimize" [src]="config?.icons?.minimize" alt="" />
      </button>
      <button
        type="button"
        class="vf-chatbot-modal__close"
        aria-label="Close chatbot"
        data-vf-js-chatbot-modal-close
        (click)="close.emit()"
      >
        <img *ngIf="config?.icons?.close" [src]="config?.icons?.close" alt="" />
      </button>
    </div>
  </div>

  <div class="vf-chatbot-modal | vf-u-background-color-ui--grey--light" data-vf-js-chatbot-modal>
    <div class="vf-chatbot-modal__content" data-vf-js-chatbot-modal-content>
      <vf-chatbot-welcome
        *ngIf="config?.features?.enable_welcome"
        [qaData]="qaData"
        [welcome_logo]="config?.welcome_logo ?? false"
        [welcome_logo_url]="config?.icons?.main_logo_url ?? ''"
        [welcome_logo_alt]="config?.welcome_logo_alt ?? 'AI Assistant'"
        [welcome_title]="config?.title ?? ''"
        [welcome_message]="config?.welcome_message ?? ''"
        [welcome_suggestions_title]="config?.welcome_suggestions_title ?? ''"
        [enable_welcome_suggestions]="config?.features?.enable_welcome_suggestions ?? false"
        [welcome_max_suggestions]="config?.welcome_max_suggestions ?? 4"
        [qa_data_url]="config?.api?.qa_data_url ?? ''"
        [enable_qa_data_loading]="config?.features?.enable_qa_data_loading ?? true"
        [enable_predefined_qa]="config?.features?.enable_predefined_qa ?? true"
        [enable_fallback_responses]="config?.features?.enable_fallback_responses ?? true"
      ></vf-chatbot-welcome>

      <div
        class="vf-chatbot-modal__messages vf-u-margin__bottom--400"
        [ngClass]="{
          'vf-chatbot-modal__messages-no-scrollbar': config?.behavior?.show_scrollbar === false
        }"
        data-vf-js-chatbot-modal-messages
        [attr.data-auto-scroll]="config?.behavior?.auto_scroll"
        role="region"
        aria-label="Chat messages"
      >
        <vf-chatbot-prompt
          *ngFor="let msg of messages"
          [type]="msg.type ?? ''"
          [avatar]="msg.avatar"
          [content]="msg.content ?? ''"
          [sources]="sources"
          [prompts]="prompts"
          [allowFeedback]="config?.features?.enable_feedback ?? true"
        ></vf-chatbot-prompt>
      </div>

      <div
        *ngIf="config?.disclaimer && config?.features?.enable_disclaimer"
        class="vf-chatbot-modal__disclaimer"
        data-vf-js-chatbot-modal-disclaimer
      >
        <div class="vf-banner vf-banner--alert vf-banner--info">
          <div class="vf-banner__content">
            <p class="vf-banner__text" [innerHTML]="config.disclaimer"></p>
            <button
              role="button"
              aria-label="close notification banner"
              class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
              (click)="config?.onDismissDisclaimer?.()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>dismiss banner</title>
                <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="vf-chatbot-modal__input-container" role="region" aria-label="Chat message input">
      <div class="vf-chatbot-modal__input-wrapper">
        <label class="vf-u-sr-only" id="vf-chatbot-modal-input-label" for="vf-chatbot-modal-input">Ask me</label>
        <textarea
          id="vf-chatbot-modal-input"
          data-vf-js-chatbot-modal-input
          aria-labelledby="vf-chatbot-modal-input-label"
          class="vf-chatbot-modal__input vf-form__textarea vf-u-padding__left--400"
          [placeholder]="config?.input_placeholder"
          rows="1"
        ></textarea>
        <button class="vf-chatbot-modal__send-button" aria-label="Send message" data-vf-js-chatbot-modal-send type="button">
          <img [src]="config?.icons?.send_button" alt="Send" />
        </button>
      </div>

      <div *ngIf="config?.footnote" class="vf-chatbot-modal__footnote vf-u-margin__top--200 vf-u-margin__bottom--200" data-vf-js-chatbot-modal-footnote [innerHTML]="config.footnote"></div>
    </div>

    <vf-chatbot-dialog
      [title]="dialogTitle"
      [message]="dialogMessage"
      [cancelLabel]="dialogCancelLabel"
      [confirmLabel]="dialogConfirmLabel"
    ></vf-chatbot-dialog>

    <template id="user-message-template"></template>
    <template id="assistant-message-template"></template>
    <template id="single-action-prompt-template"></template>
    <template id="loading-indicator-template"></template>
    <template id="action-prompts-template"></template>
    <template id="feedback-positive-template"></template>
    <template id="feedback-negative-template"></template>
  </div>
</section>
`
                }]
        }], propDecorators: { config: [{
                type: Input
            }], messages: [{
                type: Input
            }], sources: [{
                type: Input
            }], prompts: [{
                type: Input
            }], qaData: [{
                type: Input
            }], isOpen: [{
                type: Input
            }], close: [{
                type: Output
            }], minimize: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotModalAngularComponent, VfChatbotModalAngularModule };
//# sourceMappingURL=visual-framework-vf-chatbot-modal.angular.mjs.map
