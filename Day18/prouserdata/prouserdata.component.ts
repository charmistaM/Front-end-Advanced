import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prouserdata',
  templateUrl: './prouserdata.component.html',
  styleUrls: ['./prouserdata.component.css']
})
export class ProuserdataComponent{

  public start:number = 0;
  public end:number = 4;

  public  proArray:any[]   = [		
		{pid :  1,  name  : "Charm1" , price: 1000, cat: "cat1", qty: 1 },
		{pid :  2,  name  : "Charm2" , price: 2000, cat: "cat2", qty: 2 },
		{pid :  3,  name  : "Charm3" , price: 3000, cat: "cat3", qty: 3 },
		{pid :  4,  name  : "Charm4" , price: 4000, cat: "cat4", qty: 4 },
		{pid :  5,  name  : "Charm5" , price: 5000, cat: "cat5", qty: 5 },
		{pid :  6,  name  : "Charm6" , price: 6000, cat: "cat6", qty: 6 },
		{pid :  7,  name  : "Charm7" , price: 7000, cat: "cat7", qty: 7 },
		{pid :  8,  name  : "Charm8" , price: 8000, cat: "cat8", qty: 8 },
		{pid :  9,  name  : "Charm9" , price: 9000, cat: "cat9", qty: 9 },
		{pid :  10, name  : "Charm10", price: 10000, cat: "cat10", qty: 10 },
		{pid :  11, name  : "Charm11", price: 11000, cat: "cat11", qty: 11 }	
     ];

     public nextItems():void
     {
        this.start = this.start + 4;
        this.end = this.end + 4;

        if(this.start >= this.proArray.length)
        {
            this.start = 0;
            this.end = 4;
        }
     }

}
