import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfBlockquoteAngularComponent implements OnInit {
    id: string | undefined;
    html: string;
    text: string;
    blockquote_text: string;
    blockquote_author: string;
    blockquote_author_href: string;
    blockquote_author_details: string;
    blockquote_author_imageurl: string;
    override_class: string;
    modifier: string;
    class: string;
    authorimgclass: string;
    quote: string;
    ngOnInit(): void;
    ngOnChanges(): void;
    setValues(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfBlockquoteAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfBlockquoteAngularComponent, "vf-blockquote", never, { "id": { "alias": "id"; "required": false; }; "html": { "alias": "html"; "required": false; }; "text": { "alias": "text"; "required": false; }; "blockquote_text": { "alias": "blockquote_text"; "required": false; }; "blockquote_author": { "alias": "blockquote_author"; "required": false; }; "blockquote_author_href": { "alias": "blockquote_author_href"; "required": false; }; "blockquote_author_details": { "alias": "blockquote_author_details"; "required": false; }; "blockquote_author_imageurl": { "alias": "blockquote_author_imageurl"; "required": false; }; "override_class": { "alias": "override_class"; "required": false; }; "modifier": { "alias": "modifier"; "required": false; }; }, {}, never, never, false, never>;
}
