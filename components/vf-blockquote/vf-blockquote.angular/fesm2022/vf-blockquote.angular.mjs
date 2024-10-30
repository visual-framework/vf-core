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
        this.modifier = 'default';
        this.class = '';
        this.authorimgclass = '';
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
        this.class = this.modifier === 'default' ? 'vf-blockquote' : 'vf-blockquote-small';
        this.class += this.override_class ? this.override_class : '';
        this.authorimgclass = this.modifier === 'default' ? 'vf-profile__image vf-u-margin__right--600' : 'vf-profile__image vf-profile--medium vf-u-margin__right--600';
        /* Inner content of the quote based on whether HTML or Text */
        this.quote = this.blockquote_text
            ? this.blockquote_text
            : this.html
                ? this.html
                : this.text;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: VfBlockquoteAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.1", type: VfBlockquoteAngularComponent, selector: "vf-blockquote", inputs: { id: "id", html: "html", text: "text", blockquote_text: "blockquote_text", blockquote_author: "blockquote_author", blockquote_author_href: "blockquote_author_href", blockquote_author_details: "blockquote_author_details", blockquote_author_imageurl: "blockquote_author_imageurl", override_class: "override_class", modifier: "modifier" }, usesOnChanges: true, ngImport: i0, template: `
    <blockquote [attr.id]="id !== undefined ? id : null" [class]="class">
        <img *ngIf="blockquote_author_imageurl !== ''" [class]="authorimgclass" [src]="blockquote_author_imageurl" alt="" loading="lazy" />
        <div [class]="blockquote_author_imageurl !== '' ? 'vf-blockquote-has-image' : null">
          <div>{{ quote }}</div>
          <footer class="vf-u-margin__top--600">
            <a *ngIf="blockquote_author_href !== ''; else quoteauthorplain" class="vf-blockquote_author__link" [href]="blockquote_author_href" [innerHTML]="blockquote_author"></a>
            <ng-template #quoteauthorplain><div class="vf-blockquote_author">{{ blockquote_author }}</div></ng-template>
            <div *ngIf="blockquote_author_details !== ''" class="vf-blockquote_author__details">{{ blockquote_author_details }}</div>
          </footer>
        </div>
    </blockquote>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: VfBlockquoteAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vf-blockquote', template: `
    <blockquote [attr.id]="id !== undefined ? id : null" [class]="class">
        <img *ngIf="blockquote_author_imageurl !== ''" [class]="authorimgclass" [src]="blockquote_author_imageurl" alt="" loading="lazy" />
        <div [class]="blockquote_author_imageurl !== '' ? 'vf-blockquote-has-image' : null">
          <div>{{ quote }}</div>
          <footer class="vf-u-margin__top--600">
            <a *ngIf="blockquote_author_href !== ''; else quoteauthorplain" class="vf-blockquote_author__link" [href]="blockquote_author_href" [innerHTML]="blockquote_author"></a>
            <ng-template #quoteauthorplain><div class="vf-blockquote_author">{{ blockquote_author }}</div></ng-template>
            <div *ngIf="blockquote_author_details !== ''" class="vf-blockquote_author__details">{{ blockquote_author_details }}</div>
          </footer>
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
            }], modifier: [{
                type: Input
            }] } });

class VfBlockquoteAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: VfBlockquoteAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.1", ngImport: i0, type: VfBlockquoteAngularModule, declarations: [VfBlockquoteAngularComponent], imports: [CommonModule], exports: [VfBlockquoteAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: VfBlockquoteAngularModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: VfBlockquoteAngularModule, decorators: [{
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
