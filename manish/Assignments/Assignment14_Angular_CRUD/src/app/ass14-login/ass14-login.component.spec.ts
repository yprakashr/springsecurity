import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass14LoginComponent } from './ass14-login.component';

describe('Ass14LoginComponent', () => {
  let component: Ass14LoginComponent;
  let fixture: ComponentFixture<Ass14LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass14LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass14LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
