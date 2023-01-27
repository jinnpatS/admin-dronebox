import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/service/invoice.service';
declare var $: any;

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  list_invoice:any
  list_receipt:any
  list_receipt_show:any
  base_page=10
  pages=10
  constructor(
    public invoice : InvoiceService,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    // this.get_all_invoice()
    this.get_all_receipt()
  }

  get_all_invoice(){
    this.list_invoice=[]
    this.invoice.get_all_invoice().then((e:any) => {
      this.list_invoice=e
      // console.log(this.list_invoice);
      
      
    })
  }

  async send_receipt(item){
    // console.log(item);
    this.router.navigateByUrl('/paper-invoice')
    
    setTimeout(async () => {
      await this.invoice.send_receipt(item)
      
    }, 100);

  }

  //receipt
  //receipt
  get_all_receipt(){
    this.list_receipt=[]
    this.invoice.get_all_receipt().then((e:any) => {
      this.list_receipt=e
      this.list_receipt_show=this.list_receipt.slice(0, this.base_page);

      console.log(this.list_receipt);
      
      
    })
  }

  next_page(status:any,index:any){
    var total
    if(status=='next'){
      total = this.pages
      this.pages=total+index
      if(this.pages>this.list_receipt.length){
        this.pages=this.list_receipt.length
      }
      this.list_receipt_show=this.list_receipt.slice(total, this.pages);
    }else{
      if(this.pages==this.list_receipt.length){
        var mod = this.list_receipt.length%10
        this.pages = this.pages-mod        
      }else{
        this.pages = this.pages-index       
      }
      total=this.pages-index
      this.list_receipt_show=this.list_receipt.slice(total, this.pages);
    }
  }
}
