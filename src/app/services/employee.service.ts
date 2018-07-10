import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Employee } from '../models/employee.model'
import { Page } from '../models/page.model'

@Injectable()
export class EmployeeService {
  private tableName = 'employees'

  constructor(private httpClient: HttpClient) {}

  listPage(page: number = 0, size: number = 10): Observable<Page<Employee>> {
    return this.httpClient.get<Page<Employee>>(this.buildUrl(), {
      params: { size: String(size), page: String(page) },
    })
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
