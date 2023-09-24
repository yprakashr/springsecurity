import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderprefsComponent } from './providerprefs.component';

describe('ProviderprefsComponent', () => {
  let component: ProviderprefsComponent;
  let fixture: ComponentFixture<ProviderprefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderprefsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderprefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
