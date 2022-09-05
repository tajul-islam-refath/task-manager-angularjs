import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Store } from '@ngrx/store';


import {
  updateReq,
  updateReset,
  updateSuccess,
} from '../../state/task/task.action';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  isUpdate$!: boolean;

  public user: object = {};
  public tasks = [];
  constructor(
    private auth: AuthService,
    private store: Store<{ task: any }>
  ) {

    store.select('task').subscribe((task) => {
      if(task?.isUpdate == true){
        this.getTasks();
        store.dispatch(updateReset())
      }
    });

   
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.getTasks();
   
  }

  async getTasks() {
    let res = await this.auth.getTasks(this.user, 'New');
    this.tasks = res;
  }
}
