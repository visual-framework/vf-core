import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfChatbotWelcomeAngularComponent {
    constructor() {
        this.qaData = [];
        this.welcome_logo = false;
        this.welcome_logo_url = '';
        this.welcome_logo_alt = 'AI Assistant';
        this.welcome_title = '';
        this.welcome_message = '';
        this.welcome_suggestions_title = '';
        this.enable_welcome_suggestions = false;
        this.welcome_max_suggestions = 4;
        this.enable_qa_data_loading = true;
        this.enable_predefined_qa = true;
        this.enable_fallback_responses = true;
        this.qa_data_url = '';
    }
    ngAfterViewInit() {
        // Initialize chatbot welcome
        // Render the action prompt template
        if (this.templateRef?.nativeElement) {
            const el = this.templateRef.nativeElement;
            el.innerHTML = `
        <div class="vf-chatbot-action-prompt">
          <a href="#" class="vf-chatbot-action-prompt__link"></a>
        </div>
      `;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotWelcomeAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotWelcomeAngularComponent, selector: "vf-chatbot-welcome", inputs: { qaData: "qaData", welcome_logo: "welcome_logo", welcome_logo_url: "welcome_logo_url", welcome_logo_alt: "welcome_logo_alt", welcome_title: "welcome_title", welcome_message: "welcome_message", welcome_suggestions_title: "welcome_suggestions_title", enable_welcome_suggestions: "enable_welcome_suggestions", welcome_max_suggestions: "welcome_max_suggestions", enable_qa_data_loading: "enable_qa_data_loading", enable_predefined_qa: "enable_predefined_qa", enable_fallback_responses: "enable_fallback_responses", qa_data_url: "qa_data_url" }, viewQueries: [{ propertyName: "welcomeRef", first: true, predicate: ["welcomeRef"], descendants: true, static: true }, { propertyName: "templateRef", first: true, predicate: ["templateRef"], descendants: true, static: true }], ngImport: i0, template: `
    <div
      #welcomeRef
      class="vf-chatbot-welcome"
      data-vf-js-chatbot-welcome
      [attr.data-max-questions]="welcome_max_suggestions"
      [attr.data-enable-qa-data-loading]="enable_qa_data_loading"
      [attr.data-enable-predefined-qa]="enable_predefined_qa"
      [attr.data-enable-fallback-responses]="enable_fallback_responses"
      [attr.data-qa-data-url]="qa_data_url"
    >
      <div *ngIf="welcome_title || welcome_logo || welcome_message" class="vf-chatbot-welcome__content">
        <div *ngIf="welcome_logo" class="vf-chatbot-welcome__logo">
          <img
            *ngIf="welcome_logo_url"
            class="vf-chatbot-welcome__logo-image"
            [src]="welcome_logo_url"
            [alt]="welcome_logo_alt || 'AI Assistant'"
          />
        </div>

        <h1 *ngIf="welcome_title" class="vf-chatbot-welcome__title">
          {{ welcome_title }}
        </h1>

        <div *ngIf="welcome_message" class="vf-chatbot-welcome__message">
          {{ welcome_message }}
        </div>
      </div>

      <div
        *ngIf="enable_welcome_suggestions"
        class="vf-chatbot-welcome__suggestions"
      >
        <h3
          *ngIf="welcome_suggestions_title"
          class="vf-chatbot-welcome__suggestions-title"
        >
          {{ welcome_suggestions_title }}
        </h3>

        <div
          class="vf-chatbot-welcome__suggestions-grid"
          data-vf-js-chatbot-welcome-suggestions-grid
        ></div>
      </div>

      <template #templateRef id="welcome-suggestion-template"></template>
    </div>
  `, isInline: true, styles: [".vf-chatbot-welcome{display:block}.vf-chatbot-welcome__logo{text-align:center;margin-bottom:1rem}.vf-chatbot-welcome__logo-image{max-width:64px;height:auto}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotWelcomeAngularComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vf-chatbot-welcome', template: `
    <div
      #welcomeRef
      class="vf-chatbot-welcome"
      data-vf-js-chatbot-welcome
      [attr.data-max-questions]="welcome_max_suggestions"
      [attr.data-enable-qa-data-loading]="enable_qa_data_loading"
      [attr.data-enable-predefined-qa]="enable_predefined_qa"
      [attr.data-enable-fallback-responses]="enable_fallback_responses"
      [attr.data-qa-data-url]="qa_data_url"
    >
      <div *ngIf="welcome_title || welcome_logo || welcome_message" class="vf-chatbot-welcome__content">
        <div *ngIf="welcome_logo" class="vf-chatbot-welcome__logo">
          <img
            *ngIf="welcome_logo_url"
            class="vf-chatbot-welcome__logo-image"
            [src]="welcome_logo_url"
            [alt]="welcome_logo_alt || 'AI Assistant'"
          />
        </div>

        <h1 *ngIf="welcome_title" class="vf-chatbot-welcome__title">
          {{ welcome_title }}
        </h1>

        <div *ngIf="welcome_message" class="vf-chatbot-welcome__message">
          {{ welcome_message }}
        </div>
      </div>

      <div
        *ngIf="enable_welcome_suggestions"
        class="vf-chatbot-welcome__suggestions"
      >
        <h3
          *ngIf="welcome_suggestions_title"
          class="vf-chatbot-welcome__suggestions-title"
        >
          {{ welcome_suggestions_title }}
        </h3>

        <div
          class="vf-chatbot-welcome__suggestions-grid"
          data-vf-js-chatbot-welcome-suggestions-grid
        ></div>
      </div>

      <template #templateRef id="welcome-suggestion-template"></template>
    </div>
  `, styles: [".vf-chatbot-welcome{display:block}.vf-chatbot-welcome__logo{text-align:center;margin-bottom:1rem}.vf-chatbot-welcome__logo-image{max-width:64px;height:auto}\n"] }]
        }], propDecorators: { qaData: [{
                type: Input
            }], welcome_logo: [{
                type: Input
            }], welcome_logo_url: [{
                type: Input
            }], welcome_logo_alt: [{
                type: Input
            }], welcome_title: [{
                type: Input
            }], welcome_message: [{
                type: Input
            }], welcome_suggestions_title: [{
                type: Input
            }], enable_welcome_suggestions: [{
                type: Input
            }], welcome_max_suggestions: [{
                type: Input
            }], enable_qa_data_loading: [{
                type: Input
            }], enable_predefined_qa: [{
                type: Input
            }], enable_fallback_responses: [{
                type: Input
            }], qa_data_url: [{
                type: Input
            }], welcomeRef: [{
                type: ViewChild,
                args: ['welcomeRef', { static: true }]
            }], templateRef: [{
                type: ViewChild,
                args: ['templateRef', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC13ZWxjb21lLmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdmYtY2hhdGJvdC13ZWxjb21lLmFuZ3VsYXIvc3JjL2xpYi92Zi1jaGF0Ym90LXdlbGNvbWUuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBNkR2RixNQUFNLE9BQU8sZ0NBQWdDO0lBMUQ3QztRQTJEVyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxjQUFjLENBQUM7UUFDbEMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsOEJBQXlCLEdBQUcsRUFBRSxDQUFDO1FBQy9CLCtCQUEwQixHQUFHLEtBQUssQ0FBQztRQUNuQyw0QkFBdUIsR0FBRyxDQUFDLENBQUM7UUFDNUIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1Qiw4QkFBeUIsR0FBRyxJQUFJLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7S0FtQjNCO0lBZEMsZUFBZTtRQUNiLDZCQUE2QjtRQUc3QixvQ0FBb0M7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBNEIsQ0FBQztZQUN6RCxFQUFFLENBQUMsU0FBUyxHQUFHOzs7O09BSWQsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDOytHQS9CVSxnQ0FBZ0M7bUdBQWhDLGdDQUFnQyxtMEJBeERqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlEVDs7NEZBT1UsZ0NBQWdDO2tCQTFENUMsU0FBUzsrQkFDRSxvQkFBb0IsWUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRFQ7OEJBUVEsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0cseUJBQXlCO3NCQUFqQyxLQUFLO2dCQUNHLDBCQUEwQjtzQkFBbEMsS0FBSztnQkFDRyx1QkFBdUI7c0JBQS9CLEtBQUs7Z0JBQ0csc0JBQXNCO3NCQUE5QixLQUFLO2dCQUNHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFDRyx5QkFBeUI7c0JBQWpDLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFcUMsVUFBVTtzQkFBcEQsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUNHLFdBQVc7c0JBQXRELFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmLWNoYXRib3Qtd2VsY29tZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgI3dlbGNvbWVSZWZcbiAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC13ZWxjb21lXCJcbiAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC13ZWxjb21lXG4gICAgICBbYXR0ci5kYXRhLW1heC1xdWVzdGlvbnNdPVwid2VsY29tZV9tYXhfc3VnZ2VzdGlvbnNcIlxuICAgICAgW2F0dHIuZGF0YS1lbmFibGUtcWEtZGF0YS1sb2FkaW5nXT1cImVuYWJsZV9xYV9kYXRhX2xvYWRpbmdcIlxuICAgICAgW2F0dHIuZGF0YS1lbmFibGUtcHJlZGVmaW5lZC1xYV09XCJlbmFibGVfcHJlZGVmaW5lZF9xYVwiXG4gICAgICBbYXR0ci5kYXRhLWVuYWJsZS1mYWxsYmFjay1yZXNwb25zZXNdPVwiZW5hYmxlX2ZhbGxiYWNrX3Jlc3BvbnNlc1wiXG4gICAgICBbYXR0ci5kYXRhLXFhLWRhdGEtdXJsXT1cInFhX2RhdGFfdXJsXCJcbiAgICA+XG4gICAgICA8ZGl2ICpuZ0lmPVwid2VsY29tZV90aXRsZSB8fCB3ZWxjb21lX2xvZ28gfHwgd2VsY29tZV9tZXNzYWdlXCIgY2xhc3M9XCJ2Zi1jaGF0Ym90LXdlbGNvbWVfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIndlbGNvbWVfbG9nb1wiIGNsYXNzPVwidmYtY2hhdGJvdC13ZWxjb21lX19sb2dvXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgKm5nSWY9XCJ3ZWxjb21lX2xvZ29fdXJsXCJcbiAgICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC13ZWxjb21lX19sb2dvLWltYWdlXCJcbiAgICAgICAgICAgIFtzcmNdPVwid2VsY29tZV9sb2dvX3VybFwiXG4gICAgICAgICAgICBbYWx0XT1cIndlbGNvbWVfbG9nb19hbHQgfHwgJ0FJIEFzc2lzdGFudCdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMSAqbmdJZj1cIndlbGNvbWVfdGl0bGVcIiBjbGFzcz1cInZmLWNoYXRib3Qtd2VsY29tZV9fdGl0bGVcIj5cbiAgICAgICAgICB7eyB3ZWxjb21lX3RpdGxlIH19XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPGRpdiAqbmdJZj1cIndlbGNvbWVfbWVzc2FnZVwiIGNsYXNzPVwidmYtY2hhdGJvdC13ZWxjb21lX19tZXNzYWdlXCI+XG4gICAgICAgICAge3sgd2VsY29tZV9tZXNzYWdlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nSWY9XCJlbmFibGVfd2VsY29tZV9zdWdnZXN0aW9uc1wiXG4gICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC13ZWxjb21lX19zdWdnZXN0aW9uc1wiXG4gICAgICA+XG4gICAgICAgIDxoM1xuICAgICAgICAgICpuZ0lmPVwid2VsY29tZV9zdWdnZXN0aW9uc190aXRsZVwiXG4gICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LXdlbGNvbWVfX3N1Z2dlc3Rpb25zLXRpdGxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHdlbGNvbWVfc3VnZ2VzdGlvbnNfdGl0bGUgfX1cbiAgICAgICAgPC9oMz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LXdlbGNvbWVfX3N1Z2dlc3Rpb25zLWdyaWRcIlxuICAgICAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC13ZWxjb21lLXN1Z2dlc3Rpb25zLWdyaWRcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx0ZW1wbGF0ZSAjdGVtcGxhdGVSZWYgaWQ9XCJ3ZWxjb21lLXN1Z2dlc3Rpb24tdGVtcGxhdGVcIj48L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnZmLWNoYXRib3Qtd2VsY29tZSB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLnZmLWNoYXRib3Qtd2VsY29tZV9fbG9nbyB7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxuICAgIC52Zi1jaGF0Ym90LXdlbGNvbWVfX2xvZ28taW1hZ2UgeyBtYXgtd2lkdGg6IDY0cHg7IGhlaWdodDogYXV0bzsgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBWZkNoYXRib3RXZWxjb21lQW5ndWxhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBxYURhdGE6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHdlbGNvbWVfbG9nbyA9IGZhbHNlO1xuICBASW5wdXQoKSB3ZWxjb21lX2xvZ29fdXJsID0gJyc7XG4gIEBJbnB1dCgpIHdlbGNvbWVfbG9nb19hbHQgPSAnQUkgQXNzaXN0YW50JztcbiAgQElucHV0KCkgd2VsY29tZV90aXRsZSA9ICcnO1xuICBASW5wdXQoKSB3ZWxjb21lX21lc3NhZ2UgPSAnJztcbiAgQElucHV0KCkgd2VsY29tZV9zdWdnZXN0aW9uc190aXRsZSA9ICcnO1xuICBASW5wdXQoKSBlbmFibGVfd2VsY29tZV9zdWdnZXN0aW9ucyA9IGZhbHNlO1xuICBASW5wdXQoKSB3ZWxjb21lX21heF9zdWdnZXN0aW9ucyA9IDQ7XG4gIEBJbnB1dCgpIGVuYWJsZV9xYV9kYXRhX2xvYWRpbmcgPSB0cnVlO1xuICBASW5wdXQoKSBlbmFibGVfcHJlZGVmaW5lZF9xYSA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZV9mYWxsYmFja19yZXNwb25zZXMgPSB0cnVlO1xuICBASW5wdXQoKSBxYV9kYXRhX3VybCA9ICcnO1xuXG4gIEBWaWV3Q2hpbGQoJ3dlbGNvbWVSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSB3ZWxjb21lUmVmITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZiE6IEVsZW1lbnRSZWY7XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIEluaXRpYWxpemUgY2hhdGJvdCB3ZWxjb21lXG4gICAgXG5cbiAgICAvLyBSZW5kZXIgdGhlIGFjdGlvbiBwcm9tcHQgdGVtcGxhdGVcbiAgICBpZiAodGhpcy50ZW1wbGF0ZVJlZj8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLnRlbXBsYXRlUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBlbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LWFjdGlvbi1wcm9tcHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0X19saW5rXCI+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuICB9XG59XG4iXX0=