import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
  data:any;
  em:any;


  constructor(public service:UserService,public router:Router) {
    this.data=sessionStorage['userId'];
    this.em=sessionStorage['email'];

    if(this.em==undefined)
    this.router.navigate(['login'])
    //console.log(this.data.sessionStorage.userId);
   }

   booking(bookingForm)
   {
     let data=bookingForm.form.value;
     let x={
       "user":{"userId":data.userId},"date":data.date,"noOfPeople":data.noOfPeople,"slot":data.slot
     }
     console.log(x);
     this.service.booking(x).subscribe((res)=>{
       this.router.navigate(['getbookedlist']);
     },(error)=>{
       alert("something went wrong!!!");
     })
   }


  ngOnInit() {
  }

}
