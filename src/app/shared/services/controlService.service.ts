import {Injectable } from "@angular/core";
import {TaskInter} from "../models/task_model"
import {UserInter} from "../models/user_info.model"


@Injectable()
export class ControlService{


//a parameter that checks if there is info in localstorage
info:any;
    
//the parameter that will contain the info from the localstorage
 infoFromLocalStorge:Array<UserInter>;

 //singel user-after the user had log in/subscribe -will contain all of his data.
 singelUser:UserInter={Username:"",tasks:[]};
 
 
 //subscribe and log on/out functions/////////////
  newUserSubscribe(str:string):void{
    for(let i of this.infoFromLocalStorge){
      if(i.Username==str){
        alert(`there is alredy a user with the name ${str}\nplease pick anothe name`);
        return;
      }
    }
    this.singelUser.Username=str;
    this.infoFromLocalStorge.push(this.singelUser);
    this.send_data_to_storage();
  }

  logIN(str:string):void{
    for(let i of this.infoFromLocalStorge){
      if(i.Username==str){
        this.singelUser.Username=i.Username;
        this.singelUser.tasks=i.tasks;
        alert("welcome, "+this.singelUser.Username);
        return;
      }
    }
    alert("we coudent find you in our data base,please subscribe to the website");
  }

  log_out():void{
    alert("have a nice day "+this.singelUser.Username);
    //make sure there is no lost data
    this.send_data_to_storage();
    this.singelUser={Username:"",tasks:[]}
    window.location.reload()//reload the page
  }
  //////////////////////////////////////////////////////////////////////////////////////

  //////delet and ecomplish task funcktions///////////////////////
  deletTask(task:TaskInter):void{
      let user_name=this.singelUser.Username
      this.singelUser.tasks.splice(
      this.singelUser.tasks.indexOf(task),1 
     )
      this.send_data_to_storage();
      //set the single user again
      for(let i of this.infoFromLocalStorge){
        if(user_name==i.Username){
          this.singelUser=i;
        }
      }
  }
  makeTaskecomplish(task:TaskInter):void{
    let user_name=this.singelUser.Username
    for(let i of this.singelUser.tasks){
      if(task.name==i.name){
        i.accomplish=true;
        i.acomplishDate=`${this.current_year}/${this.current_month}/${this.curent_day}` 
      }
    }
    this.send_data_to_storage();
    ///set the single user again//////
    for(let i of this.infoFromLocalStorge){
      if(user_name==i.Username){
        this.singelUser=i;
      }
    }
  }
///time varibels and time validtion funcktion
current_year=new Date().getFullYear();
current_month=new Date().getMonth()+1;
curent_day=new Date().getDate();
///////////////////////////////////////
CheckIfdateIsvalid(str:string):boolean{
  let DateAsAnArry=str.split("-");
  let yearNumber=Number(DateAsAnArry[0]);
  let MonthNumber=Number(DateAsAnArry[1]);
  let DayNumber=Number(DateAsAnArry[2]);
  if(yearNumber<this.current_year){
    return false;
  }
  else if(yearNumber>this.current_year){
    return true;
  }
  else{
    if(MonthNumber<this.current_month){
      return false;
    }
    else if(MonthNumber>this.current_month){
      return true;
    }
    else{
      if(DayNumber<this.curent_day){
        return false;
      }
      else{ 
        return true;
      }
    }
  }
}


//////////filtet the tasklist for singel user///////////////

///set the ecomplish task arry and return it as a value to the componenets
  eccomplishTaks():Array<TaskInter>{
    let arr:Array<TaskInter>=new Array<TaskInter>();
    for(let i of this.singelUser.tasks){
      if(i.accomplish){
          arr.push(i);
        }
      }
    return arr;
  }
  //set the faild task arry-and return it as a value to the componenets.
  pastTask():Array<TaskInter>{
    let arr:Array<TaskInter>=new Array<TaskInter>();
    for(let i of this.singelUser.tasks){
      if(!i.accomplish){
        let dateIsfuture:boolean=this.CheckIfdateIsvalid(i.date);
        if(!dateIsfuture){
          arr.push(i)
        }
      }
    }
    return arr;
  }
  
  //set the to do task arry-and return it as a value to the componenets.
  todoTask():Array<TaskInter>{
    let arr:Array<TaskInter>=new Array<TaskInter>();
    for(let i of this.singelUser.tasks){
      let dateIsfuture:boolean=this.CheckIfdateIsvalid(i.date);
      if(!i.accomplish && dateIsfuture){
        arr.push(i);
      }
    }
    return arr;
  }

  ////////add task to singel user and add it to the full data/////
  add_task_to_singel_user(task:TaskInter){
    this.singelUser.tasks.push(task);
    for(let i of this.infoFromLocalStorge){
      if(i.Username==this.singelUser.Username){
        i.tasks=this.singelUser.tasks;
        this.send_data_to_storage();
      }
    }
  }
  send_data_to_storage():void{
    localStorage.setItem("users",JSON.stringify(this.infoFromLocalStorge))
  }
  /////////////////////////////////////////
  constructor(){
    console.log("single user is:"+JSON.stringify(this.singelUser))
    //check if the local storge contain a "users" key
    this.info=localStorage.getItem("users");
    if(this.info){//if it is, init the arry with the value from there
      this.infoFromLocalStorge=JSON.parse(localStorage.getItem("users"));
    }
    else{//if it isn't, set the arry with new arry, and send the arry to the local storge
      this.infoFromLocalStorge=new Array<UserInter>();
      this.send_data_to_storage();
      this.infoFromLocalStorge=JSON.parse(localStorage.getItem("users"));   
    }
  }
}