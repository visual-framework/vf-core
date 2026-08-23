import { ElementRef, EventEmitter, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfChatbotStandaloneAngularComponent implements OnInit, AfterViewInit {
    private renderer;
    private document;
    config: any;
    messages: any[];
    sources: any[];
    prompts: any[];
    inputValue: string;
    onSendMessage: EventEmitter<void>;
    onInputChange: EventEmitter<Event>;
    onFeedback: EventEmitter<any>;
    onDialogConfirm: EventEmitter<void>;
    onDialogCancel: EventEmitter<void>;
    standaloneRef: ElementRef;
    qaData: any[];
    private loadedScripts;
    constructor(renderer: Renderer2, document: Document);
    ngOnInit(): void;
    ngAfterViewInit(): Promise<void>;
    private loadWorkingScripts;
    private loadSingleScript;
    private initializeChatbot;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotStandaloneAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotStandaloneAngularComponent, "vf-chatbot-standalone", never, { "config": { "alias": "config"; "required": false; }; "messages": { "alias": "messages"; "required": false; }; "sources": { "alias": "sources"; "required": false; }; "prompts": { "alias": "prompts"; "required": false; }; "inputValue": { "alias": "inputValue"; "required": false; }; }, { "onSendMessage": "onSendMessage"; "onInputChange": "onInputChange"; "onFeedback": "onFeedback"; "onDialogConfirm": "onDialogConfirm"; "onDialogCancel": "onDialogCancel"; }, never, never, false, never>;
}
export declare class VfChatbotStandalonePageComponent {
    chatbotConfig: {
        type: string;
        title: string;
        welcome_logo: boolean;
        welcome_message: string;
        welcome_logo_alt: string;
        welcome_suggestions_title: string;
        input_placeholder: string;
        welcome_max_suggestions: number;
        disclaimer: string;
        footnote: string;
        icons: {
            assistant_avatar: string;
            user_avatar: string;
            send_button: string;
            minimize: string;
            close: string;
            main_logo_url: string;
        };
        features: {
            enable_welcome: boolean;
            enable_welcome_suggestions: boolean;
            enable_qa_data_loading: boolean;
            enable_predefined_qa: boolean;
            enable_fallback_responses: boolean;
            enable_feedback: boolean;
            enable_disclaimer: boolean;
            enable_typing_indicator: boolean;
        };
        behavior: {
            show_scrollbar: boolean;
            auto_scroll: boolean;
        };
        api: {
            qa_data_url: string;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotStandalonePageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotStandalonePageComponent, "app-vf-chatbot-standalone-page", never, {}, {}, never, never, true, never>;
}
