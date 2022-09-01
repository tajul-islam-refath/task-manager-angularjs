import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
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
    let res = await this.auth.getTasks(this.user , "Completed");
    res.subscribe((tasks: any) => {
      console.log(tasks)
      this.tasks = tasks
    });
  }

}
