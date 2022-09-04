import { Component, OnInit , Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task:any = {};

  public title = "";
  public status = "";
  public des = "";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.title = this.task.doc?.title;
    this.status = this.task.doc?.status;
    this.des = this.task.doc?.des;
  }

  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  update(){
    console.log({
      title:this.title,
      status:this.status,
      des : this.des
    })
  }


}
