import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-getbookedlist',
  templateUrl: './getbookedlist.component.html',
  styleUrls: ['./getbookedlist.component.css']
})
export class GetbookedlistComponent implements OnInit {

  user:any;
  data:any;
  id:any;

  constructor(public service: UserService, public router:Router) 
  {
    this.data=sessionStorage['email']
    this.id=sessionStorage['userId']
    if(this.data==undefined)
    this.router.navigate(['login'])
  }

  
  getBookedList()
  {
    this.service.getBookedList(this.id).subscribe((res)=>{
      console.log(res);
      this.user=res;
    })
  }

  ngOnInit() {

    console.log("in getBookedList");

    this.service.getBookedList(this.id).subscribe((res)=>{
      
      this.user=res;
    })    
  }

}
