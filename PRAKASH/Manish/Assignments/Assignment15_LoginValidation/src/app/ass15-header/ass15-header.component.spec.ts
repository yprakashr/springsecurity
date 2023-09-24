import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass15HeaderComponent } from './ass15-header.component';

describe('Ass15HeaderComponent', () => {
  let component: Ass15HeaderComponent;
  let fixture: ComponentFixture<Ass15HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass15HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass15HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
