import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Employee } from '../models/employee.model'

@Injectable()
export class EmployeeService {
  private databaseName = 'subject-app'
  private tableName = 'employees'
  private dbAuthKey = 'MqiOri2zgRMoZAaVocEjZznpj56u4TP2OtzynXuw'

  constructor(private httpClient: HttpClient) {}

  all(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.buildUrl(), {
      params: this.buildParams(),
    })
  }

  get(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.buildUrl()}/${id}`, {
      params: this.buildParams(),
    })
  }

  save(employee: Employee): Observable<Employee> {
    if (employee.id) {
      return this.httpClient.put<Employee>(
        `${this.buildUrl()}/${employee.id}`,
        employee,
        {
          params: this.buildParams(),
        }
      )
    } else {
      return this.httpClient.post<Employee>(`${this.buildUrl()}/`, employee, {
        params: this.buildParams(),
      })
    }
  }

  private buildUrl() {
    return `https://${this.databaseName}.firebaseio.com/${this.tableName}.json`
  }

  private buildParams() {
    return {
      auth: this.dbAuthKey,
    }
  }
}
