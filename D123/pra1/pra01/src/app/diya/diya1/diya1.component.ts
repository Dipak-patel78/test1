import { Component } from '@angular/core';

@Component({
  selector: 'diya1',
  templateUrl: './diya1.component.html',
  styleUrls: ['./diya1.component.css']
})
export class Diya1Component {
  dicPrize = 35;
  dipAk = 'dipak'
  phila:any ={
    name:'Diya',
    lName:'Patel',
    saYs:'Jay Swaminarayan',
    fColor:'Pink',
    fNumber:15
  }
  philae=true
  checkMe(){
    this.philae= false
  }
  addMe(event:any){
 this.dipAk= event.target.value;
  }
  diyaPatel:string[]=['Mahantswami','Diya','Dipak','Bhumi','Kiah']
}
