import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15LoginComponent } from './ass15-login.component';

describe('Ass15LoginComponent', () => {
  let component: Ass15LoginComponent;
  let fixture: ComponentFixture<Ass15LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
