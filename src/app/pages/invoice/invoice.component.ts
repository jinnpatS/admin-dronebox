import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  list_invoice:any=[]
  list_receipt:any=[]

  list_invoice_show:any
  base_page=10
  pages=10
  constructor(
    public invoice : InvoiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.get_all_invoice()
    this.get_all_receipt()
  }

  get_all_invoice(){
    this.list_invoice=[]
    this.invoice.get_all_invoice().then((e:any) => {
      this.list_invoice=e
      // console.log(this.list_invoice);
      this.list_invoice_show=this.list_invoice.slice(0, this.base_page);
      
    })
  }

  next_page(status:any,index:any){
    var total
    if(status=='next'){
      total = this.pages
      this.pages=total+index

      if(this.pages>this.list_invoice.length){
        this.pages=this.list_invoice.length
      }
      this.list_invoice_show=this.list_invoice.slice(total, this.pages);

    }else{

      if(this.pages==this.list_invoice.length){
        var mod = this.list_invoice.length%10
        this.pages = this.pages-mod        
      }else{
        this.pages = this.pages-index       
      }

      total=this.pages-index
      this.list_invoice_show=this.list_invoice.slice(total, this.pages);

    }
    
  }



  async send_invoice(item){
    // console.log(item);
    this.router.navigateByUrl('/paper-invoice')
    
    setTimeout(async () => {
      await this.invoice.send_invoice(item)
      
    }, 100);

  }

  //receipt
  //receipt
  get_all_receipt(){
    this.list_receipt=[]
    this.invoice.get_all_receipt().then((e:any) => {
      this.list_receipt=e
      console.log(this.list_receipt);
      
      
    })
  }
}
