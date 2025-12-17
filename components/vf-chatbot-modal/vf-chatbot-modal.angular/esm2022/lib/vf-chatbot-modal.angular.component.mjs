import { Component, Input, Output, EventEmitter, ViewChild, Inject, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "vf-chatbot-action-prompt.angular";
import * as i3 from "vf-chatbot-selector.angular";
import * as i4 from "vf-chatbot-welcome.angular";
import * as i5 from "vf-chatbot-prompt.angular";
import * as i6 from "vf-chatbot-feedback.angular";
import * as i7 from "vf-chatbot-dialog.angular";
export class VfChatbotModalAngularComponent {
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
        console.log('VF Chatbot modal component initializing...');
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
        console.log('Chatbot modal component ready', this.modalRef);
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
                'initVFChatbot'
            ];
            allInitFunctions.forEach(funcName => {
                if (typeof window[funcName] === 'function') {
                    try {
                        if (funcName === 'initVFChatbot') {
                            window[funcName](this.config);
                        }
                        else {
                            window[funcName]();
                        }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularComponent, deps: [{ token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotModalAngularComponent, selector: "vf-chatbot-modal", inputs: { config: "config", messages: "messages", sources: "sources", prompts: "prompts", inputValue: "inputValue" }, outputs: { onSendMessage: "onSendMessage", onInputChange: "onInputChange", onFeedback: "onFeedback", onDialogConfirm: "onDialogConfirm", onDialogCancel: "onDialogCancel" }, viewQueries: [{ propertyName: "modalRef", first: true, predicate: ["modalRef"], descendants: true }], ngImport: i0, template: `
<div
  #modalRef
  class="vf-content vf-chatbot-modal-container vf-chatbot-modal-container--inactive"
  [attr.data-vf-chatbot-config]="config | json"
  role="dialog"
  [attr.aria-label]="config?.title + ' chatbot'"
  data-vf-js-chatbot-modal-container
>
  <!-- Header -->
  <div role="region" aria-label="Chatbot header" class="vf-chatbot-modal__header">
    <div role="region" aria-label="Chatbot selector" class="vf-chatbot-modal__header-left">
      <ng-container *ngIf="config?.selectorContext; else staticSelector">
        <vf-chatbot-selector [context]="config.selectorContext"></vf-chatbot-selector>
      </ng-container>
      <ng-template #staticSelector>
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

    <div class="vf-chatbot-modal__header-right">
      <button
        class="vf-chatbot-modal__minimize"
        aria-label="Minimize chatbot"
        data-vf-js-chatbot-modal-minimize
      >
        <img [src]="config?.icons?.minimize" alt="Minimize chatbot" />
      </button>
      <button
        class="vf-chatbot-modal__close"
        aria-label="Close chatbot"
        data-vf-js-chatbot-modal-close
      >
        <img [src]="config?.icons?.close" alt="Close chatbot" />
      </button>
    </div>
  </div>

  <!-- Main Modal -->
  <div class="vf-chatbot-modal vf-u-background-color-ui--grey--light">
    <div class="vf-chatbot-modal__content" data-vf-js-chatbot-modal-content>
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
              'vf-chatbot-modal__messages': config?.behavior?.show_scrollbar !== false,
              'vf-chatbot-modal__messages-no-scrollbar': config?.behavior?.show_scrollbar === false
            }"
            data-vf-js-chatbot-modal-messages
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
            class="vf-chatbot-modal__disclaimer" data-vf-js-chatbot-modal-disclaimer
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
        <div class="vf-chatbot-modal__input-container">
          <div class="vf-chatbot-modal__input-wrapper">
            <label
              class="vf-u-sr-only"
              id="vf-chatbot-modal-input-label"
              for="vf-chatbot-modal-input"
              >Ask me</label
            >
            <textarea
              id="vf-chatbot-modal-input"
              data-vf-js-chatbot-modal-input
              aria-labelledby="vf-chatbot-modal-input-label"
              class="vf-chatbot-modal__input vf-form__textarea vf-u-padding__left--400"
              [placeholder]="config?.input_placeholder"
              rows="1"
            ></textarea>
            <button
              class="vf-chatbot-modal__send-button"
              aria-label="Send message"
              data-vf-js-chatbot-modal-send
            >
              <img [src]="config?.icons?.send_button" alt="Send" />
            </button>
          </div>
           <div
            *ngIf="config?.footnote"
            class="vf-chatbot-modal__footnote vf-u-margin__top--200"
            [innerHTML]="config.footnote"
            data-vf-js-chatbot-modal-footnote
          ></div>
        </div>


    <!-- Dialog -->
        <vf-chatbot-dialog
          [title]="'Close chat and delete conversation?'"
          [message]= "'Are you sure you want to close the chat? <br>Your current conversation history will be permanently deleted.'"
          [cancelLabel] = "'Keep chat open'"
          [confirmLabel] = "'Close and delete'"
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.VfChatbotActionPromptAngularComponent, selector: "vf-chatbot-action-prompt", inputs: ["action_url", "action_text", "action_target"], outputs: ["actionClick"] }, { kind: "component", type: i3.VfChatbotSelectorAngularComponent, selector: "vf-chatbot-selector", inputs: ["chatbotRoutes", "context"] }, { kind: "component", type: i4.VfChatbotWelcomeAngularComponent, selector: "vf-chatbot-welcome", inputs: ["qaData", "welcome_logo", "welcome_logo_url", "welcome_logo_alt", "welcome_title", "welcome_message", "welcome_suggestions_title", "enable_welcome_suggestions", "welcome_max_suggestions", "enable_qa_data_loading", "enable_predefined_qa", "enable_fallback_responses", "qa_data_url"] }, { kind: "component", type: i5.VfChatbotPromptAngularComponent, selector: "vf-chatbot-prompt", inputs: ["type", "isLoading", "avatar", "content", "sources", "prompts", "allowFeedback"] }, { kind: "component", type: i6.VfChatbotFeedbackAngularComponent, selector: "vf-chatbot-feedback", inputs: ["feedback_options", "type", "comment"], outputs: ["feedback", "commentChange", "close", "submit"] }, { kind: "component", type: i7.VfChatbotDialogAngularComponent, selector: "vf-chatbot-dialog", inputs: ["title", "message", "cancelLabel", "confirmLabel"] }, { kind: "pipe", type: i1.JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-modal',
                    template: `
<div
  #modalRef
  class="vf-content vf-chatbot-modal-container vf-chatbot-modal-container--inactive"
  [attr.data-vf-chatbot-config]="config | json"
  role="dialog"
  [attr.aria-label]="config?.title + ' chatbot'"
  data-vf-js-chatbot-modal-container
>
  <!-- Header -->
  <div role="region" aria-label="Chatbot header" class="vf-chatbot-modal__header">
    <div role="region" aria-label="Chatbot selector" class="vf-chatbot-modal__header-left">
      <ng-container *ngIf="config?.selectorContext; else staticSelector">
        <vf-chatbot-selector [context]="config.selectorContext"></vf-chatbot-selector>
      </ng-container>
      <ng-template #staticSelector>
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

    <div class="vf-chatbot-modal__header-right">
      <button
        class="vf-chatbot-modal__minimize"
        aria-label="Minimize chatbot"
        data-vf-js-chatbot-modal-minimize
      >
        <img [src]="config?.icons?.minimize" alt="Minimize chatbot" />
      </button>
      <button
        class="vf-chatbot-modal__close"
        aria-label="Close chatbot"
        data-vf-js-chatbot-modal-close
      >
        <img [src]="config?.icons?.close" alt="Close chatbot" />
      </button>
    </div>
  </div>

  <!-- Main Modal -->
  <div class="vf-chatbot-modal vf-u-background-color-ui--grey--light">
    <div class="vf-chatbot-modal__content" data-vf-js-chatbot-modal-content>
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
              'vf-chatbot-modal__messages': config?.behavior?.show_scrollbar !== false,
              'vf-chatbot-modal__messages-no-scrollbar': config?.behavior?.show_scrollbar === false
            }"
            data-vf-js-chatbot-modal-messages
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
            class="vf-chatbot-modal__disclaimer" data-vf-js-chatbot-modal-disclaimer
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
        <div class="vf-chatbot-modal__input-container">
          <div class="vf-chatbot-modal__input-wrapper">
            <label
              class="vf-u-sr-only"
              id="vf-chatbot-modal-input-label"
              for="vf-chatbot-modal-input"
              >Ask me</label
            >
            <textarea
              id="vf-chatbot-modal-input"
              data-vf-js-chatbot-modal-input
              aria-labelledby="vf-chatbot-modal-input-label"
              class="vf-chatbot-modal__input vf-form__textarea vf-u-padding__left--400"
              [placeholder]="config?.input_placeholder"
              rows="1"
            ></textarea>
            <button
              class="vf-chatbot-modal__send-button"
              aria-label="Send message"
              data-vf-js-chatbot-modal-send
            >
              <img [src]="config?.icons?.send_button" alt="Send" />
            </button>
          </div>
           <div
            *ngIf="config?.footnote"
            class="vf-chatbot-modal__footnote vf-u-margin__top--200"
            [innerHTML]="config.footnote"
            data-vf-js-chatbot-modal-footnote
          ></div>
        </div>


    <!-- Dialog -->
        <vf-chatbot-dialog
          [title]="'Close chat and delete conversation?'"
          [message]= "'Are you sure you want to close the chat? <br>Your current conversation history will be permanently deleted.'"
          [cancelLabel] = "'Keep chat open'"
          [confirmLabel] = "'Close and delete'"
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
            }], modalRef: [{
                type: ViewChild,
                args: ['modalRef']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1tb2RhbC5hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZmLWNoYXRib3QtbW9kYWwuYW5ndWxhci9zcmMvbGliL3ZmLWNoYXRib3QtbW9kYWwuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWixTQUFTLEVBR1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7O0FBa1AzQyxNQUFNLE9BQU8sOEJBQThCO0lBa0J2QyxZQUNVLFFBQW1CLEVBQ0QsUUFBa0I7UUFEcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNELGFBQVEsR0FBUixRQUFRLENBQVU7UUFsQnJDLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFZixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBQzFDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUMzQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFJcEQsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUNYLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztJQUt2QyxDQUFDO0lBRUosUUFBUSxLQUFJLENBQUM7SUFFYixLQUFLLENBQUMsZUFBZTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFFMUQs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyT1Q7OzRGQUVVLDhCQUE4QjtrQkEvTzFDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMk9UO2lCQUNGOzswQkFxQk0sTUFBTTsyQkFBQyxRQUFRO3lDQW5CWCxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ssUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBRUksYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNO2dCQUVnQixRQUFRO3NCQUE5QixTQUFTO3VCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBSZW5kZXJlcjIsXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmYtY2hhdGJvdC1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG48ZGl2XG4gICNtb2RhbFJlZlxuICBjbGFzcz1cInZmLWNvbnRlbnQgdmYtY2hhdGJvdC1tb2RhbC1jb250YWluZXIgdmYtY2hhdGJvdC1tb2RhbC1jb250YWluZXItLWluYWN0aXZlXCJcbiAgW2F0dHIuZGF0YS12Zi1jaGF0Ym90LWNvbmZpZ109XCJjb25maWcgfCBqc29uXCJcbiAgcm9sZT1cImRpYWxvZ1wiXG4gIFthdHRyLmFyaWEtbGFiZWxdPVwiY29uZmlnPy50aXRsZSArICcgY2hhdGJvdCdcIlxuICBkYXRhLXZmLWpzLWNoYXRib3QtbW9kYWwtY29udGFpbmVyXG4+XG4gIDwhLS0gSGVhZGVyIC0tPlxuICA8ZGl2IHJvbGU9XCJyZWdpb25cIiBhcmlhLWxhYmVsPVwiQ2hhdGJvdCBoZWFkZXJcIiBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX2hlYWRlclwiPlxuICAgIDxkaXYgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGFiZWw9XCJDaGF0Ym90IHNlbGVjdG9yXCIgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19oZWFkZXItbGVmdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZz8uc2VsZWN0b3JDb250ZXh0OyBlbHNlIHN0YXRpY1NlbGVjdG9yXCI+XG4gICAgICAgIDx2Zi1jaGF0Ym90LXNlbGVjdG9yIFtjb250ZXh0XT1cImNvbmZpZy5zZWxlY3RvckNvbnRleHRcIj48L3ZmLWNoYXRib3Qtc2VsZWN0b3I+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjc3RhdGljU2VsZWN0b3I+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LXNlbGVjdG9yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3Qtc2VsZWN0b3JfX3RpdGxlXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIFtzcmNdPVwiY29uZmlnPy5zZWxlY3RvckNvbnRleHQ/LnNlbGVjdG9yX2xvZ29fdXJsXCJcbiAgICAgICAgICAgICAgW2FsdF09XCJjb25maWc/LnNlbGVjdG9yQ29udGV4dD8uc2VsZWN0b3JfbG9nb190aXRsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3Qtc2VsZWN0b3JfX3RpdGxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2Zi1jaGF0Ym90LXNlbGVjdG9yX19tYWluLXRleHRcIj5cbiAgICAgICAgICAgICAgICB7eyBjb25maWc/LnNlbGVjdG9yQ29udGV4dD8uc2VsZWN0b3JfbG9nb190aXRsZSB9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX2hlYWRlci1yaWdodFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX21pbmltaXplXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIk1pbmltaXplIGNoYXRib3RcIlxuICAgICAgICBkYXRhLXZmLWpzLWNoYXRib3QtbW9kYWwtbWluaW1pemVcbiAgICAgID5cbiAgICAgICAgPGltZyBbc3JjXT1cImNvbmZpZz8uaWNvbnM/Lm1pbmltaXplXCIgYWx0PVwiTWluaW1pemUgY2hhdGJvdFwiIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19jbG9zZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBjaGF0Ym90XCJcbiAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLWNsb3NlXG4gICAgICA+XG4gICAgICAgIDxpbWcgW3NyY109XCJjb25maWc/Lmljb25zPy5jbG9zZVwiIGFsdD1cIkNsb3NlIGNoYXRib3RcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDwhLS0gTWFpbiBNb2RhbCAtLT5cbiAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWwgdmYtdS1iYWNrZ3JvdW5kLWNvbG9yLXVpLS1ncmV5LS1saWdodFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19jb250ZW50XCIgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLWNvbnRlbnQ+XG4gICAgICA8IS0tIFdlbGNvbWUgLS0+XG4gICAgICAgICAgPHZmLWNoYXRib3Qtd2VsY29tZVxuICAgICAgICAgICAgKm5nSWY9XCJjb25maWc/LmZlYXR1cmVzPy5lbmFibGVfd2VsY29tZVwiXG4gICAgICAgICAgICBbcWFEYXRhXT1cInFhRGF0YVwiXG4gICAgICAgICAgICBbd2VsY29tZV9sb2dvXT1cImNvbmZpZz8ud2VsY29tZV9sb2dvXCJcbiAgICAgICAgICAgIFt3ZWxjb21lX2xvZ29fdXJsXT1cImNvbmZpZz8uaWNvbnM/Lm1haW5fbG9nb191cmxcIlxuICAgICAgICAgICAgW3dlbGNvbWVfbG9nb19hbHRdPVwiY29uZmlnPy53ZWxjb21lX2xvZ29fYWx0XCJcbiAgICAgICAgICAgIFt3ZWxjb21lX3RpdGxlXT1cImNvbmZpZz8udGl0bGVcIlxuICAgICAgICAgICAgW3dlbGNvbWVfbWVzc2FnZV09XCJjb25maWc/LndlbGNvbWVfbWVzc2FnZVwiXG4gICAgICAgICAgICBbd2VsY29tZV9zdWdnZXN0aW9uc190aXRsZV09XCJjb25maWc/LndlbGNvbWVfc3VnZ2VzdGlvbnNfdGl0bGVcIlxuICAgICAgICAgICAgW2VuYWJsZV93ZWxjb21lX3N1Z2dlc3Rpb25zXT1cImNvbmZpZz8uZmVhdHVyZXM/LmVuYWJsZV93ZWxjb21lX3N1Z2dlc3Rpb25zXCJcbiAgICAgICAgICAgIFt3ZWxjb21lX21heF9zdWdnZXN0aW9uc109XCJjb25maWc/LndlbGNvbWVfbWF4X3N1Z2dlc3Rpb25zXCJcbiAgICAgICAgICAgIFtxYV9kYXRhX3VybF09XCJjb25maWc/LmFwaT8ucWFfZGF0YV91cmxcIlxuICAgICAgICAgICAgW2VuYWJsZV9xYV9kYXRhX2xvYWRpbmddPVwiY29uZmlnPy5mZWF0dXJlcz8uZW5hYmxlX3FhX2RhdGFfbG9hZGluZ1wiXG4gICAgICAgICAgICBbZW5hYmxlX3ByZWRlZmluZWRfcWFdPVwiY29uZmlnPy5mZWF0dXJlcz8uZW5hYmxlX3ByZWRlZmluZWRfcWFcIlxuICAgICAgICAgICAgW2VuYWJsZV9mYWxsYmFja19yZXNwb25zZXNdPVwiY29uZmlnPy5mZWF0dXJlcz8uZW5hYmxlX2ZhbGxiYWNrX3Jlc3BvbnNlc1wiXG4gICAgICAgICAgPjwvdmYtY2hhdGJvdC13ZWxjb21lPlxuXG4gICAgICA8IS0tIE1lc3NhZ2VzIC0tPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ3ZmLWNoYXRib3QtbW9kYWxfX21lc3NhZ2VzJzogY29uZmlnPy5iZWhhdmlvcj8uc2hvd19zY3JvbGxiYXIgIT09IGZhbHNlLFxuICAgICAgICAgICAgICAndmYtY2hhdGJvdC1tb2RhbF9fbWVzc2FnZXMtbm8tc2Nyb2xsYmFyJzogY29uZmlnPy5iZWhhdmlvcj8uc2hvd19zY3JvbGxiYXIgPT09IGZhbHNlXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC1tb2RhbC1tZXNzYWdlc1xuICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvLXNjcm9sbF09XCJjb25maWc/LmJlaGF2aW9yPy5hdXRvX3Njcm9sbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDx2Zi1jaGF0Ym90LXByb21wdFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBtc2cgb2YgbWVzc2FnZXNcIlxuICAgICAgICAgIFt0eXBlXT1cIm1zZy50eXBlXCJcbiAgICAgICAgICBbYXZhdGFyXT1cIm1zZy5hdmF0YXJcIlxuICAgICAgICAgIFtjb250ZW50XT1cIm1zZy5jb250ZW50XCJcbiAgICAgICAgICBbc291cmNlc109XCJzb3VyY2VzXCJcbiAgICAgICAgICBbcHJvbXB0c109XCJwcm9tcHRzXCJcbiAgICAgICAgICBbYWxsb3dGZWVkYmFja109XCJjb25maWc/LmZlYXR1cmVzPy5lbmFibGVfZmVlZGJhY2tcIlxuICAgICAgICA+PC92Zi1jaGF0Ym90LXByb21wdD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIERpc2NsYWltZXIgLS0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nSWY9XCJjb25maWc/LmRpc2NsYWltZXIgJiYgY29uZmlnPy5mZWF0dXJlcz8uZW5hYmxlX2Rpc2NsYWltZXJcIlxuICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19kaXNjbGFpbWVyXCIgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLWRpc2NsYWltZXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtYmFubmVyIHZmLWJhbm5lci0tYWxlcnQgdmYtYmFubmVyLS1pbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1iYW5uZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ2Zi1iYW5uZXJfX3RleHRcIlxuICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJjb25maWcuZGlzY2xhaW1lclwiXG4gICAgICAgICAgICAgICAgPjwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZSBub3RpZmljYXRpb24gYmFubmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidmYtYnV0dG9uIHZmLWJ1dHRvbi0taWNvbiB2Zi1idXR0b24tLWRpc21pc3MgfCB2Zi1iYW5uZXJfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY29uZmlnPy5vbkRpc21pc3NEaXNjbGFpbWVyPy4oKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+ZGlzbWlzcyBiYW5uZXI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTQuMywxMi4xNzlhLjI1LjI1LDAsMCwxLDAtLjM1NGw5LjI2My05LjI2MkExLjUsMS41LDAsMCwwLDIxLjQzOS40NDJMMTIuMTc3LDkuN2EuMjUuMjUsMCwwLDEtLjM1NCwwTDIuNTYxLjQ0MkExLjUsMS41LDAsMCwwLC40MzksMi41NjNMOS43LDExLjgyNWEuMjUuMjUsMCwwLDEsMCwuMzU0TC40MzksMjEuNDQyYTEuNSwxLjUsMCwwLDAsMi4xMjIsMi4xMjFMMTEuODIzLDE0LjNhLjI1LjI1LDAsMCwxLC4zNTQsMGw5LjI2Miw5LjI2M2ExLjUsMS41LDAsMCwwLDIuMTIyLTIuMTIxWlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8IS0tIElucHV0IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1tb2RhbF9faW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtbW9kYWxfX2lucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBjbGFzcz1cInZmLXUtc3Itb25seVwiXG4gICAgICAgICAgICAgIGlkPVwidmYtY2hhdGJvdC1tb2RhbC1pbnB1dC1sYWJlbFwiXG4gICAgICAgICAgICAgIGZvcj1cInZmLWNoYXRib3QtbW9kYWwtaW5wdXRcIlxuICAgICAgICAgICAgICA+QXNrIG1lPC9sYWJlbFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGlkPVwidmYtY2hhdGJvdC1tb2RhbC1pbnB1dFwiXG4gICAgICAgICAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC1tb2RhbC1pbnB1dFxuICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ2Zi1jaGF0Ym90LW1vZGFsLWlucHV0LWxhYmVsXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1vZGFsX19pbnB1dCB2Zi1mb3JtX190ZXh0YXJlYSB2Zi11LXBhZGRpbmdfX2xlZnQtLTQwMFwiXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWc/LmlucHV0X3BsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgcm93cz1cIjFcIlxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1tb2RhbF9fc2VuZC1idXR0b25cIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VuZCBtZXNzYWdlXCJcbiAgICAgICAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LW1vZGFsLXNlbmRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZyBbc3JjXT1cImNvbmZpZz8uaWNvbnM/LnNlbmRfYnV0dG9uXCIgYWx0PVwiU2VuZFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nSWY9XCJjb25maWc/LmZvb3Rub3RlXCJcbiAgICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1tb2RhbF9fZm9vdG5vdGUgdmYtdS1tYXJnaW5fX3RvcC0tMjAwXCJcbiAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiY29uZmlnLmZvb3Rub3RlXCJcbiAgICAgICAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC1tb2RhbC1mb290bm90ZVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIDwhLS0gRGlhbG9nIC0tPlxuICAgICAgICA8dmYtY2hhdGJvdC1kaWFsb2dcbiAgICAgICAgICBbdGl0bGVdPVwiJ0Nsb3NlIGNoYXQgYW5kIGRlbGV0ZSBjb252ZXJzYXRpb24/J1wiXG4gICAgICAgICAgW21lc3NhZ2VdPSBcIidBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2UgdGhlIGNoYXQ/IDxicj5Zb3VyIGN1cnJlbnQgY29udmVyc2F0aW9uIGhpc3Rvcnkgd2lsbCBiZSBwZXJtYW5lbnRseSBkZWxldGVkLidcIlxuICAgICAgICAgIFtjYW5jZWxMYWJlbF0gPSBcIidLZWVwIGNoYXQgb3BlbidcIlxuICAgICAgICAgIFtjb25maXJtTGFiZWxdID0gXCInQ2xvc2UgYW5kIGRlbGV0ZSdcIlxuICAgICAgICA+PC92Zi1jaGF0Ym90LWRpYWxvZz5cbiAgICAgICAgPHRlbXBsYXRlIGlkPVwidXNlci1tZXNzYWdlLXRlbXBsYXRlXCI+XG4gICAgICAgICAgPHZmLWNoYXRib3QtcHJvbXB0XG4gICAgICAgICAgW3R5cGVdPSBcIid1c2VyJ1wiXG4gICAgICAgICAgW2NvbnRlbnRdPSBcIidIZWxsbyEnXCJcbiAgICAgICAgICBbYXZhdGFyXT1cIntcbiAgICAgICAgICAgIHNyYzogY29uZmlnLmljb25zLnVzZXJfYXZhdGFyLFxuICAgICAgICAgICAgYWx0OiAnWW91ciBhdmF0YXInLFxuICAgICAgICAgICAgbmFtZTogJ1lvdSdcbiAgICAgICAgICB9XCJcbiAgICAgICAgPjwvdmYtY2hhdGJvdC1wcm9tcHQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuZmVhdHVyZXMuZW5hYmxlX3R5cGluZ19pbmRpY2F0b3JcIj5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSBpZCA9IFwibG9hZGluZy1pbmRpY2F0b3ItdGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDx2Zi1jaGF0Ym90LXByb21wdFxuICAgICAgICAgICAgICBbdHlwZV09XCInYXNzaXN0YW50J1wiXG4gICAgICAgICAgICAgIFtpc0xvYWRpbmddPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIFthdmF0YXJdPVwie1xuICAgICAgICAgICAgICAgIHNyYzogY29uZmlnLmljb25zLmFzc2lzdGFudF9hdmF0YXIsXG4gICAgICAgICAgICAgICAgYWx0OiBjb25maWcudGl0bGUsXG4gICAgICAgICAgICAgICAgbmFtZTogY29uZmlnLnRpdGxlXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPjwvdmYtY2hhdGJvdC1wcm9tcHQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPHRlbXBsYXRlIGlkPVwiYXNzaXN0YW50LW1lc3NhZ2UtdGVtcGxhdGVcIj5cbiAgICAgICAgPHZmLWNoYXRib3QtcHJvbXB0XG4gICAgICAgICAgW3R5cGVdPSBcIidhc3Npc3RhbnQnXCJcbiAgICAgICAgICBbY29udGVudF09IFwiJ0hvdyBjYW4gSSBoZWxwIHlvdT8nXCJcbiAgICAgICAgICBbYXZhdGFyXT1cIntcbiAgICAgICAgICAgIHNyYzogY29uZmlnLmljb25zLmFzc2lzdGFudF9hdmF0YXIsXG4gICAgICAgICAgICBhbHQ6IGNvbmZpZy50aXRsZSxcbiAgICAgICAgICAgIG5hbWU6IGNvbmZpZy50aXRsZVxuICAgICAgICAgIH1cIlxuICAgICAgICAgIFthbGxvd0ZlZWRiYWNrXT0gXCJjb25maWcuZmVhdHVyZXMuZW5hYmxlX2ZlZWRiYWNrXCJcbiAgICAgICAgICA+PC92Zi1jaGF0Ym90LXByb21wdD5cbiAgICAgICAgPCEtLSBGZWVkYmFjayAtLT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtZmVlZGJhY2sgdmYtdS1tYXJnaW5fX3RvcC0tMjAwXCIgXG4gICAgICAgICAgKm5nSWY9XCJjb25maWcuZmVhdHVyZXMuZW5hYmxlX2ZlZWRiYWNrXCIgXG4gICAgICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LWZlZWRiYWNrPlxuICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIFxuICAgICAgICA8dGVtcGxhdGUgaWQ9XCJzaW5nbGUtYWN0aW9uLXByb21wdC10ZW1wbGF0ZVwiPlxuICAgICAgICA8dmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0PlxuICAgICAgICBbYWN0aW9uX3RleHRdPSBcIlwiLFxuICAgICAgICBbYWN0aW9uX3VybF09IFwiI1wiXG4gICAgICAgID48L3ZmLWNoYXRib3QtYWN0aW9uLXByb21wdD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlkPVwiYWN0aW9uLXByb21wdHMtdGVtcGxhdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0cyB2Zi11LW1hcmdpbl9fdG9wLS00MDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0c19fbGlzdFwiIGRhdGEtdmYtanMtYWN0aW9uLXByb21wdHMtbGlzdD5cbiAgICAgICAgICAgIDwhLS0gSW5kaXZpZHVhbCBwcm9tcHRzIHdpbGwgYmUgcG9wdWxhdGVkIGhlcmUgLS0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmZlYXR1cmVzLmVuYWJsZV9mZWVkYmFja1wiPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlIGlkPVwiZmVlZGJhY2stcG9zaXRpdmUtdGVtcGxhdGVcIj5cbiAgICAgICAgICA8dmYtY2hhdGJvdC1mZWVkYmFja1xuICAgICAgICAgIFt0eXBlXT1cIidwb3NpdGl2ZSdcIlxuICAgICAgICAgIFtmZWVkYmFja19vcHRpb25zXT1cImNvbmZpZy5mZWVkYmFja19vcHRpb25zLnBvc2l0aXZlXCI+PC92Zi1jaGF0Ym90LWZlZWRiYWNrPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaWQ9XCJmZWVkYmFjay1uZWdhdGl2ZS10ZW1wbGF0ZVwiPlxuICAgICAgICA8dmYtY2hhdGJvdC1mZWVkYmFja1xuICAgICAgICAgW3R5cGVdPVwiJ25lZ2F0aXZlJ1wiXG4gICAgICAgIFtmZWVkYmFja19vcHRpb25zXT1cImNvbmZpZy5mZWVkYmFja19vcHRpb25zLm5lZ2F0aXZlXCI+PC92Zi1jaGF0Ym90LWZlZWRiYWNrPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFZmQ2hhdGJvdE1vZGFsQW5ndWxhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBjb25maWc6IGFueTtcbiAgICBASW5wdXQoKSBtZXNzYWdlczogYW55W10gPSBbXTtcbiAgICBASW5wdXQoKSBzb3VyY2VzOiBhbnlbXSA9IFtdO1xuICAgIEBJbnB1dCgpIHByb21wdHM6IGFueVtdID0gW107XG4gICAgQElucHV0KCkgaW5wdXRWYWx1ZSA9ICcnO1xuICBcbiAgICBAT3V0cHV0KCkgb25TZW5kTWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICBAT3V0cHV0KCkgb25JbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG9uRmVlZGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25EaWFsb2dDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgIEBPdXRwdXQoKSBvbkRpYWxvZ0NhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgXG4gICAgQFZpZXdDaGlsZCgnbW9kYWxSZWYnKSBtb2RhbFJlZiE6IEVsZW1lbnRSZWY7XG4gIFxuICAgIHFhRGF0YTogYW55W10gPSBbXTtcbiAgICBwcml2YXRlIGxvYWRlZFNjcmlwdHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudFxuICAgICkge31cbiAgXG4gICAgbmdPbkluaXQoKSB7fVxuICBcbiAgICBhc3luYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnVkYgQ2hhdGJvdCBtb2RhbCBjb21wb25lbnQgaW5pdGlhbGl6aW5nLi4uJyk7XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIExvYWQgb25seSB0aGUgd29ya2luZyBzY3JpcHRzIGluZGl2aWR1YWxseVxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRXb3JraW5nU2NyaXB0cygpO1xuICAgICAgICBcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBjaGF0Ym90IGZ1bmN0aW9uYWxpdHkgIFxuICAgICAgICB0aGlzLmluaXRpYWxpemVDaGF0Ym90KCk7XG4gICAgICAgIFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgY2hhdGJvdCBzY3JpcHRzOicsIGVycm9yKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEZhbGxiYWNrOiB0cnkgYmFzaWMgaW5pdGlhbGl6YXRpb24gaW4gY2FzZSBzY3JpcHRzIGFyZSBhbHJlYWR5IGxvYWRlZFxuICAgICAgICBjb25zb2xlLmxvZygnVHJ5aW5nIGZhbGxiYWNrIGluaXRpYWxpemF0aW9uLi4uJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNoYXRib3QoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coJ0NoYXRib3QgbW9kYWwgY29tcG9uZW50IHJlYWR5JywgdGhpcy5tb2RhbFJlZik7XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBMb2FkIGNoYXRib3Qgc2NyaXB0cyBhcyBFUzYgbW9kdWxlc1xuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgbG9hZFdvcmtpbmdTY3JpcHRzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgRVM2IG1vZHVsZXMuLi4nKTtcbiAgICAgIFxuICAgICAgLy8gQWxsIGNoYXRib3QgZmlsZXMgYXJlIEVTNiBtb2R1bGVzIChoYXZlIGV4cG9ydHMpXG4gICAgICBjb25zdCBtb2R1bGVTY3JpcHRzID0gW1xuICAgICAgICAnYXNzZXRzL3ZmLWNoYXRib3QtZmFiL3ZmLWNoYXRib3QtZmFiLmpzJyxcbiAgICAgICAgJ2Fzc2V0cy92Zi1jaGF0Ym90LWRpYWxvZy92Zi1jaGF0Ym90LWRpYWxvZy5qcycsXG4gICAgICAgICdhc3NldHMvdmYtY2hhdGJvdC1mZWVkYmFjay92Zi1jaGF0Ym90LWZlZWRiYWNrLmpzJyxcbiAgICAgICAgJ2Fzc2V0cy92Zi1jaGF0Ym90LXNlbGVjdG9yL3ZmLWNoYXRib3Qtc2VsZWN0b3IuanMnLFxuICAgICAgICAnYXNzZXRzL3ZmLWNoYXRib3Qtc291cmNlcy92Zi1jaGF0Ym90LXNvdXJjZXMuanMnLFxuICAgICAgICAnYXNzZXRzL3ZmLWNoYXRib3Qtd2VsY29tZS92Zi1jaGF0Ym90LXdlbGNvbWUuanMnXG4gICAgICBdO1xuICAgICAgXG4gICAgICAvLyBUaGVzZSBoYXZlIGJvdGggaW1wb3J0cyBBTkQgZXhwb3J0cywgc28gdGhleSBuZWVkIHRoZWlyIGRlcGVuZGVuY2llcyBsb2FkZWQgZmlyc3RcbiAgICAgIGNvbnN0IG1vZHVsZVNjcmlwdHNXaXRoRGVwZW5kZW5jaWVzID0gW1xuICAgICAgICAnYXNzZXRzL3ZmLWNoYXRib3QvdmYtY2hhdGJvdC5qcycsICAgICAgICAgICAgICAgLy8gSGFzIGltcG9ydHMgZnJvbSBvdGhlciBtb2R1bGVzXG4gICAgICAgICdhc3NldHMvdmYtY2hhdGJvdC1tb2RhbC92Zi1jaGF0Ym90LW1vZGFsLmpzJywgICAvLyBIYXMgaW1wb3J0cyBmcm9tIG90aGVyIG1vZHVsZXNcbiAgICAgICAgJ2Fzc2V0cy92Zi1jaGF0Ym90LXN0YW5kYWxvbmUvdmYtY2hhdGJvdC1zdGFuZGFsb25lLmpzJyAvLyBIYXMgaW1wb3J0cyBmcm9tIG90aGVyIG1vZHVsZXNcbiAgICAgIF07XG4gICAgICBcbiAgICAgIC8vIExvYWQgaW5kZXBlbmRlbnQgbW9kdWxlcyBmaXJzdFxuICAgICAgZm9yIChjb25zdCBzY3JpcHRTcmMgb2YgbW9kdWxlU2NyaXB0cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFNpbmdsZVNjcmlwdChzY3JpcHRTcmMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2tpcHBlZCAke3NjcmlwdFNyY306YCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFRoZW4gbG9hZCBtb2R1bGVzIHdpdGggZGVwZW5kZW5jaWVzXG4gICAgICBmb3IgKGNvbnN0IHNjcmlwdFNyYyBvZiBtb2R1bGVTY3JpcHRzV2l0aERlcGVuZGVuY2llcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFNpbmdsZVNjcmlwdChzY3JpcHRTcmMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgU2tpcHBlZCAke3NjcmlwdFNyY306YCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBMb2FkIGEgc2luZ2xlIHNjcmlwdCBhcyBFUzYgbW9kdWxlXG4gICAgICovXG4gICAgcHJpdmF0ZSBsb2FkU2luZ2xlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5sb2FkZWRTY3JpcHRzLmhhcyhzcmMpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFNjcmlwdCBhbHJlYWR5IGxvYWRlZCBpbiBjYWNoZTogJHtzcmN9YCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgc2NyaXB0IGFscmVhZHkgZXhpc3RzIGluIERPTVxuICAgICAgICBjb25zdCBleGlzdGluZ1NjcmlwdCA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYz1cIiR7c3JjfVwiXWApO1xuICAgICAgICBpZiAoZXhpc3RpbmdTY3JpcHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgU2NyaXB0IGFscmVhZHkgbG9hZGVkIGluIERPTTogJHtzcmN9YCk7XG4gICAgICAgICAgdGhpcy5sb2FkZWRTY3JpcHRzLmFkZChzcmMpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ21vZHVsZSc7IC8vIExvYWQgYXMgRVM2IG1vZHVsZVxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRlZFNjcmlwdHMuYWRkKHNyYyk7XG4gICAgICAgICAgY29uc29sZS5sb2coYExvYWRlZCBFUzYgbW9kdWxlOiAke3NyY31gKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBzY3JpcHQub25lcnJvciA9IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxvYWQgbW9kdWxlOiAke3NyY31gLCBlcnJvcik7XG4gICAgICAgICAgLy8gTWFyayBhcyBmYWlsZWQgYnV0IHJlc29sdmUgdG8gY29udGludWUgd2l0aCBvdGhlciBzY3JpcHRzXG4gICAgICAgICAgdGhpcy5sb2FkZWRTY3JpcHRzLmFkZChzcmMgKyAnX2ZhaWxlZCcpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5oZWFkLCBzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfVxuICBcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGNoYXRib3QgZnVuY3Rpb25hbGl0eSBhZnRlciBzY3JpcHRzIGFyZSBsb2FkZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRpYWxpemVDaGF0Ym90KCk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ0luaXRpYWxpemluZyBjaGF0Ym90IGZ1bmN0aW9uYWxpdHkuLi4nKTtcbiAgICAgIFxuICAgICAgLy8gQWNjZXNzIHRoZSBnbG9iYWxseSBleHBvc2VkIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uc1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGluaXRpYWxpemVkQ291bnQgPSAwO1xuICAgICAgICBcbiAgICAgICAgLy8gQWxsIHBvdGVudGlhbCBpbml0aWFsaXphdGlvbiBmdW5jdGlvbnMgZnJvbSBFUzYgbW9kdWxlc1xuICAgICAgICBjb25zdCBhbGxJbml0RnVuY3Rpb25zID0gW1xuICAgICAgICAgICdpbml0VkZDaGF0Ym90RmFiJyxcbiAgICAgICAgICAnaW5pdFZGQ2hhdGJvdERpYWxvZycsIFxuICAgICAgICAgICdpbml0VkZDaGF0Ym90RmVlZGJhY2snLFxuICAgICAgICAgICdpbml0VkZDaGF0Ym90U2VsZWN0b3InLFxuICAgICAgICAgICdpbml0VkZDaGF0Ym90U291cmNlcycsXG4gICAgICAgICAgJ2luaXRWRkNoYXRib3RXZWxjb21lJyxcbiAgICAgICAgICAnaW5pdFZGQ2hhdGJvdCcgXG4gICAgICAgIF07XG4gICAgICAgIFxuICAgICAgICBhbGxJbml0RnVuY3Rpb25zLmZvckVhY2goZnVuY05hbWUgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgKHdpbmRvdyBhcyBhbnkpW2Z1bmNOYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKGZ1bmNOYW1lID09PSAnaW5pdFZGQ2hhdGJvdCcpIHtcbiAgICAgICAgICAgICAgICAod2luZG93IGFzIGFueSlbZnVuY05hbWVdKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAod2luZG93IGFzIGFueSlbZnVuY05hbWVdKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7ZnVuY05hbWV9IGluaXRpYWxpemVkYCk7XG4gICAgICAgICAgICAgIGluaXRpYWxpemVkQ291bnQrKztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtmdW5jTmFtZX0gZmFpbGVkIHRvIGluaXRpYWxpemU6YCwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtmdW5jTmFtZX0gbm90IGF2YWlsYWJsZSAobW9kdWxlIG1heSBub3QgaGF2ZSBsb2FkZWQpYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGBDaGF0Ym90IGluaXRpYWxpemF0aW9uIGNvbXBsZXRlLiAke2luaXRpYWxpemVkQ291bnR9IGNvbXBvbmVudHMgaW5pdGlhbGl6ZWQuYCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaW5pdGlhbGl6ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignTm8gY2hhdGJvdCBmdW5jdGlvbnMgd2VyZSBpbml0aWFsaXplZC4gQ2hlY2sgdGhhdCBFUzYgbW9kdWxlcyBsb2FkZWQgY29ycmVjdGx5LicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIGNoYXRib3QgZnVuY3Rpb25hbGl0eTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxufVxuIl19