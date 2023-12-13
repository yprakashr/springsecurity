import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15AccRecoveryComponent } from './ass15-acc-recovery.component';

describe('Ass15AccRecoveryComponent', () => {
  let component: Ass15AccRecoveryComponent;
  let fixture: ComponentFixture<Ass15AccRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15AccRecoveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15AccRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
