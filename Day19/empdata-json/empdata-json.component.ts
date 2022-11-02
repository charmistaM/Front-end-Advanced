import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-empdata-json',
  templateUrl: './empdata-json.component.html',
  styleUrls: ['./empdata-json.component.css']
})
export class EmpdataJSONComponent{
  public EmpjsonArray:any[]=[];
  constructor(private httpObj:HttpClient){

  }
  buttonclick():void{
    let url="http://localhost:3000/Emps";
    this.httpObj.get(url).subscribe((response:any) => 
    {
      console.log(response);
      this.EmpjsonArray=response;
    });
  }
}
