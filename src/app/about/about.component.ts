import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goals:any;
  constructor(private _data:DataService, private _router: Router) { }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.goals = res);
  }

  sendMeHome(){
    this._router.navigate([]);
  }
}
