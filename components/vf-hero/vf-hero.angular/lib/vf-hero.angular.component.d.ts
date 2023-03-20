import { OnInit } from "@angular/core";
import * as i0 from "@angular/core";
export declare class VfHeroAngularComponent implements OnInit {
    vf_hero_image: string;
    vf_hero_image_size: string;
    vf_hero_kicker: string;
    vf_hero_heading: string;
    vf_hero_heading_href: string;
    vf_hero_subheading: string;
    vf_hero_text: string[];
    vf_hero_link_text: string;
    vf_hero_link_href: string;
    spacing: undefined | 200 | 400 | 500 | 600 | 800 | 1200 | 1600;
    id: string | undefined;
    modifier_class: string;
    vf_hero_heading_additional: string;
    class: string;
    style: string;
    vf_hero_link_innerhtml: string;
    ngOnInit(): void;
    ngOnChanges(): void;
    setValues(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VfHeroAngularComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VfHeroAngularComponent, "vf-hero", never, { "vf_hero_image": "vf_hero_image"; "vf_hero_image_size": "vf_hero_image_size"; "vf_hero_kicker": "vf_hero_kicker"; "vf_hero_heading": "vf_hero_heading"; "vf_hero_heading_href": "vf_hero_heading_href"; "vf_hero_subheading": "vf_hero_subheading"; "vf_hero_text": "vf_hero_text"; "vf_hero_link_text": "vf_hero_link_text"; "vf_hero_link_href": "vf_hero_link_href"; "spacing": "spacing"; "id": "id"; "modifier_class": "modifier_class"; "vf_hero_heading_additional": "vf_hero_heading_additional"; }, {}, never, never, false, never>;
}
