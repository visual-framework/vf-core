import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
export class VfTabsAngularComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtdGFicy5hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZmLXRhYnMuYW5ndWxhci9zcmMvbGliL3ZmLXRhYnMuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQW9DLE1BQU0sZUFBZSxDQUFDOzs7O0FBaUM1RyxNQUFNLE9BQU8sc0JBQXNCO0lBR2pDLFlBQW9CLFNBQXVCLEVBQVUsR0FBc0I7UUFBdkQsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUcsQ0FBQztJQUUvRSxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxpREFBaUQ7SUFDakQsU0FBUztRQUNQLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFNO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOztvSEF0QlUsc0JBQXNCO3dHQUF0QixzQkFBc0Isc0dBMUJ2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDs0RkFJVSxzQkFBc0I7a0JBNUJsQyxTQUFTOytCQUNFLFNBQVMsWUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVCxtQkFFZ0IsdUJBQXVCLENBQUMsTUFBTTttSUFHdEMsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmRlY2xhcmUgZnVuY3Rpb24gdmZUYWJzKCk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInZmLXRhYnNcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidmYtdGFic1wiPlxuICAgICAgPHVsIGNsYXNzPVwidmYtdGFic19fbGlzdFwiIGRhdGEtdmYtanMtdGFicz5cbiAgICAgICAgPGxpIGNsYXNzPVwidmYtdGFic19faXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRhYnNcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3M9XCJ2Zi10YWJzX19saW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCIjdmYtdGFic19fc2VjdGlvbi0te3tpdGVtWzFdLnRhYl9udW1iZXJ9fVwiXG4gICAgICAgICAgICBbaW5uZXJIVE1MXT1cIml0ZW1bMF0udGFiX3RpdGxlXCI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidmYtdGFicy1jb250ZW50XCIgZGF0YS12Zi1qcy10YWJzLWNvbnRlbnQ+XG4gICAgICA8c2VjdGlvblxuICAgICAgICBjbGFzcz1cInZmLXRhYnNfX3NlY3Rpb25cIlxuICAgICAgICBpZD1cInZmLXRhYnNfX3NlY3Rpb24tLXt7aXRlbVsxXS50YWJfbnVtYmVyfX1cIlxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0YWJzXCJcbiAgICAgID5cbiAgICAgICAgPGgyICpuZ0lmPVwiaXRlbVsyXS50YWJfaGVhZGluZyAhPT0gJydcIiBbaW5uZXJIVE1MXT1cInNhbml0aXplSFRNTChpdGVtWzJdLnRhYl9oZWFkaW5nKVwiPjwvaDI+XG4gICAgICAgIDxwIFtpbm5lckhUTUxdPVwic2FuaXRpemVIVE1MKGl0ZW1bM10udGFiX2NvbnRlbnQpXCI+PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBWZlRhYnNBbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHRhYnNkYXRhOiBhbnk7XG4gIHRhYnM6YW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZXMoKTtcbiAgfVxuXG4gIC8qIFNldCB2YWx1ZXMgYXMgcGVyIGlucHV0IGFuZCB1cGRhdGVkIGNoYW5nZXMgKi9cbiAgc2V0VmFsdWVzKCk6IHZvaWQge1xuICAgIC8qIEluaXRpYWxpemUvUmVzZXQgdGhlIHZhbHVlcyBmb3IgY2xhc3MgYW5kIHN0eWxlICovXG4gICAgdGhpcy50YWJzID0gdGhpcy50YWJzZGF0YTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdmZUYWJzKCk7XG4gIH1cblxuICBzYW5pdGl6ZUhUTUwodDogYW55KXtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodCk7XG4gIH1cbn1cbiJdfQ==