import { Component, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { Employee } from '../models/employee.model'
import { EmployeeService } from '../services/employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [],
})
export class EmployeeListComponent implements OnInit {
  employeeList: BehaviorSubject<Employee[]>

  constructor(private employeesService: EmployeeService) {
    this.employeeList = new BehaviorSubject<Employee[]>([])
  }

  ngOnInit() {
    this.employeesService
      .all()
      .subscribe(
        list => this.employeeList.next(list),
        error => this.employeeList.error(error)
      )
  }
}
