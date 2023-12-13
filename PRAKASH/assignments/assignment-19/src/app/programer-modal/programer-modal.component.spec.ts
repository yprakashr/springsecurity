import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramerModalComponent } from './programer-modal.component';

describe('ProgramerModalComponent', () => {
  let component: ProgramerModalComponent;
  let fixture: ComponentFixture<ProgramerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
