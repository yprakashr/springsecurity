import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticptComponent } from './multicpt.component';

describe('MulticptComponent', () => {
  let component: MulticptComponent;
  let fixture: ComponentFixture<MulticptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
