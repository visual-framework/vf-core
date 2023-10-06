import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfBlockquoteAngularComponent {
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
        this.class = 'vf-blockquote vf-u-margin__left--800';
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
        <img *ngIf="blockquote_author_imageurl !== ''" class="vf-profile__image vf-u-margin__right--600" [src]="blockquote_author_imageurl" alt="" loading="lazy" />
        <div>
          <div>{{ quote }}</div>
          <footer class="vf-u-margin__top--600">
            <a *ngIf="blockquote_author_href !== ''; else quoteauthorplain" class="vf-blockquote_author__link" [href]="blockquote_author_href" [innerHTML]="blockquote_author"></a>
            <ng-template #quoteauthorplain>{{ blockquote_author }}</ng-template>
            <div *ngIf="blockquote_author_details !== ''" class="vf-text-body--2">{{ blockquote_author_details }}</div>
          </footer>
        </div>
    </blockquote>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: VfBlockquoteAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vf-blockquote', template: `
    <blockquote [attr.id]="id !== undefined ? id : null" [class]="class">
        <img *ngIf="blockquote_author_imageurl !== ''" class="vf-profile__image vf-u-margin__right--600" [src]="blockquote_author_imageurl" alt="" loading="lazy" />
        <div>
          <div>{{ quote }}</div>
          <footer class="vf-u-margin__top--600">
            <a *ngIf="blockquote_author_href !== ''; else quoteauthorplain" class="vf-blockquote_author__link" [href]="blockquote_author_href" [innerHTML]="blockquote_author"></a>
            <ng-template #quoteauthorplain>{{ blockquote_author }}</ng-template>
            <div *ngIf="blockquote_author_details !== ''" class="vf-text-body--2">{{ blockquote_author_details }}</div>
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtYmxvY2txdW90ZS5hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZmLWJsb2NrcXVvdGUuYW5ndWxhci9zcmMvbGliL3ZmLWJsb2NrcXVvdGUuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQW1CekQsTUFBTSxPQUFPLDRCQUE0QjtJQWpCekM7UUFvQlcsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDhCQUF5QixHQUFHLEVBQUUsQ0FBQztRQUMvQiwrQkFBMEIsR0FBRyxFQUFFLENBQUM7UUFDaEMsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFFN0IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxFQUFFLENBQUM7S0F1Qlo7SUFyQkMsUUFBUTtRQUNOLHVCQUF1QjtJQUN6QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsaURBQWlEO0lBQ2pELFNBQVM7UUFDUCw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxzQ0FBc0MsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUU3RCw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZTtZQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7WUFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUNYLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDOzt5SEFuQ1UsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsOFlBZjdCOzs7Ozs7Ozs7Ozs7R0FZVDsyRkFHVSw0QkFBNEI7a0JBakJ4QyxTQUFTOytCQUNFLGVBQWUsWUFDZjs7Ozs7Ozs7Ozs7O0dBWVQ7OEJBS1EsRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csc0JBQXNCO3NCQUE5QixLQUFLO2dCQUNHLHlCQUF5QjtzQkFBakMsS0FBSztnQkFDRywwQkFBMEI7c0JBQWxDLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2Zi1ibG9ja3F1b3RlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YmxvY2txdW90ZSBbYXR0ci5pZF09XCJpZCAhPT0gdW5kZWZpbmVkID8gaWQgOiBudWxsXCIgW2NsYXNzXT1cImNsYXNzXCI+XG4gICAgICAgIDxpbWcgKm5nSWY9XCJibG9ja3F1b3RlX2F1dGhvcl9pbWFnZXVybCAhPT0gJydcIiBjbGFzcz1cInZmLXByb2ZpbGVfX2ltYWdlIHZmLXUtbWFyZ2luX19yaWdodC0tNjAwXCIgW3NyY109XCJibG9ja3F1b3RlX2F1dGhvcl9pbWFnZXVybFwiIGFsdD1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2Pnt7IHF1b3RlIH19PC9kaXY+XG4gICAgICAgICAgPGZvb3RlciBjbGFzcz1cInZmLXUtbWFyZ2luX190b3AtLTYwMFwiPlxuICAgICAgICAgICAgPGEgKm5nSWY9XCJibG9ja3F1b3RlX2F1dGhvcl9ocmVmICE9PSAnJzsgZWxzZSBxdW90ZWF1dGhvcnBsYWluXCIgY2xhc3M9XCJ2Zi1ibG9ja3F1b3RlX2F1dGhvcl9fbGlua1wiIFtocmVmXT1cImJsb2NrcXVvdGVfYXV0aG9yX2hyZWZcIiBbaW5uZXJIVE1MXT1cImJsb2NrcXVvdGVfYXV0aG9yXCI+PC9hPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNxdW90ZWF1dGhvcnBsYWluPnt7IGJsb2NrcXVvdGVfYXV0aG9yIH19PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJibG9ja3F1b3RlX2F1dGhvcl9kZXRhaWxzICE9PSAnJ1wiIGNsYXNzPVwidmYtdGV4dC1ib2R5LS0yXCI+e3sgYmxvY2txdW90ZV9hdXRob3JfZGV0YWlscyB9fTwvZGl2PlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Jsb2NrcXVvdGU+XG4gIGAsXG4gIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFZmQmxvY2txdW90ZUFuZ3VsYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiBJbml0aWFsaXplIHZhbHVlcyBiYXNlZCBvbiBpbnB1dCB2YWx1ZXMgKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgaHRtbCA9ICcnO1xuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG4gIEBJbnB1dCgpIGJsb2NrcXVvdGVfdGV4dCA9ICcnO1xuICBASW5wdXQoKSBibG9ja3F1b3RlX2F1dGhvciA9ICcnO1xuICBASW5wdXQoKSBibG9ja3F1b3RlX2F1dGhvcl9ocmVmID0gJyc7XG4gIEBJbnB1dCgpIGJsb2NrcXVvdGVfYXV0aG9yX2RldGFpbHMgPSAnJztcbiAgQElucHV0KCkgYmxvY2txdW90ZV9hdXRob3JfaW1hZ2V1cmwgPSAnJztcbiAgQElucHV0KCkgb3ZlcnJpZGVfY2xhc3MgPSAnJztcblxuICBjbGFzcyA9ICcnO1xuICBxdW90ZSA9ICcnO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vSW5pdGlhbGl6ZSAgc29tZXRoaW5nXG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlcygpO1xuICB9XG5cbiAgLyogU2V0IHZhbHVlcyBhcyBwZXIgaW5wdXQgYW5kIHVwZGF0ZWQgY2hhbmdlcyAqL1xuICBzZXRWYWx1ZXMoKTogdm9pZCB7XG4gICAgLyogQ29uZGl0aW9uYWwgc3R5bGVzLCBzdHJpbmdzLCBudWxsYWJsZXMsIGFycmF5cyBvZiBzdHlsZXMgKi9cbiAgICB0aGlzLmNsYXNzID0gJ3ZmLWJsb2NrcXVvdGUgdmYtdS1tYXJnaW5fX2xlZnQtLTgwMCc7XG4gICAgdGhpcy5jbGFzcyArPSB0aGlzLm92ZXJyaWRlX2NsYXNzID8gdGhpcy5vdmVycmlkZV9jbGFzcyA6ICcnO1xuXG4gICAgLyogSW5uZXIgY29udGVudCBvZiB0aGUgcXVvdGUgYmFzZWQgb24gd2hldGhlciBIVE1MIG9yIFRleHQgKi9cbiAgICB0aGlzLnF1b3RlID0gdGhpcy5ibG9ja3F1b3RlX3RleHRcbiAgICAgID8gdGhpcy5ibG9ja3F1b3RlX3RleHRcbiAgICAgIDogdGhpcy5odG1sXG4gICAgICA/IHRoaXMuaHRtbFxuICAgICAgOiB0aGlzLnRleHQ7XG4gIH1cbn1cbiJdfQ==