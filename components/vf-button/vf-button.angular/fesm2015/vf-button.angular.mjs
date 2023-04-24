import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';

class VfButtonAngularComponent {
    constructor() {
        /*  Initialize values based on input values for button*/
        this.theme = '';
        this.text = '';
        this.style = [];
        this.override_class = '';
        this.html = '';
        this.content = '';
        this.class = 'vf-button ';
    }
    ngOnInit() {
        //Initialize something
    }
    ngOnChanges() {
        this.setValues();
    }
    /* Set values as per input and updated changes */
    setValues() {
        /* Set values ass per the input */
        this.content = this.html !== '' ? this.html : this.text;
        this.class += this.theme !== '' ? 'vf-button--' + this.theme + ' ' : '';
        /* Update class value if styles are received in input */
        if (this.style.length > 0) {
            this.style.forEach(style => {
                this.class += 'vf-button--' + style + ' ';
            });
        }
        /* Update class value if size is received in input */
        if (this.size !== undefined) {
            this.class += 'vf-button--' + this.size + ' ';
        }
        /* Update class value if override style received in input */
        this.class += this.override_class !== '' ? '| ' + this.override_class : '';
    }
}
VfButtonAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfButtonAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VfButtonAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: VfButtonAngularComponent, selector: "vf-button", inputs: { theme: "theme", id: "id", text: "text", style: "style", size: "size", override_class: "override_class", html: "html" }, usesOnChanges: true, ngImport: i0, template: `
    <button [attr.id] = "id !== undefined ? id : null" [class]="class" [innerHTML]="content"></button>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfButtonAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vf-button', template: `
    <button [attr.id] = "id !== undefined ? id : null" [class]="class" [innerHTML]="content"></button>
  ` }]
        }], propDecorators: { theme: [{
                type: Input
            }], id: [{
                type: Input
            }], text: [{
                type: Input
            }], style: [{
                type: Input
            }], size: [{
                type: Input
            }], override_class: [{
                type: Input
            }], html: [{
                type: Input
            }] } });

class VfButtonAngularModule {
}
VfButtonAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfButtonAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VfButtonAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.3", ngImport: i0, type: VfButtonAngularModule, declarations: [VfButtonAngularComponent], exports: [VfButtonAngularComponent] });
VfButtonAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfButtonAngularModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfButtonAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfButtonAngularComponent
                    ],
                    imports: [],
                    exports: [
                        VfButtonAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-button.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfButtonAngularComponent, VfButtonAngularModule };
//# sourceMappingURL=vf-button.angular.mjs.map
