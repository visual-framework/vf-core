import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfHeroAngularComponent {
    constructor() {
        /* Initialize values based on input values */
        this.vf_hero_image = '';
        this.vf_hero_image_size = '';
        this.vf_hero_kicker = '';
        this.vf_hero_heading = '';
        this.vf_hero_heading_href = '';
        this.vf_hero_subheading = '';
        this.vf_hero_text = [];
        this.vf_hero_link_text = '';
        this.vf_hero_link_href = '';
        this.modifier_class = '';
        this.vf_hero_heading_additional = '';
        this.class = '';
        this.style = '';
        this.vf_hero_link_innerhtml = '';
    }
    ngOnInit() {
        this.setValues();
    }
    ngOnChanges() {
        this.setValues();
    }
    /* Set values as per input and updated changes */
    setValues() {
        /* Initialize/Reset the values for class and style */
        this.class = 'vf-hero ';
        this.style = '';
        if (this.vf_hero_heading_additional !== '') {
            this.vf_hero_kicker = this.vf_hero_heading_additional;
        }
        /* Set values ass per the input */
        this.class += this.spacing !== undefined ? 'vf-hero--' + this.spacing + ' ' : '';
        this.class += '| vf-u-fullbleed';
        this.class += this.modifier_class !== '' ? ' ' + this.modifier_class : '';
        this.style += this.vf_hero_image !== '' ? '--vf-hero--bg-image: ' + this.vf_hero_image : '';
        this.style += this.vf_hero_image_size !== '' ? ' --vf-hero--bg-image-size: ' + this.vf_hero_image_size : '';
    }
}
VfHeroAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfHeroAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VfHeroAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: VfHeroAngularComponent, selector: "vf-hero", inputs: { vf_hero_image: "vf_hero_image", vf_hero_image_size: "vf_hero_image_size", vf_hero_kicker: "vf_hero_kicker", vf_hero_heading: "vf_hero_heading", vf_hero_heading_href: "vf_hero_heading_href", vf_hero_subheading: "vf_hero_subheading", vf_hero_text: "vf_hero_text", vf_hero_link_text: "vf_hero_link_text", vf_hero_link_href: "vf_hero_link_href", spacing: "spacing", id: "id", modifier_class: "modifier_class", vf_hero_heading_additional: "vf_hero_heading_additional" }, usesOnChanges: true, ngImport: i0, template: `
    <section [attr.id] = "id !== undefined ? id : null" [ngClass]="class" [style]="style">
      <div class="vf-hero__content | vf-box | vf-stack vf-stack--400">
          <p *ngIf="vf_hero_kicker !== ''" class="vf-hero__kicker" [innerHTML]="vf_hero_kicker"></p>

        <h1 *ngIf="vf_hero_heading !== ''" class="vf-hero__heading">
          <a *ngIf="vf_hero_heading_href !== ''; else heroheadingplain" class="vf-hero__heading_link" [href]="vf_hero_heading_href" [innerHTML]="vf_hero_heading"></a>
        </h1>
        <ng-template #heroheadingplain>{{vf_hero_heading}}</ng-template>

        <p *ngIf="vf_hero_subheading !== ''" class="vf-hero__subheading" [innerHTML]="vf_hero_subheading"></p>

        <ng-container *ngIf="vf_hero_text?.length">
          <p class="vf-hero__text"*ngFor="let hero_text of vf_hero_text" [innerHTML]="hero_text"></p>
        </ng-container>

          <a *ngIf="vf_hero_link_href !== '' && vf_hero_link_text !==''" class="vf-hero__link" [href]="vf_hero_link_href">
          {{vf_hero_link_text}}
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="" fill-rule="nonzero"></path></svg>
          </a>
      </div>
    </section>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfHeroAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: "vf-hero", template: `
    <section [attr.id] = "id !== undefined ? id : null" [ngClass]="class" [style]="style">
      <div class="vf-hero__content | vf-box | vf-stack vf-stack--400">
          <p *ngIf="vf_hero_kicker !== ''" class="vf-hero__kicker" [innerHTML]="vf_hero_kicker"></p>

        <h1 *ngIf="vf_hero_heading !== ''" class="vf-hero__heading">
          <a *ngIf="vf_hero_heading_href !== ''; else heroheadingplain" class="vf-hero__heading_link" [href]="vf_hero_heading_href" [innerHTML]="vf_hero_heading"></a>
        </h1>
        <ng-template #heroheadingplain>{{vf_hero_heading}}</ng-template>

        <p *ngIf="vf_hero_subheading !== ''" class="vf-hero__subheading" [innerHTML]="vf_hero_subheading"></p>

        <ng-container *ngIf="vf_hero_text?.length">
          <p class="vf-hero__text"*ngFor="let hero_text of vf_hero_text" [innerHTML]="hero_text"></p>
        </ng-container>

          <a *ngIf="vf_hero_link_href !== '' && vf_hero_link_text !==''" class="vf-hero__link" [href]="vf_hero_link_href">
          {{vf_hero_link_text}}
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="" fill-rule="nonzero"></path></svg>
          </a>
      </div>
    </section>
  ` }]
        }], propDecorators: { vf_hero_image: [{
                type: Input
            }], vf_hero_image_size: [{
                type: Input
            }], vf_hero_kicker: [{
                type: Input
            }], vf_hero_heading: [{
                type: Input
            }], vf_hero_heading_href: [{
                type: Input
            }], vf_hero_subheading: [{
                type: Input
            }], vf_hero_text: [{
                type: Input
            }], vf_hero_link_text: [{
                type: Input
            }], vf_hero_link_href: [{
                type: Input
            }], spacing: [{
                type: Input
            }], id: [{
                type: Input
            }], modifier_class: [{
                type: Input
            }], vf_hero_heading_additional: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtaGVyby5hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZmLWhlcm8uYW5ndWxhci9zcmMvbGliL3ZmLWhlcm8uYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQThCekQsTUFBTSxPQUFPLHNCQUFzQjtJQTVCbkM7UUE2QkUsNkNBQTZDO1FBQ3BDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQix5QkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLGlCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQzdCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFHdkIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsK0JBQTBCLEdBQUcsRUFBRSxDQUFDO1FBRXpDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO0tBMkI3QjtJQXpCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxpREFBaUQ7SUFDakQsU0FBUztRQUNQLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLElBQUksQ0FBQywwQkFBMEIsS0FBSyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUM7U0FDdkQ7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEYsSUFBSSxDQUFDLEtBQUssSUFBSSxrQkFBa0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlHLENBQUM7O29IQTVDVSxzQkFBc0I7d0dBQXRCLHNCQUFzQixnaUJBMUJ2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDs0RkFJVSxzQkFBc0I7a0JBNUJsQyxTQUFTOytCQUNFLFNBQVMsWUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDs4QkFNUSxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csb0JBQW9CO3NCQUE1QixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLDBCQUEwQjtzQkFBbEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ2Zi1oZXJvXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gW2F0dHIuaWRdID0gXCJpZCAhPT0gdW5kZWZpbmVkID8gaWQgOiBudWxsXCIgW25nQ2xhc3NdPVwiY2xhc3NcIiBbc3R5bGVdPVwic3R5bGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1oZXJvX19jb250ZW50IHwgdmYtYm94IHwgdmYtc3RhY2sgdmYtc3RhY2stLTQwMFwiPlxuICAgICAgICAgIDxwICpuZ0lmPVwidmZfaGVyb19raWNrZXIgIT09ICcnXCIgY2xhc3M9XCJ2Zi1oZXJvX19raWNrZXJcIiBbaW5uZXJIVE1MXT1cInZmX2hlcm9fa2lja2VyXCI+PC9wPlxuXG4gICAgICAgIDxoMSAqbmdJZj1cInZmX2hlcm9faGVhZGluZyAhPT0gJydcIiBjbGFzcz1cInZmLWhlcm9fX2hlYWRpbmdcIj5cbiAgICAgICAgICA8YSAqbmdJZj1cInZmX2hlcm9faGVhZGluZ19ocmVmICE9PSAnJzsgZWxzZSBoZXJvaGVhZGluZ3BsYWluXCIgY2xhc3M9XCJ2Zi1oZXJvX19oZWFkaW5nX2xpbmtcIiBbaHJlZl09XCJ2Zl9oZXJvX2hlYWRpbmdfaHJlZlwiIFtpbm5lckhUTUxdPVwidmZfaGVyb19oZWFkaW5nXCI+PC9hPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2hlcm9oZWFkaW5ncGxhaW4+e3t2Zl9oZXJvX2hlYWRpbmd9fTwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPHAgKm5nSWY9XCJ2Zl9oZXJvX3N1YmhlYWRpbmcgIT09ICcnXCIgY2xhc3M9XCJ2Zi1oZXJvX19zdWJoZWFkaW5nXCIgW2lubmVySFRNTF09XCJ2Zl9oZXJvX3N1YmhlYWRpbmdcIj48L3A+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZmX2hlcm9fdGV4dD8ubGVuZ3RoXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ2Zi1oZXJvX190ZXh0XCIqbmdGb3I9XCJsZXQgaGVyb190ZXh0IG9mIHZmX2hlcm9fdGV4dFwiIFtpbm5lckhUTUxdPVwiaGVyb190ZXh0XCI+PC9wPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxhICpuZ0lmPVwidmZfaGVyb19saW5rX2hyZWYgIT09ICcnICYmIHZmX2hlcm9fbGlua190ZXh0ICE9PScnXCIgY2xhc3M9XCJ2Zi1oZXJvX19saW5rXCIgW2hyZWZdPVwidmZfaGVyb19saW5rX2hyZWZcIj5cbiAgICAgICAgICB7e3ZmX2hlcm9fbGlua190ZXh0fX1cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTAgMTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMnMxMi01LjM3MyAxMi0xMlMxOC42MjcgMCAxMiAwQzUuMzc2LjAwOC4wMDggNS4zNzYgMCAxMnptMTMuNzA3LTUuMjA5bDQuNSA0LjVhMSAxIDAgMDEwIDEuNDE0bC00LjUgNC41YTEgMSAwIDAxLTEuNDE0LTEuNDE0bDIuMzY2LTIuMzY3YS4yNS4yNSAwIDAwLS4xNzctLjQyNEg2YTEgMSAwIDAxMC0yaDguNDgyYS4yNS4yNSAwIDAwLjE3Ny0uNDI3bC0yLjM2Ni0yLjM2OGExIDEgMCAwMTEuNDE0LTEuNDE0elwiIGZpbGw9XCJcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIFZmSGVyb0FuZ3VsYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiBJbml0aWFsaXplIHZhbHVlcyBiYXNlZCBvbiBpbnB1dCB2YWx1ZXMgKi9cbiAgQElucHV0KCkgdmZfaGVyb19pbWFnZSA9ICcnO1xuICBASW5wdXQoKSB2Zl9oZXJvX2ltYWdlX3NpemUgPSAnJztcbiAgQElucHV0KCkgdmZfaGVyb19raWNrZXIgPSAnJztcbiAgQElucHV0KCkgdmZfaGVyb19oZWFkaW5nID0gJyc7XG4gIEBJbnB1dCgpIHZmX2hlcm9faGVhZGluZ19ocmVmID0gJyc7XG4gIEBJbnB1dCgpIHZmX2hlcm9fc3ViaGVhZGluZyA9ICcnO1xuICBASW5wdXQoKSB2Zl9oZXJvX3RleHQgOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSB2Zl9oZXJvX2xpbmtfdGV4dCA9ICcnO1xuICBASW5wdXQoKSB2Zl9oZXJvX2xpbmtfaHJlZiA9ICcnO1xuICBASW5wdXQoKSBzcGFjaW5nOiB1bmRlZmluZWQgfCAyMDAgfCA0MDAgfCA1MDAgfCA2MDAgfCA4MDAgfCAxMjAwIHwgMTYwMDtcbiAgQElucHV0KCkgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgbW9kaWZpZXJfY2xhc3MgPSAnJztcbiAgQElucHV0KCkgdmZfaGVyb19oZWFkaW5nX2FkZGl0aW9uYWwgPSAnJztcblxuICBjbGFzcyA9ICcnO1xuICBzdHlsZSA9ICcnO1xuICB2Zl9oZXJvX2xpbmtfaW5uZXJodG1sID0gJyc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gIH1cblxuICAvKiBTZXQgdmFsdWVzIGFzIHBlciBpbnB1dCBhbmQgdXBkYXRlZCBjaGFuZ2VzICovXG4gIHNldFZhbHVlcygpOiB2b2lkIHtcbiAgICAvKiBJbml0aWFsaXplL1Jlc2V0IHRoZSB2YWx1ZXMgZm9yIGNsYXNzIGFuZCBzdHlsZSAqL1xuICAgIHRoaXMuY2xhc3MgPSAndmYtaGVybyAnO1xuICAgIHRoaXMuc3R5bGUgPSAnJztcblxuICAgIGlmICh0aGlzLnZmX2hlcm9faGVhZGluZ19hZGRpdGlvbmFsICE9PSAnJykge1xuICAgICAgdGhpcy52Zl9oZXJvX2tpY2tlciA9IHRoaXMudmZfaGVyb19oZWFkaW5nX2FkZGl0aW9uYWw7XG4gICAgfVxuXG4gICAgLyogU2V0IHZhbHVlcyBhc3MgcGVyIHRoZSBpbnB1dCAqL1xuICAgIHRoaXMuY2xhc3MgKz0gdGhpcy5zcGFjaW5nICE9PSB1bmRlZmluZWQgPyAndmYtaGVyby0tJyArIHRoaXMuc3BhY2luZyArICAnICcgOiAnJztcbiAgICB0aGlzLmNsYXNzICs9ICd8IHZmLXUtZnVsbGJsZWVkJztcbiAgICB0aGlzLmNsYXNzICs9IHRoaXMubW9kaWZpZXJfY2xhc3MgIT09ICcnID8gJyAnICsgdGhpcy5tb2RpZmllcl9jbGFzcyA6ICcnO1xuICAgIHRoaXMuc3R5bGUgKz0gdGhpcy52Zl9oZXJvX2ltYWdlICE9PSAnJyA/ICctLXZmLWhlcm8tLWJnLWltYWdlOiAnICsgdGhpcy52Zl9oZXJvX2ltYWdlIDogJyc7XG4gICAgdGhpcy5zdHlsZSArPSB0aGlzLnZmX2hlcm9faW1hZ2Vfc2l6ZSAhPT0gJycgPyAnIC0tdmYtaGVyby0tYmctaW1hZ2Utc2l6ZTogJyArIHRoaXMudmZfaGVyb19pbWFnZV9zaXplIDogJyc7XG4gIH1cbn1cbiJdfQ==