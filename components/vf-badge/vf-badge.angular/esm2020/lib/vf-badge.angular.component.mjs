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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtYmFkZ2UuYW5ndWxhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92Zi1iYWRnZS5hbmd1bGFyL3NyYy9saWIvdmYtYmFkZ2UuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVd6RCxNQUFNLE9BQU8sdUJBQXVCO0lBVHBDO1FBVUUsNkNBQTZDO1FBQ3BDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQWdELEVBQUUsQ0FBQztRQUN4RCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFFN0IsWUFBTyxHQUFJLEVBQUUsQ0FBQztRQUNkLFVBQUssR0FBRyxXQUFXLENBQUM7S0F3QnJCO0lBdEJDLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGlEQUFpRDtJQUNqRCxTQUFTO1FBQ1Asa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEUsd0RBQXdEO1FBQ3hELElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsS0FBSyxJQUFJLFlBQVksR0FBRyxLQUFLLEdBQUksR0FBRyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RSxDQUFDOztvSEFqQ1UsdUJBQXVCO3dHQUF2Qix1QkFBdUIsbU5BUHhCOzs7R0FHVDsyRkFJVSx1QkFBdUI7a0JBVG5DLFNBQVM7K0JBQ0UsVUFBVSxZQUNWOzs7R0FHVDs4QkFNUSxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ2Zi1iYWRnZVwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIFthdHRyLmlkXSA9IFwiaWQgIT09IHVuZGVmaW5lZCA/IGlkIDogbnVsbFwiICpuZ0lmPVwiYmFkZ2VfaHJlZiAhPT0gJydcIiBbaHJlZl09XCJiYWRnZV9ocmVmXCIgW2NsYXNzXT1cImNsYXNzXCIgW2lubmVySFRNTF09XCJjb250ZW50XCI+PC9hPlxuICAgIDxzcGFuIFthdHRyLmlkXSA9IFwiaWQgIT09IHVuZGVmaW5lZCA/IGlkIDogbnVsbFwiICpuZ0lmPVwiIWJhZGdlX2hyZWYgfHwgYmFkZ2VfaHJlZiA9PT0gbnVsbCB8fCBiYWRnZV9ocmVmID09PSAnJ1wiIFtjbGFzc109XCJjbGFzc1wiIFtpbm5lckhUTUxdPVwiY29udGVudFwiPjwvc3Bhbj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIFZmQmFkZ2VBbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyogSW5pdGlhbGl6ZSB2YWx1ZXMgYmFzZWQgb24gaW5wdXQgdmFsdWVzICovXG4gIEBJbnB1dCgpIGJhZGdlX2hyZWYgPSAnJztcbiAgQElucHV0KCkgdGhlbWUgPSAnJztcbiAgQElucHV0KCkgdGV4dCA9ICcnO1xuICBASW5wdXQoKSBzdHlsZTogQXJyYXk8J3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAndGVydGlhcnknPiA9IFtdO1xuICBASW5wdXQoKSBodG1sID0gJyc7XG4gIEBJbnB1dCgpIG92ZXJyaWRlX2NsYXNzID0gJyc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbnRlbnQgPSAgJyc7XG4gIGNsYXNzID0gJ3ZmLWJhZGdlICc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gIH1cblxuICAvKiBTZXQgdmFsdWVzIGFzIHBlciBpbnB1dCBhbmQgdXBkYXRlZCBjaGFuZ2VzICovXG4gIHNldFZhbHVlcygpOiB2b2lkIHtcbiAgICAvKiBTZXQgdmFsdWVzIGFzcyBwZXIgdGhlIGlucHV0ICovXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5odG1sICE9PSAnJyA/IHRoaXMuaHRtbCA6IHRoaXMudGV4dDtcbiAgICB0aGlzLmNsYXNzICs9IHRoaXMudGhlbWUgIT09ICcnID8gJ3ZmLWJhZGdlLS0nICsgdGhpcy50aGVtZSArICAnICcgOiAnJztcbiAgICAvKiBVcGRhdGUgY2xhc3MgdmFsdWUgaWYgc3R5bGVzIGFyZSByZWNlaXZlZCBpbiBpbnB1dCAqL1xuICAgIGlmKHRoaXMuc3R5bGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zdHlsZS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgdGhpcy5jbGFzcyArPSAndmYtYmFkZ2UtLScgKyBzdHlsZSArICAnICc7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyogVXBkYXRlIGNsYXNzIHZhbHVlIGlmIG92ZXJyaWRlIHN0eWxlIHJlY2VpdmVkIGluIGlucHV0ICovXG4gICAgdGhpcy5jbGFzcyArPSB0aGlzLm92ZXJyaWRlX2NsYXNzICE9PSAnJyA/ICd8ICcgKyB0aGlzLm92ZXJyaWRlX2NsYXNzIDogJyc7XG4gIH1cbn1cbiJdfQ==