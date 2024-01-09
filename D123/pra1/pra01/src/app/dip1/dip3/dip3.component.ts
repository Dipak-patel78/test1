import { Component } from '@angular/core';

@Component({
  selector: 'dip3',
  templateUrl: './dip3.component.html',
  styleUrls: ['./dip3.component.css']
})
export class Dip3Component {
stStock : number = 0;
  pname ='Ram'
  coral ={
    name:'jay',
    lname :'swami',
    city :'narayan',
    height: 10,
    lessdis:2.39,
    inStock1:11,
    show: true
  }
  changeMe(){
    this.coral.show=false;
  }
  myOriginalHeight(){
    return this.coral.height -(this.coral.height*this.coral.lessdis/100)
  }
  onInput1(event:any){
    this.pname= event.target.value
  }
  addNumber(){
    if(this.stStock< this.coral.height){
    this.stStock++;}
  }
  removeNumber(){
    if(this.stStock>0){
    this.stStock--;}
  }

}
