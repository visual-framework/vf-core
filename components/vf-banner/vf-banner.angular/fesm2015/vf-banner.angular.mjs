import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VfBannerAngularComponent {
    constructor() {
        /*  Initialize values based on input values for basic banner */
        this.banner__type = 'basic';
        this.banner__message = '';
        this.banner__dismissible = false;
        /* Initialize values based on input values for inline banner */
        this.banner__inline_href = '';
        /* Initialize values based on input values for Fixed banner */
        this.banner__text = '';
        this.data_service_id = 'MyService';
        this.data_protection_version = '0.1';
        this.bannerclass = '';
    }
    ngOnInit() {
        //Initialize something
    }
    ngOnChanges() {
        this.setValues();
    }
    /* Set values as per input and updated changes */
    setValues() {
        this.bannerclass = 'vf-banner vf-banner--alert ';
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
    ngAfterViewInit() {
        /* For banner type 'fixed' and 'top' we need to include vf-banner.js which has scripts to render and add functionality to these banner types */
        if (this.banner__type === 'fixed' || this.banner__type === 'top') {
            vfBanner();
        }
    }
}
VfBannerAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfBannerAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VfBannerAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: VfBannerAngularComponent, selector: "vf-banner", inputs: { banner__type: "banner__type", banner__variant: "banner__variant", banner__message: "banner__message", banner__dismissible: "banner__dismissible", banner__inline_href: "banner__inline_href", banner__text: "banner__text", data_service_id: "data_service_id", data_protection_version: "data_protection_version" }, usesOnChanges: true, ngImport: i0, template: `
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
  <!-- Fixed Banner HTML -->
  <div *ngIf="banner__type === 'fixed'" class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
  data-vf-js-banner
  data-vf-js-banner-state="dismissible"
  [attr.data-vf-js-banner-button-text]="banner__text"
  [attr.data-vf-js-banner-cookie-name]="data_service_id"
  [attr.data-vf-js-banner-cookie-version]="data_protection_version"
  data-vf-js-banner-extra-button="<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>"
  data-vf-js-banner-auto-accept="false">
    <div class="vf-banner__content | vf-grid" data-vf-js-banner-text>
      <p class="vf-banner__text vf-banner__text--lg">
        This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-banner__link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-banner__link" href="JavaScript:Void(0);">Terms Of Use</a>.
      </p>
    </div>
  </div>
  <!-- Top Banner HTML -->
  <div *ngIf="banner__type === 'top'" class="vf-banner vf-banner--fixed vf-banner--top vf-banner--phase"
  data-vf-js-banner
  data-vf-js-banner-state="dismissible"
  data-vf-js-banner-button-text="Close notice"
  data-vf-js-banner-button-theme="primary">
    <div class="vf-banner__content" data-vf-js-banner-text>
      <span class="vf-badge vf-badge--primary">BETA</span>
      <p class="vf-banner__text">This is the new EMBL.org <a [href]="banner__inline_href" class="vf-banner__link">Complete our quick survey</a> to help us make it better.</p>
    </div>
  </div>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfBannerAngularComponent, decorators: [{
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
  <!-- Fixed Banner HTML -->
  <div *ngIf="banner__type === 'fixed'" class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
  data-vf-js-banner
  data-vf-js-banner-state="dismissible"
  [attr.data-vf-js-banner-button-text]="banner__text"
  [attr.data-vf-js-banner-cookie-name]="data_service_id"
  [attr.data-vf-js-banner-cookie-version]="data_protection_version"
  data-vf-js-banner-extra-button="<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>"
  data-vf-js-banner-auto-accept="false">
    <div class="vf-banner__content | vf-grid" data-vf-js-banner-text>
      <p class="vf-banner__text vf-banner__text--lg">
        This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-banner__link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-banner__link" href="JavaScript:Void(0);">Terms Of Use</a>.
      </p>
    </div>
  </div>
  <!-- Top Banner HTML -->
  <div *ngIf="banner__type === 'top'" class="vf-banner vf-banner--fixed vf-banner--top vf-banner--phase"
  data-vf-js-banner
  data-vf-js-banner-state="dismissible"
  data-vf-js-banner-button-text="Close notice"
  data-vf-js-banner-button-theme="primary">
    <div class="vf-banner__content" data-vf-js-banner-text>
      <span class="vf-badge vf-badge--primary">BETA</span>
      <p class="vf-banner__text">This is the new EMBL.org <a [href]="banner__inline_href" class="vf-banner__link">Complete our quick survey</a> to help us make it better.</p>
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
            }], banner__text: [{
                type: Input
            }], data_service_id: [{
                type: Input
            }], data_protection_version: [{
                type: Input
            }] } });

class VfBannerAngularModule {
}
VfBannerAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfBannerAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VfBannerAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: VfBannerAngularModule, declarations: [VfBannerAngularComponent], imports: [CommonModule], exports: [VfBannerAngularComponent] });
VfBannerAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfBannerAngularModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfBannerAngularModule, decorators: [{
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
