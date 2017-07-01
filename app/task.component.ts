import { Component, OnInit, Input } from '@angular/core';
import { AppServices } from './app.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'task',
  templateUrl: 'app/task.component.html',
  providers:[AppServices]
})


export class TaskComponent { 
  TaskList:any;
  @Input() child_ID:number;
  constructor (private _taskList: AppServices){}
    ngOnInit(){
    this.TaskList=this._taskList.getData();
  }
}

 
