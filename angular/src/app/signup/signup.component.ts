import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  data;any;
  constructor(private userService:UserService,
    private router:Router) { }
register(User: { role: string; })
{
  User.role = "USER";
  console.log(User);
  this.userService.register(User).subscribe((res)=>{
    this.router.navigate(['login']);
  },(error)=>{
    alert("wrong")

  })
}

cnclbtn()
{
  this.router.navigate(['login']); 
}

  ngOnInit() {
  }

}
