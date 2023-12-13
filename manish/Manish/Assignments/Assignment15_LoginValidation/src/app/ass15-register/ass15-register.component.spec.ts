import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15RegisterComponent } from './ass15-register.component';

describe('Ass15RegisterComponent', () => {
  let component: Ass15RegisterComponent;
  let fixture: ComponentFixture<Ass15RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15RegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
