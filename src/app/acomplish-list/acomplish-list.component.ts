import { Component, OnInit } from '@angular/core';
import {ControlService} from "../shared/services/controlService.service";
import { UserInter } from '../shared/models/user_info.model';
import { TaskInter } from '../shared/models/task_model';

@Component({
  selector: 'app-acomplish-list',
  templateUrl: './acomplish-list.component.html',
  styleUrls: ['./acomplish-list.component.css']
})
export class AcomplishListComponent implements OnInit {
  ecomplishTask:Array<TaskInter>;



  delet_task(task:TaskInter):void{
    this.myControllService.deletTask(task);
    this.ecomplishTask.splice(
    this.ecomplishTask.indexOf(task),1 
   )

}

  constructor(private myControllService:ControlService){
    this.ecomplishTask=this.myControllService.eccomplishTaks();

  }
  
  
  ngOnInit() {
  }

}
