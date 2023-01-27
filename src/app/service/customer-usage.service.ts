import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerUsageService {

  base_path = 'http://localhost:3300/api/'
  
  constructor(
    private http: HttpClient, 
  ) { }

  //customer
  async get_usage_all(){
    return new Promise((res, rej) => {
      this.http.get(this.base_path+'usage/get_usage_all')
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }






  //customer
  async get_login(){
    return new Promise((res, rej) => {
      this.http.get(this.base_path+'admin/controller/get_login')
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
  async search_login(data:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'admin/controller/search_login',JSON.stringify(data))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
}
