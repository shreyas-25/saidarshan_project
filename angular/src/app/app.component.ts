import { Component } from '@angular/core';
import { EmtrService } from './emtr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

  isLogin;
  isRole:boolean;
  //userLoggedIn;
  
  

  constructor(private emservice:EmtrService,private router:Router){
        {      
          if(JSON.parse(sessionStorage.getItem("isLogin")) === true)
          this.isLogin = true;
          else
          this.isLogin = false;
        }   
          
        // {
        //   if(JSON.parse(sessionStorage.getItem("userLoggedIn")) ===true)
        //   this.userLoggedIn = true;
        //   else
        //   this.userLoggedIn=false;
        // }

  }

  ngOnInit() {

    this.emservice.getEmmitedValueForLogbtnSwitch()
      .subscribe(item => this.isLogin=item);

      if(sessionStorage.role == "ADMIN")
      this.isRole= true
      else
      this.isRole= false
      // debugger
      // this.emservice.getEmmitedValueForRoleStatusSwitch()
      // .subscribe(item=>this.userLoggedIn=item);
  }

  logout(){
    alert("In logout");
    this.isLogin=false;
    delete sessionStorage['email'];
    delete sessionStorage['userId'];
    delete sessionStorage['role'];
    delete sessionStorage['isLogin'];
    delete sessionStorage['id'];
    delete sessionStorage['rolestatus'];
    delete sessionStorage['userLoggedIn'];
    delete sessionStorage['adminLoggedIn'];
    this.router.navigate(['login'])

  }

  isAdmin()
  {      

    if(sessionStorage.role == "ADMIN")
    return true
    else
    return false
  }
  

}



