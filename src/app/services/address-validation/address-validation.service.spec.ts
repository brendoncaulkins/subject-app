import { HttpClientTestingModule } from '@angular/common/http/testing'
import { inject, TestBed } from '@angular/core/testing'

import { AddressValidationService } from './address-validation.service'

describe('AddressValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AddressValidationService],
    })
  })

  it('should be created', inject(
    [AddressValidationService],
    (service: AddressValidationService) => {
      expect(service).toBeTruthy()
    }
  ))
})
