import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfChatbotSourcesAngularComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1zb3VyY2VzLmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdmYtY2hhdGJvdC1zb3VyY2VzLmFuZ3VsYXIvc3JjL2xpYi92Zi1jaGF0Ym90LXNvdXJjZXMuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7OztBQWdDdkIsTUFBTSxPQUFPLGdDQUFnQztJQUczQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmpDLFlBQU8sR0FBc0IsRUFBRSxDQUFDO0lBRUksQ0FBQztJQUU5QyxlQUFlO0lBQ2YsQ0FBQzsrR0FOVSxnQ0FBZ0M7bUdBQWhDLGdDQUFnQywwRkFyQmpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJUOzs0RkFFVSxnQ0FBZ0M7a0JBdkI1QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDtpQkFDRjsrRUFFVSxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFZGQ2hhdGJvdFNvdXJjZSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2Zi1jaGF0Ym90LXNvdXJjZXMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1zb3VyY2VzXCJcbiAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC1zb3VyY2VzXG4gICAgPlxuICAgICAgPGgzPlNvdXJjZXM8L2gzPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHNvdXJjZSBvZiBzb3VyY2VzXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIFtocmVmXT1cInNvdXJjZS51cmxcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJzb3VyY2UudGl0bGUgKyAnIChvcGVucyBpbiBuZXcgdGFiKSdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IHNvdXJjZS50aXRsZSB9fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFZmQ2hhdGJvdFNvdXJjZXNBbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHNvdXJjZXM6IFZGQ2hhdGJvdFNvdXJjZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgfVxufVxuIl19