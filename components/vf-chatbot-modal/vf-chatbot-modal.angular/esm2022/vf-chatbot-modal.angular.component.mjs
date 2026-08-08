import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VfChatbotDialogAngularModule } from 'vf-chatbot-dialog.angular';
import { VfChatbotPromptAngularModule } from 'vf-chatbot-prompt.angular';
import { VfChatbotSelectorAngularModule } from 'vf-chatbot-selector.angular';
import { VfChatbotWelcomeAngularModule } from 'vf-chatbot-welcome.angular';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "vf-chatbot-dialog.angular";
import * as i3 from "vf-chatbot-prompt.angular";
import * as i4 from "vf-chatbot-selector.angular";
import * as i5 from "vf-chatbot-welcome.angular";
export class VfChatbotModalAngularComponent {
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
export * from './vf-chatbot-modal.angular.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1tb2RhbC5hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3ZmLWNoYXRib3QtbW9kYWwuYW5ndWxhci9zcmMvbGliL3ZmLWNoYXRib3QtbW9kYWwuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7QUFpTjNFLE1BQU0sT0FBTyw4QkFBOEI7SUF2SzNDO1FBd0tXLFdBQU0sR0FBeUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDakQsYUFBUSxHQUFpRSxFQUFFLENBQUM7UUFDNUUsWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQWMsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBYyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUV4QixnQkFBVyxHQUFHLHFDQUFxQyxDQUFDO1FBQ3BELGtCQUFhLEdBQUcsNkdBQTZHLENBQUM7UUFDOUgsc0JBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFFOUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDakMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7S0FLL0M7SUFIQyxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOytHQWxCVSw4QkFBOEI7bUdBQTlCLDhCQUE4QiwrUEE3Si9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTJKWCwyREFqS0csWUFBWSw2VkFDWiw0QkFBNEIsMkxBQzVCLDRCQUE0Qix5TkFDNUIsOEJBQThCLHdLQUM5Qiw2QkFBNkI7OzRGQStKcEIsOEJBQThCO2tCQXZLMUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osNEJBQTRCO3dCQUM1Qiw0QkFBNEI7d0JBQzVCLDhCQUE4Qjt3QkFDOUIsNkJBQTZCO3FCQUM5QjtvQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkpYO2lCQUNBOzhCQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFPSSxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTs7QUFPVCxjQUFjLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZkNoYXRib3REaWFsb2dBbmd1bGFyTW9kdWxlIH0gZnJvbSAndmYtY2hhdGJvdC1kaWFsb2cuYW5ndWxhcic7XG5pbXBvcnQgeyBWZkNoYXRib3RQcm9tcHRBbmd1bGFyTW9kdWxlIH0gZnJvbSAndmYtY2hhdGJvdC1wcm9tcHQuYW5ndWxhcic7XG5pbXBvcnQgeyBWZkNoYXRib3RTZWxlY3RvckFuZ3VsYXJNb2R1bGUgfSBmcm9tICd2Zi1jaGF0Ym90LXNlbGVjdG9yLmFuZ3VsYXInO1xuaW1wb3J0IHsgVmZDaGF0Ym90V2VsY29tZUFuZ3VsYXJNb2R1bGUgfSBmcm9tICd2Zi1jaGF0Ym90LXdlbGNvbWUuYW5ndWxhcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmZDaGF0Ym90TW9kYWxDb25maWcge1xuICB0eXBlPzogJ21vZGFsJyB8ICdzdGFuZGFsb25lJztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHdlbGNvbWVfbG9nbz86IGJvb2xlYW47XG4gIHdlbGNvbWVfbWVzc2FnZT86IHN0cmluZztcbiAgd2VsY29tZV9sb2dvX2FsdD86IHN0cmluZztcbiAgd2VsY29tZV9zdWdnZXN0aW9uc190aXRsZT86IHN0cmluZztcbiAgaW5wdXRfcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHdlbGNvbWVfbWF4X3N1Z2dlc3Rpb25zPzogbnVtYmVyO1xuICBkaXNjbGFpbWVyPzogc3RyaW5nO1xuICBmb290bm90ZT86IHN0cmluZztcbiAgaWNvbnM/OiB7XG4gICAgYXNzaXN0YW50X2F2YXRhcj86IHN0cmluZztcbiAgICB1c2VyX2F2YXRhcj86IHN0cmluZztcbiAgICBzZW5kX2J1dHRvbj86IHN0cmluZztcbiAgICBtaW5pbWl6ZT86IHN0cmluZztcbiAgICBjbG9zZT86IHN0cmluZztcbiAgICBtYWluX2xvZ29fdXJsPzogc3RyaW5nO1xuICB9O1xuICBzZWxlY3RvckNvbnRleHQ/OiB1bmtub3duO1xuICBmZWF0dXJlcz86IHtcbiAgICBlbmFibGVfd2VsY29tZT86IGJvb2xlYW47XG4gICAgZW5hYmxlX3dlbGNvbWVfc3VnZ2VzdGlvbnM/OiBib29sZWFuO1xuICAgIGVuYWJsZV9xYV9kYXRhX2xvYWRpbmc/OiBib29sZWFuO1xuICAgIGVuYWJsZV9wcmVkZWZpbmVkX3FhPzogYm9vbGVhbjtcbiAgICBlbmFibGVfZmFsbGJhY2tfcmVzcG9uc2VzPzogYm9vbGVhbjtcbiAgICBlbmFibGVfZmVlZGJhY2s/OiBib29sZWFuO1xuICAgIGVuYWJsZV9kaXNjbGFpbWVyPzogYm9vbGVhbjtcbiAgICBlbmFibGVfdHlwaW5nX2luZGljYXRvcj86IGJvb2xlYW47XG4gIH07XG4gIGJlaGF2aW9yPzoge1xuICAgIHNob3dfc2Nyb2xsYmFyPzogYm9vbGVhbjtcbiAgICBhdXRvX3Njcm9sbD86IGJvb2xlYW47XG4gIH07XG4gIGFwaT86IHtcbiAgICBxYV9kYXRhX3VybD86IHN0cmluZztcbiAgfTtcbiAgb25EaXNtaXNzRGlzY2xhaW1lcj86ICgpID0+IHZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmLWNoYXRib3QtbW9kYWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFZmQ2hhdGJvdERpYWxvZ0FuZ3VsYXJNb2R1bGUsXG4gICAgVmZDaGF0Ym90UHJvbXB0QW5ndWxhck1vZHVsZSxcbiAgICBWZkNoYXRib3RTZWxlY3RvckFuZ3VsYXJNb2R1bGUsXG4gICAgVmZDaGF0Ym90V2VsY29tZUFuZ3VsYXJNb2R1bGVcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbjxzZWN0aW9uXG4gIGNsYXNzPVwidmYtY29udGVudCB2Zi1jaGF0Ym90LW1vZGFsLWNvbnRhaW5lclwiXG4gIGRhdGEtdmYtanMtY2hhdGJvdC1tb2RhbC1jb250YWluZXJcbiAgW2F0dHIuZGF0YS12Zi1jaGF0Ym90LWNvbmZpZ109XCJjb25maWdKc29uXCJcbiAgW2NsYXNzLnZmLWNoYXRib3QtbW9kYWwtY29udGFpbmVyLS1hY3RpdmVdPVwiaXNPcGVuXCJcbiAgW2NsYXNzLnZmLWNoYXRib3QtbW9kYWwtY29udGFpbmVyLS1pbmFjdGl2ZV09XCIhaXNPcGVuXCJcbiAgW2F0dHIuYXJpYS1tb2RhbF09XCJpc09wZW4gPyAndHJ1ZScgOiAnZmFsc2UnXCJcbiAgW2F0dHIuYXJpYS1sYWJlbF09XCIoY29uZmlnPy50aXRsZSB8fCAnQUkgQXNzaXN0YW50JykgKyAnIGNoYXRib3QnXCJcbiAgcm9sZT1cImRpYWxvZ1wiXG4+XG4gIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19oZWFkZXIgdmYtdS1tYXJnaW5fX2JvdHRvbS0tNDAwXCI+XG4gICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX2hlYWRlci1sZWZ0XCI+XG4gICAgICA8dmYtY2hhdGJvdC1zZWxlY3RvclxuICAgICAgICAqbmdJZj1cImNvbmZpZz8uc2VsZWN0b3JDb250ZXh0XCJcbiAgICAgICAgW2NvbnRleHRdPVwiY29uZmlnLnNlbGVjdG9yQ29udGV4dFwiXG4gICAgICA+PC92Zi1jaGF0Ym90LXNlbGVjdG9yPlxuXG4gICAgICA8ZGl2ICpuZ0lmPVwiIWNvbmZpZz8uc2VsZWN0b3JDb250ZXh0XCIgY2xhc3M9XCJ2Zi1jaGF0Ym90LXNlbGVjdG9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LXNlbGVjdG9yX190aXRsZVwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnPy5pY29ucz8ubWFpbl9sb2dvX3VybFwiXG4gICAgICAgICAgICBbc3JjXT1cImNvbmZpZz8uaWNvbnM/Lm1haW5fbG9nb191cmxcIlxuICAgICAgICAgICAgW2FsdF09XCJjb25maWc/LnRpdGxlIHx8ICdBSSBBc3Npc3RhbnQnXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LXNlbGVjdG9yX190aXRsZS1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZmLWNoYXRib3Qtc2VsZWN0b3JfX21haW4tdGV4dFwiPlxuICAgICAgICAgICAgICB7eyBjb25maWc/LnRpdGxlIHx8ICdBSSBBc3Npc3RhbnQnIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1tb2RhbF9faGVhZGVyLXJpZ2h0XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX21pbmltaXplXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIk1pbmltaXplIGNoYXRib3RcIlxuICAgICAgICBkYXRhLXZmLWpzLWNoYXRib3QtbW9kYWwtbWluaW1pemVcbiAgICAgICAgKGNsaWNrKT1cIm1pbmltaXplLmVtaXQoKVwiXG4gICAgICA+XG4gICAgICAgIDxpbWcgKm5nSWY9XCJjb25maWc/Lmljb25zPy5taW5pbWl6ZVwiIFtzcmNdPVwiY29uZmlnPy5pY29ucz8ubWluaW1pemVcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX2Nsb3NlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlIGNoYXRib3RcIlxuICAgICAgICBkYXRhLXZmLWpzLWNoYXRib3QtbW9kYWwtY2xvc2VcbiAgICAgICAgKGNsaWNrKT1cImNsb3NlLmVtaXQoKVwiXG4gICAgICA+XG4gICAgICAgIDxpbWcgKm5nSWY9XCJjb25maWc/Lmljb25zPy5jbG9zZVwiIFtzcmNdPVwiY29uZmlnPy5pY29ucz8uY2xvc2VcIiBhbHQ9XCJcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsIHwgdmYtdS1iYWNrZ3JvdW5kLWNvbG9yLXVpLS1ncmV5LS1saWdodFwiIGRhdGEtdmYtanMtY2hhdGJvdC1tb2RhbD5cbiAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1tb2RhbF9fY29udGVudFwiIGRhdGEtdmYtanMtY2hhdGJvdC1tb2RhbC1jb250ZW50PlxuICAgICAgPHZmLWNoYXRib3Qtd2VsY29tZVxuICAgICAgICAqbmdJZj1cImNvbmZpZz8uZmVhdHVyZXM/LmVuYWJsZV93ZWxjb21lXCJcbiAgICAgICAgW3FhRGF0YV09XCJxYURhdGFcIlxuICAgICAgICBbd2VsY29tZV9sb2dvXT1cImNvbmZpZz8ud2VsY29tZV9sb2dvID8/IGZhbHNlXCJcbiAgICAgICAgW3dlbGNvbWVfbG9nb191cmxdPVwiY29uZmlnPy5pY29ucz8ubWFpbl9sb2dvX3VybCA/PyAnJ1wiXG4gICAgICAgIFt3ZWxjb21lX2xvZ29fYWx0XT1cImNvbmZpZz8ud2VsY29tZV9sb2dvX2FsdCA/PyAnQUkgQXNzaXN0YW50J1wiXG4gICAgICAgIFt3ZWxjb21lX3RpdGxlXT1cImNvbmZpZz8udGl0bGUgPz8gJydcIlxuICAgICAgICBbd2VsY29tZV9tZXNzYWdlXT1cImNvbmZpZz8ud2VsY29tZV9tZXNzYWdlID8/ICcnXCJcbiAgICAgICAgW3dlbGNvbWVfc3VnZ2VzdGlvbnNfdGl0bGVdPVwiY29uZmlnPy53ZWxjb21lX3N1Z2dlc3Rpb25zX3RpdGxlID8/ICcnXCJcbiAgICAgICAgW2VuYWJsZV93ZWxjb21lX3N1Z2dlc3Rpb25zXT1cImNvbmZpZz8uZmVhdHVyZXM/LmVuYWJsZV93ZWxjb21lX3N1Z2dlc3Rpb25zID8/IGZhbHNlXCJcbiAgICAgICAgW3dlbGNvbWVfbWF4X3N1Z2dlc3Rpb25zXT1cImNvbmZpZz8ud2VsY29tZV9tYXhfc3VnZ2VzdGlvbnMgPz8gNFwiXG4gICAgICAgIFtxYV9kYXRhX3VybF09XCJjb25maWc/LmFwaT8ucWFfZGF0YV91cmwgPz8gJydcIlxuICAgICAgICBbZW5hYmxlX3FhX2RhdGFfbG9hZGluZ109XCJjb25maWc/LmZlYXR1cmVzPy5lbmFibGVfcWFfZGF0YV9sb2FkaW5nID8/IHRydWVcIlxuICAgICAgICBbZW5hYmxlX3ByZWRlZmluZWRfcWFdPVwiY29uZmlnPy5mZWF0dXJlcz8uZW5hYmxlX3ByZWRlZmluZWRfcWEgPz8gdHJ1ZVwiXG4gICAgICAgIFtlbmFibGVfZmFsbGJhY2tfcmVzcG9uc2VzXT1cImNvbmZpZz8uZmVhdHVyZXM/LmVuYWJsZV9mYWxsYmFja19yZXNwb25zZXMgPz8gdHJ1ZVwiXG4gICAgICA+PC92Zi1jaGF0Ym90LXdlbGNvbWU+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19tZXNzYWdlcyB2Zi11LW1hcmdpbl9fYm90dG9tLS00MDBcIlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgJ3ZmLWNoYXRib3QtbW9kYWxfX21lc3NhZ2VzLW5vLXNjcm9sbGJhcic6IGNvbmZpZz8uYmVoYXZpb3I/LnNob3dfc2Nyb2xsYmFyID09PSBmYWxzZVxuICAgICAgICB9XCJcbiAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLW1lc3NhZ2VzXG4gICAgICAgIFthdHRyLmRhdGEtYXV0by1zY3JvbGxdPVwiY29uZmlnPy5iZWhhdmlvcj8uYXV0b19zY3JvbGxcIlxuICAgICAgICByb2xlPVwicmVnaW9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkNoYXQgbWVzc2FnZXNcIlxuICAgICAgPlxuICAgICAgICA8dmYtY2hhdGJvdC1wcm9tcHRcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbXNnIG9mIG1lc3NhZ2VzXCJcbiAgICAgICAgICBbdHlwZV09XCJtc2cudHlwZSA/PyAnJ1wiXG4gICAgICAgICAgW2F2YXRhcl09XCJtc2cuYXZhdGFyXCJcbiAgICAgICAgICBbY29udGVudF09XCJtc2cuY29udGVudCA/PyAnJ1wiXG4gICAgICAgICAgW3NvdXJjZXNdPVwic291cmNlc1wiXG4gICAgICAgICAgW3Byb21wdHNdPVwicHJvbXB0c1wiXG4gICAgICAgICAgW2FsbG93RmVlZGJhY2tdPVwiY29uZmlnPy5mZWF0dXJlcz8uZW5hYmxlX2ZlZWRiYWNrID8/IHRydWVcIlxuICAgICAgICA+PC92Zi1jaGF0Ym90LXByb21wdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiY29uZmlnPy5kaXNjbGFpbWVyICYmIGNvbmZpZz8uZmVhdHVyZXM/LmVuYWJsZV9kaXNjbGFpbWVyXCJcbiAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19kaXNjbGFpbWVyXCJcbiAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLWRpc2NsYWltZXJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZmLWJhbm5lciB2Zi1iYW5uZXItLWFsZXJ0IHZmLWJhbm5lci0taW5mb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1iYW5uZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidmYtYmFubmVyX190ZXh0XCIgW2lubmVySFRNTF09XCJjb25maWcuZGlzY2xhaW1lclwiPjwvcD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZSBub3RpZmljYXRpb24gYmFubmVyXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ2Zi1idXR0b24gdmYtYnV0dG9uLS1pY29uIHZmLWJ1dHRvbi0tZGlzbWlzcyB8IHZmLWJhbm5lcl9fYnV0dG9uXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNvbmZpZz8ub25EaXNtaXNzRGlzY2xhaW1lcj8uKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPHRpdGxlPmRpc21pc3MgYmFubmVyPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjMsMTIuMTc5YS4yNS4yNSwwLDAsMSwwLS4zNTRsOS4yNjMtOS4yNjJBMS41LjUsMCwwLDAsMjEuNDM5LjQ0MkwxMi4xNzcsOS43YS4yNS4yNSwwLDAsMS0uMzU0LDBMMi41NjEuNDQyQTEuNSwxLjUsMCwwLDAsLjQzOSwyLjU2M0w5LjcsMTEuODI1YS4yNS4yNSwwLDAsMSwwLC4zNTRMLjQzOSwyMS40NDJhMS41LDEuNSwwLDAsMCwyLjEyMiwyLjEyMUwxMS44MjMsMTQuM2EuMjUuMjUsMCwwLDEsLjM1NCwwbDkuMjYyLDkuMjYzYTEuNSwxLjUsMCwwLDAsMi4xMjItMi4xMjFaXCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19pbnB1dC1jb250YWluZXJcIiByb2xlPVwicmVnaW9uXCIgYXJpYS1sYWJlbD1cIkNoYXQgbWVzc2FnZSBpbnB1dFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX2lucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwidmYtdS1zci1vbmx5XCIgaWQ9XCJ2Zi1jaGF0Ym90LW1vZGFsLWlucHV0LWxhYmVsXCIgZm9yPVwidmYtY2hhdGJvdC1tb2RhbC1pbnB1dFwiPkFzayBtZTwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPVwidmYtY2hhdGJvdC1tb2RhbC1pbnB1dFwiXG4gICAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLWlucHV0XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidmYtY2hhdGJvdC1tb2RhbC1pbnB1dC1sYWJlbFwiXG4gICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19pbnB1dCB2Zi1mb3JtX190ZXh0YXJlYSB2Zi11LXBhZGRpbmdfX2xlZnQtLTQwMFwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZz8uaW5wdXRfcGxhY2Vob2xkZXJcIlxuICAgICAgICAgIHJvd3M9XCIxXCJcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19zZW5kLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJTZW5kIG1lc3NhZ2VcIiBkYXRhLXZmLWpzLWNoYXRib3QtbW9kYWwtc2VuZCB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgPGltZyBbc3JjXT1cImNvbmZpZz8uaWNvbnM/LnNlbmRfYnV0dG9uXCIgYWx0PVwiU2VuZFwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb25maWc/LmZvb3Rub3RlXCIgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19mb290bm90ZSB2Zi11LW1hcmdpbl9fdG9wLS0yMDAgdmYtdS1tYXJnaW5fX2JvdHRvbS0tMjAwXCIgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLWZvb3Rub3RlIFtpbm5lckhUTUxdPVwiY29uZmlnLmZvb3Rub3RlXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8dmYtY2hhdGJvdC1kaWFsb2dcbiAgICAgIFt0aXRsZV09XCJkaWFsb2dUaXRsZVwiXG4gICAgICBbbWVzc2FnZV09XCJkaWFsb2dNZXNzYWdlXCJcbiAgICAgIFtjYW5jZWxMYWJlbF09XCJkaWFsb2dDYW5jZWxMYWJlbFwiXG4gICAgICBbY29uZmlybUxhYmVsXT1cImRpYWxvZ0NvbmZpcm1MYWJlbFwiXG4gICAgPjwvdmYtY2hhdGJvdC1kaWFsb2c+XG5cbiAgICA8dGVtcGxhdGUgaWQ9XCJ1c2VyLW1lc3NhZ2UtdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSBpZD1cImFzc2lzdGFudC1tZXNzYWdlLXRlbXBsYXRlXCI+PC90ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGUgaWQ9XCJzaW5nbGUtYWN0aW9uLXByb21wdC10ZW1wbGF0ZVwiPjwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlIGlkPVwibG9hZGluZy1pbmRpY2F0b3ItdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSBpZD1cImFjdGlvbi1wcm9tcHRzLXRlbXBsYXRlXCI+PC90ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGUgaWQ9XCJmZWVkYmFjay1wb3NpdGl2ZS10ZW1wbGF0ZVwiPjwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlIGlkPVwiZmVlZGJhY2stbmVnYXRpdmUtdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgVmZDaGF0Ym90TW9kYWxBbmd1bGFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlnOiBWZkNoYXRib3RNb2RhbENvbmZpZyA9IHsgdHlwZTogJ21vZGFsJyB9O1xuICBASW5wdXQoKSBtZXNzYWdlczogQXJyYXk8eyB0eXBlPzogc3RyaW5nOyBhdmF0YXI/OiB1bmtub3duOyBjb250ZW50Pzogc3RyaW5nIH0+ID0gW107XG4gIEBJbnB1dCgpIHNvdXJjZXM6IHVua25vd25bXSA9IFtdO1xuICBASW5wdXQoKSBwcm9tcHRzOiB1bmtub3duW10gPSBbXTtcbiAgQElucHV0KCkgcWFEYXRhOiB1bmtub3duW10gPSBbXTtcbiAgQElucHV0KCkgaXNPcGVuID0gZmFsc2U7XG5cbiAgZGlhbG9nVGl0bGUgPSAnQ2xvc2UgY2hhdCBhbmQgZGVsZXRlIGNvbnZlcnNhdGlvbj8nO1xuICBkaWFsb2dNZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbG9zZSB0aGUgY2hhdD8gPGJyPllvdXIgY3VycmVudCBjb252ZXJzYXRpb24gaGlzdG9yeSB3aWxsIGJlIHBlcm1hbmVudGx5IGRlbGV0ZWQuJztcbiAgZGlhbG9nQ2FuY2VsTGFiZWwgPSAnS2VlcCBjaGF0IG9wZW4nO1xuICBkaWFsb2dDb25maXJtTGFiZWwgPSAnQ2xvc2UgYW5kIGRlbGV0ZSc7XG5cbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbWluaW1pemUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZ2V0IGNvbmZpZ0pzb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcgfHwge30pO1xuICB9XG59XG5cbmV4cG9ydCAqIGZyb20gJy4vdmYtY2hhdGJvdC1tb2RhbC5hbmd1bGFyLm1vZHVsZSc7XG4iXX0=