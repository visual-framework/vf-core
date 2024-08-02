import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfTabsAngularDomChangeDirective implements OnDestroy {
    private elementRef;
    private changes;
    domChange: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfTabsAngularDomChangeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<VfTabsAngularDomChangeDirective, "[domChange]", never, {}, { "domChange": "domChange"; }, never, never, false, never>;
}
