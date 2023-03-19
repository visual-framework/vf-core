import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfBadgeAngularComponent {
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
VfBadgeAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: VfBadgeAngularComponent, selector: "vf-badge", inputs: { badge_href: "badge_href", theme: "theme", text: "text", style: "style", html: "html", override_class: "override_class", id: "id" }, ngImport: i0, template: `
    <a [attr.id] = "id !== undefined ? id : null" *ngIf="badge_href !== ''" [href]="badge_href" [class]="class">{{content}}</a>
    <span [attr.id] = "id !== undefined ? id : null" *ngIf="!badge_href || badge_href === null || badge_href === ''" [class]="class">{{content}}</span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBadgeAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: "vf-badge", template: `
    <a [attr.id] = "id !== undefined ? id : null" *ngIf="badge_href !== ''" [href]="badge_href" [class]="class">{{content}}</a>
    <span [attr.id] = "id !== undefined ? id : null" *ngIf="!badge_href || badge_href === null || badge_href === ''" [class]="class">{{content}}</span>
  ` }]
        }], ctorParameters: function () { return []; }, propDecorators: { badge_href: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtYmFkZ2UuYW5ndWxhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92Zi1iYWRnZS5hbmd1bGFyL3NyYy9saWIvdmYtYmFkZ2UuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVd6RCxNQUFNLE9BQU8sdUJBQXVCO0lBWWxDO1FBWEEsNkNBQTZDO1FBQ3BDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRTdCLFlBQU8sR0FBSSxFQUFFLENBQUM7UUFDZCxVQUFLLEdBQUcsV0FBVyxDQUFDO0lBRUwsQ0FBQztJQUVoQixRQUFRO1FBQ04sa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEUsd0RBQXdEO1FBQ3hELElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsS0FBSyxJQUFJLFlBQVksR0FBRyxLQUFLLEdBQUksR0FBRyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RSxDQUFDOztvSEExQlUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsOExBUHhCOzs7R0FHVDsyRkFJVSx1QkFBdUI7a0JBVG5DLFNBQVM7K0JBQ0UsVUFBVSxZQUNWOzs7R0FHVDswRUFNUSxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ2Zi1iYWRnZVwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIFthdHRyLmlkXSA9IFwiaWQgIT09IHVuZGVmaW5lZCA/IGlkIDogbnVsbFwiICpuZ0lmPVwiYmFkZ2VfaHJlZiAhPT0gJydcIiBbaHJlZl09XCJiYWRnZV9ocmVmXCIgW2NsYXNzXT1cImNsYXNzXCI+e3tjb250ZW50fX08L2E+XG4gICAgPHNwYW4gW2F0dHIuaWRdID0gXCJpZCAhPT0gdW5kZWZpbmVkID8gaWQgOiBudWxsXCIgKm5nSWY9XCIhYmFkZ2VfaHJlZiB8fCBiYWRnZV9ocmVmID09PSBudWxsIHx8IGJhZGdlX2hyZWYgPT09ICcnXCIgW2NsYXNzXT1cImNsYXNzXCI+e3tjb250ZW50fX08L3NwYW4+XG4gIGAsXG4gIHN0eWxlVXJsczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBWZkJhZGdlQW5ndWxhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qIEluaXRpYWxpemUgdmFsdWVzIGJhc2VkIG9uIGlucHV0IHZhbHVlcyAqL1xuICBASW5wdXQoKSBiYWRnZV9ocmVmID0gJyc7XG4gIEBJbnB1dCgpIHRoZW1lID0gJyc7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcbiAgQElucHV0KCkgc3R5bGUgPSBbXTtcbiAgQElucHV0KCkgaHRtbCA9ICcnO1xuICBASW5wdXQoKSBvdmVycmlkZV9jbGFzcyA9ICcnO1xuICBASW5wdXQoKSBpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb250ZW50ID0gICcnO1xuICBjbGFzcyA9ICd2Zi1iYWRnZSAnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvKiBTZXQgdmFsdWVzIGFzcyBwZXIgdGhlIGlucHV0ICovXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5odG1sICE9PSAnJyA/IHRoaXMuaHRtbCA6IHRoaXMudGV4dDtcbiAgICB0aGlzLmNsYXNzICs9IHRoaXMudGhlbWUgIT09ICcnID8gJ3ZmLWJhZGdlLS0nICsgdGhpcy50aGVtZSArICAnICcgOiAnJztcbiAgICAvKiBVcGRhdGUgY2xhc3MgdmFsdWUgaWYgc3R5bGVzIGFyZSByZWNlaXZlZCBpbiBpbnB1dCAqL1xuICAgIGlmKHRoaXMuc3R5bGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zdHlsZS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgdGhpcy5jbGFzcyArPSAndmYtYmFkZ2UtLScgKyBzdHlsZSArICAnICc7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyogVXBkYXRlIGNsYXNzIHZhbHVlIGlmIG92ZXJyaWRlIHN0eWxlIHJlY2VpdmVkIGluIGlucHV0ICovXG4gICAgdGhpcy5jbGFzcyArPSB0aGlzLm92ZXJyaWRlX2NsYXNzICE9PSAnJyA/ICd8ICcgKyB0aGlzLm92ZXJyaWRlX2NsYXNzIDogJyc7XG4gIH1cbn1cbiJdfQ==