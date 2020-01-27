import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private htttp:HttpClient) { }

  register(user)
  {
    return this.htttp.post("http://13.232.8.110:8080/DacAug19/user/register",user)
  }

  login(user)
  {
    return this.htttp.post("http://13.232.8.110:8080/DacAug19/user/login",user)
  }
  profile(user)
  {
    return this.htttp.post("http://13.232.8.110:8080/DacAug19/user/profile",user)
  }


  forgot(user)
  {
    return this.htttp.post("http://13.232.8.110:8080/DacAug19/user/forgot/",user);
  }

  GetOtp(email:string)
  {
    console.log(email.toString())
    return this.htttp.post("http://13.232.8.110:8080/DacAug19/user/forgot/"+email,null);
  }

  setpass(data)
  {
    return this.htttp.post("http://13.232.8.110:8080/DacAug19/user/setpass/",data);
  }

  booking(book)
  {
    return this.htttp.post("http://13.232.8.110:8080/DacAug19/user/booking/",book);
  }

  getBookedList(uid)
  {
    return this.htttp.get("http://13.232.8.110:8080/DacAug19/user/bookinglist?uid="+uid);
  }
}
