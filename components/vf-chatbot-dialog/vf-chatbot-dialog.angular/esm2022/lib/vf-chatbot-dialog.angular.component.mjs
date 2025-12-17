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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1kaWFsb2cuYW5ndWxhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92Zi1jaGF0Ym90LWRpYWxvZy5hbmd1bGFyL3NyYy9saWIvdmYtY2hhdGJvdC1kaWFsb2cuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7O0FBdUR2QixNQUFNLE9BQU8sK0JBQStCO0lBTzFDLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFONUIsVUFBSyxHQUFHLHFDQUFxQyxDQUFDO1FBQzlDLFlBQU8sR0FBRyw2R0FBNkcsQ0FBQztRQUN4SCxnQkFBVyxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLGlCQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFHSCxDQUFDO0lBRXpDLGVBQWU7UUFDYixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQTRCLENBQUM7SUFDckQsQ0FBQzsrR0FYVSwrQkFBK0I7bUdBQS9CLCtCQUErQixtS0FsRGhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRFQ7OzRGQUVVLCtCQUErQjtrQkFwRDNDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRFQ7aUJBQ0Y7K0VBRVUsS0FBSztzQkFBYixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmLWNoYXRib3QtZGlhbG9nJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInZmLWNoYXRib3QtZGlhbG9nXCJcbiAgICAgIGRhdGEtdmYtanMtY2hhdGJvdC1kaWFsb2dcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwidmYtY2hhdGJvdC1kaWFsb2dfX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtZGlhbG9nX19oZWFkZXIgdmYtdS1tYXJnaW5fX2JvdHRvbS0tNDAwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwidmYtY2hhdGJvdC1kaWFsb2dfX3RpdGxlXCI+e3sgdGl0bGUgfX08L2gyPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LWRpYWxvZ19fY2xvc2VcIlxuICAgICAgICAgICAgZGF0YS12Zi1qcy1kaWFsb2ctY2xvc2VcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBkaWFsb2dcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgXG4gICAgICAgICAgICAgICAgICAgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIFxuICAgICAgICAgICAgICAgICAgIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtZGlhbG9nX19ib2R5IHZmLXUtbWFyZ2luX19ib3R0b20tLTgwMFwiPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzcz1cInZmLXRleHQgdmYtdGV4dC1ib2R5LS0zXCJcbiAgICAgICAgICAgIFtpbm5lckhUTUxdPVwibWVzc2FnZVwiXG4gICAgICAgICAgPjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZmLWNoYXRib3QtZGlhbG9nX19hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LWRpYWxvZ19fYnV0dG9uIHZmLWNoYXRib3QtZGlhbG9nX19idXR0b24tLW91dGxpbmVcIlxuICAgICAgICAgICAgZGF0YS12Zi1qcy1kaWFsb2ctY2FuY2VsXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgY2FuY2VsTGFiZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1kaWFsb2dfX2J1dHRvbiB2Zi1jaGF0Ym90LWRpYWxvZ19fYnV0dG9uLS1wcmltYXJ5XCJcbiAgICAgICAgICAgIGRhdGEtdmYtanMtZGlhbG9nLWNvbmZpcm1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBjb25maXJtTGFiZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBWZkNoYXRib3REaWFsb2dBbmd1bGFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlID0gJ0Nsb3NlIGNoYXQgYW5kIGRlbGV0ZSBjb252ZXJzYXRpb24/JztcbiAgQElucHV0KCkgbWVzc2FnZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2UgdGhlIGNoYXQ/IDxicj5Zb3VyIGN1cnJlbnQgY29udmVyc2F0aW9uIGhpc3Rvcnkgd2lsbCBiZSBwZXJtYW5lbnRseSBkZWxldGVkLic7XG4gIEBJbnB1dCgpIGNhbmNlbExhYmVsID0gJ0tlZXAgY2hhdCBvcGVuJztcbiAgQElucHV0KCkgY29uZmlybUxhYmVsID0gJ0Nsb3NlIGFuZCBkZWxldGUnO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxufVxuIl19