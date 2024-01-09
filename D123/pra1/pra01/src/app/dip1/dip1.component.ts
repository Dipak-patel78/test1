
import { Component } from "@angular/core";

@Component({
    selector:'app-dip1',
    templateUrl:'./dip1.component.html',
    styleUrls:['./dip1.component.css']

})

export class MineComponent{
title ='Dipak';
massage =' Be Happy';
display = false;
onClick(){
    this.display=true;
}
}