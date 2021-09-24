import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './employees/employee-card/employee-card.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './employees/services/employee.service';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeCardComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
