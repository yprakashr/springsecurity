import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass14ExistingComponent } from './ass14-existing.component';

describe('Ass14ExistingComponent', () => {
  let component: Ass14ExistingComponent;
  let fixture: ComponentFixture<Ass14ExistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass14ExistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass14ExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
