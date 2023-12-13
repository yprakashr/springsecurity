import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusRunsComponent } from './status-runs.component';

describe('StatusRunsComponent', () => {
  let component: StatusRunsComponent;
  let fixture: ComponentFixture<StatusRunsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusRunsComponent]
    });
    fixture = TestBed.createComponent(StatusRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
