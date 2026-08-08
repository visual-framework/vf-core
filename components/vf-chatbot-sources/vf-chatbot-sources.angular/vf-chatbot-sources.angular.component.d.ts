import { ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface VFChatbotSource {
    title: string;
    url: string;
}
export declare class VfChatbotSourcesAngularComponent implements AfterViewInit {
    private elementRef;
    sources: VFChatbotSource[];
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotSourcesAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotSourcesAngularComponent, "vf-chatbot-sources", never, { "sources": { "alias": "sources"; "required": false; }; }, {}, never, never, false, never>;
}
export * from './vf-chatbot-sources.angular.module';
