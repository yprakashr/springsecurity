import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleconComponent } from './schedulecon.component';

describe('SampleComponent', () => {
  let component: ScheduleconComponent;
  let fixture: ComponentFixture<ScheduleconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleconComponent]
    });
    fixture = TestBed.createComponent(ScheduleconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
