import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from 'src/app/service/customer-detail.service';
import Swal from 'sweetalert2'

declare var $: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  list_customer=[]
  list_customer_show:any
  list_customer_base:any=[]


  list_customer_detail=[]
  list_customer_detail_show:any
  list_customer_detail_base:any=[]
  base_page=10
  pages=10
  constructor(
    public customerDetail : CustomerDetailService,
  ) { 

  }

  ngOnInit(): void {
    this.get_customer()
    this.get_customer_detail()
  }

  get_customer(){
    this.list_customer=[]
    this.customerDetail.get_customer().then((e:any) => {
      this.list_customer=e
      this.list_customer_base=e
      this.list_customer_show=this.list_customer.slice(0, this.base_page);
      console.log(this.list_customer);
    })
  }

  get_customer_detail(){
    this.list_customer_detail=[]
    this.customerDetail.get_customer_detail().then((e:any) => {
      this.list_customer_detail=e
      this.list_customer_detail_base=e
      this.list_customer_detail_show=this.list_customer_detail.slice(0, this.base_page);
      // console.log(this.list_customer_detail);
    })
  }

  next_page(data:any,status:any,index:any){
    var total
    if(data=='customer'){
      if(status=='next'){
        total = this.pages
        this.pages=total+index
  
        if(this.pages>this.list_customer.length){
          this.pages=this.list_customer.length
        }
        this.list_customer_show=this.list_customer.slice(total, this.pages);
  
      }else{
  
        if(this.pages==this.list_customer.length){
          var mod = this.list_customer.length%10
          this.pages = this.pages-mod        
        }else{
          this.pages = this.pages-index       
        }
  
        total=this.pages-index
        this.list_customer_show=this.list_customer.slice(total, this.pages);
  
      }
    }else{
      if(status=='next'){
        total = this.pages
        this.pages=total+index
  
        if(this.pages>this.list_customer_detail.length){
          this.pages=this.list_customer_detail.length
        }
        this.list_customer_detail_show=this.list_customer_detail.slice(total, this.pages);
  
      }else{
  
        if(this.pages==this.list_customer_detail.length){
          var mod = this.list_customer_detail.length%10
          this.pages = this.pages-mod        
        }else{
          this.pages = this.pages-index       
        }
  
        total=this.pages-index
        this.list_customer_detail_show=this.list_customer_detail.slice(total, this.pages);
  
      }
    }
    
    
  }

  search_text_1
  search_text_2
  search(index){
    if(index==1){
      this.list_customer= this.list_customer_base.filter((e : any)=>e.customer_name.match(this.search_text_1) 
      || e.customer_last_name.match(this.search_text_1) || e.email.match(this.search_text_1))
      // || e.address1.match(this.search_text_1)|| e.address2.match(this.search_text_1)|| e.city.match(this.search_text_1)|| e.state.match(this.search_text_1)
      // || e.country.match(this.search_text_1)|| e.zip_code.match(this.search_text_1))
      this.list_customer_show=this.list_customer.slice(0, this.pages);

    }else{
      this.list_customer_detail= this.list_customer_detail_base.filter((e : any)=>e.customer_name.match(this.search_text_2) || e.customer_last_name.match(this.search_text_2));
      this.list_customer_detail_show=this.list_customer_detail.slice(0, this.pages);
    }
  }
}
