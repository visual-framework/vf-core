import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfBannerAngularComponent {
    constructor() {
        /*  Initialize values based on input values for basic banner */
        this.banner__type = 'basic';
        this.banner__variant = '';
        this.banner__message = '';
        this.banner__dismissible = false;
        /* Initialize values based on input values for inline banner */
        this.banner__inline_href = '';
        this.bannerclass = 'vf-banner vf-banner--alert ';
    }
    ngOnInit() {
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
VfBannerAngularComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.3", type: VfBannerAngularComponent, selector: "vf-banner", inputs: { banner__type: "banner__type", banner__variant: "banner__variant", banner__message: "banner__message", banner__dismissible: "banner__dismissible", banner__inline_href: "banner__inline_href" }, ngImport: i0, template: `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtYmFubmVyLmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdmYtYmFubmVyLmFuZ3VsYXIvc3JjL2xpYi92Zi1iYW5uZXIuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQXVCekQsTUFBTSxPQUFPLHdCQUF3QjtJQXJCckM7UUFzQkUsK0RBQStEO1FBQ3RELGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUNyQywrREFBK0Q7UUFDdEQsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBRWxDLGdCQUFXLEdBQUcsNkJBQTZCLENBQUM7S0FtQjdDO0lBakJDLFFBQVE7UUFDTix1REFBdUQ7UUFDdkQsUUFBUSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzVCLEtBQUssY0FBYztnQkFDZixJQUFJLENBQUMsV0FBVyxJQUFLLGlCQUFpQixDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxpQkFBaUI7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLElBQUssb0JBQW9CLENBQUM7Z0JBQzFDLE1BQU07WUFDUixLQUFLLGdCQUFnQjtnQkFDbkIsSUFBSSxDQUFDLFdBQVcsSUFBSyxtQkFBbUIsQ0FBQztnQkFDekMsTUFBTTtZQUNSLEtBQUssaUJBQWlCO2dCQUNwQixJQUFJLENBQUMsV0FBVyxJQUFLLG9CQUFvQixDQUFDO2dCQUMxQyxNQUFNO1NBQ1Q7SUFDSCxDQUFDOztxSEEzQlUsd0JBQXdCO3lHQUF4Qix3QkFBd0IsMlBBbkJ6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FpQlA7MkZBRVEsd0JBQXdCO2tCQXJCcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCUDtpQkFDSjs4QkFHVSxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBRUcsbUJBQW1CO3NCQUEzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmLWJhbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gIDwhLS0gQmFzaWMgQmFubmVyIEhUTUwgLS0+XG4gIDxkaXYgKm5nSWY9XCJiYW5uZXJfX3R5cGUgPT09ICdiYXNpYydcIiBbY2xhc3NdPVwiYmFubmVyY2xhc3NcIj5cbiAgPGRpdiBjbGFzcz1cInZmLWJhbm5lcl9fY29udGVudFwiPlxuICAgIDxwIGNsYXNzPVwidmYtYmFubmVyX190ZXh0XCIgW2lubmVySFRNTF09XCJiYW5uZXJfX21lc3NhZ2VcIj48L3A+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImJhbm5lcl9fZGlzbWlzc2libGVcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cImNsb3NlIG5vdGlmaWNhdGlvbiBiYW5uZXJcIiBjbGFzcz1cInZmLWJ1dHRvbiB2Zi1idXR0b24tLWljb24gdmYtYnV0dG9uLS1kaXNtaXNzIHwgdmYtYmFubmVyX19idXR0b25cIj5cbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZGlzbWlzcyBiYW5uZXI8L3RpdGxlPjxwYXRoIGQ9XCJNMTQuMywxMi4xNzlhLjI1LjI1LDAsMCwxLDAtLjM1NGw5LjI2My05LjI2MkExLjUsMS41LDAsMCwwLDIxLjQzOS40NDJMMTIuMTc3LDkuN2EuMjUuMjUsMCwwLDEtLjM1NCwwTDIuNTYxLjQ0MkExLjUsMS41LDAsMCwwLC40MzksMi41NjNMOS43LDExLjgyNWEuMjUuMjUsMCwwLDEsMCwuMzU0TC40MzksMjEuNDQyYTEuNSwxLjUsMCwwLDAsMi4xMjIsMi4xMjFMMTEuODIzLDE0LjNhLjI1LjI1LDAsMCwxLC4zNTQsMGw5LjI2Miw5LjI2M2ExLjUsMS41LDAsMCwwLDIuMTIyLTIuMTIxWlwiLz48L3N2Zz5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8IS0tIElubGluZSBCYW5uZXIgSFRNTCAtLT5cbiAgPGRpdiAqbmdJZj1cImJhbm5lcl9fdHlwZSA9PT0gJ2lubGluZSdcIiBjbGFzcz1cInZmLWJhbm5lciB2Zi1iYW5uZXItLXBoYXNlXCI+XG4gICAgPGRpdiBjbGFzcz1cInZmLWJhbm5lcl9fY29udGVudFwiPlxuICAgICAgPHAgY2xhc3M9XCJ2Zi1iYW5uZXJfX3RleHRcIj5UaGlzIGlzIGEgbmV3IHdlYiBwYWdlLiA8YSBbaHJlZl09XCJiYW5uZXJfX2lubGluZV9ocmVmXCIgY2xhc3M9XCJ2Zi1saW5rXCI+Q29tcGxldGUgb3VyIHF1aWNrIHN1cnZleTwvYT4gdG8gaGVscCB1cyBtYWtlIGl0IGJldHRlci48L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBWZkJhbm5lckFuZ3VsYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIC8qICBJbml0aWFsaXplIHZhbHVlcyBiYXNlZCBvbiBpbnB1dCB2YWx1ZXMgZm9yIGJhc2ljIGJhbm5lciAqL1xuICBASW5wdXQoKSBiYW5uZXJfX3R5cGUgPSAnYmFzaWMnO1xuICBASW5wdXQoKSBiYW5uZXJfX3ZhcmlhbnQgPSAnJztcbiAgQElucHV0KCkgYmFubmVyX19tZXNzYWdlID0gJyc7XG4gIEBJbnB1dCgpIGJhbm5lcl9fZGlzbWlzc2libGUgPSBmYWxzZTtcbiAgLyogSW5pdGlhbGl6ZSB2YWx1ZXMgYmFzZWQgb24gaW5wdXQgdmFsdWVzIGZvciBpbmxpbmUgYmFubmVyICovXG4gIEBJbnB1dCgpIGJhbm5lcl9faW5saW5lX2hyZWYgPSAnJztcblxuICBiYW5uZXJjbGFzcyA9ICd2Zi1iYW5uZXIgdmYtYmFubmVyLS1hbGVydCAnO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8qQmFzZWQgb24gYmFubmVyIHR5cGUgcmVjZWl2ZWQgc2V0IHRoZSBiYW5uZXIgY2xhc3MgKi9cbiAgICBzd2l0Y2ggKHRoaXMuYmFubmVyX192YXJpYW50KSB7XG4gICAgICBjYXNlICdiYW5uZXJfX2luZm8nOlxuICAgICAgICAgIHRoaXMuYmFubmVyY2xhc3MgICs9ICd2Zi1iYW5uZXItLWluZm8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jhbm5lcl9fd2FybmluZyc6XG4gICAgICAgIHRoaXMuYmFubmVyY2xhc3MgICs9ICd2Zi1iYW5uZXItLXdhcm5pbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jhbm5lcl9fZGFuZ2VyJzpcbiAgICAgICAgdGhpcy5iYW5uZXJjbGFzcyAgKz0gJ3ZmLWJhbm5lci0tZGFuZ2VyJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiYW5uZXJfX3N1Y2Nlc3MnOlxuICAgICAgICB0aGlzLmJhbm5lcmNsYXNzICArPSAndmYtYmFubmVyLS1zdWNjZXNzJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=