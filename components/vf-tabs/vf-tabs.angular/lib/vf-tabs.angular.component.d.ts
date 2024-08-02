import { ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class VfTabsAngularComponent implements AfterViewInit {
    private sanitizer;
    private cdr;
    tabsdata: any;
    tabs: any;
    constructor(sanitizer: DomSanitizer, cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    setValues(): void;
    ngAfterViewInit(): void;
    sanitizeHTML(t: any): import("@angular/platform-browser").SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfTabsAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfTabsAngularComponent, "vf-tabs", never, { "tabsdata": "tabsdata"; }, {}, never, never, false, never>;
}
