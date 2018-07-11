import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { EmployeeService } from '../../services/employee/employee.service'
import { MockEmployeesService } from '../../services/employee/employee.service.fake'
import { ListControlsComponent } from './list-controls.component'

describe('ListControlsComponent', () => {
  let component: ListControlsComponent
  let fixture: ComponentFixture<ListControlsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListControlsComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: EmployeeService, useClass: MockEmployeesService }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListControlsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
