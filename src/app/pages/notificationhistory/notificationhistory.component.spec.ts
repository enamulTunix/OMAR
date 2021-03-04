import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationhistoryComponent } from './notificationhistory.component';

describe('NotificationhistoryComponent', () => {
  let component: NotificationhistoryComponent;
  let fixture: ComponentFixture<NotificationhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
