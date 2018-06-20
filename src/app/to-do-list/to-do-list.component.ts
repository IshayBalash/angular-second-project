import { Component, OnInit } from '@angular/core';
import {ControlService} from "../shared/services/controlService.service";
import { TaskInter } from '../shared/models/task_model';



@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todoTask:Array<TaskInter>;


  readDataFromStorage():void{
    this.todoTask=this.myControllService.todoTask();
  }


  delet_task(task:TaskInter):void{
      this.myControllService.deletTask(task);
      this.todoTask.splice(
      this.todoTask.indexOf(task),1 
     )

  }

  acomplish_task(task:TaskInter):void{
    this.myControllService.makeTaskecomplish(task);
    this.todoTask.splice(
    this.todoTask.indexOf(task),1 
     )
  }

  ///////////////////////////////////////////
  
  showInfo(task:TaskInter):void{
    alert(task.info);
  }
///////////////////////////////////////////////////
  constructor(private myControllService:ControlService) {
    this.readDataFromStorage();

   }

  ngOnInit() {
  }

}
