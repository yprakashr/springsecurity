import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderApptsModalComponent } from './provider-appts-modal.component';

describe('ProviderApptsModalComponent', () => {
  let component: ProviderApptsModalComponent;
  let fixture: ComponentFixture<ProviderApptsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderApptsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderApptsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
