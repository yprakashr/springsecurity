import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderRefProvidersModalComponent } from './provider-ref-providers-modal.component';

describe('ProviderRefProvidersModalComponent', () => {
  let component: ProviderRefProvidersModalComponent;
  let fixture: ComponentFixture<ProviderRefProvidersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderRefProvidersModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderRefProvidersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
