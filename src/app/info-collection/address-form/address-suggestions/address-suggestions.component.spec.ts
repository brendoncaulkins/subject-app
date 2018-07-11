import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AddressValidationService } from '../../../services/address-validation/address-validation.service'
import {
  MockAddressValidationService,
} from '../../../services/address-validation/address-validation.service.fake'
import { AddressSuggestionsComponent } from './address-suggestions.component'

describe('AddressSuggestionsComponent', () => {
  let component: AddressSuggestionsComponent
  let fixture: ComponentFixture<AddressSuggestionsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressSuggestionsComponent],
      providers: [
        { provide: AddressValidationService, useClass: MockAddressValidationService },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSuggestionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
