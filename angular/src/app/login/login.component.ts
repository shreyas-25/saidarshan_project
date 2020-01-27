import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {EmtrService} from '../emtr.service';
import { stringify } from '@angular/core/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string;
  constructor(private userService:UserService,
    private router:Router,private emService:EmtrService) {
      delete sessionStorage['passwordgenerated'];
     }

    login(loginForm)
    {
      let data=loginForm.form.value;
      this.userService.login(data).subscribe(res=>{
        sessionStorage['email']=res['email'];
        console.log(res['userId']);
        sessionStorage['userId']=res['userId'];
        sessionStorage['role']=res['role'];
        this.emService.logInBtnSwitch(true);
        sessionStorage.setItem("isLogin",JSON.stringify(true));
        if(res['role']==="USER")
        {
        //this.emService.roleStatusSwitch(true);
        //sessionStorage.setItem("userLoggedIn",JSON.stringify(true));
        //sessionStorage.setItem("adminLoggedIn",JSON.stringify(false));
        this.router.navigate(['userdashboard']);
        }
        else 
        {
        //this.emService.roleStatusSwitch(false);
        //sessionStorage.setItem("userLoggedIn",JSON.stringify(false));
        //sessionStorage.setItem("adminLoggedIn",JSON.stringify(true));
        this.router.navigate(['admin']);
        }
      },(err)=>{
        alert("email and password does not match!!!")
      })
    }
    
  ngOnInit() {
  }

}
