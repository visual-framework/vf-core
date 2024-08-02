import { Directive, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class VfTabsAngularDomChangeDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.domChange = new EventEmitter();
        const element = this.elementRef.nativeElement;
        var disableObserver = false;
        this.changes = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (!disableObserver) {
                    disableObserver = true;
                }
                this.domChange.emit(mutation);
            });
        });
        this.changes.observe(element, {
            attributes: true,
            childList: true,
            characterData: true
        });
    }
    ngOnDestroy() {
        this.changes.disconnect();
    }
}
VfTabsAngularDomChangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfTabsAngularDomChangeDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
VfTabsAngularDomChangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: VfTabsAngularDomChangeDirective, selector: "[domChange]", outputs: { domChange: "domChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: VfTabsAngularDomChangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domChange]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { domChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmYtdGFicy5hbmd1bGFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZmLXRhYnMuYW5ndWxhci9zcmMvbGliL3ZmLXRhYnMuYW5ndWxhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUt2RixNQUFNLE9BQU8sK0JBQStCO0lBTTFDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGbkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDOUMsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLFNBQTJCLEVBQUUsRUFBRTtZQUNoRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBd0IsRUFBRSxFQUFFO2dCQUUvQyxJQUFHLENBQUMsZUFBZSxFQUNqQjtvQkFDSSxlQUFlLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjtnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNELENBQUMsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzVCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsYUFBYSxFQUFFLElBQUk7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7OzZIQTlCVSwrQkFBK0I7aUhBQS9CLCtCQUErQjs0RkFBL0IsK0JBQStCO2tCQUgzQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4QjtpR0FLUSxTQUFTO3NCQURmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RvbUNoYW5nZV0nXG59KVxuZXhwb3J0IGNsYXNzIFZmVGFic0FuZ3VsYXJEb21DaGFuZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNoYW5nZXM6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBkb21DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHZhciBkaXNhYmxlT2JzZXJ2ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZXMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKSA9PiB7XG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IHtcblxuICAgICAgICBpZighZGlzYWJsZU9ic2VydmVyKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzYWJsZU9ic2VydmVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kb21DaGFuZ2UuZW1pdChtdXRhdGlvbilcbiAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5jaGFuZ2VzLm9ic2VydmUoZWxlbWVudCwge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlcy5kaXNjb25uZWN0KCk7XG4gIH1cbn1cbiJdfQ==