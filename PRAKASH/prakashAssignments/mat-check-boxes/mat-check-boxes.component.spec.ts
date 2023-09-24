import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCheckBoxesComponent } from './mat-check-boxes.component';

describe('MatCheckBoxesComponent', () => {
  let component: MatCheckBoxesComponent;
  let fixture: ComponentFixture<MatCheckBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCheckBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCheckBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
