/*This is the  code which needs to be built as Angular library and published as npm module before it can be used in any Angular project */
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "vf-badge",
  template: `
    <a [attr.id] = "id !== undefined ? id : null" *ngIf="badge_href !== ''" [href]="badge_href" [class]="class">{{content}}</a>
    <span [attr.id] = "id !== undefined ? id : null" *ngIf="!badge_href || badge_href === null || badge_href === ''" [class]="class">{{content}}</span>
  `,
  styleUrls: []
})

export class VfBadgeAngularComponent implements OnInit {
  /* Initialize values based on input values */
  @Input() badge_href = '';
  @Input() theme = '';
  @Input() text = '';
  @Input() style = [];
  @Input() html = '';
  @Input() override_class = '';
  @Input() id: string | undefined;
  content =  '';
  class = 'vf-badge ';

  constructor() {}

  ngOnInit(): void {
    /* Set values ass per the input */
    this.content = this.html !== '' ? this.html : this.text;
    this.class += this.theme !== '' ? 'vf-badge--' + this.theme +  ' ' : '';
    /* Update class value if styles are received in input */
    if(this.style.length > 0) {
      this.style.forEach(style => {
        this.class += 'vf-badge--' + style +  ' ';
      });
    }
    /* Update class value if override style received in input */
    this.class += this.override_class !== '' ? '| ' + this.override_class : '';
  }
}
