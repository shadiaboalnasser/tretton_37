import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-nav-bar",
    templateUrl: "./nav-bar.html",
    styleUrls: ["./nav-bar.sass"]
}) 

export class NavBarComponent{
  @Output() eventSort = new EventEmitter();
  sortBy!: string;

  emitSortEmployees(by:string) {
    this.sortBy= by; 
    this.eventSort.emit(this.sortBy);
  }

}
