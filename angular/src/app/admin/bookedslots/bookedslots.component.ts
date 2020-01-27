import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-bookedslots',
  templateUrl: './bookedslots.component.html',
  styleUrls: ['./bookedslots.component.css']
})
export class BookedslotsComponent implements OnInit {

  data:any;
  msg:string;
  flag:any;
  user:any;
  fname:any;

  constructor(public service:AdminService,public uservice:UserService,public router:Router ) {
    // this.data=sessionStorage['email']

    // if(this.data==undefined)
    // this.router.navigate(['login'])

  
   }

   getBookedSlotList(id)
   {
     sessionStorage['bid']=id;
    console.log(id); 
   }

   getUsers()
   {
     this.service.getBookedSlots().subscribe((res)=>{
       console.log(res);
       this.user=res;
       
     })
   }


  ngOnInit() {

    console.log("in getUsers");

    this.service.getUsers().subscribe((res)=>{
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
    this.router.navigate(['bookedslots'])
  }


}

