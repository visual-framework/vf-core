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
export * from './vf-chatbot-welcome.angular.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC13ZWxjb21lLmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvdmYtY2hhdGJvdC13ZWxjb21lLmFuZ3VsYXIvc3JjL2xpYi92Zi1jaGF0Ym90LXdlbGNvbWUuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBNkR2RixNQUFNLE9BQU8sZ0NBQWdDO0lBMUQ3QztRQTJEVyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxjQUFjLENBQUM7UUFDbEMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsOEJBQXlCLEdBQUcsRUFBRSxDQUFDO1FBQy9CLCtCQUEwQixHQUFHLEtBQUssQ0FBQztRQUNuQyw0QkFBdUIsR0FBRyxDQUFDLENBQUM7UUFDNUIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1Qiw4QkFBeUIsR0FBRyxJQUFJLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7S0FtQjNCO0lBZEMsZUFBZTtRQUNiLDZCQUE2QjtRQUc3QixvQ0FBb0M7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBNEIsQ0FBQztZQUN6RCxFQUFFLENBQUMsU0FBUyxHQUFHOzs7O09BSWQsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDOytHQS9CVSxnQ0FBZ0M7bUdBQWhDLGdDQUFnQyxtMEJBeERqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlEVDs7NEZBT1UsZ0NBQWdDO2tCQTFENUMsU0FBUzsrQkFDRSxvQkFBb0IsWUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRFQ7OEJBUVEsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0cseUJBQXlCO3NCQUFqQyxLQUFLO2dCQUNHLDBCQUEwQjtzQkFBbEMsS0FBSztnQkFDRyx1QkFBdUI7c0JBQS9CLEtBQUs7Z0JBQ0csc0JBQXNCO3NCQUE5QixLQUFLO2dCQUNHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFDRyx5QkFBeUI7c0JBQWpDLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFcUMsVUFBVTtzQkFBcEQsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUNHLFdBQVc7c0JBQXRELFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7QUFrQjVDLGNBQWMscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2Zi1jaGF0Ym90LXdlbGNvbWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgICN3ZWxjb21lUmVmXG4gICAgICBjbGFzcz1cInZmLWNoYXRib3Qtd2VsY29tZVwiXG4gICAgICBkYXRhLXZmLWpzLWNoYXRib3Qtd2VsY29tZVxuICAgICAgW2F0dHIuZGF0YS1tYXgtcXVlc3Rpb25zXT1cIndlbGNvbWVfbWF4X3N1Z2dlc3Rpb25zXCJcbiAgICAgIFthdHRyLmRhdGEtZW5hYmxlLXFhLWRhdGEtbG9hZGluZ109XCJlbmFibGVfcWFfZGF0YV9sb2FkaW5nXCJcbiAgICAgIFthdHRyLmRhdGEtZW5hYmxlLXByZWRlZmluZWQtcWFdPVwiZW5hYmxlX3ByZWRlZmluZWRfcWFcIlxuICAgICAgW2F0dHIuZGF0YS1lbmFibGUtZmFsbGJhY2stcmVzcG9uc2VzXT1cImVuYWJsZV9mYWxsYmFja19yZXNwb25zZXNcIlxuICAgICAgW2F0dHIuZGF0YS1xYS1kYXRhLXVybF09XCJxYV9kYXRhX3VybFwiXG4gICAgPlxuICAgICAgPGRpdiAqbmdJZj1cIndlbGNvbWVfdGl0bGUgfHwgd2VsY29tZV9sb2dvIHx8IHdlbGNvbWVfbWVzc2FnZVwiIGNsYXNzPVwidmYtY2hhdGJvdC13ZWxjb21lX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJ3ZWxjb21lX2xvZ29cIiBjbGFzcz1cInZmLWNoYXRib3Qtd2VsY29tZV9fbG9nb1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICpuZ0lmPVwid2VsY29tZV9sb2dvX3VybFwiXG4gICAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3Qtd2VsY29tZV9fbG9nby1pbWFnZVwiXG4gICAgICAgICAgICBbc3JjXT1cIndlbGNvbWVfbG9nb191cmxcIlxuICAgICAgICAgICAgW2FsdF09XCJ3ZWxjb21lX2xvZ29fYWx0IHx8ICdBSSBBc3Npc3RhbnQnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aDEgKm5nSWY9XCJ3ZWxjb21lX3RpdGxlXCIgY2xhc3M9XCJ2Zi1jaGF0Ym90LXdlbGNvbWVfX3RpdGxlXCI+XG4gICAgICAgICAge3sgd2VsY29tZV90aXRsZSB9fVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCJ3ZWxjb21lX21lc3NhZ2VcIiBjbGFzcz1cInZmLWNoYXRib3Qtd2VsY29tZV9fbWVzc2FnZVwiPlxuICAgICAgICAgIHt7IHdlbGNvbWVfbWVzc2FnZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwiZW5hYmxlX3dlbGNvbWVfc3VnZ2VzdGlvbnNcIlxuICAgICAgICBjbGFzcz1cInZmLWNoYXRib3Qtd2VsY29tZV9fc3VnZ2VzdGlvbnNcIlxuICAgICAgPlxuICAgICAgICA8aDNcbiAgICAgICAgICAqbmdJZj1cIndlbGNvbWVfc3VnZ2VzdGlvbnNfdGl0bGVcIlxuICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC13ZWxjb21lX19zdWdnZXN0aW9ucy10aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyB3ZWxjb21lX3N1Z2dlc3Rpb25zX3RpdGxlIH19XG4gICAgICAgIDwvaDM+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC13ZWxjb21lX19zdWdnZXN0aW9ucy1ncmlkXCJcbiAgICAgICAgICBkYXRhLXZmLWpzLWNoYXRib3Qtd2VsY29tZS1zdWdnZXN0aW9ucy1ncmlkXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGVtcGxhdGUgI3RlbXBsYXRlUmVmIGlkPVwid2VsY29tZS1zdWdnZXN0aW9uLXRlbXBsYXRlXCI+PC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC52Zi1jaGF0Ym90LXdlbGNvbWUgeyBkaXNwbGF5OiBibG9jazsgfVxuICAgIC52Zi1jaGF0Ym90LXdlbGNvbWVfX2xvZ28geyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDFyZW07IH1cbiAgICAudmYtY2hhdGJvdC13ZWxjb21lX19sb2dvLWltYWdlIHsgbWF4LXdpZHRoOiA2NHB4OyBoZWlnaHQ6IGF1dG87IH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgVmZDaGF0Ym90V2VsY29tZUFuZ3VsYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcWFEYXRhOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSB3ZWxjb21lX2xvZ28gPSBmYWxzZTtcbiAgQElucHV0KCkgd2VsY29tZV9sb2dvX3VybCA9ICcnO1xuICBASW5wdXQoKSB3ZWxjb21lX2xvZ29fYWx0ID0gJ0FJIEFzc2lzdGFudCc7XG4gIEBJbnB1dCgpIHdlbGNvbWVfdGl0bGUgPSAnJztcbiAgQElucHV0KCkgd2VsY29tZV9tZXNzYWdlID0gJyc7XG4gIEBJbnB1dCgpIHdlbGNvbWVfc3VnZ2VzdGlvbnNfdGl0bGUgPSAnJztcbiAgQElucHV0KCkgZW5hYmxlX3dlbGNvbWVfc3VnZ2VzdGlvbnMgPSBmYWxzZTtcbiAgQElucHV0KCkgd2VsY29tZV9tYXhfc3VnZ2VzdGlvbnMgPSA0O1xuICBASW5wdXQoKSBlbmFibGVfcWFfZGF0YV9sb2FkaW5nID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlX3ByZWRlZmluZWRfcWEgPSB0cnVlO1xuICBASW5wdXQoKSBlbmFibGVfZmFsbGJhY2tfcmVzcG9uc2VzID0gdHJ1ZTtcbiAgQElucHV0KCkgcWFfZGF0YV91cmwgPSAnJztcblxuICBAVmlld0NoaWxkKCd3ZWxjb21lUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgd2VsY29tZVJlZiE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVSZWYhOiBFbGVtZW50UmVmO1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBJbml0aWFsaXplIGNoYXRib3Qgd2VsY29tZVxuICAgIFxuXG4gICAgLy8gUmVuZGVyIHRoZSBhY3Rpb24gcHJvbXB0IHRlbXBsYXRlXG4gICAgaWYgKHRoaXMudGVtcGxhdGVSZWY/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy50ZW1wbGF0ZVJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgZWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInZmLWNoYXRib3QtYWN0aW9uLXByb21wdF9fbGlua1wiPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgKiBmcm9tICcuL3ZmLWNoYXRib3Qtd2VsY29tZS5hbmd1bGFyLm1vZHVsZSc7XG4iXX0=