import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setpass',
  templateUrl: './setpass.component.html',
  styleUrls: ['./setpass.component.css']
})
export class SetpassComponent implements OnInit {
msg:string;
flag:boolean;
d:any;
  constructor(public service:UserService,public router:Router) {
    this.d=sessionStorage.getItem['passwordgenerated']
  if(this.d==0)
    this.router.navigate(['login'])
   }

  ngOnInit() {
  }


  updatepass(data)
  {
    this.service.setpass(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.msg="successfully changed password";
        this.flag=true;
        this.router.navigate(['login']);
      }
      else{
        this.flag=false
        this.msg="Enter valid OTP";
      }
    })
    console.log(data);
  }

  navigate()
  {

    this.router.navigate(['login']);
  }

}
