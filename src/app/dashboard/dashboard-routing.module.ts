import { CanceledComponent } from './canceled/canceled.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'', component:HomeComponent},
      {path:"create-new", component:CreateNewComponent},
      {path:'new-task', component:NewTaskComponent},
      {path:'in-progress', component:InProgressComponent},
      {path:'completed', component:CompletedComponent},
      {path:'canceled', component:CanceledComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
