import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-nav-bar",
    templateUrl: "./nav-bar.html",
    styleUrls: ["./nav-bar.sass"]
}) 

export class NavBarComponent implements OnInit {
  @Output() eventSort = new EventEmitter();
  @Output() eventFilter = new EventEmitter();
  @Output() eventView = new EventEmitter();
  @Input() view!: string;
  @Input() offices!: string[];
  sortBy!: string;
  filterInput:any;

  constructor(private toastr: ToastrService ){}
  
  ngOnInit(): void {
    
    
    this.initFilterInputs();
  }

  initFilterInputs(){
    this.filterInput = {
      selectedOffice : "All Offices",
      searchTerm: ""
    }
  }

  emitSortEmployees(by:string) {
    this.sortBy= by; // for the css class (active)
    this.eventSort.emit(this.sortBy);
  }

  emitFilter(){
    this.eventFilter.emit(this.filterInput)
  }

  emitView(view:string){
    this.view = view;
    this.eventView.emit(this.view);
  }

  searchValidation(){
    /\d/.test(this.filterInput.searchTerm) ? this.toastr.error("Numbers can't be used" , "Error") : this.emitFilter();
  }

}
