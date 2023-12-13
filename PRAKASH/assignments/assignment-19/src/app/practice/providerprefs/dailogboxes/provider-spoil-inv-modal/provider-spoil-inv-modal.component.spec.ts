import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSpoilInvModalComponent } from './provider-spoil-inv-modal.component';

describe('ProviderSpoilInvModalComponent', () => {
  let component: ProviderSpoilInvModalComponent;
  let fixture: ComponentFixture<ProviderSpoilInvModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderSpoilInvModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderSpoilInvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
