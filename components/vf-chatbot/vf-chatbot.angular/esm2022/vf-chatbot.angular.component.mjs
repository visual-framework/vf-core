import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "vf-chatbot-fab.angular";
import * as i3 from "vf-chatbot-selector.angular";
import * as i4 from "vf-chatbot-welcome.angular";
import * as i5 from "vf-chatbot-prompt.angular";
import * as i6 from "vf-chatbot-dialog.angular";
export class VfChatbotAngularComponent {
    constructor(renderer, elementRef, document) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.document = document;
        this.config = { type: 'modal' };
        this.qaData = [];
        this.messages = [];
        this.sources = [];
        this.prompts = [];
        this.notificationCount = 0;
        this.isOpen = false;
        this.dialogTitle = 'Close chat and delete conversation?';
        this.dialogMessage = 'Are you sure you want to close the chat? <br>Your current conversation history will be permanently deleted.';
        this.dialogCancelLabel = 'Keep chat open';
        this.dialogConfirmLabel = 'Close and delete';
        this.loadedScripts = new Set();
    }
    async ngAfterViewInit() {
        if (this.config?.type !== 'modal') {
            return;
        }
        await this.loadModalScripts();
        const initVFChatbot = window.initVFChatbot;
        if (typeof initVFChatbot === 'function') {
            initVFChatbot(this.config);
        }
    }
    async loadModalScripts() {
        const moduleScripts = [
            '/assets/vf-chatbot-fab/vf-chatbot-fab.js',
            '/assets/vf-chatbot-dialog/vf-chatbot-dialog.js',
            '/assets/vf-chatbot-feedback/vf-chatbot-feedback.js',
            '/assets/vf-chatbot-selector/vf-chatbot-selector.js',
            '/assets/vf-chatbot-sources/vf-chatbot-sources.js',
            '/assets/vf-chatbot-welcome/vf-chatbot-welcome.js'
        ];
        const moduleScriptsWithDependencies = [
            '/assets/vf-chatbot-standalone/vf-chatbot-standalone.js',
            '/assets/vf-chatbot-modal/vf-chatbot-modal.js',
            '/assets/vf-chatbot/vf-chatbot.js'
        ];
        for (const scriptSrc of moduleScripts) {
            await this.loadSingleScript(scriptSrc);
        }
        for (const scriptSrc of moduleScriptsWithDependencies) {
            await this.loadSingleScript(scriptSrc);
        }
    }
    async loadSingleScript(src) {
        if (this.loadedScripts.has(src)) {
            return;
        }
        try {
            await import(/* webpackIgnore: true */ src);
            this.loadedScripts.add(src);
            return;
        }
        catch {
            // Fall through to the script tag loader.
        }
        await new Promise((resolve) => {
            const existingScript = this.document.querySelector(`script[src="${src}"]`);
            if (existingScript) {
                this.loadedScripts.add(src);
                resolve();
                return;
            }
            const script = this.renderer.createElement('script');
            script.type = 'module';
            script.src = src;
            script.async = true;
            script.onload = () => {
                this.loadedScripts.add(src);
                resolve();
            };
            script.onerror = () => {
                this.loadedScripts.add(`${src}_failed`);
                resolve();
            };
            this.renderer.appendChild(this.document.head, script);
        });
    }
    openChat() {
        this.isOpen = true;
    }
    closeChat() {
        this.isOpen = false;
    }
    get modalConfigJson() {
        return JSON.stringify(this.config || {});
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotAngularComponent, selector: "vf-chatbot", inputs: { config: "config", qaData: "qaData", messages: "messages", sources: "sources", prompts: "prompts", notificationCount: "notificationCount" }, ngImport: i0, template: `
    <ng-container [ngSwitch]="config.type || 'modal'">
      <vf-chatbot-standalone
        *ngSwitchCase="'standalone'"
        [config]="config"
        [messages]="messages"
        [sources]="sources"
        [prompts]="prompts"
      ></vf-chatbot-standalone>

      <div *ngSwitchDefault class="vf-chatbot" data-vf-js-chatbot>
        <vf-chatbot-fab
          [isInactive]="isOpen"
          [notificationCount]="notificationCount"
          (click)="openChat()"
        ></vf-chatbot-fab>

        <section
          class="vf-content vf-chatbot-modal-container"
          data-vf-js-chatbot-modal-container
          [attr.data-vf-chatbot-config]="modalConfigJson"
          [class.vf-chatbot-modal-container--active]="isOpen"
          [class.vf-chatbot-modal-container--inactive]="!isOpen"
          [attr.aria-modal]="isOpen ? 'true' : 'false'"
          [attr.aria-label]="(config.title || 'AI Assistant') + ' chatbot'"
          role="dialog"
        >
          <div class="vf-chatbot-modal__header vf-u-margin__bottom--400">
            <div class="vf-chatbot-modal__header-left">
              <vf-chatbot-selector
                *ngIf="config.selectorContext"
                [context]="config.selectorContext"
              ></vf-chatbot-selector>

              <div *ngIf="!config.selectorContext" class="vf-chatbot-selector">
                <div class="vf-chatbot-selector__title">
                  <img
                    *ngIf="config.icons?.main_logo_url"
                    [src]="config.icons?.main_logo_url"
                    [alt]="config.title || 'AI Assistant'"
                  />
                  <div class="vf-chatbot-selector__title-content">
                    <span class="vf-chatbot-selector__main-text">
                      {{ config.title || 'AI Assistant' }}
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
                (click)="closeChat()"
              >
                <img
                  *ngIf="config.icons?.minimize"
                  [src]="config.icons?.minimize"
                  alt=""
                />
              </button>

              <button
                type="button"
                class="vf-chatbot-modal__close"
                aria-label="Close chatbot"
                data-vf-js-chatbot-modal-close
                (click)="closeChat()"
              >
                <img
                  *ngIf="config.icons?.close"
                  [src]="config.icons?.close"
                  alt=""
                />
              </button>
            </div>
          </div>

          <div class="vf-chatbot-modal | vf-u-background-color-ui--grey--light" data-vf-js-chatbot-modal>
            <div class="vf-chatbot-modal__content" data-vf-js-chatbot-modal-content>
              <vf-chatbot-welcome
                *ngIf="config.features?.enable_welcome"
                [qaData]="qaData"
                [welcome_logo]="config.welcome_logo ?? false"
                [welcome_logo_url]="config.icons?.main_logo_url ?? ''"
                [welcome_logo_alt]="config.welcome_logo_alt ?? 'AI Assistant'"
                [welcome_title]="config.title ?? ''"
                [welcome_message]="config.welcome_message ?? ''"
                [welcome_suggestions_title]="config.welcome_suggestions_title ?? ''"
                [enable_welcome_suggestions]="config.features?.enable_welcome_suggestions ?? false"
                [welcome_max_suggestions]="config.welcome_max_suggestions ?? 4"
                [qa_data_url]="config.api?.qa_data_url ?? ''"
                [enable_qa_data_loading]="config.features?.enable_qa_data_loading ?? true"
                [enable_predefined_qa]="config.features?.enable_predefined_qa ?? true"
                [enable_fallback_responses]="config.features?.enable_fallback_responses ?? true"
              ></vf-chatbot-welcome>

              <div
                class="vf-chatbot-modal__messages vf-u-margin__bottom--400"
                [ngClass]="{
                  'vf-chatbot-modal__messages-no-scrollbar': config.behavior?.show_scrollbar === false
                }"
                data-vf-js-chatbot-modal-messages
                [attr.data-auto-scroll]="config.behavior?.auto_scroll"
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
                  [allowFeedback]="config.features?.enable_feedback ?? true"
                ></vf-chatbot-prompt>
              </div>

              <div
                *ngIf="config.disclaimer && config.features?.enable_disclaimer"
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
                      (click)="config.onDismissDisclaimer?.()"
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
                <label class="vf-u-sr-only" id="vf-chatbot-modal-input-label" for="vf-chatbot-modal-input">
                  Ask me
                </label>
                <textarea
                  id="vf-chatbot-modal-input"
                  data-vf-js-chatbot-modal-input
                  aria-labelledby="vf-chatbot-modal-input-label"
                  class="vf-chatbot-modal__input vf-form__textarea vf-u-padding__left--400"
                  [placeholder]="config.input_placeholder"
                  rows="1"
                ></textarea>
                <button
                  class="vf-chatbot-modal__send-button"
                  aria-label="Send message"
                  data-vf-js-chatbot-modal-send
                  type="button"
                >
                  <img [src]="config.icons?.send_button" alt="Send" />
                </button>
              </div>

              <div
                *ngIf="config.footnote"
                class="vf-chatbot-modal__footnote vf-u-margin__top--200 vf-u-margin__bottom--200"
                data-vf-js-chatbot-modal-footnote
                [innerHTML]="config.footnote"
              ></div>
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
      </div>
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i2.VfChatbotFabAngularComponent, selector: "vf-chatbot-fab", inputs: ["notificationCount", "isInactive"] }, { kind: "component", type: i3.VfChatbotSelectorAngularComponent, selector: "vf-chatbot-selector", inputs: ["chatbotRoutes", "context"] }, { kind: "component", type: i4.VfChatbotWelcomeAngularComponent, selector: "vf-chatbot-welcome", inputs: ["qaData", "welcome_logo", "welcome_logo_url", "welcome_logo_alt", "welcome_title", "welcome_message", "welcome_suggestions_title", "enable_welcome_suggestions", "welcome_max_suggestions", "enable_qa_data_loading", "enable_predefined_qa", "enable_fallback_responses", "qa_data_url"] }, { kind: "component", type: i5.VfChatbotPromptAngularComponent, selector: "vf-chatbot-prompt", inputs: ["type", "isLoading", "avatar", "content", "sources", "prompts", "allowFeedback"] }, { kind: "component", type: i6.VfChatbotDialogAngularComponent, selector: "vf-chatbot-dialog", inputs: ["title", "message", "cancelLabel", "confirmLabel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot',
                    template: `
    <ng-container [ngSwitch]="config.type || 'modal'">
      <vf-chatbot-standalone
        *ngSwitchCase="'standalone'"
        [config]="config"
        [messages]="messages"
        [sources]="sources"
        [prompts]="prompts"
      ></vf-chatbot-standalone>

      <div *ngSwitchDefault class="vf-chatbot" data-vf-js-chatbot>
        <vf-chatbot-fab
          [isInactive]="isOpen"
          [notificationCount]="notificationCount"
          (click)="openChat()"
        ></vf-chatbot-fab>

        <section
          class="vf-content vf-chatbot-modal-container"
          data-vf-js-chatbot-modal-container
          [attr.data-vf-chatbot-config]="modalConfigJson"
          [class.vf-chatbot-modal-container--active]="isOpen"
          [class.vf-chatbot-modal-container--inactive]="!isOpen"
          [attr.aria-modal]="isOpen ? 'true' : 'false'"
          [attr.aria-label]="(config.title || 'AI Assistant') + ' chatbot'"
          role="dialog"
        >
          <div class="vf-chatbot-modal__header vf-u-margin__bottom--400">
            <div class="vf-chatbot-modal__header-left">
              <vf-chatbot-selector
                *ngIf="config.selectorContext"
                [context]="config.selectorContext"
              ></vf-chatbot-selector>

              <div *ngIf="!config.selectorContext" class="vf-chatbot-selector">
                <div class="vf-chatbot-selector__title">
                  <img
                    *ngIf="config.icons?.main_logo_url"
                    [src]="config.icons?.main_logo_url"
                    [alt]="config.title || 'AI Assistant'"
                  />
                  <div class="vf-chatbot-selector__title-content">
                    <span class="vf-chatbot-selector__main-text">
                      {{ config.title || 'AI Assistant' }}
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
                (click)="closeChat()"
              >
                <img
                  *ngIf="config.icons?.minimize"
                  [src]="config.icons?.minimize"
                  alt=""
                />
              </button>

              <button
                type="button"
                class="vf-chatbot-modal__close"
                aria-label="Close chatbot"
                data-vf-js-chatbot-modal-close
                (click)="closeChat()"
              >
                <img
                  *ngIf="config.icons?.close"
                  [src]="config.icons?.close"
                  alt=""
                />
              </button>
            </div>
          </div>

          <div class="vf-chatbot-modal | vf-u-background-color-ui--grey--light" data-vf-js-chatbot-modal>
            <div class="vf-chatbot-modal__content" data-vf-js-chatbot-modal-content>
              <vf-chatbot-welcome
                *ngIf="config.features?.enable_welcome"
                [qaData]="qaData"
                [welcome_logo]="config.welcome_logo ?? false"
                [welcome_logo_url]="config.icons?.main_logo_url ?? ''"
                [welcome_logo_alt]="config.welcome_logo_alt ?? 'AI Assistant'"
                [welcome_title]="config.title ?? ''"
                [welcome_message]="config.welcome_message ?? ''"
                [welcome_suggestions_title]="config.welcome_suggestions_title ?? ''"
                [enable_welcome_suggestions]="config.features?.enable_welcome_suggestions ?? false"
                [welcome_max_suggestions]="config.welcome_max_suggestions ?? 4"
                [qa_data_url]="config.api?.qa_data_url ?? ''"
                [enable_qa_data_loading]="config.features?.enable_qa_data_loading ?? true"
                [enable_predefined_qa]="config.features?.enable_predefined_qa ?? true"
                [enable_fallback_responses]="config.features?.enable_fallback_responses ?? true"
              ></vf-chatbot-welcome>

              <div
                class="vf-chatbot-modal__messages vf-u-margin__bottom--400"
                [ngClass]="{
                  'vf-chatbot-modal__messages-no-scrollbar': config.behavior?.show_scrollbar === false
                }"
                data-vf-js-chatbot-modal-messages
                [attr.data-auto-scroll]="config.behavior?.auto_scroll"
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
                  [allowFeedback]="config.features?.enable_feedback ?? true"
                ></vf-chatbot-prompt>
              </div>

              <div
                *ngIf="config.disclaimer && config.features?.enable_disclaimer"
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
                      (click)="config.onDismissDisclaimer?.()"
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
                <label class="vf-u-sr-only" id="vf-chatbot-modal-input-label" for="vf-chatbot-modal-input">
                  Ask me
                </label>
                <textarea
                  id="vf-chatbot-modal-input"
                  data-vf-js-chatbot-modal-input
                  aria-labelledby="vf-chatbot-modal-input-label"
                  class="vf-chatbot-modal__input vf-form__textarea vf-u-padding__left--400"
                  [placeholder]="config.input_placeholder"
                  rows="1"
                ></textarea>
                <button
                  class="vf-chatbot-modal__send-button"
                  aria-label="Send message"
                  data-vf-js-chatbot-modal-send
                  type="button"
                >
                  <img [src]="config.icons?.send_button" alt="Send" />
                </button>
              </div>

              <div
                *ngIf="config.footnote"
                class="vf-chatbot-modal__footnote vf-u-margin__top--200 vf-u-margin__bottom--200"
                data-vf-js-chatbot-modal-footnote
                [innerHTML]="config.footnote"
              ></div>
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
      </div>
    </ng-container>
  `,
                }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }], propDecorators: { config: [{
                type: Input
            }], qaData: [{
                type: Input
            }], messages: [{
                type: Input
            }], sources: [{
                type: Input
            }], prompts: [{
                type: Input
            }], notificationCount: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC5hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3ZmLWNoYXRib3QuYW5ndWxhci9zcmMvbGliL3ZmLWNoYXRib3QuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsTUFBTSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7O0FBa1AzQyxNQUFNLE9BQU8seUJBQXlCO0lBZ0JwQyxZQUNVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ0osUUFBa0I7UUFGcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ0osYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWxCckMsV0FBTSxHQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLFdBQU0sR0FBVSxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixnQkFBVyxHQUFHLHFDQUFxQyxDQUFDO1FBQ3BELGtCQUFhLEdBQUcsNkdBQTZHLENBQUM7UUFDOUgsc0JBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFFaEMsa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO0lBTXZDLENBQUM7SUFFSixLQUFLLENBQUMsZUFBZTtRQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLE9BQU87UUFDVCxD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akIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQzsrR0E1R1UseUJBQXlCLHFFQW1CMUIsUUFBUTttR0FuQlAseUJBQXlCLHdNQXBNMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa01UOzs0RkFFVSx5QkFBeUI7a0JBdE1yQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa01UO2lCQUNGOzswQkFvQkksTUFBTTsyQkFBQyxRQUFRO3lDQWxCVCxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgdHlwZSBWZkNoYXRib3RNb2RlID0gJ21vZGFsJyB8ICdzdGFuZGFsb25lJztcblxuZXhwb3J0IGludGVyZmFjZSBWZkNoYXRib3RDb25maWcge1xuICB0eXBlPzogVmZDaGF0Ym90TW9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHdlbGNvbWVfbG9nbz86IGJvb2xlYW47XG4gIHdlbGNvbWVfbWVzc2FnZT86IHN0cmluZztcbiAgd2VsY29tZV9sb2dvX2FsdD86IHN0cmluZztcbiAgd2VsY29tZV9zdWdnZXN0aW9uc190aXRsZT86IHN0cmluZztcbiAgaW5wdXRfcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHdlbGNvbWVfbWF4X3N1Z2dlc3Rpb25zPzogbnVtYmVyO1xuICBkaXNjbGFpbWVyPzogc3RyaW5nO1xuICBmb290bm90ZT86IHN0cmluZztcbiAgaWNvbnM/OiB7XG4gICAgYXNzaXN0YW50X2F2YXRhcj86IHN0cmluZztcbiAgICB1c2VyX2F2YXRhcj86IHN0cmluZztcbiAgICBzZW5kX2J1dHRvbj86IHN0cmluZztcbiAgICBtaW5pbWl6ZT86IHN0cmluZztcbiAgICBjbG9zZT86IHN0cmluZztcbiAgICBtYWluX2xvZ29fdXJsPzogc3RyaW5nO1xuICB9O1xuICBzZWxlY3RvckNvbnRleHQ/OiB1bmtub3duO1xuICBmZWF0dXJlcz86IHtcbiAgICBlbmFibGVfd2VsY29tZT86IGJvb2xlYW47XG4gICAgZW5hYmxlX3dlbGNvbWVfc3VnZ2VzdGlvbnM/OiBib29sZWFuO1xuICAgIGVuYWJsZV9xYV9kYXRhX2xvYWRpbmc/OiBib29sZWFuO1xuICAgIGVuYWJsZV9wcmVkZWZpbmVkX3FhPzogYm9vbGVhbjtcbiAgICBlbmFibGVfZmFsbGJhY2tfcmVzcG9uc2VzPzogYm9vbGVhbjtcbiAgICBlbmFibGVfZmVlZGJhY2s/OiBib29sZWFuO1xuICAgIGVuYWJsZV9kaXNjbGFpbWVyPzogYm9vbGVhbjtcbiAgICBlbmFibGVfdHlwaW5nX2luZGljYXRvcj86IGJvb2xlYW47XG4gIH07XG4gIGJlaGF2aW9yPzoge1xuICAgIHNob3dfc2Nyb2xsYmFyPzogYm9vbGVhbjtcbiAgICBhdXRvX3Njcm9sbD86IGJvb2xlYW47XG4gIH07XG4gIGFwaT86IHtcbiAgICBxYV9kYXRhX3VybD86IHN0cmluZztcbiAgfTtcbiAgb25EaXNtaXNzRGlzY2xhaW1lcj86ICgpID0+IHZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmLWNoYXRib3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbmZpZy50eXBlIHx8ICdtb2RhbCdcIj5cbiAgICAgIDx2Zi1jaGF0Ym90LXN0YW5kYWxvbmVcbiAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidzdGFuZGFsb25lJ1wiXG4gICAgICAgIFtjb25maWddPVwiY29uZmlnXCJcbiAgICAgICAgW21lc3NhZ2VzXT1cIm1lc3NhZ2VzXCJcbiAgICAgICAgW3NvdXJjZXNdPVwic291cmNlc1wiXG4gICAgICAgIFtwcm9tcHRzXT1cInByb21wdHNcIlxuICAgICAgPjwvdmYtY2hhdGJvdC1zdGFuZGFsb25lPlxuXG4gICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJ2Zi1jaGF0Ym90XCIgZGF0YS12Zi1qcy1jaGF0Ym90PlxuICAgICAgICA8dmYtY2hhdGJvdC1mYWJcbiAgICAgICAgICBbaXNJbmFjdGl2ZV09XCJpc09wZW5cIlxuICAgICAgICAgIFtub3RpZmljYXRpb25Db3VudF09XCJub3RpZmljYXRpb25Db3VudFwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9wZW5DaGF0KClcIlxuICAgICAgICA+PC92Zi1jaGF0Ym90LWZhYj5cblxuICAgICAgICA8c2VjdGlvblxuICAgICAgICAgIGNsYXNzPVwidmYtY29udGVudCB2Zi1jaGF0Ym90LW1vZGFsLWNvbnRhaW5lclwiXG4gICAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLWNvbnRhaW5lclxuICAgICAgICAgIFthdHRyLmRhdGEtdmYtY2hhdGJvdC1jb25maWddPVwibW9kYWxDb25maWdKc29uXCJcbiAgICAgICAgICBbY2xhc3MudmYtY2hhdGJvdC1tb2RhbC1jb250YWluZXItLWFjdGl2ZV09XCJpc09wZW5cIlxuICAgICAgICAgIFtjbGFzcy52Zi1jaGF0Ym90LW1vZGFsLWNvbnRhaW5lci0taW5hY3RpdmVdPVwiIWlzT3BlblwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1tb2RhbF09XCJpc09wZW4gPyAndHJ1ZScgOiAnZmFsc2UnXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIihjb25maWcudGl0bGUgfHwgJ0FJIEFzc2lzdGFudCcpICsgJyBjaGF0Ym90J1wiXG4gICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1tb2RhbF9faGVhZGVyIHZmLXUtbWFyZ2luX19ib3R0b20tLTQwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX2hlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgIDx2Zi1jaGF0Ym90LXNlbGVjdG9yXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcuc2VsZWN0b3JDb250ZXh0XCJcbiAgICAgICAgICAgICAgICBbY29udGV4dF09XCJjb25maWcuc2VsZWN0b3JDb250ZXh0XCJcbiAgICAgICAgICAgICAgPjwvdmYtY2hhdGJvdC1zZWxlY3Rvcj5cblxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWNvbmZpZy5zZWxlY3RvckNvbnRleHRcIiBjbGFzcz1cInZmLWNoYXRib3Qtc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1zZWxlY3Rvcl9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcuaWNvbnM/Lm1haW5fbG9nb191cmxcIlxuICAgICAgICAgICAgICAgICAgICBbc3JjXT1cImNvbmZpZy5pY29ucz8ubWFpbl9sb2dvX3VybFwiXG4gICAgICAgICAgICAgICAgICAgIFthbHRdPVwiY29uZmlnLnRpdGxlIHx8ICdBSSBBc3Npc3RhbnQnXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1zZWxlY3Rvcl9fdGl0bGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZmLWNoYXRib3Qtc2VsZWN0b3JfX21haW4tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGNvbmZpZy50aXRsZSB8fCAnQUkgQXNzaXN0YW50JyB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX2hlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19taW5pbWl6ZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1pbmltaXplIGNoYXRib3RcIlxuICAgICAgICAgICAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC1tb2RhbC1taW5pbWl6ZVxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjbG9zZUNoYXQoKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5pY29ucz8ubWluaW1pemVcIlxuICAgICAgICAgICAgICAgICAgW3NyY109XCJjb25maWcuaWNvbnM/Lm1pbmltaXplXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1tb2RhbF9fY2xvc2VcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBjaGF0Ym90XCJcbiAgICAgICAgICAgICAgICBkYXRhLXZmLWpzLWNoYXRib3QtbW9kYWwtY2xvc2VcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xvc2VDaGF0KClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcuaWNvbnM/LmNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIFtzcmNdPVwiY29uZmlnLmljb25zPy5jbG9zZVwiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1tb2RhbCB8IHZmLXUtYmFja2dyb3VuZC1jb2xvci11aS0tZ3JleS0tbGlnaHRcIiBkYXRhLXZmLWpzLWNoYXRib3QtbW9kYWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1tb2RhbF9fY29udGVudFwiIGRhdGEtdmYtanMtY2hhdGJvdC1tb2RhbC1jb250ZW50PlxuICAgICAgICAgICAgICA8dmYtY2hhdGJvdC13ZWxjb21lXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcuZmVhdHVyZXM/LmVuYWJsZV93ZWxjb21lXCJcbiAgICAgICAgICAgICAgICBbcWFEYXRhXT1cInFhRGF0YVwiXG4gICAgICAgICAgICAgICAgW3dlbGNvbWVfbG9nb109XCJjb25maWcud2VsY29tZV9sb2dvID8/IGZhbHNlXCJcbiAgICAgICAgICAgICAgICBbd2VsY29tZV9sb2dvX3VybF09XCJjb25maWcuaWNvbnM/Lm1haW5fbG9nb191cmwgPz8gJydcIlxuICAgICAgICAgICAgICAgIFt3ZWxjb21lX2xvZ29fYWx0XT1cImNvbmZpZy53ZWxjb21lX2xvZ29fYWx0ID8/ICdBSSBBc3Npc3RhbnQnXCJcbiAgICAgICAgICAgICAgICBbd2VsY29tZV90aXRsZV09XCJjb25maWcudGl0bGUgPz8gJydcIlxuICAgICAgICAgICAgICAgIFt3ZWxjb21lX21lc3NhZ2VdPVwiY29uZmlnLndlbGNvbWVfbWVzc2FnZSA/PyAnJ1wiXG4gICAgICAgICAgICAgICAgW3dlbGNvbWVfc3VnZ2VzdGlvbnNfdGl0bGVdPVwiY29uZmlnLndlbGNvbWVfc3VnZ2VzdGlvbnNfdGl0bGUgPz8gJydcIlxuICAgICAgICAgICAgICAgIFtlbmFibGVfd2VsY29tZV9zdWdnZXN0aW9uc109XCJjb25maWcuZmVhdHVyZXM/LmVuYWJsZV93ZWxjb21lX3N1Z2dlc3Rpb25zID8/IGZhbHNlXCJcbiAgICAgICAgICAgICAgICBbd2VsY29tZV9tYXhfc3VnZ2VzdGlvbnNdPVwiY29uZmlnLndlbGNvbWVfbWF4X3N1Z2dlc3Rpb25zID8/IDRcIlxuICAgICAgICAgICAgICAgIFtxYV9kYXRhX3VybF09XCJjb25maWcuYXBpPy5xYV9kYXRhX3VybCA/PyAnJ1wiXG4gICAgICAgICAgICAgICAgW2VuYWJsZV9xYV9kYXRhX2xvYWRpbmddPVwiY29uZmlnLmZlYXR1cmVzPy5lbmFibGVfcWFfZGF0YV9sb2FkaW5nID8/IHRydWVcIlxuICAgICAgICAgICAgICAgIFtlbmFibGVfcHJlZGVmaW5lZF9xYV09XCJjb25maWcuZmVhdHVyZXM/LmVuYWJsZV9wcmVkZWZpbmVkX3FhID8/IHRydWVcIlxuICAgICAgICAgICAgICAgIFtlbmFibGVfZmFsbGJhY2tfcmVzcG9uc2VzXT1cImNvbmZpZy5mZWF0dXJlcz8uZW5hYmxlX2ZhbGxiYWNrX3Jlc3BvbnNlcyA/PyB0cnVlXCJcbiAgICAgICAgICAgICAgPjwvdmYtY2hhdGJvdC13ZWxjb21lPlxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX21lc3NhZ2VzIHZmLXUtbWFyZ2luX19ib3R0b20tLTQwMFwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgJ3ZmLWNoYXRib3QtbW9kYWxfX21lc3NhZ2VzLW5vLXNjcm9sbGJhcic6IGNvbmZpZy5iZWhhdmlvcj8uc2hvd19zY3JvbGxiYXIgPT09IGZhbHNlXG4gICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLW1lc3NhZ2VzXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvLXNjcm9sbF09XCJjb25maWcuYmVoYXZpb3I/LmF1dG9fc2Nyb2xsXCJcbiAgICAgICAgICAgICAgICByb2xlPVwicmVnaW9uXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2hhdCBtZXNzYWdlc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dmYtY2hhdGJvdC1wcm9tcHRcbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtc2cgb2YgbWVzc2FnZXNcIlxuICAgICAgICAgICAgICAgICAgW3R5cGVdPVwibXNnLnR5cGUgPz8gJydcIlxuICAgICAgICAgICAgICAgICAgW2F2YXRhcl09XCJtc2cuYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgIFtjb250ZW50XT1cIm1zZy5jb250ZW50ID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgIFtzb3VyY2VzXT1cInNvdXJjZXNcIlxuICAgICAgICAgICAgICAgICAgW3Byb21wdHNdPVwicHJvbXB0c1wiXG4gICAgICAgICAgICAgICAgICBbYWxsb3dGZWVkYmFja109XCJjb25maWcuZmVhdHVyZXM/LmVuYWJsZV9mZWVkYmFjayA/PyB0cnVlXCJcbiAgICAgICAgICAgICAgICA+PC92Zi1jaGF0Ym90LXByb21wdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnLmRpc2NsYWltZXIgJiYgY29uZmlnLmZlYXR1cmVzPy5lbmFibGVfZGlzY2xhaW1lclwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19kaXNjbGFpbWVyXCJcbiAgICAgICAgICAgICAgICBkYXRhLXZmLWpzLWNoYXRib3QtbW9kYWwtZGlzY2xhaW1lclxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWJhbm5lciB2Zi1iYW5uZXItLWFsZXJ0IHZmLWJhbm5lci0taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWJhbm5lcl9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInZmLWJhbm5lcl9fdGV4dFwiIFtpbm5lckhUTUxdPVwiY29uZmlnLmRpc2NsYWltZXJcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2Ugbm90aWZpY2F0aW9uIGJhbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ2Zi1idXR0b24gdmYtYnV0dG9uLS1pY29uIHZmLWJ1dHRvbi0tZGlzbWlzcyB8IHZmLWJhbm5lcl9fYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY29uZmlnLm9uRGlzbWlzc0Rpc2NsYWltZXI/LigpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5kaXNtaXNzIGJhbm5lcjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjMsMTIuMTc5YS4yNS4yNSwwLDAsMSwwLS4zNTRsOS4yNjMtOS4yNjJBMS41LjUsMCwwLDAsMjEuNDM5LjQ0MkwxMi4xNzcsOS43YS4yNS4yNSwwLDAsMS0uMzU0LDBMMi41NjEuNDQyQTEuNSwxLjUsMCwwLDAsLjQzOSwyLjU2M0w5LjcsMTEuODI1YS4yNS4yNSwwLDAsMSwwLC4zNTRMLjQzOSwyMS40NDJhMS41LDEuNSwwLDAsMCwyLjEyMiwyLjEyMUwxMS44MjMsMTQuM2EuMjUuMjUsMCwwLDEsLjM1NCwwbDkuMjYyLDkuMjYzYTEuNSwxLjUsMCwwLDAsMi4xMjItMi4xMjFaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX2lucHV0LWNvbnRhaW5lclwiIHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiQ2hhdCBtZXNzYWdlIGlucHV0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidmYtdS1zci1vbmx5XCIgaWQ9XCJ2Zi1jaGF0Ym90LW1vZGFsLWlucHV0LWxhYmVsXCIgZm9yPVwidmYtY2hhdGJvdC1tb2RhbC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgQXNrIG1lXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIGlkPVwidmYtY2hhdGJvdC1tb2RhbC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXZmLWpzLWNoYXRib3QtbW9kYWwtaW5wdXRcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInZmLWNoYXRib3QtbW9kYWwtaW5wdXQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19pbnB1dCB2Zi1mb3JtX190ZXh0YXJlYSB2Zi11LXBhZGRpbmdfX2xlZnQtLTQwMFwiXG4gICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLmlucHV0X3BsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCIxXCJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX3NlbmQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZW5kIG1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLXNlbmRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJjb25maWcuaWNvbnM/LnNlbmRfYnV0dG9uXCIgYWx0PVwiU2VuZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5mb290bm90ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19mb290bm90ZSB2Zi11LW1hcmdpbl9fdG9wLS0yMDAgdmYtdS1tYXJnaW5fX2JvdHRvbS0tMjAwXCJcbiAgICAgICAgICAgICAgICBkYXRhLXZmLWpzLWNoYXRib3QtbW9kYWwtZm9vdG5vdGVcbiAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImNvbmZpZy5mb290bm90ZVwiXG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dmYtY2hhdGJvdC1kaWFsb2dcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImRpYWxvZ1RpdGxlXCJcbiAgICAgICAgICAgICAgW21lc3NhZ2VdPVwiZGlhbG9nTWVzc2FnZVwiXG4gICAgICAgICAgICAgIFtjYW5jZWxMYWJlbF09XCJkaWFsb2dDYW5jZWxMYWJlbFwiXG4gICAgICAgICAgICAgIFtjb25maXJtTGFiZWxdPVwiZGlhbG9nQ29uZmlybUxhYmVsXCJcbiAgICAgICAgICAgID48L3ZmLWNoYXRib3QtZGlhbG9nPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgaWQ9XCJ1c2VyLW1lc3NhZ2UtdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlkPVwiYXNzaXN0YW50LW1lc3NhZ2UtdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlkPVwic2luZ2xlLWFjdGlvbi1wcm9tcHQtdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlkPVwibG9hZGluZy1pbmRpY2F0b3ItdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlkPVwiYWN0aW9uLXByb21wdHMtdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlkPVwiZmVlZGJhY2stcG9zaXRpdmUtdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlkPVwiZmVlZGJhY2stbmVnYXRpdmUtdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVmZDaGF0Ym90QW5ndWxhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBjb25maWc6IGFueSA9IHsgdHlwZTogJ21vZGFsJyB9O1xuICBASW5wdXQoKSBxYURhdGE6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIG1lc3NhZ2VzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBzb3VyY2VzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBwcm9tcHRzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBub3RpZmljYXRpb25Db3VudCA9IDA7XG5cbiAgaXNPcGVuID0gZmFsc2U7XG4gIGRpYWxvZ1RpdGxlID0gJ0Nsb3NlIGNoYXQgYW5kIGRlbGV0ZSBjb252ZXJzYXRpb24/JztcbiAgZGlhbG9nTWVzc2FnZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2UgdGhlIGNoYXQ/IDxicj5Zb3VyIGN1cnJlbnQgY29udmVyc2F0aW9uIGhpc3Rvcnkgd2lsbCBiZSBwZXJtYW5lbnRseSBkZWxldGVkLic7XG4gIGRpYWxvZ0NhbmNlbExhYmVsID0gJ0tlZXAgY2hhdCBvcGVuJztcbiAgZGlhbG9nQ29uZmlybUxhYmVsID0gJ0Nsb3NlIGFuZCBkZWxldGUnO1xuXG4gIHByaXZhdGUgbG9hZGVkU2NyaXB0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnRcbiAgKSB7fVxuXG4gIGFzeW5jIG5nQWZ0ZXJWaWV3SW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5jb25maWc/LnR5cGUgIT09ICdtb2RhbCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmxvYWRNb2RhbFNjcmlwdHMoKTtcblxuICAgIGNvbnN0IGluaXRWRkNoYXRib3QgPSAod2luZG93IGFzIGFueSkuaW5pdFZGQ2hhdGJvdDtcbiAgICBpZiAodHlwZW9mIGluaXRWRkNoYXRib3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGluaXRWRkNoYXRib3QodGhpcy5jb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZE1vZGFsU2NyaXB0cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtb2R1bGVTY3JpcHRzID0gW1xuICAgICAgJy9hc3NldHMvdmYtY2hhdGJvdC1mYWIvdmYtY2hhdGJvdC1mYWIuanMnLFxuICAgICAgJy9hc3NldHMvdmYtY2hhdGJvdC1kaWFsb2cvdmYtY2hhdGJvdC1kaWFsb2cuanMnLFxuICAgICAgJy9hc3NldHMvdmYtY2hhdGJvdC1mZWVkYmFjay92Zi1jaGF0Ym90LWZlZWRiYWNrLmpzJyxcbiAgICAgICcvYXNzZXRzL3ZmLWNoYXRib3Qtc2VsZWN0b3IvdmYtY2hhdGJvdC1zZWxlY3Rvci5qcycsXG4gICAgICAnL2Fzc2V0cy92Zi1jaGF0Ym90LXNvdXJjZXMvdmYtY2hhdGJvdC1zb3VyY2VzLmpzJyxcbiAgICAgICcvYXNzZXRzL3ZmLWNoYXRib3Qtd2VsY29tZS92Zi1jaGF0Ym90LXdlbGNvbWUuanMnXG4gICAgXTtcblxuICAgIGNvbnN0IG1vZHVsZVNjcmlwdHNXaXRoRGVwZW5kZW5jaWVzID0gW1xuICAgICAgJy9hc3NldHMvdmYtY2hhdGJvdC1zdGFuZGFsb25lL3ZmLWNoYXRib3Qtc3RhbmRhbG9uZS5qcycsXG4gICAgICAnL2Fzc2V0cy92Zi1jaGF0Ym90LW1vZGFsL3ZmLWNoYXRib3QtbW9kYWwuanMnLFxuICAgICAgJy9hc3NldHMvdmYtY2hhdGJvdC92Zi1jaGF0Ym90LmpzJ1xuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IHNjcmlwdFNyYyBvZiBtb2R1bGVTY3JpcHRzKSB7XG4gICAgICBhd2FpdCB0aGlzLmxvYWRTaW5nbGVTY3JpcHQoc2NyaXB0U3JjKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNjcmlwdFNyYyBvZiBtb2R1bGVTY3JpcHRzV2l0aERlcGVuZGVuY2llcykge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkU2luZ2xlU2NyaXB0KHNjcmlwdFNyYyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkU2luZ2xlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMubG9hZGVkU2NyaXB0cy5oYXMoc3JjKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyBzcmMpO1xuICAgICAgdGhpcy5sb2FkZWRTY3JpcHRzLmFkZChzcmMpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gRmFsbCB0aHJvdWdoIHRvIHRoZSBzY3JpcHQgdGFnIGxvYWRlci5cbiAgICB9XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdTY3JpcHQgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmM9XCIke3NyY31cIl1gKTtcbiAgICAgIGlmIChleGlzdGluZ1NjcmlwdCkge1xuICAgICAgICB0aGlzLmxvYWRlZFNjcmlwdHMuYWRkKHNyYyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZWRTY3JpcHRzLmFkZChzcmMpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGVkU2NyaXB0cy5hZGQoYCR7c3JjfV9mYWlsZWRgKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmhlYWQsIHNjcmlwdCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuQ2hhdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gIH1cblxuICBjbG9zZUNoYXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBtb2RhbENvbmZpZ0pzb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcgfHwge30pO1xuICB9XG59XG4iXX0=