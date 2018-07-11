import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { AddressValidationService } from '../services/address-validation/address-validation.service'
import { MockAddressValidationService } from '../services/address-validation/address-validation.service.fake'
import { EmployeeService } from '../services/employee/employee.service'
import { MockEmployeesService } from '../services/employee/employee.service.fake'
import { AddressFormComponent } from './address-form/address-form.component'
import {
  AddressSuggestionsComponent,
} from './address-form/address-suggestions/address-suggestions.component'
import { InfoCollectionComponent } from './info-collection.component'

describe('InfoCollectionComponent', () => {
  let component: InfoCollectionComponent
  let fixture: ComponentFixture<InfoCollectionComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoCollectionComponent,
        AddressFormComponent,
        AddressSuggestionsComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFontAwesomeModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: EmployeeService, useClass: MockEmployeesService },
        { provide: AddressValidationService, useClass: MockAddressValidationService },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCollectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
