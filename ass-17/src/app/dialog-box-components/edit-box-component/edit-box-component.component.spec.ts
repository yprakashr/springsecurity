import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoxComponentComponent } from './edit-box-component.component';

describe('EditBoxComponentComponent', () => {
  let component: EditBoxComponentComponent;
  let fixture: ComponentFixture<EditBoxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBoxComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
