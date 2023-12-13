import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15ContactUsComponent } from './ass15-contact-us.component';

describe('Ass15ContactUsComponent', () => {
  let component: Ass15ContactUsComponent;
  let fixture: ComponentFixture<Ass15ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15ContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
