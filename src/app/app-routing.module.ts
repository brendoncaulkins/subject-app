import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { InfoCollectionComponent } from './info-collection/info-collection.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { EmployeeResolve } from './resolvers/employee.resolver'

const routes: Routes = [
  { path: 'employee/create', component: InfoCollectionComponent },
  { path: 'employee/list', component: EmployeeListComponent },
  {
    path: 'employee/edit/:id',
    component: InfoCollectionComponent,
    resolve: { employee: EmployeeResolve },
  },
  { path: 'employee/details/:id', component: EmployeeDetailComponent },
  { path: '', redirectTo: '/employee/create', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [EmployeeResolve],
  exports: [RouterModule],
})
export class AppRoutingModule {}
