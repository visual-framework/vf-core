import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
declare function vfBanner(): any;

@Component({
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
})
export class VfBannerAngularComponent implements OnInit, AfterViewInit {
  /*  Initialize values based on input values for basic banner */
  @Input() banner__type: undefined | 'basic' | 'inline' | 'fixed' | 'top' = 'basic';
  @Input() banner__variant: undefined | 'banner__info' | 'banner__warning' | 'banner__danger' | 'banner__success';
  @Input() banner__message = '';
  @Input() banner__dismissible = false;
  /* Initialize values based on input values for inline banner */
  @Input() banner__inline_href = '';
  /* Initialize values based on input values for Fixed banner */
  @Input() banner__text = '';
  @Input() data_service_id = 'MyService';
  @Input() data_protection_version = '0.1';

  bannerclass = '';

  ngOnInit(): void {
    //Initialize something
  }

  ngOnChanges(): void {
    this.setValues();
  }

  /* Set values as per input and updated changes */
  setValues(): void {
    this.bannerclass = 'vf-banner vf-banner--alert ';
    /*Based on banner type received set the banner class */
    switch (this.banner__variant) {
      case 'banner__info':
          this.bannerclass  += 'vf-banner--info';
        break;
      case 'banner__warning':
        this.bannerclass  += 'vf-banner--warning';
        break;
      case 'banner__danger':
        this.bannerclass  += 'vf-banner--danger';
        break;
      case 'banner__success':
        this.bannerclass  += 'vf-banner--success';
        break;
    }
  }

  ngAfterViewInit(): void {
    /* For banner type 'fixed' and 'top' we need to include vf-banner.js which has scripts to render and add functionality to these banner types */
    if(this.banner__type === 'fixed' || this.banner__type === 'top') {
      vfBanner();
    }
  }
}
