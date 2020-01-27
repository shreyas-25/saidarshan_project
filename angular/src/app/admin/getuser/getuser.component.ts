import { Component, OnInit } from '@angular/core';
 import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {

  data:any;
  msg:string;
  flag:any;
  user:any;

  constructor(public service:AdminService,public router:Router ) {
    this.data=sessionStorage['email']

    if(this.data==undefined)
    this.router.navigate(['login'])
  
   }


   getBookedSlots()
   {
     this.service.getBookedSlots().subscribe((res)=>{
       console.log(res);
       this.user=res;
     })
   }


  ngOnInit() {

    console.log("in getBookedSlots");

    this.service.getBookedSlots().subscribe((res)=>{
      this.user=res;
    })
    // this.service.getUsers.subscribe((res)=>{
    //    console.log("jijij");
    //   this.service = res;
    // })
  }

  changeStatus(status)
  {
    console.log(status);
    this.service.changeStatus(status).subscribe((result)=>{
      if(result){
        this.msg="status changes successfully";
      }
      else
      {
        this.msg="status failed to change";
      }
    },
    error=>{console.log(error);}
    )
    this.router.navigate(['getBookedSlots'])
  }


}
