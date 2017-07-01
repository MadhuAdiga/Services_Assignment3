import { Component, OnInit } from '@angular/core';
import { AppServices } from './app.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers:[AppServices]
})


export class AppComponent { 
  TaskList:any;
  selectedID=5;
  constructor (private _taskList: AppServices){}
    ngOnInit(){
    this.TaskList=this._taskList.getData();
  }
  update(id:number){
    this.selectedID=id;
  }
}

 
