import { Component, ViewChild } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { Employee } from '../../models/employee.model'
import { EmployeeListCardComponent } from './employee-list-card.component'

@Component({
  template: `<app-employee-list-card [employee]="employee"></app-employee-list-card>`,
})
class TestHostComponent {
  employee: Employee

  @ViewChild(EmployeeListCardComponent)
  employeeListCardComponent: EmployeeListCardComponent

  constructor() {
    this.employee = new Employee()
  }
}

describe('EmployeeListCardComponent', () => {
  let parent: TestHostComponent
  let component: EmployeeListCardComponent
  let fixture: ComponentFixture<TestHostComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, EmployeeListCardComponent],
      imports: [AngularFontAwesomeModule, RouterTestingModule],
    }).compileComponents()
  }))

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestHostComponent)
    parent = fixture.componentInstance

    fixture.detectChanges()
    await fixture.whenStable()
    component = parent.employeeListCardComponent
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
