import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramdataComponent } from './programdata.component';

describe('ProgramdataComponent', () => {
  let component: ProgramdataComponent;
  let fixture: ComponentFixture<ProgramdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
