/* This is the  code which needs to be built as Angular library and published as npm module before it can be used in any Angular project */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vf-banner',
  template: `
  <!-- Basic Banner HTML -->
  <div *ngIf="banner__type === 'basic'" [class]="bannerclass">
  <div class="vf-banner__content">
    <p class="vf-banner__text" [innerHTML]="banner__message"></p>
    <button *ngIf="banner__dismissable" role="button" aria-label="close notification banner" class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button">
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
})
export class VfBannerAngularComponent implements OnInit{
  /*  Initialize values based on input values for basic banner */
  @Input() banner__type = 'basic';
  @Input() banner__variant = '';
  @Input() banner__message = '';
  @Input() banner__dismissable = false;
  /* Initialize values based on input values for inline banner */
  @Input() banner__inline_href = '';

  bannerclass = 'vf-banner vf-banner--alert ';

  ngOnInit(): void {
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
}
