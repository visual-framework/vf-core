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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1mYWIuYW5ndWxhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92Zi1jaGF0Ym90LWZhYi5hbmd1bGFyL3NyYy9saWIvdmYtY2hhdGJvdC1mYWIuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7OztBQXFEdkIsTUFBTSxPQUFPLDRCQUE0QjtJQUl2QyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSGpDLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRWlCLENBQUM7SUFFOUMsZUFBZTtJQUNmLENBQUM7K0dBUFUsNEJBQTRCO21HQUE1Qiw0QkFBNEIsb0lBaEQ3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThDVDs7NEZBRVUsNEJBQTRCO2tCQWxEeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q1Q7aUJBQ0Y7K0VBRVUsaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2Zi1jaGF0Ym90LWZhYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvblxuICAgICAgI2ZhYlJlZlxuICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LWZhYlwiXG4gICAgICBbY2xhc3MudmYtY2hhdGJvdC1mYWItLWluYWN0aXZlXT1cImlzSW5hY3RpdmVcIlxuICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gY2hhdFwiXG4gICAgICBkYXRhLXZmLWpzLWNoYXRib3QtZmFiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICA+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1mYWJfX2ljb24gdmYtY2hhdGJvdC1mYWJfX2ljb24tLWNoYXRcIlxuICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI1XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgID5cbiAgICAgICAgPGcgY2xpcC1wYXRoPVwidXJsKCNjbGlwMF8zMjU2XzM0MDUwKVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTQuMjM5OTUgMjQuMDE5MUw0LjI1OTk1IDE3LjU0OTFIMi44NTk5NUMxLjI4OTk1IDE3LjU0OTEgMC4wMDk5NDU4OSAxNi4yNjkxIDAuMDA5OTQ1ODkgMTQuNjk5MVYzLjc1OTA2Qy01LjQxMDYxZS0wNSAyLjE4OTA2IDEuMjc5OTUgMC45MDkwNTggMi44NDk5NSAwLjkwOTA1OEgyMS4xMzk5QzIyLjcwOTkgMC45MDkwNTggMjMuOTg5OSAyLjE4OTA2IDIzLjk4OTkgMy43NTkwNlYxNC42ODkxQzIzLjk4OTkgMTYuMjU5MSAyMi43MDk5IDE3LjUzOTEgMjEuMTM5OSAxNy41MzkxSDEwLjczOTlMNC4yMjk5NSAyNC4wMDkxTDQuMjM5OTUgMjQuMDE5MVpNMi44NDk5NSAxLjk3OTA2QzEuODY5OTUgMS45NzkwNiAxLjA2OTk1IDIuNzc5MDYgMS4wNjk5NSAzLjc1OTA2VjE0LjY4OTFDMS4wNjk5NSAxNS42NjkxIDEuODY5OTUgMTYuNDY5MSAyLjg0OTk1IDE2LjQ2OTFINS4zMjk5NVYyMS40MTkxTDEwLjI5OTkgMTYuNDY5MUgyMS4xNDk5QzIyLjEyOTkgMTYuNDY5MSAyMi45Mjk5IDE1LjY2OTEgMjIuOTI5OSAxNC42ODkxVjMuNzU5MDZDMjIuOTI5OSAyLjc3OTA2IDIyLjEyOTkgMS45NzkwNiAyMS4xNDk5IDEuOTc5MDZIMi44NDk5NVpcIlxuICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE4LjI3IDcuMDY5MDZDMTguNzYgNy41NTkwNiAyMS45MyA4LjQxOTA2IDIxLjkzIDguNDE5MDZDMjEuOTMgOC40MTkwNiAxOC43NSA5LjI4OTA2IDE4LjI3IDkuNzY5MDZDMTcuNzkgMTAuMjQ5MSAxNi45MiAxMy40MjkxIDE2LjkyIDEzLjQyOTFDMTYuOTIgMTMuNDI5MSAxNi4wNCAxMC4yMzkxIDE1LjU3IDkuNzY5MDZDMTUuMSA5LjI5OTA2IDExLjkxIDguNDE5MDYgMTEuOTEgOC40MTkwNkMxMS45MSA4LjQxOTA2IDE1LjAyIDcuNjE5MDYgMTUuNTcgNy4wNjkwNkMxNi4xMiA2LjUxOTA2IDE2LjkyIDMuNDA5MDYgMTYuOTIgMy40MDkwNkMxNi45MiAzLjQwOTA2IDE3Ljc4IDYuNTc5MDYgMTguMjcgNy4wNjkwNlpcIlxuICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAwXzMyNTZfMzQwNTBcIj5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMy4xMVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDAuOTA5MDU4KVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgIDwvZGVmcz5cbiAgICAgIDwvc3ZnPlxuXG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cIm5vdGlmaWNhdGlvbkNvdW50ID4gMFwiXG4gICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1mYWJfX2JhZGdlXCJcbiAgICAgID5cbiAgICAgICAge3sgbm90aWZpY2F0aW9uQ291bnQgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVmZDaGF0Ym90RmFiQW5ndWxhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBub3RpZmljYXRpb25Db3VudCA9IDA7XG4gIEBJbnB1dCgpIGlzSW5hY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICB9XG59XG4iXX0=