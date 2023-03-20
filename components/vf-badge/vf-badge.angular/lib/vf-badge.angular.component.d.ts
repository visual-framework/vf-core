import { OnInit } from "@angular/core";
import * as i0 from "@angular/core";
export declare class VfBadgeAngularComponent implements OnInit {
    badge_href: string;
    theme: string;
    text: string;
    style: Array<'primary' | 'secondary' | 'tertiary'>;
    html: string;
    override_class: string;
    id: string | undefined;
    content: string;
    class: string;
    ngOnInit(): void;
    ngOnChanges(): void;
    setValues(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfBadgeAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfBadgeAngularComponent, "vf-badge", never, { "badge_href": "badge_href"; "theme": "theme"; "text": "text"; "style": "style"; "html": "html"; "override_class": "override_class"; "id": "id"; }, {}, never, never, false, never>;
}
