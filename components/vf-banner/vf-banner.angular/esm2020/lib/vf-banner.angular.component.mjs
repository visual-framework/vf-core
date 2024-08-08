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
        /* Initialize values based on input values for Fixed banner */
        this.banner__text = '';
        this.data_service_id = 'MyService';
        this.data_protection_version = '0.1';
        this.bannerclass = '';
    }
    ngOnInit() {
        //Initialize something
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
    ngAfterViewInit() {
        /* For banner type 'fixed' and 'top' we need to include vf-banner.js which has scripts to render and add functionality to these banner types */
        if (this.banner__type === 'fixed' || this.banner__type === 'top') {
            vfBanner();
        }
    }
}
VfBannerAngularComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfBannerAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VfBannerAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: VfBannerAngularComponent, selector: "vf-banner", inputs: { banner__type: "banner__type", banner__variant: "banner__variant", banner__message: "banner__message", banner__dismissible: "banner__dismissible", banner__inline_href: "banner__inline_href", banner__text: "banner__text", data_service_id: "data_service_id", data_protection_version: "data_protection_version" }, usesOnChanges: true, ngImport: i0, template: `
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
  <!-- Fixed Banner HTML -->
  <div *ngIf="banner__type === 'fixed'" class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
  data-vf-js-banner
  data-vf-js-banner-state="dismissible"
  [attr.data-vf-js-banner-button-text]="banner__text"
  [attr.data-vf-js-banner-cookie-name]="data_service_id"
  [attr.data-vf-js-banner-cookie-version]="data_protection_version"
  data-vf-js-banner-extra-button="<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>"
  data-vf-js-banner-auto-accept="false">
    <div class="vf-banner__content | vf-grid" data-vf-js-banner-text>
      <p class="vf-banner__text vf-banner__text--lg">
        This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-banner__link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-banner__link" href="JavaScript:Void(0);">Terms Of Use</a>.
      </p>
    </div>
  </div>
  <!-- Top Banner HTML -->
  <div *ngIf="banner__type === 'top'" class="vf-banner vf-banner--fixed vf-banner--top vf-banner--phase"
  data-vf-js-banner
  data-vf-js-banner-state="dismissible"
  data-vf-js-banner-button-text="Close notice"
  data-vf-js-banner-button-theme="primary">
    <div class="vf-banner__content" data-vf-js-banner-text>
      <span class="vf-badge vf-badge--primary">BETA</span>
      <p class="vf-banner__text">This is the new EMBL.org <a [href]="banner__inline_href" class="vf-banner__link">Complete our quick survey</a> to help us make it better.</p>
    </div>
  </div>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfBannerAngularComponent, decorators: [{
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
  <!-- Fixed Banner HTML -->
  <div *ngIf="banner__type === 'fixed'" class="vf-banner vf-banner--fixed vf-banner--bottom vf-banner--notice"
  data-vf-js-banner
  data-vf-js-banner-state="dismissible"
  [attr.data-vf-js-banner-button-text]="banner__text"
  [attr.data-vf-js-banner-cookie-name]="data_service_id"
  [attr.data-vf-js-banner-cookie-version]="data_protection_version"
  data-vf-js-banner-extra-button="<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>"
  data-vf-js-banner-auto-accept="false">
    <div class="vf-banner__content | vf-grid" data-vf-js-banner-text>
      <p class="vf-banner__text vf-banner__text--lg">
        This website uses cookies, and the limiting processing of your personal data to function. By using the site you are agreeing to this as outlined in our <a class="vf-banner__link" href="JavaScript:Void(0);">Privacy Notice</a> and <a class="vf-banner__link" href="JavaScript:Void(0);">Terms Of Use</a>.
      </p>
    </div>
  </div>
  <!-- Top Banner HTML -->
  <div *ngIf="banner__type === 'top'" class="vf-banner vf-banner--fixed vf-banner--top vf-banner--phase"
  data-vf-js-banner
  data-vf-js-banner-state="dismissible"
  data-vf-js-banner-button-text="Close notice"
  data-vf-js-banner-button-theme="primary">
    <div class="vf-banner__content" data-vf-js-banner-text>
      <span class="vf-badge vf-badge--primary">BETA</span>
      <p class="vf-banner__text">This is the new EMBL.org <a [href]="banner__inline_href" class="vf-banner__link">Complete our quick survey</a> to help us make it better.</p>
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
            }], banner__text: [{
                type: Input
            }], data_service_id: [{
                type: Input
            }], data_protection_version: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtYmFubmVyLmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdmYtYmFubmVyLmFuZ3VsYXIvc3JjL2xpYi92Zi1iYW5uZXIuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDOzs7QUFpRHhFLE1BQU0sT0FBTyx3QkFBd0I7SUE5Q3JDO1FBK0NFLCtEQUErRDtRQUN0RCxpQkFBWSxHQUFxRCxPQUFPLENBQUM7UUFFekUsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLCtEQUErRDtRQUN0RCx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDbEMsOERBQThEO1FBQ3JELGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsV0FBVyxDQUFDO1FBQzlCLDRCQUF1QixHQUFHLEtBQUssQ0FBQztRQUV6QyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztLQW9DbEI7SUFsQ0MsUUFBUTtRQUNOLHNCQUFzQjtJQUN4QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsaURBQWlEO0lBQ2pELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLDZCQUE2QixDQUFDO1FBQ2pELHVEQUF1RDtRQUN2RCxRQUFRLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDNUIsS0FBSyxjQUFjO2dCQUNmLElBQUksQ0FBQyxXQUFXLElBQUssaUJBQWlCLENBQUM7Z0JBQ3pDLE1BQU07WUFDUixLQUFLLGlCQUFpQjtnQkFDcEIsSUFBSSxDQUFDLFdBQVcsSUFBSyxvQkFBb0IsQ0FBQztnQkFDMUMsTUFBTTtZQUNSLEtBQUssZ0JBQWdCO2dCQUNuQixJQUFJLENBQUMsV0FBVyxJQUFLLG1CQUFtQixDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxpQkFBaUI7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLElBQUssb0JBQW9CLENBQUM7Z0JBQzFDLE1BQU07U0FDVDtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsK0lBQStJO1FBQy9JLElBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxLQUFLLEVBQUU7WUFDL0QsUUFBUSxFQUFFLENBQUM7U0FDWjtJQUNILENBQUM7O3NIQWhEVSx3QkFBd0I7MEdBQXhCLHdCQUF3QixzWUE1Q3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwQ1A7NEZBRVEsd0JBQXdCO2tCQTlDcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwQ1A7aUJBQ0o7OEJBR1UsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUVHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFFRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csdUJBQXVCO3NCQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGZ1bmN0aW9uIHZmQmFubmVyKCk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmYtYmFubmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPCEtLSBCYXNpYyBCYW5uZXIgSFRNTCAtLT5cbiAgPGRpdiAqbmdJZj1cImJhbm5lcl9fdHlwZSA9PT0gJ2Jhc2ljJ1wiIFtjbGFzc109XCJiYW5uZXJjbGFzc1wiPlxuICA8ZGl2IGNsYXNzPVwidmYtYmFubmVyX19jb250ZW50XCI+XG4gICAgPHAgY2xhc3M9XCJ2Zi1iYW5uZXJfX3RleHRcIiBbaW5uZXJIVE1MXT1cImJhbm5lcl9fbWVzc2FnZVwiPjwvcD5cbiAgICA8YnV0dG9uICpuZ0lmPVwiYmFubmVyX19kaXNtaXNzaWJsZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiY2xvc2Ugbm90aWZpY2F0aW9uIGJhbm5lclwiIGNsYXNzPVwidmYtYnV0dG9uIHZmLWJ1dHRvbi0taWNvbiB2Zi1idXR0b24tLWRpc21pc3MgfCB2Zi1iYW5uZXJfX2J1dHRvblwiPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5kaXNtaXNzIGJhbm5lcjwvdGl0bGU+PHBhdGggZD1cIk0xNC4zLDEyLjE3OWEuMjUuMjUsMCwwLDEsMC0uMzU0bDkuMjYzLTkuMjYyQTEuNSwxLjUsMCwwLDAsMjEuNDM5LjQ0MkwxMi4xNzcsOS43YS4yNS4yNSwwLDAsMS0uMzU0LDBMMi41NjEuNDQyQTEuNSwxLjUsMCwwLDAsLjQzOSwyLjU2M0w5LjcsMTEuODI1YS4yNS4yNSwwLDAsMSwwLC4zNTRMLjQzOSwyMS40NDJhMS41LDEuNSwwLDAsMCwyLjEyMiwyLjEyMUwxMS44MjMsMTQuM2EuMjUuMjUsMCwwLDEsLjM1NCwwbDkuMjYyLDkuMjYzYTEuNSwxLjUsMCwwLDAsMi4xMjItMi4xMjFaXCIvPjwvc3ZnPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwhLS0gSW5saW5lIEJhbm5lciBIVE1MIC0tPlxuICA8ZGl2ICpuZ0lmPVwiYmFubmVyX190eXBlID09PSAnaW5saW5lJ1wiIGNsYXNzPVwidmYtYmFubmVyIHZmLWJhbm5lci0tcGhhc2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwidmYtYmFubmVyX19jb250ZW50XCI+XG4gICAgICA8cCBjbGFzcz1cInZmLWJhbm5lcl9fdGV4dFwiPlRoaXMgaXMgYSBuZXcgd2ViIHBhZ2UuIDxhIFtocmVmXT1cImJhbm5lcl9faW5saW5lX2hyZWZcIiBjbGFzcz1cInZmLWxpbmtcIj5Db21wbGV0ZSBvdXIgcXVpY2sgc3VydmV5PC9hPiB0byBoZWxwIHVzIG1ha2UgaXQgYmV0dGVyLjwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwhLS0gRml4ZWQgQmFubmVyIEhUTUwgLS0+XG4gIDxkaXYgKm5nSWY9XCJiYW5uZXJfX3R5cGUgPT09ICdmaXhlZCdcIiBjbGFzcz1cInZmLWJhbm5lciB2Zi1iYW5uZXItLWZpeGVkIHZmLWJhbm5lci0tYm90dG9tIHZmLWJhbm5lci0tbm90aWNlXCJcbiAgZGF0YS12Zi1qcy1iYW5uZXJcbiAgZGF0YS12Zi1qcy1iYW5uZXItc3RhdGU9XCJkaXNtaXNzaWJsZVwiXG4gIFthdHRyLmRhdGEtdmYtanMtYmFubmVyLWJ1dHRvbi10ZXh0XT1cImJhbm5lcl9fdGV4dFwiXG4gIFthdHRyLmRhdGEtdmYtanMtYmFubmVyLWNvb2tpZS1uYW1lXT1cImRhdGFfc2VydmljZV9pZFwiXG4gIFthdHRyLmRhdGEtdmYtanMtYmFubmVyLWNvb2tpZS12ZXJzaW9uXT1cImRhdGFfcHJvdGVjdGlvbl92ZXJzaW9uXCJcbiAgZGF0YS12Zi1qcy1iYW5uZXItZXh0cmEtYnV0dG9uPVwiPGEgaHJlZj0nIyc+T3B0aW9uYWwgYnV0dG9uPC9hPjxhIHRhcmdldD0nX2JsYW5rJyBocmVmPScjJz5OZXcgdGFiIGJ1dHRvbjwvYT5cIlxuICBkYXRhLXZmLWpzLWJhbm5lci1hdXRvLWFjY2VwdD1cImZhbHNlXCI+XG4gICAgPGRpdiBjbGFzcz1cInZmLWJhbm5lcl9fY29udGVudCB8IHZmLWdyaWRcIiBkYXRhLXZmLWpzLWJhbm5lci10ZXh0PlxuICAgICAgPHAgY2xhc3M9XCJ2Zi1iYW5uZXJfX3RleHQgdmYtYmFubmVyX190ZXh0LS1sZ1wiPlxuICAgICAgICBUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzLCBhbmQgdGhlIGxpbWl0aW5nIHByb2Nlc3Npbmcgb2YgeW91ciBwZXJzb25hbCBkYXRhIHRvIGZ1bmN0aW9uLiBCeSB1c2luZyB0aGUgc2l0ZSB5b3UgYXJlIGFncmVlaW5nIHRvIHRoaXMgYXMgb3V0bGluZWQgaW4gb3VyIDxhIGNsYXNzPVwidmYtYmFubmVyX19saW5rXCIgaHJlZj1cIkphdmFTY3JpcHQ6Vm9pZCgwKTtcIj5Qcml2YWN5IE5vdGljZTwvYT4gYW5kIDxhIGNsYXNzPVwidmYtYmFubmVyX19saW5rXCIgaHJlZj1cIkphdmFTY3JpcHQ6Vm9pZCgwKTtcIj5UZXJtcyBPZiBVc2U8L2E+LlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPCEtLSBUb3AgQmFubmVyIEhUTUwgLS0+XG4gIDxkaXYgKm5nSWY9XCJiYW5uZXJfX3R5cGUgPT09ICd0b3AnXCIgY2xhc3M9XCJ2Zi1iYW5uZXIgdmYtYmFubmVyLS1maXhlZCB2Zi1iYW5uZXItLXRvcCB2Zi1iYW5uZXItLXBoYXNlXCJcbiAgZGF0YS12Zi1qcy1iYW5uZXJcbiAgZGF0YS12Zi1qcy1iYW5uZXItc3RhdGU9XCJkaXNtaXNzaWJsZVwiXG4gIGRhdGEtdmYtanMtYmFubmVyLWJ1dHRvbi10ZXh0PVwiQ2xvc2Ugbm90aWNlXCJcbiAgZGF0YS12Zi1qcy1iYW5uZXItYnV0dG9uLXRoZW1lPVwicHJpbWFyeVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ2Zi1iYW5uZXJfX2NvbnRlbnRcIiBkYXRhLXZmLWpzLWJhbm5lci10ZXh0PlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2Zi1iYWRnZSB2Zi1iYWRnZS0tcHJpbWFyeVwiPkJFVEE8L3NwYW4+XG4gICAgICA8cCBjbGFzcz1cInZmLWJhbm5lcl9fdGV4dFwiPlRoaXMgaXMgdGhlIG5ldyBFTUJMLm9yZyA8YSBbaHJlZl09XCJiYW5uZXJfX2lubGluZV9ocmVmXCIgY2xhc3M9XCJ2Zi1iYW5uZXJfX2xpbmtcIj5Db21wbGV0ZSBvdXIgcXVpY2sgc3VydmV5PC9hPiB0byBoZWxwIHVzIG1ha2UgaXQgYmV0dGVyLjwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBWZkJhbm5lckFuZ3VsYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAvKiAgSW5pdGlhbGl6ZSB2YWx1ZXMgYmFzZWQgb24gaW5wdXQgdmFsdWVzIGZvciBiYXNpYyBiYW5uZXIgKi9cbiAgQElucHV0KCkgYmFubmVyX190eXBlOiB1bmRlZmluZWQgfCAnYmFzaWMnIHwgJ2lubGluZScgfCAnZml4ZWQnIHwgJ3RvcCcgPSAnYmFzaWMnO1xuICBASW5wdXQoKSBiYW5uZXJfX3ZhcmlhbnQ6IHVuZGVmaW5lZCB8ICdiYW5uZXJfX2luZm8nIHwgJ2Jhbm5lcl9fd2FybmluZycgfCAnYmFubmVyX19kYW5nZXInIHwgJ2Jhbm5lcl9fc3VjY2Vzcyc7XG4gIEBJbnB1dCgpIGJhbm5lcl9fbWVzc2FnZSA9ICcnO1xuICBASW5wdXQoKSBiYW5uZXJfX2Rpc21pc3NpYmxlID0gZmFsc2U7XG4gIC8qIEluaXRpYWxpemUgdmFsdWVzIGJhc2VkIG9uIGlucHV0IHZhbHVlcyBmb3IgaW5saW5lIGJhbm5lciAqL1xuICBASW5wdXQoKSBiYW5uZXJfX2lubGluZV9ocmVmID0gJyc7XG4gIC8qIEluaXRpYWxpemUgdmFsdWVzIGJhc2VkIG9uIGlucHV0IHZhbHVlcyBmb3IgRml4ZWQgYmFubmVyICovXG4gIEBJbnB1dCgpIGJhbm5lcl9fdGV4dCA9ICcnO1xuICBASW5wdXQoKSBkYXRhX3NlcnZpY2VfaWQgPSAnTXlTZXJ2aWNlJztcbiAgQElucHV0KCkgZGF0YV9wcm90ZWN0aW9uX3ZlcnNpb24gPSAnMC4xJztcblxuICBiYW5uZXJjbGFzcyA9ICcnO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vSW5pdGlhbGl6ZSBzb21ldGhpbmdcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gIH1cblxuICAvKiBTZXQgdmFsdWVzIGFzIHBlciBpbnB1dCBhbmQgdXBkYXRlZCBjaGFuZ2VzICovXG4gIHNldFZhbHVlcygpOiB2b2lkIHtcbiAgICB0aGlzLmJhbm5lcmNsYXNzID0gJ3ZmLWJhbm5lciB2Zi1iYW5uZXItLWFsZXJ0ICc7XG4gICAgLypCYXNlZCBvbiBiYW5uZXIgdHlwZSByZWNlaXZlZCBzZXQgdGhlIGJhbm5lciBjbGFzcyAqL1xuICAgIHN3aXRjaCAodGhpcy5iYW5uZXJfX3ZhcmlhbnQpIHtcbiAgICAgIGNhc2UgJ2Jhbm5lcl9faW5mbyc6XG4gICAgICAgICAgdGhpcy5iYW5uZXJjbGFzcyAgKz0gJ3ZmLWJhbm5lci0taW5mbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYmFubmVyX193YXJuaW5nJzpcbiAgICAgICAgdGhpcy5iYW5uZXJjbGFzcyAgKz0gJ3ZmLWJhbm5lci0td2FybmluZyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYmFubmVyX19kYW5nZXInOlxuICAgICAgICB0aGlzLmJhbm5lcmNsYXNzICArPSAndmYtYmFubmVyLS1kYW5nZXInO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jhbm5lcl9fc3VjY2Vzcyc6XG4gICAgICAgIHRoaXMuYmFubmVyY2xhc3MgICs9ICd2Zi1iYW5uZXItLXN1Y2Nlc3MnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLyogRm9yIGJhbm5lciB0eXBlICdmaXhlZCcgYW5kICd0b3AnIHdlIG5lZWQgdG8gaW5jbHVkZSB2Zi1iYW5uZXIuanMgd2hpY2ggaGFzIHNjcmlwdHMgdG8gcmVuZGVyIGFuZCBhZGQgZnVuY3Rpb25hbGl0eSB0byB0aGVzZSBiYW5uZXIgdHlwZXMgKi9cbiAgICBpZih0aGlzLmJhbm5lcl9fdHlwZSA9PT0gJ2ZpeGVkJyB8fCB0aGlzLmJhbm5lcl9fdHlwZSA9PT0gJ3RvcCcpIHtcbiAgICAgIHZmQmFubmVyKCk7XG4gICAgfVxuICB9XG59XG4iXX0=