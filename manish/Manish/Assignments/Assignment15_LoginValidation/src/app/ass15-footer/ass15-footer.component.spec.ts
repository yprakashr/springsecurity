import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15FooterComponent } from './ass15-footer.component';

describe('Ass15FooterComponent', () => {
  let component: Ass15FooterComponent;
  let fixture: ComponentFixture<Ass15FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
