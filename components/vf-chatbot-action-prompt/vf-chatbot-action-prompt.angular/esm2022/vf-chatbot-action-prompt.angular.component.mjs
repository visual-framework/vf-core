// vf-chatbot-action-prompt.angular
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class VfChatbotActionPromptAngularComponent {
    constructor() {
        /** Emits when the link/button is clicked (maps to onClick) */
        this.actionClick = new EventEmitter();
    }
    onClick(ev) {
        this.actionClick.emit(ev);
    }
    get isExternal() {
        return this.actionTarget === '_blank';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotActionPromptAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotActionPromptAngularComponent, selector: "vf-chatbot-action-prompt", inputs: { actionUrl: ["action_url", "actionUrl"], actionText: ["action_text", "actionText"], actionTarget: ["action_target", "actionTarget"] }, outputs: { actionClick: "actionClick" }, ngImport: i0, template: `
    <a
    *ngIf="actionUrl; else buttonTemplate"
    [href]="actionUrl"
    class="vf-chatbot-action-prompt__link"
    role="button"
    [attr.target]="actionTarget || null"
  >
    {{ actionText }}
  </a>

  <ng-template #buttonTemplate>
    <button
      class="vf-chatbot-action-prompt__link"
    >
      {{ actionText }}
    </button>
  </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotActionPromptAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-action-prompt',
                    template: `
    <a
    *ngIf="actionUrl; else buttonTemplate"
    [href]="actionUrl"
    class="vf-chatbot-action-prompt__link"
    role="button"
    [attr.target]="actionTarget || null"
  >
    {{ actionText }}
  </a>

  <ng-template #buttonTemplate>
    <button
      class="vf-chatbot-action-prompt__link"
    >
      {{ actionText }}
    </button>
  </ng-template>
  `
                }]
        }], propDecorators: { actionUrl: [{
                type: Input,
                args: [{ alias: 'action_url' }]
            }], actionText: [{
                type: Input,
                args: [{ alias: 'action_text' }]
            }], actionTarget: [{
                type: Input,
                args: [{ alias: 'action_target' }]
            }], actionClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0LmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvdmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0LmFuZ3VsYXIvc3JjL2xpYi92Zi1jaGF0Ym90LWFjdGlvbi1wcm9tcHQuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DO0FBRW5DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQXdCdkUsTUFBTSxPQUFPLHFDQUFxQztJQXRCbEQ7UUFnQ0UsOERBQThEO1FBQ3BELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztLQVN4RDtJQVBDLE9BQU8sQ0FBQyxFQUFjO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDO0lBQ3hDLENBQUM7K0dBbkJVLHFDQUFxQzttR0FBckMscUNBQXFDLHlQQXBCdEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDs7NEZBRVUscUNBQXFDO2tCQXRCakQsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtpQkFDRjs4QkFHaUMsU0FBUztzQkFBeEMsS0FBSzt1QkFBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7Z0JBR0csVUFBVTtzQkFBMUMsS0FBSzt1QkFBQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7Z0JBR0ksWUFBWTtzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUU7Z0JBR3ZCLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2Zi1jaGF0Ym90LWFjdGlvbi1wcm9tcHQuYW5ndWxhclxuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2Zi1jaGF0Ym90LWFjdGlvbi1wcm9tcHQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhXG4gICAgKm5nSWY9XCJhY3Rpb25Vcmw7IGVsc2UgYnV0dG9uVGVtcGxhdGVcIlxuICAgIFtocmVmXT1cImFjdGlvblVybFwiXG4gICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LWFjdGlvbi1wcm9tcHRfX2xpbmtcIlxuICAgIHJvbGU9XCJidXR0b25cIlxuICAgIFthdHRyLnRhcmdldF09XCJhY3Rpb25UYXJnZXQgfHwgbnVsbFwiXG4gID5cbiAgICB7eyBhY3Rpb25UZXh0IH19XG4gIDwvYT5cblxuICA8bmctdGVtcGxhdGUgI2J1dHRvblRlbXBsYXRlPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwidmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0X19saW5rXCJcbiAgICA+XG4gICAgICB7eyBhY3Rpb25UZXh0IH19XG4gICAgPC9idXR0b24+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVmZDaGF0Ym90QWN0aW9uUHJvbXB0QW5ndWxhckNvbXBvbmVudCB7XG4gIC8qKiBFcXVpdmFsZW50IHRvIGFjdGlvbl91cmwgKi9cbiAgQElucHV0KHsgYWxpYXM6ICdhY3Rpb25fdXJsJyB9KSBhY3Rpb25Vcmw/OiBzdHJpbmc7XG5cbiAgLyoqIEVxdWl2YWxlbnQgdG8gYWN0aW9uX3RleHQgKi9cbiAgQElucHV0KHsgYWxpYXM6ICdhY3Rpb25fdGV4dCcgfSkgYWN0aW9uVGV4dCE6IHN0cmluZztcblxuICAvKiogRXF1aXZhbGVudCB0byBhY3Rpb25fdGFyZ2V0ICovXG4gIEBJbnB1dCh7IGFsaWFzOiAnYWN0aW9uX3RhcmdldCcgfSkgYWN0aW9uVGFyZ2V0Pzogc3RyaW5nO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBsaW5rL2J1dHRvbiBpcyBjbGlja2VkIChtYXBzIHRvIG9uQ2xpY2spICovXG4gIEBPdXRwdXQoKSBhY3Rpb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBvbkNsaWNrKGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5hY3Rpb25DbGljay5lbWl0KGV2KTtcbiAgfVxuXG4gIGdldCBpc0V4dGVybmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGlvblRhcmdldCA9PT0gJ19ibGFuayc7XG4gIH1cbn1cbiJdfQ==