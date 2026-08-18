import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface VfChatbotModalConfig {
    type?: 'modal' | 'standalone';
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
export declare class VfChatbotModalAngularComponent {
    config: VfChatbotModalConfig;
    messages: Array<{
        type?: string;
        avatar?: unknown;
        content?: string;
    }>;
    sources: unknown[];
    prompts: unknown[];
    qaData: unknown[];
    isOpen: boolean;
    dialogTitle: string;
    dialogMessage: string;
    dialogCancelLabel: string;
    dialogConfirmLabel: string;
    close: EventEmitter<void>;
    minimize: EventEmitter<void>;
    get configJson(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotModalAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotModalAngularComponent, "vf-chatbot-modal", never, { "config": { "alias": "config"; "required": false; }; "messages": { "alias": "messages"; "required": false; }; "sources": { "alias": "sources"; "required": false; }; "prompts": { "alias": "prompts"; "required": false; }; "qaData": { "alias": "qaData"; "required": false; }; "isOpen": { "alias": "isOpen"; "required": false; }; }, { "close": "close"; "minimize": "minimize"; }, never, never, true, never>;
}
export * from './vf-chatbot-modal.angular.module';
