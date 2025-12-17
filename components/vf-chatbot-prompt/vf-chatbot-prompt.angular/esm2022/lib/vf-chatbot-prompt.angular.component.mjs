import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfChatbotPromptAngularComponent {
    constructor() {
        this.type = '';
        this.isLoading = false;
        this.avatar = {};
        this.content = '';
        this.sources = '';
        this.prompts = '';
        this.allowFeedback = true;
    }
    shouldShowAvatarName(position) {
        return this.avatar?.name && this.type === position;
    }
    hasAvatarImage() {
        return !!this.avatar?.src;
    }
    messageClasses() {
        let classes = `vf-chatbot-message vf-chatbot-message--${this.type} vf-u-margin__top--400`;
        if (this.isLoading) {
            classes += ' vf-chatbot-message--loading';
        }
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotPromptAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotPromptAngularComponent, selector: "vf-chatbot-prompt", inputs: { type: "type", isLoading: "isLoading", avatar: "avatar", content: "content", sources: "sources", prompts: "prompts", allowFeedback: "allowFeedback" }, ngImport: i0, template: `
    <div [ngClass]="messageClasses()">
      
      <!-- Avatar Section -->
      <div class="vf-chatbot-message__avatar vf-u-margin__bottom--200">

        <!-- User Avatar Name -->
        <span 
          class="vf-chatbot-message__avatar-name" 
          *ngIf="shouldShowAvatarName('user')">
          {{ avatar?.name }}
        </span>

        <!-- Avatar Image -->
        <img 
          *ngIf="hasAvatarImage()" 
          [src]="avatar?.src" 
          [alt]="avatar?.alt" />

        <!-- Assistant Avatar Name -->
        <span 
          class="vf-chatbot-message__avatar-name" 
          *ngIf="shouldShowAvatarName('assistant')">
          {{ avatar?.name }}
        </span>
      </div>

      <!-- Message Content -->
      <div class="vf-chatbot-message__content vf-u-padding--200">

        <!-- Loading Dots (keep in DOM so external JS can toggle visibility) -->
        <div class="vf-chatbot-message__content-loading-dots" aria-label="Loading" role="status" *ngIf="isLoading">
        <span class="vf-chatbot-message__dot"></span>
        <span class="vf-chatbot-message__dot"></span>
        <span class="vf-chatbot-message__dot"></span>
      </div>

        <!-- HTML Content -->
        <div 
          class="vf-chatbot-message__content-prompt vf-u-padding__left--200 vf-u-padding__right--200"
          [innerHTML]="content">
        </div>
      </div>
      
    </div>
    
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotPromptAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-prompt',
                    template: `
    <div [ngClass]="messageClasses()">
      
      <!-- Avatar Section -->
      <div class="vf-chatbot-message__avatar vf-u-margin__bottom--200">

        <!-- User Avatar Name -->
        <span 
          class="vf-chatbot-message__avatar-name" 
          *ngIf="shouldShowAvatarName('user')">
          {{ avatar?.name }}
        </span>

        <!-- Avatar Image -->
        <img 
          *ngIf="hasAvatarImage()" 
          [src]="avatar?.src" 
          [alt]="avatar?.alt" />

        <!-- Assistant Avatar Name -->
        <span 
          class="vf-chatbot-message__avatar-name" 
          *ngIf="shouldShowAvatarName('assistant')">
          {{ avatar?.name }}
        </span>
      </div>

      <!-- Message Content -->
      <div class="vf-chatbot-message__content vf-u-padding--200">

        <!-- Loading Dots (keep in DOM so external JS can toggle visibility) -->
        <div class="vf-chatbot-message__content-loading-dots" aria-label="Loading" role="status" *ngIf="isLoading">
        <span class="vf-chatbot-message__dot"></span>
        <span class="vf-chatbot-message__dot"></span>
        <span class="vf-chatbot-message__dot"></span>
      </div>

        <!-- HTML Content -->
        <div 
          class="vf-chatbot-message__content-prompt vf-u-padding__left--200 vf-u-padding__right--200"
          [innerHTML]="content">
        </div>
      </div>
      
    </div>
    
  `
                }]
        }], propDecorators: { type: [{
                type: Input
            }], isLoading: [{
                type: Input
            }], avatar: [{
                type: Input
            }], content: [{
                type: Input
            }], sources: [{
                type: Input
            }], prompts: [{
                type: Input
            }], allowFeedback: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1wcm9tcHQuYW5ndWxhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92Zi1jaGF0Ym90LXByb21wdC5hbmd1bGFyL3NyYy9saWIvdmYtY2hhdGJvdC1wcm9tcHQuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQXFEakQsTUFBTSxPQUFPLCtCQUErQjtJQWxENUM7UUFvRFcsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsa0JBQWEsR0FBWSxJQUFJLENBQUM7S0FtQnhDO0lBaEJDLG9CQUFvQixDQUFDLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7SUFDckQsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBRUQsY0FBYztRQUVaLElBQUksT0FBTyxHQUFHLDBDQUEwQyxJQUFJLENBQUMsSUFBSSx3QkFBd0IsQ0FBQztRQUMxRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQixPQUFPLElBQUksOEJBQThCLENBQUM7UUFDNUMsQ0FBQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7K0dBMUJVLCtCQUErQjttR0FBL0IsK0JBQStCLHlOQWhEaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q1Q7OzRGQUVVLCtCQUErQjtrQkFsRDNDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOENUO2lCQUNGOzhCQUdVLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2Zi1jaGF0Ym90LXByb21wdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdDbGFzc109XCJtZXNzYWdlQ2xhc3NlcygpXCI+XG4gICAgICBcbiAgICAgIDwhLS0gQXZhdGFyIFNlY3Rpb24gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1tZXNzYWdlX19hdmF0YXIgdmYtdS1tYXJnaW5fX2JvdHRvbS0tMjAwXCI+XG5cbiAgICAgICAgPCEtLSBVc2VyIEF2YXRhciBOYW1lIC0tPlxuICAgICAgICA8c3BhbiBcbiAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtbWVzc2FnZV9fYXZhdGFyLW5hbWVcIiBcbiAgICAgICAgICAqbmdJZj1cInNob3VsZFNob3dBdmF0YXJOYW1lKCd1c2VyJylcIj5cbiAgICAgICAgICB7eyBhdmF0YXI/Lm5hbWUgfX1cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDwhLS0gQXZhdGFyIEltYWdlIC0tPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgICpuZ0lmPVwiaGFzQXZhdGFySW1hZ2UoKVwiIFxuICAgICAgICAgIFtzcmNdPVwiYXZhdGFyPy5zcmNcIiBcbiAgICAgICAgICBbYWx0XT1cImF2YXRhcj8uYWx0XCIgLz5cblxuICAgICAgICA8IS0tIEFzc2lzdGFudCBBdmF0YXIgTmFtZSAtLT5cbiAgICAgICAgPHNwYW4gXG4gICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LW1lc3NhZ2VfX2F2YXRhci1uYW1lXCIgXG4gICAgICAgICAgKm5nSWY9XCJzaG91bGRTaG93QXZhdGFyTmFtZSgnYXNzaXN0YW50JylcIj5cbiAgICAgICAgICB7eyBhdmF0YXI/Lm5hbWUgfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gTWVzc2FnZSBDb250ZW50IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtbWVzc2FnZV9fY29udGVudCB2Zi11LXBhZGRpbmctLTIwMFwiPlxuXG4gICAgICAgIDwhLS0gTG9hZGluZyBEb3RzIChrZWVwIGluIERPTSBzbyBleHRlcm5hbCBKUyBjYW4gdG9nZ2xlIHZpc2liaWxpdHkpIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1tZXNzYWdlX19jb250ZW50LWxvYWRpbmctZG90c1wiIGFyaWEtbGFiZWw9XCJMb2FkaW5nXCIgcm9sZT1cInN0YXR1c1wiICpuZ0lmPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmYtY2hhdGJvdC1tZXNzYWdlX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmYtY2hhdGJvdC1tZXNzYWdlX19kb3RcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmYtY2hhdGJvdC1tZXNzYWdlX19kb3RcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIEhUTUwgQ29udGVudCAtLT5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtbWVzc2FnZV9fY29udGVudC1wcm9tcHQgdmYtdS1wYWRkaW5nX19sZWZ0LS0yMDAgdmYtdS1wYWRkaW5nX19yaWdodC0tMjAwXCJcbiAgICAgICAgICBbaW5uZXJIVE1MXT1cImNvbnRlbnRcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFZmQ2hhdGJvdFByb21wdEFuZ3VsYXJDb21wb25lbnQge1xuICBcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhdmF0YXI6IGFueSA9IHt9O1xuICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc291cmNlczogYW55ID0gJyc7XG4gIEBJbnB1dCgpIHByb21wdHM6IGFueSA9ICcnO1xuICBASW5wdXQoKSBhbGxvd0ZlZWRiYWNrOiBib29sZWFuID0gdHJ1ZTtcblxuXG4gIHNob3VsZFNob3dBdmF0YXJOYW1lKHBvc2l0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hdmF0YXI/Lm5hbWUgJiYgdGhpcy50eXBlID09PSBwb3NpdGlvbjtcbiAgfVxuXG4gIGhhc0F2YXRhckltYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuYXZhdGFyPy5zcmM7XG4gIH1cblxuICBtZXNzYWdlQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIFxuICAgIGxldCBjbGFzc2VzID0gYHZmLWNoYXRib3QtbWVzc2FnZSB2Zi1jaGF0Ym90LW1lc3NhZ2UtLSR7dGhpcy50eXBlfSB2Zi11LW1hcmdpbl9fdG9wLS00MDBgO1xuICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xuICAgICAgY2xhc3NlcyArPSAnIHZmLWNoYXRib3QtbWVzc2FnZS0tbG9hZGluZyc7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59XG4iXX0=