import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationBoardComponent } from './application-board.component';
import { OrkoFormComponent } from './orko-form/orko-form.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { ChatComponent } from './chat/chat.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '', component: ApplicationBoardComponent, 
    children: [
    {
        path: 'add-team', component: AddTeamComponent
    },
    {
      path: 'chat', component: ChatComponent
  },{
    path: 'logout', component: LogoutComponent
},
    ]
  },
  {
    path: 'orko-form', component: OrkoFormComponent
},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationBoardRoutingModule { }
