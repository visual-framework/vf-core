import { OnInit, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfBannerAngularComponent implements OnInit, AfterViewInit {
    banner__type: undefined | 'basic' | 'inline' | 'fixed' | 'top';
    banner__variant: undefined | 'banner__info' | 'banner__warning' | 'banner__danger' | 'banner__success';
    banner__message: string;
    banner__dismissible: boolean;
    banner__inline_href: string;
    banner__text: string;
    data_service_id: string;
    data_protection_version: string;
    bannerclass: string;
    ngOnInit(): void;
    ngOnChanges(): void;
    setValues(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfBannerAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfBannerAngularComponent, "vf-banner", never, { "banner__type": "banner__type"; "banner__variant": "banner__variant"; "banner__message": "banner__message"; "banner__dismissible": "banner__dismissible"; "banner__inline_href": "banner__inline_href"; "banner__text": "banner__text"; "data_service_id": "data_service_id"; "data_protection_version": "data_protection_version"; }, {}, never, never, false, never>;
}
