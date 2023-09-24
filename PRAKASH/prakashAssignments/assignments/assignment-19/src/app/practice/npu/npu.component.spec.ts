import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpuComponent } from './npu.component';

describe('NpuComponent', () => {
  let component: NpuComponent;
  let fixture: ComponentFixture<NpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
