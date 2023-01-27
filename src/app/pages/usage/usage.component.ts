import { Component, OnInit } from '@angular/core';
import { CustomerUsageService } from 'src/app/service/customer-usage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {
  list_customer_usage:any=[]
  list_customer_usage_filter:any=[]

  list_customer_usage_show:any
  base_page=10
  pages=10
  constructor(
    public usage:CustomerUsageService
  ) { }
  ngOnInit(): void {
    this.usage.get_usage_all().then(e=>{
      console.log(e);
      this.list_customer_usage=e
      this.list_customer_usage_filter=this.list_customer_usage
      this.list_customer_usage_show=this.list_customer_usage_filter.slice(0, this.base_page);

    })
  }

  filter(status:any){
    if(status=='all'){
      this.list_customer_usage_filter=this.list_customer_usage
      this.list_customer_usage_show=this.list_customer_usage_filter.slice(0, this.base_page);
    }else{
      this.list_customer_usage_filter = this.list_customer_usage.filter((e: any) => e.usage_status.match(status));
      this.list_customer_usage_show=this.list_customer_usage_filter.slice(0, this.base_page);
    }
    
  }

  next_page(status:any,index:any){
    var total
    if(status=='next'){
      total = this.pages
      this.pages=total+index

      if(this.pages>this.list_customer_usage.length){
        this.pages=this.list_customer_usage.length
      }
      this.list_customer_usage_show=this.list_customer_usage_filter.slice(total, this.pages);

    }else{

      if(this.pages==this.list_customer_usage.length){
        var mod = this.list_customer_usage.length%10
        this.pages = this.pages-mod        
      }else{
        this.pages = this.pages-index       
      }

      total=this.pages-index
      this.list_customer_usage_show=this.list_customer_usage_filter.slice(total, this.pages);

    }
    
  }

}
