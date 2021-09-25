import { Component, Input } from "@angular/core";
import { IEmployee } from "..";

@Component({
    selector:"employee-card",
    templateUrl: "./employee-card.html",
    styleUrls: ["./employee-card.sass"]
})

export class EmployeeCardComponent{
   @Input()
    employee!: IEmployee;
}
