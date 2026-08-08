import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfHeroAngularComponent } from './vf-hero.angular.component';
import { By } from '@angular/platform-browser';

describe('VfHeroAngularComponent', () => {
  let component: VfHeroAngularComponent;
  let fixture: ComponentFixture<VfHeroAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfHeroAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfHeroAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class and style based on inputs', () => {
    component.vf_hero_image = 'image.jpg';
    component.vf_hero_image_size = 'cover';
    component.spacing = 400;
    component.modifier_class = 'custom-class';
    component.ngOnInit();

    expect(component.class).toContain('vf-hero--400');
    expect(component.class).toContain('custom-class');
    expect(component.style).toContain('--vf-hero--bg-image: image.jpg');
    expect(component.style).toContain('--vf-hero--bg-image-size: cover');
  });

  it('should display vf_hero_kicker when provided', () => {
    component.vf_hero_kicker = 'Kicker Text';
    fixture.detectChanges();
    const kickerElement = fixture.debugElement.query(By.css('.vf-hero__kicker'));
    expect(kickerElement.nativeElement.innerHTML).toBe('Kicker Text');
  });

  it('should display vf_hero_heading with link when href is provided', () => {
    component.vf_hero_heading = 'Heading Text';
    component.vf_hero_heading_href = 'http://example.com';
    fixture.detectChanges();
    const headingLinkElement = fixture.debugElement.query(By.css('.vf-hero__heading_link'));
    expect(headingLinkElement.nativeElement.innerHTML).toBe('Heading Text');
    expect(headingLinkElement.nativeElement.getAttribute('href')).toBe('http://example.com');
  });

  it('should display vf_hero_subheading when provided', () => {
    component.vf_hero_subheading = 'Subheading Text';
    fixture.detectChanges();
    const subheadingElement = fixture.debugElement.query(By.css('.vf-hero__subheading'));
    expect(subheadingElement.nativeElement.innerHTML).toBe('Subheading Text');
  });

  it('should display vf_hero_text elements when provided', () => {
    component.vf_hero_text = ['Text 1', 'Text 2'];
    fixture.detectChanges();
    const textElements = fixture.debugElement.queryAll(By.css('.vf-hero__text'));
    expect(textElements.length).toBe(2);
    expect(textElements[0].nativeElement.innerHTML).toBe('Text 1');
    expect(textElements[1].nativeElement.innerHTML).toBe('Text 2');
  });

  it('should display vf_hero_link when href and text are provided', () => {
    component.vf_hero_link_text = 'Link Text';
    component.vf_hero_link_href = 'http://example.com';
    fixture.detectChanges();
    const linkElement = fixture.debugElement.query(By.css('.vf-hero__link'));
    expect(linkElement.nativeElement.innerHTML).toContain('Link Text');
    expect(linkElement.nativeElement.getAttribute('href')).toBe('http://example.com');
  });

  it('should render responsive media with high priority defaults', () => {
    component.vf_hero_image_mobile_src = '/hero-mobile-360x200.jpg';
    component.vf_hero_image_src = '/hero-desktop-1920x1080.jpg';
    component.vf_hero_image_large_src = '/hero-large-2560x1440.jpg';
    fixture.detectChanges();

    expect(component.class).toContain('vf-hero--has-media');

    const imageElement = fixture.debugElement.query(By.css('.vf-hero__image'));
    expect(imageElement.nativeElement.getAttribute('src')).toBe('/hero-desktop-1920x1080.jpg');
    expect(imageElement.nativeElement.getAttribute('fetchpriority')).toBe('high');
    expect(imageElement.nativeElement.getAttribute('loading')).toBe('eager');
    expect(imageElement.nativeElement.getAttribute('width')).toBe('1920');
    expect(imageElement.nativeElement.getAttribute('height')).toBe('1080');
    expect(imageElement.nativeElement.getAttribute('sizes')).toBe('(max-width: 767px) 100vw, 1920px');
  });

  it('should use the default sizes hint when one is not provided', () => {
    component.vf_hero_image_mobile_src = '/hero-mobile-360x200.jpg';
    component.vf_hero_image_src = '/hero-desktop-1920x1080.jpg';
    fixture.detectChanges();

    const imageElement = fixture.debugElement.query(By.css('.vf-hero__image'));
    expect(imageElement.nativeElement.getAttribute('sizes')).toBe('(max-width: 767px) 100vw, 1920px');
  });
});
