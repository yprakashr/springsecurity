import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomReoccuranceComponent } from './custom-reoccurance.component';

describe('CustomReoccuranceComponent', () => {
  let component: CustomReoccuranceComponent;
  let fixture: ComponentFixture<CustomReoccuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomReoccuranceComponent]
    });
    fixture = TestBed.createComponent(CustomReoccuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
