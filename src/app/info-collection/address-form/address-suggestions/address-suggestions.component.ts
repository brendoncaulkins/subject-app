import { Component, OnDestroy, OnInit, Output } from '@angular/core'

import { Subject, Subscription } from 'rxjs'

import { Address } from '../../../models/address.model'
import { AddressValidationService } from '../../../services/address-validation.service'

@Component({
  selector: 'app-address-suggestions',
  templateUrl: './address-suggestions.component.html',
  styleUrls: ['./address-suggestions.component.css'],
})
export class AddressSuggestionsComponent implements OnInit, OnDestroy {
  @Output() addressSelected: Subject<Address>
  suggestions: Address[]
  error: string

  validationresultsSubscription: Subscription

  constructor(private validationService: AddressValidationService) {
    this.addressSelected = new Subject<Address>()
    this.suggestions = null
    this.error = null
  }

  ngOnInit() {
    this.validationresultsSubscription = this.validationService.validationResults.subscribe(
      results => (this.suggestions = results),
      error => null // handle errors quietly
    )
  }

  ngOnDestroy() {
    this.validationresultsSubscription.unsubscribe()
  }
}
