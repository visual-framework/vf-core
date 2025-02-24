import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfBlockquoteAngularComponent } from './vf-blockquote.angular.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('VfBlockquoteAngularComponent', () => {
  let component: VfBlockquoteAngularComponent;
  let fixture: ComponentFixture<VfBlockquoteAngularComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VfBlockquoteAngularComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VfBlockquoteAngularComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct class based on modifier and override_class', () => {
    component.modifier = 'small';
    component.override_class = ' custom-class';
    component.setValues();
    expect(component.class).toBe('vf-blockquote-small custom-class');
  });

  it('should set the correct author image class based on modifier', () => {
    component.modifier = 'small';
    component.setValues();
    expect(component.authorimgclass).toBe('vf-profile__image vf-profile--medium vf-u-margin__right--600');
  });

  it('should set the correct quote based on blockquote_text, html, and text', () => {
    component.blockquote_text = 'Blockquote Text';
    component.html = '<p>HTML Content</p>';
    component.text = 'Plain Text';
    component.setValues();
    expect(component.quote).toBe('Blockquote Text');

    component.blockquote_text = '';
    component.setValues();
    expect(component.quote).toBe('<p>HTML Content</p>');

    component.html = '';
    component.setValues();
    expect(component.quote).toBe('Plain Text');
  });

  it('should render the blockquote with the correct id and class', () => {
    component.id = 'test-id';
    component.class = 'test-class';
    fixture.detectChanges();
    const blockquote = debugElement.query(By.css('blockquote'));
    expect(blockquote.attributes['id']).toBe('test-id');
    expect(blockquote.attributes['class']).toContain('test-class');
  });

  it('should render the author image if blockquote_author_imageurl is provided', () => {
    component.blockquote_author_imageurl = 'http://example.com/image.jpg';
    fixture.detectChanges();
    const img = debugElement.query(By.css('img'));
    expect(img).toBeTruthy();
    expect(img.attributes['src']).toBe('http://example.com/image.jpg');
  });

  it('should render the author link if blockquote_author_href is provided', () => {
    component.blockquote_author_href = 'http://example.com';
    component.blockquote_author = 'Author Name';
    fixture.detectChanges();
    const authorLink = debugElement.query(By.css('.vf-blockquote_author__link'));
    expect(authorLink).toBeTruthy();
    expect(authorLink.attributes['href']).toBe('http://example.com');
    expect(authorLink.nativeElement.innerHTML).toBe('Author Name');
  });

  it('should render the author details if blockquote_author_details is provided', () => {
    component.blockquote_author_details = 'Author Details';
    fixture.detectChanges();
    const authorDetails = debugElement.query(By.css('.vf-blockquote_author__details'));
    expect(authorDetails).toBeTruthy();
    expect(authorDetails.nativeElement.textContent).toBe('Author Details');
  });
});
