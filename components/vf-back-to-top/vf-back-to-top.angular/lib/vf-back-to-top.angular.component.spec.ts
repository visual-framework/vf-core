import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VfBackToTopAngularComponent } from './vf-back-to-top.angular.component';

describe('VfBackToTopAngularComponent', () => {
    let component: VfBackToTopAngularComponent;
    let fixture: ComponentFixture<VfBackToTopAngularComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VfBackToTopAngularComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VfBackToTopAngularComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display default text when no input text is provided', () => {
        component.text = undefined;
        component.ngOnChanges();
        fixture.detectChanges();
        const buttonElement = fixture.debugElement.query(By.css('a')).nativeElement;
        expect(buttonElement.textContent.trim()).toBe('Back to top');
    });

    it('should display provided text', () => {
        const testText = 'Scroll Up';
        component.text = testText;
        component.ngOnChanges();
        fixture.detectChanges();
        const buttonElement = fixture.debugElement.query(By.css('a')).nativeElement;
        expect(buttonElement.textContent.trim()).toBe(testText);
    });

    it('should set href attribute correctly when scrollToId is provided', () => {
        const testId = 'section1';
        component.scrollToId = testId;
        fixture.detectChanges();
        const buttonElement = fixture.debugElement.query(By.css('a')).nativeElement;
        expect(buttonElement.getAttribute('href')).toBe(`#${testId}`);
    });

    it('should set vf-back-top--floating attribute when type is floating', () => {
        component.type = 'floating';
        fixture.detectChanges();
        const divElement = fixture.debugElement.query(By.css('div')).nativeElement;
        expect(divElement.getAttribute('vf-back-top--floating')).toBe('');
    });

    it('should not set vf-back-top--floating attribute when type is not floating', () => {
        component.type = 'fixed';
        fixture.detectChanges();
        const divElement = fixture.debugElement.query(By.css('div')).nativeElement;
        expect(divElement.getAttribute('vf-back-top--floating')).toBeNull();
    });
});
