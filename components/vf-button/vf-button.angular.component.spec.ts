// vf-button for Angular
// ---
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { VfButton } from "./vf-button.angular.component.ts";

describe("ButtonComponent", () => {
  let component: VfButton;
  let fixture: ComponentFixture<VfButton>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [VfButton]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(VfButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
