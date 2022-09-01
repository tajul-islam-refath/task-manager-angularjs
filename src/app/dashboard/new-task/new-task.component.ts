import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  public user:object = {};
  public tasks:any = []
  constructor(
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user") || "{}")
    this.getTasks()
  }

  async getTasks(){
    let res = await this.auth.getTasks(this.user , "New");
    res.subscribe((tasks: any) => {
      console.log(tasks)
      this.tasks = tasks
    });
  }

}
