import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderprefsummarymodalComponent } from './providerprefsummarymodal.component';

describe('ProviderprefsummarymodalComponent', () => {
  let component: ProviderprefsummarymodalComponent;
  let fixture: ComponentFixture<ProviderprefsummarymodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderprefsummarymodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderprefsummarymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
