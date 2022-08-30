import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {UserGuard} from "./guards/user.guard";

const routes: Routes = [
  
  // {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {
    path:"", 
    canActivate:[UserGuard],
    component: LoginComponent
  },
  {
    path:'dashboard',
    canActivate:[UserGuard],
    loadChildren:()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
