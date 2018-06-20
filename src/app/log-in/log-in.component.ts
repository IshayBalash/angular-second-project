import { Component, OnInit } from '@angular/core';
import {ControlService} from "../shared/services/controlService.service"



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  log_in_input:string;
  subscribe_input:string;


  log_in():void{//sent the user name input to the service funck.
    if(this.log_in_input){
      this.mycontrolservice.logIN(this.log_in_input);
    }
    else{
      this.log_in_input="please enter your name";
    }
    
  }

  subscribe():void{//sent the user name input to the service funck.
    if(this.subscribe_input){
      this.mycontrolservice.newUserSubscribe(this.subscribe_input);
    }
    else{
      this.subscribe_input="please enter your name";
    }

  }


  constructor(private mycontrolservice:ControlService) {
   }

  ngOnInit() {
  }

}
