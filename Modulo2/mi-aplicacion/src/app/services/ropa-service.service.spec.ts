import { TestBed } from '@angular/core/testing';

import { RopaServiceService } from './ropa-service.service';

describe('RopaServiceService', () => {
  let service: RopaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RopaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
