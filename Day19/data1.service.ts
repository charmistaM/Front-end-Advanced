import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  public empArray:any[] = [];
  public url:string  =  "http://localhost:3000/employees";
  
  constructor(private  httpObj:HttpClient) {
    
  }

  getAllEmployees():Observable<any>
  {     
      return this.httpObj.get(this.url);
  }

  getEmployeeByNo(eno:number):Observable<any>
  {       
      return this.httpObj.get(this.url + eno);
  }

  addEmployee(empObj:any):Observable<any>
  {   
      return this.httpObj.post(this.url , empObj);
  }

  updateEmployee(empObj:any):Observable<any>
  {     
      return this.httpObj.put(this.url + empObj.eno, empObj);
  }

  deleteEmployee(eno:number):Observable<any>
  {     
      return this.httpObj.delete(this.url + eno);
  }
}
