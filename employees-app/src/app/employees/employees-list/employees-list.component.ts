import { Component, Input } from "@angular/core";
import { IEmployee } from "../models/employee.model";

@Component({
    selector: "app-employees-list",
    templateUrl: "./employees-list.html",
    styleUrls: ["./employees-list.sass"]
})

export class EmployeesListComponent{
    @Input()
    employees!:IEmployee[];
}