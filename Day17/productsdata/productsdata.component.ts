import { Component, Injectable, OnInit } from '@angular/core';
// import { DataService } from '../data.service';

@Component({
  selector: 'app-productsdata',
  templateUrl: './productsdata.component.html',
  styleUrls: ['./productsdata.component.css']
})
export class ProductsdataComponent{
  pid:number=0;
  name:string="";
  price:number=0;
  cat:string="";
  qty:number=0;
  public proArray:any[]  = [];

  // constructor(private proObj:DataService){

  // };

  

  getproduct():void{
    this.proArray=[
    {pid: 1,name : "Prd1", price : 1000,  cat: "cat1", qty: 1} ,
    {pid: 2,name : "Prd2", price : 2000,  cat: "cat2", qty: 2} ,
    {pid: 3,name : "Prd3", price : 3000,  cat: "cat3", qty: 3} ,
    {pid: 4,name : "Prd4", price : 4000,  cat: "cat4", qty: 4} ,
    {pid: 5,name : "Prd5", price : 5000,  cat: "cat5", qty: 5} ,
    {pid: 6,name : "Prd6", price : 6000,  cat: "cat6", qty: 6}
  ];

  }

  addproduct():void
    {
      let proObj:any={};
      proObj.pid = this.pid;
      proObj.name = this.name;
      proObj.price =  this.price;
      proObj.cat = this.cat;
      proObj.qty =  this.qty;

      this.proArray.push( proObj );
    }

    updtproduct(pid:number):void
    {
      let index  = this.proArray.findIndex( item => item.pid == pid);
      this.proArray[index].name = this.name;
      this.proArray[index].price = this.price;
      this.proArray[index].cat = this.cat;
      this.proArray[index].qty = this.qty;
    }

    selectproduct(pid:number):void{
      let proObj:any = this.proArray.find( item => item.pid == pid);
      this.pid = proObj.pid;
      this.name =   proObj.name;
      this.price = proObj.price;
      this.cat =   proObj.cat;
      this.qty = proObj.qty;
    }

    resetproduct():void{
      this.proArray=[];
    }

    deleteproduct(pid:number):void{
      let index  = this.proArray.findIndex( item => item.pid == pid);
      this.proArray.splice(index,1);
    }


}
