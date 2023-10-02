import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VfBlockquoteAngularComponent {
    constructor() {
        this.html = '';
        this.text = '';
        this.blockquote_text = '';
        this.blockquote_author = '';
        this.blockquote_author_href = '';
        this.blockquote_author_details = '';
        this.blockquote_author_imageurl = '';
        this.override_class = '';
        this.class = '';
        this.quote = '';
    }
    ngOnInit() {
        //Initialize  something
    }
    ngOnChanges() {
        this.setValues();
    }
    /* Set values as per input and updated changes */
    setValues() {
        /* Conditional styles, strings, nullables, arrays of styles */
        this.class = 'vf-blockquote';
        this.class += this.override_class ? this.override_class : '';
        /* Inner content of the quote based on whether HTML or Text */
        this.quote = this.blockquote_text
            ? this.blockquote_text
            : this.html
                ? this.html
                : this.text;
    }
}
VfBlockquoteAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: VfBlockquoteAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VfBlockquoteAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: VfBlockquoteAngularComponent, selector: "vf-blockquote", inputs: { id: "id", html: "html", text: "text", blockquote_text: "blockquote_text", blockquote_author: "blockquote_author", blockquote_author_href: "blockquote_author_href", blockquote_author_details: "blockquote_author_details", blockquote_author_imageurl: "blockquote_author_imageurl", override_class: "override_class" }, usesOnChanges: true, ngImport: i0, template: `
    <blockquote [attr.id]="id !== undefined ? id : null" [class]="class">
      <div class="vf-blockquote-flex-container">
        <div *ngIf="blockquote_author_imageurl !== ''" class="vf-blockquote_author__image">
          <img [src]="blockquote_author_imageurl" alt="" loading="lazy" />
        </div>
        <div>
          <div>{{ quote }}</div>
          <footer>
            <a *ngIf="blockquote_author_href !== ''; else quoteauthorplain" class="vf-blockquote_author__link" [href]="blockquote_author_href" [innerHTML]="blockquote_author"></a>
            <ng-template #quoteauthorplain>{{ blockquote_author }}</ng-template>
            <div *ngIf="blockquote_author_details !== ''" class="vf-blockquote_author_details">{{ blockquote_author_details }}</div>
          </footer>
        </div>
      </div>
    </blockquote>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: VfBlockquoteAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vf-blockquote', template: `
    <blockquote [attr.id]="id !== undefined ? id : null" [class]="class">
      <div class="vf-blockquote-flex-container">
        <div *ngIf="blockquote_author_imageurl !== ''" class="vf-blockquote_author__image">
          <img [src]="blockquote_author_imageurl" alt="" loading="lazy" />
        </div>
        <div>
          <div>{{ quote }}</div>
          <footer>
            <a *ngIf="blockquote_author_href !== ''; else quoteauthorplain" class="vf-blockquote_author__link" [href]="blockquote_author_href" [innerHTML]="blockquote_author"></a>
            <ng-template #quoteauthorplain>{{ blockquote_author }}</ng-template>
            <div *ngIf="blockquote_author_details !== ''" class="vf-blockquote_author_details">{{ blockquote_author_details }}</div>
          </footer>
        </div>
      </div>
    </blockquote>
  ` }]
        }], propDecorators: { id: [{
                type: Input
            }], html: [{
                type: Input
            }], text: [{
                type: Input
            }], blockquote_text: [{
                type: Input
            }], blockquote_author: [{
                type: Input
            }], blockquote_author_href: [{
                type: Input
            }], blockquote_author_details: [{
                type: Input
            }], blockquote_author_imageurl: [{
                type: Input
            }], override_class: [{
                type: Input
            }] } });

class VfBlockquoteAngularModule {
}
VfBlockquoteAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: VfBlockquoteAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VfBlockquoteAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: VfBlockquoteAngularModule, declarations: [VfBlockquoteAngularComponent], imports: [CommonModule], exports: [VfBlockquoteAngularComponent] });
VfBlockquoteAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: VfBlockquoteAngularModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: VfBlockquoteAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfBlockquoteAngularComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        VfBlockquoteAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-blockquote.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfBlockquoteAngularComponent, VfBlockquoteAngularModule };
//# sourceMappingURL=vf-blockquote.angular.mjs.map
