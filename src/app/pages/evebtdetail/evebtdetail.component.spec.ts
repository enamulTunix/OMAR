import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvebtdetailComponent } from './evebtdetail.component';

describe('EvebtdetailComponent', () => {
  let component: EvebtdetailComponent;
  let fixture: ComponentFixture<EvebtdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvebtdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvebtdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
