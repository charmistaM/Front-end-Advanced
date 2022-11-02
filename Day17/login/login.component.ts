import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  // constructor() { }

  // ngOnInit(): void {
  // }
  uid:string  = "";
  pwd:string  = "";
  result:string  = "";
  isValidUser():void
    {     
      if(this.uid == "admin"  && this.pwd == "admin123")
      {
        this.result  = "Welcome to Admin";
      }
      else{
        this.result  = "Invalid user id or password";
      }
    }

    getColor():string{
      if(this.uid == "admin"  && this.pwd == "admin123")
      {
        return "green";
      }
      else
      {
        return "red";
      }
    }

}
