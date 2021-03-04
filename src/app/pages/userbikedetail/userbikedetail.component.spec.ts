import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbikedetailComponent } from './userbikedetail.component';

describe('UserbikedetailComponent', () => {
  let component: UserbikedetailComponent;
  let fixture: ComponentFixture<UserbikedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbikedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbikedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
