import { Component } from "@angular/core";
import { EmployeeService, IEmployee } from ".";

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
      this.offices = this.employeeService.initEmployeesOffices(this.employees);
      this.employeeService.replaceBrokenEmployeeImage(employees);
    });    
  }



  /* sort employees by name or office
     sortBy returned from nav component */
  sortEmployees(sortBy: string) {
    sortBy === "name" ? this.employees.sort(this.employeeService.sortEmployeesByName) : this.employees.sort(this.employeeService.sortEmployeesByOffice);
  }

  changeView(view: string) {
    this.view = view;
  }

  // run when search or change office
  // same function so user can select office and search inside selected office
  filterAndSearchEmployees(filterInput: any) {    
    this.visibleEmployees = this.employees; // reset visible employees list
    if (filterInput.selectedOffice !== "All Offices") { // filter office has been selected
      this.visibleEmployees = this.employeeService.filterEmployeesByOffice(this.visibleEmployees, filterInput.selectedOffice);
    }
    if (filterInput.searchTerm !== "") {
      this.visibleEmployees = this.employeeService.filterEmployeesByName(this.visibleEmployees, filterInput.searchTerm);
    }
  }

}
