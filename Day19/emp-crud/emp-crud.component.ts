import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';


@Component({
  selector: 'app-emp-crud',
  templateUrl: './emp-crud.component.html',
  styleUrls: ['./emp-crud.component.css']
})
export class EmpCRUDComponent{

  eno:number  = 0;
  ename:string  = "";
  job:string  = "";
  salary:number = 0;
  deptno:number = 0;

  public empArray:any[] =  [];

  constructor(private  serviceObj: Data1Service) { 

  }

  public getData_click()
  {	 
       this.serviceObj.getAllEmployees().subscribe( (response:any) =>
       {
          this.empArray = response;
       });
  }

  public addData_click()
  {	 
    let empObj:any = {};
    empObj.eno = 0;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.salary = 0;
    empObj.deptno = 0;


    this.serviceObj.addEmployee(empObj).subscribe( (response:any) =>
    {
      // this.studentsArray = response;
      alert("New Employee details are added to server");
      this.getData_click();
    });
  }


  public selectData_click(eno:number)
  {	 
       this.serviceObj.getEmployeeByNo(eno).subscribe( (resData:any) =>
       {
        this.eno=resData.eno;
        this.ename = resData.ename;
        this.job = resData.job;
        this.salary = resData.salary;
        this.deptno = resData.deptno;
       });
  }

  public deleteData_click(eno:number)
  {	 
       this.serviceObj.deleteEmployee(eno).subscribe( (resData:any) =>
       {
        alert("Selected Employee details are deleted from  server");
        this.getData_click();
       });
  }

  public updateData_click()
  {	 
       
  }

}
