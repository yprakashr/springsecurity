import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass14NewComponent } from './ass14-new.component';

describe('Ass14NewComponent', () => {
  let component: Ass14NewComponent;
  let fixture: ComponentFixture<Ass14NewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass14NewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass14NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
