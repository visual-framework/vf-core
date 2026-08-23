import * as i0 from '@angular/core';
import { NgModule, Component, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

class VfChatbotSourcesAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSourcesAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSourcesAngularModule, declarations: [VfChatbotSourcesAngularComponent], imports: [CommonModule,
            FormsModule], exports: [VfChatbotSourcesAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSourcesAngularModule, imports: [CommonModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSourcesAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfChatbotSourcesAngularComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [
                        VfChatbotSourcesAngularComponent
                    ]
                }]
        }] });

class VfChatbotSourcesAngularComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.sources = [];
    }
    ngAfterViewInit() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSourcesAngularComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotSourcesAngularComponent, selector: "vf-chatbot-sources", inputs: { sources: "sources" }, ngImport: i0, template: `
    <div
      class="vf-chatbot-sources"
      data-vf-js-chatbot-sources
    >
      <h3>Sources</h3>
      <ul>
        <li *ngFor="let source of sources">
          <a
            [href]="source.url"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="source.title + ' (opens in new tab)'"
          >
            {{ source.title }}
          </a>
        </li>
      </ul>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotSourcesAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-sources',
                    template: `
    <div
      class="vf-chatbot-sources"
      data-vf-js-chatbot-sources
    >
      <h3>Sources</h3>
      <ul>
        <li *ngFor="let source of sources">
          <a
            [href]="source.url"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="source.title + ' (opens in new tab)'"
          >
            {{ source.title }}
          </a>
        </li>
      </ul>
    </div>
  `,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { sources: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotSourcesAngularComponent, VfChatbotSourcesAngularModule };
//# sourceMappingURL=visual-framework-vf-chatbot-sources.angular.mjs.map
