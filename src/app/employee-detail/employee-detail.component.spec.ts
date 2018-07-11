import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { EmployeeService } from '../services/employee/employee.service'
import { MockEmployeesService } from '../services/employee/employee.service.fake'
import { EmployeeDetailComponent } from './employee-detail.component'

describe('EmployeeDetailComponent', () => {
  let component: EmployeeDetailComponent
  let fixture: ComponentFixture<EmployeeDetailComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDetailComponent],
      imports: [AngularFontAwesomeModule, RouterTestingModule],
      providers: [{ provide: EmployeeService, useClass: MockEmployeesService }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
