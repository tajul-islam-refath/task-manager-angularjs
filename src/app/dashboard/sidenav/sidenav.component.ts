import { Component, OnInit , Input } from '@angular/core';
import {AuthService} from "../../service/auth.service"

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() profile?:object | any;

  constructor(
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.profile)
  }

  logOut():void{
    this.auth.logOut()
  }

  

}
