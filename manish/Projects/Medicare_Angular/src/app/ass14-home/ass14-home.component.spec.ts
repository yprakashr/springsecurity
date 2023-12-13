import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass14HomeComponent } from './ass14-home.component';

describe('Ass14HomeComponent', () => {
  let component: Ass14HomeComponent;
  let fixture: ComponentFixture<Ass14HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass14HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass14HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
