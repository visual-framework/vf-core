import { ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfChatbotWelcomeAngularComponent implements AfterViewInit {
    qaData: any[];
    welcome_logo: boolean;
    welcome_logo_url: string;
    welcome_logo_alt: string;
    welcome_title: string;
    welcome_message: string;
    welcome_suggestions_title: string;
    enable_welcome_suggestions: boolean;
    welcome_max_suggestions: number;
    enable_qa_data_loading: boolean;
    enable_predefined_qa: boolean;
    enable_fallback_responses: boolean;
    qa_data_url: string;
    welcomeRef: ElementRef;
    templateRef: ElementRef;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotWelcomeAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotWelcomeAngularComponent, "vf-chatbot-welcome", never, { "qaData": { "alias": "qaData"; "required": false; }; "welcome_logo": { "alias": "welcome_logo"; "required": false; }; "welcome_logo_url": { "alias": "welcome_logo_url"; "required": false; }; "welcome_logo_alt": { "alias": "welcome_logo_alt"; "required": false; }; "welcome_title": { "alias": "welcome_title"; "required": false; }; "welcome_message": { "alias": "welcome_message"; "required": false; }; "welcome_suggestions_title": { "alias": "welcome_suggestions_title"; "required": false; }; "enable_welcome_suggestions": { "alias": "enable_welcome_suggestions"; "required": false; }; "welcome_max_suggestions": { "alias": "welcome_max_suggestions"; "required": false; }; "enable_qa_data_loading": { "alias": "enable_qa_data_loading"; "required": false; }; "enable_predefined_qa": { "alias": "enable_predefined_qa"; "required": false; }; "enable_fallback_responses": { "alias": "enable_fallback_responses"; "required": false; }; "qa_data_url": { "alias": "qa_data_url"; "required": false; }; }, {}, never, never, false, never>;
}
export * from './vf-chatbot-welcome.angular.module';
