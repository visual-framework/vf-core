import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewEncapsulation, Inject, Input, Output, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DOCUMENT } from '@angular/common';

class VfChatbotStandaloneAngularComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
        this.config = {};
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
        try {
            await this.loadWorkingScripts();
            this.initializeChatbot();
        }
        catch {
            this.initializeChatbot();
        }
    }
    async loadWorkingScripts() {
        const moduleScripts = [
            '/assets/vf-chatbot-fab/vf-chatbot-fab.js',
            '/assets/vf-chatbot-dialog/vf-chatbot-dialog.js',
            '/assets/vf-chatbot-feedback/vf-chatbot-feedback.js',
            '/assets/vf-chatbot-selector/vf-chatbot-selector.js',
            '/assets/vf-chatbot-sources/vf-chatbot-sources.js',
            '/assets/vf-chatbot-welcome/vf-chatbot-welcome.js'
        ];
        const moduleScriptsWithDependencies = [
            '/assets/vf-chatbot/vf-chatbot.js',
            '/assets/vf-chatbot-modal/vf-chatbot-modal.js',
            '/assets/vf-chatbot-standalone/vf-chatbot-standalone.js'
        ];
        for (const scriptSrc of moduleScripts) {
            try {
                await this.loadSingleScript(scriptSrc);
            }
            catch {
                // Keep loading remaining scripts; standalone init tolerates missing optional modules.
            }
        }
        for (const scriptSrc of moduleScriptsWithDependencies) {
            try {
                await this.loadSingleScript(scriptSrc);
            }
            catch {
                // Keep loading remaining scripts; standalone init tolerates missing optional modules.
            }
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
            // Fall through to script tag loading if dynamic import fails.
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
    initializeChatbot() {
        const allInitFunctions = [
            'initVFChatbotFab',
            'initVFChatbotDialog',
            'initVFChatbotFeedback',
            'initVFChatbotSelector',
            'initVFChatbotSources',
            'initVFChatbotWelcome',
            'initVFChatbotStandalone',
            'initVFChatbotModal',
            'initVFChatbot'
        ];
        allInitFunctions.forEach(funcName => {
            if (typeof window[funcName] === 'function') {
                try {
                    window[funcName]();
                }
                catch {
                    // Continue initializing available modules.
                }
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotStandaloneAngularComponent, deps: [{ token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotStandaloneAngularComponent, selector: "vf-chatbot-standalone", inputs: { config: "config", messages: "messages", sources: "sources", prompts: "prompts", inputValue: "inputValue" }, outputs: { onSendMessage: "onSendMessage", onInputChange: "onInputChange", onFeedback: "onFeedback", onDialogConfirm: "onDialogConfirm", onDialogCancel: "onDialogCancel" }, viewQueries: [{ propertyName: "standaloneRef", first: true, predicate: ["standaloneRef"], descendants: true }], ngImport: i0, template: ``, isInline: true, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotStandaloneAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-standalone',
                    template: ``,
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
class VfChatbotStandalonePageComponent {
    constructor() {
        this.chatbotConfig = {
            type: 'standalone',
            title: 'Visual Framework Assistant',
            welcome_logo: true,
            welcome_message: "Welcome! I'm here to help with Visual Framework components.",
            welcome_logo_alt: 'Visual Framework Assistant',
            welcome_suggestions_title: 'Try asking me:',
            input_placeholder: 'Ask a question...',
            welcome_max_suggestions: 4,
            disclaimer: 'This demo chatbot is for internal component testing and UI exploration.',
            footnote: 'Review generated responses before using them in production.',
            icons: {
                assistant_avatar: './assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg',
                user_avatar: './assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg',
                send_button: './assets/vf-chatbot/assets/vf-chatbot--icon-send.svg',
                minimize: './assets/vf-chatbot/assets/vf-chatbot--icon-minimize.svg',
                close: './assets/vf-chatbot/assets/vf-chatbot--icon-close.svg',
                main_logo_url: './assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg'
            },
            features: {
                enable_welcome: true,
                enable_welcome_suggestions: true,
                enable_qa_data_loading: true,
                enable_predefined_qa: true,
                enable_fallback_responses: true,
                enable_feedback: true,
                enable_disclaimer: true,
                enable_typing_indicator: true
            },
            behavior: {
                show_scrollbar: true,
                auto_scroll: true
            },
            api: {
                qa_data_url: './assets/vf-chatbot/assets/vf-chatbot-qa.json'
            }
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotStandalonePageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotStandalonePageComponent, isStandalone: true, selector: "app-vf-chatbot-standalone-page", ngImport: i0, template: `
    <vf-chatbot
      [config]="chatbotConfig"
      [qaData]="[]"
      [messages]="[]"
      [sources]="[]"
      [prompts]="[]"
    ></vf-chatbot>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotStandalonePageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-vf-chatbot-standalone-page',
                    standalone: true,
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
                    template: `
    <vf-chatbot
      [config]="chatbotConfig"
      [qaData]="[]"
      [messages]="[]"
      [sources]="[]"
      [prompts]="[]"
    ></vf-chatbot>
  `
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotStandaloneAngularComponent, VfChatbotStandalonePageComponent };
//# sourceMappingURL=visual-framework-vf-chatbot-standalone.angular.mjs.map
