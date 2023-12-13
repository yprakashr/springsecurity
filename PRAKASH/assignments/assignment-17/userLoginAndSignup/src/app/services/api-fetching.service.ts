import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFetchingService {

  constructor(private http:HttpClient) { }

  // username = sessionStorage.getItem('username');
  // password = sessionStorage.getItem('password');

 
  url:string='http://localhost:8081/user';


public getApiByEmail(email:any){
      return this.http.get(`${this.url}/${email}`);
}


public sendEmail(Email: any):any {
  let parameters = {"email":Email};
    let queryParams = new HttpParams({ fromObject: parameters });
    return this.http.get(`${this.url}/getmap`,{ observe: 'response',withCredentials: true });
}


    public postApi(data:any):any{
      return  this.http.post(this.url,data);
      }


      public getApi():any{
        return this.http.get(`${this.url}/get`,{ observe: 'response',withCredentials: true });
      }


      public getById(id:any){
      return this.http.get<Object[]>(`${this.url}/get/${id}`,{ observe: 'response',withCredentials: true });
      }



      public updateById(id:number,data:any):any{
        return this.http.put<Object[]>(`${this.url}/${id}`,{ observe: 'response',withCredentials: true });
       }


       public deleteApi(id:number):any{
        return this.http.delete<Object[]>(`${this.url}/${id}`,{ observe: 'response',withCredentials: true });
       }


      public fetchApipost(username: any,password: any):any {
        let parameters = {"username":username,"password":password};
          let queryParams = new HttpParams({ fromObject: parameters });
          return this.http.get(`${this.url}`,{params:queryParams});
      }


}


















