import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass14FooterComponent } from './ass14-footer.component';

describe('Ass14FooterComponent', () => {
  let component: Ass14FooterComponent;
  let fixture: ComponentFixture<Ass14FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass14FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass14FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
