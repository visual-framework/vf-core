import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export type VfChatbotMode = 'modal' | 'standalone';
export interface VfChatbotConfig {
    type?: VfChatbotMode;
    title?: string;
    welcome_logo?: boolean;
    welcome_message?: string;
    welcome_logo_alt?: string;
    welcome_suggestions_title?: string;
    input_placeholder?: string;
    welcome_max_suggestions?: number;
    disclaimer?: string;
    footnote?: string;
    icons?: {
        assistant_avatar?: string;
        user_avatar?: string;
        send_button?: string;
        minimize?: string;
        close?: string;
        main_logo_url?: string;
    };
    selectorContext?: unknown;
    features?: {
        enable_welcome?: boolean;
        enable_welcome_suggestions?: boolean;
        enable_qa_data_loading?: boolean;
        enable_predefined_qa?: boolean;
        enable_fallback_responses?: boolean;
        enable_feedback?: boolean;
        enable_disclaimer?: boolean;
        enable_typing_indicator?: boolean;
    };
    behavior?: {
        show_scrollbar?: boolean;
        auto_scroll?: boolean;
    };
    api?: {
        qa_data_url?: string;
    };
    onDismissDisclaimer?: () => void;
}
export declare class VfChatbotAngularComponent implements AfterViewInit {
    private renderer;
    private elementRef;
    private document;
    config: any;
    qaData: any[];
    messages: any[];
    sources: any[];
    prompts: any[];
    notificationCount: number;
    isOpen: boolean;
    dialogTitle: string;
    dialogMessage: string;
    dialogCancelLabel: string;
    dialogConfirmLabel: string;
    private loadedScripts;
    constructor(renderer: Renderer2, elementRef: ElementRef, document: Document);
    ngAfterViewInit(): Promise<void>;
    private loadModalScripts;
    private loadSingleScript;
    openChat(): void;
    closeChat(): void;
    get modalConfigJson(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotAngularComponent, "vf-chatbot", never, { "config": { "alias": "config"; "required": false; }; "qaData": { "alias": "qaData"; "required": false; }; "messages": { "alias": "messages"; "required": false; }; "sources": { "alias": "sources"; "required": false; }; "prompts": { "alias": "prompts"; "required": false; }; "notificationCount": { "alias": "notificationCount"; "required": false; }; }, {}, never, never, false, never>;
}
