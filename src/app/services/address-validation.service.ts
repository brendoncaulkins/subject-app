import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { Address } from '../models/address.model'

@Injectable()
export class AddressValidationService {
  private url = 'https://us-street.api.smartystreets.com/street-address'
  private authId = '21102174564513388'

  validationResults: BehaviorSubject<Address[]>

  constructor(private httpClient: HttpClient) {
    this.validationResults = new BehaviorSubject<Address[]>(null)
  }

  checkAddress(address: Address) {
    if (address.isEmpty()) {
      this.validationResults.next(null)
    } else {
      this.httpClient
        .get<any[]>(this.url, { params: this.buildOptions(address) })
        .subscribe(
          results => this.parseResults(results),
          error => this.validationResults.error('Address not valid')
        )
    }
  }

  private buildOptions(address: Address): any {
    return {
      'auth-id': this.authId,
      candidates: 3,
      street: address.addressLine1,
      street2: address.addressLine2 ? address.addressLine2 : null,
      city: address.city ? address.city : null,
      state: address.state ? address.state : null,
      zipcode: address.zipCode,
      match: 'strict',
    }
  }

  private parseResults(results: any[]) {
    if (!results || results.length === 0) {
      this.validationResults.error('Address not valid')
    }

    const addresses: Address[] = []
    results.forEach(a =>
      addresses.push(
        new Address().fromJSON({
          addressLine1: a.delivery_line_1 ? a.delivery_line_1 : null,
          addressLine2:
            a.delivery_line_2 && a.delivery_line_2 != 'Null' ? a.delivery_line_2 : null,
          city: a.components
            ? a.components.city_name
              ? a.components.city_name
              : null
            : null,
          state: a.components
            ? a.components.state_abbreviation
              ? a.components.state_abbreviation
              : null
            : null,
          zipCode: a.components
            ? a.components.zipcode
              ? a.components.zipcode
              : null
            : null,
        })
      )
    )

    this.validationResults.next(addresses)
  }

  clear(): void {
    this.validationResults.next(null)
  }
}
