import { Component, OnInit , Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';

import {AuthService} from "../../service/auth.service";
import {
  updateReq,
  updateReset,
  updateSuccess,
} from '../../state/task/task.action';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task:any = {};
  @Input() user:any = {};

  public title = "";
  public status = "";
  public des = "";

  constructor(
    private modalService: NgbModal,
    private auth : AuthService,
    private store: Store<{ task: any }>
    ) { }

  ngOnInit(): void {
    this.title = this.task.doc?.title;
    this.status = this.task.doc?.status;
    this.des = this.task.doc?.des;

    this.user = this.auth.getUser();
  }

  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  async update(){
    await this.auth.update(this.user , this.task.id , {
      title:this.title,
      status:this.status,
      des : this.des
    })

    this.store.dispatch(updateSuccess())
    window.alert("Update success")
  }


}
