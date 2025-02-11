import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfButtonAngularComponent } from './vf-button.angular.component';


describe('VfButtonAngularComponent', () => {
  let component: VfButtonAngularComponent;
  let fixture: ComponentFixture<VfButtonAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfButtonAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfButtonAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set content based on html input', () => {
    component.html = '<b>Button</b>';
    component.ngOnChanges();
    expect(component.content).toBe('<b>Button</b>');
  });

  it('should set content based on text input if html is empty', () => {
    component.text = 'Button';
    component.html = '';
    component.ngOnChanges();
    expect(component.content).toBe('Button');
  });

  it('should set class based on theme input', () => {
    component.theme = 'dark';
    component.ngOnChanges();
    expect(component.class).toContain('vf-button--dark');
  });

  it('should set class based on style input', () => {
    component.style = ['primary', 'secondary'];
    component.ngOnChanges();
    expect(component.class).toContain('vf-button--primary');
    expect(component.class).toContain('vf-button--secondary');
  });

  it('should set class based on size input', () => {
    component.size = 'large';
    component.ngOnChanges();
    expect(component.class).toContain('vf-button--large');
  });

  it('should set class based on override_class input', () => {
    component.override_class = 'custom-class';
    component.ngOnChanges();
    expect(component.class).toContain('| custom-class');
  });

  it('should set id attribute if id input is provided', () => {
    component.id = 'button-id';
    fixture.detectChanges();
    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.getAttribute('id')).toBe('button-id');
  });

  it('should not set id attribute if id input is not provided', () => {
    component.id = undefined;
    fixture.detectChanges();
    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.getAttribute('id')).toBeNull();
  });

  it('should update class when multiple inputs are provided', () => {
    component.theme = 'dark';
    component.style = ['primary'];
    component.size = 'large';
    component.override_class = 'custom-class';
    component.ngOnChanges();
    expect(component.class).toContain('vf-button--dark');
    expect(component.class).toContain('vf-button--primary');
    expect(component.class).toContain('vf-button--large');
    expect(component.class).toContain('| custom-class');
  });

  it('should update content and class when inputs change', () => {
    component.html = '<b>New Button</b>';
    component.theme = 'light';
    component.style = ['tertiary'];
    component.size = 'small';
    component.override_class = 'another-class';
    component.ngOnChanges();
    expect(component.content).toBe('<b>New Button</b>');
    expect(component.class).toContain('vf-button--light');
    expect(component.class).toContain('vf-button--tertiary');
    expect(component.class).toContain('vf-button--small');
    expect(component.class).toContain('| another-class');
  });
});
