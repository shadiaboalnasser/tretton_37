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
  visibleEmployees: IEmployee[] = [];
  filteredEmployeesByOffice: IEmployee[] = [];
  offices!: string[];
  page = 1;
  pageSize = 10;
  view = "cards";

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.getEmployeesAndOffices();
  }

  getEmployeesAndOffices() {
    return this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.visibleEmployees = employees;
      this.offices = this.initEmployeesOffices(this.employees);
    });    
  }

  // get a unique list of offices from employees
  // in real world we get list of offices by API
  initEmployeesOffices(arr: IEmployee[]): string[] {
    const offices = arr.map(prop => prop.office).filter((value, index, self) => self.indexOf(value) === index);
    offices.unshift("All Offices")
    return offices;
  }

  /* sort employees by name or office
     sortBy returned from nav component */
  sortEmployees(sortBy: string) {
    sortBy === "name" ? this.employees.sort(this.sortEmployeesByName) : this.employees.sort(this.sortEmployeesByOffice);
  }

  changeView(view: string) {
    this.view = view;
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

  // run when search or change office
  // same function so user can select office and search inside selected office
  filterAndSearchEmployees(filterInput: any) {    
    this.visibleEmployees = this.employees; // reset visible employees list
    if (filterInput.selectedOffice !== "All Offices") { // filter office has been selected
      this.visibleEmployees = this.filterEmployeesByOffice(this.visibleEmployees, filterInput.selectedOffice);
    }
    if (filterInput.searchTerm !== "") {
      this.visibleEmployees = this.filterEmployeesByName(this.visibleEmployees, filterInput.searchTerm);
    }
  }

  // return employees include search term in their name
  filterEmployeesByName(employees: IEmployee[], searchTerm: string) {
    searchTerm = searchTerm.toLocaleLowerCase();
    return employees.filter(employee => {
      return employee.name.toLocaleLowerCase().includes(searchTerm);
    });
  }

  // return employees have exactly same office , compared by string
  filterEmployeesByOffice(employees: IEmployee[], office: string) {
    return employees.filter(employee => {
      return employee.office.toLocaleLowerCase() === office.toLocaleLowerCase();
    });
  }

}
