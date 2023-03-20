import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfBannerAngularComponent implements OnInit {
    banner__type: undefined | 'basic' | 'inline';
    banner__variant: undefined | 'banner__info' | 'banner__warning' | 'banner__danger' | 'banner__success';
    banner__message: string;
    banner__dismissible: boolean;
    banner__inline_href: string;
    bannerclass: string;
    ngOnInit(): void;
    ngOnChanges(): void;
    setValues(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfBannerAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfBannerAngularComponent, "vf-banner", never, { "banner__type": "banner__type"; "banner__variant": "banner__variant"; "banner__message": "banner__message"; "banner__dismissible": "banner__dismissible"; "banner__inline_href": "banner__inline_href"; }, {}, never, never, false, never>;
}
