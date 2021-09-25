import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EmployeeCardComponent, EmployeesComponent, EmployeeService, EmployeesListComponent } from './employees';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeCardComponent,
    NavBarComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgbModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
