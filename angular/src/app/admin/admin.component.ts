import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data:any;
  user:Object;//??????????
  name:any;
email;
  constructor(public router:Router,public service:AdminService) {

   if(sessionStorage['role']=='USER') 
    this.router.navigate(['userdashboard']);
    
    this.data=sessionStorage['email']
    this.email=sessionStorage.getItem('email')
    console.log(this.email)

    if(this.data==undefined)
    this.router.navigate(['login']);

    this.service.getUserByEmail(this.data).subscribe((res)=>{
      console.log(res);
      this.user=res;
      this.name=res['name'];
      sessionStorage['id']=res['userId'];
    },
    err=>{console.log(err)}
    )
  
   }




  ngOnInit() {
    this.service.getUsers().subscribe((res)=>{
      console.log(res);
      this.user = res;
   })
  }

  logout()
  {
    delete sessionStorage['email'];
    this.router.navigate(['login']);
    delete sessionStorage['id'];
  }


  

}
