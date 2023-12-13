import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdeletedailogComponent } from './projectdeletedailog.component';

describe('ProjectdeletedailogComponent', () => {
  let component: ProjectdeletedailogComponent;
  let fixture: ComponentFixture<ProjectdeletedailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectdeletedailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectdeletedailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
