import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

import { EmployeePage } from '../models/employee-page.model'
import { Employee } from '../models/employee.model'

export interface PageOptions {
  page: string
  size: string
  sortField: string
  sortDirection: string
}

export interface IEmployeesService {
  currentPage: BehaviorSubject<EmployeePage>

  getPage(options: PageOptions): void
  get(id: string): Observable<Employee>
  save(employee: Employee): Observable<Employee>
}

@Injectable()
export class EmployeeService implements IEmployeesService {
  private tableName = 'employees'

  currentPage: BehaviorSubject<EmployeePage>

  constructor(private httpClient: HttpClient) {
    this.currentPage = new BehaviorSubject<EmployeePage>(new EmployeePage())
  }

  getPage(options: PageOptions): void {
    const ops = {
      page: options.page,
      size: options.size,
      sort: options.sortField,
    }
    ops[options.sortField + '.dir'] = options.sortDirection

    this.httpClient
      .get<EmployeePage>(this.buildUrl(), { params: ops })
      .subscribe(
        page => this.currentPage.next(new EmployeePage().fromJSON(page)),
        error => this.currentPage.error(error)
      )
  }

  get(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.buildUrl()}/${id}`)
  }

  save(employee: Employee): Observable<Employee> {
    if (employee.id) {
      return this.httpClient.put<Employee>(`${this.buildUrl()}/${employee.id}`, employee)
    } else {
      return this.httpClient.post<Employee>(`${this.buildUrl()}/`, employee)
    }
  }

  private buildUrl() {
    return `http://localhost:8080/${this.tableName}`
  }
}
