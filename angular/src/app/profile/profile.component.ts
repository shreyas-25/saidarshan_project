import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data:any;

  constructor(public service:UserService,public router:Router) { 
    this.data=sessionStorage['email'];
    console.log(this.data);
  }
  profile(profileForm)
{
  let data=profileForm.form.value;
  console.log(data);
  this.service.profile(data).subscribe((res)=>{
    this.router.navigate(['userdashboard']);
  },(error)=>{
    alert("wrong")

  })
}



  ngOnInit() {
  }



}
