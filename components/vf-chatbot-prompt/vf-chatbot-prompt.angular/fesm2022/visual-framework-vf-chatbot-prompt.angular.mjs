import * as i0 from '@angular/core';
import { NgModule, Component, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

class VfChatbotPromptAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotPromptAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotPromptAngularModule, declarations: [VfChatbotPromptAngularComponent], imports: [CommonModule,
            FormsModule], exports: [VfChatbotPromptAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotPromptAngularModule, imports: [CommonModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotPromptAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VfChatbotPromptAngularComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [
                        VfChatbotPromptAngularComponent
                    ]
                }]
        }] });

class VfChatbotPromptAngularComponent {
    constructor() {
        this.type = '';
        this.isLoading = false;
        this.avatar = {};
        this.content = '';
        this.sources = '';
        this.prompts = '';
        this.allowFeedback = true;
    }
    shouldShowAvatarName(position) {
        return this.avatar?.name && this.type === position;
    }
    hasAvatarImage() {
        return !!this.avatar?.src;
    }
    messageClasses() {
        let classes = `vf-chatbot-message vf-chatbot-message--${this.type} vf-u-margin__top--400`;
        if (this.isLoading) {
            classes += ' vf-chatbot-message--loading';
        }
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotPromptAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: VfChatbotPromptAngularComponent, selector: "vf-chatbot-prompt", inputs: { type: "type", isLoading: "isLoading", avatar: "avatar", content: "content", sources: "sources", prompts: "prompts", allowFeedback: "allowFeedback" }, ngImport: i0, template: `
    <div [ngClass]="messageClasses()">
      
      <!-- Avatar Section -->
      <div class="vf-chatbot-message__avatar vf-u-margin__bottom--200">

        <!-- User Avatar Name -->
        <span 
          class="vf-chatbot-message__avatar-name" 
          *ngIf="shouldShowAvatarName('user')">
          {{ avatar?.name }}
        </span>

        <!-- Avatar Image -->
        <img 
          *ngIf="hasAvatarImage()" 
          [src]="avatar?.src" 
          [alt]="avatar?.alt" />

        <!-- Assistant Avatar Name -->
        <span 
          class="vf-chatbot-message__avatar-name" 
          *ngIf="shouldShowAvatarName('assistant')">
          {{ avatar?.name }}
        </span>
      </div>

      <!-- Message Content -->
      <div class="vf-chatbot-message__content vf-u-padding--200">

        <!-- Loading Dots (keep in DOM so external JS can toggle visibility) -->
        <div class="vf-chatbot-message__content-loading-dots" aria-label="Loading" role="status" *ngIf="isLoading">
        <span class="vf-chatbot-message__dot"></span>
        <span class="vf-chatbot-message__dot"></span>
        <span class="vf-chatbot-message__dot"></span>
      </div>

        <!-- HTML Content -->
        <div 
          class="vf-chatbot-message__content-prompt vf-u-padding__left--200 vf-u-padding__right--200"
          [innerHTML]="content">
        </div>
      </div>
      
    </div>
    
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotPromptAngularComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'vf-chatbot-prompt',
                    template: `
    <div [ngClass]="messageClasses()">
      
      <!-- Avatar Section -->
      <div class="vf-chatbot-message__avatar vf-u-margin__bottom--200">

        <!-- User Avatar Name -->
        <span 
          class="vf-chatbot-message__avatar-name" 
          *ngIf="shouldShowAvatarName('user')">
          {{ avatar?.name }}
        </span>

        <!-- Avatar Image -->
        <img 
          *ngIf="hasAvatarImage()" 
          [src]="avatar?.src" 
          [alt]="avatar?.alt" />

        <!-- Assistant Avatar Name -->
        <span 
          class="vf-chatbot-message__avatar-name" 
          *ngIf="shouldShowAvatarName('assistant')">
          {{ avatar?.name }}
        </span>
      </div>

      <!-- Message Content -->
      <div class="vf-chatbot-message__content vf-u-padding--200">

        <!-- Loading Dots (keep in DOM so external JS can toggle visibility) -->
        <div class="vf-chatbot-message__content-loading-dots" aria-label="Loading" role="status" *ngIf="isLoading">
        <span class="vf-chatbot-message__dot"></span>
        <span class="vf-chatbot-message__dot"></span>
        <span class="vf-chatbot-message__dot"></span>
      </div>

        <!-- HTML Content -->
        <div 
          class="vf-chatbot-message__content-prompt vf-u-padding__left--200 vf-u-padding__right--200"
          [innerHTML]="content">
        </div>
      </div>
      
    </div>
    
  `
                }]
        }], propDecorators: { type: [{
                type: Input
            }], isLoading: [{
                type: Input
            }], avatar: [{
                type: Input
            }], content: [{
                type: Input
            }], sources: [{
                type: Input
            }], prompts: [{
                type: Input
            }], allowFeedback: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { VfChatbotPromptAngularComponent, VfChatbotPromptAngularModule };
//# sourceMappingURL=visual-framework-vf-chatbot-prompt.angular.mjs.map
