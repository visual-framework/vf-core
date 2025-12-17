import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class VfChatbotFeedbackAngularComponent {
    constructor(el) {
        this.el = el;
        this.feedback_options = [];
        this.type = '';
        this.comment = '';
        this.feedback = new EventEmitter();
        this.commentChange = new EventEmitter();
        this.close = new EventEmitter();
        this.submit = new EventEmitter();
    }
    ngAfterViewInit() {
    }
    onFeedbackClick(optionId) {
        this.feedback.emit({ type: this.type, id: optionId });
    }
    onCloseClick() {
        this.close.emit();
    }
    onSubmitClick() {
        this.submit.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFeedbackAngularComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotFeedbackAngularComponent, selector: "vf-chatbot-feedback", inputs: { feedback_options: "feedback_options", type: "type", comment: "comment" }, outputs: { feedback: "feedback", commentChange: "commentChange", close: "close", submit: "submit" }, ngImport: i0, template: `
    <div
      class="vf-chatbot-feedback__form vf-u-margin__top--400" style="display:block"
    >
      <div class="vf-chatbot-feedback__form-content vf-u-padding--400">
        <!-- Header -->
        <div class="vf-chatbot-feedback__form-content-header">
          <div class="vf-chatbot-feedback__title">
            Tell us more (optional)
          </div>
          <button
            role="button"
            class="vf-chatbot-feedback__form-close vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
            type="button"
            aria-label="Close feedback form"
            data-vf-js-feedback-form-close
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>dismiss banner</title>
              <path
                d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"
              />
            </svg>
          </button>
        </div>

        <!-- Feedback Options -->
        <div class="vf-chatbot-feedback__options">
          <button
            *ngFor="let option of feedback_options"
            class="vf-chatbot-feedback__option"
            [attr.data-feedback-option]="option.id"
            (click)="onFeedbackClick(option.id)"
          >
            {{ option.label }}
          </button>
        </div>

        <!-- Comment Field -->
        <label
          id="vf-chatbot-feedback-comment-title"
          for="vf-chatbot-feedback-comment"
          class="vf-chatbot-feedback__comment-title"
        >
          Comments
        </label>
        <textarea
          id="vf-chatbot-feedback-comment"
          aria-labelledby="vf-chatbot-feedback-comment-title"
          class="vf-chatbot-feedback__comment"
          rows="4"
          [(ngModel)]="comment"
        ></textarea>

        <!-- Submit Button -->
        <button
          type="button"
          class="vf-chatbot-feedback__submit vf-u-padding--200" data-vf-js-feedback-submit
          (click)="onSubmitClick()"
        >
          Submit
        </button>
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFeedbackAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-feedback',
                    template: `
    <div
      class="vf-chatbot-feedback__form vf-u-margin__top--400" style="display:block"
    >
      <div class="vf-chatbot-feedback__form-content vf-u-padding--400">
        <!-- Header -->
        <div class="vf-chatbot-feedback__form-content-header">
          <div class="vf-chatbot-feedback__title">
            Tell us more (optional)
          </div>
          <button
            role="button"
            class="vf-chatbot-feedback__form-close vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
            type="button"
            aria-label="Close feedback form"
            data-vf-js-feedback-form-close
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>dismiss banner</title>
              <path
                d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z"
              />
            </svg>
          </button>
        </div>

        <!-- Feedback Options -->
        <div class="vf-chatbot-feedback__options">
          <button
            *ngFor="let option of feedback_options"
            class="vf-chatbot-feedback__option"
            [attr.data-feedback-option]="option.id"
            (click)="onFeedbackClick(option.id)"
          >
            {{ option.label }}
          </button>
        </div>

        <!-- Comment Field -->
        <label
          id="vf-chatbot-feedback-comment-title"
          for="vf-chatbot-feedback-comment"
          class="vf-chatbot-feedback__comment-title"
        >
          Comments
        </label>
        <textarea
          id="vf-chatbot-feedback-comment"
          aria-labelledby="vf-chatbot-feedback-comment-title"
          class="vf-chatbot-feedback__comment"
          rows="4"
          [(ngModel)]="comment"
        ></textarea>

        <!-- Submit Button -->
        <button
          type="button"
          class="vf-chatbot-feedback__submit vf-u-padding--200" data-vf-js-feedback-submit
          (click)="onSubmitClick()"
        >
          Submit
        </button>
      </div>
    </div>
  `,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { feedback_options: [{
                type: Input
            }], type: [{
                type: Input
            }], comment: [{
                type: Input
            }], feedback: [{
                type: Output
            }], commentChange: [{
                type: Output
            }], close: [{
                type: Output
            }], submit: [{
                type: Output
            }] } });

class VfChatbotFeedbackAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFeedbackAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFeedbackAngularModule, declarations: [VfChatbotFeedbackAngularComponent], imports: [CommonModule,
            FormsModule], exports: [VfChatbotFeedbackAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFeedbackAngularModule, imports: [CommonModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotFeedbackAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfChatbotFeedbackAngularComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [
                        VfChatbotFeedbackAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-chatbot-feedback.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotFeedbackAngularComponent, VfChatbotFeedbackAngularModule };
//# sourceMappingURL=vf-chatbot-feedback.angular.mjs.map
