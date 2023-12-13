import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchapiService implements OnInit{
  pcURL='http://localhost:8081';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


public postApi(data:any):any{
return  this.http.post('http://localhost:8081/registe',data);
}

public getApi():any{
 return this.http.get('http://localhost:8081/get');
}

 public updateById(id:number,data:any):any{
  return this.http.put(`http://localhost:8081/update/${id}`,data);
 }

 public deleteApi(id:number):any{
  return this.http.delete(`http://localhost:8081/delete/${id}`);
 }

public fetchApipost(fullName: any,age: any,phoneno: any):any {
  const url = 'http://localhost:8081/search';
  let parameters = {"fullName":fullName,"age":age,"phoneno":phoneno};
    let queryParams = new HttpParams({ fromObject: parameters });
    return this.http.get(url,{params:queryParams});
}
}








