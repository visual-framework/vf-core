import { ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfChatbotDialogAngularComponent implements AfterViewInit {
    private elRef;
    title: string;
    message: string;
    cancelLabel: string;
    confirmLabel: string;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotDialogAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotDialogAngularComponent, "vf-chatbot-dialog", never, { "title": { "alias": "title"; "required": false; }; "message": { "alias": "message"; "required": false; }; "cancelLabel": { "alias": "cancelLabel"; "required": false; }; "confirmLabel": { "alias": "confirmLabel"; "required": false; }; }, {}, never, never, false, never>;
}
