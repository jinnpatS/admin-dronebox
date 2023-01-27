import { Injectable , EventEmitter , Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  base_path = 'http://localhost:3300/api/admin/controller/'

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

  async get_count_customer(){
    return new Promise((res, rej) => {
      this.http.get(this.base_path+'dashboard/get_count_customer')
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }

  async get_count_package(){
    return new Promise((res, rej) => {
      this.http.get(this.base_path+'dashboard/get_count_package')
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }

  async get_count_task(){
    return new Promise((res, rej) => {
      this.http.get(this.base_path+'dashboard/get_count_task')
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }

  async get_sum_usage(){
    return new Promise((res, rej) => {
      this.http.get(this.base_path+'dashboard/get_sum_usage')
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }

  async get_sales_overview(date:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'dashboard/get_sales_overview',JSON.stringify(date))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }

  async get_task_process_date(date:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'dashboard/get_task_process_date',JSON.stringify(date))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }

  async get_task_process_time(date:any){
    return new Promise((res, rej) => {
      this.http.post(this.base_path+'dashboard/get_task_process_time',JSON.stringify(date))
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }
}
