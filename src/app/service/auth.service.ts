import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user:any;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private route:Router
    ) {}

  GoogleLogin() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  async AuthLogin(provider: any) {
    try {
      const result = await this.angularFireAuth
        .signInWithPopup(provider);
      console.log(result.user);
      this.user = result.user;
      localStorage.setItem("user", JSON.stringify(this.user))
      this.route.navigate(["/dashboard"])
    } catch (error) {
      console.log(error);
    }
  }

  getUser(){
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || '{}') : null;
  }
}
