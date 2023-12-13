import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPayerGroupsModalComponent } from './provider-payer-groups-modal.component';

describe('ProviderPayerGroupsModalComponent', () => {
  let component: ProviderPayerGroupsModalComponent;
  let fixture: ComponentFixture<ProviderPayerGroupsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderPayerGroupsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderPayerGroupsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
