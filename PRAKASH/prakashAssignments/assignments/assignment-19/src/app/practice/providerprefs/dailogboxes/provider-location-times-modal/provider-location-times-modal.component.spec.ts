import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderLocationTimesModalComponent } from './provider-location-times-modal.component';

describe('ProviderLocationTimesModalComponent', () => {
  let component: ProviderLocationTimesModalComponent;
  let fixture: ComponentFixture<ProviderLocationTimesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderLocationTimesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderLocationTimesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
