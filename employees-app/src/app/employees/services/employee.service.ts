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
