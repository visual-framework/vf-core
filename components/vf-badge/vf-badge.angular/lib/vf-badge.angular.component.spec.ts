import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfBadgeAngularComponent } from './vf-badge.angular.component';

describe('VfBadgeAngularComponent', () => {
  let component: VfBadgeAngularComponent;
  let fixture: ComponentFixture<VfBadgeAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfBadgeAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfBadgeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set content based on html input', () => {
    component.html = '<b>Test HTML</b>';
    component.text = 'Test Text';
    component.ngOnInit();
    expect(component.content).toBe('<b>Test HTML</b>');
  });

  it('should set content based on text input if html is empty', () => {
    component.html = '';
    component.text = 'Test Text';
    component.ngOnInit();
    expect(component.content).toBe('Test Text');
  });

  it('should set class based on theme input', () => {
    component.theme = 'dark';
    component.ngOnInit();
    expect(component.class).toContain('vf-badge--dark');
  });

  it('should set class based on style input', () => {
    component.style = ['primary', 'secondary'];
    component.ngOnInit();
    expect(component.class).toContain('vf-badge--primary');
    expect(component.class).toContain('vf-badge--secondary');
  });

  it('should set class based on override_class input', () => {
    component.override_class = 'custom-class';
    component.ngOnInit();
    expect(component.class).toContain('| custom-class');
  });

  it('should set id attribute in anchor tag if id input is provided', () => {
    component.badge_href = 'http://example.com';
    component.id = 'test-id-a';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    console.log(compiled);
    expect(compiled.querySelector('a')?.getAttribute('id')).toBe('test-id-a');
  });

  it('should set id attribute in span tag if id input is provided', () => {
    component.badge_href = '';
    component.id = 'test-id-span';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span')?.getAttribute('id')).toBe('test-id-span');
  });

  it('should render a link if badge_href is provided', () => {
    component.badge_href = 'http://example.com';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a')).toBeTruthy();
    expect(compiled.querySelector('span')).toBeFalsy();
  });

  it('should render a span if badge_href is not provided', () => {
    component.badge_href = '';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span')).toBeTruthy();
    expect(compiled.querySelector('a')).toBeFalsy();
  });
});
