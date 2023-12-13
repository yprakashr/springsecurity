import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPrefProviderModalComponent } from './provider-pref-provider-modal.component';

describe('ProviderPrefProviderModalComponent', () => {
  let component: ProviderPrefProviderModalComponent;
  let fixture: ComponentFixture<ProviderPrefProviderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderPrefProviderModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderPrefProviderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
