import { Component } from "@angular/core";
import { IEmployee } from "./models/employee.model";
import { EmployeeService } from "./services/employee.service";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.html",
  styleUrls: ["./employees.sass"]
})

export class EmployeesComponent {
  employees: IEmployee[] = [];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    return this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }
}
