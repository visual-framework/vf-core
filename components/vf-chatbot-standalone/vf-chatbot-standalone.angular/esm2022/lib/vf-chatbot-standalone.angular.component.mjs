import { Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, Inject, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "vf-chatbot-action-prompt.angular";
import * as i3 from "vf-chatbot-selector.angular";
import * as i4 from "vf-chatbot-welcome.angular";
import * as i5 from "vf-chatbot-prompt.angular";
import * as i6 from "vf-chatbot-feedback.angular";
import * as i7 from "vf-chatbot-dialog.angular";
export class VfChatbotStandaloneAngularComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
        this.messages = [];
        this.sources = [];
        this.prompts = [];
        this.inputValue = '';
        this.onSendMessage = new EventEmitter();
        this.onInputChange = new EventEmitter();
        this.onFeedback = new EventEmitter();
        this.onDialogConfirm = new EventEmitter();
        this.onDialogCancel = new EventEmitter();
        this.qaData = [];
        this.loadedScripts = new Set();
    }
    ngOnInit() { }
    async ngAfterViewInit() {
        console.log('VF Chatbot Standalone component initializing...');
        try {
            // Load only the working scripts individually
            await this.loadWorkingScripts();
            // Initialize chatbot functionality  
            this.initializeChatbot();
        }
        catch (error) {
            console.error('Failed to load chatbot scripts:', error);
            // Fallback: try basic initialization in case scripts are already loaded
            console.log('Trying fallback initialization...');
            this.initializeChatbot();
        }
        console.log('Chatbot standalone component ready', this.standaloneRef);
    }
    /**
     * Load chatbot scripts as ES6 modules
     */
    async loadWorkingScripts() {
        console.log('Loading ES6 modules...');
        // All chatbot files are ES6 modules (have exports)
        const moduleScripts = [
            'assets/vf-chatbot-fab/vf-chatbot-fab.js',
            'assets/vf-chatbot-dialog/vf-chatbot-dialog.js',
            'assets/vf-chatbot-feedback/vf-chatbot-feedback.js',
            'assets/vf-chatbot-selector/vf-chatbot-selector.js',
            'assets/vf-chatbot-sources/vf-chatbot-sources.js',
            'assets/vf-chatbot-welcome/vf-chatbot-welcome.js'
        ];
        // These have both imports AND exports, so they need their dependencies loaded first
        const moduleScriptsWithDependencies = [
            'assets/vf-chatbot/vf-chatbot.js', // Has imports from other modules
            'assets/vf-chatbot-modal/vf-chatbot-modal.js', // Has imports from other modules
            'assets/vf-chatbot-standalone/vf-chatbot-standalone.js' // Has imports from other modules
        ];
        // Load independent modules first
        for (const scriptSrc of moduleScripts) {
            try {
                await this.loadSingleScript(scriptSrc);
            }
            catch (error) {
                console.warn(`Skipped ${scriptSrc}:`, error);
            }
        }
        // Then load modules with dependencies
        for (const scriptSrc of moduleScriptsWithDependencies) {
            try {
                await this.loadSingleScript(scriptSrc);
            }
            catch (error) {
                console.warn(`Skipped ${scriptSrc}:`, error);
            }
        }
    }
    /**
     * Load a single script as ES6 module
     */
    loadSingleScript(src) {
        return new Promise((resolve, reject) => {
            if (this.loadedScripts.has(src)) {
                console.log(`Script already loaded in cache: ${src}`);
                resolve();
                return;
            }
            // Check if script already exists in DOM
            const existingScript = this.document.querySelector(`script[src="${src}"]`);
            if (existingScript) {
                console.log(`Script already loaded in DOM: ${src}`);
                this.loadedScripts.add(src);
                resolve();
                return;
            }
            const script = this.renderer.createElement('script');
            script.type = 'module'; // Load as ES6 module
            script.src = src;
            script.async = true;
            script.onload = () => {
                this.loadedScripts.add(src);
                console.log(`Loaded ES6 module: ${src}`);
                resolve();
            };
            script.onerror = (error) => {
                console.error(`Failed to load module: ${src}`, error);
                // Mark as failed but resolve to continue with other scripts
                this.loadedScripts.add(src + '_failed');
                resolve();
            };
            this.renderer.appendChild(this.document.head, script);
        });
    }
    /**
     * Initialize chatbot functionality after scripts are loaded
     */
    initializeChatbot() {
        console.log('Initializing chatbot functionality...');
        // Access the globally exposed initialization functions
        try {
            let initializedCount = 0;
            // All potential initialization functions from ES6 modules
            const allInitFunctions = [
                'initVFChatbotFab',
                'initVFChatbotDialog',
                'initVFChatbotFeedback',
                'initVFChatbotSelector',
                'initVFChatbotSources',
                'initVFChatbotWelcome',
                'initVFChatbotStandalone', // Now loaded as ES6 module
                'initVFChatbotModal', // Now loaded as ES6 module  
                'initVFChatbot' // Now loaded as ES6 module
            ];
            allInitFunctions.forEach(funcName => {
                if (typeof window[funcName] === 'function') {
                    try {
                        window[funcName]();
                        console.log(`${funcName} initialized`);
                        initializedCount++;
                    }
                    catch (error) {
                        console.warn(`${funcName} failed to initialize:`, error);
                    }
                }
                else {
                    console.log(`${funcName} not available (module may not have loaded)`);
                }
            });
            console.log(`Chatbot initialization complete. ${initializedCount} components initialized.`);
            if (initializedCount === 0) {
                console.warn('No chatbot functions were initialized. Check that ES6 modules loaded correctly.');
            }
        }
        catch (error) {
            console.error('Error initializing chatbot functionality:', error);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotStandaloneAngularComponent, deps: [{ token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotStandaloneAngularComponent, selector: "vf-chatbot-standalone", inputs: { config: "config", messages: "messages", sources: "sources", prompts: "prompts", inputValue: "inputValue" }, outputs: { onSendMessage: "onSendMessage", onInputChange: "onInputChange", onFeedback: "onFeedback", onDialogConfirm: "onDialogConfirm", onDialogCancel: "onDialogCancel" }, viewQueries: [{ propertyName: "standaloneRef", first: true, predicate: ["standaloneRef"], descendants: true }], ngImport: i0, template: `<div
      #standaloneRef
      class="vf-content vf-chatbot-standalone-container"
      [attr.data-vf-js-chatbot-standalone-container]="true"
      [attr.data-vf-chatbot-config]="config | json"
      [attr.aria-label]="config?.title + ' chatbot'"
    >
      <!-- Header -->
      <div class="vf-chatbot-standalone__header">
        <div class="vf-chatbot-standalone__header-left">
          <ng-container *ngIf="config?.selectorContext; else fallbackSelector">
            <vf-chatbot-selector
              [context]="config?.selectorContext"
            ></vf-chatbot-selector>
          </ng-container>
          <ng-template #fallbackSelector>
            <div class="vf-chatbot-selector">
              <div class="vf-chatbot-selector__title">
                <img
                  [src]="config?.selectorContext?.selector_logo_url"
                  [alt]="config?.selectorContext?.selector_logo_title"
                />
                <div class="vf-chatbot-selector__title-content">
                  <span class="vf-chatbot-selector__main-text">
                    {{ config?.selectorContext?.selector_logo_title }}
                  </span>
                </div>
              </div>
            </div>
          </ng-template>
        </div>
      </div>

      <!-- Chatbot Main -->
      <div
        class="vf-chatbot-standalone | vf-u-background-color-ui--grey--light vf-u-margin__bottom--400"
        data-vf-js-chatbot-standalone
      >
        <div
          class="vf-chatbot-standalone__content"
          data-vf-js-chatbot-standalone-content
        >
          <!-- Welcome -->
          <vf-chatbot-welcome
            *ngIf="config?.features?.enable_welcome"
            [qaData]="qaData"
            [welcome_logo]="config?.welcome_logo"
            [welcome_logo_url]="config?.icons?.main_logo_url"
            [welcome_logo_alt]="config?.welcome_logo_alt"
            [welcome_title]="config?.title"
            [welcome_message]="config?.welcome_message"
            [welcome_suggestions_title]="config?.welcome_suggestions_title"
            [enable_welcome_suggestions]="config?.features?.enable_welcome_suggestions"
            [welcome_max_suggestions]="config?.welcome_max_suggestions"
            [qa_data_url]="config?.api?.qa_data_url"
            [enable_qa_data_loading]="config?.features?.enable_qa_data_loading"
            [enable_predefined_qa]="config?.features?.enable_predefined_qa"
            [enable_fallback_responses]="config?.features?.enable_fallback_responses"
          ></vf-chatbot-welcome>

          <!-- Messages -->
          <div
            [ngClass]="{
              'vf-chatbot-standalone__messages': config?.behavior?.show_scrollbar !== false,
              'vf-chatbot-standalone__messages-no-scrollbar': config?.behavior?.show_scrollbar === false
            }"
            data-vf-js-chatbot-standalone-messages
            [attr.data-auto-scroll]="config?.behavior?.auto_scroll"
          >
          <vf-chatbot-prompt
          *ngFor="let msg of messages"
          [type]="msg.type"
          [avatar]="msg.avatar"
          [content]="msg.content"
          [sources]="sources"
          [prompts]="prompts"
          [allowFeedback]="config?.features?.enable_feedback"
        ></vf-chatbot-prompt>
            
          </div>

          <!-- Disclaimer -->
          <div
            *ngIf="config?.disclaimer && config?.features?.enable_disclaimer"
            class="vf-chatbot-standalone__disclaimer" data-vf-js-chatbot-standalone-disclaimer
          >
            <div class="vf-banner vf-banner--alert vf-banner--info">
              <div class="vf-banner__content">
                <p
                  class="vf-banner__text"
                  [innerHTML]="config.disclaimer"
                ></p>
                <button
                  role="button"
                  aria-label="close notification banner"
                  class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
                  (click)="config?.onDismissDisclaimer?.()"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>dismiss banner</title>
                    <path
                      d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="vf-chatbot-standalone__input-container">
          <div class="vf-chatbot-standalone__input-wrapper">
            <label
              class="vf-u-sr-only"
              id="vf-chatbot-standalone-input-label"
              for="vf-chatbot-standalone-input"
              >Ask me</label
            >
            <textarea
              id="vf-chatbot-standalone-input"
              data-vf-js-chatbot-standalone-input
              aria-labelledby="vf-chatbot-standalone-input-label"
              class="vf-chatbot-standalone__input vf-form__textarea vf-u-padding__left--400"
              [placeholder]="config?.input_placeholder"
              rows="1"
            ></textarea>
            <button
              class="vf-chatbot-standalone__send-button"
              aria-label="Send message"
              data-vf-js-chatbot-standalone-send
            >
              <img [src]="config?.icons?.send_button" alt="Send" />
            </button>
          </div>

          <div
            *ngIf="config?.footnote"
            class="vf-chatbot-standalone__footnote vf-u-margin__top--200"
            [innerHTML]="config.footnote"
            data-vf-js-chatbot-standalone-footnote
          ></div>
        </div>

        <!-- Dialog -->
        <vf-chatbot-dialog
          [title]="config?.dialogProps?.title"
          [message]="config?.dialogProps?.message"
          [cancelLabel]="config?.dialogProps?.cancelLabel"
          [confirmLabel]="config?.dialogProps?.confirmLabel"
          (confirm)="onDialogConfirm.emit()"
          (cancel)="onDialogCancel.emit()"
        ></vf-chatbot-dialog>
        <template id="user-message-template">
          <vf-chatbot-prompt
          [type]= "'user'"
          [content]= "'Hello!'"
          [avatar]="{
            src: config.icons.user_avatar,
            alt: 'Your avatar',
            name: 'You'
          }"
        ></vf-chatbot-prompt>
        </template>
        <ng-container *ngIf="config.features.enable_typing_indicator">

          <template id = "loading-indicator-template">
            <vf-chatbot-prompt
              [type]="'assistant'"
              [isLoading]="true"
              [avatar]="{
                src: config.icons.assistant_avatar,
                alt: config.title,
                name: config.title
              }"
            ></vf-chatbot-prompt>
          </template>

        </ng-container>
        <template id="assistant-message-template">
        <vf-chatbot-prompt
          [type]= "'assistant'"
          [content]= "'How can I help you?'"
          [avatar]="{
            src: config.icons.assistant_avatar,
            alt: config.title,
            name: config.title
          }"
          [allowFeedback]= "config.features.enable_feedback"
          ></vf-chatbot-prompt>
        <!-- Feedback -->
        <div 
          class="vf-chatbot-feedback vf-u-margin__top--200" 
          *ngIf="config.features.enable_feedback" 
          data-vf-js-chatbot-feedback>
      </div>
        </template>
        
        <template id="single-action-prompt-template">
        <vf-chatbot-action-prompt>
        [action_text]= "",
        [action_url]= "#"
        ></vf-chatbot-action-prompt>
        </template>
        <template id="action-prompts-template">
          <div class="vf-chatbot-action-prompts vf-u-margin__top--400">
          <div class="vf-chatbot-action-prompts__list" data-vf-js-action-prompts-list>
            <!-- Individual prompts will be populated here -->
          </div>
        </div>
        </template>
        <ng-container *ngIf="config.features.enable_feedback">
        
        <template id="feedback-positive-template">
          <vf-chatbot-feedback
          [type]="'positive'"
          [feedback_options]="config.feedback_options.positive"></vf-chatbot-feedback>
        </template>
        <template id="feedback-negative-template">
        <vf-chatbot-feedback
         [type]="'negative'"
        [feedback_options]="config.feedback_options.negative"></vf-chatbot-feedback>
        </template>
       </ng-container>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.VfChatbotActionPromptAngularComponent, selector: "vf-chatbot-action-prompt", inputs: ["action_url", "action_text", "action_target"], outputs: ["actionClick"] }, { kind: "component", type: i3.VfChatbotSelectorAngularComponent, selector: "vf-chatbot-selector", inputs: ["chatbotRoutes", "context"] }, { kind: "component", type: i4.VfChatbotWelcomeAngularComponent, selector: "vf-chatbot-welcome", inputs: ["qaData", "welcome_logo", "welcome_logo_url", "welcome_logo_alt", "welcome_title", "welcome_message", "welcome_suggestions_title", "enable_welcome_suggestions", "welcome_max_suggestions", "enable_qa_data_loading", "enable_predefined_qa", "enable_fallback_responses", "qa_data_url"] }, { kind: "component", type: i5.VfChatbotPromptAngularComponent, selector: "vf-chatbot-prompt", inputs: ["type", "isLoading", "avatar", "content", "sources", "prompts", "allowFeedback"] }, { kind: "component", type: i6.VfChatbotFeedbackAngularComponent, selector: "vf-chatbot-feedback", inputs: ["feedback_options", "type", "comment"], outputs: ["feedback", "commentChange", "close", "submit"] }, { kind: "component", type: i7.VfChatbotDialogAngularComponent, selector: "vf-chatbot-dialog", inputs: ["title", "message", "cancelLabel", "confirmLabel"] }, { kind: "pipe", type: i1.JsonPipe, name: "json" }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotStandaloneAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-standalone',
                    template: `<div
      #standaloneRef
      class="vf-content vf-chatbot-standalone-container"
      [attr.data-vf-js-chatbot-standalone-container]="true"
      [attr.data-vf-chatbot-config]="config | json"
      [attr.aria-label]="config?.title + ' chatbot'"
    >
      <!-- Header -->
      <div class="vf-chatbot-standalone__header">
        <div class="vf-chatbot-standalone__header-left">
          <ng-container *ngIf="config?.selectorContext; else fallbackSelector">
            <vf-chatbot-selector
              [context]="config?.selectorContext"
            ></vf-chatbot-selector>
          </ng-container>
          <ng-template #fallbackSelector>
            <div class="vf-chatbot-selector">
              <div class="vf-chatbot-selector__title">
                <img
                  [src]="config?.selectorContext?.selector_logo_url"
                  [alt]="config?.selectorContext?.selector_logo_title"
                />
                <div class="vf-chatbot-selector__title-content">
                  <span class="vf-chatbot-selector__main-text">
                    {{ config?.selectorContext?.selector_logo_title }}
                  </span>
                </div>
              </div>
            </div>
          </ng-template>
        </div>
      </div>

      <!-- Chatbot Main -->
      <div
        class="vf-chatbot-standalone | vf-u-background-color-ui--grey--light vf-u-margin__bottom--400"
        data-vf-js-chatbot-standalone
      >
        <div
          class="vf-chatbot-standalone__content"
          data-vf-js-chatbot-standalone-content
        >
          <!-- Welcome -->
          <vf-chatbot-welcome
            *ngIf="config?.features?.enable_welcome"
            [qaData]="qaData"
            [welcome_logo]="config?.welcome_logo"
            [welcome_logo_url]="config?.icons?.main_logo_url"
            [welcome_logo_alt]="config?.welcome_logo_alt"
            [welcome_title]="config?.title"
            [welcome_message]="config?.welcome_message"
            [welcome_suggestions_title]="config?.welcome_suggestions_title"
            [enable_welcome_suggestions]="config?.features?.enable_welcome_suggestions"
            [welcome_max_suggestions]="config?.welcome_max_suggestions"
            [qa_data_url]="config?.api?.qa_data_url"
            [enable_qa_data_loading]="config?.features?.enable_qa_data_loading"
            [enable_predefined_qa]="config?.features?.enable_predefined_qa"
            [enable_fallback_responses]="config?.features?.enable_fallback_responses"
          ></vf-chatbot-welcome>

          <!-- Messages -->
          <div
            [ngClass]="{
              'vf-chatbot-standalone__messages': config?.behavior?.show_scrollbar !== false,
              'vf-chatbot-standalone__messages-no-scrollbar': config?.behavior?.show_scrollbar === false
            }"
            data-vf-js-chatbot-standalone-messages
            [attr.data-auto-scroll]="config?.behavior?.auto_scroll"
          >
          <vf-chatbot-prompt
          *ngFor="let msg of messages"
          [type]="msg.type"
          [avatar]="msg.avatar"
          [content]="msg.content"
          [sources]="sources"
          [prompts]="prompts"
          [allowFeedback]="config?.features?.enable_feedback"
        ></vf-chatbot-prompt>
            
          </div>

          <!-- Disclaimer -->
          <div
            *ngIf="config?.disclaimer && config?.features?.enable_disclaimer"
            class="vf-chatbot-standalone__disclaimer" data-vf-js-chatbot-standalone-disclaimer
          >
            <div class="vf-banner vf-banner--alert vf-banner--info">
              <div class="vf-banner__content">
                <p
                  class="vf-banner__text"
                  [innerHTML]="config.disclaimer"
                ></p>
                <button
                  role="button"
                  aria-label="close notification banner"
                  class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
                  (click)="config?.onDismissDisclaimer?.()"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>dismiss banner</title>
                    <path
                      d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="vf-chatbot-standalone__input-container">
          <div class="vf-chatbot-standalone__input-wrapper">
            <label
              class="vf-u-sr-only"
              id="vf-chatbot-standalone-input-label"
              for="vf-chatbot-standalone-input"
              >Ask me</label
            >
            <textarea
              id="vf-chatbot-standalone-input"
              data-vf-js-chatbot-standalone-input
              aria-labelledby="vf-chatbot-standalone-input-label"
              class="vf-chatbot-standalone__input vf-form__textarea vf-u-padding__left--400"
              [placeholder]="config?.input_placeholder"
              rows="1"
            ></textarea>
            <button
              class="vf-chatbot-standalone__send-button"
              aria-label="Send message"
              data-vf-js-chatbot-standalone-send
            >
              <img [src]="config?.icons?.send_button" alt="Send" />
            </button>
          </div>

          <div
            *ngIf="config?.footnote"
            class="vf-chatbot-standalone__footnote vf-u-margin__top--200"
            [innerHTML]="config.footnote"
            data-vf-js-chatbot-standalone-footnote
          ></div>
        </div>

        <!-- Dialog -->
        <vf-chatbot-dialog
          [title]="config?.dialogProps?.title"
          [message]="config?.dialogProps?.message"
          [cancelLabel]="config?.dialogProps?.cancelLabel"
          [confirmLabel]="config?.dialogProps?.confirmLabel"
          (confirm)="onDialogConfirm.emit()"
          (cancel)="onDialogCancel.emit()"
        ></vf-chatbot-dialog>
        <template id="user-message-template">
          <vf-chatbot-prompt
          [type]= "'user'"
          [content]= "'Hello!'"
          [avatar]="{
            src: config.icons.user_avatar,
            alt: 'Your avatar',
            name: 'You'
          }"
        ></vf-chatbot-prompt>
        </template>
        <ng-container *ngIf="config.features.enable_typing_indicator">

          <template id = "loading-indicator-template">
            <vf-chatbot-prompt
              [type]="'assistant'"
              [isLoading]="true"
              [avatar]="{
                src: config.icons.assistant_avatar,
                alt: config.title,
                name: config.title
              }"
            ></vf-chatbot-prompt>
          </template>

        </ng-container>
        <template id="assistant-message-template">
        <vf-chatbot-prompt
          [type]= "'assistant'"
          [content]= "'How can I help you?'"
          [avatar]="{
            src: config.icons.assistant_avatar,
            alt: config.title,
            name: config.title
          }"
          [allowFeedback]= "config.features.enable_feedback"
          ></vf-chatbot-prompt>
        <!-- Feedback -->
        <div 
          class="vf-chatbot-feedback vf-u-margin__top--200" 
          *ngIf="config.features.enable_feedback" 
          data-vf-js-chatbot-feedback>
      </div>
        </template>
        
        <template id="single-action-prompt-template">
        <vf-chatbot-action-prompt>
        [action_text]= "",
        [action_url]= "#"
        ></vf-chatbot-action-prompt>
        </template>
        <template id="action-prompts-template">
          <div class="vf-chatbot-action-prompts vf-u-margin__top--400">
          <div class="vf-chatbot-action-prompts__list" data-vf-js-action-prompts-list>
            <!-- Individual prompts will be populated here -->
          </div>
        </div>
        </template>
        <ng-container *ngIf="config.features.enable_feedback">
        
        <template id="feedback-positive-template">
          <vf-chatbot-feedback
          [type]="'positive'"
          [feedback_options]="config.feedback_options.positive"></vf-chatbot-feedback>
        </template>
        <template id="feedback-negative-template">
        <vf-chatbot-feedback
         [type]="'negative'"
        [feedback_options]="config.feedback_options.negative"></vf-chatbot-feedback>
        </template>
       </ng-container>
      </div>
    </div>
  `,
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }], propDecorators: { config: [{
                type: Input
            }], messages: [{
                type: Input
            }], sources: [{
                type: Input
            }], prompts: [{
                type: Input
            }], inputValue: [{
                type: Input
            }], onSendMessage: [{
                type: Output
            }], onInputChange: [{
                type: Output
            }], onFeedback: [{
                type: Output
            }], onDialogConfirm: [{
                type: Output
            }], onDialogCancel: [{
                type: Output
            }], standaloneRef: [{
                type: ViewChild,
                args: ['standaloneRef']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1zdGFuZGFsb25lLmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdmYtY2hhdGJvdC1zdGFuZGFsb25lLmFuZ3VsYXIvc3JjL2xpYi92Zi1jaGF0Ym90LXN0YW5kYWxvbmUuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWixTQUFTLEVBQ1QsaUJBQWlCLEVBRWpCLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7OztBQXlPM0MsTUFBTSxPQUFPLG1DQUFtQztJQWtCOUMsWUFDVSxRQUFtQixFQUNELFFBQWtCO1FBRHBDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBbEJyQyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWYsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUMxQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBSXBELFdBQU0sR0FBVSxFQUFFLENBQUM7UUFDWCxrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7SUFLdkMsQ0FBQztJQUVKLFFBQVEsS0FBSSxDQUFDO0lBRWIsS0FBSyxDQUFDLGVBQWU7UUFDbkIsT0FBTyxDQUFDLEdBQUcs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa09UOzs0RkFHVSxtQ0FBbUM7a0JBdk8vQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtPVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OzBCQXFCSSxNQUFNOzJCQUFDLFFBQVE7eUNBbkJULE1BQU07c0JBQWQsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFFSSxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTTtnQkFDRyxlQUFlO3NCQUF4QixNQUFNO2dCQUNHLGNBQWM7c0JBQXZCLE1BQU07Z0JBRXFCLGFBQWE7c0JBQXhDLFNBQVM7dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFJlbmRlcmVyMixcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmYtY2hhdGJvdC1zdGFuZGFsb25lJyxcbiAgdGVtcGxhdGU6IGA8ZGl2XG4gICAgICAjc3RhbmRhbG9uZVJlZlxuICAgICAgY2xhc3M9XCJ2Zi1jb250ZW50IHZmLWNoYXRib3Qtc3RhbmRhbG9uZS1jb250YWluZXJcIlxuICAgICAgW2F0dHIuZGF0YS12Zi1qcy1jaGF0Ym90LXN0YW5kYWxvbmUtY29udGFpbmVyXT1cInRydWVcIlxuICAgICAgW2F0dHIuZGF0YS12Zi1jaGF0Ym90LWNvbmZpZ109XCJjb25maWcgfCBqc29uXCJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiY29uZmlnPy50aXRsZSArICcgY2hhdGJvdCdcIlxuICAgID5cbiAgICAgIDwhLS0gSGVhZGVyIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3Qtc3RhbmRhbG9uZV9faGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LXN0YW5kYWxvbmVfX2hlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZz8uc2VsZWN0b3JDb250ZXh0OyBlbHNlIGZhbGxiYWNrU2VsZWN0b3JcIj5cbiAgICAgICAgICAgIDx2Zi1jaGF0Ym90LXNlbGVjdG9yXG4gICAgICAgICAgICAgIFtjb250ZXh0XT1cImNvbmZpZz8uc2VsZWN0b3JDb250ZXh0XCJcbiAgICAgICAgICAgID48L3ZmLWNoYXRib3Qtc2VsZWN0b3I+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNmYWxsYmFja1NlbGVjdG9yPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3Qtc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3Qtc2VsZWN0b3JfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgW3NyY109XCJjb25maWc/LnNlbGVjdG9yQ29udGV4dD8uc2VsZWN0b3JfbG9nb191cmxcIlxuICAgICAgICAgICAgICAgICAgW2FsdF09XCJjb25maWc/LnNlbGVjdG9yQ29udGV4dD8uc2VsZWN0b3JfbG9nb190aXRsZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1zZWxlY3Rvcl9fdGl0bGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2Zi1jaGF0Ym90LXNlbGVjdG9yX19tYWluLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgY29uZmlnPy5zZWxlY3RvckNvbnRleHQ/LnNlbGVjdG9yX2xvZ29fdGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIENoYXRib3QgTWFpbiAtLT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LXN0YW5kYWxvbmUgfCB2Zi11LWJhY2tncm91bmQtY29sb3ItdWktLWdyZXktLWxpZ2h0IHZmLXUtbWFyZ2luX19ib3R0b20tLTQwMFwiXG4gICAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC1zdGFuZGFsb25lXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3Qtc3RhbmRhbG9uZV9fY29udGVudFwiXG4gICAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LXN0YW5kYWxvbmUtY29udGVudFxuICAgICAgICA+XG4gICAgICAgICAgPCEtLSBXZWxjb21lIC0tPlxuICAgICAgICAgIDx2Zi1jaGF0Ym90LXdlbGNvbWVcbiAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnPy5mZWF0dXJlcz8uZW5hYmxlX3dlbGNvbWVcIlxuICAgICAgICAgICAgW3FhRGF0YV09XCJxYURhdGFcIlxuICAgICAgICAgICAgW3dlbGNvbWVfbG9nb109XCJjb25maWc/LndlbGNvbWVfbG9nb1wiXG4gICAgICAgICAgICBbd2VsY29tZV9sb2dvX3VybF09XCJjb25maWc/Lmljb25zPy5tYWluX2xvZ29fdXJsXCJcbiAgICAgICAgICAgIFt3ZWxjb21lX2xvZ29fYWx0XT1cImNvbmZpZz8ud2VsY29tZV9sb2dvX2FsdFwiXG4gICAgICAgICAgICBbd2VsY29tZV90aXRsZV09XCJjb25maWc/LnRpdGxlXCJcbiAgICAgICAgICAgIFt3ZWxjb21lX21lc3NhZ2VdPVwiY29uZmlnPy53ZWxjb21lX21lc3NhZ2VcIlxuICAgICAgICAgICAgW3dlbGNvbWVfc3VnZ2VzdGlvbnNfdGl0bGVdPVwiY29uZmlnPy53ZWxjb21lX3N1Z2dlc3Rpb25zX3RpdGxlXCJcbiAgICAgICAgICAgIFtlbmFibGVfd2VsY29tZV9zdWdnZXN0aW9uc109XCJjb25maWc/LmZlYXR1cmVzPy5lbmFibGVfd2VsY29tZV9zdWdnZXN0aW9uc1wiXG4gICAgICAgICAgICBbd2VsY29tZV9tYXhfc3VnZ2VzdGlvbnNdPVwiY29uZmlnPy53ZWxjb21lX21heF9zdWdnZXN0aW9uc1wiXG4gICAgICAgICAgICBbcWFfZGF0YV91cmxdPVwiY29uZmlnPy5hcGk/LnFhX2RhdGFfdXJsXCJcbiAgICAgICAgICAgIFtlbmFibGVfcWFfZGF0YV9sb2FkaW5nXT1cImNvbmZpZz8uZmVhdHVyZXM/LmVuYWJsZV9xYV9kYXRhX2xvYWRpbmdcIlxuICAgICAgICAgICAgW2VuYWJsZV9wcmVkZWZpbmVkX3FhXT1cImNvbmZpZz8uZmVhdHVyZXM/LmVuYWJsZV9wcmVkZWZpbmVkX3FhXCJcbiAgICAgICAgICAgIFtlbmFibGVfZmFsbGJhY2tfcmVzcG9uc2VzXT1cImNvbmZpZz8uZmVhdHVyZXM/LmVuYWJsZV9mYWxsYmFja19yZXNwb25zZXNcIlxuICAgICAgICAgID48L3ZmLWNoYXRib3Qtd2VsY29tZT5cblxuICAgICAgICAgIDwhLS0gTWVzc2FnZXMgLS0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAndmYtY2hhdGJvdC1zdGFuZGFsb25lX19tZXNzYWdlcyc6IGNvbmZpZz8uYmVoYXZpb3I/LnNob3dfc2Nyb2xsYmFyICE9PSBmYWxzZSxcbiAgICAgICAgICAgICAgJ3ZmLWNoYXRib3Qtc3RhbmRhbG9uZV9fbWVzc2FnZXMtbm8tc2Nyb2xsYmFyJzogY29uZmlnPy5iZWhhdmlvcj8uc2hvd19zY3JvbGxiYXIgPT09IGZhbHNlXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC1zdGFuZGFsb25lLW1lc3NhZ2VzXG4gICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG8tc2Nyb2xsXT1cImNvbmZpZz8uYmVoYXZpb3I/LmF1dG9fc2Nyb2xsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPHZmLWNoYXRib3QtcHJvbXB0XG4gICAgICAgICAgKm5nRm9yPVwibGV0IG1zZyBvZiBtZXNzYWdlc1wiXG4gICAgICAgICAgW3R5cGVdPVwibXNnLnR5cGVcIlxuICAgICAgICAgIFthdmF0YXJdPVwibXNnLmF2YXRhclwiXG4gICAgICAgICAgW2NvbnRlbnRdPVwibXNnLmNvbnRlbnRcIlxuICAgICAgICAgIFtzb3VyY2VzXT1cInNvdXJjZXNcIlxuICAgICAgICAgIFtwcm9tcHRzXT1cInByb21wdHNcIlxuICAgICAgICAgIFthbGxvd0ZlZWRiYWNrXT1cImNvbmZpZz8uZmVhdHVyZXM/LmVuYWJsZV9mZWVkYmFja1wiXG4gICAgICAgID48L3ZmLWNoYXRib3QtcHJvbXB0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tIERpc2NsYWltZXIgLS0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nSWY9XCJjb25maWc/LmRpc2NsYWltZXIgJiYgY29uZmlnPy5mZWF0dXJlcz8uZW5hYmxlX2Rpc2NsYWltZXJcIlxuICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LXN0YW5kYWxvbmVfX2Rpc2NsYWltZXJcIiBkYXRhLXZmLWpzLWNoYXRib3Qtc3RhbmRhbG9uZS1kaXNjbGFpbWVyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWJhbm5lciB2Zi1iYW5uZXItLWFsZXJ0IHZmLWJhbm5lci0taW5mb1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtYmFubmVyX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidmYtYmFubmVyX190ZXh0XCJcbiAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiY29uZmlnLmRpc2NsYWltZXJcIlxuICAgICAgICAgICAgICAgID48L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2Ugbm90aWZpY2F0aW9uIGJhbm5lclwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInZmLWJ1dHRvbiB2Zi1idXR0b24tLWljb24gdmYtYnV0dG9uLS1kaXNtaXNzIHwgdmYtYmFubmVyX19idXR0b25cIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNvbmZpZz8ub25EaXNtaXNzRGlzY2xhaW1lcj8uKClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmRpc21pc3MgYmFubmVyPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE0LjMsMTIuMTc5YS4yNS4yNSwwLDAsMSwwLS4zNTRsOS4yNjMtOS4yNjJBMS41LDEuNSwwLDAsMCwyMS40MzkuNDQyTDEyLjE3Nyw5LjdhLjI1LjI1LDAsMCwxLS4zNTQsMEwyLjU2MS40NDJBMS41LDEuNSwwLDAsMCwuNDM5LDIuNTYzTDkuNywxMS44MjVhLjI1LjI1LDAsMCwxLDAsLjM1NEwuNDM5LDIxLjQ0MmExLjUsMS41LDAsMCwwLDIuMTIyLDIuMTIxTDExLjgyMywxNC4zYS4yNS4yNSwwLDAsMSwuMzU0LDBsOS4yNjIsOS4yNjNhMS41LDEuNSwwLDAsMCwyLjEyMi0yLjEyMVpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gSW5wdXQgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LXN0YW5kYWxvbmVfX2lucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LXN0YW5kYWxvbmVfX2lucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBjbGFzcz1cInZmLXUtc3Itb25seVwiXG4gICAgICAgICAgICAgIGlkPVwidmYtY2hhdGJvdC1zdGFuZGFsb25lLWlucHV0LWxhYmVsXCJcbiAgICAgICAgICAgICAgZm9yPVwidmYtY2hhdGJvdC1zdGFuZGFsb25lLWlucHV0XCJcbiAgICAgICAgICAgICAgPkFzayBtZTwvbGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cInZmLWNoYXRib3Qtc3RhbmRhbG9uZS1pbnB1dFwiXG4gICAgICAgICAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC1zdGFuZGFsb25lLWlucHV0XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInZmLWNoYXRib3Qtc3RhbmRhbG9uZS1pbnB1dC1sYWJlbFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1zdGFuZGFsb25lX19pbnB1dCB2Zi1mb3JtX190ZXh0YXJlYSB2Zi11LXBhZGRpbmdfX2xlZnQtLTQwMFwiXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWc/LmlucHV0X3BsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgcm93cz1cIjFcIlxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1zdGFuZGFsb25lX19zZW5kLWJ1dHRvblwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZW5kIG1lc3NhZ2VcIlxuICAgICAgICAgICAgICBkYXRhLXZmLWpzLWNoYXRib3Qtc3RhbmRhbG9uZS1zZW5kXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWcgW3NyY109XCJjb25maWc/Lmljb25zPy5zZW5kX2J1dHRvblwiIGFsdD1cIlNlbmRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdJZj1cImNvbmZpZz8uZm9vdG5vdGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LXN0YW5kYWxvbmVfX2Zvb3Rub3RlIHZmLXUtbWFyZ2luX190b3AtLTIwMFwiXG4gICAgICAgICAgICBbaW5uZXJIVE1MXT1cImNvbmZpZy5mb290bm90ZVwiXG4gICAgICAgICAgICBkYXRhLXZmLWpzLWNoYXRib3Qtc3RhbmRhbG9uZS1mb290bm90ZVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBEaWFsb2cgLS0+XG4gICAgICAgIDx2Zi1jaGF0Ym90LWRpYWxvZ1xuICAgICAgICAgIFt0aXRsZV09XCJjb25maWc/LmRpYWxvZ1Byb3BzPy50aXRsZVwiXG4gICAgICAgICAgW21lc3NhZ2VdPVwiY29uZmlnPy5kaWFsb2dQcm9wcz8ubWVzc2FnZVwiXG4gICAgICAgICAgW2NhbmNlbExhYmVsXT1cImNvbmZpZz8uZGlhbG9nUHJvcHM/LmNhbmNlbExhYmVsXCJcbiAgICAgICAgICBbY29uZmlybUxhYmVsXT1cImNvbmZpZz8uZGlhbG9nUHJvcHM/LmNvbmZpcm1MYWJlbFwiXG4gICAgICAgICAgKGNvbmZpcm0pPVwib25EaWFsb2dDb25maXJtLmVtaXQoKVwiXG4gICAgICAgICAgKGNhbmNlbCk9XCJvbkRpYWxvZ0NhbmNlbC5lbWl0KClcIlxuICAgICAgICA+PC92Zi1jaGF0Ym90LWRpYWxvZz5cbiAgICAgICAgPHRlbXBsYXRlIGlkPVwidXNlci1tZXNzYWdlLXRlbXBsYXRlXCI+XG4gICAgICAgICAgPHZmLWNoYXRib3QtcHJvbXB0XG4gICAgICAgICAgW3R5cGVdPSBcIid1c2VyJ1wiXG4gICAgICAgICAgW2NvbnRlbnRdPSBcIidIZWxsbyEnXCJcbiAgICAgICAgICBbYXZhdGFyXT1cIntcbiAgICAgICAgICAgIHNyYzogY29uZmlnLmljb25zLnVzZXJfYXZhdGFyLFxuICAgICAgICAgICAgYWx0OiAnWW91ciBhdmF0YXInLFxuICAgICAgICAgICAgbmFtZTogJ1lvdSdcbiAgICAgICAgICB9XCJcbiAgICAgICAgPjwvdmYtY2hhdGJvdC1wcm9tcHQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuZmVhdHVyZXMuZW5hYmxlX3R5cGluZ19pbmRpY2F0b3JcIj5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSBpZCA9IFwibG9hZGluZy1pbmRpY2F0b3ItdGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDx2Zi1jaGF0Ym90LXByb21wdFxuICAgICAgICAgICAgICBbdHlwZV09XCInYXNzaXN0YW50J1wiXG4gICAgICAgICAgICAgIFtpc0xvYWRpbmddPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIFthdmF0YXJdPVwie1xuICAgICAgICAgICAgICAgIHNyYzogY29uZmlnLmljb25zLmFzc2lzdGFudF9hdmF0YXIsXG4gICAgICAgICAgICAgICAgYWx0OiBjb25maWcudGl0bGUsXG4gICAgICAgICAgICAgICAgbmFtZTogY29uZmlnLnRpdGxlXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPjwvdmYtY2hhdGJvdC1wcm9tcHQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPHRlbXBsYXRlIGlkPVwiYXNzaXN0YW50LW1lc3NhZ2UtdGVtcGxhdGVcIj5cbiAgICAgICAgPHZmLWNoYXRib3QtcHJvbXB0XG4gICAgICAgICAgW3R5cGVdPSBcIidhc3Npc3RhbnQnXCJcbiAgICAgICAgICBbY29udGVudF09IFwiJ0hvdyBjYW4gSSBoZWxwIHlvdT8nXCJcbiAgICAgICAgICBbYXZhdGFyXT1cIntcbiAgICAgICAgICAgIHNyYzogY29uZmlnLmljb25zLmFzc2lzdGFudF9hdmF0YXIsXG4gICAgICAgICAgICBhbHQ6IGNvbmZpZy50aXRsZSxcbiAgICAgICAgICAgIG5hbWU6IGNvbmZpZy50aXRsZVxuICAgICAgICAgIH1cIlxuICAgICAgICAgIFthbGxvd0ZlZWRiYWNrXT0gXCJjb25maWcuZmVhdHVyZXMuZW5hYmxlX2ZlZWRiYWNrXCJcbiAgICAgICAgICA+PC92Zi1jaGF0Ym90LXByb21wdD5cbiAgICAgICAgPCEtLSBGZWVkYmFjayAtLT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtZmVlZGJhY2sgdmYtdS1tYXJnaW5fX3RvcC0tMjAwXCIgXG4gICAgICAgICAgKm5nSWY9XCJjb25maWcuZmVhdHVyZXMuZW5hYmxlX2ZlZWRiYWNrXCIgXG4gICAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LWZlZWRiYWNrPlxuICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIFxuICAgICAgICA8dGVtcGxhdGUgaWQ9XCJzaW5nbGUtYWN0aW9uLXByb21wdC10ZW1wbGF0ZVwiPlxuICAgICAgICA8dmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0PlxuICAgICAgICBbYWN0aW9uX3RleHRdPSBcIlwiLFxuICAgICAgICBbYWN0aW9uX3VybF09IFwiI1wiXG4gICAgICAgID48L3ZmLWNoYXRib3QtYWN0aW9uLXByb21wdD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlkPVwiYWN0aW9uLXByb21wdHMtdGVtcGxhdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0cyB2Zi11LW1hcmdpbl9fdG9wLS00MDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0c19fbGlzdFwiIGRhdGEtdmYtanMtYWN0aW9uLXByb21wdHMtbGlzdD5cbiAgICAgICAgICAgIDwhLS0gSW5kaXZpZHVhbCBwcm9tcHRzIHdpbGwgYmUgcG9wdWxhdGVkIGhlcmUgLS0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmZlYXR1cmVzLmVuYWJsZV9mZWVkYmFja1wiPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlIGlkPVwiZmVlZGJhY2stcG9zaXRpdmUtdGVtcGxhdGVcIj5cbiAgICAgICAgICA8dmYtY2hhdGJvdC1mZWVkYmFja1xuICAgICAgICAgIFt0eXBlXT1cIidwb3NpdGl2ZSdcIlxuICAgICAgICAgIFtmZWVkYmFja19vcHRpb25zXT1cImNvbmZpZy5mZWVkYmFja19vcHRpb25zLnBvc2l0aXZlXCI+PC92Zi1jaGF0Ym90LWZlZWRiYWNrPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaWQ9XCJmZWVkYmFjay1uZWdhdGl2ZS10ZW1wbGF0ZVwiPlxuICAgICAgICA8dmYtY2hhdGJvdC1mZWVkYmFja1xuICAgICAgICAgW3R5cGVdPVwiJ25lZ2F0aXZlJ1wiXG4gICAgICAgIFtmZWVkYmFja19vcHRpb25zXT1cImNvbmZpZy5mZWVkYmFja19vcHRpb25zLm5lZ2F0aXZlXCI+PC92Zi1jaGF0Ym90LWZlZWRiYWNrPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFZmQ2hhdGJvdFN0YW5kYWxvbmVBbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpIG1lc3NhZ2VzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBzb3VyY2VzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBwcm9tcHRzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBpbnB1dFZhbHVlID0gJyc7XG5cbiAgQE91dHB1dCgpIG9uU2VuZE1lc3NhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBvbklucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uRmVlZGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uRGlhbG9nQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG9uRGlhbG9nQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3N0YW5kYWxvbmVSZWYnKSBzdGFuZGFsb25lUmVmITogRWxlbWVudFJlZjtcblxuICBxYURhdGE6IGFueVtdID0gW107XG4gIHByaXZhdGUgbG9hZGVkU2NyaXB0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGFzeW5jIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnVkYgQ2hhdGJvdCBTdGFuZGFsb25lIGNvbXBvbmVudCBpbml0aWFsaXppbmcuLi4nKTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgLy8gTG9hZCBvbmx5IHRoZSB3b3JraW5nIHNjcmlwdHMgaW5kaXZpZHVhbGx5XG4gICAgICBhd2FpdCB0aGlzLmxvYWRXb3JraW5nU2NyaXB0cygpO1xuICAgICAgXG4gICAgICAvLyBJbml0aWFsaXplIGNoYXRib3QgZnVuY3Rpb25hbGl0eSAgXG4gICAgICB0aGlzLmluaXRpYWxpemVDaGF0Ym90KCk7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgY2hhdGJvdCBzY3JpcHRzOicsIGVycm9yKTtcbiAgICAgIFxuICAgICAgLy8gRmFsbGJhY2s6IHRyeSBiYXNpYyBpbml0aWFsaXphdGlvbiBpbiBjYXNlIHNjcmlwdHMgYXJlIGFscmVhZHkgbG9hZGVkXG4gICAgICBjb25zb2xlLmxvZygnVHJ5aW5nIGZhbGxiYWNrIGluaXRpYWxpemF0aW9uLi4uJyk7XG4gICAgICB0aGlzLmluaXRpYWxpemVDaGF0Ym90KCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKCdDaGF0Ym90IHN0YW5kYWxvbmUgY29tcG9uZW50IHJlYWR5JywgdGhpcy5zdGFuZGFsb25lUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGNoYXRib3Qgc2NyaXB0cyBhcyBFUzYgbW9kdWxlc1xuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBsb2FkV29ya2luZ1NjcmlwdHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc29sZS5sb2coJ0xvYWRpbmcgRVM2IG1vZHVsZXMuLi4nKTtcbiAgICBcbiAgICAvLyBBbGwgY2hhdGJvdCBmaWxlcyBhcmUgRVM2IG1vZHVsZXMgKGhhdmUgZXhwb3J0cylcbiAgICBjb25zdCBtb2R1bGVTY3JpcHRzID0gW1xuICAgICAgJ2Fzc2V0cy92Zi1jaGF0Ym90LWZhYi92Zi1jaGF0Ym90LWZhYi5qcycsXG4gICAgICAnYXNzZXRzL3ZmLWNoYXRib3QtZGlhbG9nL3ZmLWNoYXRib3QtZGlhbG9nLmpzJyxcbiAgICAgICdhc3NldHMvdmYtY2hhdGJvdC1mZWVkYmFjay92Zi1jaGF0Ym90LWZlZWRiYWNrLmpzJyxcbiAgICAgICdhc3NldHMvdmYtY2hhdGJvdC1zZWxlY3Rvci92Zi1jaGF0Ym90LXNlbGVjdG9yLmpzJyxcbiAgICAgICdhc3NldHMvdmYtY2hhdGJvdC1zb3VyY2VzL3ZmLWNoYXRib3Qtc291cmNlcy5qcycsXG4gICAgICAnYXNzZXRzL3ZmLWNoYXRib3Qtd2VsY29tZS92Zi1jaGF0Ym90LXdlbGNvbWUuanMnXG4gICAgXTtcbiAgICBcbiAgICAvLyBUaGVzZSBoYXZlIGJvdGggaW1wb3J0cyBBTkQgZXhwb3J0cywgc28gdGhleSBuZWVkIHRoZWlyIGRlcGVuZGVuY2llcyBsb2FkZWQgZmlyc3RcbiAgICBjb25zdCBtb2R1bGVTY3JpcHRzV2l0aERlcGVuZGVuY2llcyA9IFtcbiAgICAgICdhc3NldHMvdmYtY2hhdGJvdC92Zi1jaGF0Ym90LmpzJywgICAgICAgICAgICAgICAvLyBIYXMgaW1wb3J0cyBmcm9tIG90aGVyIG1vZHVsZXNcbiAgICAgICdhc3NldHMvdmYtY2hhdGJvdC1tb2RhbC92Zi1jaGF0Ym90LW1vZGFsLmpzJywgICAvLyBIYXMgaW1wb3J0cyBmcm9tIG90aGVyIG1vZHVsZXNcbiAgICAgICdhc3NldHMvdmYtY2hhdGJvdC1zdGFuZGFsb25lL3ZmLWNoYXRib3Qtc3RhbmRhbG9uZS5qcycgLy8gSGFzIGltcG9ydHMgZnJvbSBvdGhlciBtb2R1bGVzXG4gICAgXTtcbiAgICBcbiAgICAvLyBMb2FkIGluZGVwZW5kZW50IG1vZHVsZXMgZmlyc3RcbiAgICBmb3IgKGNvbnN0IHNjcmlwdFNyYyBvZiBtb2R1bGVTY3JpcHRzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTaW5nbGVTY3JpcHQoc2NyaXB0U3JjKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgU2tpcHBlZCAke3NjcmlwdFNyY306YCwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBUaGVuIGxvYWQgbW9kdWxlcyB3aXRoIGRlcGVuZGVuY2llc1xuICAgIGZvciAoY29uc3Qgc2NyaXB0U3JjIG9mIG1vZHVsZVNjcmlwdHNXaXRoRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTaW5nbGVTY3JpcHQoc2NyaXB0U3JjKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgU2tpcHBlZCAke3NjcmlwdFNyY306YCwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGEgc2luZ2xlIHNjcmlwdCBhcyBFUzYgbW9kdWxlXG4gICAqL1xuICBwcml2YXRlIGxvYWRTaW5nbGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMubG9hZGVkU2NyaXB0cy5oYXMoc3JjKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgU2NyaXB0IGFscmVhZHkgbG9hZGVkIGluIGNhY2hlOiAke3NyY31gKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHNjcmlwdCBhbHJlYWR5IGV4aXN0cyBpbiBET01cbiAgICAgIGNvbnN0IGV4aXN0aW5nU2NyaXB0ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjPVwiJHtzcmN9XCJdYCk7XG4gICAgICBpZiAoZXhpc3RpbmdTY3JpcHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFNjcmlwdCBhbHJlYWR5IGxvYWRlZCBpbiBET006ICR7c3JjfWApO1xuICAgICAgICB0aGlzLmxvYWRlZFNjcmlwdHMuYWRkKHNyYyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJzsgLy8gTG9hZCBhcyBFUzYgbW9kdWxlXG4gICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIFxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZWRTY3JpcHRzLmFkZChzcmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTG9hZGVkIEVTNiBtb2R1bGU6ICR7c3JjfWApO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgXG4gICAgICBzY3JpcHQub25lcnJvciA9IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsb2FkIG1vZHVsZTogJHtzcmN9YCwgZXJyb3IpO1xuICAgICAgICAvLyBNYXJrIGFzIGZhaWxlZCBidXQgcmVzb2x2ZSB0byBjb250aW51ZSB3aXRoIG90aGVyIHNjcmlwdHNcbiAgICAgICAgdGhpcy5sb2FkZWRTY3JpcHRzLmFkZChzcmMgKyAnX2ZhaWxlZCcpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuaGVhZCwgc2NyaXB0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNoYXRib3QgZnVuY3Rpb25hbGl0eSBhZnRlciBzY3JpcHRzIGFyZSBsb2FkZWRcbiAgICovXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUNoYXRib3QoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ0luaXRpYWxpemluZyBjaGF0Ym90IGZ1bmN0aW9uYWxpdHkuLi4nKTtcbiAgICBcbiAgICAvLyBBY2Nlc3MgdGhlIGdsb2JhbGx5IGV4cG9zZWQgaW5pdGlhbGl6YXRpb24gZnVuY3Rpb25zXG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbml0aWFsaXplZENvdW50ID0gMDtcbiAgICAgIFxuICAgICAgLy8gQWxsIHBvdGVudGlhbCBpbml0aWFsaXphdGlvbiBmdW5jdGlvbnMgZnJvbSBFUzYgbW9kdWxlc1xuICAgICAgY29uc3QgYWxsSW5pdEZ1bmN0aW9ucyA9IFtcbiAgICAgICAgJ2luaXRWRkNoYXRib3RGYWInLFxuICAgICAgICAnaW5pdFZGQ2hhdGJvdERpYWxvZycsIFxuICAgICAgICAnaW5pdFZGQ2hhdGJvdEZlZWRiYWNrJyxcbiAgICAgICAgJ2luaXRWRkNoYXRib3RTZWxlY3RvcicsXG4gICAgICAgICdpbml0VkZDaGF0Ym90U291cmNlcycsXG4gICAgICAgICdpbml0VkZDaGF0Ym90V2VsY29tZScsXG4gICAgICAgICdpbml0VkZDaGF0Ym90U3RhbmRhbG9uZScsIC8vIE5vdyBsb2FkZWQgYXMgRVM2IG1vZHVsZVxuICAgICAgICAnaW5pdFZGQ2hhdGJvdE1vZGFsJywgICAgICAvLyBOb3cgbG9hZGVkIGFzIEVTNiBtb2R1bGUgIFxuICAgICAgICAnaW5pdFZGQ2hhdGJvdCcgICAgICAgICAgICAvLyBOb3cgbG9hZGVkIGFzIEVTNiBtb2R1bGVcbiAgICAgIF07XG4gICAgICBcbiAgICAgIGFsbEluaXRGdW5jdGlvbnMuZm9yRWFjaChmdW5jTmFtZSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgKHdpbmRvdyBhcyBhbnkpW2Z1bmNOYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAod2luZG93IGFzIGFueSlbZnVuY05hbWVdKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtmdW5jTmFtZX0gaW5pdGlhbGl6ZWRgKTtcbiAgICAgICAgICAgIGluaXRpYWxpemVkQ291bnQrKztcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2Z1bmNOYW1lfSBmYWlsZWQgdG8gaW5pdGlhbGl6ZTpgLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2Z1bmNOYW1lfSBub3QgYXZhaWxhYmxlIChtb2R1bGUgbWF5IG5vdCBoYXZlIGxvYWRlZClgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKGBDaGF0Ym90IGluaXRpYWxpemF0aW9uIGNvbXBsZXRlLiAke2luaXRpYWxpemVkQ291bnR9IGNvbXBvbmVudHMgaW5pdGlhbGl6ZWQuYCk7XG4gICAgICBcbiAgICAgIGlmIChpbml0aWFsaXplZENvdW50ID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTm8gY2hhdGJvdCBmdW5jdGlvbnMgd2VyZSBpbml0aWFsaXplZC4gQ2hlY2sgdGhhdCBFUzYgbW9kdWxlcyBsb2FkZWQgY29ycmVjdGx5LicpO1xuICAgICAgfVxuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBjaGF0Ym90IGZ1bmN0aW9uYWxpdHk6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl19