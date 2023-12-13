import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15UsersComponent } from './ass15-users.component';

describe('Ass15UsersComponent', () => {
  let component: Ass15UsersComponent;
  let fixture: ComponentFixture<Ass15UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15UsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
