import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { Employee } from '../models/employee.model'

@Component({
  selector: 'app-info-collection',
  templateUrl: './info-collection.component.html',
  styles: [],
})
export class InfoCollectionComponent implements OnInit {
  employeeForm: FormGroup
  employee: Employee

  constructor() {}

  ngOnInit() {
    this.employee = new Employee()
    this.employeeForm = this.buildForm()
  }

  private buildForm(): FormGroup {
    const builder = new FormBuilder()
    return builder.group({
      firstName: [this.employee.firstName],
      lastName: [this.employee.lastName],
      address: builder.group({
        addressLine1: [this.employee.address.addressLine1],
        addressLine2: [this.employee.address.addressLine2],
        city: [this.employee.address.city],
        state: [this.employee.address.state],
        zipCode: [this.employee.address.zipCode],
      }),
    })
  }

  onSubmitForm() {
    console.log(this.employeeForm.value)
  }
}
