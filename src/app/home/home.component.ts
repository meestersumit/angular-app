import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goalText: string = "Climb Mount Everest";
  itemCount:number = 4;
  btnText:string = "Add An Item";

  goals = [];

  constructor(private _data: DataService ) {

   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addGoal(){
    console.log(this.goalText);
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(item){
    console.log("Remove element");
    console.log(item);
    this.goals.splice(item,1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

}
