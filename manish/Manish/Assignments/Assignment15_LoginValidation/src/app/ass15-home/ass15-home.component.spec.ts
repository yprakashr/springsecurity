import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15HomeComponent } from './ass15-home.component';

describe('Ass15HomeComponent', () => {
  let component: Ass15HomeComponent;
  let fixture: ComponentFixture<Ass15HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
