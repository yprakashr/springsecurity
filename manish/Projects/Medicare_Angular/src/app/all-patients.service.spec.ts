import { TestBed } from '@angular/core/testing';

import { AllPatientsService } from './all-patients.service';

describe('AllPatientsService', () => {
  let service: AllPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
