import { TestBed } from '@angular/core/testing';

import { EditOverlayService } from './edit-overlay.service';

describe('EditOverlayService', () => {
  let service: EditOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
