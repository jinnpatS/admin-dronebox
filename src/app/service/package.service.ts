import { Injectable , EventEmitter , Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  base_path = 'http://localhost:3300/api/admin/controller/'
  // base_path = 'http://localhost:3300/api/admin/controller/'

  url = ((window.location.href).split('#'))[0]
  url_path = `${this.url}%23/`
  items_TOKEN:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(
    private http: HttpClient, 
  ) { 

  }
  //package
  async get_package(){
    return new Promise((res, rej) => {
      this.http.get(this.base_path+'get_package_all')
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
  async add_package(data:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'add_package',JSON.stringify(data))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
  async update_package(data:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'update_package',JSON.stringify(data))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
  async delete_package(data:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'delete_package',JSON.stringify(data))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
  //package_desc
  async get_package_desc(data:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'get_package_desc',JSON.stringify(data))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
  async add_package_desc(data:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'add_package_desc',JSON.stringify(data))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
  async update_package_desc(data:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'update_package_desc',JSON.stringify(data))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
  async delete_package_desc(data:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'delete_package_desc',JSON.stringify(data))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
}
