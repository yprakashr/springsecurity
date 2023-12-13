import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15MyaccountComponent } from './ass15-myaccount.component';

describe('Ass15MyaccountComponent', () => {
  let component: Ass15MyaccountComponent;
  let fixture: ComponentFixture<Ass15MyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15MyaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15MyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
