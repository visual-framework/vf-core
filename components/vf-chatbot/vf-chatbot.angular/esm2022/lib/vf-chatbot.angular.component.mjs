import { Component, Input, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "vf-chatbot-fab.angular";
import * as i3 from "vf-chatbot-modal.angular";
import * as i4 from "vf-chatbot-standalone.angular";
export class VfChatbotAngularComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC5hbmd1bGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZmLWNoYXRib3QuYW5ndWxhci9zcmMvbGliL3ZmLWNoYXRib3QuYW5ndWxhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFnQ3ZCLE1BQU0sT0FBTyx5QkFBeUI7SUFNcEMsZUFBZTtRQUNiLDhDQUE4QztRQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxDQUFDO1FBRXRFLENBQUM7YUFBTSxJQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLLFlBQVk7WUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQ2pDLENBQUM7UUFFSCxDQUFDO0lBQ0gsQ0FBQzsrR0FoQlUseUJBQXlCO21HQUF6Qix5QkFBeUIsMlJBekIxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QlQ7OzRGQUVVLHlCQUF5QjtrQkEzQnJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QlQ7aUJBQ0Y7OEJBRVUsTUFBTTtzQkFBZCxLQUFLO2dCQUVzQyxVQUFVO3NCQUFyRCxTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBQ0ssYUFBYTtzQkFBM0QsU0FBUzt1QkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmYtY2hhdGJvdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSBNb2RhbCB0eXBlIGNoYXRib3QgLS0+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJjb25maWc/LnR5cGUgPT09ICdtb2RhbCc7IGVsc2Ugc3RhbmRhbG9uZVRlbXBsYXRlXCJcbiAgICAgICNjaGF0Ym90UmVmXG4gICAgICBjbGFzcz1cInZmLWNoYXRib3RcIlxuICAgICAgZGF0YS12Zi1qcy1jaGF0Ym90XG4gICAgPlxuICAgICAgXG4gICAgICA8dmYtY2hhdGJvdC1mYWIgXG4gICAgICA+PC92Zi1jaGF0Ym90LWZhYj5cblxuICAgICAgPHZmLWNoYXRib3QtbW9kYWwgXG4gICAgICAgIFtjb25maWddPVwiY29uZmlnXCJcbiAgICAgID48L3ZmLWNoYXRib3QtbW9kYWw+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIFN0YW5kYWxvbmUgY2hhdGJvdCAtLT5cbiAgICA8bmctdGVtcGxhdGUgI3N0YW5kYWxvbmVUZW1wbGF0ZT5cbiAgICAgIDxkaXYgI3N0YW5kYWxvbmVSZWY+XG4gICAgICAgIDx2Zi1jaGF0Ym90LXN0YW5kYWxvbmUgW2NvbmZpZ109XCJjb25maWdcIj48L3ZmLWNoYXRib3Qtc3RhbmRhbG9uZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFZmQ2hhdGJvdEFuZ3VsYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XG5cbiAgQFZpZXdDaGlsZCgnY2hhdGJvdFJlZicsIHsgc3RhdGljOiBmYWxzZSB9KSBjaGF0Ym90UmVmPzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc3RhbmRhbG9uZVJlZicsIHsgc3RhdGljOiBmYWxzZSB9KSBzdGFuZGFsb25lUmVmPzogRWxlbWVudFJlZjtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBjaGF0Ym90IHNjcmlwdHMgYWZ0ZXIgdmlldyBsb2Fkc1xuICAgIGlmICh0aGlzLmNvbmZpZz8udHlwZSA9PT0gJ21vZGFsJyAmJiB0aGlzLmNoYXRib3RSZWY/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIFxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLmNvbmZpZz8udHlwZSA9PT0gJ3N0YW5kYWxvbmUnICYmXG4gICAgICB0aGlzLnN0YW5kYWxvbmVSZWY/Lm5hdGl2ZUVsZW1lbnRcbiAgICApIHtcbiAgICAgIFxuICAgIH1cbiAgfVxufVxuIl19