import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { Subscription } from 'rxjs'

import { EmployeeService, PageOptions } from '../../services/employee.service'

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
  selector: 'app-list-controls',
  templateUrl: './list-controls.component.html',
  styles: [],
})
export class ListControlsComponent implements OnInit, OnDestroy {
  pageOptionsForm: FormGroup

  pageSizes = pageSizesConst
  sortBy = sortByConst
  sortDirections = sortDirectionsConst
  pages = []

  subscriptions: Subscription[]

  constructor(private employeesService: EmployeeService) {
    this.subscriptions = []
    this.pageOptionsForm = this.buildForm()
  }

  ngOnInit() {
    this.updatePage(this.pageOptionsForm.value)

    this.subscriptions.push(
      this.employeesService.currentPage.subscribe(
        page => (this.pages = Array(page.totalPages))
      )
    )
    this.subscriptions.push(
      this.pageOptionsForm.valueChanges.subscribe(settings => this.updatePage(settings))
    )
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
}
