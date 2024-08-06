import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, EventEmitter, Directive, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/platform-browser';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class VfTabsAngularComponent {
    constructor(sanitizer, cdr) {
        this.sanitizer = sanitizer;
        this.cdr = cdr;
    }
    ngOnChanges() {
        this.setValues();
    }
    /* Set values as per input and updated changes */
    setValues() {
        /* Initialize/Reset the values for class and style */
        this.tabs = this.tabsdata;
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
        vfTabs();
    }
    sanitizeHTML(t) {
        return this.sanitizer.bypassSecurityTrustHtml(t);
    }
}
VfTabsAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfTabsAngularComponent, deps: [{ token: i1.DomSanitizer }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
VfTabsAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: VfTabsAngularComponent, selector: "vf-tabs", inputs: { tabsdata: "tabsdata" }, usesOnChanges: true, ngImport: i0, template: `
    <div class="vf-tabs">
      <ul class="vf-tabs__list" data-vf-js-tabs>
        <li class="vf-tabs__item" *ngFor="let item of tabs">
          <a
            class="vf-tabs__link"
            href="#vf-tabs__section--{{item[1].tab_number}}"
            [innerHTML]="item[0].tab_title">
          </a>
        </li>
      </ul>
    </div>
    <div class="vf-tabs-content" data-vf-js-tabs-content>
      <section
        class="vf-tabs__section"
        id="vf-tabs__section--{{item[1].tab_number}}"
        *ngFor="let item of tabs"
      >
        <h2 *ngIf="item[2].tab_heading !== ''" [innerHTML]="sanitizeHTML(item[2].tab_heading)"></h2>
        <p [innerHTML]="sanitizeHTML(item[3].tab_content)"></p>
      </section>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfTabsAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: "vf-tabs", template: `
    <div class="vf-tabs">
      <ul class="vf-tabs__list" data-vf-js-tabs>
        <li class="vf-tabs__item" *ngFor="let item of tabs">
          <a
            class="vf-tabs__link"
            href="#vf-tabs__section--{{item[1].tab_number}}"
            [innerHTML]="item[0].tab_title">
          </a>
        </li>
      </ul>
    </div>
    <div class="vf-tabs-content" data-vf-js-tabs-content>
      <section
        class="vf-tabs__section"
        id="vf-tabs__section--{{item[1].tab_number}}"
        *ngFor="let item of tabs"
      >
        <h2 *ngIf="item[2].tab_heading !== ''" [innerHTML]="sanitizeHTML(item[2].tab_heading)"></h2>
        <p [innerHTML]="sanitizeHTML(item[3].tab_content)"></p>
      </section>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { tabsdata: [{
                type: Input
            }] } });

class VfTabsAngularDomChangeDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.domChange = new EventEmitter();
        const element = this.elementRef.nativeElement;
        var disableObserver = false;
        this.changes = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (!disableObserver) {
                    disableObserver = true;
                }
                this.domChange.emit(mutation);
            });
        });
        this.changes.observe(element, {
            attributes: true,
            childList: true,
            characterData: true
        });
    }
    ngOnDestroy() {
        this.changes.disconnect();
    }
}
VfTabsAngularDomChangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfTabsAngularDomChangeDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
VfTabsAngularDomChangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: VfTabsAngularDomChangeDirective, selector: "[domChange]", outputs: { domChange: "domChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfTabsAngularDomChangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domChange]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { domChange: [{
                type: Output
            }] } });

class VfTabsAngularModule {
}
VfTabsAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfTabsAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VfTabsAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: VfTabsAngularModule, declarations: [VfTabsAngularComponent,
        VfTabsAngularDomChangeDirective], imports: [CommonModule], exports: [VfTabsAngularComponent] });
VfTabsAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfTabsAngularModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfTabsAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfTabsAngularComponent,
                        VfTabsAngularDomChangeDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        VfTabsAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-tabs.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfTabsAngularComponent, VfTabsAngularModule };
//# sourceMappingURL=vf-tabs.angular.mjs.map
