import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';

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
      console.log(result);
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

 async getTasks(user: any, status: string): Promise<any> {
  
     return  this.db
       .collection('tasks')
       .doc(user.uid)
       .collection('task', (ref) => ref.where('status', '==', status))
       .valueChanges()
  }
}
