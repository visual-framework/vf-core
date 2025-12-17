import { ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
interface FeedbackOption {
    id: string;
    label: string;
}
export declare class VfChatbotFeedbackAngularComponent implements AfterViewInit {
    private el;
    feedback_options: FeedbackOption[];
    type: string;
    comment: string;
    feedback: EventEmitter<{
        type: string;
        id: string;
    }>;
    commentChange: EventEmitter<string>;
    close: EventEmitter<void>;
    submit: EventEmitter<void>;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    onFeedbackClick(optionId: string): void;
    onCloseClick(): void;
    onSubmitClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotFeedbackAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotFeedbackAngularComponent, "vf-chatbot-feedback", never, { "feedback_options": { "alias": "feedback_options"; "required": false; }; "type": { "alias": "type"; "required": false; }; "comment": { "alias": "comment"; "required": false; }; }, { "feedback": "feedback"; "commentChange": "commentChange"; "close": "close"; "submit": "submit"; }, never, never, false, never>;
}
export {};
