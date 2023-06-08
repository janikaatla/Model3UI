import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationBoardRoutingModule } from './application-board-routing.module';
import { OrkoFormComponent } from './orko-form/orko-form.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { ChatComponent } from './chat/chat.component';
import { LogoutComponent } from './logout/logout.component';
import { NgxCheckboxModule } from 'ngx-checkbox';
import { NgApexchartsModule } from "ng-apexcharts";

// import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    OrkoFormComponent,
    AddTeamComponent,
    ChatComponent,
    LogoutComponent,
  

  ],
  imports: [
    CommonModule,
    ApplicationBoardRoutingModule,
    NgxCheckboxModule,
    NgApexchartsModule
    // BrowserModule
  
  ]
})
export class ApplicationBoardModule { }
