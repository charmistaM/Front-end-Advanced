import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sicalculator',
  templateUrl: './sicalculator.component.html',
  styleUrls: ['./sicalculator.component.css']
})
export class SIcalculatorComponent{
     pamt:number=0;
     rate:number=0;
     tperiod:number=0;
     result:number=0;

     calculateinterest():number{
      this.result=(this.pamt*this.rate*this.tperiod)/100;
      return this.result;
     }
}
