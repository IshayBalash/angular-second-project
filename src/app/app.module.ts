import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { ControlService } from './shared/services/controlService.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { MainComponent } from './main/main.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FooterComponent } from './footer/footer.component';
import { AcomplishListComponent } from './acomplish-list/acomplish-list.component';
import { FailedListComponent } from './failed-list/failed-list.component';


const appRoutes:Routes=[
  {path:"log in", component: LogInComponent},
  {path:"home", component:HomeComponent},
  {path:"add_task",component:AddTaskComponent},
  {path:"to_do_list",component:ToDoListComponent},
  {path:"acomplish_list",component:AcomplishListComponent},
  {path:"failed_list",component:FailedListComponent},

  {path:"", redirectTo:"/log in",pathMatch:"full"},
  {path:"**", component:LogInComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    
    MainComponent,
    
    LogInComponent,
    
    AddTaskComponent,
    
    ToDoListComponent,
    
    FooterComponent,
    
    AcomplishListComponent,
    
   
    
    FailedListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [ControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
