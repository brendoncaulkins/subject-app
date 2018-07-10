import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

import { Employee } from '../models/employee.model'
import { EmployeeService } from '../services/employee.service'

@Component({
  selector: 'app-info-collection',
  templateUrl: './info-collection.component.html',
  styles: [],
})
export class InfoCollectionComponent implements OnInit {
  employeeForm: FormGroup
  employee: Employee

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.employee = new Employee()
    if (this.route.snapshot.data.employee) {
      this.employee.fromJSON(this.route.snapshot.data.employee)
    }
  }

  ngOnInit() {
    this.employeeForm = this.buildForm()
  }

  private buildForm(): FormGroup {
    const builder = new FormBuilder()
    return builder.group({
      id: [this.employee.id],
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
    const employee = new Employee().fromJSON(this.employeeForm.value)
    console.log(employee)
    this.employeeService
      .save(employee)
      .subscribe(success => console.log(success), error => console.error(error))
  }
}
