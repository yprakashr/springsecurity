import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15AddUserComponent } from './ass15-add-user.component';

describe('Ass15AddUserComponent', () => {
  let component: Ass15AddUserComponent;
  let fixture: ComponentFixture<Ass15AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15AddUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
