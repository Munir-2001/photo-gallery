import { Injectable } from '@angular/core';
import { EmployeeModel } from '../models/employeemodel';  
import { HttpClient } from '@angular/common/http';
import { catchError,map } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  public employeedetails: EmployeeModel[] = [];
  private apiUrl = 'https://localhost:7276/api/Employee';

  // public GetEmployees(): Observable<EmployeeModel[]>   {
  //   return this.http.get<EmployeeModel[]>(this.apiUrl);
  // }
  // public GetEmployees(): Observable<EmployeeModel[]> {
  //   return this.http.get<EmployeeModel[]>(this.apiUrl).pipe(
  //     map((data: any[]) => data.map((item: any) => ({
  //       ID: item.ID,
  //       datetime: item.datetime,
  //       Editedtime: item.Editedtime,
  //       ModifiedBy: item.ModifiedBy,
  //       FirstName: item.FirstName,
  //       LastName: item.LastName,
  //       Title: item.Title
  //     }))),
  //     catchError(error => {
  //       console.error('Error fetching employees:', error);
  //       return throwError(error);
  //     })
  //   );
  // }
  
  public GetEmployees(): void {
    this.http.get<EmployeeModel[]>(this.apiUrl).pipe(
      map((data: any[]) => data.map((item: any) => ({
        ID: item.ID,
        datetime: item.datetime,
        Editedtime: item.Editedtime,
        ModifiedBy: item.ModifiedBy,
        FirstName: item.FirstName,
        LastName: item.LastName,
        Title: item.Title
      })))
    ).subscribe(
      (employees: EmployeeModel[]) => {
        this.employeedetails = employees;
        console.log(this.employeedetails);
      },
      (error: any) => {
        console.error('Error fetching employees:', error);
      }
    );

    
  }

  // public GetEmployees():void{
  //   this.http.get(this.apiUrl).subscribe(result =>{
  //   })
  // }

  public async DeleteEmployee(){
    return console.log("API CALL for delete");

  }

  public async AddEmployee(){

    return console.log("API CALL for add");

  }
  constructor(public http:HttpClient) { }

  
}
