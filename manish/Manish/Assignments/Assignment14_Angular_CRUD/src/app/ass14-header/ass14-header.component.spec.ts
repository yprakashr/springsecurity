import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass14HeaderComponent } from './ass14-header.component';

describe('Ass14HeaderComponent', () => {
  let component: Ass14HeaderComponent;
  let fixture: ComponentFixture<Ass14HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass14HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass14HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
