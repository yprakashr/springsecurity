import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledataconfirmboxComponent } from './scheduledataconfirmbox.component';

describe('ScheduledataconfirmboxComponent', () => {
  let component: ScheduledataconfirmboxComponent;
  let fixture: ComponentFixture<ScheduledataconfirmboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledataconfirmboxComponent]
    });
    fixture = TestBed.createComponent(ScheduledataconfirmboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
