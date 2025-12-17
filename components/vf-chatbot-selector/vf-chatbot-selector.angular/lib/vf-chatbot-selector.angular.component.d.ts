import { ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class VfChatbotSelectorAngularComponent implements OnInit {
    private elRef;
    private http;
    chatbotRoutes: any;
    context: any;
    config: any;
    search: string;
    selected: string[];
    showSearchBox: boolean;
    maxSelect: number;
    constructor(elRef: ElementRef, http: HttpClient);
    ngOnInit(): void;
    clearAll(event: Event): void;
    toggleSelect(routeId: string): void;
    loadRoutesFromApi(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotSelectorAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotSelectorAngularComponent, "vf-chatbot-selector", never, { "chatbotRoutes": { "alias": "chatbotRoutes"; "required": false; }; "context": { "alias": "context"; "required": false; }; }, {}, never, never, false, never>;
}
