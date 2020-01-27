import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  employees ;

  constructor(public router: Router, public service:DataService) 
  {
   this.GetData(); 
  }



  GetData()
  {
    let StateOfResult= this.service.GetData();

    StateOfResult.subscribe((result)=>{
      this.employees = result;
    });
  }

  ngOnInit() 
  {
    
    
    // this.employees = [
    //   {no : 11, name: "mahesh1", address: "pune"}employeesemployeesemployeesemployeesemployeesemployees,
    //   {no : 12, name: "mahesh2", address: "panji"},
    //   {no : 13, name: "mahesh3", address: "mumbai"}
    // ];
  }

  GoToRegister()
  {
   this.router.navigate(['register']); 
  }


  Delete(no){
    //alert(no);
    this.service.Delete(no).subscribe((response)=>{
      console.log(response);
      this.GetData();
    })


  }

}