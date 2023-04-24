import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class VfButtonAngularComponent implements OnInit {
    theme: string;
    id: string | undefined;
    text: string;
    style: Array<'primary' | 'secondary' | 'tertiary'>;
    size: string | undefined;
    override_class: string;
    html: string;
    content: string;
    class: string;
    ngOnInit(): void;
    ngOnChanges(): void;
    setValues(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfButtonAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfButtonAngularComponent, "vf-button", never, { "theme": "theme"; "id": "id"; "text": "text"; "style": "style"; "size": "size"; "override_class": "override_class"; "html": "html"; }, {}, never, never, false, never>;
}
