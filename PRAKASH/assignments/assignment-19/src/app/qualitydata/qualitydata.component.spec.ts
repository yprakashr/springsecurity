import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitydataComponent } from './qualitydata.component';

describe('QualitydataComponent', () => {
  let component: QualitydataComponent;
  let fixture: ComponentFixture<QualitydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualitydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualitydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
