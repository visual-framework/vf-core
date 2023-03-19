import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VfBannerAngularComponent {
    constructor() {
        /*  Initialize values based on input values for basic banner */
        this.banner__type = 'basic';
        this.banner__variant = '';
        this.banner__message = '';
        this.banner__dismissible = false;
        /* Initialize values based on input values for inline banner */
        this.banner__inline_href = '';
        this.bannerclass = 'vf-banner vf-banner--alert ';
    }
    ngOnInit() {
        /*Based on banner type received set the banner class */
        switch (this.banner__variant) {
            case 'banner__info':
                this.bannerclass += 'vf-banner--info';
                break;
            case 'banner__warning':
                this.bannerclass += 'vf-banner--warning';
                break;
            case 'banner__danger':
                this.bannerclass += 'vf-banner--danger';
                break;
            case 'banner__success':
                this.bannerclass += 'vf-banner--success';
                break;
        }
    }
}
VfBannerAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBannerAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VfBannerAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: VfBannerAngularComponent, selector: "vf-banner", inputs: { banner__type: "banner__type", banner__variant: "banner__variant", banner__message: "banner__message", banner__dismissible: "banner__dismissible", banner__inline_href: "banner__inline_href" }, ngImport: i0, template: `
  <!-- Basic Banner HTML -->
  <div *ngIf="banner__type === 'basic'" [class]="bannerclass">
  <div class="vf-banner__content">
    <p class="vf-banner__text" [innerHTML]="banner__message"></p>
    <button *ngIf="banner__dismissible" role="button" aria-label="close notification banner" class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dismiss banner</title><path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"/></svg>
    </button>
  </div>
  </div>
  <!-- Inline Banner HTML -->
  <div *ngIf="banner__type === 'inline'" class="vf-banner vf-banner--phase">
    <div class="vf-banner__content">
      <p class="vf-banner__text">This is a new web page. <a [href]="banner__inline_href" class="vf-link">Complete our quick survey</a> to help us make it better.</p>
    </div>
  </div>

    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBannerAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-banner',
                    template: `
  <!-- Basic Banner HTML -->
  <div *ngIf="banner__type === 'basic'" [class]="bannerclass">
  <div class="vf-banner__content">
    <p class="vf-banner__text" [innerHTML]="banner__message"></p>
    <button *ngIf="banner__dismissible" role="button" aria-label="close notification banner" class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dismiss banner</title><path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"/></svg>
    </button>
  </div>
  </div>
  <!-- Inline Banner HTML -->
  <div *ngIf="banner__type === 'inline'" class="vf-banner vf-banner--phase">
    <div class="vf-banner__content">
      <p class="vf-banner__text">This is a new web page. <a [href]="banner__inline_href" class="vf-link">Complete our quick survey</a> to help us make it better.</p>
    </div>
  </div>

    `
                }]
        }], propDecorators: { banner__type: [{
                type: Input
            }], banner__variant: [{
                type: Input
            }], banner__message: [{
                type: Input
            }], banner__dismissible: [{
                type: Input
            }], banner__inline_href: [{
                type: Input
            }] } });

class VfBannerAngularModule {
}
VfBannerAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBannerAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VfBannerAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.3", ngImport: i0, type: VfBannerAngularModule, declarations: [VfBannerAngularComponent], imports: [CommonModule], exports: [VfBannerAngularComponent] });
VfBannerAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBannerAngularModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBannerAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfBannerAngularComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        VfBannerAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-banner.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfBannerAngularComponent, VfBannerAngularModule };
//# sourceMappingURL=vf-banner.angular.mjs.map
