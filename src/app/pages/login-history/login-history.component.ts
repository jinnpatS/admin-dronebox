import { Component, OnInit } from '@angular/core';
import { CustomerUsageService } from 'src/app/service/customer-usage.service';

@Component({
  selector: 'app-login-history',
  templateUrl: './login-history.component.html',
  styleUrls: ['./login-history.component.css']
})
export class LoginHistoryComponent implements OnInit {
  list_login=[]
  list_login_show:any
  base_page=10
  pages=10

  search_text=''
  search_start_date=''
  search_end_date=''
  constructor(
    public usage : CustomerUsageService,

  ) { }

  ngOnInit(): void {
    this.list_login=[]
    this.usage.get_login().then((e:any) => {
      this.list_login=e
      this.list_login_show=this.list_login.slice(0, this.base_page);

      console.log(this.list_login, this.list_login_show);
      
      
    })
  }

  next_page(status:any,index:any){
    var total
    if(status=='next'){
      total = this.pages
      this.pages=total+index
      if(this.pages>this.list_login.length){
        this.pages=this.list_login.length
      }
      this.list_login_show=this.list_login.slice(total, this.pages);
    }else{
      if(this.pages==this.list_login.length){
        var mod = this.list_login.length%10
        this.pages = this.pages-mod        
      }else{
        this.pages = this.pages-index       
      }
      total=this.pages-index
      this.list_login_show=this.list_login.slice(total, this.pages);
    }
  }

  //search
  search_login(){
    let data = {
      search_text:this.search_text,
      search_start_date:this.search_start_date,
      search_end_date:this.search_end_date
    }
    this.usage.search_login(data).then((e:any) => {
      this.list_login=e
      this.list_login_show=this.list_login.slice(0, 10);

      console.log(this.list_login, this.list_login_show);
      
      
    })
  }

}
