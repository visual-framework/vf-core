import { Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, Inject, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
export class VfChatbotStandaloneAngularComponent {
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
export class VfChatbotStandalonePageComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1zdGFuZGFsb25lLmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvdmYtY2hhdGJvdC1zdGFuZGFsb25lLmFuZ3VsYXIvc3JjL2xpYi92Zi1jaGF0Ym90LXN0YW5kYWxvbmUuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWixTQUFTLEVBQ1QsaUJBQWlCLEVBRWpCLE1BQU0sRUFDTixzQkFBc0IsRUFDdEIsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFPM0MsTUFBTSxPQUFPLG1DQUFtQztJQWtCOUMsWUFDVSxRQUFtQixFQUNELFFBQWtCO1FBRHBDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBbkJyQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFZixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBQzFDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUMzQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFJcEQsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQUNYLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztJQUt2QyxDQUFDO0lBRUosUUFBUSxLQUFJLENBQUM7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QWdCLENBQUM7b0JBQ25ELFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFJlbmRlcmVyMixcbiAgSW5qZWN0LFxuICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLFxuICBOT19FUlJPUlNfU0NIRU1BLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmYtY2hhdGJvdC1zdGFuZGFsb25lJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBWZkNoYXRib3RTdGFuZGFsb25lQW5ndWxhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZzogYW55ID0ge307XG4gIEBJbnB1dCgpIG1lc3NhZ2VzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBzb3VyY2VzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBwcm9tcHRzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBpbnB1dFZhbHVlID0gJyc7XG5cbiAgQE91dHB1dCgpIG9uU2VuZE1lc3NhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBvbklucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uRmVlZGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uRGlhbG9nQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG9uRGlhbG9nQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3N0YW5kYWxvbmVSZWYnKSBzdGFuZGFsb25lUmVmITogRWxlbWVudFJlZjtcblxuICBxYURhdGE6IGFueVtdID0gW107XG4gIHByaXZhdGUgbG9hZGVkU2NyaXB0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGFzeW5jIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5sb2FkV29ya2luZ1NjcmlwdHMoKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUNoYXRib3QoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUNoYXRib3QoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRXb3JraW5nU2NyaXB0cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtb2R1bGVTY3JpcHRzID0gW1xuICAgICAgJy9hc3NldHMvdmYtY2hhdGJvdC1mYWIvdmYtY2hhdGJvdC1mYWIuanMnLFxuICAgICAgJy9hc3NldHMvdmYtY2hhdGJvdC1kaWFsb2cvdmYtY2hhdGJvdC1kaWFsb2cuanMnLFxuICAgICAgJy9hc3NldHMvdmYtY2hhdGJvdC1mZWVkYmFjay92Zi1jaGF0Ym90LWZlZWRiYWNrLmpzJyxcbiAgICAgICcvYXNzZXRzL3ZmLWNoYXRib3Qtc2VsZWN0b3IvdmYtY2hhdGJvdC1zZWxlY3Rvci5qcycsXG4gICAgICAnL2Fzc2V0cy92Zi1jaGF0Ym90LXNvdXJjZXMvdmYtY2hhdGJvdC1zb3VyY2VzLmpzJyxcbiAgICAgICcvYXNzZXRzL3ZmLWNoYXRib3Qtd2VsY29tZS92Zi1jaGF0Ym90LXdlbGNvbWUuanMnXG4gICAgXTtcblxuICAgIGNvbnN0IG1vZHVsZVNjcmlwdHNXaXRoRGVwZW5kZW5jaWVzID0gW1xuICAgICAgJy9hc3NldHMvdmYtY2hhdGJvdC92Zi1jaGF0Ym90LmpzJyxcbiAgICAgICcvYXNzZXRzL3ZmLWNoYXRib3QtbW9kYWwvdmYtY2hhdGJvdC1tb2RhbC5qcycsXG4gICAgICAnL2Fzc2V0cy92Zi1jaGF0Ym90LXN0YW5kYWxvbmUvdmYtY2hhdGJvdC1zdGFuZGFsb25lLmpzJ1xuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IHNjcmlwdFNyYyBvZiBtb2R1bGVTY3JpcHRzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTaW5nbGVTY3JpcHQoc2NyaXB0U3JjKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBLZWVwIGxvYWRpbmcgcmVtYWluaW5nIHNjcmlwdHM7IHN0YW5kYWxvbmUgaW5pdCB0b2xlcmF0ZXMgbWlzc2luZyBvcHRpb25hbCBtb2R1bGVzLlxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2NyaXB0U3JjIG9mIG1vZHVsZVNjcmlwdHNXaXRoRGVwZW5kZW5jaWVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTaW5nbGVTY3JpcHQoc2NyaXB0U3JjKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBLZWVwIGxvYWRpbmcgcmVtYWluaW5nIHNjcmlwdHM7IHN0YW5kYWxvbmUgaW5pdCB0b2xlcmF0ZXMgbWlzc2luZyBvcHRpb25hbCBtb2R1bGVzLlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZFNpbmdsZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmxvYWRlZFNjcmlwdHMuaGFzKHNyYykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gc3JjKTtcbiAgICAgIHRoaXMubG9hZGVkU2NyaXB0cy5hZGQoc3JjKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEZhbGwgdGhyb3VnaCB0byBzY3JpcHQgdGFnIGxvYWRpbmcgaWYgZHluYW1pYyBpbXBvcnQgZmFpbHMuXG4gICAgfVxuXG4gICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nU2NyaXB0ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjPVwiJHtzcmN9XCJdYCk7XG4gICAgICBpZiAoZXhpc3RpbmdTY3JpcHQpIHtcbiAgICAgICAgdGhpcy5sb2FkZWRTY3JpcHRzLmFkZChzcmMpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC50eXBlID0gJ21vZHVsZSc7XG4gICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZWRTY3JpcHRzLmFkZChzcmMpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuXG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZWRTY3JpcHRzLmFkZChgJHtzcmN9X2ZhaWxlZGApO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuaGVhZCwgc2NyaXB0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUNoYXRib3QoKTogdm9pZCB7XG4gICAgY29uc3QgYWxsSW5pdEZ1bmN0aW9ucyA9IFtcbiAgICAgICdpbml0VkZDaGF0Ym90RmFiJyxcbiAgICAgICdpbml0VkZDaGF0Ym90RGlhbG9nJyxcbiAgICAgICdpbml0VkZDaGF0Ym90RmVlZGJhY2snLFxuICAgICAgJ2luaXRWRkNoYXRib3RTZWxlY3RvcicsXG4gICAgICAnaW5pdFZGQ2hhdGJvdFNvdXJjZXMnLFxuICAgICAgJ2luaXRWRkNoYXRib3RXZWxjb21lJyxcbiAgICAgICdpbml0VkZDaGF0Ym90U3RhbmRhbG9uZScsXG4gICAgICAnaW5pdFZGQ2hhdGJvdE1vZGFsJyxcbiAgICAgICdpbml0VkZDaGF0Ym90J1xuICAgIF07XG5cbiAgICBhbGxJbml0RnVuY3Rpb25zLmZvckVhY2goZnVuY05hbWUgPT4ge1xuICAgICAgaWYgKHR5cGVvZiAod2luZG93IGFzIGFueSlbZnVuY05hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgKHdpbmRvdyBhcyBhbnkpW2Z1bmNOYW1lXSgpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBDb250aW51ZSBpbml0aWFsaXppbmcgYXZhaWxhYmxlIG1vZHVsZXMuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdmYtY2hhdGJvdC1zdGFuZGFsb25lLXBhZ2UnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHZmLWNoYXRib3RcbiAgICAgIFtjb25maWddPVwiY2hhdGJvdENvbmZpZ1wiXG4gICAgICBbcWFEYXRhXT1cIltdXCJcbiAgICAgIFttZXNzYWdlc109XCJbXVwiXG4gICAgICBbc291cmNlc109XCJbXVwiXG4gICAgICBbcHJvbXB0c109XCJbXVwiXG4gICAgPjwvdmYtY2hhdGJvdD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBWZkNoYXRib3RTdGFuZGFsb25lUGFnZUNvbXBvbmVudCB7XG4gIHB1YmxpYyBjaGF0Ym90Q29uZmlnID0ge1xuICAgIHR5cGU6ICdzdGFuZGFsb25lJyxcbiAgICB0aXRsZTogJ1Zpc3VhbCBGcmFtZXdvcmsgQXNzaXN0YW50JyxcbiAgICB3ZWxjb21lX2xvZ286IHRydWUsXG4gICAgd2VsY29tZV9tZXNzYWdlOiBcIldlbGNvbWUhIEknbSBoZXJlIHRvIGhlbHAgd2l0aCBWaXN1YWwgRnJhbWV3b3JrIGNvbXBvbmVudHMuXCIsXG4gICAgd2VsY29tZV9sb2dvX2FsdDogJ1Zpc3VhbCBGcmFtZXdvcmsgQXNzaXN0YW50JyxcbiAgICB3ZWxjb21lX3N1Z2dlc3Rpb25zX3RpdGxlOiAnVHJ5IGFza2luZyBtZTonLFxuICAgIGlucHV0X3BsYWNlaG9sZGVyOiAnQXNrIGEgcXVlc3Rpb24uLi4nLFxuICAgIHdlbGNvbWVfbWF4X3N1Z2dlc3Rpb25zOiA0LFxuICAgIGRpc2NsYWltZXI6ICdUaGlzIGRlbW8gY2hhdGJvdCBpcyBmb3IgaW50ZXJuYWwgY29tcG9uZW50IHRlc3RpbmcgYW5kIFVJIGV4cGxvcmF0aW9uLicsXG4gICAgZm9vdG5vdGU6ICdSZXZpZXcgZ2VuZXJhdGVkIHJlc3BvbnNlcyBiZWZvcmUgdXNpbmcgdGhlbSBpbiBwcm9kdWN0aW9uLicsXG4gICAgaWNvbnM6IHtcbiAgICAgIGFzc2lzdGFudF9hdmF0YXI6ICcuL2Fzc2V0cy92Zi1jaGF0Ym90L2Fzc2V0cy92Zi1jaGF0Ym90LS1pY29uLTE2eDE2LWRhcmstZ3JlZW4uc3ZnJyxcbiAgICAgIHVzZXJfYXZhdGFyOiAnLi9hc3NldHMvdmYtY2hhdGJvdC9hc3NldHMvdmYtY2hhdGJvdC0tYXZhdGFyLXVzZXIuc3ZnJyxcbiAgICAgIHNlbmRfYnV0dG9uOiAnLi9hc3NldHMvdmYtY2hhdGJvdC9hc3NldHMvdmYtY2hhdGJvdC0taWNvbi1zZW5kLnN2ZycsXG4gICAgICBtaW5pbWl6ZTogJy4vYXNzZXRzL3ZmLWNoYXRib3QvYXNzZXRzL3ZmLWNoYXRib3QtLWljb24tbWluaW1pemUuc3ZnJyxcbiAgICAgIGNsb3NlOiAnLi9hc3NldHMvdmYtY2hhdGJvdC9hc3NldHMvdmYtY2hhdGJvdC0taWNvbi1jbG9zZS5zdmcnLFxuICAgICAgbWFpbl9sb2dvX3VybDogJy4vYXNzZXRzL3ZmLWNoYXRib3QvYXNzZXRzL3ZmLWNoYXRib3QtLWljb24tMzJ4MzItZGFyay1ncmVlbi5zdmcnXG4gICAgfSxcbiAgICBmZWF0dXJlczoge1xuICAgICAgZW5hYmxlX3dlbGNvbWU6IHRydWUsXG4gICAgICBlbmFibGVfd2VsY29tZV9zdWdnZXN0aW9uczogdHJ1ZSxcbiAgICAgIGVuYWJsZV9xYV9kYXRhX2xvYWRpbmc6IHRydWUsXG4gICAgICBlbmFibGVfcHJlZGVmaW5lZF9xYTogdHJ1ZSxcbiAgICAgIGVuYWJsZV9mYWxsYmFja19yZXNwb25zZXM6IHRydWUsXG4gICAgICBlbmFibGVfZmVlZGJhY2s6IHRydWUsXG4gICAgICBlbmFibGVfZGlzY2xhaW1lcjogdHJ1ZSxcbiAgICAgIGVuYWJsZV90eXBpbmdfaW5kaWNhdG9yOiB0cnVlXG4gICAgfSxcbiAgICBiZWhhdmlvcjoge1xuICAgICAgc2hvd19zY3JvbGxiYXI6IHRydWUsXG4gICAgICBhdXRvX3Njcm9sbDogdHJ1ZVxuICAgIH0sXG4gICAgYXBpOiB7XG4gICAgICBxYV9kYXRhX3VybDogJy4vYXNzZXRzL3ZmLWNoYXRib3QvYXNzZXRzL3ZmLWNoYXRib3QtcWEuanNvbidcbiAgICB9XG4gIH07XG59XG4iXX0=