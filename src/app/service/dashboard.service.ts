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

  async get_package(){
    return new Promise((res, rej) => {
      this.http.get(this.base_path+'get_all')
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }

}