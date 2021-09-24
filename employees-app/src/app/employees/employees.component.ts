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

  /* sort employees by name or office
     sortBy returned from nav component */
  sortEmployees(sortBy: string) {
    sortBy === "name" ? this.employees.sort(this.sortEmployeesByName) : this.employees.sort(this.sortEmployeesByOffice);
  }

  sortEmployeesByName(employee1: IEmployee, employee2: IEmployee) {
    if (employee1.name > employee2.name) {
      return 1;
    } else if (employee1.name < employee2.name) {
      return -1;
    } else {
      return 0;
    }
  }

  sortEmployeesByOffice(employee1: IEmployee, employee2: IEmployee) {
    if (employee1.office > employee2.office) {
      return 1;
    } else if (employee1.office < employee2.office) {
      return -1;
    } else {
      return 0;
    }
  }

}
