import { Component } from "@angular/core";


@Component({
    selector:'app-diya2',
    templateUrl :"./diya2.component.html",
    styleUrls:['./diya2.component.css']
})
 


export class diya2Component{
searchText: string = 'Menswear';
myHome:string[]=['Swami','Narayan','Philadelphia']
myShopy:any[]=[
    {name:"Dipak",
    surname:"patel",
    town:"Philadelphia",
    pic:"https://cdn.dribbble.com/users/5951714/screenshots/14094665/media/10d33330a367f31fe53a71f96bdff8ae.jpg?resize=400x300&vertical=center",
    Isrequried : true ,
    instoke_item:5,
    dicsountItem:15
       },
    {name:"Bhumi",
    surname:"patel",
    town:"phila",
    pic:"https://pbs.twimg.com/media/FRPxvztWQAAxtYo.jpg",
    Isrequried :false,
    instoke_item:0,
     }
    ]
items: any;

updateSearch(event:any){
this.searchText = event.target.value;
}
}