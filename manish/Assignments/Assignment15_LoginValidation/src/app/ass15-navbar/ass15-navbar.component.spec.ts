import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15NavbarComponent } from './ass15-navbar.component';

describe('Ass15NavbarComponent', () => {
  let component: Ass15NavbarComponent;
  let fixture: ComponentFixture<Ass15NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
