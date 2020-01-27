import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  
  email:any;
  constructor(public router:Router,public service:UserService) {
    if(sessionStorage['role']=='ADMIN') 
    this.router.navigate(['admin']);
    this.email=sessionStorage.getItem('email')
    console.log(this.email)
  }

  ngOnInit() {
  }

}
