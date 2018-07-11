import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Subscription } from 'rxjs'

import { Employee } from '../models/employee.model'
import { EmployeeService } from '../services/employee/employee.service'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styles: [],
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  employee: Employee
  employeeSubscription: Subscription

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.employee = new Employee()
  }

  ngOnInit() {
    this.employeeSubscription = this.employeeService
      .get(this.route.snapshot.params['id'])
      .subscribe(employee => (this.employee = new Employee().fromJSON(employee)))
  }

  ngOnDestroy() {
    this.employeeSubscription.unsubscribe()
  }
}
