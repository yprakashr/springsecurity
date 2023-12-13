import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass14NavbarComponent } from './ass14-navbar.component';

describe('Ass14NavbarComponent', () => {
  let component: Ass14NavbarComponent;
  let fixture: ComponentFixture<Ass14NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass14NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass14NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
