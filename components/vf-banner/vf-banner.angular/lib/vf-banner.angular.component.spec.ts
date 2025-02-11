import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfBannerAngularComponent } from './vf-banner.angular.component';
import { By } from '@angular/platform-browser';

declare global {
  interface Window {
    vfBanner: any;
  }
}

describe('VfBannerAngularComponent', () => {
  let component: VfBannerAngularComponent;
  let fixture: ComponentFixture<VfBannerAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfBannerAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfBannerAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display basic banner', () => {
    component.banner__type = 'basic';
    component.banner__message = 'Basic Banner Message';
    fixture.detectChanges();
    const bannerElement = fixture.debugElement.query(By.css('.vf-banner__content'));
    expect(bannerElement.nativeElement.textContent).toContain('Basic Banner Message');
  });

  it('should display inline banner with link', () => {
    component.banner__type = 'inline';
    component.banner__inline_href = 'http://example.com';
    fixture.detectChanges();
    const bannerElement = fixture.debugElement.query(By.css('.vf-banner--phase'));
    expect(bannerElement).toBeTruthy();
    const linkElement = fixture.debugElement.query(By.css('.vf-link'));
    expect(linkElement.nativeElement.href).toContain('http://example.com');
  });

  it('should display fixed banner with correct attributes', () => {
    component.banner__type = 'fixed';
    component.banner__text = 'Close notice';
    component.data_service_id = 'TestService';
    component.data_protection_version = '1.0';
    fixture.detectChanges();
    const bannerElement = fixture.debugElement.query(By.css('.vf-banner--fixed'));
    expect(bannerElement).toBeTruthy();
    expect(bannerElement.attributes['data-vf-js-banner-button-text']).toBe('Close notice');
    expect(bannerElement.attributes['data-vf-js-banner-cookie-name']).toBe('TestService');
    expect(bannerElement.attributes['data-vf-js-banner-cookie-version']).toBe('1.0');
  });

  it('should display top banner with correct attributes', () => {
    component.banner__type = 'top';
    fixture.detectChanges();
    const bannerElement = fixture.debugElement.query(By.css('.vf-banner--top'));
    expect(bannerElement).toBeTruthy();
    expect(bannerElement.attributes['data-vf-js-banner-button-text']).toBe('Close notice');
    expect(bannerElement.attributes['data-vf-js-banner-button-theme']).toBe('primary');
  });

  it('should set banner class based on variant', () => {
    component.banner__variant = 'banner__info';
    component.setValues();
    expect(component.bannerclass).toContain('vf-banner--info');

    component.banner__variant = 'banner__warning';
    component.setValues();
    expect(component.bannerclass).toContain('vf-banner--warning');

    component.banner__variant = 'banner__danger';
    component.setValues();
    expect(component.bannerclass).toContain('vf-banner--danger');

    component.banner__variant = 'banner__success';
    component.setValues();
    expect(component.bannerclass).toContain('vf-banner--success');
  });
});
