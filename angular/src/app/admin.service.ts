// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminService {
//   constructor(private htttp:HttpClient) { }

//   getList()
//   {
//     return this.htttp.get("http://13.232.8.110:8080/DacAug19/admin/getuser");
//   }

//   getUserByEmail(em)
//   {
//   return this.htttp.get("http://13.232.8.110:8080/DacAug19/admin/getuser?em="+em);
//   }

//   changeStatus(id)
//   {
//     return this.htttp.post("http://13.232.8.110:8080/DacAug19/admin/changestatus?id="+id,null);
//   }
// }