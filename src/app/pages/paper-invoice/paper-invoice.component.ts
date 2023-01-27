import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-paper-invoice',
  templateUrl: './paper-invoice.component.html',
  styleUrls: ['./paper-invoice.component.css']
})
export class PaperInvoiceComponent implements OnInit {
  invoice_data:any
  receipt_data:any
  constructor(
    public invoice:InvoiceService,
    private router:Router
  ) {
    this.invoice.get_invoice.subscribe((data: any) => {
      this.invoice_data=data
      console.log(data);
      
    })
    
    
    this.invoice.get_receipt.subscribe((data: any) => {
      this.receipt_data=data
      console.log(data);

    })

    setTimeout(() => {
      if(!this.invoice_data && !this.receipt_data){
        this.router.navigateByUrl('/invoice')
      }
    }, 300);
  }

  ngOnInit(): void {
    
  }

}
