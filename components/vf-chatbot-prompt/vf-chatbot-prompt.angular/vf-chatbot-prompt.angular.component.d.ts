import * as i0 from "@angular/core";
export declare class VfChatbotPromptAngularComponent {
    type: string;
    isLoading: boolean;
    avatar: any;
    content: string;
    sources: any;
    prompts: any;
    allowFeedback: boolean;
    shouldShowAvatarName(position: string): boolean;
    hasAvatarImage(): boolean;
    messageClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfChatbotPromptAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfChatbotPromptAngularComponent, "vf-chatbot-prompt", never, { "type": { "alias": "type"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "avatar": { "alias": "avatar"; "required": false; }; "content": { "alias": "content"; "required": false; }; "sources": { "alias": "sources"; "required": false; }; "prompts": { "alias": "prompts"; "required": false; }; "allowFeedback": { "alias": "allowFeedback"; "required": false; }; }, {}, never, never, false, never>;
}
export * from './vf-chatbot-prompt.angular.module';
