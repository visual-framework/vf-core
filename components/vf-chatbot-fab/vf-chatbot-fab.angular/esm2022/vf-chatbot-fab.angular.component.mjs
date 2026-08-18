import { Component, Input, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfChatbotFabAngularComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.notificationCount = 0;
        this.isInactive = false;
    }
    ngAfterViewInit() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFabAngularComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotFabAngularComponent, selector: "vf-chatbot-fab", inputs: { notificationCount: "notificationCount", isInactive: "isInactive" }, ngImport: i0, template: `
    <button
      #fabRef
      class="vf-chatbot-fab"
      [class.vf-chatbot-fab--inactive]="isInactive"
      aria-label="Open chat"
      data-vf-js-chatbot-fab
      type="button"
    >
      <svg
        class="vf-chatbot-fab__icon vf-chatbot-fab__icon--chat"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3256_34050)">
          <path
            d="M4.23995 24.0191L4.25995 17.5491H2.85995C1.28995 17.5491 0.00994589 16.2691 0.00994589 14.6991V3.75906C-5.41061e-05 2.18906 1.27995 0.909058 2.84995 0.909058H21.1399C22.7099 0.909058 23.9899 2.18906 23.9899 3.75906V14.6891C23.9899 16.2591 22.7099 17.5391 21.1399 17.5391H10.7399L4.22995 24.0091L4.23995 24.0191ZM2.84995 1.97906C1.86995 1.97906 1.06995 2.77906 1.06995 3.75906V14.6891C1.06995 15.6691 1.86995 16.4691 2.84995 16.4691H5.32995V21.4191L10.2999 16.4691H21.1499C22.1299 16.4691 22.9299 15.6691 22.9299 14.6891V3.75906C22.9299 2.77906 22.1299 1.97906 21.1499 1.97906H2.84995Z"
            fill="white"
          />
          <path
            d="M18.27 7.06906C18.76 7.55906 21.93 8.41906 21.93 8.41906C21.93 8.41906 18.75 9.28906 18.27 9.76906C17.79 10.2491 16.92 13.4291 16.92 13.4291C16.92 13.4291 16.04 10.2391 15.57 9.76906C15.1 9.29906 11.91 8.41906 11.91 8.41906C11.91 8.41906 15.02 7.61906 15.57 7.06906C16.12 6.51906 16.92 3.40906 16.92 3.40906C16.92 3.40906 17.78 6.57906 18.27 7.06906Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3256_34050">
            <rect
              width="24"
              height="23.11"
              fill="white"
              transform="translate(0 0.909058)"
            />
          </clipPath>
        </defs>
      </svg>

      <span
        *ngIf="notificationCount > 0"
        class="vf-chatbot-fab__badge"
      >
        {{ notificationCount }}
      </span>
    </button>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFabAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-fab',
                    template: `
    <button
      #fabRef
      class="vf-chatbot-fab"
      [class.vf-chatbot-fab--inactive]="isInactive"
      aria-label="Open chat"
      data-vf-js-chatbot-fab
      type="button"
    >
      <svg
        class="vf-chatbot-fab__icon vf-chatbot-fab__icon--chat"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3256_34050)">
          <path
            d="M4.23995 24.0191L4.25995 17.5491H2.85995C1.28995 17.5491 0.00994589 16.2691 0.00994589 14.6991V3.75906C-5.41061e-05 2.18906 1.27995 0.909058 2.84995 0.909058H21.1399C22.7099 0.909058 23.9899 2.18906 23.9899 3.75906V14.6891C23.9899 16.2591 22.7099 17.5391 21.1399 17.5391H10.7399L4.22995 24.0091L4.23995 24.0191ZM2.84995 1.97906C1.86995 1.97906 1.06995 2.77906 1.06995 3.75906V14.6891C1.06995 15.6691 1.86995 16.4691 2.84995 16.4691H5.32995V21.4191L10.2999 16.4691H21.1499C22.1299 16.4691 22.9299 15.6691 22.9299 14.6891V3.75906C22.9299 2.77906 22.1299 1.97906 21.1499 1.97906H2.84995Z"
            fill="white"
          />
          <path
            d="M18.27 7.06906C18.76 7.55906 21.93 8.41906 21.93 8.41906C21.93 8.41906 18.75 9.28906 18.27 9.76906C17.79 10.2491 16.92 13.4291 16.92 13.4291C16.92 13.4291 16.04 10.2391 15.57 9.76906C15.1 9.29906 11.91 8.41906 11.91 8.41906C11.91 8.41906 15.02 7.61906 15.57 7.06906C16.12 6.51906 16.92 3.40906 16.92 3.40906C16.92 3.40906 17.78 6.57906 18.27 7.06906Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3256_34050">
            <rect
              width="24"
              height="23.11"
              fill="white"
              transform="translate(0 0.909058)"
            />
          </clipPath>
        </defs>
      </svg>

      <span
        *ngIf="notificationCount > 0"
        class="vf-chatbot-fab__badge"
      >
        {{ notificationCount }}
      </span>
    </button>
  `,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { notificationCount: [{
                type: Input
            }], isInactive: [{
                type: Input
            }] } });
export * from './vf-chatbot-fab.angular.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1mYWIuYW5ndWxhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy92Zi1jaGF0Ym90LWZhYi5hbmd1bGFyL3NyYy9saWIvdmYtY2hhdGJvdC1mYWIuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7OztBQXFEdkIsTUFBTSxPQUFPLDRCQUE0QjtJQUl2QyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSGpDLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRWlCLENBQUM7SUFFOUMsZUFBZTtJQUNmLENBQUM7K0dBUFUsNEJBQTRCO21HQUE1Qiw0QkFBNEIsb0lBaEQ3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThDVDs7NEZBRVUsNEJBQTRCO2tCQWxEeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q1Q7aUJBQ0Y7K0VBRVUsaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7O0FBUVIsY0FBYyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmLWNoYXRib3QtZmFiJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICAjZmFiUmVmXG4gICAgICBjbGFzcz1cInZmLWNoYXRib3QtZmFiXCJcbiAgICAgIFtjbGFzcy52Zi1jaGF0Ym90LWZhYi0taW5hY3RpdmVdPVwiaXNJbmFjdGl2ZVwiXG4gICAgICBhcmlhLWxhYmVsPVwiT3BlbiBjaGF0XCJcbiAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC1mYWJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LWZhYl9faWNvbiB2Zi1jaGF0Ym90LWZhYl9faWNvbi0tY2hhdFwiXG4gICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICBoZWlnaHQ9XCIyNVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgPlxuICAgICAgICA8ZyBjbGlwLXBhdGg9XCJ1cmwoI2NsaXAwXzMyNTZfMzQwNTApXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNC4yMzk5NSAyNC4wMTkxTDQuMjU5OTUgMTcuNTQ5MUgyLjg1OTk1QzEuMjg5OTUgMTcuNTQ5MSAwLjAwOTk0NTg5IDE2LjI2OTEgMC4wMDk5NDU4OSAxNC42OTkxVjMuNzU5MDZDLTUuNDEwNjFlLTA1IDIuMTg5MDYgMS4yNzk5NSAwLjkwOTA1OCAyLjg0OTk1IDAuOTA5MDU4SDIxLjEzOTlDMjIuNzA5OSAwLjkwOTA1OCAyMy45ODk5IDIuMTg5MDYgMjMuOTg5OSAzLjc1OTA2VjE0LjY4OTFDMjMuOTg5OSAxNi4yNTkxIDIyLjcwOTkgMTcuNTM5MSAyMS4xMzk5IDE3LjUzOTFIMTAuNzM5OUw0LjIyOTk1IDI0LjAwOTFMNC4yMzk5NSAyNC4wMTkxWk0yLjg0OTk1IDEuOTc5MDZDMS44Njk5NSAxLjk3OTA2IDEuMDY5OTUgMi43NzkwNiAxLjA2OTk1IDMuNzU5MDZWMTQuNjg5MUMxLjA2OTk1IDE1LjY2OTEgMS44Njk5NSAxNi40NjkxIDIuODQ5OTUgMTYuNDY5MUg1LjMyOTk1VjIxLjQxOTFMMTAuMjk5OSAxNi40NjkxSDIxLjE0OTlDMjIuMTI5OSAxNi40NjkxIDIyLjkyOTkgMTUuNjY5MSAyMi45Mjk5IDE0LjY4OTFWMy43NTkwNkMyMi45Mjk5IDIuNzc5MDYgMjIuMTI5OSAxLjk3OTA2IDIxLjE0OTkgMS45NzkwNkgyLjg0OTk1WlwiXG4gICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMTguMjcgNy4wNjkwNkMxOC43NiA3LjU1OTA2IDIxLjkzIDguNDE5MDYgMjEuOTMgOC40MTkwNkMyMS45MyA4LjQxOTA2IDE4Ljc1IDkuMjg5MDYgMTguMjcgOS43NjkwNkMxNy43OSAxMC4yNDkxIDE2LjkyIDEzLjQyOTEgMTYuOTIgMTMuNDI5MUMxNi45MiAxMy40MjkxIDE2LjA0IDEwLjIzOTEgMTUuNTcgOS43NjkwNkMxNS4xIDkuMjk5MDYgMTEuOTEgOC40MTkwNiAxMS45MSA4LjQxOTA2QzExLjkxIDguNDE5MDYgMTUuMDIgNy42MTkwNiAxNS41NyA3LjA2OTA2QzE2LjEyIDYuNTE5MDYgMTYuOTIgMy40MDkwNiAxNi45MiAzLjQwOTA2QzE2LjkyIDMuNDA5MDYgMTcuNzggNi41NzkwNiAxOC4yNyA3LjA2OTA2WlwiXG4gICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGRlZnM+XG4gICAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBfMzI1Nl8zNDA1MFwiPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIzLjExXCJcbiAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMC45MDkwNTgpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgPC9kZWZzPlxuICAgICAgPC9zdmc+XG5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwibm90aWZpY2F0aW9uQ291bnQgPiAwXCJcbiAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LWZhYl9fYmFkZ2VcIlxuICAgICAgPlxuICAgICAgICB7eyBub3RpZmljYXRpb25Db3VudCB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBWZkNoYXRib3RGYWJBbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG5vdGlmaWNhdGlvbkNvdW50ID0gMDtcbiAgQElucHV0KCkgaXNJbmFjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gIH1cbn1cblxuZXhwb3J0ICogZnJvbSAnLi92Zi1jaGF0Ym90LWZhYi5hbmd1bGFyLm1vZHVsZSc7XG4iXX0=