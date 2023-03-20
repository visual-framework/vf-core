import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class VfBadgeAngularComponent {
    constructor() {
        /* Initialize values based on input values */
        this.badge_href = '';
        this.theme = '';
        this.text = '';
        this.style = [];
        this.html = '';
        this.override_class = '';
        this.content = '';
        this.class = 'vf-badge ';
    }
    ngOnInit() {
        this.setValues();
    }
    ngOnChanges() {
        this.setValues();
    }
    /* Set values as per input and updated changes */
    setValues() {
        /* Set values ass per the input */
        this.content = this.html !== '' ? this.html : this.text;
        this.class += this.theme !== '' ? 'vf-badge--' + this.theme + ' ' : '';
        /* Update class value if styles are received in input */
        if (this.style.length > 0) {
            this.style.forEach(style => {
                this.class += 'vf-badge--' + style + ' ';
            });
        }
        /* Update class value if override style received in input */
        this.class += this.override_class !== '' ? '| ' + this.override_class : '';
    }
}
VfBadgeAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBadgeAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VfBadgeAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: VfBadgeAngularComponent, selector: "vf-badge", inputs: { badge_href: "badge_href", theme: "theme", text: "text", style: "style", html: "html", override_class: "override_class", id: "id" }, usesOnChanges: true, ngImport: i0, template: `
    <a [attr.id] = "id !== undefined ? id : null" *ngIf="badge_href !== ''" [href]="badge_href" [class]="class" [innerHTML]="content"></a>
    <span [attr.id] = "id !== undefined ? id : null" *ngIf="!badge_href || badge_href === null || badge_href === ''" [class]="class" [innerHTML]="content"></span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBadgeAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: "vf-badge", template: `
    <a [attr.id] = "id !== undefined ? id : null" *ngIf="badge_href !== ''" [href]="badge_href" [class]="class" [innerHTML]="content"></a>
    <span [attr.id] = "id !== undefined ? id : null" *ngIf="!badge_href || badge_href === null || badge_href === ''" [class]="class" [innerHTML]="content"></span>
  ` }]
        }], propDecorators: { badge_href: [{
                type: Input
            }], theme: [{
                type: Input
            }], text: [{
                type: Input
            }], style: [{
                type: Input
            }], html: [{
                type: Input
            }], override_class: [{
                type: Input
            }], id: [{
                type: Input
            }] } });

class VfBadgeAngularModule {
}
VfBadgeAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBadgeAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VfBadgeAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.3", ngImport: i0, type: VfBadgeAngularModule, declarations: [VfBadgeAngularComponent], imports: [CommonModule], exports: [VfBadgeAngularComponent] });
VfBadgeAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBadgeAngularModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBadgeAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfBadgeAngularComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        VfBadgeAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-badge.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfBadgeAngularComponent, VfBadgeAngularModule };
//# sourceMappingURL=vf-badge.angular.mjs.map
