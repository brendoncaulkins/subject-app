import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'
import {
  EmployeeListCardComponent,
} from './employee-list/employee-list-card/employee-list-card.component'
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { HeaderComponent } from './header/header.component'
import {
  AddressFormComponent,
} from './info-collection/address-form/address-form.component'
import {
  AddressSuggestionsComponent,
} from './info-collection/address-form/address-suggestions/address-suggestions.component'
import { InfoCollectionComponent } from './info-collection/info-collection.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { AddressValidationService } from './services/address-validation.service'
import { EmployeeService } from './services/employee.service'

@NgModule({
  declarations: [
    AddressFormComponent,
    AddressSuggestionsComponent,
    InfoCollectionComponent,
    EmployeeListComponent,
    EmployeeListCardComponent,
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    InfoCollectionComponent,
    EmployeeListComponent,
    EmployeeListCardComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AddressValidationService, EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
