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
    class: string;
    quote: string;
    ngOnInit(): void;
    ngOnChanges(): void;
    setValues(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfBlockquoteAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfBlockquoteAngularComponent, "vf-blockquote", never, { "id": "id"; "html": "html"; "text": "text"; "blockquote_text": "blockquote_text"; "blockquote_author": "blockquote_author"; "blockquote_author_href": "blockquote_author_href"; "blockquote_author_details": "blockquote_author_details"; "blockquote_author_imageurl": "blockquote_author_imageurl"; "override_class": "override_class"; }, {}, never, never, false, never>;
}
