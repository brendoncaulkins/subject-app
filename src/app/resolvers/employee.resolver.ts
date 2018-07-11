import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'

import { Observable } from 'rxjs'

import { Employee } from '../models/employee.model'
import { EmployeeService } from '../services/employee/employee.service'

@Injectable()
export class EmployeeResolve implements Resolve<Employee> {
  constructor(private employeeService: EmployeeService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Employee> {
    return this.employeeService.get(route.params.id)
  }
}
