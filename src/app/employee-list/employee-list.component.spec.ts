import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { EmployeeService } from '../services/employee/employee.service'
import { MockEmployeesService } from '../services/employee/employee.service.fake'
import {
  EmployeeListCardComponent,
} from './employee-list-card/employee-list-card.component'
import { EmployeeListComponent } from './employee-list.component'
import { ListControlsComponent } from './list-controls/list-controls.component'

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent
  let fixture: ComponentFixture<EmployeeListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeListComponent,
        ListControlsComponent,
        EmployeeListCardComponent,
      ],
      imports: [AngularFontAwesomeModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: EmployeeService, useClass: MockEmployeesService }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
