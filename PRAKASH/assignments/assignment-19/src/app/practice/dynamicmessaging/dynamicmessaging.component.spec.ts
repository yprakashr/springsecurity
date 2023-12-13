import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicmessagingComponent } from './dynamicmessaging.component';

describe('DynamicmessagingComponent', () => {
  let component: DynamicmessagingComponent;
  let fixture: ComponentFixture<DynamicmessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicmessagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicmessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
