import { ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfChatbotFabAngularComponent implements AfterViewInit {
    private elementRef;
    notificationCount: number;
    isInactive: boolean;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotFabAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotFabAngularComponent, "vf-chatbot-fab", never, { "notificationCount": { "alias": "notificationCount"; "required": false; }; "isInactive": { "alias": "isInactive"; "required": false; }; }, {}, never, never, false, never>;
}
