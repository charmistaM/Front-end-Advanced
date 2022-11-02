import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // public empArray:any[]  = [];
  getEmps(){
    let empArray=[
      {eid:10,"ename":"stefan","job":"Designer","salary":500000,"deptno":10},
      {eid:20,"ename":"damon","job":"Manager","salary":400000,"deptno":20},
      {eid:30,"ename":"klaus","job":"Painter","salary":300000,"deptno":30},
      {eid:40,"ename":"elena","job":"Photographer","salary":200000,"deptno":40},
      {eid:50,"ename":"caroline","job":"Journalist","salary":100000,"deptno":50}
    ];
  return empArray;
}
}
