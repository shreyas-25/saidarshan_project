import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) 
  {

  }

  GetData()
  {
   return this.http.get("http://13.232.8.110/employees");
  }

  AddData(emp:any)
  {
    return this.http.post("http://13.232.8.110/employees",
                          emp);
  }

  Delete(no:any)
  {
    return this.http.delete("http://13.232.8.110/employees/"+no);
  }
  
GetDataById(no)
{
  return this.http.get("http://13.232.8.110/employees/"+no);
}  


Update(emp){

return this.http.put("http://13.232.8.110/employees/" +emp.no,emp);

}
}


