import { Component, OnInit } from '@angular/core';
import {ControlService} from "../shared/services/controlService.service";
import {UserInter} from "../shared/models/user_info.model"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userinfo:UserInter;

  log_out():void{
    this.myControllService.log_out();
    this.setUserInfo();
    
    
  }


  //read the single user from the service to stay update after log out/page open
  setUserInfo():void{
    this.userinfo=this.myControllService.singelUser;
  }
  
  


  constructor(private myControllService:ControlService) {
    this.setUserInfo();
    
   }

  ngOnInit() {
  }

}
