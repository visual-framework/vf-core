import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class VfChatbotDialogAngularComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this.title = 'Close chat and delete conversation?';
        this.message = 'Are you sure you want to close the chat? <br>Your current conversation history will be permanently deleted.';
        this.cancelLabel = 'Keep chat open';
        this.confirmLabel = 'Close and delete';
    }
    ngAfterViewInit() {
        const el = this.elRef.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotDialogAngularComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotDialogAngularComponent, selector: "vf-chatbot-dialog", inputs: { title: "title", message: "message", cancelLabel: "cancelLabel", confirmLabel: "confirmLabel" }, ngImport: i0, template: `
    <div
      class="vf-chatbot-dialog"
      data-vf-js-chatbot-dialog
    >
      <div class="vf-chatbot-dialog__content">
        <div class="vf-chatbot-dialog__header vf-u-margin__bottom--400">
          <h2 class="vf-chatbot-dialog__title">{{ title }}</h2>

          <button
            class="vf-chatbot-dialog__close"
            data-vf-js-dialog-close
            aria-label="Close dialog"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 
                   10.59 12 5 17.59 6.41 19 12 13.41 
                   17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
        </div>

        <div class="vf-chatbot-dialog__body vf-u-margin__bottom--800">
          <p
            class="vf-text vf-text-body--3"
            [innerHTML]="message"
          ></p>
        </div>

        <div class="vf-chatbot-dialog__actions">
          <button
            class="vf-chatbot-dialog__button vf-chatbot-dialog__button--outline"
            data-vf-js-dialog-cancel
          >
            {{ cancelLabel }}
          </button>

          <button
            class="vf-chatbot-dialog__button vf-chatbot-dialog__button--primary"
            data-vf-js-dialog-confirm
          >
            {{ confirmLabel }}
          </button>
        </div>
      </div>
    </div>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotDialogAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-dialog',
                    template: `
    <div
      class="vf-chatbot-dialog"
      data-vf-js-chatbot-dialog
    >
      <div class="vf-chatbot-dialog__content">
        <div class="vf-chatbot-dialog__header vf-u-margin__bottom--400">
          <h2 class="vf-chatbot-dialog__title">{{ title }}</h2>

          <button
            class="vf-chatbot-dialog__close"
            data-vf-js-dialog-close
            aria-label="Close dialog"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 
                   10.59 12 5 17.59 6.41 19 12 13.41 
                   17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
        </div>

        <div class="vf-chatbot-dialog__body vf-u-margin__bottom--800">
          <p
            class="vf-text vf-text-body--3"
            [innerHTML]="message"
          ></p>
        </div>

        <div class="vf-chatbot-dialog__actions">
          <button
            class="vf-chatbot-dialog__button vf-chatbot-dialog__button--outline"
            data-vf-js-dialog-cancel
          >
            {{ cancelLabel }}
          </button>

          <button
            class="vf-chatbot-dialog__button vf-chatbot-dialog__button--primary"
            data-vf-js-dialog-confirm
          >
            {{ confirmLabel }}
          </button>
        </div>
      </div>
    </div>
  `
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { title: [{
                type: Input
            }], message: [{
                type: Input
            }], cancelLabel: [{
                type: Input
            }], confirmLabel: [{
                type: Input
            }] } });
export * from './vf-chatbot-dialog.angular.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1kaWFsb2cuYW5ndWxhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy92Zi1jaGF0Ym90LWRpYWxvZy5hbmd1bGFyL3NyYy9saWIvdmYtY2hhdGJvdC1kaWFsb2cuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7O0FBdUR2QixNQUFNLE9BQU8sK0JBQStCO0lBTzFDLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFONUIsVUFBSyxHQUFHLHFDQUFxQyxDQUFDO1FBQzlDLFlBQU8sR0FBRyw2R0FBNkcsQ0FBQztRQUN4SCxnQkFBVyxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLGlCQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFHSCxDQUFDO0lBRXpDLGVBQWU7UUFDYixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQTRCLENBQUM7SUFDckQsQ0FBQzsrR0FYVSwrQkFBK0I7bUdBQS9CLCtCQUErQixtS0FsRGhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRFQ7OzRGQUVVLCtCQUErQjtrQkFwRDNDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRFQ7aUJBQ0Y7K0VBRVUsS0FBSztzQkFBYixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7O0FBV1IsY0FBYyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmYtY2hhdGJvdC1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1kaWFsb2dcIlxuICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90LWRpYWxvZ1xuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJ2Zi1jaGF0Ym90LWRpYWxvZ19fY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1kaWFsb2dfX2hlYWRlciB2Zi11LW1hcmdpbl9fYm90dG9tLS00MDBcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJ2Zi1jaGF0Ym90LWRpYWxvZ19fdGl0bGVcIj57eyB0aXRsZSB9fTwvaDI+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtZGlhbG9nX19jbG9zZVwiXG4gICAgICAgICAgICBkYXRhLXZmLWpzLWRpYWxvZy1jbG9zZVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlIGRpYWxvZ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSBcbiAgICAgICAgICAgICAgICAgICAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgXG4gICAgICAgICAgICAgICAgICAgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1kaWFsb2dfX2JvZHkgdmYtdS1tYXJnaW5fX2JvdHRvbS0tODAwXCI+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzPVwidmYtdGV4dCB2Zi10ZXh0LWJvZHktLTNcIlxuICAgICAgICAgICAgW2lubmVySFRNTF09XCJtZXNzYWdlXCJcbiAgICAgICAgICA+PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1kaWFsb2dfX2FjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInZmLWNoYXRib3QtZGlhbG9nX19idXR0b24gdmYtY2hhdGJvdC1kaWFsb2dfX2J1dHRvbi0tb3V0bGluZVwiXG4gICAgICAgICAgICBkYXRhLXZmLWpzLWRpYWxvZy1jYW5jZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBjYW5jZWxMYWJlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LWRpYWxvZ19fYnV0dG9uIHZmLWNoYXRib3QtZGlhbG9nX19idXR0b24tLXByaW1hcnlcIlxuICAgICAgICAgICAgZGF0YS12Zi1qcy1kaWFsb2ctY29uZmlybVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGNvbmZpcm1MYWJlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFZmQ2hhdGJvdERpYWxvZ0FuZ3VsYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgdGl0bGUgPSAnQ2xvc2UgY2hhdCBhbmQgZGVsZXRlIGNvbnZlcnNhdGlvbj8nO1xuICBASW5wdXQoKSBtZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbG9zZSB0aGUgY2hhdD8gPGJyPllvdXIgY3VycmVudCBjb252ZXJzYXRpb24gaGlzdG9yeSB3aWxsIGJlIHBlcm1hbmVudGx5IGRlbGV0ZWQuJztcbiAgQElucHV0KCkgY2FuY2VsTGFiZWwgPSAnS2VlcCBjaGF0IG9wZW4nO1xuICBASW5wdXQoKSBjb25maXJtTGFiZWwgPSAnQ2xvc2UgYW5kIGRlbGV0ZSc7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG59XG5cbmV4cG9ydCAqIGZyb20gJy4vdmYtY2hhdGJvdC1kaWFsb2cuYW5ndWxhci5tb2R1bGUnO1xuIl19