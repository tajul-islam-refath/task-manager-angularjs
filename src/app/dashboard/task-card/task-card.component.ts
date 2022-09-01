import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task:any = {};

  constructor() { }

  ngOnInit(): void {
    console.log(this.task)
  }

}
