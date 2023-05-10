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
});
