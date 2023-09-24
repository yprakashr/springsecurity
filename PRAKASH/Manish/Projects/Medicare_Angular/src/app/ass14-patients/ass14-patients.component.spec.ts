import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass14PatientsComponent } from './ass14-patients.component';

describe('Ass14PatientsComponent', () => {
  let component: Ass14PatientsComponent;
  let fixture: ComponentFixture<Ass14PatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass14PatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass14PatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
