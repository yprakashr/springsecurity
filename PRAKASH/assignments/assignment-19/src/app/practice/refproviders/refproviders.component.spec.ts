import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefprovidersComponent } from './refproviders.component';

describe('RefprovidersComponent', () => {
  let component: RefprovidersComponent;
  let fixture: ComponentFixture<RefprovidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefprovidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefprovidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
