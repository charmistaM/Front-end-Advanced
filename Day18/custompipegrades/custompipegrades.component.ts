import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipegrades',
  templateUrl: './custompipegrades.component.html',
  styleUrls: ['./custompipegrades.component.css']
})
export class CustompipegradesComponent{

	public  gradesArray:any[]  = 
	[
		{sno: 1,ename  :  "Smith", egrades: 1},
		{sno: 2,ename  :  "Scott", egrades: 2},
		{sno: 3,ename  :  "Nancy", egrades: 3},
		{sno: 4,ename  :  "Ruth",  egrades: 4},
    {sno: 5,ename  :  "Smith", egrades: 1},
		{sno: 6,ename  :  "Scott", egrades: 2},
		{sno: 7,ename  :  "Nancy", egrades: 3},
		{sno: 8,ename  :  "Ruth",  egrades: 4},
    {sno: 9,ename  :  "Smith", egrades: 1},
		{sno: 10,ename  :  "Scott", egrades: 2},
		{sno: 11,ename  :  "Nancy", egrades: 3},
		{sno: 12,ename  :  "Ruth",  egrades: 4},
    {sno: 13,ename  :  "Smith", egrades: 1},
		{sno: 14,ename  :  "Scott", egrades: 2},
		{sno: 15,ename  :  "Nancy", egrades: 3},
		{sno: 16,ename  :  "Ruth",  egrades: 4},
	];

}
