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
export * from './vf-chatbot-sources.angular.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1zb3VyY2VzLmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvdmYtY2hhdGJvdC1zb3VyY2VzLmFuZ3VsYXIvc3JjL2xpYi92Zi1jaGF0Ym90LXNvdXJjZXMuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR04sTUFBTSxlQUFlLENBQUM7OztBQWdDdkIsTUFBTSxPQUFPLGdDQUFnQztJQUczQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmpDLFlBQU8sR0FBc0IsRUFBRSxDQUFDO0lBRUksQ0FBQztJQUU5QyxlQUFlO0lBQ2YsQ0FBQzsrR0FOVSxnQ0FBZ0M7bUdBQWhDLGdDQUFnQywwRkFyQmpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJUOzs0RkFFVSxnQ0FBZ0M7a0JBdkI1QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDtpQkFDRjsrRUFFVSxPQUFPO3NCQUFmLEtBQUs7O0FBUVIsY0FBYyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVkZDaGF0Ym90U291cmNlIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmLWNoYXRib3Qtc291cmNlcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LXNvdXJjZXNcIlxuICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LXNvdXJjZXNcbiAgICA+XG4gICAgICA8aDM+U291cmNlczwvaDM+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgc291cmNlIG9mIHNvdXJjZXNcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgW2hyZWZdPVwic291cmNlLnVybFwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInNvdXJjZS50aXRsZSArICcgKG9wZW5zIGluIG5ldyB0YWIpJ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgc291cmNlLnRpdGxlIH19XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVmZDaGF0Ym90U291cmNlc0FuZ3VsYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgc291cmNlczogVkZDaGF0Ym90U291cmNlW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICB9XG59XG5cbmV4cG9ydCAqIGZyb20gJy4vdmYtY2hhdGJvdC1zb3VyY2VzLmFuZ3VsYXIubW9kdWxlJztcbiJdfQ==