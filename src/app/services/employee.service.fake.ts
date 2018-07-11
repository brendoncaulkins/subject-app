import { BehaviorSubject, Observable, of } from 'rxjs'

import { EmployeePage } from '../models/employee-page.model'
import { Employee } from '../models/employee.model'
import { IEmployeesService, PageOptions } from './employee.service'

export class MockEmployeesService implements IEmployeesService {
  currentPage: BehaviorSubject<EmployeePage>

  constructor() {
    this.currentPage = new BehaviorSubject<EmployeePage>(new EmployeePage())
  }

  getPage(options: PageOptions): void {}

  get(id: string): Observable<Employee> {
    return of(new Employee(id))
  }

  save(employee: Employee): Observable<Employee> {
    employee.id = '10001'
    return of(employee)
  }
}
