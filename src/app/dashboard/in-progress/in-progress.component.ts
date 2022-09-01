import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss']
})
export class InProgressComponent implements OnInit {
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
    let res = await this.auth.getTasks(this.user , "Progress");
    res.subscribe((tasks: any) => {
      console.log(tasks)
      this.tasks = tasks
    });
  }

}
