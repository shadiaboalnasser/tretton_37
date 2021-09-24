import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IEmployee } from "../models/employee.model";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";


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
}
