import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Employee } from '../../models/employee.model'

@Component({
  selector: 'app-employee-list-card',
  templateUrl: './employee-list-card.component.html',
  styleUrls: ['./employee-list-card.component.css'],
})
export class EmployeeListCardComponent implements OnInit {
  @Input() employee: Employee

  constructor(private router: Router) {}

  ngOnInit() {}

  edit(id: string) {
    this.router.navigate(['employee', 'edit', id])
  }
}
