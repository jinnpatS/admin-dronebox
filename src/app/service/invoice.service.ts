import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  base_path = 'http://localhost:3300/api/admin/controller/'

  constructor(
    private http: HttpClient, 

  ) { 

  }

  @Output() get_invoice = new EventEmitter<string>(); ///รับค่า
  send_invoice(data: any) { ///ส่งค่า
      this.get_invoice.emit(data);
  }
  @Output() get_receipt = new EventEmitter<string>(); ///รับค่า
  send_receipt(data: any) { ///ส่งค่า
      this.get_receipt.emit(data);
  }

  //invoice
  //invoice
  //invoice
  async get_all_invoice(){
    return new Promise((res, rej) => {
      this.http.get(this.base_path+'get_all_invoice')
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }


  //receipt
  //receipt
  //receipt
  async get_all_receipt(){
    return new Promise((res, rej) => {
      this.http.get(this.base_path+'get_all_receipt')
        .subscribe((data: any) => {
          res(data)          
        }, (err: any) => {
          rej(err)
        });
    });
  }

}
