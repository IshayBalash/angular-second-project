import { Component, OnInit } from '@angular/core';
import { ControlService } from '../shared/services/controlService.service';
import { UserInter } from '../shared/models/user_info.model';
import { TaskInter } from '../shared/models/task_model';


@Component({
  selector: 'app-failed-list',
  templateUrl: './failed-list.component.html',
  styleUrls: ['./failed-list.component.css']
})
export class FailedListComponent implements OnInit {
  faildTask:Array<TaskInter>;

  delet_task(task:TaskInter):void{
    this.myControllService.deletTask(task);
    this.faildTask.splice(
    this.faildTask.indexOf(task),1 
   )
  }
  acomplish_task(task:TaskInter):void{
  this.myControllService.makeTaskecomplish(task);
  this.faildTask.splice(
  this.faildTask.indexOf(task),1 
   )
  }
  showInfo(task:TaskInter):void{
    alert(task.info);
  }

  //////////calculate hwo much time has passed from the due task time/////
  time_that_passed(task:TaskInter){
   let TaskTime:string[]=task.date.split(`-`);
   let task_day:string=TaskTime[2];
   let task_month:string=TaskTime[1];
   let task_year:string=TaskTime[0];
   let day_passed:number=Number(this.myControllService.curent_day)-Number(task_day);
   let month_passed:number=Number(this.myControllService.current_month)-Number(task_month);
   let year_passed:number=Number(this.myControllService.current_year)-Number(task_year);
   alert(
     "you had to finish the task befor:\n"+
     day_passed+" days\n"+month_passed+" months\n"+year_passed+" years"
   );
  }  
  constructor(private myControllService:ControlService) { 
    this.faildTask=this.myControllService.pastTask();
  }

  ngOnInit() {
  }

}
