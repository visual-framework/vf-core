import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class VfChatbotFeedbackAngularComponent {
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
export * from './vf-chatbot-feedback.angular.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1mZWVkYmFjay5hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3ZmLWNoYXRib3QtZmVlZGJhY2suYW5ndWxhci9zcmMvbGliL3ZmLWNoYXRib3QtZmVlZGJhY2suYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7QUE0RWxHLE1BQU0sT0FBTyxpQ0FBaUM7SUFVNUMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFUekIscUJBQWdCLEdBQXFCLEVBQUUsQ0FBQztRQUN4QyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFFcEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFnQyxDQUFDO1FBQzVELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUVQLENBQUM7SUFFdEMsZUFBZTtJQUNmLENBQUM7SUFFRCxlQUFlLENBQUMsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7K0dBekJVLGlDQUFpQzttR0FBakMsaUNBQWlDLG9QQWxFbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRVQ7OzRGQUVVLGlDQUFpQztrQkFwRTdDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0VUO2lCQUNGOytFQUVVLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUVJLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNOztBQW9CVCxjQUFjLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmludGVyZmFjZSBGZWVkYmFja09wdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmLWNoYXRib3QtZmVlZGJhY2snLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1mZWVkYmFja19fZm9ybSB2Zi11LW1hcmdpbl9fdG9wLS00MDBcIiBzdHlsZT1cImRpc3BsYXk6YmxvY2tcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LWZlZWRiYWNrX19mb3JtLWNvbnRlbnQgdmYtdS1wYWRkaW5nLS00MDBcIj5cbiAgICAgICAgPCEtLSBIZWFkZXIgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LWZlZWRiYWNrX19mb3JtLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtZmVlZGJhY2tfX3RpdGxlXCI+XG4gICAgICAgICAgICBUZWxsIHVzIG1vcmUgKG9wdGlvbmFsKVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LWZlZWRiYWNrX19mb3JtLWNsb3NlIHZmLWJ1dHRvbiB2Zi1idXR0b24tLWljb24gdmYtYnV0dG9uLS1kaXNtaXNzIHwgdmYtYmFubmVyX19idXR0b25cIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2UgZmVlZGJhY2sgZm9ybVwiXG4gICAgICAgICAgICBkYXRhLXZmLWpzLWZlZWRiYWNrLWZvcm0tY2xvc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgIDx0aXRsZT5kaXNtaXNzIGJhbm5lcjwvdGl0bGU+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNC4zLDEyLjE3OWEuMjUuMjUsMCwwLDEsMC0uMzU0bDkuMjYzLTkuMjYyQTEuNSwxLjUsMCwwLDAsMjEuNDM5LjQ0MkwxMi4xNzcsOS43YS4yNS4yNSwwLDAsMS0uMzU0LDBMMi41NjEuNDQyQTEuNSwxLjUsMCwwLDAsLjQzOSwyLjU2M0w5LjcsMTEuODI1YS4yNS4yNSwwLDAsMSwwLC4zNTRMLjQzOSwyMS40NDJhMS41LDEuNSwwLDAsMCwyLjEyMiwyLjEyMUwxMS44MjMsMTQuM2EuMjUuMjUsMCwwLDEsLjM1NCwwbDkuMjYyLDkuMjYzYTEuNSwxLjUsMCwwLDAsMi4xMjItMi4xMjFaXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIEZlZWRiYWNrIE9wdGlvbnMgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LWZlZWRiYWNrX19vcHRpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmZWVkYmFja19vcHRpb25zXCJcbiAgICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1mZWVkYmFja19fb3B0aW9uXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtZmVlZGJhY2stb3B0aW9uXT1cIm9wdGlvbi5pZFwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25GZWVkYmFja0NsaWNrKG9wdGlvbi5pZClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENvbW1lbnQgRmllbGQgLS0+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGlkPVwidmYtY2hhdGJvdC1mZWVkYmFjay1jb21tZW50LXRpdGxlXCJcbiAgICAgICAgICBmb3I9XCJ2Zi1jaGF0Ym90LWZlZWRiYWNrLWNvbW1lbnRcIlxuICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1mZWVkYmFja19fY29tbWVudC10aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICBDb21tZW50c1xuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cInZmLWNoYXRib3QtZmVlZGJhY2stY29tbWVudFwiXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidmYtY2hhdGJvdC1mZWVkYmFjay1jb21tZW50LXRpdGxlXCJcbiAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtZmVlZGJhY2tfX2NvbW1lbnRcIlxuICAgICAgICAgIHJvd3M9XCI0XCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImNvbW1lbnRcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cblxuICAgICAgICA8IS0tIFN1Ym1pdCBCdXR0b24gLS0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtZmVlZGJhY2tfX3N1Ym1pdCB2Zi11LXBhZGRpbmctLTIwMFwiIGRhdGEtdmYtanMtZmVlZGJhY2stc3VibWl0XG4gICAgICAgICAgKGNsaWNrKT1cIm9uU3VibWl0Q2xpY2soKVwiXG4gICAgICAgID5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVmZDaGF0Ym90RmVlZGJhY2tBbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGZlZWRiYWNrX29wdGlvbnM6IEZlZWRiYWNrT3B0aW9uW10gPSBbXTtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNvbW1lbnQ6IHN0cmluZyA9ICcnO1xuXG4gIEBPdXRwdXQoKSBmZWVkYmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8eyB0eXBlOiBzdHJpbmc7IGlkOiBzdHJpbmcgfT4oKTtcbiAgQE91dHB1dCgpIGNvbW1lbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgc3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25GZWVkYmFja0NsaWNrKG9wdGlvbklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZlZWRiYWNrLmVtaXQoeyB0eXBlOiB0aGlzLnR5cGUsIGlkOiBvcHRpb25JZCB9KTtcbiAgfVxuXG4gIG9uQ2xvc2VDbGljaygpIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxuXG4gIG9uU3VibWl0Q2xpY2soKSB7XG4gICAgdGhpcy5zdWJtaXQuZW1pdCgpO1xuICB9XG59XG5cbmV4cG9ydCAqIGZyb20gJy4vdmYtY2hhdGJvdC1mZWVkYmFjay5hbmd1bGFyLm1vZHVsZSc7XG4iXX0=