import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardhistoryComponent } from './rewardhistory.component';

describe('RewardhistoryComponent', () => {
  let component: RewardhistoryComponent;
  let fixture: ComponentFixture<RewardhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
