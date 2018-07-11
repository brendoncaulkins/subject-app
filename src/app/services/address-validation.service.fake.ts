import { BehaviorSubject } from 'rxjs'

import { Address } from '../models/address.model'
import { IAddressValidationService } from './address-validation.service'

export class MockAddressValidationService implements IAddressValidationService {
  validationResults: BehaviorSubject<Address[]>

  constructor() {
    this.validationResults = new BehaviorSubject<Address[]>(null)
  }

  checkAddress(address: Address) {}

  clear(): void {
    this.validationResults.next(null)
  }
}
