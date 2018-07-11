import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { Subscription } from 'rxjs'

import { EmployeePage } from '../models/employee-page.model'
import { EmployeeService, PageOptions } from '../services/employee.service'

export const pageSizesConst = [10, 25, 50, 100]
export const sortByConst = [
  { value: 'lastName', name: 'Last Name' },
  { value: 'firstName', name: 'First Name' },
  { value: 'state', name: 'State' },
]
export const sortDirectionsConst = [
  { value: 'asc', name: 'Ascending' },
  { value: 'desc', name: 'Descending' },
]

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  pageOptionsForm: FormGroup
  currentPage: EmployeePage

  error: any = null
  pageSizes = pageSizesConst
  sortBy = sortByConst
  sortDirections = sortDirectionsConst
  pages = []

  subscriptions: Subscription[]

  constructor(private employeesService: EmployeeService) {
    this.subscriptions = []
    this.currentPage = new EmployeePage()
  }

  ngOnInit() {
    this.pageOptionsForm = this.buildForm()

    this.subscriptions.push(
      this.pageOptionsForm.valueChanges.subscribe(settings => this.updatePage(settings))
    )
    this.subscriptions.push(
      this.employeesService.currentPage.subscribe(
        page => this.handleNewPage(page),
        error => this.handleError(error)
      )
    )
    this.employeesService.getPage({
      page: '0',
      size: String(this.pageSizes[0]),
      sortField: this.sortBy[0].value,
      sortDirection: this.sortDirections[0].value,
    } as PageOptions)
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  buildForm(): FormGroup {
    const builder = new FormBuilder()
    return builder.group({
      sortByField: [this.sortBy[0].value],
      sortDirection: [this.sortDirections[0].value],
      pageSize: [this.pageSizes[0]],
      pageNumber: [0],
    })
  }

  updatePage(settings: any): void {
    const options: PageOptions = {
      page: settings.pageNumber,
      size: settings.pageSize,
      sortField: settings.sortByField,
      sortDirection: settings.sortDirection,
    }
    this.employeesService.getPage(options)
  }

  handleNewPage(page: EmployeePage) {
    this.error = null
    this.currentPage = page
    this.pages = Array(page.totalPages)
  }

  handleError(error: any) {
    this.error = error
    this.currentPage = new EmployeePage()
  }
}
