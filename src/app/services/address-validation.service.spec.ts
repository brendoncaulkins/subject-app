import { TestBed, inject } from '@angular/core/testing';

import { AddressValidationService } from './address-validation.service';

describe('AddressValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressValidationService]
    });
  });

  it('should be created', inject([AddressValidationService], (service: AddressValidationService) => {
    expect(service).toBeTruthy();
  }));
});
