import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoreventComponent } from './vendorevent.component';

describe('VendoreventComponent', () => {
  let component: VendoreventComponent;
  let fixture: ComponentFixture<VendoreventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendoreventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoreventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
