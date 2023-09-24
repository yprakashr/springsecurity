import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderInvAllocationModalComponent } from './provider-inv-allocation-modal.component';

describe('ProviderInvAllocationModalComponent', () => {
  let component: ProviderInvAllocationModalComponent;
  let fixture: ComponentFixture<ProviderInvAllocationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderInvAllocationModalComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProviderInvAllocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
