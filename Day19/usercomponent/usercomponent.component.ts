import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent {

  public usersArray:any[]=[];
  public w3Array:any[]=[];
  constructor(private httpObj:HttpClient){
    
  }
  buttonclick():void{
    let url="https://reqres.in/api/users";
    this.httpObj.get(url).subscribe((response:any) => 
    {
      console.log(response.data);
      this.usersArray=response.data;
    });
  }

  button1click():void{
    let url="https://www.w3schools.com/angular/customers.php";
    this.httpObj.get(url).subscribe((response:any) => 
    {
      console.log(response.records);
      this.w3Array=response.records;
    });
  }
  
}
