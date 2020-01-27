import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getlist',
  templateUrl: './getlist.component.html',
  styleUrls: ['./getlist.component.css']
})
export class GetlistComponent implements OnInit {

  user:any;
  data:any;
  id:any;
  email:any;
  constructor(public service: AdminService, public router:Router) 
  {
    this.data=sessionStorage['email']
    this.id=sessionStorage['bid']
    if(this.data==undefined)
    this.router.navigate(['login'])


    this.service.getBookedSlotList(this.id).subscribe((res)=>{
      console.log("IN GETlist");
      console.log(res);
      this.user=res;
    })
  }

  
  
  ngOnInit() {

    console.log("in getList");

    this.service.getBookedSlotList(this.id).subscribe((res)=>{
      
      this.user=res;
    })    
  }
}
