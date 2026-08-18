import * as i0 from '@angular/core';
import { Component, Inject, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import * as i1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i2 from 'vf-chatbot-fab.angular';
import { VfChatbotFabAngularModule } from 'vf-chatbot-fab.angular';
import * as i3 from 'vf-chatbot-selector.angular';
import { VfChatbotSelectorAngularModule } from 'vf-chatbot-selector.angular';
import * as i4 from 'vf-chatbot-welcome.angular';
import { VfChatbotWelcomeAngularModule } from 'vf-chatbot-welcome.angular';
import * as i5 from 'vf-chatbot-prompt.angular';
import { VfChatbotPromptAngularModule } from 'vf-chatbot-prompt.angular';
import * as i6 from 'vf-chatbot-dialog.angular';
import { VfChatbotDialogAngularModule } from 'vf-chatbot-dialog.angular';

class VfChatbotAngularComponent {
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

class VfChatbotAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, declarations: [VfChatbotAngularComponent], imports: [CommonModule,
            FormsModule,
            VfChatbotFabAngularModule,
            VfChatbotSelectorAngularModule,
            VfChatbotWelcomeAngularModule,
            VfChatbotPromptAngularModule,
            VfChatbotDialogAngularModule], exports: [VfChatbotAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, imports: [CommonModule,
            FormsModule,
            VfChatbotFabAngularModule,
            VfChatbotSelectorAngularModule,
            VfChatbotWelcomeAngularModule,
            VfChatbotPromptAngularModule,
            VfChatbotDialogAngularModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfChatbotAngularComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        VfChatbotFabAngularModule,
                        VfChatbotSelectorAngularModule,
                        VfChatbotWelcomeAngularModule,
                        VfChatbotPromptAngularModule,
                        VfChatbotDialogAngularModule,
                        // VfChatbotStandaloneAngularModule
                    ],
                    exports: [
                        VfChatbotAngularComponent
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA,
                        NO_ERRORS_SCHEMA
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotAngularComponent, VfChatbotAngularModule };
//# sourceMappingURL=visual-framework-vf-chatbot.angular.mjs.map
