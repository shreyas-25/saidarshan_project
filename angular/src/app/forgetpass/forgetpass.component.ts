import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  msg:String = "";
  constructor(public service:UserService,public router:Router) { }

  ngOnInit() {
  }

  getotp(data: string)
  {
    console.log(data);
    if(data == undefined){alert("Pls enter email id");}
    this.service.GetOtp(data).subscribe((result:string)=>{
      this.msg="password changed!!!";
      // sessionStorage.setItem("passwordgenerated",JSON.stringify(true));
      //console.log(this.msg);
    },
    error=>{ 
      if(error.status===200){
      this.router.navigate(['setpass']);
    }
    else{
      this.msg="pls Enter valid email";
      }
    })
    sessionStorage['passwordgenerated']=1;

  }

}
