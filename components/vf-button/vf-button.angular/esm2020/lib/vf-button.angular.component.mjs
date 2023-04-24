import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class VfButtonAngularComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtYnV0dG9uLmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdmYtYnV0dG9uLmFuZ3VsYXIvc3JjL2xpYi92Zi1idXR0b24uYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBU3pELE1BQU0sT0FBTyx3QkFBd0I7SUFQckM7UUFRRSx3REFBd0Q7UUFDL0MsVUFBSyxHQUFJLEVBQUUsQ0FBQztRQUVaLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQWdELEVBQUUsQ0FBQztRQUV4RCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBRW5CLFlBQU8sR0FBSSxFQUFFLENBQUM7UUFDZCxVQUFLLEdBQUcsWUFBWSxDQUFDO0tBNkJ0QjtJQTNCQyxRQUFRO1FBQ04sc0JBQXNCO0lBQ3hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxpREFBaUQ7SUFDakQsU0FBUztRQUVQLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pFLHdEQUF3RDtRQUN4RCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLEtBQUssSUFBSSxhQUFhLEdBQUcsS0FBSyxHQUFJLEdBQUcsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QscURBQXFEO1FBQ3JELElBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHLENBQUM7U0FDaEQ7UUFDRCw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RSxDQUFDOztxSEF2Q1Usd0JBQXdCO3lHQUF4Qix3QkFBd0Isd01BTHpCOztHQUVUOzJGQUdVLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSxXQUFXLFlBQ1g7O0dBRVQ7OEJBS1EsS0FBSztzQkFBYixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2Zi1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gW2F0dHIuaWRdID0gXCJpZCAhPT0gdW5kZWZpbmVkID8gaWQgOiBudWxsXCIgW2NsYXNzXT1cImNsYXNzXCIgW2lubmVySFRNTF09XCJjb250ZW50XCI+PC9idXR0b24+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVmZCdXR0b25Bbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyogIEluaXRpYWxpemUgdmFsdWVzIGJhc2VkIG9uIGlucHV0IHZhbHVlcyBmb3IgYnV0dG9uKi9cbiAgQElucHV0KCkgdGhlbWUgID0gJyc7XG4gIEBJbnB1dCgpIGlkOiAgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG4gIEBJbnB1dCgpIHN0eWxlOiBBcnJheTwncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICd0ZXJ0aWFyeSc+ID0gW107XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgb3ZlcnJpZGVfY2xhc3MgPSAnJztcbiAgQElucHV0KCkgaHRtbCA9ICcnO1xuXG4gIGNvbnRlbnQgPSAgJyc7XG4gIGNsYXNzID0gJ3ZmLWJ1dHRvbiAnO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vSW5pdGlhbGl6ZSBzb21ldGhpbmdcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gIH1cblxuICAvKiBTZXQgdmFsdWVzIGFzIHBlciBpbnB1dCBhbmQgdXBkYXRlZCBjaGFuZ2VzICovXG4gIHNldFZhbHVlcygpOiB2b2lkIHtcblxuICAgIC8qIFNldCB2YWx1ZXMgYXNzIHBlciB0aGUgaW5wdXQgKi9cbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmh0bWwgIT09ICcnID8gdGhpcy5odG1sIDogdGhpcy50ZXh0O1xuICAgIHRoaXMuY2xhc3MgKz0gdGhpcy50aGVtZSAhPT0gJycgPyAndmYtYnV0dG9uLS0nICsgdGhpcy50aGVtZSArICAnICcgOiAnJztcbiAgICAvKiBVcGRhdGUgY2xhc3MgdmFsdWUgaWYgc3R5bGVzIGFyZSByZWNlaXZlZCBpbiBpbnB1dCAqL1xuICAgIGlmKHRoaXMuc3R5bGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zdHlsZS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgdGhpcy5jbGFzcyArPSAndmYtYnV0dG9uLS0nICsgc3R5bGUgKyAgJyAnO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qIFVwZGF0ZSBjbGFzcyB2YWx1ZSBpZiBzaXplIGlzIHJlY2VpdmVkIGluIGlucHV0ICovXG4gICAgaWYodGhpcy5zaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2xhc3MgKz0gJ3ZmLWJ1dHRvbi0tJyArIHRoaXMuc2l6ZSArICAnICc7XG4gICAgfVxuICAgIC8qIFVwZGF0ZSBjbGFzcyB2YWx1ZSBpZiBvdmVycmlkZSBzdHlsZSByZWNlaXZlZCBpbiBpbnB1dCAqL1xuICAgIHRoaXMuY2xhc3MgKz0gdGhpcy5vdmVycmlkZV9jbGFzcyAhPT0gJycgPyAnfCAnICsgdGhpcy5vdmVycmlkZV9jbGFzcyA6ICcnO1xuICB9XG59XG4iXX0=