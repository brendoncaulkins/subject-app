import { Component, ViewChild } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { AddressValidationService } from '../../services/address-validation.service'
import {
  MockAddressValidationService,
} from '../../services/address-validation.service.fake'
import { AddressFormComponent } from './address-form.component'
import {
  AddressSuggestionsComponent,
} from './address-suggestions/address-suggestions.component'

@Component({
  template: `<app-address-form [addressFormGroup]="formGroup"></app-address-form>`,
})
class TestHostComponent {
  formGroup: FormGroup

  @ViewChild(AddressFormComponent) addressFormComponent: AddressFormComponent

  constructor() {
    const builder = new FormBuilder()
    this.formGroup = builder.group({
      addressLine1: [''],
      addressLine2: [''],
      city: [''],
      state: [''],
      zipCode: [''],
    })
  }
}

describe('AddressFormComponent', () => {
  let parent: TestHostComponent
  let component: AddressFormComponent
  let fixture: ComponentFixture<TestHostComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        AddressFormComponent,
        AddressSuggestionsComponent,
      ],
      imports: [AngularFontAwesomeModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: AddressValidationService, useClass: MockAddressValidationService },
      ],
    }).compileComponents()
  }))

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestHostComponent)
    parent = fixture.componentInstance

    fixture.detectChanges()
    await fixture.whenStable()
    component = parent.addressFormComponent
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
