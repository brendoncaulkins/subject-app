import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  template: `
    <nav>
    <a routerLink="/employee/list" routerLinkActive="active">Employee List</a>
    <a routerLink="/employee/create" routerLinkActive="active">Create Employee</a>
    </nav>
    `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
