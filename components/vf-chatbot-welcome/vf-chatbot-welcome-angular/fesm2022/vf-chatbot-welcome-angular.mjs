import * as i0 from '@angular/core';
import { Component, Input, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VfChatbotActionPromptAngularModule } from 'dist/vf-chatbot-action-prompt.angular/lib/vf-chatbot-action-prompt.angular.module';

class VfChatbotWelcomeAngularComponent {
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

class VfChatbotWelcomeAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotWelcomeAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotWelcomeAngularModule, declarations: [VfChatbotWelcomeAngularComponent], imports: [CommonModule,
            FormsModule,
            VfChatbotActionPromptAngularModule], exports: [VfChatbotWelcomeAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotWelcomeAngularModule, imports: [CommonModule,
            FormsModule,
            VfChatbotActionPromptAngularModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotWelcomeAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfChatbotWelcomeAngularComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        VfChatbotActionPromptAngularModule
                    ],
                    exports: [
                        VfChatbotWelcomeAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-chatbot-welcome-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotWelcomeAngularComponent, VfChatbotWelcomeAngularModule };
//# sourceMappingURL=vf-chatbot-welcome-angular.mjs.map
