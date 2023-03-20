import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VfHeroAngularComponent {
    constructor() {
        /* Initialize values based on input values */
        this.vf_hero_image = '';
        this.vf_hero_image_size = '';
        this.vf_hero_kicker = '';
        this.vf_hero_heading = '';
        this.vf_hero_heading_href = '';
        this.vf_hero_subheading = '';
        this.vf_hero_text = [];
        this.vf_hero_link_text = '';
        this.vf_hero_link_href = '';
        this.modifier_class = '';
        this.vf_hero_heading_additional = '';
        this.class = '';
        this.style = '';
        this.vf_hero_link_innerhtml = '';
    }
    ngOnInit() {
        this.setValues();
    }
    ngOnChanges() {
        this.setValues();
    }
    /* Set values as per input and updated changes */
    setValues() {
        /* Initialize/Reset the values for class and style */
        this.class = 'vf-hero ';
        this.style = '';
        if (this.vf_hero_heading_additional !== '') {
            this.vf_hero_kicker = this.vf_hero_heading_additional;
        }
        /* Set values ass per the input */
        this.class += this.spacing !== undefined ? 'vf-hero--' + this.spacing + ' ' : '';
        this.class += '| vf-u-fullbleed';
        this.class += this.modifier_class !== '' ? ' ' + this.modifier_class : '';
        this.style += this.vf_hero_image !== '' ? '--vf-hero--bg-image: ' + this.vf_hero_image : '';
        this.style += this.vf_hero_image_size !== '' ? ' --vf-hero--bg-image-size: ' + this.vf_hero_image_size : '';
    }
}
VfHeroAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfHeroAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VfHeroAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: VfHeroAngularComponent, selector: "vf-hero", inputs: { vf_hero_image: "vf_hero_image", vf_hero_image_size: "vf_hero_image_size", vf_hero_kicker: "vf_hero_kicker", vf_hero_heading: "vf_hero_heading", vf_hero_heading_href: "vf_hero_heading_href", vf_hero_subheading: "vf_hero_subheading", vf_hero_text: "vf_hero_text", vf_hero_link_text: "vf_hero_link_text", vf_hero_link_href: "vf_hero_link_href", spacing: "spacing", id: "id", modifier_class: "modifier_class", vf_hero_heading_additional: "vf_hero_heading_additional" }, usesOnChanges: true, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfHeroAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: "vf-hero", template: `
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
  ` }]
        }], propDecorators: { vf_hero_image: [{
                type: Input
            }], vf_hero_image_size: [{
                type: Input
            }], vf_hero_kicker: [{
                type: Input
            }], vf_hero_heading: [{
                type: Input
            }], vf_hero_heading_href: [{
                type: Input
            }], vf_hero_subheading: [{
                type: Input
            }], vf_hero_text: [{
                type: Input
            }], vf_hero_link_text: [{
                type: Input
            }], vf_hero_link_href: [{
                type: Input
            }], spacing: [{
                type: Input
            }], id: [{
                type: Input
            }], modifier_class: [{
                type: Input
            }], vf_hero_heading_additional: [{
                type: Input
            }] } });

class VfHeroAngularModule {
}
VfHeroAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfHeroAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VfHeroAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.3", ngImport: i0, type: VfHeroAngularModule, declarations: [VfHeroAngularComponent], imports: [CommonModule], exports: [VfHeroAngularComponent] });
VfHeroAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfHeroAngularModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfHeroAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfHeroAngularComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        VfHeroAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-hero.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfHeroAngularComponent, VfHeroAngularModule };
//# sourceMappingURL=vf-hero.angular.mjs.map
