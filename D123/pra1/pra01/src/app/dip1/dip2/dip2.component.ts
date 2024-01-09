import { Component, Directive } from '@angular/core';
@Directive({
  selector:'[changeToOrange]'
})
export class changeToOrange{
  
}
@Component({
  selector: 'dip2',
  templateUrl: './dip2.component.html',
  styleUrls: ['./dip2.component.css']
})
export class Dip2Component {
  oneStock :number = 0;
  inname ='';
information ={
  name :'Swminarayan',
from :'Akshardham',
city :' Philadelphia',
country:'India',
price :108,
dicount : 12.3,
instock :5,
pimeg:'/assets/img/swaminarayan copy.png'
}
getDiscountedPrice (){
  return this.information.price - (this.information.price*this.information.dicount/100)
}
onInput(event: any){
this.inname = event.target.value;
}
decAmount(){
if(this.oneStock>0){
  this.oneStock--;
}
}
incAmount(){
  if(this.oneStock< this.information.instock){
    this.oneStock++;
  }
}
}
