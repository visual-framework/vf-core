/*This is the  code which needs to be built as Angular library and published as npm module before it can be used in any Angular project */
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "vf-hero",
  template: `
    <section [attr.id] = "id !== undefined ? id : null" [ngClass]="class" [style]="style">
      <div class="vf-hero__content | vf-box | vf-stack vf-stack--400">
          <p *ngIf="vf_hero_kicker !== ''" class="vf-hero__kicker" [innerHTML]="vf_hero_kicker"></p>

        <h1 *ngIf="vf_hero_heading !== ''" class="vf-hero__heading">
          <a *ngIf="vf_hero_heading_href !== ''; else heroheadingplain" class="vf-hero__heading_link" [href]="vf_hero_heading_href" [innerHTML]="vf_hero_heading"></a>
        </h1>
        <ng-template #heroheadingplain>{{vf_hero_heading}}</ng-template>

        <p *ngIf="vf_hero_subheading !== ''" class="vf-hero__subheading" [innerHTML]="vf_hero_subheading"></p>

        <ng-container *ngIf="vf_hero_text?.length">
          <p class="vf-hero__text"*ngFor="let hero_text of vf_hero_text" [innerHTML]="hero_text"></p>
        </ng-container>

          <a *ngIf="vf_hero_link_href !== '' && vf_hero_link_text !==''" class="vf-hero__link" [href]="vf_hero_link_href">
          {{vf_hero_link_text}}
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="" fill-rule="nonzero"></path></svg>
          </a>
      </div>
    </section>
  `,
  styleUrls: []
})

export class VfHeroAngularComponent implements OnInit {
  /* Initialize values based on input values */
  @Input() vf_hero_image = '';
  @Input() vf_hero_image_size = '';
  @Input() vf_hero_kicker = '';
  @Input() vf_hero_heading = '';
  @Input() vf_hero_heading_href = '';
  @Input() vf_hero_subheading = '';
  @Input() vf_hero_text : string[] = [];
  @Input() vf_hero_link_text = '';
  @Input() vf_hero_link_href = '';
  @Input() spacing: undefined | 200 | 400 | 500 | 600 | 800 | 1200 | 1600;
  @Input() id: string | undefined;
  @Input() modifier_class = '';
  @Input() vf_hero_heading_additional = '';

  class = '';
  style = '';
  vf_hero_link_innerhtml = '';

  ngOnInit(): void {
    this.setValues();
  }

  ngOnChanges(): void {
    this.setValues();
  }

  /* Set values as per input and updated changes */
  setValues(): void {
    /* Initialize/Reset the values for class and style */
    this.class = 'vf-hero ';
    this.style = '';

    if (this.vf_hero_heading_additional !== '') {
      this.vf_hero_kicker = this.vf_hero_heading_additional;
    }

    /* Set values ass per the input */
    this.class += this.spacing !== undefined ? 'vf-hero--' + this.spacing +  ' ' : '';
    this.class += '| vf-u-fullbleed';
    this.class += this.modifier_class !== '' ? ' ' + this.modifier_class : '';
    this.style += this.vf_hero_image !== '' ? '--vf-hero--bg-image: ' + this.vf_hero_image : '';
    this.style += this.vf_hero_image_size !== '' ? ' --vf-hero--bg-image-size: ' + this.vf_hero_image_size : '';
  }
}
