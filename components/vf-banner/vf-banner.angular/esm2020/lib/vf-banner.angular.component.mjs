import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfBannerAngularComponent {
    constructor() {
        /*  Initialize values based on input values for basic banner */
        this.banner__type = 'basic';
        this.banner__message = '';
        this.banner__dismissible = false;
        /* Initialize values based on input values for inline banner */
        this.banner__inline_href = '';
        this.bannerclass = '';
    }
    ngOnInit() {
        this.setValues();
    }
    ngOnChanges() {
        this.setValues();
    }
    /* Set values as per input and updated changes */
    setValues() {
        this.bannerclass = 'vf-banner vf-banner--alert ';
        /*Based on banner type received set the banner class */
        switch (this.banner__variant) {
            case 'banner__info':
                this.bannerclass += 'vf-banner--info';
                break;
            case 'banner__warning':
                this.bannerclass += 'vf-banner--warning';
                break;
            case 'banner__danger':
                this.bannerclass += 'vf-banner--danger';
                break;
            case 'banner__success':
                this.bannerclass += 'vf-banner--success';
                break;
        }
    }
}
VfBannerAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBannerAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VfBannerAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: VfBannerAngularComponent, selector: "vf-banner", inputs: { banner__type: "banner__type", banner__variant: "banner__variant", banner__message: "banner__message", banner__dismissible: "banner__dismissible", banner__inline_href: "banner__inline_href" }, usesOnChanges: true, ngImport: i0, template: `
  <!-- Basic Banner HTML -->
  <div *ngIf="banner__type === 'basic'" [class]="bannerclass">
  <div class="vf-banner__content">
    <p class="vf-banner__text" [innerHTML]="banner__message"></p>
    <button *ngIf="banner__dismissible" role="button" aria-label="close notification banner" class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dismiss banner</title><path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"/></svg>
    </button>
  </div>
  </div>
  <!-- Inline Banner HTML -->
  <div *ngIf="banner__type === 'inline'" class="vf-banner vf-banner--phase">
    <div class="vf-banner__content">
      <p class="vf-banner__text">This is a new web page. <a [href]="banner__inline_href" class="vf-link">Complete our quick survey</a> to help us make it better.</p>
    </div>
  </div>

    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: VfBannerAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-banner',
                    template: `
  <!-- Basic Banner HTML -->
  <div *ngIf="banner__type === 'basic'" [class]="bannerclass">
  <div class="vf-banner__content">
    <p class="vf-banner__text" [innerHTML]="banner__message"></p>
    <button *ngIf="banner__dismissible" role="button" aria-label="close notification banner" class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dismiss banner</title><path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"/></svg>
    </button>
  </div>
  </div>
  <!-- Inline Banner HTML -->
  <div *ngIf="banner__type === 'inline'" class="vf-banner vf-banner--phase">
    <div class="vf-banner__content">
      <p class="vf-banner__text">This is a new web page. <a [href]="banner__inline_href" class="vf-link">Complete our quick survey</a> to help us make it better.</p>
    </div>
  </div>

    `
                }]
        }], propDecorators: { banner__type: [{
                type: Input
            }], banner__variant: [{
                type: Input
            }], banner__message: [{
                type: Input
            }], banner__dismissible: [{
                type: Input
            }], banner__inline_href: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtYmFubmVyLmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdmYtYmFubmVyLmFuZ3VsYXIvc3JjL2xpYi92Zi1iYW5uZXIuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQXVCekQsTUFBTSxPQUFPLHdCQUF3QjtJQXJCckM7UUFzQkUsK0RBQStEO1FBQ3RELGlCQUFZLEdBQW9DLE9BQU8sQ0FBQztRQUV4RCxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDckMsK0RBQStEO1FBQ3RELHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUVsQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztLQTZCbEI7SUEzQkMsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsaURBQWlEO0lBQ2pELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLDZCQUE2QixDQUFDO1FBQ2pELHVEQUF1RDtRQUN2RCxRQUFRLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDNUIsS0FBSyxjQUFjO2dCQUNmLElBQUksQ0FBQyxXQUFXLElBQUssaUJBQWlCLENBQUM7Z0JBQ3pDLE1BQU07WUFDUixLQUFLLGlCQUFpQjtnQkFDcEIsSUFBSSxDQUFDLFdBQVcsSUFBSyxvQkFBb0IsQ0FBQztnQkFDMUMsTUFBTTtZQUNSLEtBQUssZ0JBQWdCO2dCQUNuQixJQUFJLENBQUMsV0FBVyxJQUFLLG1CQUFtQixDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxpQkFBaUI7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLElBQUssb0JBQW9CLENBQUM7Z0JBQzFDLE1BQU07U0FDVDtJQUNILENBQUM7O3FIQXJDVSx3QkFBd0I7eUdBQXhCLHdCQUF3QixnUkFuQnpCOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUDsyRkFFUSx3QkFBd0I7a0JBckJwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUJQO2lCQUNKOzhCQUdVLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFFRyxtQkFBbUI7c0JBQTNCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmYtYmFubmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPCEtLSBCYXNpYyBCYW5uZXIgSFRNTCAtLT5cbiAgPGRpdiAqbmdJZj1cImJhbm5lcl9fdHlwZSA9PT0gJ2Jhc2ljJ1wiIFtjbGFzc109XCJiYW5uZXJjbGFzc1wiPlxuICA8ZGl2IGNsYXNzPVwidmYtYmFubmVyX19jb250ZW50XCI+XG4gICAgPHAgY2xhc3M9XCJ2Zi1iYW5uZXJfX3RleHRcIiBbaW5uZXJIVE1MXT1cImJhbm5lcl9fbWVzc2FnZVwiPjwvcD5cbiAgICA8YnV0dG9uICpuZ0lmPVwiYmFubmVyX19kaXNtaXNzaWJsZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiY2xvc2Ugbm90aWZpY2F0aW9uIGJhbm5lclwiIGNsYXNzPVwidmYtYnV0dG9uIHZmLWJ1dHRvbi0taWNvbiB2Zi1idXR0b24tLWRpc21pc3MgfCB2Zi1iYW5uZXJfX2J1dHRvblwiPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5kaXNtaXNzIGJhbm5lcjwvdGl0bGU+PHBhdGggZD1cIk0xNC4zLDEyLjE3OWEuMjUuMjUsMCwwLDEsMC0uMzU0bDkuMjYzLTkuMjYyQTEuNSwxLjUsMCwwLDAsMjEuNDM5LjQ0MkwxMi4xNzcsOS43YS4yNS4yNSwwLDAsMS0uMzU0LDBMMi41NjEuNDQyQTEuNSwxLjUsMCwwLDAsLjQzOSwyLjU2M0w5LjcsMTEuODI1YS4yNS4yNSwwLDAsMSwwLC4zNTRMLjQzOSwyMS40NDJhMS41LDEuNSwwLDAsMCwyLjEyMiwyLjEyMUwxMS44MjMsMTQuM2EuMjUuMjUsMCwwLDEsLjM1NCwwbDkuMjYyLDkuMjYzYTEuNSwxLjUsMCwwLDAsMi4xMjItMi4xMjFaXCIvPjwvc3ZnPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwhLS0gSW5saW5lIEJhbm5lciBIVE1MIC0tPlxuICA8ZGl2ICpuZ0lmPVwiYmFubmVyX190eXBlID09PSAnaW5saW5lJ1wiIGNsYXNzPVwidmYtYmFubmVyIHZmLWJhbm5lci0tcGhhc2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwidmYtYmFubmVyX19jb250ZW50XCI+XG4gICAgICA8cCBjbGFzcz1cInZmLWJhbm5lcl9fdGV4dFwiPlRoaXMgaXMgYSBuZXcgd2ViIHBhZ2UuIDxhIFtocmVmXT1cImJhbm5lcl9faW5saW5lX2hyZWZcIiBjbGFzcz1cInZmLWxpbmtcIj5Db21wbGV0ZSBvdXIgcXVpY2sgc3VydmV5PC9hPiB0byBoZWxwIHVzIG1ha2UgaXQgYmV0dGVyLjwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFZmQmFubmVyQW5ndWxhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgLyogIEluaXRpYWxpemUgdmFsdWVzIGJhc2VkIG9uIGlucHV0IHZhbHVlcyBmb3IgYmFzaWMgYmFubmVyICovXG4gIEBJbnB1dCgpIGJhbm5lcl9fdHlwZTogdW5kZWZpbmVkIHwgJ2Jhc2ljJyB8ICdpbmxpbmUnICA9ICdiYXNpYyc7XG4gIEBJbnB1dCgpIGJhbm5lcl9fdmFyaWFudDogdW5kZWZpbmVkIHwgJ2Jhbm5lcl9faW5mbycgfCAnYmFubmVyX193YXJuaW5nJyB8ICdiYW5uZXJfX2RhbmdlcicgfCAnYmFubmVyX19zdWNjZXNzJztcbiAgQElucHV0KCkgYmFubmVyX19tZXNzYWdlID0gJyc7XG4gIEBJbnB1dCgpIGJhbm5lcl9fZGlzbWlzc2libGUgPSBmYWxzZTtcbiAgLyogSW5pdGlhbGl6ZSB2YWx1ZXMgYmFzZWQgb24gaW5wdXQgdmFsdWVzIGZvciBpbmxpbmUgYmFubmVyICovXG4gIEBJbnB1dCgpIGJhbm5lcl9faW5saW5lX2hyZWYgPSAnJztcblxuICBiYW5uZXJjbGFzcyA9ICcnO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlcygpO1xuICB9XG5cbiAgLyogU2V0IHZhbHVlcyBhcyBwZXIgaW5wdXQgYW5kIHVwZGF0ZWQgY2hhbmdlcyAqL1xuICBzZXRWYWx1ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5iYW5uZXJjbGFzcyA9ICd2Zi1iYW5uZXIgdmYtYmFubmVyLS1hbGVydCAnO1xuICAgIC8qQmFzZWQgb24gYmFubmVyIHR5cGUgcmVjZWl2ZWQgc2V0IHRoZSBiYW5uZXIgY2xhc3MgKi9cbiAgICBzd2l0Y2ggKHRoaXMuYmFubmVyX192YXJpYW50KSB7XG4gICAgICBjYXNlICdiYW5uZXJfX2luZm8nOlxuICAgICAgICAgIHRoaXMuYmFubmVyY2xhc3MgICs9ICd2Zi1iYW5uZXItLWluZm8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jhbm5lcl9fd2FybmluZyc6XG4gICAgICAgIHRoaXMuYmFubmVyY2xhc3MgICs9ICd2Zi1iYW5uZXItLXdhcm5pbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jhbm5lcl9fZGFuZ2VyJzpcbiAgICAgICAgdGhpcy5iYW5uZXJjbGFzcyAgKz0gJ3ZmLWJhbm5lci0tZGFuZ2VyJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiYW5uZXJfX3N1Y2Nlc3MnOlxuICAgICAgICB0aGlzLmJhbm5lcmNsYXNzICArPSAndmYtYmFubmVyLS1zdWNjZXNzJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=