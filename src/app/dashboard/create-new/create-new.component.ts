import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
})
export class CreateNewComponent implements OnInit {
  public title: string = '';
  public des: string = '';
  public status: string = 'New';
  public createdAt = new Date().toLocaleString();
  public loading:boolean = false;
  public user:object = {};

  constructor(
    private auth : AuthService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user") || "{}")
  }

  async create(): Promise<void> {
    this.loading = true
    await this.auth.addNewTask(
      this.user,
      {
        title: this.title,
        des:this.des,
        status:this.status,
        createdAt:this.createdAt,
      },)
      this.loading = false
      this.title ="";
      this.des = "";
  }
}


