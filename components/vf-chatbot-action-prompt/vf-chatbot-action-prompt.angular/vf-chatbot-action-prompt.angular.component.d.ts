import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfChatbotActionPromptAngularComponent {
    /** Equivalent to action_url */
    actionUrl?: string;
    /** Equivalent to action_text */
    actionText: string;
    /** Equivalent to action_target */
    actionTarget?: string;
    /** Emits when the link/button is clicked (maps to onClick) */
    actionClick: EventEmitter<MouseEvent>;
    onClick(ev: MouseEvent): void;
    get isExternal(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotActionPromptAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotActionPromptAngularComponent, "vf-chatbot-action-prompt", never, { "actionUrl": { "alias": "action_url"; "required": false; }; "actionText": { "alias": "action_text"; "required": false; }; "actionTarget": { "alias": "action_target"; "required": false; }; }, { "actionClick": "actionClick"; }, never, never, false, never>;
}
