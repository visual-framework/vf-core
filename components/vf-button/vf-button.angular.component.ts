import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vf-button',
  template: `
    <button [attr.id] = "id !== undefined ? id : null" [class]="class" [innerHTML]="content"></button>
  `,
  styles: []
})
export class VfButtonAngularComponent implements OnInit {
  /*  Initialize values based on input values for button*/
  @Input() theme  = '';
  @Input() id:  string | undefined;
  @Input() text = '';
  @Input() style: Array<'primary' | 'secondary' | 'tertiary'> = [];
  @Input() size: string | undefined;
  @Input() override_class = '';
  @Input() html = '';

  content =  '';
  class = 'vf-button ';

  ngOnInit(): void {
    //Initialize something
  }

  ngOnChanges(): void {
    this.setValues();
  }

  /* Set values as per input and updated changes */
  setValues(): void {

    /* Set values ass per the input */
    this.content = this.html !== '' ? this.html : this.text;
    this.class += this.theme !== '' ? 'vf-button--' + this.theme +  ' ' : '';
    /* Update class value if styles are received in input */
    if(this.style.length > 0) {
      this.style.forEach(style => {
        this.class += 'vf-button--' + style +  ' ';
      });
    }
    /* Update class value if size is received in input */
    if(this.size !== undefined) {
      this.class += 'vf-button--' + this.size +  ' ';
    }
    /* Update class value if override style received in input */
    this.class += this.override_class !== '' ? '| ' + this.override_class : '';
  }
}
