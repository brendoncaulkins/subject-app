import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { BehaviorSubject, Subscription } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

import { Address } from '../../models/address.model'
import { AddressValidationService } from '../../services/address-validation.service'

export enum ValidationState {
  IDLE = 'IDLE',
  CHECKING = 'CHECKING',
  INVALID = 'INVALID',
  SUGGESTING = 'SUGGESTING',
  VALID = 'VALID',
}

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styles: [],
})
export class AddressFormComponent implements OnInit, OnDestroy {
  @Input() addressFormGroup: FormGroup
  @Output() validationState: BehaviorSubject<ValidationState>

  private subscriptions: Subscription[] = []

  constructor(private validationService: AddressValidationService) {
    this.validationState = new BehaviorSubject<ValidationState>(ValidationState.IDLE)
  }

  ngOnInit() {
    this.subscriptions.push(
      this.addressFormGroup.valueChanges.subscribe(address =>
        this.handleAddressChange(new Address().fromJSON(address))
      )
    )
    this.subscriptions.push(
      this.addressFormGroup.valueChanges
        .pipe(debounceTime(2000))
        .subscribe(address =>
          this.validationService.checkAddress(new Address().fromJSON(address))
        )
    )
    this.subscriptions.push(
      this.validationService.validationResults.subscribe(
        () => this.handleSuccess(),
        error => this.handleError(error)
      )
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  setAddress(address: Address) {
    this.addressFormGroup.setValue(address, { emitEvent: false }) // quietly
    this.addressFormGroup.setErrors(null)
    this.validationService.clear()
    this.validationState.next(ValidationState.VALID)
  }

  handleAddressChange(address: Address) {
    this.validationState.next(
      address.isEmpty() ? ValidationState.IDLE : ValidationState.CHECKING
    )
  }

  handleSuccess() {
    this.addressFormGroup.setErrors(null)
    this.validationState.next(ValidationState.SUGGESTING)
  }

  handleError(error: any) {
    this.addressFormGroup.setErrors({ invalidAddress: error })
    this.validationState.next(ValidationState.INVALID)
  }
}
