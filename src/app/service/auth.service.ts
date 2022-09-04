import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private db: AngularFirestore,
    private route: Router
  ) {}

  GoogleLogin() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  async AuthLogin(provider: any) {
    try {
      const result = await this.angularFireAuth.signInWithPopup(provider);

      this.user = result.user;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.route.navigate(['/dashboard']);
    } catch (error) {
      console.log(error);
    }
  }

  getUser() {
    return localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '{}')
      : null;
  }

  async logOut(): Promise<void> {
    await this.angularFireAuth.signOut();
    localStorage.removeItem('user');
    this.route.navigate(['/']);
  }

  async addNewTask(user: any, task: object) {
    try {
      let res = await this.db
        .collection('tasks')
        .doc(user.uid)
        .collection('task')
        .add(task);
      console.log(res);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getTasks(user: any, status: string): Promise<[]> {
    let result: any = [];

    await this.db
      .collection('tasks')
      .doc(user.uid)
      .collection('task')
      .ref.get()
      .then(function (doc) {
        doc.docs.map((item) => {
          if (item.data()['status'] == status) {
            result.push({
              id: item.id,
              doc: item.data(),
            });
          }
        });
      });
    return result;
  }

  async getAll(user: any): Promise<any> {
    let res: { id: string; doc: firebase.firestore.DocumentData }[] = [];
    await this.db
      .collection('tasks')
      .doc(user.uid)
      .collection('task')
      .ref.get()
      .then(function (doc) {
        res = doc.docs.map((item) => {
          return {
            id: item.id,
            doc: item.data(),
          };
        });
      });

    return res;
  }

  // async update(user: any , id :string):Promise<any>{
  //   return this.db.doc(user.uid).collection("task").doc(id).update()
  // }
}
