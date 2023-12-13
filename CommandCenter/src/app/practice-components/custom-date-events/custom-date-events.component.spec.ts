import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDateEventsComponent } from './custom-date-events.component';

describe('CustomDateEventsComponent', () => {
  let component: CustomDateEventsComponent;
  let fixture: ComponentFixture<CustomDateEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDateEventsComponent]
    });
    fixture = TestBed.createComponent(CustomDateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
