import { Component, OnInit } from '@angular/core';
import {ControlService} from "../shared/services/controlService.service";
import { UserInter } from '../shared/models/user_info.model';
import { TaskInter } from '../shared/models/task_model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  UserFullInfo:UserInter;
  todoTask:Array<TaskInter>;
  ecomplishTask:Array<TaskInter>;
  faildTask:Array<TaskInter>;

  
  constructor(private myControllService:ControlService) {
    this.UserFullInfo=this.myControllService.singelUser;
    this.todoTask=this.myControllService.todoTask();
    this.ecomplishTask=this.myControllService.eccomplishTaks();
    this.faildTask=this.myControllService.pastTask();
   }
  
  ngOnInit() {
  }

}
