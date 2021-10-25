// vf-button for Angular
// ---
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "a[vf-button], button[vf-button]",
  template: `
    <button
      class="vf-button"
      [ngClass]="{
        'vf-button--primary': primary,
        'vf-button--secondary': secondary && !primary,
        'vf-button--sm': small,
        'vf-button--tertiary': disabled
      }"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ["./vf-button.scss"]
})
export class VfButton implements OnInit {
  @Input() primary = false;
  @Input() secondary = true;
  @Input() small = false;
  @Input() disabled = false;

  constructor() {}

  ngOnInit(): void {}
}
