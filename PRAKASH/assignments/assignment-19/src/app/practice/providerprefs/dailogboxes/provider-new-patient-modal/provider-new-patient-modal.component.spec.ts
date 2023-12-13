import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderNewPatientModalComponent } from './provider-new-patient-modal.component';

describe('ProviderNewPatientModalComponent', () => {
  let component: ProviderNewPatientModalComponent;
  let fixture: ComponentFixture<ProviderNewPatientModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderNewPatientModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderNewPatientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
