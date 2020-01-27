import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getList(id: any) {
    throw new Error("Method not implemented.");
  }

  constructor(public http:HttpClient) { }

  getUserByEmail(email)
  {
    return this.http.get("http://13.232.8.110:8080/DacAug19/admin/getuser?email="+email);
  }

  getUsers()
  {
    return this.http.get("http://13.232.8.110:8080/DacAug19/admin/getuser"); 
  }

  changeStatus(id)
  {
    return this.http.post("http://13.232.8.110:8080/DacAug19/admin/changestatus?id="+id,null);
  }

  getBookedSlots()
  {
    return this.http.get("http://13.232.8.110:8080/DacAug19/admin/bookedslots");
  }

  getBookedSlotList(uid)
  {
    return this.http.get("http://13.232.8.110:8080/DacAug19/user/bookinglist?uid="+uid);
  }
}
