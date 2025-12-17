// vf-chatbot-action-prompt.angular
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
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
  `, isInline: true }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0LmFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdmYtY2hhdGJvdC1hY3Rpb24tcHJvbXB0LmFuZ3VsYXIvc3JjL2xpYi92Zi1jaGF0Ym90LWFjdGlvbi1wcm9tcHQuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DO0FBRW5DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBd0J2RSxNQUFNLE9BQU8scUNBQXFDO0lBdEJsRDtRQWdDRSw4REFBOEQ7UUFDcEQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0tBU3hEO0lBUEMsT0FBTyxDQUFDLEVBQWM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUM7SUFDeEMsQ0FBQzsrR0FuQlUscUNBQXFDO21HQUFyQyxxQ0FBcUMseVBBcEJ0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUOzs0RkFFVSxxQ0FBcUM7a0JBdEJqRCxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUO2lCQUNGOzhCQUdpQyxTQUFTO3NCQUF4QyxLQUFLO3VCQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtnQkFHRyxVQUFVO3NCQUExQyxLQUFLO3VCQUFDLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtnQkFHSSxZQUFZO3NCQUE5QyxLQUFLO3VCQUFDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtnQkFHdkIsV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZmLWNoYXRib3QtYWN0aW9uLXByb21wdC5hbmd1bGFyXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZmLWNoYXRib3QtYWN0aW9uLXByb21wdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGFcbiAgICAqbmdJZj1cImFjdGlvblVybDsgZWxzZSBidXR0b25UZW1wbGF0ZVwiXG4gICAgW2hyZWZdPVwiYWN0aW9uVXJsXCJcbiAgICBjbGFzcz1cInZmLWNoYXRib3QtYWN0aW9uLXByb21wdF9fbGlua1wiXG4gICAgcm9sZT1cImJ1dHRvblwiXG4gICAgW2F0dHIudGFyZ2V0XT1cImFjdGlvblRhcmdldCB8fCBudWxsXCJcbiAgPlxuICAgIHt7IGFjdGlvblRleHQgfX1cbiAgPC9hPlxuXG4gIDxuZy10ZW1wbGF0ZSAjYnV0dG9uVGVtcGxhdGU+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJ2Zi1jaGF0Ym90LWFjdGlvbi1wcm9tcHRfX2xpbmtcIlxuICAgID5cbiAgICAgIHt7IGFjdGlvblRleHQgfX1cbiAgICA8L2J1dHRvbj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBWZkNoYXRib3RBY3Rpb25Qcm9tcHRBbmd1bGFyQ29tcG9uZW50IHtcbiAgLyoqIEVxdWl2YWxlbnQgdG8gYWN0aW9uX3VybCAqL1xuICBASW5wdXQoeyBhbGlhczogJ2FjdGlvbl91cmwnIH0pIGFjdGlvblVybD86IHN0cmluZztcblxuICAvKiogRXF1aXZhbGVudCB0byBhY3Rpb25fdGV4dCAqL1xuICBASW5wdXQoeyBhbGlhczogJ2FjdGlvbl90ZXh0JyB9KSBhY3Rpb25UZXh0ITogc3RyaW5nO1xuXG4gIC8qKiBFcXVpdmFsZW50IHRvIGFjdGlvbl90YXJnZXQgKi9cbiAgQElucHV0KHsgYWxpYXM6ICdhY3Rpb25fdGFyZ2V0JyB9KSBhY3Rpb25UYXJnZXQ/OiBzdHJpbmc7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGxpbmsvYnV0dG9uIGlzIGNsaWNrZWQgKG1hcHMgdG8gb25DbGljaykgKi9cbiAgQE91dHB1dCgpIGFjdGlvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIG9uQ2xpY2soZXY6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmFjdGlvbkNsaWNrLmVtaXQoZXYpO1xuICB9XG5cbiAgZ2V0IGlzRXh0ZXJuYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uVGFyZ2V0ID09PSAnX2JsYW5rJztcbiAgfVxufVxuIl19