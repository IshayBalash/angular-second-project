import { Component, OnInit } from '@angular/core';
import {ControlService} from "../shared/services/controlService.service";
import { UserInter } from '../shared/models/user_info.model';
import { TaskInter } from '../shared/models/task_model';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

new_task:TaskInter={name:"",date:"",info:"",time:"",accomplish:false,acomplishDate:""};

isallInputValid:any={nameinput:false,dateinput:false,}


checkNameInput():void{
    if(this.new_task.name==""){
      alert("must enter task name");
      return;  
    }
    else{
      this.isallInputValid.nameinput=true;
    }
}

checkDateInput():void{
  if(this.new_task.date==""){
    alert("must enter task date");
    return;
  }
  else{
    let dateIsValid:boolean=this.mycontrolservice.CheckIfdateIsvalid(this.new_task.date);
    if(dateIsValid){
      this.isallInputValid.dateinput=true;
    }
    else{
      alert("date is in the past");
      return;
    }
  }
}

/*
checkTimeInput():void{
  if(this.new_task.time==""){
    alert("must enter task time");
    return;  
  }
  else{
    this.isallInputValid.timeinput=true;
  }
}
*/

  



  submit():void{
    alert("task had been aded to your list");
   this.mycontrolservice.add_task_to_singel_user(this.new_task); 
  }
  
  constructor (private mycontrolservice:ControlService) { }

  ngOnInit() {
  }

}
