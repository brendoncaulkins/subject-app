import { Component, OnDestroy, OnInit } from '@angular/core'

import { Subscription } from 'rxjs'

import { EmployeePage } from '../models/employee-page.model'
import { EmployeeService } from '../services/employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  currentPage: EmployeePage
  error: any = null

  subscriptions: Subscription[]

  constructor(private employeesService: EmployeeService) {
    this.subscriptions = []
    this.currentPage = new EmployeePage()
  }

  ngOnInit() {
    this.subscriptions.push(
      this.employeesService.currentPage.subscribe(
        page => this.handleNewPage(page),
        error => this.handleError(error)
      )
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  handleNewPage(page: EmployeePage) {
    this.error = null
    this.currentPage = page
  }

  handleError(error: any) {
    this.error = error
    this.currentPage = new EmployeePage()
  }
}
