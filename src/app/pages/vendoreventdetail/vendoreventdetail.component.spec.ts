import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoreventdetailComponent } from './vendoreventdetail.component';

describe('VendoreventdetailComponent', () => {
  let component: VendoreventdetailComponent;
  let fixture: ComponentFixture<VendoreventdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoreventdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoreventdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
