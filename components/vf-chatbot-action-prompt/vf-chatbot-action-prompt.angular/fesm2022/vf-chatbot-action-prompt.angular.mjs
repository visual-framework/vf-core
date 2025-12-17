import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

// vf-chatbot-action-prompt.angular
class VfChatbotActionPromptAngularComponent {
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

class VfChatbotActionPromptAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotActionPromptAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotActionPromptAngularModule, declarations: [VfChatbotActionPromptAngularComponent], exports: [VfChatbotActionPromptAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotActionPromptAngularModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotActionPromptAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfChatbotActionPromptAngularComponent
                    ],
                    imports: [],
                    exports: [
                        VfChatbotActionPromptAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-chatbot-action-prompt.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotActionPromptAngularComponent, VfChatbotActionPromptAngularModule };
//# sourceMappingURL=vf-chatbot-action-prompt.angular.mjs.map
