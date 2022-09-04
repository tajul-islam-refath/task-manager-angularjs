import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompletedComponent } from './completed/completed.component';
import { CanceledComponent } from './canceled/canceled.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    HomeComponent,
    CardComponent,
    CreateNewComponent,
    NewTaskComponent,
    InProgressComponent,
    CompletedComponent,
    CanceledComponent,
    TaskCardComponent,
    UpdateModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
