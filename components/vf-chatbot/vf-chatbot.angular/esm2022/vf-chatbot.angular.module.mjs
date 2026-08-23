import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VfChatbotAngularComponent } from './vf-chatbot.angular.component';
import { VfChatbotFabAngularModule } from 'vf-chatbot-fab.angular';
// import { VfChatbotStandaloneAngularModule } from 'vf-chatbot-standalone.angular';
import { VfChatbotSelectorAngularModule } from 'vf-chatbot-selector.angular';
import { VfChatbotWelcomeAngularModule } from 'vf-chatbot-welcome.angular';
import { VfChatbotPromptAngularModule } from 'vf-chatbot-prompt.angular';
import { VfChatbotDialogAngularModule } from 'vf-chatbot-dialog.angular';
import * as i0 from "@angular/core";
export class VfChatbotAngularModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, declarations: [VfChatbotAngularComponent], imports: [CommonModule,
            FormsModule,
            VfChatbotFabAngularModule,
            VfChatbotSelectorAngularModule,
            VfChatbotWelcomeAngularModule,
            VfChatbotPromptAngularModule,
            VfChatbotDialogAngularModule], exports: [VfChatbotAngularComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: VfChatbotAngularModule, imports: [CommonModule,
            FormsModule,
            VfChatbotFabAngularModule,
            VfChatbotSelectorAngularModule,
            VfChatbotWelcomeAngularModule,
            VfChatbotPromptAngularModule,
            VfChatbotDialogAngularModule] }); }
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
                        VfChatbotSelectorAngularModule,
                        VfChatbotWelcomeAngularModule,
                        VfChatbotPromptAngularModule,
                        VfChatbotDialogAngularModule,
                        // VfChatbotStandaloneAngularModule
                    ],
                    exports: [
                        VfChatbotAngularComponent
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA,
                        NO_ERRORS_SCHEMA
                    ]
                }]
        }] });
export * from './vf-chatbot.angular.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtY2hhdGJvdC5hbmd1bGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3ZmLWNoYXRib3QuYW5ndWxhci9zcmMvbGliL3ZmLWNoYXRib3QuYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25FLG9GQUFvRjtBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUF3QnpFLE1BQU0sT0FBTyxzQkFBc0I7K0dBQXRCLHNCQUFzQjtnSEFBdEIsc0JBQXNCLGlCQXBCL0IseUJBQXlCLGFBR3pCLFlBQVk7WUFDWixXQUFXO1lBQ1gseUJBQXlCO1lBQ3pCLDhCQUE4QjtZQUM5Qiw2QkFBNkI7WUFDN0IsNEJBQTRCO1lBQzVCLDRCQUE0QixhQUk1Qix5QkFBeUI7Z0hBT2hCLHNCQUFzQixZQWpCL0IsWUFBWTtZQUNaLFdBQVc7WUFDWCx5QkFBeUI7WUFDekIsOEJBQThCO1lBQzlCLDZCQUE2QjtZQUM3Qiw0QkFBNEI7WUFDNUIsNEJBQTRCOzs0RkFXbkIsc0JBQXNCO2tCQXRCbEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLHlCQUF5Qjt3QkFDekIsOEJBQThCO3dCQUM5Qiw2QkFBNkI7d0JBQzdCLDRCQUE0Qjt3QkFDNUIsNEJBQTRCO3dCQUM1QixtQ0FBbUM7cUJBQ3BDO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLGdCQUFnQjtxQkFDakI7aUJBQ0Y7O0FBR0QsY0FBYyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBWZkNoYXRib3RBbmd1bGFyQ29tcG9uZW50IH0gZnJvbSAnLi92Zi1jaGF0Ym90LmFuZ3VsYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFZmQ2hhdGJvdEZhYkFuZ3VsYXJNb2R1bGUgfSBmcm9tICd2Zi1jaGF0Ym90LWZhYi5hbmd1bGFyJztcbi8vIGltcG9ydCB7IFZmQ2hhdGJvdFN0YW5kYWxvbmVBbmd1bGFyTW9kdWxlIH0gZnJvbSAndmYtY2hhdGJvdC1zdGFuZGFsb25lLmFuZ3VsYXInO1xuaW1wb3J0IHsgVmZDaGF0Ym90U2VsZWN0b3JBbmd1bGFyTW9kdWxlIH0gZnJvbSAndmYtY2hhdGJvdC1zZWxlY3Rvci5hbmd1bGFyJztcbmltcG9ydCB7IFZmQ2hhdGJvdFdlbGNvbWVBbmd1bGFyTW9kdWxlIH0gZnJvbSAndmYtY2hhdGJvdC13ZWxjb21lLmFuZ3VsYXInO1xuaW1wb3J0IHsgVmZDaGF0Ym90UHJvbXB0QW5ndWxhck1vZHVsZSB9IGZyb20gJ3ZmLWNoYXRib3QtcHJvbXB0LmFuZ3VsYXInO1xuaW1wb3J0IHsgVmZDaGF0Ym90RGlhbG9nQW5ndWxhck1vZHVsZSB9IGZyb20gJ3ZmLWNoYXRib3QtZGlhbG9nLmFuZ3VsYXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBWZkNoYXRib3RBbmd1bGFyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVmZDaGF0Ym90RmFiQW5ndWxhck1vZHVsZSxcbiAgICBWZkNoYXRib3RTZWxlY3RvckFuZ3VsYXJNb2R1bGUsXG4gICAgVmZDaGF0Ym90V2VsY29tZUFuZ3VsYXJNb2R1bGUsXG4gICAgVmZDaGF0Ym90UHJvbXB0QW5ndWxhck1vZHVsZSxcbiAgICBWZkNoYXRib3REaWFsb2dBbmd1bGFyTW9kdWxlLFxuICAgIC8vIFZmQ2hhdGJvdFN0YW5kYWxvbmVBbmd1bGFyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBWZkNoYXRib3RBbmd1bGFyQ29tcG9uZW50XG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLFxuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZkNoYXRib3RBbmd1bGFyTW9kdWxlIHsgfVxuXG5leHBvcnQgKiBmcm9tICcuL3ZmLWNoYXRib3QuYW5ndWxhci5jb21wb25lbnQnO1xuIl19