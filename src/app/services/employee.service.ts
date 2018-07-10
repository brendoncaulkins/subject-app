import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Employee } from '../models/employee.model'

@Injectable()
export class EmployeeService {
  private tableName = 'employees'

  constructor(private httpClient: HttpClient) {}

  all(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.buildUrl())
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
