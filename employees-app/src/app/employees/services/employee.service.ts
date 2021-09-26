import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IEmployee } from "..";


@Injectable()
export class EmployeeService {
  private API: string = environment.API +  'employees';

  
  private headers = new HttpHeaders().set('Authorization', environment.APIKEY)

  constructor(private http: HttpClient) {}

  getEmployees(): Observable < IEmployee[] > {
    return this.http.get < IEmployee[] > (this.API, {
        'headers': this.headers
      })
      .pipe(map((res) => {
        return res
      }), catchError(this.handleError < IEmployee[] > ("getEmployees", [])));
  }

  private handleError < T > (operation = "operation", result ? : T) {
    return (error: any): Observable < T > => {
      console.error(error);
      return of(result as T)
    }
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

  // get a unique list of offices from employees
  // in real world we get list of offices by API
  initEmployeesOffices(arr: IEmployee[]): string[] {
    const offices = arr.map(prop => prop.office).filter((value, index, self) => self.indexOf(value) === index);
    offices.unshift("All Offices")
    return offices;
  }

  replaceBrokenEmployeeImage(employees:IEmployee[]){
    for (const employee of employees) {
      this.checkIfImageExists(employee.imagePortraitUrl, (exists: any) => {
        if (!exists) {
          employee.imagePortraitUrl = "assets/profile-photo.jpg";
        }
      });
    }
  }

  checkIfImageExists(url:string | null, callback:any) {
    const img = new Image();
    if (url == null) {
      return callback(false);
    }
    img.src = url;
    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
      
      img.onerror = () => {
        callback(false);
      };
    }
  }
}
