import { ElementRef, EventEmitter, AfterViewInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfChatbotModalAngularComponent implements AfterViewInit {
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
    modalRef: ElementRef;
    qaData: any[];
    private loadedScripts;
    constructor(renderer: Renderer2, document: Document);
    ngOnInit(): void;
    ngAfterViewInit(): Promise<void>;
    /**
     * Load chatbot scripts as ES6 modules
     */
    private loadWorkingScripts;
    /**
     * Load a single script as ES6 module
     */
    private loadSingleScript;
    /**
     * Initialize chatbot functionality after scripts are loaded
     */
    private initializeChatbot;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotModalAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotModalAngularComponent, "vf-chatbot-modal", never, { "config": { "alias": "config"; "required": false; }; "messages": { "alias": "messages"; "required": false; }; "sources": { "alias": "sources"; "required": false; }; "prompts": { "alias": "prompts"; "required": false; }; "inputValue": { "alias": "inputValue"; "required": false; }; }, { "onSendMessage": "onSendMessage"; "onInputChange": "onInputChange"; "onFeedback": "onFeedback"; "onDialogConfirm": "onDialogConfirm"; "onDialogCancel": "onDialogCancel"; }, never, never, false, never>;
}
