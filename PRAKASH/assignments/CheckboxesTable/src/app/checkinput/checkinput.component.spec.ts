import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinputComponent } from './checkinput.component';

describe('CheckinputComponent', () => {
  let component: CheckinputComponent;
  let fixture: ComponentFixture<CheckinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
