import * as i0 from '@angular/core';
import { Component, Input, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i2 from 'vf-chatbot-fab.angular';
import { VfChatbotFabAngularModule } from 'vf-chatbot-fab.angular';
import * as i3 from 'vf-chatbot-modal.angular';
import { VfChatbotModalAngularModule } from 'vf-chatbot-modal.angular';
import * as i4 from 'vf-chatbot-standalone.angular';
import { VfChatbotStandaloneAngularModule } from 'vf-chatbot-standalone.angular';

class VfChatbotAngularComponent {
    ngAfterViewInit() {
        // Initialize chatbot scripts after view loads
        if (this.config?.type === 'modal' && this.chatbotRef?.nativeElement) {
        }
        else if (this.config?.type === 'standalone' &&
            this.standaloneRef?.nativeElement) {
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotAngularComponent, selector: "vf-chatbot", inputs: { config: "config" }, viewQueries: [{ propertyName: "chatbotRef", first: true, predicate: ["chatbotRef"], descendants: true }, { propertyName: "standaloneRef", first: true, predicate: ["standaloneRef"], descendants: true }], ngImport: i0, template: `
    <!-- Modal type chatbot -->
    <div
      *ngIf="config?.type === 'modal'; else standaloneTemplate"
      #chatbotRef
      class="vf-chatbot"
      data-vf-js-chatbot
    >
      
      <vf-chatbot-fab 
      ></vf-chatbot-fab>

      <vf-chatbot-modal 
        [config]="config"
      ></vf-chatbot-modal>
    </div>

    <!-- Standalone chatbot -->
    <ng-template #standaloneTemplate>
      <div #standaloneRef>
        <vf-chatbot-standalone [config]="config"></vf-chatbot-standalone>
      </div>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.VfChatbotFabAngularComponent, selector: "vf-chatbot-fab", inputs: ["notificationCount", "isInactive"] }, { kind: "component", type: i3.VfChatbotModalAngularComponent, selector: "vf-chatbot-modal", inputs: ["config", "messages", "sources", "prompts", "inputValue"], outputs: ["onSendMessage", "onInputChange", "onFeedback", "onDialogConfirm", "onDialogCancel"] }, { kind: "component", type: i4.VfChatbotStandaloneAngularComponent, selector: "vf-chatbot-standalone", inputs: ["config", "messages", "sources", "prompts", "inputValue"], outputs: ["onSendMessage", "onInputChange", "onFeedback", "onDialogConfirm", "onDialogCancel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot',
                    template: `
    <!-- Modal type chatbot -->
    <div
      *ngIf="config?.type === 'modal'; else standaloneTemplate"
      #chatbotRef
      class="vf-chatbot"
      data-vf-js-chatbot
    >
      
      <vf-chatbot-fab 
      ></vf-chatbot-fab>

      <vf-chatbot-modal 
        [config]="config"
      ></vf-chatbot-modal>
    </div>

    <!-- Standalone chatbot -->
    <ng-template #standaloneTemplate>
      <div #standaloneRef>
        <vf-chatbot-standalone [config]="config"></vf-chatbot-standalone>
      </div>
    </ng-template>
  `,
                }]
        }], propDecorators: { config: [{
                type: Input
            }], chatbotRef: [{
                type: ViewChild,
                args: ['chatbotRef', { static: false }]
            }], standaloneRef: [{
                type: ViewChild,
                args: ['standaloneRef', { static: false }]
            }] } });

class VfChatbotAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, declarations: [VfChatbotAngularComponent], imports: [CommonModule,
            FormsModule,
            VfChatbotFabAngularModule,
            VfChatbotModalAngularModule,
            VfChatbotStandaloneAngularModule], exports: [VfChatbotAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, imports: [CommonModule,
            FormsModule,
            VfChatbotFabAngularModule,
            VfChatbotModalAngularModule,
            VfChatbotStandaloneAngularModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfChatbotAngularComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        VfChatbotFabAngularModule,
                        VfChatbotModalAngularModule,
                        VfChatbotStandaloneAngularModule
                    ],
                    exports: [
                        VfChatbotAngularComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of vf-chatbot.angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotAngularComponent, VfChatbotAngularModule };
//# sourceMappingURL=vf-chatbot.angular.mjs.map
