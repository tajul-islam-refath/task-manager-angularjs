import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user:object = {};
  public tasks:any = []
  public new  = 0;
  public progress = 0;
  public completed = 0;

  constructor(
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user") || "{}")
    this.getAll()
    
  }

  async getAll(){
    let res = await this.auth.getAll(this.user);
    res.subscribe((tasks: any) => {
      this.tasks = tasks
      tasks.map((task:any) =>{
        
         if(task.status == "New"){
          this.new = this.new + 1;
         }else if(task.status == "Progress"){
          this.progress = this.progress + 1;
         }else if(task.status == "Completed"){
          this.completed = this.completed + 1;
         }
      })
    });
  }

}
