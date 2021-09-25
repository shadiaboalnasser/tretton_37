import { Component, Input } from "@angular/core";
import { IEmployee } from "..";

@Component({
    selector: "app-employees-list",
    templateUrl: "./employees-list.html",
    styleUrls: ["./employees-list.sass"]
})

export class EmployeesListComponent{
    @Input()
    employees!:IEmployee[];
}