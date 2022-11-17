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

  constructor(
    public customerDetail : CustomerDetailService,
  ) { 

  }

  ngOnInit(): void {
    this.get_customer()
  }

  get_customer(){
    this.list_customer=[]
    this.customerDetail.get_customer().then((e:any) => {
      this.list_customer=e
      console.log(this.list_customer);
      
      
    })
  }

}
