import * as i0 from '@angular/core';
import { EventEmitter, Component, Inject, Input, Output, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i2 from 'vf-chatbot-action-prompt.angular';
import { VfChatbotActionPromptAngularModule } from 'vf-chatbot-action-prompt.angular';
import * as i3 from 'vf-chatbot-selector.angular';
import { VfChatbotSelectorAngularModule } from 'vf-chatbot-selector.angular';
import * as i4 from 'vf-chatbot-welcome.angular';
import { VfChatbotWelcomeAngularModule } from 'vf-chatbot-welcome.angular';
import * as i5 from 'vf-chatbot-prompt.angular';
import { VfChatbotPromptAngularModule } from 'vf-chatbot-prompt.angular';
import * as i6 from 'vf-chatbot-feedback.angular';
import { VfChatbotFeedbackAngularModule } from 'vf-chatbot-feedback.angular';
import * as i7 from 'vf-chatbot-dialog.angular';
import { VfChatbotDialogAngularModule } from 'vf-chatbot-dialog.angular';

class VfChatbotModalAngularComponent {
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

class VfChatbotModalAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularModule, declarations: [VfChatbotModalAngularComponent], imports: [CommonModule,
            FormsModule,
            VfChatbotActionPromptAngularModule,
            VfChatbotSelectorAngularModule,
            VfChatbotWelcomeAngularModule,
            VfChatbotPromptAngularModule,
            VfChatbotFeedbackAngularModule,
            VfChatbotDialogAngularModule], exports: [VfChatbotModalAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotModalAngularModule, imports: [CommonModule,
            FormsModule,
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
                    declarations: [
                        VfChatbotModalAngularComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
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

/*
 * Public API Surface of vf-chatbot-modal.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotModalAngularComponent, VfChatbotModalAngularModule };
//# sourceMappingURL=vf-chatbot-modal.angular.mjs.map
