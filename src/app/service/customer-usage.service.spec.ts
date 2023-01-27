import { TestBed } from '@angular/core/testing';

import { CustomerUsageService } from './customer-usage.service';

describe('CustomerUsageService', () => {
  let service: CustomerUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
