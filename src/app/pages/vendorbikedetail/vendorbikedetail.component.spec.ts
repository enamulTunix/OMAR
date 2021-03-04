import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorbikedetailComponent } from './vendorbikedetail.component';

describe('VendorbikedetailComponent', () => {
  let component: VendorbikedetailComponent;
  let fixture: ComponentFixture<VendorbikedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorbikedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorbikedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
