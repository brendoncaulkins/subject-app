import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { Subscription } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

import { Address } from '../../models/address.model'
import { AddressValidationService } from '../../services/address-validation.service'

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styles: [],
})
export class AddressFormComponent implements OnInit, OnDestroy {
  @Input() addressFormGroup: FormGroup

  private formChangesSubscription: Subscription

  constructor(private validationService: AddressValidationService) {}

  ngOnInit() {
    this.formChangesSubscription = this.addressFormGroup.valueChanges
      .pipe(debounceTime(2000))
      .subscribe(address =>
        this.validationService.checkAddress(new Address().fromJSON(address))
      )
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe()
  }

  setAddress(address: Address): void {
    this.addressFormGroup.setValue(address, { emitEvent: false }) // quietly
    this.validationService.clear()
  }
}
